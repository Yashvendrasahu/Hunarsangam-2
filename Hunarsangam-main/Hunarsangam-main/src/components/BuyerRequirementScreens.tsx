import React, { useState } from 'react';
import {
  Mic,
  Plus,
  Compass,
  Palette,
  Box,
  Calendar,
  Users,
  Search,
  CheckCircle2,
  Clock,
  Truck,
  Filter,
  ArrowRight,
  ArrowLeft,
  Share2,
  Sparkles,
  Camera,
  Upload,
  Paperclip,
  Trash2,
  RefreshCw,
  Edit3,
  Check,
  ChevronRight,
  ChevronDown,
  Layers,
  Leaf,
  ShieldCheck,
  Bell,
  Home,
  FileText,
  User,
  ShoppingBag,
  Info,
  Maximize2,
  HelpCircle,
} from 'lucide-react';

interface ScreenProps {
  onNavigate: (index: number, toastMsg?: string) => void;
  onBack?: () => void;
  showToast: (msg: string) => void;
}

// -----------------------------------------------------------------------------
// BOTTOM NAVIGATION BAR (with Requirement Tab active)
// -----------------------------------------------------------------------------
export const BuyerRequirementBottomNav: React.FC<{
  activeTab?: 'home' | 'discover' | 'requirement' | 'orders' | 'profile';
  onNavigate: (index: number, msg?: string) => void;
  showToast: (msg: string) => void;
}> = ({ activeTab = 'requirement', onNavigate, showToast }) => {
  return (
    <div className="bg-white border-t border-[#EFE2D8] px-4 py-2 flex items-center justify-between shrink-0 shadow-lg z-20">
      {/* Home */}
      <button
        onClick={() => onNavigate(34, 'Returning to Bulk Buyer Home')}
        className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
          activeTab === 'home' ? 'text-[#9C3C18] font-bold' : 'text-[#8C7A70] hover:text-[#1F1612]'
        }`}
      >
        <Home className="w-4 h-4" />
        <span className="text-[10px]">Home</span>
      </button>

      {/* Discover */}
      <button
        onClick={() => onNavigate(35, 'Opening Discover Catalog')}
        className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
          activeTab === 'discover' ? 'text-[#9C3C18] font-bold' : 'text-[#8C7A70] hover:text-[#1F1612]'
        }`}
      >
        <Compass className="w-4 h-4" />
        <span className="text-[10px]">Discover</span>
      </button>

      {/* Requirement (Active) */}
      <button
        onClick={() => onNavigate(41, 'My Requirements')}
        className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
          activeTab === 'requirement'
            ? 'text-[#9C3C18] font-black'
            : 'text-[#8C7A70] hover:text-[#1F1612]'
        }`}
      >
        <div className="relative">
          <FileText className="w-4 h-4 text-[#9C3C18]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#9C3C18] rounded-full" />
        </div>
        <span className="text-[10px] text-[#9C3C18] font-black">Requirement</span>
      </button>

      {/* Orders */}
      <button
        onClick={() => onNavigate(49, 'Viewing Orders & Production Hub')}
        className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
          activeTab === 'orders' ? 'text-[#9C3C18] font-bold' : 'text-[#8C7A70] hover:text-[#1F1612]'
        }`}
      >
        <Truck className="w-4 h-4" />
        <span className="text-[10px]">Orders</span>
      </button>

      {/* Profile */}
      <button
        onClick={() => onNavigate(51, 'Viewing Buyer Enterprise Profile')}
        className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
          activeTab === 'profile' ? 'text-[#9C3C18] font-bold' : 'text-[#8C7A70] hover:text-[#1F1612]'
        }`}
      >
        <User className="w-4 h-4" />
        <span className="text-[10px]">Profile</span>
      </button>
    </div>
  );
};

// =============================================================================
// 1. SCREEN 41: MY REQUIREMENTS (r1 - bulk - requriment section.png)
// =============================================================================
export const BuyerRequirementsScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  showToast,
}) => {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#FCF9F6] text-[#1F1612] font-sans select-none overflow-hidden">
      {/* Top Header */}
      <div className="px-5 pt-4 pb-3 flex items-center justify-between shrink-0 bg-[#FCF9F6]">
        <div>
          <h1 className="text-xl font-black text-[#1F1612] tracking-tight">My Requirements</h1>
          <p className="text-xs text-[#7A6A60] font-medium mt-0.5">Manage your bulk sourcing requirements</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('Language: English (Tap to switch to Hindi / regional)')}
            className="flex items-center gap-1 bg-[#F5ECE5] hover:bg-[#EBDDCF] text-[#4A382D] text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer border border-[#E7D6C8]"
          >
            <span>EN</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#7A6A60]" />
          </button>
          <button
            onClick={() => showToast('🔔 2 new updates on Kutch Pottery Guild order')}
            className="relative w-8 h-8 rounded-full bg-[#F5ECE5] hover:bg-[#EBDDCF] text-[#4A382D] flex items-center justify-center transition-colors cursor-pointer border border-[#E7D6C8]"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#D9531E] rounded-full ring-1 ring-white" />
          </button>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-4">
        {/* 1. Terracotta Hero Card */}
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#B3451B] via-[#9E3A14] to-[#7E2908] text-white p-4 shadow-md">
          {/* Subtle Craft Watermark Icon */}
          <div className="absolute right-2 top-2 opacity-15 pointer-events-none text-white">
            <Compass className="w-24 h-24 stroke-[1]" />
          </div>

          {/* Top Title Row */}
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-10 h-10 rounded-full border border-white/40 bg-white/10 flex items-center justify-center shrink-0">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-base font-black tracking-tight leading-tight">Add New Requirement</h2>
              <p className="text-xs text-white/80 font-normal">Create a new bulk sourcing requirement</p>
            </div>
          </div>

          {/* Speak your requirement quick mic box */}
          <div
            onClick={() => onNavigate(42, '🎙️ Voice Requirement: Speak in Hindi or English')}
            className="mb-3 bg-black/25 hover:bg-black/35 border border-white/20 rounded-2xl p-2.5 flex items-center justify-between cursor-pointer transition-all relative z-10"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
                <Mic className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-xs font-bold text-white leading-tight">Speak your requirement</span>
                <span className="block text-[11px] text-white/70 italic truncate">
                  &ldquo;Mujhe 500 handmade terracotta cups c...&rdquo;
                </span>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full bg-white text-[#9C3C18] flex items-center justify-center shrink-0 shadow-xs">
              <div className="flex items-center gap-0.5">
                <span className="w-0.5 h-2.5 bg-[#9C3C18] rounded-full animate-pulse" />
                <span className="w-0.5 h-4 bg-[#9C3C18] rounded-full" />
                <span className="w-0.5 h-3 bg-[#9C3C18] rounded-full animate-pulse" />
                <span className="w-0.5 h-1.5 bg-[#9C3C18] rounded-full" />
              </div>
            </div>
          </div>

          {/* Main Create Requirement Button */}
          <button
            onClick={() => onNavigate(42, 'Opening Requirement Creation Flow')}
            className="w-full py-3 bg-white hover:bg-[#FAF4EF] text-[#8C300E] font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-[0.99] cursor-pointer mb-3 relative z-10"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Create Requirement</span>
          </button>

          {/* Flow Stepper Bar (Product > Quantity > Date > Artisans) */}
          <div className="pt-2.5 border-t border-white/20 flex items-center justify-between px-2 relative z-10">
            <div className="flex flex-col items-center gap-1 text-center">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
                <Palette className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] text-white/85 font-medium">Product</span>
            </div>

            <span className="text-white/40 text-[10px]">&rsaquo;</span>

            <div className="flex flex-col items-center gap-1 text-center">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
                <Box className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] text-white/85 font-medium">Quantity</span>
            </div>

            <span className="text-white/40 text-[10px]">&rsaquo;</span>

            <div className="flex flex-col items-center gap-1 text-center">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] text-white/85 font-medium">Date</span>
            </div>

            <span className="text-white/40 text-[10px]">&rsaquo;</span>

            <div className="flex flex-col items-center gap-1 text-center">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs">
                <Users className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] text-white/85 font-medium">Artisans</span>
            </div>
          </div>
        </div>

        {/* Section: Previous Requirements */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-black text-[#1F1612] tracking-tight">Previous Requirements</h2>
            <span className="px-2 py-0.5 rounded-full bg-[#EFE4DB] text-[#4A382D] text-xs font-black">
              3
            </span>
          </div>

          <button
            onClick={() => {
              setFilterActive(!filterActive);
              showToast(filterActive ? 'Filter reset to All' : 'Filters applied: Active & Recent');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#FAF4EF] border border-[#E3D4C8] rounded-xl text-xs font-bold text-[#4A382D] shadow-2xs transition-colors cursor-pointer"
          >
            <Filter className="w-3.5 h-3.5 text-[#9C3C18]" />
            <span>Filter &amp; Sort</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* CARD 1: Handmade Terracotta Cups (In Progress) */}
        {/* ========================================================================= */}
        <div className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 shadow-2xs space-y-3 hover:border-[#DFC8BA] transition-all">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=300&q=80"
              alt="Handmade Terracotta Cups"
              className="w-20 h-20 rounded-xl object-cover border border-[#EADBCE] shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-1">
                <h3 className="text-sm font-black text-[#1F1612] truncate">Handmade Terracotta Cups</h3>
              </div>

              <div className="mt-1">
                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#B45309] bg-[#FEF3C7] border border-[#FDE68A] px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  In Progress
                </span>
              </div>

              <p className="text-xs text-[#6B5A4E] mt-1 font-medium">
                500 pieces &bull; Req: 20 Oct 2026
              </p>
              <p className="text-xs font-black text-[#9C3C18]">
                Target: ₹45/pc
              </p>
            </div>
          </div>

          {/* Progress row */}
          <div className="pt-2 border-t border-[#F5ECE5] space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-[#4A382D] font-bold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
                <span>Kutch Traditional Pottery Guild</span>
              </div>
              <span className="text-[11px] font-black text-[#9C3C18]">65% completed</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-[#F0E6DF] rounded-full overflow-hidden">
              <div className="h-full bg-[#B3451B] rounded-full w-[65%]" />
            </div>
          </div>

          <button
            onClick={() => onNavigate(43, 'Opening Details: Handmade Terracotta Cups (65% crafted)')}
            className="w-full py-2 bg-[#FFF9F5] hover:bg-[#FBEFE7] border border-[#ECD9CC] text-[#9C3C18] text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* CARD 2: Handwoven Cotton Tote Bags (Awaiting Response) */}
        {/* ========================================================================= */}
        <div className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 shadow-2xs space-y-3 hover:border-[#DFC8BA] transition-all">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80"
              alt="Handwoven Cotton Tote Bags"
              className="w-20 h-20 rounded-xl object-cover border border-[#EADBCE] shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-black text-[#1F1612] truncate">Handwoven Cotton Tote Bags</h3>

              <div className="mt-1">
                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#C2410C] bg-[#FFF7ED] border border-[#FFEDD5] px-2 py-0.5 rounded-full">
                  <Clock className="w-3 h-3 text-[#C2410C]" />
                  Awaiting Response
                </span>
              </div>

              <p className="text-xs text-[#6B5A4E] mt-1 font-medium">
                200 pieces &bull; Req: 5 Nov 2026
              </p>
              <p className="text-xs font-black text-[#9C3C18]">
                Target: ₹180/pc
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#F5ECE5] flex items-center gap-1.5 text-xs text-[#6B5A4E] font-medium">
            <Users className="w-3.5 h-3.5 text-[#9C3C18] shrink-0" />
            <span className="text-[11px] truncate">Sent to 3 artisan clusters &bull; 2 reviewing schedule</span>
          </div>

          <button
            onClick={() => onNavigate(43, 'Opening Details: Handwoven Cotton Tote Bags')}
            className="w-full py-2 bg-[#FFF9F5] hover:bg-[#FBEFE7] border border-[#ECD9CC] text-[#9C3C18] text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ========================================================================= */}
        {/* CARD 3: Traditional Wooden Desk Decor (Completed) */}
        {/* ========================================================================= */}
        <div className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 shadow-2xs space-y-3 hover:border-[#DFC8BA] transition-all">
          <div className="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=300&q=80"
              alt="Traditional Wooden Desk Decor"
              className="w-20 h-20 rounded-xl object-cover border border-[#EADBCE] shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-black text-[#1F1612] truncate">Traditional Wooden Desk Decor</h3>

              <div className="mt-1">
                <span className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#15803D] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-[#15803D]" />
                  Completed
                </span>
              </div>

              <p className="text-xs text-[#6B5A4E] mt-1 font-medium">
                100 pieces &bull; Delivered 15 Sep 2026
              </p>
              <p className="text-xs font-black text-[#047857]">
                Total: ₹42,000
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-[#F5ECE5] flex items-center gap-1.5 text-xs text-[#065F46] font-medium bg-[#F0FDF4] p-2 rounded-xl border border-[#DCFCE7]">
            <Truck className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
            <span className="text-[11px] font-semibold">Delivered successfully to Mumbai warehouse</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onNavigate(43, 'Viewing Completed Order Archive: Wooden Desk Decor')}
              className="py-2 bg-[#FFF9F5] hover:bg-[#FBEFE7] border border-[#ECD9CC] text-[#9C3C18] text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              View Details
            </button>
            <button
              onClick={() => onNavigate(42, 'Cloning requirement: Wooden Desk Decor')}
              className="py-2 bg-[#FFEDE4] hover:bg-[#FDDBCF] border border-[#FAD0C0] text-[#8C300E] text-xs font-black rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>+ Create Similar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <BuyerRequirementBottomNav activeTab="requirement" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};

// =============================================================================
// 2. SCREEN 42: VOICE-FIRST REQUIREMENT (r2- bulk — Voice-First Requirement Description.png)
// =============================================================================
export const BuyerVoiceRequirementScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
  const [isRecording, setIsRecording] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [promptIdeaIndex, setPromptIdeaIndex] = useState(0);

  const promptIdeas = [
    'tell here actual product need , quantity , timeline deadline , deminsion or any specification',
    'Example: "Mujhe 300 blue pottery vases chahiye with floral jaipuri motifs within 30 days"',
    'Example: "500 handwoven ikkat silk stoles for corporate conference gifts with custom branded wooden boxes"',
  ];

  const [transcribedText, setTranscribedText] = useState(
    'Need 500 handwoven natural bamboo fruit baskets with reinforced dual-rim finish. Size approximately 10-inch diameter. Packaging required in individual biodegradable brown paper boxes with custom brand tags.'
  );

  return (
    <div className="flex flex-col h-full bg-[#FCF9F6] text-[#1F1612] font-sans select-none overflow-hidden">
      {/* Top AppBar */}
      <div className="px-4 py-3 bg-[#FCF9F6] border-b border-[#F0E6DE] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (onBack) onBack();
              else onNavigate(41);
            }}
            className="w-8 h-8 rounded-full bg-[#F5ECE5] hover:bg-[#EBDDCF] flex items-center justify-center text-[#1F1612] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-sm font-black text-[#8C300E] leading-tight">Post Bulk Requirement</h1>
            <p className="text-[11px] text-[#7A6A60] font-medium leading-none">Step 1 of 3: Requirement Description</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#D1FAE5] border border-[#A7F3D0] rounded-full text-[11px] font-bold text-[#065F46]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>AI Voice</span>
          </div>
          <button
            onClick={() => showToast('Language switched: Hindi / Hinglish translation active')}
            className="w-7 h-7 rounded-full bg-[#F5ECE5] text-[#8C300E] flex items-center justify-center text-xs font-bold hover:bg-[#EBDDCF] transition-colors cursor-pointer"
          >
            文A
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5">
        {/* Role Tag */}
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FBF1EA] text-[#8C300E] border border-[#F2D7C6] text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8C300E]" />
            Role: Bulk Buyer Enterprise Portal
          </span>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-xl font-black text-[#1F1612] tracking-tight">Tell us what you need</h2>
          <p className="text-xs text-[#6E5A4E] mt-1 leading-relaxed">
            Speak naturally in Hindi, English, or regional languages. Our platform transcribes, extracts, and matches your craft specifications.
          </p>
        </div>

        {/* Voice Recording Card */}
        <div className="bg-[#FAF4EF] border border-[#EBDCCF] rounded-2xl p-4 text-center space-y-3 shadow-2xs">
          {/* Big Circular Mic Button with concentric rings */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => {
                setIsRecording(!isRecording);
                showToast(isRecording ? 'Voice recording paused' : '🎤 Listening: Speak now...');
              }}
              className="relative group cursor-pointer"
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-white transition-all shadow-md ${
                  isRecording
                    ? 'bg-[#9C3C18] ring-8 ring-[#F5D8C7] ring-offset-2 ring-offset-transparent'
                    : 'bg-[#B3451B] opacity-90'
                }`}
              >
                <Mic className="w-9 h-9" />
              </div>
            </button>
          </div>

          <div>
            <h3 className="text-sm font-black text-[#8C300E]">
              Tap to Speak / बोलकर बताएं
            </h3>
            <p className="text-[11px] text-[#7A695E] font-medium mt-0.5">
              Listening: 00:14 &bull; Hindi / Hinglish / English
            </p>
          </div>

          {/* Sound Waveform Visualizer */}
          <div className="bg-[#F3E8DF] border border-[#E5D5C8] rounded-xl py-2 px-4 flex items-center justify-center gap-1.5">
            {[10, 24, 14, 32, 20, 36, 16, 28, 12, 30, 18, 8].map((height, i) => (
              <span
                key={i}
                style={{ height: `${isRecording ? height : 6}px` }}
                className="w-1 bg-[#9C3C18] rounded-full transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* Voice Prompt Idea Card */}
        <div className="bg-[#FFF8F2] border border-[#F5DFD0] rounded-2xl p-3 flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-[#FEE9D9] flex items-center justify-center text-[#B45309] shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#8C300E]">Voice Prompt Idea</span>
              <button
                onClick={() => {
                  setPromptIdeaIndex((prev) => (prev + 1) % promptIdeas.length);
                  showToast('Updated prompt suggestion');
                }}
                className="text-[11px] font-bold text-[#8C300E] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Try another</span>
              </button>
            </div>
            <p className="text-[11px] text-[#6B5A4E] italic mt-1 leading-normal">
              {promptIdeas[promptIdeaIndex]}
            </p>
          </div>
        </div>

        {/* Transcribed Requirement Card */}
        <div className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 space-y-2.5 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#15803D]" />
              <h3 className="text-xs font-black text-[#1F1612]">Transcribed Requirement</h3>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46] text-[10px] font-black border border-[#A7F3D0]">
              AI Processed
            </span>
          </div>

          {/* Quotation text box */}
          <div className="bg-[#FAF5F0] border border-[#ECDCCF] rounded-xl p-3">
            {isEditing ? (
              <textarea
                value={transcribedText}
                onChange={(e) => setTranscribedText(e.target.value)}
                className="w-full text-xs text-[#1F1612] bg-white p-2 rounded-lg border border-[#E5D7CD] outline-none font-medium resize-none"
                rows={4}
              />
            ) : (
              <p className="text-xs text-[#2E1E17] font-medium leading-relaxed">
                &ldquo;{transcribedText}&rdquo;
              </p>
            )}
          </div>

          {/* Transcription actions */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsEditing(!isEditing);
                  showToast(isEditing ? 'Saved edited requirement' : 'Editing transcribed text');
                }}
                className="flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-[#FAF5F0] border border-[#E3D4C8] rounded-xl text-xs font-bold text-[#4A382D] cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#9C3C18]" />
                <span>{isEditing ? 'Save Text' : 'Edit Text'}</span>
              </button>
              <button
                onClick={() => showToast('🎤 Speak Again: Listening for new audio...')}
                className="flex items-center gap-1 px-3 py-1.5 bg-white hover:bg-[#FAF5F0] border border-[#E3D4C8] rounded-xl text-xs font-bold text-[#4A382D] cursor-pointer"
              >
                <Mic className="w-3.5 h-3.5 text-[#9C3C18]" />
                <span>Speak Again</span>
              </button>
            </div>

            <button
              onClick={() => {
                setTranscribedText('');
                showToast('Transcription cleared');
              }}
              className="w-8 h-8 rounded-xl bg-[#FEF2F2] hover:bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA] flex items-center justify-center cursor-pointer transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Auto-Extracted Specifications (2x2 grid) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-[#1F1612]">Auto-Extracted Specifications</h3>
            <span className="text-[11px] font-bold text-[#7A6A60]">4 tags confirmed</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Tag 1 */}
            <div className="bg-[#FAF4EF] border border-[#EADBCE] rounded-xl p-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white border border-[#E0D0C2] flex items-center justify-center text-[#9C3C18] shrink-0">
                <Box className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[9px] font-black text-[#8C7A70] tracking-wider uppercase">Product</span>
                <span className="block text-xs font-bold text-[#1F1612] truncate">Bamboo Fruit Basket</span>
              </div>
            </div>

            {/* Tag 2 */}
            <div className="bg-[#FAF4EF] border border-[#EADBCE] rounded-xl p-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white border border-[#E0D0C2] flex items-center justify-center text-[#9C3C18] shrink-0">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[9px] font-black text-[#8C7A70] tracking-wider uppercase">Quantity</span>
                <span className="block text-xs font-bold text-[#1F1612] truncate">500 pcs</span>
              </div>
            </div>

            {/* Tag 3 */}
            <div className="bg-[#FAF4EF] border border-[#EADBCE] rounded-xl p-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white border border-[#E0D0C2] flex items-center justify-center text-[#9C3C18] shrink-0">
                <Edit3 className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[9px] font-black text-[#8C7A70] tracking-wider uppercase">Finish</span>
                <span className="block text-xs font-bold text-[#1F1612] truncate">Double-Rim Natural</span>
              </div>
            </div>

            {/* Tag 4 */}
            <div className="bg-[#FAF4EF] border border-[#EADBCE] rounded-xl p-2.5 flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white border border-[#E0D0C2] flex items-center justify-center text-[#9C3C18] shrink-0">
                <Leaf className="w-3.5 h-3.5" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[9px] font-black text-[#8C7A70] tracking-wider uppercase">Packaging</span>
                <span className="block text-xs font-bold text-[#1F1612] truncate">Eco Gift Box</span>
              </div>
            </div>
          </div>
        </div>

        {/* Target Dispatch Within Box */}
        <div className="bg-[#FFF6EF] border border-[#F4DEC8] rounded-2xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#FEEADB] flex items-center justify-center text-[#9C3C18] shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="block text-xs font-black text-[#1F1612]">Target Dispatch Within</span>
              <span className="block text-[11px] text-[#7A6A60] font-medium">Recommended: 18&ndash;24 Days for Crafting</span>
            </div>
          </div>

          <button
            onClick={() => showToast('Timeline adjust: 15-30 days flexible window')}
            className="text-xs font-black text-[#9C3C18] hover:underline cursor-pointer"
          >
            Adjust
          </button>
        </div>

        {/* Sticky Continue Button */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate(43, 'Proceeding to Step 2: Requirement Review')}
            className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] text-white font-black text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-[0.99] cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <BuyerRequirementBottomNav activeTab="requirement" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};

// =============================================================================
// 3. SCREEN 43: CREATE BULK REQUIREMENT REVIEW (r3-bulk — Create Bulk Requirement review.png)
// =============================================================================
export const BuyerRequirementReviewScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
  const [quantity, setQuantity] = useState(500);

  return (
    <div className="flex flex-col h-full bg-[#FCF9F6] text-[#1F1612] font-sans select-none overflow-hidden">
      {/* Top AppBar */}
      <div className="px-4 py-3 bg-[#FCF9F6] border-b border-[#F0E6DE] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (onBack) onBack();
              else onNavigate(42);
            }}
            className="w-8 h-8 rounded-full bg-[#F5ECE5] hover:bg-[#EBDDCF] flex items-center justify-center text-[#1F1612] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-sm font-black text-[#8C300E] leading-tight">Post Bulk Requirement</h1>
            <p className="text-[11px] text-[#7A6A60] font-medium leading-none">Step 2 of 3: Requirement Description</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#D1FAE5] border border-[#A7F3D0] rounded-full text-[11px] font-bold text-[#065F46]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>AI Voice</span>
          </div>
          <button
            onClick={() => showToast('Language switched: Hindi / Hinglish active')}
            className="w-7 h-7 rounded-full bg-[#F5ECE5] text-[#8C300E] flex items-center justify-center text-xs font-bold hover:bg-[#EBDDCF] transition-colors cursor-pointer"
          >
            文A
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {/* Banner: Sourcing Needs Info */}
        <div className="bg-[#FFF8F2] border border-[#F5E2D3] rounded-2xl p-3 flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-xl bg-[#FEE9D9] flex items-center justify-center text-[#9C3C18] shrink-0 mt-0.5">
            <Users className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-[#4A382D] font-medium leading-relaxed">
              Specify your sourcing needs to connect directly with verified master artisan clusters.
            </p>
            <div className="mt-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#065F46]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Bulk Buyer Direct Access
              </span>
            </div>
          </div>
        </div>

        {/* Quick Voice-Fill Card */}
        <div
          onClick={() => onNavigate(42, 'Opening voice-fill speech prompt')}
          className="bg-[#FAF2EB] border border-[#E8D4C5] rounded-2xl p-3 flex items-center gap-3 cursor-pointer hover:border-[#9C3C18] transition-all shadow-2xs"
        >
          <div className="w-10 h-10 rounded-full bg-[#9C3C18] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Mic className="w-5 h-5" />
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black text-[#8C300E] tracking-wider uppercase">
                Quick Voice-Fill
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white text-[#7A6A60] text-[9.5px] font-bold border border-[#E5D7CD]">
                Any Language
              </span>
            </div>
            <p className="text-xs text-[#2E1E17] italic font-medium truncate mt-0.5">
              &ldquo;Mujhe 500 bamboo baskets chahiye for corporate gifting by next month.&rdquo;
            </p>
            <span className="block text-[10px] text-[#8C7A70] mt-0.5">
              Tap mic to autofill this entire screen in seconds
            </span>
          </div>
        </div>

        {/* Section 1: What do you need? */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#1F1612]">
              <Box className="w-4 h-4 text-[#9C3C18]" />
              <span>What do you need?</span>
            </div>
            <button
              onClick={() => onNavigate(35, 'Select different craft item from catalog')}
              className="text-xs font-bold text-[#8C300E] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Change</span>
              <Edit3 className="w-3 h-3" />
            </button>
          </div>

          <div className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#FAF0E7] border border-[#EBD6C7] flex items-center justify-center text-[#9C3C18] shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#1F1612]">Handmade Bamboo Fruit Baskets</h3>
                <div className="flex items-center gap-1.5 text-[11px] text-[#6B5A4E] mt-0.5 font-medium">
                  <span>Eco-friendly</span>
                  <span>&bull;</span>
                  <span>Lacquered Natural Finish</span>
                </div>
              </div>
            </div>

            <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Section 2: Craft & Artisan Cluster */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#1F1612]">
              <Palette className="w-4 h-4 text-[#9C3C18]" />
              <span>Craft &amp; Artisan Cluster</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46] text-[10px] font-black border border-[#A7F3D0]">
              Verified GI Craft
            </span>
          </div>

          <div
            onClick={() => onNavigate(38, 'Viewing Assam & West Bengal Bamboo Clusters')}
            className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 space-y-2 shadow-2xs cursor-pointer hover:border-[#9C3C18] transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black text-[#1F1612]">Bamboo &amp; Cane Craft</h3>
                <p className="text-xs text-[#6B5A4E] mt-0.5 font-medium flex items-center gap-1">
                  <span className="text-[#9C3C18]">📍</span>
                  <span>Assam (Barpeta) &amp; West Bengal clusters</span>
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#8C7A70]" />
            </div>

            <div className="pt-2 border-t border-[#F5ECE5]">
              <span className="text-xs font-bold text-[#8C300E]">
                Active Artisan Cooperatives: 14 Master Guilds Available
              </span>
            </div>
          </div>
        </div>

        {/* Section 3: Quantity Needed */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#1F1612]">
              <Layers className="w-4 h-4 text-[#9C3C18]" />
              <span>Quantity Needed</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-[#FAF0E8] text-[#8C300E] text-[10px] font-black border border-[#F0DFD2]">
              Standard Bulk Tier
            </span>
          </div>

          <div className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-black text-[#1F1612]">{quantity}</span>
                <span className="text-xs font-medium text-[#6B5A4E]">pieces</span>
              </div>
              <p className="text-[11px] font-bold text-[#15803D] mt-0.5">
                Wholesale pricing bracket active (₹380 &ndash; ₹410/pc)
              </p>
            </div>

            {/* Stepper Pill */}
            <div className="flex items-center gap-2 bg-[#F8F1EA] border border-[#E8D9CC] rounded-full px-2 py-1">
              <button
                onClick={() => {
                  if (quantity > 100) setQuantity((q) => q - 50);
                  showToast('Updated quantity');
                }}
                className="w-6 h-6 rounded-full bg-white hover:bg-[#FAF0E7] text-[#1F1612] font-black text-sm flex items-center justify-center cursor-pointer shadow-2xs"
              >
                &minus;
              </button>
              <span className="text-xs font-bold text-[#8C300E]">Edit</span>
              <button
                onClick={() => {
                  setQuantity((q) => q + 50);
                  showToast('Updated quantity');
                }}
                className="w-6 h-6 rounded-full bg-white hover:bg-[#FAF0E7] text-[#1F1612] font-black text-sm flex items-center justify-center cursor-pointer shadow-2xs"
              >
                &#43;
              </button>
            </div>
          </div>
        </div>

        {/* Section 4: Required Delivery Timeline */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-black text-[#1F1612]">
              <Calendar className="w-4 h-4 text-[#9C3C18]" />
              <span>Required Delivery Timeline</span>
            </div>
            <button
              onClick={() => showToast('Timeline editor: select required milestone')}
              className="text-xs font-bold text-[#8C300E] hover:underline cursor-pointer"
            >
              Adjust
            </button>
          </div>

          <div className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF0E7] border border-[#EBD6C7] flex items-center justify-center text-[#9C3C18] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#1F1612]">45 Days</h3>
                <p className="text-xs text-[#6B5A4E] font-medium mt-0.5">
                  Estimated arrival: Mid Next Month
                </p>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-full bg-[#FAF0E7] border border-[#E8D4C5] text-xs font-bold text-[#4A382D]">
              Flexible (&plusmn; 5 days)
            </span>
          </div>
        </div>

        {/* Sticky Continue Button */}
        <div className="pt-2 space-y-1.5">
          <button
            onClick={() => onNavigate(44, 'Proceeding to Step 3: Reference Design')}
            className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] text-white font-black text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-[0.99] cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center text-[11px] text-[#7A6A60] font-medium">
            Step 2 will cover reference photos, budget &amp; customization.
          </p>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <BuyerRequirementBottomNav activeTab="requirement" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};

// =============================================================================
// 4. SCREEN 44: REFERENCE IMAGE UPLOAD (r4- bulk  — Reference Image.png)
// =============================================================================
export const BuyerReferenceImageScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
  const [hasImage, setHasImage] = useState(true);

  return (
    <div className="flex flex-col h-full bg-[#FCF9F6] text-[#1F1612] font-sans select-none overflow-hidden">
      {/* Top AppBar */}
      <div className="px-4 py-3 bg-[#FCF9F6] border-b border-[#F0E6DE] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (onBack) onBack();
              else onNavigate(43);
            }}
            className="w-8 h-8 rounded-full bg-[#F5ECE5] hover:bg-[#EBDDCF] flex items-center justify-center text-[#1F1612] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-sm font-black text-[#8C300E] leading-tight">Post Bulk Requirement</h1>
            <p className="text-[11px] text-[#7A6A60] font-medium leading-none">Step 3 of 3 &bull; Reference Design</p>
          </div>
        </div>

        <button
          onClick={() => showToast('Language switched: Hindi / Hinglish translation active')}
          className="w-7 h-7 rounded-full bg-[#F5ECE5] text-[#8C300E] flex items-center justify-center text-xs font-bold hover:bg-[#EBDDCF] transition-colors cursor-pointer"
        >
          文A
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5">
        {/* Bulk Buyer Mode Tag */}
        <div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0] text-[11px] font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            Bulk Buyer Mode
          </span>
        </div>

        {/* Title */}
        <div>
          <h2 className="text-xl font-black text-[#1F1612] tracking-tight">Have a reference design?</h2>
          <p className="text-xs text-[#6E5A4E] mt-1 leading-relaxed">
            Use an image to show artisans the exact style, weave, shape or custom finishing you want.
          </p>
        </div>

        {/* Two Upload Cards (Side-by-side) */}
        <div className="grid grid-cols-2 gap-3">
          {/* Card 1: Take Photo */}
          <button
            onClick={() => {
              setHasImage(true);
              showToast('📷 Camera launched: Captured reference sample photo');
            }}
            className="bg-[#FAF4EF] hover:bg-[#F5ECE2] border border-[#EADBCE] rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all shadow-2xs active:scale-[0.98]"
          >
            <div className="w-11 h-11 rounded-full bg-[#F5ECE2] flex items-center justify-center text-[#8C300E]">
              <Camera className="w-5 h-5" />
            </div>
            <div className="text-center">
              <span className="block text-xs font-black text-[#1F1612]">Take Photo</span>
              <span className="block text-[10px] text-[#7A6A60] font-medium mt-0.5">Instant capture</span>
            </div>
          </button>

          {/* Card 2: Upload Image */}
          <button
            onClick={() => {
              setHasImage(true);
              showToast('📁 File picker: Selected reference image from device');
            }}
            className="bg-[#FAF4EF] hover:bg-[#F5ECE2] border border-[#EADBCE] rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all shadow-2xs active:scale-[0.98]"
          >
            <div className="w-11 h-11 rounded-full bg-[#F5ECE2] flex items-center justify-center text-[#8C300E]">
              <Upload className="w-5 h-5" />
            </div>
            <div className="text-center">
              <span className="block text-xs font-black text-[#1F1612]">Upload Image</span>
              <span className="block text-[10px] text-[#7A6A60] font-medium mt-0.5">JPG, PNG, WEBP</span>
            </div>
          </button>
        </div>

        {/* Attached Reference Preview Card */}
        {hasImage ? (
          <div className="bg-white border border-[#EFE2D8] rounded-2xl overflow-hidden shadow-2xs space-y-3 p-2.5">
            {/* Image Preview Container */}
            <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-[#FAF0E8]">
              {/* Overlaid Reference Badge */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 text-[#1F1612] text-[10.5px] font-black shadow-sm backdrop-blur-xs">
                  <Paperclip className="w-3 h-3 text-[#9C3C18]" />
                  1 Reference Attached
                </span>
              </div>

              {/* Main Reference Photo */}
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80"
                alt="Reference Bamboo Fruit Basket"
                className="w-full h-full object-cover"
              />

              {/* Interactive Tag Pointer Pin */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer animate-pulse">
                <div className="w-8 h-8 rounded-full bg-[#9C3C18]/90 text-white flex items-center justify-center shadow-lg border-2 border-white">
                  <span className="text-xs font-bold">&#x270B;</span>
                </div>
              </div>

              {/* Bottom Photo Specs Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-xs px-3 py-2 flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-1.5 font-medium truncate">
                  <Leaf className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span className="truncate">Bamboo Fruit Basket 10&ndash;inch</span>
                </div>
                <span className="text-[10px] text-white/80 shrink-0 font-bold">2.4 MB</span>
              </div>
            </div>

            {/* Actions beneath the photo */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => showToast('Select new photo to replace')}
                className="py-2 bg-white hover:bg-[#FAF5F0] border border-[#E3D4C8] text-[#1F1612] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#7A6A60]" />
                <span>Replace Image</span>
              </button>

              <button
                onClick={() => {
                  setHasImage(false);
                  showToast('Removed attached reference');
                }}
                className="py-2 bg-[#FEF2F2] hover:bg-[#FEE2E2] border border-[#FECACA] text-[#DC2626] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>Remove</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 border-2 border-dashed border-[#E5D7CD] rounded-2xl text-center space-y-2 bg-[#FAF5F0]">
            <Paperclip className="w-8 h-8 text-[#9C3C18] mx-auto" />
            <p className="text-xs font-bold text-[#1F1612]">No reference photo attached</p>
            <p className="text-[11px] text-[#7A6A60]">You can still submit your requirement without reference images.</p>
          </div>
        )}

        {/* Don't have a photo? Skip this step link */}
        <div className="text-center pt-1">
          <button
            onClick={() => onNavigate(45, 'Proceeding to Review & Matching...')}
            className="text-xs font-bold text-[#8C300E] hover:underline cursor-pointer"
          >
            Don&rsquo;t have a photo? Skip this step
          </button>
        </div>

        {/* Sticky Continue Button */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate(45, 'Proceeding to Review & Matching...')}
            className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] text-white font-black text-sm rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-transform active:scale-[0.99] cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <BuyerRequirementBottomNav activeTab="requirement" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};
