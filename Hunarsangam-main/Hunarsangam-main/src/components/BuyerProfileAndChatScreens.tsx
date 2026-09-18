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
  Mail,
  Building,
  BadgePercent,
  Sliders,
  Bell,
  Languages,
  HelpCircle,
  LogOut,
  MapPin,
  Play,
  Pause,
  Volume2,
  CheckCheck,
  Plus,
  Mic,
  MoreVertical,
  Receipt,
  FileCheck2,
  Activity,
  History,
} from 'lucide-react';
import { BuyerRequirementBottomNav } from './BuyerRequirementScreens';

interface ScreenProps {
  onNavigate: (index: number, toastMsg?: string) => void;
  onBack?: () => void;
  showToast: (msg: string) => void;
}

// -------------------------------------------------------------
// 51. BUYER PROFILE SECTION (matching 'bulk - profile section.png')
// -------------------------------------------------------------
export const BuyerProfileScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
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
          <h1 className="text-base font-black text-[#1F1612]">My Profile</h1>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* 1. Profile Summary Card */}
        <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-3.5">
          <div className="flex items-start gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-[#F3E7DC] border border-[#E5D5C8] flex items-center justify-center text-[#6B4226] font-black text-xl shrink-0">
              CC
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-black text-[#1F1612] truncate">
                CraftHouse Collective
              </h2>
              <p className="text-xs font-semibold text-[#7A6A60] mt-0.5">Rahul Sharma</p>
              <div className="flex items-center gap-1.5 text-xs text-[#7A6A60] mt-1">
                <CheckCircle className="w-3.5 h-3.5 text-[#065F46] shrink-0" />
                <MapPin className="w-3.5 h-3.5 text-[#7A6A60] shrink-0" />
                <span className="truncate">Indore, Madhya Pradesh</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-full bg-[#9C3C18] text-white text-[11px] font-black">
              Bulk Buyer
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#D1FAE5] text-[#065F46] border border-[#A7F3D0] text-[11px] font-bold">
              ✓ Verified Enterprise
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#FAF2EB] text-[#7A6A60] border border-[#EADBCE] text-[11px] font-bold">
              🏪 Retail Chain
            </span>
          </div>

          <div className="h-px bg-[#F3E7DC]" />

          {/* Profile Status */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#1F1612]">Profile Status</span>
              <span className="font-black text-[#9C3C18]">80% Complete</span>
            </div>
            <div className="h-1.5 rounded-full bg-[#F0E5DC] overflow-hidden">
              <div className="h-full bg-[#9C3C18] w-[80%] rounded-full"></div>
            </div>
            <p className="text-[10.5px] text-[#7A6A60] flex items-center gap-1 pt-0.5">
              <Info className="w-3.5 h-3.5 text-[#9C3C18] shrink-0" /> Add warehouse shipping pincodes to reach 100%
            </p>
          </div>

          {/* Edit Profile Button */}
          <button
            onClick={() => showToast('Edit Enterprise Profile')}
            className="w-full py-2.5 border border-[#DCC8BB] rounded-2xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            ✏ Edit Profile
          </button>
        </div>

        {/* 2. Your Details Section */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <div>
              <h3 className="text-sm font-black text-[#1F1612]">Your Details</h3>
              <p className="text-[11px] text-[#7A6A60]">Information from your business registration</p>
            </div>
            <button
              onClick={() => showToast('Editing Business Registration info')}
              className="text-xs font-bold text-[#9C3C18] flex items-center gap-0.5 hover:underline cursor-pointer"
            >
              ✏ Edit
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-3">
            {/* Full Name */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10.5px] text-[#7A6A60]">Full Name</p>
                <p className="text-xs font-black text-[#1F1612]">Rahul Sharma</p>
              </div>
              <User className="w-4 h-4 text-[#7A6A60]" />
            </div>
            <div className="h-px bg-[#F7ECE4]" />

            {/* Mobile Number */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10.5px] text-[#7A6A60]">Mobile Number</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-[#1F1612]">+91 98260 41230</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#D1FAE5] text-[#065F46] text-[9.5px] font-black">
                    ✓ Verified
                  </span>
                </div>
              </div>
              <Phone className="w-4 h-4 text-[#7A6A60]" />
            </div>
            <div className="h-px bg-[#F7ECE4]" />

            {/* Work Email */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10.5px] text-[#7A6A60]">Work Email</p>
                <p className="text-xs font-black text-[#1F1612]">rahul.sharma@crafthouse.in</p>
              </div>
              <Mail className="w-4 h-4 text-[#7A6A60]" />
            </div>
            <div className="h-px bg-[#F7ECE4]" />

            {/* Business / Organization */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10.5px] text-[#7A6A60]">Business / Organization</p>
                <p className="text-xs font-black text-[#1F1612]">CraftHouse Collective</p>
              </div>
              <Building className="w-4 h-4 text-[#7A6A60]" />
            </div>
            <div className="h-px bg-[#F7ECE4]" />

            {/* Business Type */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10.5px] text-[#7A6A60]">Business Type</p>
                <p className="text-xs font-black text-[#1F1612]">Home Décor & Lifestyle Retailer</p>
              </div>
              <Store className="w-4 h-4 text-[#7A6A60]" />
            </div>
            <div className="h-px bg-[#F7ECE4]" />

            {/* GSTIN */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10.5px] text-[#7A6A60]">GSTIN</p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black text-[#1F1612]">23AAACH7409R1ZV</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#D1FAE5] text-[#065F46] text-[9.5px] font-black">
                    ✓ Verified
                  </span>
                </div>
              </div>
              <FileText className="w-4 h-4 text-[#7A6A60]" />
            </div>
          </div>
        </div>

        {/* 3. Sourcing Preferences */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <div>
              <h3 className="text-sm font-black text-[#1F1612]">Sourcing Preferences</h3>
              <p className="text-[11px] text-[#7A6A60]">Your default wholesale criteria</p>
            </div>
            <button
              onClick={() => showToast('Editing Sourcing Preferences')}
              className="text-xs font-bold text-[#9C3C18] flex items-center gap-0.5 hover:underline cursor-pointer"
            >
              ✏ Edit
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-[#F0DFD3] p-4 shadow-sm space-y-3.5">
            <div>
              <p className="text-[11px] font-bold text-[#7A6A60] mb-2">Preferred Crafts</p>
              <div className="flex flex-wrap gap-2">
                {['🌿 Bamboo Craft', '⚒ Pottery', '🧶 Handloom', '🪵 Woodcraft', '🏺 Home Décor'].map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 rounded-xl bg-[#FFF9F5] text-[#9C3C18] border border-[#F2D9C7] text-xs font-bold"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Typical Order Size Card */}
            <div className="bg-[#FFF7F2] rounded-2xl p-3 border border-[#F7DEC9] space-y-1">
              <p className="text-[10.5px] text-[#7A6A60]">Typical Order Size</p>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-xl bg-[#9C3C18] text-white text-xs font-black">
                  250–500 pieces
                </span>
              </div>
              <p className="text-[10.5px] text-[#7A6A60]">Per SKU bulk dispatch</p>
            </div>

            {/* Sourcing Preference Card */}
            <div className="bg-[#FFF7F2] rounded-2xl p-3 border border-[#F7DEC9] space-y-0.5">
              <p className="text-[10.5px] text-[#7A6A60]">Sourcing Preference</p>
              <p className="text-xs font-black text-[#1F1612]">Bulk / Large Quantity</p>
              <p className="text-[10.5px] text-[#7A6A60]">OEM & Direct Cluster</p>
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#7A6A60] mb-2">Priority Artisan Clusters</p>
              <div className="flex flex-wrap gap-2">
                {['↗ Assam & North East', '☼ Kutch & Gujarat', '🏰 Rajasthan'].map((cl) => (
                  <span
                    key={cl}
                    className="px-2.5 py-1 rounded-xl bg-[#F9F3ED] text-[#3B2A22] border border-[#EADBCE] text-xs font-semibold"
                  >
                    {cl}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#F3E7DC]" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10.5px] text-[#7A6A60]">Customization & White–label</p>
                <p className="text-xs font-black text-[#1F1612]">Custom designs & Private label</p>
              </div>
              <div className="p-1.5 rounded-lg bg-[#FAF2EB] text-[#9C3C18]">
                <Sliders className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Quick Settings & Support */}
        <div className="space-y-2">
          <h3 className="text-sm font-black text-[#1F1612] px-1">Quick Settings & Support</h3>

          <div className="bg-white rounded-3xl border border-[#F0DFD3] shadow-sm divide-y divide-[#F7ECE4] overflow-hidden">
            <button
              onClick={() => showToast('Opening Notifications Settings')}
              className="w-full p-3.5 flex items-center justify-between hover:bg-[#FAF0E7] text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#FFF0E8] text-[#9C3C18]">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#1F1612]">Notifications</p>
                  <p className="text-[11px] text-[#7A6A60]">Order, requirement and message updates</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#7A6A60]" />
            </button>

            <button
              onClick={() => showToast('Voice translation: Hindi, English & Assamese')}
              className="w-full p-3.5 flex items-center justify-between hover:bg-[#FAF0E7] text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#FFF0E8] text-[#9C3C18]">
                  <Languages className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#1F1612]">Language</p>
                  <p className="text-[11px] text-[#7A6A60]">English • Hindi voice translation enabled</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#7A6A60]" />
            </button>

            <button
              onClick={() => showToast('Connecting to Cluster Support Desk')}
              className="w-full p-3.5 flex items-center justify-between hover:bg-[#FAF0E7] text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-[#FFF0E8] text-[#9C3C18]">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#1F1612]">Help & Support</p>
                  <p className="text-[11px] text-[#7A6A60]">Direct cluster liaison desk & FAQ</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#7A6A60]" />
            </button>
          </div>
        </div>

        {/* 5. Log Out Button */}
        <button
          onClick={() => {
            showToast('Logged out from Enterprise Buyer Account');
            onNavigate(34, 'Returned to Home');
          }}
          className="w-full py-3 border border-[#F2D1BF] rounded-2xl text-xs font-black text-[#9C3C18] hover:bg-[#FFF4EE] flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
        >
          <LogOut className="w-4 h-4" /> Log Out
        </button>

        {/* Version Footer */}
        <p className="text-center text-[10.5px] text-[#7A6A60] font-semibold pb-2">
          HunarSangam Bulk Buyer App • v2.4.1 (Enterprise)
        </p>
      </div>

      {/* Bottom Navigation */}
      <BuyerRequirementBottomNav activeTab="profile" onNavigate={onNavigate} showToast={showToast} />
    </div>
  );
};

// -------------------------------------------------------------
// 52. BUYER VS ARTISAN BILINGUAL CHAT SCREEN (matching 'bulk side - chat bulk buyer vs artisan.png')
// -------------------------------------------------------------
export const BuyerArtisanChatScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMsg, setInputMsg] = useState('');

  const handleSend = () => {
    if (!inputMsg.trim()) return;
    setMessages((prev) => [...prev, inputMsg]);
    setInputMsg('');
    showToast('Message sent to Ramesh Kumar');
  };

  return (
    <div className="h-full flex flex-col justify-between bg-[#FCF9F6] text-[#1F1612] font-sans overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 bg-[#FCF9F6] z-20 border-b border-[#F0E5DC] px-3.5 py-2.5 flex items-center justify-between shrink-0 shadow-xs">
        <div className="flex items-center gap-2.5 min-w-0">
          <button
            onClick={onBack}
            className="p-1 rounded-full hover:bg-[#F3E7DC] cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-[#9C3C18]" />
          </button>
          <div className="relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=120&q=80"
              alt="Ramesh Kumar"
              className="w-9 h-9 rounded-full object-cover border border-[#EBD6C7]"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#065F46] border border-white flex items-center justify-center text-[7px] text-white font-bold">
              ✓
            </span>
          </div>
          <div className="min-w-0">
            <h1 className="text-sm font-black text-[#1F1612] truncate">Ramesh Kumar</h1>
            <p className="text-[10px] text-[#7A6A60] truncate font-medium">
              Master Craftsman • Barpeta, Assam
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Bilingual Switcher Pill */}
          <button
            onClick={() => showToast('Switched translation: Assamese ⇄ English')}
            className="px-2.5 py-1 rounded-full bg-[#FBECE2] border border-[#F0D5C3] text-[#9C3C18] text-[10.5px] font-black flex items-center gap-1 hover:bg-[#F7DEC9] cursor-pointer"
          >
            <span className="font-semibold text-[9.5px]">অসমীয়া</span>
            <span>⇄</span>
            <span>En</span>
          </button>
          <button
            onClick={() => showToast('Opening chat settings')}
            className="p-1 text-[#7A6A60] hover:text-[#1F1612] cursor-pointer"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chat Messages Stream */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5">
        {/* 1. Timestamp Pill */}
        <div className="flex justify-center">
          <span className="px-3 py-1 rounded-full bg-[#F3EAE2] text-[#7A6A60] text-[10.5px] font-semibold flex items-center gap-1">
            <Clock className="w-3 h-3" /> Order request sent • 17 Sep, 10:45 AM
          </span>
        </div>

        {/* 2. Order Accepted Banner Card */}
        <div className="bg-white rounded-3xl border border-[#EADBCE] p-3.5 shadow-sm space-y-2.5">
          <div className="flex items-start gap-2.5">
            <div className="w-5 h-5 rounded-full bg-[#D1FAE5] text-[#065F46] flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3 h-3" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xs font-black text-[#1F1612]">
                Order Accepted by Ramesh Kumar
              </h3>
              <p className="text-[11px] text-[#7A6A60] mt-0.5">
                500 pieces @ ₹380/pc • Target: 28 Oct 2026
              </p>
            </div>
          </div>

          <div className="h-px bg-[#F3E7DC]" />

          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-[#065F46]">Brahmaputra Cane Reserved</span>
            <button
              onClick={() => onNavigate(50, 'Viewing Order #HS-BKT-892 Specifications')}
              className="font-black text-[#9C3C18] hover:underline cursor-pointer"
            >
              View Specs
            </button>
          </div>
        </div>

        {/* 3. Artisan Voice Message + Live Translation Card */}
        <div className="flex flex-col items-start space-y-1 max-w-[90%]">
          <div className="bg-[#FFF7F2] rounded-3xl rounded-tl-sm border border-[#F5DFC9] p-3 space-y-2.5 shadow-xs">
            {/* Audio waveform player */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => {
                  setIsPlayingVoice(!isPlayingVoice);
                  showToast(isPlayingVoice ? 'Voice paused' : 'Playing artisan Assamese voice note');
                }}
                className="w-9 h-9 rounded-full bg-[#9C3C18] text-white flex items-center justify-center shrink-0 cursor-pointer shadow-xs hover:bg-[#833013]"
              >
                {isPlayingVoice ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              {/* Waveform bars */}
              <div className="flex-1 flex items-center gap-1 h-6">
                {[14, 22, 10, 26, 18, 12, 28, 20, 16, 24, 10, 18, 14, 22, 12, 8].map(
                  (h, idx) => (
                    <span
                      key={idx}
                      className={`w-1 rounded-full transition-all ${
                        idx < 7 ? 'bg-[#9C3C18]' : 'bg-[#DFCCC0]'
                      }`}
                      style={{ height: `${h}px` }}
                    />
                  )
                )}
              </div>
              <span className="text-[11px] font-bold text-[#7A6A60]">0:24</span>
            </div>

            {/* Translation Box */}
            <div className="bg-white/90 rounded-2xl p-2.5 border border-[#EADBCE] space-y-1.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-black text-[#9C3C18] flex items-center gap-1">
                  <Languages className="w-3 h-3" /> Live Translation (Assamese → English)
                </span>
                <button
                  onClick={() => showToast('Playing translated English voice')}
                  className="font-bold text-[#9C3C18] flex items-center gap-0.5 cursor-pointer hover:underline"
                >
                  <Volume2 className="w-3 h-3" /> Listen
                </button>
              </div>
              <p className="text-xs font-bold text-[#1F1612] leading-relaxed">
                "Namaste, I have started the bamboo processing. Could you confirm the double-rim design?"
              </p>
              <p className="text-[10px] text-[#7A6A60] italic">
                Original: নমস্কাৰ, মই বাঁহৰ কাম আৰম্ভ কৰিছোঁ। আপুনি ডাবল-ৰিম ডিজাইনটো নিশ্চিত কৰিবনে?
              </p>
            </div>
          </div>
          <span className="text-[10px] text-[#7A6A60] pl-2 font-medium">
            11:28 AM • Translated
          </span>
        </div>

        {/* 4. Buyer Reply (Rust Bubble) */}
        <div className="flex flex-col items-end space-y-1 max-w-[85%] ml-auto">
          <div className="bg-[#9C3C18] text-white rounded-3xl rounded-tr-sm p-3 shadow-xs">
            <p className="text-xs leading-relaxed font-medium">
              Yes Ramesh ji! Please use the double-rim weaving as in our reference sample. Looking forward to initial bamboo seasoning photos.
            </p>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-[#7A6A60] pr-2">
            <span>11:35 AM •</span>
            <span className="text-[#065F46] font-bold flex items-center gap-0.5">
              <CheckCheck className="w-3.5 h-3.5" /> Read
            </span>
          </div>
        </div>

        {/* 5. Artisan Photo Update */}
        <div className="flex flex-col items-start space-y-1 max-w-[85%]">
          <div className="bg-white rounded-3xl border border-[#EADBCE] overflow-hidden shadow-xs">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
                alt="Seasoned Cane"
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-black/75 text-white text-[9.5px] font-bold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" /> GI Certified Cane
              </span>
            </div>
            <div className="p-2.5 flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#9C3C18] shrink-0" />
              <p className="text-xs font-bold text-[#1F1612]">
                Seasoned Brahmaputra cane ready for weaving
              </p>
            </div>
          </div>
          <span className="text-[10px] text-[#7A6A60] pl-2 font-medium">12:10 PM</span>
        </div>

        {/* 6. Payment Completed / Trust Escrow Card */}
        <div className="bg-[#F6FBF8] rounded-3xl border border-[#D1E7DD] p-3.5 shadow-sm space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-[#065F46] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </div>
              <div>
                <p className="text-[9.5px] font-black text-[#065F46] tracking-wider uppercase">
                  PAYMENT COMPLETED
                </p>
                <h3 className="text-sm font-black text-[#1F1612] leading-tight mt-0.5">
                  ₹1,90,000 paid to Craft<br />Trust Escrow
                </h3>
              </div>
            </div>
            <span className="px-2 py-1 rounded-xl bg-[#D1FAE5] text-[#065F46] text-[10px] font-black flex items-center gap-1">
              <Lock className="w-3 h-3" /> Escrow Protected
            </span>
          </div>

          <div className="h-px bg-[#DCEFE6]" />

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-[10px] text-[#7A6A60]">Craft Order Breakdown</p>
              <p className="font-black text-[#9C3C18] text-sm mt-0.5">500 pcs</p>
              <p className="text-[9.5px] text-[#7A6A60]">@ ₹380 / piece (#HS-BKT-892)</p>
            </div>
            <div className="border-l border-[#DCEFE6] pl-3">
              <p className="text-[10px] text-[#7A6A60]">Transaction Details</p>
              <p className="font-black text-[#1F1612] text-xs mt-0.5">#TXN-HS-99214</p>
              <p className="text-[9.5px] font-bold text-[#065F46]">17 Sep, 11:40 AM • UPI Verified</p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={() => showToast('Opening escrow receipt #TXN-HS-99214')}
              className="flex-1 py-2 px-2 bg-white border border-[#DCC8BB] rounded-xl text-xs font-bold text-[#1F1612] hover:bg-[#FAF0E7] flex items-center justify-center gap-1 cursor-pointer"
            >
              <Receipt className="w-3.5 h-3.5 text-[#7A6A60]" /> View Receipt
            </button>
            <button
              onClick={() => showToast('Downloading Escrow Guarantee PDF')}
              className="flex-1 py-2 px-2 bg-[#FFF7F2] border border-[#F0D5C3] rounded-xl text-xs font-bold text-[#9C3C18] hover:bg-[#FBECE2] flex items-center justify-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Download Receipt
            </button>
          </div>
        </div>

        {/* Dynamic Sent Messages */}
        {messages.map((m, i) => (
          <div key={i} className="flex flex-col items-end space-y-1 max-w-[85%] ml-auto">
            <div className="bg-[#9C3C18] text-white rounded-3xl rounded-tr-sm p-3 shadow-xs">
              <p className="text-xs leading-relaxed font-medium">{m}</p>
            </div>
            <span className="text-[10px] text-[#7A6A60] pr-2 font-medium">Just now • Sent</span>
          </div>
        ))}
      </div>

      {/* Quick Action Chips */}
      <div className="px-3 py-1.5 bg-[#FCF9F6] border-t border-[#F0E5DC] flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
        <button
          onClick={() => onNavigate(50, 'Viewing Order #HS-BKT-892 Details')}
          className="px-2.5 py-1 rounded-xl bg-white border border-[#EADBCE] text-[#1F1612] text-[11px] font-bold flex items-center gap-1.5 hover:bg-[#FAF0E7] shrink-0 cursor-pointer"
        >
          <FileText className="w-3.5 h-3.5 text-[#9C3C18]" /> View Order
        </button>
        <button
          onClick={() => onNavigate(50, 'Inspecting 64% Production Progress')}
          className="px-2.5 py-1 rounded-xl bg-white border border-[#EADBCE] text-[#1F1612] text-[11px] font-bold flex items-center gap-1.5 hover:bg-[#FAF0E7] shrink-0 cursor-pointer"
        >
          <Activity className="w-3.5 h-3.5 text-[#9C3C18]" /> Production Update
        </button>
        <button
          onClick={() => showToast('Opening camera to send photo')}
          className="px-2.5 py-1 rounded-xl bg-white border border-[#EADBCE] text-[#1F1612] text-[11px] font-bold flex items-center gap-1.5 hover:bg-[#FAF0E7] shrink-0 cursor-pointer"
        >
          <Camera className="w-3.5 h-3.5 text-[#9C3C18]" /> Send Photo
        </button>
      </div>

      {/* Chat Input Bar */}
      <div className="p-3 bg-white border-t border-[#EFE5DC] space-y-1.5 shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('Attachment menu: Photo, Document, Price quote')}
            className="w-9 h-9 rounded-full bg-[#FAF2EB] text-[#9C3C18] flex items-center justify-center shrink-0 hover:bg-[#F3E5DA] cursor-pointer"
          >
            <Plus className="w-5 h-5" />
          </button>

          <div className="flex-1 flex items-center bg-[#F9F4F0] rounded-full border border-[#EADBCE] px-3 py-1.5">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type or tap mic for bilingu..."
              className="flex-1 bg-transparent text-xs text-[#1F1612] placeholder-[#7A6A60] outline-none"
            />
            <button
              onClick={() => showToast('Offer custom unit price in INR')}
              className="text-[#9C3C18] font-bold text-xs px-1 hover:opacity-80 cursor-pointer"
            >
              ₹
            </button>
            <button
              onClick={() => showToast('Attach photo for reference')}
              className="text-[#7A6A60] hover:text-[#1F1612] p-1 cursor-pointer"
            >
              <Camera className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              if (inputMsg.trim()) {
                handleSend();
              } else {
                showToast('🎙 Recording bilingual voice note (Hindi/Assamese auto-translate)...');
              }
            }}
            className="w-10 h-10 rounded-full bg-[#9C3C18] text-white flex items-center justify-center shrink-0 hover:bg-[#833013] shadow-sm cursor-pointer"
          >
            {inputMsg.trim() ? (
              <ArrowRight className="w-5 h-5" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
          </button>
        </div>

        <p className="text-center text-[10px] text-[#7A6A60] font-semibold flex items-center justify-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#065F46] animate-pulse"></span>
          Speaks Hindi, English, & Assamese with auto-transcription
        </p>
      </div>
    </div>
  );
};
