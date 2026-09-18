import React, { useState } from 'react';
import {
  ArrowLeft,
  Share2,
  Bookmark,
  CheckCircle2,
  Volume2,
  Sparkles,
  ChevronRight,
  TrendingUp,
  MapPin,
  Calendar,
  Layers,
  Edit2,
  FileText,
  Play,
  Pause,
  ArrowRight,
  Eye,
  Sliders,
  Check,
  Building2,
  ShoppingBag,
  Award,
  Users,
  Mic,
  MessageSquare,
  Globe,
  Radio,
  Clock,
  ExternalLink,
  Info,
  Scale,
  DollarSign,
  Leaf,
  ShieldCheck,
} from 'lucide-react';
import { BuyerRequirementBottomNav } from './BuyerRequirementScreens';

interface ScreenProps {
  onNavigate: (index: number, toastMsg?: string) => void;
  onBack?: () => void;
  showToast: (msg: string) => void;
}

// -------------------------------------------------------------
// 45. REVIEW & MATCH SCREEN (matching r5-bulk — Find Artisan Matches.png)
// -------------------------------------------------------------
export const BuyerReviewMatchScreenView: React.FC<ScreenProps> = ({ onNavigate, onBack, showToast }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between bg-[#FCF9F6] text-[#1F1612] font-sans overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-[#FCF9F6] z-20 border-b border-[#F0E5DC] px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 rounded-full hover:bg-[#F3E7DC]">
            <ArrowLeft className="w-5 h-5 text-[#1F1612]" />
          </button>
          <h1 className="text-base font-black text-[#9C3C18]">Review & Match</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D1FAE5] border border-[#A7F3D0] text-[#065F46] text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
            Ready to Match
          </span>
          <button
            onClick={() => showToast('Language switched to Hindi')}
            className="p-1.5 rounded-lg bg-[#F5ECE5] text-[#9C3C18] hover:bg-[#EADBCE]"
          >
            <Globe className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <h2 className="text-lg font-black text-[#1F1612] tracking-tight">Requirement Ready for Matching</h2>
          <p className="text-xs text-[#6B5A4E] mt-0.5 leading-relaxed">
            Review your bulk sourcing specifications before our algorithm identifies suitable artisan clusters.
          </p>
        </div>

        {/* Big Specification Review Card */}
        <div className="bg-[#FFF9F5] rounded-2xl border border-[#F3E3D7] p-4 shadow-sm space-y-3.5">
          {/* Product Header */}
          <div className="flex items-start gap-3">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=160&q=80"
              alt="Bamboo basket"
              className="w-16 h-16 rounded-xl object-cover border border-[#EBD6C7]"
            />
            <div className="flex-1 min-w-0">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FAF0E7] border border-[#EBD6C7] text-[10px] font-bold text-[#9C3C18]">
                <ShieldCheck className="w-3 h-3 text-[#9C3C18]" />
                Bamboo Handicraft
              </span>
              <h3 className="text-sm font-black text-[#1F1612] mt-1 leading-snug">
                Handwoven Bamboo Fruit Basket
              </h3>
              <p className="text-[10px] font-bold text-[#7A6A60]">ID: HS-BLK-883492</p>
            </div>
          </div>

          <div className="h-px bg-[#EFE2D8]" />

          {/* Specs Rows */}
          <div className="space-y-3">
            {/* Quantity */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#F7ECE4] text-[#9C3C18] mt-0.5">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-[#7A6A60] tracking-wider">QUANTITY</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm font-black text-[#1F1612]">500 pieces</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#FDECE2] text-[#9C3C18] text-[10px] font-bold">
                      Medium Bulk Tier
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => showToast('Edit Quantity')} className="flex items-center gap-1 text-[11px] font-bold text-[#9C3C18] hover:underline">
                <Edit2 className="w-3 h-3" /> Edit
              </button>
            </div>

            {/* Target Delivery Date */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#F7ECE4] text-[#9C3C18] mt-0.5">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-[#7A6A60] tracking-wider">TARGET DELIVERY DATE</p>
                  <p className="text-sm font-black text-[#1F1612] mt-0.5">28 October 2026</p>
                  <p className="text-[11px] text-[#7A6A60]">(Flexible ±7 days)</p>
                </div>
              </div>
              <button onClick={() => showToast('Edit Delivery Date')} className="flex items-center gap-1 text-[11px] font-bold text-[#9C3C18] hover:underline">
                <Edit2 className="w-3 h-3" /> Edit
              </button>
            </div>

            {/* Target Budget */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#F7ECE4] text-[#9C3C18] mt-0.5">
                  <DollarSign className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-[#7A6A60] tracking-wider">TARGET BUDGET</p>
                  <p className="text-sm font-black text-[#1F1612] mt-0.5">
                    ₹380 / pc <span className="text-[11px] font-normal text-[#7A6A60]">(~₹1,90,000 total)</span>
                  </p>
                </div>
              </div>
              <button onClick={() => showToast('Edit Budget')} className="flex items-center gap-1 text-[11px] font-bold text-[#9C3C18] hover:underline">
                <Edit2 className="w-3 h-3" /> Edit
              </button>
            </div>

            {/* Customizations */}
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#F7ECE4] text-[#9C3C18] mt-0.5">
                  <Sliders className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[9px] font-black text-[#7A6A60] tracking-wider">CUSTOMIZATIONS</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    <span className="px-2 py-0.5 rounded bg-[#EDE0D4] text-[#3E2C22] text-[10px] font-semibold">
                      Custom 10–inch size
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#EDE0D4] text-[#3E2C22] text-[10px] font-semibold">
                      Logo kraft hangtag
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#EDE0D4] text-[#3E2C22] text-[10px] font-semibold">
                      Recycled individual box
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={() => showToast('Edit Customizations')} className="flex items-center gap-1 text-[11px] font-bold text-[#9C3C18] hover:underline">
                <Edit2 className="w-3 h-3" /> Edit
              </button>
            </div>
          </div>

          <div className="h-px bg-[#EFE2D8]" />

          {/* Attached Visual Reference */}
          <div>
            <div className="flex items-center justify-between text-[10px] font-black text-[#7A6A60] mb-2 tracking-wider">
              <span className="flex items-center gap-1 text-[#9C3C18]">
                <FileText className="w-3.5 h-3.5" /> ATTACHED VISUAL REFERENCE
              </span>
              <span>1 File attached</span>
            </div>
            <div className="bg-white rounded-xl border border-[#EADBCE] p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=120&q=80"
                  alt="ref"
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[#1F1612] truncate">bamboo_basket_dualrim_spec.jpg</p>
                  <p className="text-[10px] text-[#7A6A60]">2.4 MB • Reference Image</p>
                </div>
              </div>
              <button onClick={() => showToast('Previewing full resolution image')} className="p-1.5 text-[#9C3C18] hover:bg-[#FAF0E7] rounded-lg">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="h-px bg-[#EFE2D8]" />

          {/* Buyer Audio Brief & Transcript */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-1 text-[10px] font-black text-[#7A6A60] tracking-wider leading-tight">
                <Radio className="w-3.5 h-3.5 text-[#9C3C18]" /> BUYER AUDIO BRIEF &<br />TRANSCRIPT
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46] text-[9px] font-bold text-center leading-tight">
                Verified<br />Voice
              </span>
            </div>
            <div className="bg-white rounded-xl border border-[#EADBCE] p-3 space-y-2.5">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    showToast(isPlaying ? 'Paused Audio Brief' : 'Playing Audio Brief');
                  }}
                  className="w-8 h-8 rounded-full bg-[#9C3C18] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <div className="flex-1 h-1.5 bg-[#F3E5DC] rounded-full overflow-hidden">
                  <div className="h-full bg-[#9C3C18] w-[41%] rounded-full"></div>
                </div>
                <span className="text-[10px] font-bold text-[#7A6A60]">0:24 / 0:58</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF2EB] text-[11px] italic text-[#3B2A22] leading-relaxed">
                "Need 500 handwoven natural bamboo fruit baskets with reinforced dual-rim finish. Should comfortably hold 3–4 kg weight. Delivery needed in Delhi warehouse by late October with food-safe organic polish."
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2 space-y-2 pb-2">
          <button
            onClick={() => onNavigate(46, 'Searching matching artisan clusters...')}
            className="w-full py-3.5 px-4 bg-[#9C3C18] text-white rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-md hover:bg-[#833013] active:scale-[0.99] transition-all cursor-pointer"
          >
            Publish & Find Matching Artisans <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#7A6A60]">
            <Radio className="w-3.5 h-3.5 text-[#9C3C18]" />
            <span>Ready to connect with qualified master artisans across India.</span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <BuyerRequirementBottomNav activeTab="requirement" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};

// -------------------------------------------------------------
// 46. MATCHED ARTISANS SCREEN (matching r6-bulk — Artisan Match & Comparison.png)
// -------------------------------------------------------------
export const BuyerMatchedArtisansScreenView: React.FC<ScreenProps> = ({ onNavigate, onBack, showToast }) => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>(['ramesh', 'biren']);

  const toggleCompare = (id: string) => {
    if (selectedForCompare.includes(id)) {
      setSelectedForCompare(selectedForCompare.filter((item) => item !== id));
    } else {
      setSelectedForCompare([...selectedForCompare, id]);
    }
  };

  return (
    <div className="h-full flex flex-col justify-between bg-[#FCF9F6] text-[#1F1612] font-sans overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-[#FCF9F6] z-20 border-b border-[#F0E5DC] px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 rounded-full hover:bg-[#F3E7DC]">
            <ArrowLeft className="w-5 h-5 text-[#1F1612]" />
          </button>
          <h1 className="text-lg font-black text-[#1F1612]">Matched Artisans</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('Language selection')}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#E5D5C8] text-[#1F1612] text-[11px] font-bold shadow-sm cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#9C3C18]" /> English
          </button>
          <button onClick={() => showToast('Filter options')} className="p-1.5 rounded-lg text-[#1F1612] hover:bg-[#F5ECE5] cursor-pointer">
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Active Requirement Hero Card */}
        <div className="bg-[#FFF7F2] rounded-2xl border border-[#F7DEC9] p-4 shadow-sm space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FDECE0] border border-[#F3D2BA] text-[#9C3C18] text-[10px] font-black">
              <Sparkles className="w-3 h-3 text-[#9C3C18]" /> AI–Assisted Matching for Your Requirement
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-[#7A6A60] cursor-pointer" onClick={() => onNavigate(45)} />
          </div>
          <h2 className="text-lg font-black text-[#1F1612] leading-tight">500 Handwoven<br />Bamboo Baskets</h2>
          <div className="flex items-center gap-3 text-[11px] font-bold text-[#1F1612]">
            <span className="flex items-center gap-1 text-[#9C3C18]"><DollarSign className="w-3.5 h-3.5" /> Target: ₹380/pc</span>
            <span className="flex items-center gap-1 text-[#9C3C18]"><Calendar className="w-3.5 h-3.5" /> By Oct 28</span>
          </div>
          <p className="text-[10px] text-[#7A6A60]">Requirement ID: #HS-BKT-892</p>
          <div className="bg-[#FAF0E6] rounded-xl p-2.5 flex items-start gap-2">
            <Info className="w-3.5 h-3.5 text-[#9C3C18] shrink-0 mt-0.5" />
            <p className="text-[10.5px] text-[#5A483E] leading-relaxed">
              AI-assisted suggestions based on craft specialty, monthly capacity & delivery timeline. You make the final choice.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {[
            { id: 0, label: 'All Matches (6)' },
            { id: 1, label: '✓ GI Certified (4)' },
            { id: 2, label: 'Under ₹400' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#9C3C18] text-white shadow-sm'
                  : 'bg-[#FAF2EB] text-[#4A382D] border border-[#E5D5C8] hover:bg-[#F3E5DA]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Artisan Card 1: Ramesh Kumar */}
        <div className="bg-white rounded-3xl border-2 border-[#F0E0D4] p-3 shadow-sm space-y-3">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
              alt="Ramesh"
              className="w-full h-44 object-cover"
            />
            <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold flex items-center gap-1 shadow-sm">
              <ShieldCheck className="w-3 h-3 text-[#065F46]" /> GI Lead
            </span>
            <button
              onClick={() => showToast("Playing Ramesh's craft voice note")}
              className="absolute bottom-2.5 inset-x-2.5 py-1.5 rounded-full bg-black/65 backdrop-blur-sm text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" /> Craft Voice Note
            </button>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-black text-[#1F1612]">Ramesh Kumar</h3>
                <span className="px-1.5 py-0.5 rounded bg-[#A7F3D0] text-[#065F46] text-[9px] font-bold">
                  Master Craftsman
                </span>
              </div>
              <p className="text-[10px] text-[#7A6A60] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#9C3C18]" /> Barpeta, Assam • GI Cluster Lead
              </p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-bold text-[#7A6A60]">Price Guidance</p>
              <p className="text-sm font-black text-[#9C3C18]">₹350 – ₹390</p>
              <p className="text-[9px] text-[#7A6A60]">/ piece</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#FAF2EB] rounded-xl p-2">
              <p className="text-[9px] text-[#7A6A60]">Monthly Capacity</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">500 – 800 pcs/mo</p>
            </div>
            <div className="bg-[#FAF2EB] rounded-xl p-2">
              <p className="text-[9px] text-[#7A6A60]">Mastery & Experience</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">28 yrs experience</p>
            </div>
          </div>

          {/* Bullet points */}
          <div className="space-y-1 text-[11px] text-[#3B2A22]">
            <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Specializes in double–rim bamboo baskets</p>
            <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Has ready bamboo seasoned stock</p>
            <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Historical 99% on-time dispatch rate</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-[#1F1612] pr-1">
              <input
                type="checkbox"
                checked={selectedForCompare.includes('ramesh')}
                onChange={() => toggleCompare('ramesh')}
                className="w-4 h-4 rounded text-[#9C3C18] accent-[#9C3C18]"
              />
              Compare
            </label>
            <button
              onClick={() => showToast('Sample requested from Ramesh Kumar')}
              className="flex-1 py-2 px-2 border border-[#DFC8BA] rounded-xl text-[10px] font-bold text-[#1F1612] hover:bg-[#FAF0E7] text-center cursor-pointer"
            >
              Request Sample
            </button>
            <button
              onClick={() => onNavigate(48, 'Opening Ramesh Kumar profile')}
              className="flex-1 py-2 px-2 bg-[#9C3C18] text-white rounded-xl text-[10px] font-black hover:bg-[#833013] flex items-center justify-center gap-1 shadow-sm cursor-pointer"
            >
              View Artisan <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Artisan Card 2: Biren Das */}
        <div className="bg-white rounded-3xl border-2 border-[#F0E0D4] p-3 shadow-sm space-y-3">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
              alt="Biren"
              className="w-full h-44 object-cover"
            />
            <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold flex items-center gap-1 shadow-sm">
              <Award className="w-3 h-3 text-[#92400E]" /> Guild Lead
            </span>
            <button
              onClick={() => showToast("Playing Biren's craft voice note")}
              className="absolute bottom-2.5 inset-x-2.5 py-1.5 rounded-full bg-black/65 backdrop-blur-sm text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" /> Craft Voice Note
            </button>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-black text-[#1F1612]">Biren Das</h3>
                <span className="px-1.5 py-0.5 rounded bg-[#FDE68A] text-[#92400E] text-[9px] font-bold">
                  Guild President
                </span>
              </div>
              <p className="text-[10px] text-[#7A6A60] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#9C3C18]" /> Cachar, Assam • Silchar Bamboo Guild
              </p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-bold text-[#7A6A60]">Price Guidance</p>
              <p className="text-sm font-black text-[#9C3C18]">₹360 – ₹410</p>
              <p className="text-[9px] text-[#7A6A60]">/ piece</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#FAF2EB] rounded-xl p-2">
              <p className="text-[9px] text-[#7A6A60]">Monthly Capacity</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">350 – 500 pcs/mo</p>
            </div>
            <div className="bg-[#FAF2EB] rounded-xl p-2">
              <p className="text-[9px] text-[#7A6A60]">Mastery & Experience</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">24 yrs experience</p>
            </div>
          </div>

          {/* Bullet points */}
          <div className="space-y-1 text-[11px] text-[#3B2A22]">
            <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Export documented & tested quality standard</p>
            <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Natural smoke treatment certified against pests</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-[#1F1612] pr-1">
              <input
                type="checkbox"
                checked={selectedForCompare.includes('biren')}
                onChange={() => toggleCompare('biren')}
                className="w-4 h-4 rounded text-[#9C3C18] accent-[#9C3C18]"
              />
              Compare
            </label>
            <button
              onClick={() => showToast('Sample requested from Biren Das')}
              className="flex-1 py-2 px-2 border border-[#DFC8BA] rounded-xl text-[10px] font-bold text-[#1F1612] hover:bg-[#FAF0E7] text-center cursor-pointer"
            >
              Request Sample
            </button>
            <button
              onClick={() => onNavigate(47, 'Comparing Biren Das & Ramesh Kumar')}
              className="flex-1 py-2 px-2 bg-[#9C3C18] text-white rounded-xl text-[10px] font-black hover:bg-[#833013] flex items-center justify-center gap-1 shadow-sm cursor-pointer"
            >
              View Artisan <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Artisan Card 3: Sunita Devi */}
        <div className="bg-white rounded-3xl border-2 border-[#F0E0D4] p-3 shadow-sm space-y-3">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Sunita"
              className="w-full h-44 object-cover"
            />
            <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold flex items-center gap-1 shadow-sm">
              <Users className="w-3 h-3 text-[#065F46]" /> Women SHG
            </span>
            <button
              onClick={() => showToast("Playing Sunita's craft voice note")}
              className="absolute bottom-2.5 inset-x-2.5 py-1.5 rounded-full bg-black/65 backdrop-blur-sm text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" /> Craft Voice Note
            </button>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-black text-[#1F1612]">Sunita Devi</h3>
                <span className="px-1.5 py-0.5 rounded bg-[#A7F3D0] text-[#065F46] text-[9px] font-bold">
                  Cooperative Lead
                </span>
              </div>
              <p className="text-[10px] text-[#7A6A60] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#9C3C18]" /> Barpeta Women SHG • 42 Artisan Weavers
              </p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-bold text-[#7A6A60]">Price Guidance</p>
              <p className="text-sm font-black text-[#9C3C18]">₹340 – ₹380</p>
              <p className="text-[9px] text-[#7A6A60]">/ piece</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-[#FAF2EB] rounded-xl p-2">
              <p className="text-[9px] text-[#7A6A60]">Monthly Capacity</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">400 pcs/mo</p>
            </div>
            <div className="bg-[#FAF2EB] rounded-xl p-2">
              <p className="text-[9px] text-[#7A6A60]">Batch Delivery Time</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">18 – 22 Days</p>
            </div>
          </div>

          {/* Bullet points */}
          <div className="space-y-1 text-[11px] text-[#3B2A22]">
            <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#10B981]" /> High capacity organic weaving & split cane processing</p>
            <p className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Fair wage certified cooperative enterprise</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1">
            <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-[#1F1612] pr-1">
              <input
                type="checkbox"
                checked={selectedForCompare.includes('sunita')}
                onChange={() => toggleCompare('sunita')}
                className="w-4 h-4 rounded text-[#9C3C18] accent-[#9C3C18]"
              />
              Compare
            </label>
            <button
              onClick={() => showToast('Sample requested from Sunita Devi')}
              className="flex-1 py-2 px-2 border border-[#DFC8BA] rounded-xl text-[10px] font-bold text-[#1F1612] hover:bg-[#FAF0E7] text-center cursor-pointer"
            >
              Request Sample
            </button>
            <button
              onClick={() => showToast('Opening Sunita Devi profile')}
              className="flex-1 py-2 px-2 bg-[#9C3C18] text-white rounded-xl text-[10px] font-black hover:bg-[#833013] flex items-center justify-center gap-1 shadow-sm cursor-pointer"
            >
              View Artisan <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Comparison Bar (Docked right above bottom nav) */}
      {selectedForCompare.length > 0 && (
        <div className="bg-[#FBEFE6] border-t border-[#F2D7C2] px-4 py-2.5 flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-[#9C3C18] text-white text-xs font-black flex items-center justify-center shrink-0">
              {selectedForCompare.length}
            </span>
            <div>
              <p className="text-[11px] font-black text-[#1F1612] leading-tight">
                {selectedForCompare.length} Artisans selected for comparison
              </p>
              <p className="text-[10px] text-[#7A6A60]">
                {selectedForCompare.includes('ramesh') && selectedForCompare.includes('biren')
                  ? 'Ramesh Kumar & Biren Das'
                  : 'Selected artisan clusters'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate(47, 'Opening side-by-side comparison...')}
            className="px-3.5 py-1.5 bg-[#9C3C18] text-white text-[10.5px] font-black rounded-xl shadow-md hover:bg-[#833013] flex items-center gap-1 leading-tight text-center cursor-pointer shrink-0"
          >
            <Scale className="w-3.5 h-3.5" /> Compare<br />Artisans ({selectedForCompare.length})
          </button>
        </div>
      )}

      {/* Bottom Nav */}
      <BuyerRequirementBottomNav activeTab="requirement" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};

// -------------------------------------------------------------
// 47. COMPARE ARTISANS SCREEN (matching r7-bulk ai artisan matching in bulk side.png)
// -------------------------------------------------------------
export const BuyerCompareArtisansScreenView: React.FC<ScreenProps> = ({ onNavigate, onBack, showToast }) => {
  return (
    <div className="h-full flex flex-col justify-between bg-[#FCF9F6] text-[#1F1612] font-sans overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-[#FCF9F6] z-20 border-b border-[#F0E5DC] px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 rounded-full hover:bg-[#F3E7DC]">
            <ArrowLeft className="w-5 h-5 text-[#1F1612]" />
          </button>
          <div>
            <h1 className="text-base font-black text-[#1F1612]">Compare Artisans</h1>
            <p className="text-[10px] text-[#7A6A60]">Review verified master profiles...</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('Language selection')}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-[#E5D5C8] text-[#1F1612] text-[11px] font-bold shadow-sm cursor-pointer"
          >
            English <ChevronRight className="w-3 h-3 rotate-90" />
          </button>
          <button onClick={() => showToast('Comparison options')} className="p-1.5 rounded-lg text-[#1F1612] hover:bg-[#F5ECE5] cursor-pointer">
            <Sliders className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Active Requirement Banner */}
        <div className="bg-[#FFF7F2] rounded-2xl border border-[#F7DEC9] p-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-[#9C3C18] tracking-wider">ACTIVE BULK REQUIREMENT</span>
            <span className="text-[10px] font-bold text-[#7A6A60]">#HS-BKT-892</span>
          </div>
          <h2 className="text-base font-black text-[#1F1612]">500 Handwoven Bamboo Baskets</h2>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FAF0E8] border border-[#EBD7CA] text-[10px] font-bold text-[#3D2C22]">
              <DollarSign className="w-3 h-3 text-[#9C3C18]" /> Target: ₹380 / pc
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FAF0E8] border border-[#EBD7CA] text-[10px] font-bold text-[#3D2C22]">
              <Calendar className="w-3 h-3 text-[#9C3C18]" /> Delivery by Oct 28
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#D1FAE5] border border-[#A7F3D0] text-[10px] font-bold text-[#065F46]">
              <ShieldCheck className="w-3 h-3 text-[#065F46]" /> Verified Artisans
            </span>
          </div>
        </div>

        {/* AI Comparison Intro */}
        <div className="bg-[#FFF6EE] rounded-2xl border border-[#F7DEC9] p-3 flex items-start gap-2.5">
          <div className="p-1.5 rounded-lg bg-[#FCE9DB] text-[#9C3C18] mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-black text-[#9C3C18]">AI–Assisted Craft Comparison</h3>
            <p className="text-[10.5px] text-[#5A483E] mt-0.5 leading-relaxed">
              We've organized the available cluster information side-by-side to help you evaluate artisan capacity. You make the final choice.
            </p>
          </div>
        </div>

        {/* 2 Artisans Selected */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="flex items-center gap-1.5 text-xs font-black text-[#1F1612]">
              <span className="w-2 h-2 rounded-full bg-[#9C3C18]"></span>
              2 Artisans Selected for Evaluation
            </span>
            <button onClick={() => onNavigate(46)} className="text-[11px] font-bold text-[#9C3C18] hover:underline cursor-pointer">
              Change Selection &gt;
            </button>
          </div>

          {/* Dual Mini Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Ramesh mini */}
            <div className="bg-white rounded-2xl border border-[#F0E0D4] p-2.5 space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=120&q=80"
                  alt="Ramesh"
                  className="w-9 h-9 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <span className="px-1.5 py-0.5 rounded bg-[#D1FAE5] text-[#065F46] text-[8.5px] font-bold">
                    GI Craft
                  </span>
                  <p className="text-xs font-black text-[#1F1612] truncate">Ramesh Kumar</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#9C3C18]">Master Craftsman</p>
                <p className="text-[9.5px] text-[#7A6A60] truncate">Barpeta, Assam • GI Cl...</p>
              </div>
              <button
                onClick={() => showToast("Playing Ramesh's note (0:42)")}
                className="w-full py-1 rounded-xl bg-[#FAF0E7] border border-[#EBD7C9] text-[9.5px] font-bold text-[#9C3C18] flex items-center justify-center gap-1 cursor-pointer"
              >
                <Volume2 className="w-3 h-3" /> Craft Voice Note 0:42
              </button>
            </div>

            {/* Biren mini */}
            <div className="bg-white rounded-2xl border border-[#F0E0D4] p-2.5 space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Biren"
                  className="w-9 h-9 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <span className="px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] text-[8.5px] font-bold">
                    Guild Lead
                  </span>
                  <p className="text-xs font-black text-[#1F1612] truncate">Biren Das</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#92400E]">Guild President</p>
                <p className="text-[9.5px] text-[#7A6A60] truncate">Cachar, Assam • Silchar...</p>
              </div>
              <button
                onClick={() => showToast("Playing Biren's note (0:35)")}
                className="w-full py-1 rounded-xl bg-[#FAF0E7] border border-[#EBD7C9] text-[9.5px] font-bold text-[#9C3C18] flex items-center justify-center gap-1 cursor-pointer"
              >
                <Volume2 className="w-3 h-3" /> Craft Voice Note 0:35
              </button>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="bg-white rounded-3xl border border-[#F0E0D4] p-3.5 space-y-3.5 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#F3E7DC] pb-2">
            <span className="text-[11px] font-black text-[#1F1612] tracking-wider">
              DIRECT ATTRIBUTE COMPARISON
            </span>
            <span className="text-[9.5px] text-[#7A6A60] text-right">Self-reported & Verified Data</span>
          </div>

          {/* Price Guidance */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-black text-[#7A6A60]">
              <span className="flex items-center gap-1 text-[#9C3C18]">
                <DollarSign className="w-3.5 h-3.5" /> PRICE GUIDANCE
              </span>
              <Info className="w-3.5 h-3.5 text-[#7A6A60]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#FFF7F2] border border-[#F5E0D2] rounded-xl p-2">
                <p className="text-sm font-black text-[#9C3C18]">₹350 – ₹390</p>
                <p className="text-[9px] text-[#7A6A60]">per finished piece</p>
              </div>
              <div className="bg-[#FFF7F2] border border-[#F5E0D2] rounded-xl p-2">
                <p className="text-sm font-black text-[#9C3C18]">₹360 – ₹410</p>
                <p className="text-[9px] text-[#7A6A60]">per finished piece</p>
              </div>
            </div>
            <p className="text-[9px] text-[#7A6A60] italic">
              Price guidance is indicative and finalized upon mutual agreement with artisan.
            </p>
          </div>

          {/* Monthly Capacity */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-black text-[#7A6A60] flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-[#9C3C18]" /> MONTHLY CAPACITY
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-black text-[#1F1612]">500 – 800</p>
                <p className="text-[10px] text-[#7A6A60]">pieces / month</p>
              </div>
              <div>
                <p className="font-black text-[#1F1612]">350 – 500</p>
                <p className="text-[10px] text-[#7A6A60]">pieces / month</p>
              </div>
            </div>
          </div>

          {/* Capacity Fit */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-black text-[#7A6A60] flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#9C3C18]" /> CAPACITY FIT FOR 500 PCS REQUIREMENT
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#D1FAE5] border border-[#A7F3D0] rounded-xl p-2 text-[9.5px] font-bold text-[#065F46] leading-tight">
                ✓ Can comfortably accommodate 500 pcs batch
              </div>
              <div className="bg-[#D1FAE5] border border-[#A7F3D0] rounded-xl p-2 text-[9.5px] font-bold text-[#065F46] leading-tight">
                ✓ Can accommodate up to 500 pcs batch
              </div>
            </div>
          </div>

          {/* Mastery & Craft Lineage */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-black text-[#7A6A60] flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-[#9C3C18]" /> MASTERY & CRAFT LINEAGE
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-black text-[#1F1612]">28 yrs</p>
                <p className="text-[10px] text-[#7A6A60]">Generational artisan family</p>
              </div>
              <div>
                <p className="font-black text-[#1F1612]">24 yrs</p>
                <p className="text-[10px] text-[#7A6A60]">Guild master certified</p>
              </div>
            </div>
          </div>

          {/* Cluster Location */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-black text-[#7A6A60] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#9C3C18]" /> CLUSTER LOCATION
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-black text-[#1F1612]">Barpeta, Assam</p>
                <p className="text-[10px] text-[#7A6A60]">Brahmaputra Valley Cane Belt</p>
              </div>
              <div>
                <p className="font-black text-[#1F1612]">Cachar, Assam</p>
                <p className="text-[10px] text-[#7A6A60]">Barak Valley Guild Center</p>
              </div>
            </div>
          </div>

          {/* Technique Specialization */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-black text-[#7A6A60] flex items-center gap-1">
              <Leaf className="w-3.5 h-3.5 text-[#9C3C18]" /> TECHNIQUE SPECIALIZATION
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-black text-[#1F1612] leading-snug">Double-rim bamboo fruit baskets</p>
                <p className="text-[10px] text-[#7A6A60] mt-0.5">Smoke-seasoned split bamboo weaving</p>
              </div>
              <div>
                <p className="font-black text-[#1F1612] leading-snug">Natural bamboo storage baskets</p>
                <p className="text-[10px] text-[#7A6A60] mt-0.5">Structural woven joinery with braided tops</p>
              </div>
            </div>
          </div>

          {/* Verified Guild Standards */}
          <div className="space-y-1.5">
            <p className="text-[10px] font-black text-[#7A6A60] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9C3C18]" /> VERIFIED GUILD STANDARDS
            </p>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-[#4A382D]">
              <div className="space-y-1">
                <p className="flex items-start gap-1"><Check className="w-3 h-3 text-[#10B981] shrink-0 mt-0.5" /> Seasoned bamboo stock ready</p>
                <p className="flex items-start gap-1"><Check className="w-3 h-3 text-[#10B981] shrink-0 mt-0.5" /> Double-rim finish certified</p>
                <p className="flex items-start gap-1"><Check className="w-3 h-3 text-[#10B981] shrink-0 mt-0.5" /> Historical 99% dispatch punctuality</p>
              </div>
              <div className="space-y-1">
                <p className="flex items-start gap-1"><Check className="w-3 h-3 text-[#10B981] shrink-0 mt-0.5" /> Export documented quality standard</p>
                <p className="flex items-start gap-1"><Check className="w-3 h-3 text-[#10B981] shrink-0 mt-0.5" /> Natural smoke kiln treatment</p>
                <p className="flex items-start gap-1"><Check className="w-3 h-3 text-[#10B981] shrink-0 mt-0.5" /> Fair-trade cooperative affiliate</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Stands Out Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-black text-[#1F1612]">
            <TrendingUp className="w-4 h-4 text-[#9C3C18]" /> What Stands Out for Your Requirement
          </div>

          {/* Ramesh Profile Standout */}
          <div className="bg-[#FFF9F5] rounded-2xl border border-[#F3DEC8] p-3.5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-black text-[#1F1612]">
                <span className="w-2 h-2 rounded-full bg-[#9C3C18]"></span>
                Ramesh Kumar Profile
              </span>
              <span className="text-[10px] font-bold text-[#9C3C18]">Barpeta Cluster</span>
            </div>
            <div className="space-y-1.5 text-[10.5px] text-[#3D2C22]">
              <p className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" /> Higher stated monthly headroom (500–800 pcs) providing buffer for volume spikes.</p>
              <p className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" /> 28 years of master experience in specialized double-rim reinforced spec.</p>
              <p className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" /> Indicative price guidance starting at ₹350 / pc within your ₹380 budget.</p>
            </div>
            <button
              onClick={() => onNavigate(48, 'Selected Ramesh Kumar')}
              className="w-full py-2.5 bg-[#9C3C18] text-white rounded-xl text-xs font-black hover:bg-[#833013] transition-all shadow-sm cursor-pointer"
            >
              Choose Ramesh
            </button>
          </div>

          {/* Biren Profile Standout */}
          <div className="bg-white rounded-2xl border border-[#F0E0D4] p-3.5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-black text-[#1F1612]">
                <span className="w-2 h-2 rounded-full bg-[#92400E]"></span>
                Biren Das Profile
              </span>
              <span className="text-[10px] font-bold text-[#92400E]">Silchar Guild</span>
            </div>
            <div className="space-y-1.5 text-[10.5px] text-[#3D2C22]">
              <p className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" /> Documented export testing protocols and fair-trade cooperative standardization.</p>
              <p className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" /> Dedicated natural smoke treatment kiln ensuring consistent pest resistance.</p>
              <p className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" /> Indicative price guidance starting at ₹360 / pc with 24 yrs guild oversight.</p>
            </div>
            <button
              onClick={() => showToast('Selected Biren Das')}
              className="w-full py-2.5 border border-[#DFC8BA] text-[#1F1612] rounded-xl text-xs font-bold hover:bg-[#FAF0E7] transition-all cursor-pointer"
            >
              Choose Biren
            </button>
          </div>

          <p className="text-[9.5px] text-[#7A6A60] leading-relaxed">
            These observations are compiled from verified cluster records. Please discuss final price, packaging specifications, and delivery logistics directly with the artisan.
          </p>
        </div>

        {/* Voice Assistance */}
        <div className="bg-[#FAF2EB] rounded-2xl border border-[#E8D4C5] p-3 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-black text-[#1F1612]">Need help deciding?</h4>
            <p className="text-[10px] text-[#7A6A60]">Ask the craft assistant via voice in Hindi, Assamese, or English.</p>
          </div>
          <button onClick={() => showToast('Voice AI assistance activated')} className="w-9 h-9 rounded-full bg-[#9C3C18] text-white flex items-center justify-center shadow hover:scale-105 transition-transform cursor-pointer shrink-0">
            <Mic className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Actions */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => showToast('Message Artisans chat window opened')}
            className="flex-1 py-3 px-3 border border-[#DFC8BA] rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" /> Message Artisans
          </button>
          <button
            onClick={() => onNavigate(48, 'Opening Ramesh Kumar order review')}
            className="flex-1 py-3 px-3 bg-[#9C3C18] text-white rounded-xl text-xs font-black hover:bg-[#833013] flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
          >
            <Check className="w-4 h-4" /> Select Artisan
          </button>
        </div>

        <div className="text-center pt-1 pb-2">
          <button onClick={onBack} className="text-xs font-bold text-[#9C3C18] hover:underline cursor-pointer">
            ← Back to Matched Artisans
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <BuyerRequirementBottomNav activeTab="requirement" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};

// -------------------------------------------------------------
// 48. SELECTED ARTISAN SCREEN (matching r8-bulk — Selected Artisan.png)
// -------------------------------------------------------------
export const BuyerSelectedArtisanScreenView: React.FC<ScreenProps> = ({ onNavigate, onBack, showToast }) => {
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between bg-[#FCF9F6] text-[#1F1612] font-sans overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-[#FCF9F6] z-20 border-b border-[#F0E5DC] px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1 rounded-full hover:bg-[#F3E7DC]">
            <ArrowLeft className="w-5 h-5 text-[#1F1612]" />
          </button>
          <h1 className="text-lg font-black text-[#1F1612]">Selected Artisan</h1>
        </div>
        <div className="flex items-center gap-1.5">
          <button onClick={() => showToast('Shared artisan profile')} className="p-1.5 rounded-lg text-[#1F1612] hover:bg-[#F5ECE5] cursor-pointer">
            <Share2 className="w-4 h-4" />
          </button>
          <button onClick={() => showToast('Saved to shortlisted')} className="p-1.5 rounded-lg text-[#1F1612] hover:bg-[#F5ECE5] cursor-pointer">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Workspace Banner */}
        <div className="bg-[#FFF6EE] border border-[#F7DEC9] rounded-full px-3.5 py-1.5 flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 text-[10px] font-black text-[#065F46] tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> ACTIVE WORKSPACE
          </span>
          <span className="font-bold text-[#9C3C18]">HunarSangam Bulk Buyer</span>
        </div>

        {/* Master Craftsman Hero Card */}
        <div className="bg-white rounded-3xl border border-[#F0E0D4] p-4 shadow-sm space-y-3.5">
          <div className="flex items-start gap-3.5">
            <div className="relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80"
                alt="Ramesh"
                className="w-20 h-20 rounded-2xl object-cover border border-[#EADBCE]"
              />
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-[#065F46] text-white text-[8.5px] font-bold whitespace-nowrap shadow-sm">
                ✓ GI Lead
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h2 className="text-base font-black text-[#1F1612]">Ramesh Kumar</h2>
                <span className="px-2 py-0.5 rounded bg-[#D1FAE5] text-[#065F46] text-[9px] font-bold">
                  Verified GI Craft
                </span>
              </div>
              <p className="text-xs font-bold text-[#9C3C18] mt-0.5">Cluster Lead • Barpeta Bamboo Craft</p>
              <p className="text-[11px] text-[#7A6A60] flex items-center gap-1 mt-1 truncate">
                <MapPin className="w-3 h-3 text-[#9C3C18]" /> Barpeta, Assam (GI Craft Cluster)
              </p>
            </div>
          </div>

          {/* 3 Metric Tiles */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#FAF2EB] rounded-2xl p-2.5 text-center">
              <p className="text-[9px] text-[#7A6A60]">Experience</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">28 Yrs<br />Experience</p>
            </div>
            <div className="bg-[#FAF2EB] rounded-2xl p-2.5 text-center">
              <p className="text-[9px] text-[#7A6A60]">Production</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">500–800<br />pcs/mo</p>
            </div>
            <div className="bg-[#FAF2EB] rounded-2xl p-2.5 text-center">
              <p className="text-[9px] text-[#7A6A60]">Avg Lead</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">18–24<br />Days</p>
            </div>
          </div>

          {/* Audio Introduction */}
          <div
            onClick={() => {
              setIsPlayingIntro(!isPlayingIntro);
              showToast(isPlayingIntro ? 'Paused intro audio' : "Playing Ramesh's audio intro");
            }}
            className="bg-[#FFF7F2] border border-[#F5E0D2] rounded-2xl p-3 flex items-center justify-between cursor-pointer hover:bg-[#FEECE0] transition-colors"
          >
            <div className="flex items-center gap-2.5">
              <button className="w-8 h-8 rounded-full bg-[#9C3C18] text-white flex items-center justify-center shadow-sm">
                {isPlayingIntro ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>
              <div>
                <p className="text-xs font-black text-[#1F1612]">Hear Ramesh's introduction</p>
                <p className="text-[10px] text-[#7A6A60]">Assamese / Hindi • 0:42 mins</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[12, 22, 16, 24, 14].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}px` }}
                  className={`w-1 rounded-full ${isPlayingIntro ? 'bg-[#9C3C18] animate-pulse' : 'bg-[#D4B8A6]'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* About the Master Craftsman */}
        <div className="bg-white rounded-3xl border border-[#F0E0D4] p-4 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-sm font-black text-[#1F1612]">
            <FileText className="w-4 h-4 text-[#9C3C18]" /> About the Master Craftsman
          </div>
          <p className="text-xs text-[#4A382D] leading-relaxed">
            Deep heritage in split bamboo weave, utilizing traditional non-toxic smoke seasoning ensuring zero pest issues and exceptional structural longevity. Ramesh leads and coordinates a direct grassroots cooperative of 32 local master weavers across Barpeta cluster, strictly maintaining ISO-compliant sizing consistency for export and enterprise retail standards.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="bg-[#FAF2EB] rounded-2xl p-2.5 flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#10B981] shrink-0" />
              <div>
                <p className="text-[10px] font-black text-[#1F1612]">100% Eco–Seasoned</p>
                <p className="text-[9px] text-[#7A6A60]">Zero chemical resins</p>
              </div>
            </div>
            <div className="bg-[#FAF2EB] rounded-2xl p-2.5 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#9C3C18] shrink-0" />
              <div>
                <p className="text-[10px] font-black text-[#1F1612]">32 Weavers Co–op</p>
                <p className="text-[9px] text-[#7A6A60]">Direct fair-trade wages</p>
              </div>
            </div>
          </div>
        </div>

        {/* Crafted for Your Sourcing Spec */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-[#1F1612]">Crafted for Your Sourcing Spec</h3>
            <span className="text-xs font-bold text-[#9C3C18]">2 Matching</span>
          </div>
          <p className="text-[10.5px] text-[#7A6A60]">Pre-audited matches against your active requirement</p>

          {/* Exact Match Product Card */}
          <div className="bg-white rounded-3xl border border-[#F0E0D4] p-3 shadow-sm space-y-3">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
                alt="Product"
                className="w-full h-44 object-cover"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-[#9C3C18] text-white text-[10px] font-black flex items-center gap-1 shadow">
                ★ Exact Spec Match
              </span>
              <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-white/95 text-[#1F1612] text-[9.5px] font-bold shadow">
                MOQ: 50 pcs
              </span>
            </div>

            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-sm font-black text-[#1F1612]">Handwoven Bamboo Fruit Basket (10–inch)</h4>
                <p className="text-[10px] text-[#7A6A60] mt-0.5">Ref: HNS-BRP-084 • Food-safe smoke cure</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-[#9C3C18]">₹350 – ₹380</p>
                <p className="text-[9px] text-[#7A6A60]">/ pc wholesale</p>
              </div>
            </div>

            <div className="bg-[#FFF7F2] border border-[#F5E0D2] rounded-xl p-2.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#1F1612]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Standard Sample available in 4 days
              </span>
              <button
                onClick={() => showToast('Sample order initiated (₹350)')}
                className="text-[10px] font-black text-[#9C3C18] hover:underline cursor-pointer"
              >
                Order Sample
              </button>
            </div>
          </div>
        </div>

        {/* Price Guidance & Capacity (Fair Cost Model) */}
        <div className="bg-white rounded-3xl border border-[#F0E0D4] p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-black text-[#1F1612]">
              <DollarSign className="w-4 h-4 text-[#9C3C18]" /> Price Guidance & Capacity
            </span>
            <span className="px-2 py-0.5 rounded bg-[#FAF0E7] text-[#9C3C18] text-[9px] font-bold">
              Fair Cost Model
            </span>
          </div>

          {/* Cost Distribution */}
          <div className="bg-[#FFF9F5] border border-[#F3DEC8] rounded-2xl p-3 space-y-2.5">
            <p className="text-[10px] font-bold text-[#7A6A60]">Transparent Cost Distribution (Est. ₹360/unit)</p>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-semibold text-[#1F1612]">
                <span>Raw Jati Bamboo Material Cost</span>
                <span className="font-bold">₹110 (31%)</span>
              </div>
              <div className="h-1.5 bg-[#EADBCE] rounded-full overflow-hidden">
                <div className="h-full bg-[#D4A373] w-[31%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-semibold text-[#1F1612]">
                <span>Fair Artisan Wages (Split & Weave)</span>
                <span className="font-bold">₹205 (57%)</span>
              </div>
              <div className="h-1.5 bg-[#EADBCE] rounded-full overflow-hidden">
                <div className="h-full bg-[#9C3C18] w-[57%] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-semibold text-[#1F1612]">
                <span>Smoke Cure & Export Packaging</span>
                <span className="font-bold">₹45 (12%)</span>
              </div>
              <div className="h-1.5 bg-[#EADBCE] rounded-full overflow-hidden">
                <div className="h-full bg-[#065F46] w-[12%] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Capacity Confirmed Box */}
          <div className="bg-[#D1FAE5] border border-[#A7F3D0] rounded-2xl p-3 flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#10B981] mt-1 shrink-0"></span>
            <div>
              <p className="text-xs font-black text-[#065F46]">Cluster Capacity Confirmed</p>
              <p className="text-[10.5px] text-[#044D37] mt-0.5 leading-relaxed">
                Green: Ready to accept 500 pcs batch for October delivery. Co-op loom schedules reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar (Docked above bottom nav) */}
      <div className="bg-white border-t border-[#EFE2D8] px-4 py-2.5 flex items-center gap-2 shadow-xs shrink-0 z-20">
        <button
          onClick={() => showToast("Opening direct chat with Ramesh's cluster")}
          className="py-2.5 px-3 border border-[#DFC8BA] rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1.5 leading-tight text-center cursor-pointer shrink-0"
        >
          <MessageSquare className="w-4 h-4" /> Message<br />Artisan
        </button>
        <button
          onClick={() => onNavigate(49, 'Order #HS-BKT-892 placed in Production with Ramesh Kumar!')}
          className="flex-1 py-3 px-3 bg-[#9C3C18] text-white rounded-xl text-xs font-black hover:bg-[#833013] flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
        >
          Select Artisan & Review Order <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Nav */}
      <BuyerRequirementBottomNav activeTab="requirement" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};
