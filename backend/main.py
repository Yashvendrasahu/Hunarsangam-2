# backend/main.py
"""
HunarSangam AI & Backend Services
Powered by FastAPI, Supabase, and Artisan AI Modules.
"""

import os
import re
import math
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL", "")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY", "")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")

# Initialize optional Supabase client if keys are present
supabase_client = None
if SUPABASE_URL and (SUPABASE_SERVICE_ROLE_KEY or SUPABASE_ANON_KEY):
    try:
        from supabase import create_client, Client
        key_to_use = SUPABASE_SERVICE_ROLE_KEY if SUPABASE_SERVICE_ROLE_KEY else SUPABASE_ANON_KEY
        supabase_client: Optional[Client] = create_client(SUPABASE_URL, key_to_use)
    except Exception as e:
        print(f"[Supabase Init Warning] Could not initialize Supabase client: {e}")

app = FastAPI(
    title="HunarSangam AI & Backend API",
    description="Intelligent artisan fair-pricing, voice-to-query NLP, cluster dispatch & Supabase gateway",
    version="1.0.0",
)

# Enable CORS for Flutter Web, mobile, and dev host
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------
# Request & Response Schemas
# ---------------------------------------------------------

class FairPriceRequest(BaseModel):
    craft_category: str = Field(..., example="Terracotta Pottery")
    material_cost: float = Field(..., gt=0, example=180.0)
    labor_hours: float = Field(..., gt=0, example=6.5)
    artisan_tier: str = Field("master", example="master")  # apprentice, artisan, master
    complexity: str = Field("medium", example="high")      # low, medium, high
    batch_size: int = Field(1, ge=1, example=50)

class FairPriceResponse(BaseModel):
    fair_hourly_wage: float
    total_labor_cost: float
    material_cost_per_unit: float
    artisan_recommended_payout: float
    bulk_unit_price: float
    suggested_retail_price: float
    fair_margin_percent: float
    breakdown_notes: str
    currency: str = "INR"

class VoiceQueryRequest(BaseModel):
    transcript: str = Field(..., example="Humein 200 blue pottery vases chahiye Jaipur se agle mahine tak")
    preferred_language: Optional[str] = "hi"

class ParsedCraftQuery(BaseModel):
    craft_detected: str
    quantity_detected: int
    region_detected: str
    timeline_detected: str
    estimated_budget_min: float
    estimated_budget_max: float
    suggested_filters: Dict[str, Any]

class ProductDescriptionRequest(BaseModel):
    product_title: str
    craft_category: str
    artisan_name: str
    region: str
    materials_used: List[str]
    traditional_technique: Optional[str] = None

class ProductDescriptionResponse(BaseModel):
    title_en: str
    title_hi: str
    story_en: str
    story_hi: str
    craft_highlights: List[str]
    care_instructions: List[str]
    seo_tags: List[str]

class ClusterMatchRequest(BaseModel):
    craft_category: str
    required_units: int
    deadline_days: int
    target_budget: Optional[float] = None
    preferred_state: Optional[str] = None

class ClusterRecommendation(BaseModel):
    cluster_id: str
    cluster_name: str
    location: str
    active_artisans_count: int
    daily_production_capacity: int
    estimated_days_needed: int
    feasibility_score: float
    recommended_split: bool
    suggested_lead_artisan: str


# ---------------------------------------------------------
# Health & Status Endpoint
# ---------------------------------------------------------

@app.get("/health")
def health_check():
    return {
        "status": "online",
        "service": "HunarSangam AI & Backend Engine",
        "version": "1.0.0",
        "supabase_configured": bool(SUPABASE_URL and (SUPABASE_ANON_KEY or SUPABASE_SERVICE_ROLE_KEY)),
        "supabase_url": SUPABASE_URL[:20] + "..." if SUPABASE_URL else "Not set yet (waiting for user input)",
    }


# ---------------------------------------------------------
# 1. AI Fair-Price & Artisan Wage Estimator
# ---------------------------------------------------------

@app.post("/api/ai/fair-price-estimator", response_model=FairPriceResponse)
def calculate_fair_price(payload: FairPriceRequest):
    """
    Computes ethical living wage pricing for Indian handicrafts.
    Takes into account regional skilled craft minimum wages, intricate labor,
    and bulk quantity scaling.
    """
    # Base skilled craft wage baseline (INR/hour benchmark)
    tier_multipliers = {
        "apprentice": 100.0,
        "artisan": 160.0,
        "master": 240.0,
    }
    hourly_rate = tier_multipliers.get(payload.artisan_tier.lower(), 160.0)

    # Complexity coefficient
    complexity_factors = {
        "low": 1.0,
        "medium": 1.25,
        "high": 1.55,
    }
    comp_factor = complexity_factors.get(payload.complexity.lower(), 1.25)
    adjusted_hourly = hourly_rate * comp_factor

    # Total labor cost for single unit
    unit_labor_cost = payload.labor_hours * adjusted_hourly

    # Direct cost per unit
    base_cost = payload.material_cost + unit_labor_cost

    # Artisan dignity margin (20% ethical profit buffer)
    artisan_payout = base_cost * 1.22

    # Bulk discount scale (bulk buyers get economies of scale, but artisan wage remains untouched)
    if payload.batch_size >= 500:
        bulk_factor = 0.85
    elif payload.batch_size >= 100:
        bulk_factor = 0.90
    elif payload.batch_size >= 25:
        bulk_factor = 0.94
    else:
        bulk_factor = 1.0

    bulk_unit_price = round(artisan_payout * bulk_factor, 2)
    suggested_retail = round(artisan_payout * 1.65, 2)

    return FairPriceResponse(
        fair_hourly_wage=round(adjusted_hourly, 2),
        total_labor_cost=round(unit_labor_cost, 2),
        material_cost_per_unit=round(payload.material_cost, 2),
        artisan_recommended_payout=round(artisan_payout, 2),
        bulk_unit_price=bulk_unit_price,
        suggested_retail_price=suggested_retail,
        fair_margin_percent=22.0,
        breakdown_notes=(
            f"Calculated for {payload.artisan_tier.capitalize()} level ({payload.labor_hours} hrs/unit) "
            f"with {payload.complexity} craft complexity. Preserves fair living wages with zero middleman exploitation."
        ),
        currency="INR"
    )


# ---------------------------------------------------------
# 2. Multilingual Voice-to-Query Parser
# ---------------------------------------------------------

@app.post("/api/ai/voice-to-query", response_model=ParsedCraftQuery)
def parse_voice_query(payload: VoiceQueryRequest):
    """
    Parses natural Hindi / Hinglish / English voice transcripts from bulk buyers
    and converts them into structured search filters.
    """
    text = payload.transcript.lower()

    # Detect craft
    craft = "Handicrafts & Decor"
    if any(k in text for k in ["blue pottery", "pottery", "ceramic", "mitti", "terracotta", "gamla"]):
        craft = "Terracotta & Blue Pottery"
    elif any(k in text for k in ["saree", "chanderi", "banarasi", "shawl", "pashmina", "dupatta", "textile"]):
        craft = "Handloom & Textiles"
    elif any(k in text for k in ["wood", "wooden", "teak", "sheesham", "carving", "lakdi"]):
        craft = "Wood Carving & Marquetry"
    elif any(k in text for k in ["brass", "metal", "dhokra", "copper", "peetal"]):
        craft = "Dhokra & Brass Metalcraft"
    elif any(k in text for k in ["leather", "jutti", "kolhapuri", "chappal"]):
        craft = "Leather Crafts & Juttis"
    elif any(k in text for k in ["madhubani", "warli", "painting", "pattachitra"]):
        craft = "Traditional Painting & Folk Art"

    # Detect quantity numbers
    numbers = re.findall(r"\b(\d+)\b", text)
    quantity = int(numbers[0]) if numbers else 50
    if "sau" in text or "hundred" in text:
        quantity = max(quantity, 100)
    elif "hazaar" in text or "thousand" in text:
        quantity = max(quantity, 1000)

    # Detect region
    region = "Pan-India"
    if any(k in text for k in ["jaipur", "rajasthan", "jodhpur"]):
        region = "Rajasthan (Jaipur/Jodhpur)"
    elif any(k in text for k in ["varanasi", "banaras", "up", "lucknow"]):
        region = "Uttar Pradesh (Varanasi/Lucknow)"
    elif any(k in text for k in ["bengal", "kolkata", "shantiniketan"]):
        region = "West Bengal"
    elif any(k in text for k in ["madhya pradesh", "chanderi", "bhopal"]):
        region = "Madhya Pradesh"
    elif any(k in text for k in ["kashmir", "srinagar"]):
        region = "Jammu & Kashmir"
    elif any(k in text for k in ["karnataka", "channapatna", "mysore"]):
        region = "Karnataka"

    # Detect timeline
    timeline = "Standard (3-4 weeks)"
    if any(k in text for k in ["urgent", "jaldi", "week", "hafte", "turant"]):
        timeline = "Urgent (7-10 days)"
    elif any(k in text for k in ["diwali", "festive", "navratri"]):
        timeline = "Festive Sourcing Window (2-3 weeks)"
    elif any(k in text for k in ["month", "mahine"]):
        timeline = "Within 30 Days"

    est_budget_min = quantity * 250.0
    est_budget_max = quantity * 750.0

    return ParsedCraftQuery(
        craft_detected=craft,
        quantity_detected=quantity,
        region_detected=region,
        timeline_detected=timeline,
        estimated_budget_min=est_budget_min,
        estimated_budget_max=est_budget_max,
        suggested_filters={
            "craft_category": craft,
            "min_units": quantity,
            "geo_scope": region,
            "dispatch_urgency": timeline,
            "escrow_enabled": True,
        }
    )


# ---------------------------------------------------------
# 3. Bilingual Artisan Product Story & Description
# ---------------------------------------------------------

@app.post("/api/ai/product-description", response_model=ProductDescriptionResponse)
def generate_product_story(payload: ProductDescriptionRequest):
    """
    Generates authentic, heritage-grounded product descriptions in both
    English and Hindi to connect bulk buyers with artisan lineages.
    """
    materials_str = ", ".join(payload.materials_used)
    technique = payload.traditional_technique or "Age-old traditional handcrafting"

    title_en = f"Authentic Handcrafted {payload.product_title}"
    title_hi = f"प्रामाणिक हस्तनिर्मित {payload.product_title}"

    story_en = (
        f"Handcrafted with profound mastery by {payload.artisan_name} from the revered artisan "
        f"cluster of {payload.region}. This piece embodies generations of craft lineage using authentic "
        f"{materials_str}. Created through {technique}, each article carries subtle organic variations "
        f"that celebrate the human hand."
    )

    story_hi = (
        f"{payload.region} के प्रतिष्ठित शिल्पकार {payload.artisan_name} द्वारा हस्तनिर्मित। "
        f"यह उत्कृष्ट कृति प्राकृतिक {materials_str} और {technique} की पारंपरिक विधि से तैयार की गई है। "
        f"प्रत्येक उत्पाद भारतीय सांस्कृतिक धरोहर और शिल्प कौशल का सजीव प्रतीक है।"
    )

    highlights = [
        f"100% Handcrafted by registered master artisan: {payload.artisan_name}",
        f"Craft Heritage: {payload.craft_category} from {payload.region}",
        f"Materials: Eco-friendly {materials_str}",
        "Fair-Trade Certified: Direct artisan payout with zero exploitative cuts",
        "Batch customization available for bulk commercial orders",
    ]

    care = [
        "Dust gently with a clean, dry microfiber cloth.",
        "Avoid direct exposure to harsh chemical cleaners or prolonged submersions.",
        "Store in a dry, shaded space to maintain natural color integrity.",
    ]

    tags = [
        payload.craft_category.lower().replace(" ", "-"),
        payload.region.lower().replace(" ", "-"),
        "indian-handicrafts",
        "ethical-sourcing",
        "b2b-artisan-direct",
        "make-in-india",
    ]

    return ProductDescriptionResponse(
        title_en=title_en,
        title_hi=title_hi,
        story_en=story_en,
        story_hi=story_hi,
        craft_highlights=highlights,
        care_instructions=care,
        seo_tags=tags,
    )


# ---------------------------------------------------------
# 4. Cluster Matchmaking & Capacity Planner
# ---------------------------------------------------------

@app.post("/api/ai/cluster-matching", response_model=List[ClusterRecommendation])
def match_clusters(payload: ClusterMatchRequest):
    """
    Dispatches large buyer inquiries to regional self-help groups (SHGs)
    or artisan clusters capable of meeting scale without sacrificing quality.
    """
    # Sample intelligent cluster database
    clusters = [
        {
            "id": "CLUST-RJ-JP-01",
            "name": "Sanganer Blue Pottery Sahakari Samiti",
            "location": "Jaipur, Rajasthan",
            "craft": "Terracotta & Blue Pottery",
            "artisans": 34,
            "daily_capacity": 45,
            "lead": "Padma Shri Awardee Kripal Lineage Guild",
        },
        {
            "id": "CLUST-UP-VN-02",
            "name": "Kashi Handloom Weavers Producer Co.",
            "location": "Varanasi, Uttar Pradesh",
            "craft": "Handloom & Textiles",
            "artisans": 62,
            "daily_capacity": 80,
            "lead": "Ustad Munna Ansari & Collective",
        },
        {
            "id": "CLUST-KA-CP-03",
            "name": "Channapatna Wooden Toys Federation",
            "location": "Ramanagara, Karnataka",
            "craft": "Wood Carving & Marquetry",
            "artisans": 40,
            "daily_capacity": 65,
            "lead": "Rukmini Woodcraft Cluster",
        },
        {
            "id": "CLUST-OD-DK-04",
            "name": "Dhenkanal Dhokra Casting Guild",
            "location": "Dhenkanal, Odisha",
            "craft": "Dhokra & Brass Metalcraft",
            "artisans": 28,
            "daily_capacity": 30,
            "lead": "Gajapati Bell Metal Union",
        },
    ]

    results: List[ClusterRecommendation] = []

    for c in clusters:
        capacity = c["daily_capacity"]
        days_needed = math.ceil(payload.required_units / max(capacity, 1))
        feasibility = max(0.0, min(100.0, 100.0 - (days_needed - payload.deadline_days) * 8))
        needs_split = payload.required_units > (capacity * payload.deadline_days)

        results.append(
            ClusterRecommendation(
                cluster_id=c["id"],
                cluster_name=c["name"],
                location=c["location"],
                active_artisans_count=c["artisans"],
                daily_production_capacity=capacity,
                estimated_days_needed=days_needed,
                feasibility_score=round(feasibility, 1),
                recommended_split=needs_split,
                suggested_lead_artisan=c["lead"],
            )
        )

    # Sort by feasibility score descending
    results.sort(key=lambda x: x.feasibility_score, reverse=True)
    return results


# ---------------------------------------------------------
# 5. Direct Supabase Query Helpers (Optional Gateway)
# ---------------------------------------------------------

@app.get("/api/supabase/status")
def supabase_status():
    """
    Returns current Supabase connection status.
    Flutter connects directly via Dart, but this endpoint lets the user
    verify that credentials reach the backend as well.
    """
    if not SUPABASE_URL or not (SUPABASE_ANON_KEY or SUPABASE_SERVICE_ROLE_KEY):
        return {
            "connected": False,
            "message": "Supabase credentials are not yet configured in .env. Waiting for URL & Key.",
            "direct_flutter_mode": "Active (Flutter connects directly via Dart supabase_flutter client)",
        }

    return {
        "connected": True,
        "supabase_url": SUPABASE_URL,
        "mode": "Ready for real-time queries and storage uploads",
    }
