import React, { useState } from 'react';
import {
  ArrowLeft,
  Search,
  Store,
  ShieldCheck,
  CheckCircle,
  Clock,
  ArrowRight,
  MessageSquare,
  RefreshCw,
  Info,
  Check,
  Download,
  Phone,
  User,
  Home,
  Compass,
  FileText,
  Truck,
  Camera,
  ChevronRight,
  Lock,
  Layers,
  Sparkles,
  Calendar,
  DollarSign,
  Share2,
} from 'lucide-react';
import { BuyerRequirementBottomNav } from './BuyerRequirementScreens';

interface ScreenProps {
  onNavigate: (index: number, toastMsg?: string) => void;
  onBack?: () => void;
  showToast: (msg: string) => void;
}

// -------------------------------------------------------------
// 49. ORDERS & PRODUCTION HUB (matching 'bulk - order section 1.png')
// -------------------------------------------------------------
export const BuyerOrdersHubScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All (4)' },
    { id: 'pending', label: 'Pending', count: '1' },
    { id: 'accepted', label: 'Accepted' },
    { id: 'production', label: 'In Production' },
  ];

  return (
    <div className="h-full flex flex-col justify-between bg-[#FCF9F6] text-[#1F1612] font-sans overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-[#FCF9F6] z-20 border-b border-[#F0E5DC] px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <button
            onClick={onBack}
            className="p-1 rounded-full hover:bg-[#F3E7DC] cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-[#9C3C18]" />
          </button>
          <h1 className="text-base font-black text-[#9C3C18]">Orders & Production</h1>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => showToast('Search bulk orders')}
            className="p-1.5 rounded-lg text-[#1F1612] hover:bg-[#F5ECE5] cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
          <span className="w-2 h-2 rounded-full bg-[#9C3C18]"></span>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Enterprise Buyer Portal Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-black text-[#9C3C18] tracking-wider uppercase">
              Enterprise Buyer Portal
            </p>
            <p className="text-xs text-[#7A6A60] mt-0.5">
              Track the orders you've placed with artisans
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D1FAE5] border border-[#A7F3D0] text-[#065F46] text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
            4 Active
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {filters.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#9C3C18] text-white shadow-sm'
                    : 'bg-[#F9F1EA] text-[#3B281E] border border-[#EADBCE] hover:bg-[#F3E5DA]'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[9.5px] font-black ${
                      isSelected
                        ? 'bg-white text-[#9C3C18]'
                        : 'bg-[#FEF3C7] text-[#92400E]'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ORDER 1: #HS-BKT-892 (In Production 65%) */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-3.5 shadow-sm space-y-3">
          {/* Top meta */}
          <div className="flex items-start justify-between">
            <div className="text-[11px] text-[#7A6A60] font-semibold leading-relaxed">
              <p className="font-bold text-[#1F1612]">#HS-BKT-892 • Placed: 17 Sep 2026</p>
              <p>500 pieces • Required: 28 Oct 2026</p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#D1FAE5] text-[#065F46] text-[10.5px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              In Production (65%)
            </span>
          </div>

          {/* Product & Artisan */}
          <div className="flex items-start gap-3">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=160&q=80"
              alt="bamboo basket"
              className="w-16 h-16 rounded-xl object-cover border border-[#EBD6C7] shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-black text-[#1F1612] leading-snug">
                Handwoven Bamboo Baskets
              </h3>
              <p className="text-[11px] text-[#7A6A60] flex items-center gap-1 mt-0.5">
                <Store className="w-3.5 h-3.5 text-[#9C3C18]" /> Ramesh Kumar • Barpeta Bamboo
              </p>
              <p className="text-xs font-semibold text-[#7A6A60] mt-1">
                Order Value:{' '}
                <span className="font-black text-sm text-[#9C3C18]">₹1,90,000</span>
              </p>
            </div>
          </div>

          {/* Progress Stage Tracker */}
          <div className="bg-[#FAF2EB] rounded-2xl p-2.5 space-y-1.5 border border-[#EFE0D5]">
            <div className="flex items-center justify-between text-[10px] font-bold">
              <span className="flex items-center gap-1 text-[#065F46]">
                <Check className="w-3 h-3 text-[#10B981]" /> Raw Material
              </span>
              <span className="text-[#9C3C18] flex items-center gap-1">
                ↻ Weaving ⌛
              </span>
              <span className="text-[#7A6A60]">QC Audit</span>
              <span className="text-[#7A6A60]">Dispatch</span>
            </div>

            {/* Segmented Progress Bar */}
            <div className="h-2 rounded-full bg-[#E5D5C8] overflow-hidden flex">
              <div className="w-[30%] bg-[#10B981] h-full"></div>
              <div className="w-[35%] bg-[#9C3C18] h-full"></div>
              <div className="w-[35%] bg-transparent h-full"></div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-bold">
              <span className="text-[#7A6A60]">Milestone 2 of 4 reached</span>
              <span className="text-[#9C3C18]">Stage verified on video</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => onNavigate(52, 'Opening bilingual chat with Ramesh Kumar')}
              className="flex-1 py-2.5 px-2 border border-[#DCC8BB] rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#7A6A60]" /> Message Artisan
            </button>
            <button
              onClick={() => onNavigate(50, 'Opening Order #HS-BKT-892 Details')}
              className="flex-1 py-2.5 px-2 bg-[#9C3C18] text-white rounded-xl text-xs font-black hover:bg-[#833013] flex items-center justify-center gap-1 shadow-sm cursor-pointer"
            >
              View Status / Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ORDER 2: #HS-ORD-8819 (Awaiting Artisan) */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-3.5 shadow-sm space-y-3">
          {/* Top meta */}
          <div className="flex items-start justify-between">
            <div className="text-[11px] text-[#7A6A60] font-semibold leading-relaxed">
              <p className="font-bold text-[#1F1612]">#HS-ORD-8819 • Placed: 18 Sep 2026</p>
              <p>200 pieces • Required: 15 Nov 2026</p>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] text-[10.5px] font-bold">
              ⏳ Awaiting Artisan
            </span>
          </div>

          {/* Product & Artisan */}
          <div className="flex items-start gap-3">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=160&q=80"
              alt="planter"
              className="w-16 h-16 rounded-xl object-cover border border-[#EBD6C7] shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-black text-[#1F1612] leading-snug">
                Hexagonal Bamboo Planters
              </h3>
              <p className="text-[11px] text-[#7A6A60] flex items-center gap-1 mt-0.5">
                <Store className="w-3.5 h-3.5 text-[#9C3C18]" /> Sunita Devi • Barpeta Women SHG
              </p>
              <p className="text-xs font-semibold text-[#7A6A60] mt-1">
                Order Value:{' '}
                <span className="font-black text-sm text-[#1F1612]">₹76,000</span>
              </p>
            </div>
          </div>

          {/* Footer status & Action */}
          <div className="flex items-center justify-between pt-1">
            <p className="text-[11px] text-[#7A6A60]">
              Artisan has 18 hrs left to review
            </p>
            <button
              onClick={() => onNavigate(50, 'Viewing Hexagonal Planters details')}
              className="py-1.5 px-3 border border-[#9C3C18] text-[#9C3C18] rounded-xl text-xs font-black hover:bg-[#FFF4EE] flex items-center gap-1 cursor-pointer"
            >
              View Status / Details <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ORDER 3: #HS-ORD-8740 (Counter Offer Received) */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-3.5 shadow-sm space-y-3">
          {/* Top meta */}
          <div className="flex items-start justify-between">
            <div className="text-[11px] text-[#7A6A60] font-semibold leading-relaxed">
              <p className="font-bold text-[#1F1612]">#HS-ORD-8740 • Placed: 16 Sep 2026</p>
              <p>1,000 pieces • Required: 20 Oct 2026</p>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-[10px] font-bold">
              ⇄ Counter Offer Received
            </span>
          </div>

          {/* Product & Artisan */}
          <div className="flex items-start gap-3">
            <img
              src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=160&q=80"
              alt="terracotta"
              className="w-16 h-16 rounded-xl object-cover border border-[#EBD6C7] shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-black text-[#1F1612] leading-snug">
                Clay Terracotta Kulhads
              </h3>
              <p className="text-[11px] text-[#7A6A60] flex items-center gap-1 mt-0.5">
                <Store className="w-3.5 h-3.5 text-[#9C3C18]" /> Kishan Prajapati • Kutch Guild
              </p>
              <p className="text-sm font-black text-[#9C3C18] mt-1">₹45,000</p>
              <p className="text-[11px] font-bold text-[#92400E]">
                Artisan offered: 900 pcs @ ₹48
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="bg-[#FFFBEB] rounded-xl p-2.5 border border-[#FDE68A] flex items-start gap-2 text-[10.5px] text-[#78350F] leading-relaxed">
            <Info className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
            <p>Kiln capacity limits initial batch to 900 units before festival cutoff.</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => showToast('Opening Proposal review')}
              className="flex-1 py-2.5 px-2 border border-[#DCC8BB] rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] text-center cursor-pointer"
            >
              Review Proposal
            </button>
            <button
              onClick={() => showToast('Counter-offer accepted')}
              className="flex-1 py-2.5 px-2 bg-[#9C3C18] text-white rounded-xl text-xs font-black hover:bg-[#833013] flex items-center justify-center gap-1 shadow-sm cursor-pointer"
            >
              Accept / Counter <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ORDER 4: #HS-ORD-8210 (Completed) */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-3.5 shadow-sm space-y-3">
          {/* Top meta */}
          <div className="flex items-start justify-between">
            <div className="text-[11px] text-[#7A6A60] font-semibold leading-relaxed">
              <p className="font-bold text-[#1F1612]">#HS-ORD-8210 • Delivered: 05 Sep 2026</p>
              <p className="text-[#065F46] font-bold">150 pieces • Delivered successfully</p>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D1FAE5] text-[#065F46] text-[10.5px] font-bold">
              ✓ Completed ✓
            </span>
          </div>

          {/* Product & Artisan */}
          <div className="flex items-start gap-3">
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=160&q=80"
              alt="wooden trays"
              className="w-16 h-16 rounded-xl object-cover border border-[#EBD6C7] shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-black text-[#1F1612] leading-snug">
                Handcrafted Sheesham Trays
              </h3>
              <p className="text-[11px] text-[#7A6A60] flex items-center gap-1 mt-0.5">
                <Store className="w-3.5 h-3.5 text-[#9C3C18]" /> Mohammad Yusuf • Saharanpur Wood
              </p>
              <p className="text-xs font-semibold text-[#7A6A60] mt-1">
                Settled Value:{' '}
                <span className="font-black text-sm text-[#1F1612]">₹52,500</span>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => showToast('Reorder flow initiated')}
              className="flex-1 py-2.5 px-2 border border-[#DCC8BB] rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#7A6A60]" /> + Reorder
            </button>
            <button
              onClick={() => onNavigate(50, 'Viewing Sheesham Trays summary')}
              className="flex-1 py-2.5 px-2 border border-[#9C3C18] text-[#9C3C18] rounded-xl text-xs font-black hover:bg-[#FFF4EE] flex items-center justify-center gap-1 cursor-pointer"
            >
              View Status / Details <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Craft Trust Escrow Protected Card */}
        <div className="bg-[#FBF4ED] rounded-3xl border border-[#F0DEC8] p-4 flex items-start gap-3 shadow-sm">
          <div className="p-2.5 rounded-2xl bg-[#D1FAE5] text-[#065F46] shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-black text-[#1F1612]">Craft Trust Escrow Protected</h4>
            <p className="text-[11.5px] text-[#6B5A4E] leading-relaxed">
              Protected by HunarSangam Craft Trust Escrow — Staged milestone releases tied to verified craft progress.
            </p>
            <p className="text-[11px] font-bold text-[#065F46] flex items-center gap-1 pt-1">
              <Lock className="w-3 h-3 text-[#065F46]" /> 100% Buyer Guarantee on Defective Batches
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <BuyerRequirementBottomNav activeTab="orders" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};

// -------------------------------------------------------------
// 50. ORDER DETAILS & STATUS (matching 'bulk order section 2 - deatiled.png')
// -------------------------------------------------------------
export const BuyerOrderDetailsScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
  const [milestone2Released, setMilestone2Released] = useState(false);

  return (
    <div className="h-full flex flex-col justify-between bg-[#FCF9F6] text-[#1F1612] font-sans overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-[#FCF9F6] z-20 border-b border-[#F0E5DC] px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1 rounded-full hover:bg-[#F3E7DC] cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 text-[#9C3C18]" />
          </button>
          <div>
            <h1 className="text-base font-black text-[#9C3C18]">Order Details & Status</h1>
            <p className="text-[10.5px] text-[#7A6A60] font-semibold">Order #HS-BKT-892</p>
          </div>
        </div>
        <button
          onClick={() => showToast('Downloading invoice PDF')}
          className="p-1.5 rounded-lg text-[#9C3C18] hover:bg-[#F5ECE5] cursor-pointer"
        >
          <FileText className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* 1. Product Summary Card */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-3">
          <div className="flex items-start gap-3">
            <div className="relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=200&q=80"
                alt="Basket"
                className="w-16 h-16 rounded-2xl object-cover border border-[#EBD6C7]"
              />
              <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-white/90 text-[#9C3C18] text-[8px] font-black shadow-xs">
                GI Craft
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-black text-[#1F1612] truncate">
                500 Handwoven Bamboo Bas...
              </h2>
              <p className="text-[11px] text-[#7A6A60]">10–inch diameter, double-rim</p>
              <p className="text-[11px] font-bold text-[#9C3C18] flex items-center gap-1 mt-0.5 truncate">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" /> Ramesh Kumar (Master Craftsman)
              </p>
              <p className="text-[10px] text-[#7A6A60] mt-0.5">
                📅 Placed: 17 Sep 2026 • Req: 28 Oct
              </p>
            </div>
          </div>

          <div className="h-px bg-[#F3E7DC]" />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-[#7A6A60]">Total Bulk Value</p>
              <p className="text-base font-black text-[#1F1612]">
                ₹1,90,000 <span className="text-xs font-normal text-[#7A6A60]">(₹380/pc)</span>
              </p>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#D1FAE5] text-[#065F46] text-[11px] font-bold border border-[#A7F3D0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#065F46]" /> Escrow Protected
            </span>
          </div>
        </div>

        {/* 2. Order Accepted & In Production Banner */}
        <div className="bg-[#FFF7F2] rounded-3xl border border-[#F7DEC9] p-4 shadow-sm space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9C3C18]"></span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold">
                <CheckCircle className="w-3 h-3 text-[#065F46]" /> Accepted & In Production
              </span>
            </div>
            <span className="text-[10px] text-[#7A6A60] text-right font-medium leading-tight">
              Updated today,<br />4:30 PM
            </span>
          </div>

          <h3 className="text-sm font-black text-[#1F1612]">Order Accepted & In Production</h3>
          <p className="text-xs text-[#5A483E] leading-relaxed">
            The artisan accepted your order. Bamboo basket weaving is actively underway at the cluster workshop.
          </p>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => showToast('Opening photo feed of current batch')}
              className="flex-1 py-2 px-2 bg-white border border-[#DCC8BB] rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Camera className="w-3.5 h-3.5 text-[#7A6A60]" /> Track Photos
            </button>
            <button
              onClick={() => showToast('Chat opened with Ramesh Kumar')}
              className="flex-1 py-2 px-2 bg-[#9C3C18] text-white rounded-xl text-xs font-bold hover:bg-[#833013] flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" /> Message Artisan
            </button>
          </div>
        </div>

        {/* 3. Live Batch Status & Craft Feed */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-black text-[#9C3C18] tracking-wider uppercase">
                LIVE BATCH STATUS
              </p>
              <h3 className="text-sm font-black text-[#1F1612] leading-tight mt-0.5">
                Production Progress<br />(64%)
              </h3>
            </div>
            <div className="text-right">
              <p className="text-lg font-black text-[#9C3C18]">320 <span className="text-xs text-[#7A6A60] font-normal">/ 500</span></p>
              <p className="text-[10px] text-[#7A6A60]">pcs</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-2 rounded-full bg-[#F0E5DC] overflow-hidden">
            <div className="h-full bg-[#9C3C18] w-[64%] rounded-full"></div>
          </div>

          {/* Feed Grid */}
          <div className="pt-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black text-[#1F1612]">Cluster Craft Feed</span>
              <button
                onClick={() => showToast('Viewing all 12 cluster updates')}
                className="text-[11px] font-bold text-[#9C3C18] hover:underline cursor-pointer"
              >
                View All (12) →
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {/* Photo 1 */}
              <div className="bg-[#FAF2EB] rounded-2xl overflow-hidden border border-[#EFE0D5]">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80"
                    alt="Raw material"
                    className="w-full h-20 object-cover"
                  />
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/70 text-white text-[8px] font-bold">
                    18 Sep
                  </span>
                </div>
                <div className="p-2">
                  <p className="text-[10.5px] font-black text-[#1F1612] leading-tight">Raw Material Ready</p>
                  <p className="text-[9.5px] text-[#7A6A60] mt-0.5 truncate">Brahmaputra poles</p>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="bg-[#FAF2EB] rounded-2xl overflow-hidden border border-[#EFE0D5]">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                    alt="Split & seasoning"
                    className="w-full h-20 object-cover"
                  />
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/70 text-white text-[8px] font-bold">
                    21 Sep
                  </span>
                </div>
                <div className="p-2">
                  <p className="text-[10.5px] font-black text-[#1F1612] leading-tight">Split & Seasoning</p>
                  <p className="text-[9.5px] text-[#7A6A60] mt-0.5 truncate">Pest smoke cure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Milestone Journey */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-3.5">
          <h3 className="text-sm font-black text-[#1F1612]">Milestone Journey</h3>

          <div className="space-y-3">
            {/* Step 1 */}
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#065F46] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black text-[#1F1612]">Requirement Created</p>
                  <span className="text-[10px] text-[#7A6A60] font-semibold">17 Sep, 10:30 AM</span>
                </div>
                <p className="text-[10.5px] text-[#6B5A4E] mt-0.5">Specifications and batch volume defined.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#065F46] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black text-[#1F1612]">Artisan Selected</p>
                  <span className="text-[10px] text-[#7A6A60] font-semibold">17 Sep, 10:42 AM</span>
                </div>
                <p className="text-[10.5px] text-[#6B5A4E] mt-0.5">Matched with Barpeta Cane Cluster.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#065F46] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black text-[#1F1612]">Order Request Sent</p>
                  <span className="text-[10px] text-[#7A6A60] font-semibold">17 Sep, 10:45 AM</span>
                </div>
                <p className="text-[10.5px] text-[#6B5A4E] mt-0.5">Lock applied with initial escrow hold.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#065F46] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black text-[#1F1612]">Artisan Confirmation</p>
                  <span className="text-[10px] text-[#7A6A60] font-semibold">17 Sep, 2:15 PM</span>
                </div>
                <p className="text-[10.5px] text-[#6B5A4E] mt-0.5">Confirmed 500 pcs @ ₹380 / unit tier.</p>
              </div>
            </div>

            {/* Step 5 (Active Highlighted) */}
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#9C3C18] text-white flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              </div>
              <div className="flex-1 min-w-0 bg-[#FFF7F2] p-2.5 rounded-xl border border-[#F7DEC9]">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-black text-[#9C3C18]">Production (Active)</p>
                  <span className="px-1.5 py-0.5 rounded bg-[#FCE9DB] text-[#9C3C18] text-[9.5px] font-bold">
                    64% Done
                  </span>
                </div>
                <p className="text-[10.5px] text-[#5A483E] mt-0.5">320/500 units handwoven and trimmed.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex items-start gap-2.5 opacity-60">
              <div className="w-5 h-5 rounded-full bg-[#FAF2EB] border border-[#DCC8BB] flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A6A60]"></span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-[#1F1612]">Quality Check</p>
                  <span className="text-[10px] text-[#7A6A60]">Sched. 24 Oct</span>
                </div>
                <p className="text-[10.5px] text-[#6B5A4E]">Structural durability & pest inspection.</p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex items-start gap-2.5 opacity-60">
              <div className="w-5 h-5 rounded-full bg-[#FAF2EB] border border-[#DCC8BB] flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A6A60]"></span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-[#1F1612]">Dispatch & Completed</p>
                  <span className="text-[10px] text-[#7A6A60]">Sched. 28 Oct</span>
                </div>
                <p className="text-[10.5px] text-[#6B5A4E]">Direct transport from Barpeta Cluster.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. 3-Stage Trust Escrow Breakdown */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-black text-[#1F1612]">3–Stage Trust Escrow</h3>
              <p className="text-[10.5px] text-[#7A6A60]">Protected Vault: ₹1,90,000</p>
            </div>
            <ShieldCheck className="w-5 h-5 text-[#065F46]" />
          </div>

          {/* Milestone 1 (Released) */}
          <div className="bg-[#F4FAF6] rounded-2xl p-3 border border-[#D1E7DD] flex items-center justify-between">
            <div>
              <p className="text-[11px] font-black text-[#065F46]">✓ Milestone 1 (40%) • Released</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">
                ₹76,000 — Raw Material Advance
              </p>
            </div>
            <span className="text-[10.5px] font-bold text-[#7A6A60]">18 Sep</span>
          </div>

          {/* Milestone 2 (Verification Met / Active Action) */}
          <div className="bg-[#FFF9F5] rounded-2xl p-3 border-2 border-[#F3DEC8] space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-black text-[#9C3C18]">
                📋 Milestone 2 (40%) • Verification Met
              </p>
              <span className="text-sm font-black text-[#1F1612]">₹76,000</span>
            </div>
            <p className="text-[11px] text-[#5A483E]">
              320/500 units reached. Ready for buyer confirmation release.
            </p>
            <button
              onClick={() => {
                setMilestone2Released(!milestone2Released);
                showToast(
                  milestone2Released
                    ? 'Milestone 2 status reset'
                    : 'Milestone 2 (₹76,000) approved & released from escrow!'
                );
              }}
              className={`w-full py-2.5 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
                milestone2Released
                  ? 'bg-[#065F46] text-white'
                  : 'bg-[#9C3C18] text-white hover:bg-[#833013]'
              }`}
            >
              {milestone2Released ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Milestone 2 Released
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" /> Approve & Release ₹76,000
                </>
              )}
            </button>
          </div>

          {/* Milestone 3 (In Vault) */}
          <div className="bg-[#F9F6F3] rounded-2xl p-3 border border-[#EADBCE] flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-[#7A6A60]">🔒 Milestone 3 (20%) • In Vault</p>
              <p className="text-xs font-black text-[#1F1612] mt-0.5">
                ₹38,000 — Final QC & Dispatch
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#7A6A60]">Held</span>
          </div>

          <div className="text-center pt-1">
            <button
              onClick={() => showToast('Viewing full escrow audit trail')}
              className="text-[11.5px] font-bold text-[#9C3C18] hover:underline cursor-pointer"
            >
              View Full Escrow Audit Trail →
            </button>
          </div>
        </div>

        {/* 6. Cluster Quality Assurance */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-sm font-black text-[#1F1612] leading-tight">
              Cluster Quality<br />Assurance
            </h3>
            <span className="px-2 py-1 rounded-xl bg-[#F5EBE1] text-[#9C3C18] text-[9.5px] font-black text-center leading-tight">
              Pre–QC<br />Review
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#065F46] shrink-0 mt-0.5" />
              <p className="text-[#1F1612] font-semibold leading-relaxed">
                Smoke cure pest-free certified by cluster lead
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-[#065F46] shrink-0 mt-0.5" />
              <p className="text-[#1F1612] font-semibold leading-relaxed">
                Double-rim structural tension check (320 units)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-4 h-4 rounded-full border border-[#DCC8BB] shrink-0 mt-0.5" />
              <p className="text-[#7A6A60] leading-relaxed">
                Final dimensional caliper check (10–inch diameter)
              </p>
            </div>
          </div>

          <div className="h-px bg-[#F3E7DC]" />

          <div className="flex items-center justify-between text-[11px]">
            <button
              onClick={() => showToast('Opening quality standards')}
              className="font-bold text-[#9C3C18] hover:underline cursor-pointer"
            >
              Review Quality Guidelines
            </button>
            <span className="font-semibold text-[#7A6A60]">GI Assured #AS-4921</span>
          </div>
        </div>

        {/* 7. Artisan Card */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=120&q=80"
              alt="Ramesh"
              className="w-12 h-12 rounded-2xl object-cover border border-[#EBD6C7]"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-black text-[#1F1612]">Ramesh Kumar</h4>
              <p className="text-[11px] font-bold text-[#9C3C18]">Master Craftsman • 24 yrs exp</p>
              <p className="text-[10px] text-[#7A6A60] truncate">Barpeta Cane & Bamboo Co-op (32 Weavers)</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate(48, 'Opening Ramesh Kumar Master Profile')}
              className="flex-1 py-2 px-2 border border-[#DCC8BB] rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1 cursor-pointer"
            >
              <User className="w-3.5 h-3.5" /> View Profile
            </button>
            <button
              onClick={() => showToast('Opening chat with Ramesh Kumar')}
              className="flex-1 py-2 px-2 border border-[#DCC8BB] rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" /> Message
            </button>
          </div>
        </div>

        {/* 8. Order Updates Log */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-2.5">
          <h3 className="text-sm font-black text-[#1F1612]">Order Updates Log</h3>

          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2.5">
              <span className="text-[10px] font-bold text-[#7A6A60] w-24 shrink-0">
                17 Sep, 4:30 PM
              </span>
              <p className="text-[#3B2A22] leading-relaxed">
                Production started at Barpeta cluster loom after material seasoning check.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-[10px] font-bold text-[#7A6A60] w-24 shrink-0">
                17 Sep, 2:15 PM
              </span>
              <p className="text-[#3B2A22] leading-relaxed">
                Artisan Ramesh Kumar accepted the bulk order agreement.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-[10px] font-bold text-[#7A6A60] w-24 shrink-0">
                17 Sep, 11:20 AM
              </span>
              <p className="text-[#3B2A22] leading-relaxed">
                Cluster artisan confirmed bamboo stock readiness and dimension specs.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="text-[10px] font-bold text-[#7A6A60] w-24 shrink-0">
                17 Sep, 10:45 AM
              </span>
              <p className="text-[#3B2A22] leading-relaxed">
                Bulk order created with ₹76,000 Milestone 1 locked in escrow vault.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions (Download Invoice & Message Artisan) */}
        <div className="flex items-center gap-2 pt-2 pb-2">
          <button
            onClick={() => showToast('Downloading Tax Invoice #INV-88392.pdf')}
            className="flex-1 py-3 px-2 border border-[#DCC8BB] bg-white rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Download className="w-4 h-4 text-[#7A6A60]" /> Download Invoice
          </button>
          <button
            onClick={() => onNavigate(52, 'Opening bilingual chat with Ramesh Kumar')}
            className="flex-1 py-3 px-2 bg-[#9C3C18] text-white rounded-xl text-xs font-black hover:bg-[#833013] flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" /> Message Artisan
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <BuyerRequirementBottomNav activeTab="orders" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};
