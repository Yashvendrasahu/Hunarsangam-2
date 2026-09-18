import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Search,
  Mic,
  Volume2,
  Play,
  Pause,
  Star,
  MapPin,
  Users,
  ShieldCheck,
  Tag,
  Boxes,
  Award,
  Calendar,
  Clock,
  CheckCircle2,
  X,
  Share2,
  Bookmark,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Filter,
  SlidersHorizontal,
  PlusCircle,
  HelpCircle,
  Layers,
  Compass,
  ClipboardList,
  Receipt,
  User,
  ShoppingBag,
  ExternalLink,
  Flame,
  Check,
} from 'lucide-react';

interface ScreenProps {
  onNavigate: (index: number, msg?: string) => void;
  onBack: () => void;
  showToast: (msg: string) => void;
  searchQuery?: string;
  setSearchQuery?: (q: string) => void;
}

// ==========================================
// 35. BULK BUYER DISCOVER SCREEN (matching d1 - bulk- Discover.png)
// ==========================================
export const BuyerDiscoverScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
  setSearchQuery,
}) => {
  const [selectedCraftIndex, setSelectedCraftIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'discover' | 'home' | 'requirements' | 'orders' | 'profile'>('discover');

  const craftCategories = [
    { name: 'All Crafts', count: '1,420+' },
    { name: 'Bamboo Craft', count: '380+' },
    { name: 'Pottery', count: '410+' },
    { name: 'Handloom', count: '290+' },
    { name: 'Brass Metal', count: '180+' },
    { name: 'Leather', count: '160+' },
  ];

  return (
    <div className="w-full max-w-[390px] min-h-[720px] bg-[#FAF7F5] text-[#1F1612] flex flex-col justify-between rounded-[32px] overflow-hidden border border-[#E8DDD5] shadow-2xl relative font-sans select-none">
      {/* Top Header */}
      <div className="bg-[#FAF7F5] px-4 pt-3 pb-2 border-b border-[#EFE2D8]/60 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white border border-[#E8DDD5] p-1 flex items-center justify-center shadow-2xs">
            <img
              src="/Logo.png"
              alt="HunarSangam"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-sm font-black text-[#1F1612] tracking-tight leading-none">
              HunarSangam
            </h1>
            <span className="inline-block bg-[#FDEEE6] text-[#9C3C18] text-[8.5px] font-black px-1.5 py-0.2 rounded mt-0.5">
              BULK BUYER
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => showToast('English selected')}
            className="text-[11px] font-bold text-[#6B5A51] px-2 py-1 bg-white border border-[#EFE2D8] rounded-lg hover:border-[#9C3C18]"
          >
            EN
          </button>
          <button
            onClick={() => showToast('2 unread cluster updates')}
            className="w-8 h-8 rounded-xl bg-white border border-[#EFE2D8] text-[#6B5A51] flex items-center justify-center hover:text-[#9C3C18]"
          >
            <span className="relative">
              🔔
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#9C3C18]" />
            </span>
          </button>
        </div>
      </div>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-5">
        {/* Search Bar with Microphone */}
        <div
          onClick={() => onNavigate(36, 'Opening Voice & Text Search')}
          className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white border border-[#E5D5CB] rounded-2xl shadow-2xs cursor-pointer hover:border-[#9C3C18] transition-all"
        >
          <Search className="w-4 h-4 text-[#8C7A70] shrink-0" />
          <span className="flex-1 text-xs text-[#8C7A70] font-medium truncate">
            What are you looking for in bulk?
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(36, 'Activating Voice Search');
            }}
            className="w-7 h-7 rounded-xl bg-[#9C3C18] text-white flex items-center justify-center shrink-0 shadow-xs hover:bg-[#853213]"
          >
            <Mic className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Section 1: Craft Categories */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-black uppercase text-[#8C7A70] tracking-wider">
              Craft Categories
            </h2>
            <span className="text-[11px] font-bold text-[#9C3C18]">6 Clusters</span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {craftCategories.map((craft, idx) => (
              <button
                key={craft.name}
                onClick={() => {
                  setSelectedCraftIndex(idx);
                  showToast(`Filtered: ${craft.name}`);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCraftIndex === idx
                    ? 'bg-[#9C3C18] text-white shadow-xs'
                    : 'bg-white border border-[#EFE2D8] text-[#5D463D] hover:border-[#DFC7B8]'
                }`}
              >
                {craft.name}
                <span className={`ml-1 text-[10px] ${selectedCraftIndex === idx ? 'text-white/80' : 'text-[#8C7A70]'}`}>
                  ({craft.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Section 2: Featured Master Artisans */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <div>
              <span className="text-[10px] font-black uppercase text-[#9C3C18] tracking-wider block">
                VERIFIED GUILDS
              </span>
              <h2 className="text-sm font-black text-[#1F1612]">Featured Master Artisans</h2>
            </div>
            <button
              onClick={() => onNavigate(38, 'Viewing all Featured Master Artisans')}
              className="text-xs font-bold text-[#9C3C18] hover:underline flex items-center gap-0.5"
            >
              View All <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Master Artisan Horizontal Cards */}
          <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
            {/* Artisan 1: Ramesh Kumar */}
            <div
              onClick={() => onNavigate(39, 'Opening Ramesh Kumar Profile')}
              className="w-56 bg-white border border-[#EFE2D8] rounded-2xl p-3 shadow-2xs hover:border-[#9C3C18] transition-all cursor-pointer shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#F3EBE3] shrink-0 border border-[#EFE2D8]">
                    <img
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80"
                      alt="Ramesh Kumar"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h3 className="text-xs font-black text-[#1F1612] truncate">Ramesh Kumar</h3>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                    </div>
                    <p className="text-[10.5px] text-[#6B5A51] flex items-center gap-0.5 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#9C3C18]" /> Barpeta, Assam
                    </p>
                    <span className="inline-block bg-[#FDEEE6] text-[#9C3C18] text-[9px] font-bold px-1.5 py-0.2 rounded mt-1">
                      Bamboo & Cane
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5 bg-[#FAF7F5] p-2 rounded-xl text-[10px] text-[#5D463D] mb-2.5">
                  <div>
                    <span className="text-[#8C7A70] block text-[9px]">Capacity</span>
                    <span className="font-extrabold text-[#1F1612]">500 pcs/mo</span>
                  </div>
                  <div>
                    <span className="text-[#8C7A70] block text-[9px]">Lead Time</span>
                    <span className="font-extrabold text-[#1F1612]">18-24 Days</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[#F5ECE5]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showToast('Playing craft story by Ramesh Kumar (Assamese & Hindi)');
                  }}
                  className="flex items-center gap-1 text-[10px] font-bold text-[#9C3C18] hover:underline"
                >
                  <Volume2 className="w-3 h-3" /> Audio Story
                </button>
                <span className="text-[10.5px] font-black text-[#9C3C18]">View Profile &rsaquo;</span>
              </div>
            </div>

            {/* Artisan 2: Mohan Lal */}
            <div
              onClick={() => onNavigate(39, 'Opening Mohan Lal Profile')}
              className="w-56 bg-white border border-[#EFE2D8] rounded-2xl p-3 shadow-2xs hover:border-[#9C3C18] transition-all cursor-pointer shrink-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#F3EBE3] shrink-0 border border-[#EFE2D8]">
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
                      alt="Mohan Lal"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h3 className="text-xs font-black text-[#1F1612] truncate">Mohan Lal</h3>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                    </div>
                    <p className="text-[10.5px] text-[#6B5A51] flex items-center gap-0.5 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#9C3C18]" /> Jaipur, Rajasthan
                    </p>
                    <span className="inline-block bg-[#E3F2FD] text-[#1565C0] text-[9px] font-bold px-1.5 py-0.2 rounded mt-1">
                      Blue Pottery
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1.5 bg-[#FAF7F5] p-2 rounded-xl text-[10px] text-[#5D463D] mb-2.5">
                  <div>
                    <span className="text-[#8C7A70] block text-[9px]">Capacity</span>
                    <span className="font-extrabold text-[#1F1612]">1,200 pcs/mo</span>
                  </div>
                  <div>
                    <span className="text-[#8C7A70] block text-[9px]">Lead Time</span>
                    <span className="font-extrabold text-[#1F1612]">14-20 Days</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-[#F5ECE5]">
                <span className="text-[10px] font-bold text-[#2E7D32] flex items-center gap-1">
                  <Award className="w-3 h-3" /> State Awardee
                </span>
                <span className="text-[10.5px] font-black text-[#9C3C18]">View Profile &rsaquo;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Popular Bulk Crafts */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <div>
              <span className="text-[10px] font-black uppercase text-[#9C3C18] tracking-wider block">
                FAST PRODUCTION LINES
              </span>
              <h2 className="text-sm font-black text-[#1F1612]">Popular Wholesale Products</h2>
            </div>
            <button
              onClick={() => onNavigate(37, 'Browsing Bamboo Search Results')}
              className="text-xs font-bold text-[#9C3C18] hover:underline flex items-center gap-0.5"
            >
              Catalog &rsaquo;
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Card 1 */}
            <div
              onClick={() => onNavigate(37, 'Viewing Bamboo Fruit Basket Results')}
              className="bg-white border border-[#EFE2D8] rounded-2xl overflow-hidden shadow-2xs hover:border-[#9C3C18] transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-24 bg-[#F3EBE3]">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80"
                  alt="Bamboo Fruit Basket"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 left-1.5 bg-black/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                  MOQ 50 pcs
                </span>
              </div>
              <div className="p-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[11px] font-black text-[#1F1612] line-clamp-1">
                    Bamboo Fruit Basket
                  </h4>
                  <p className="text-[9.5px] text-[#6B5A51]">Assam GI Guild</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-[#F5ECE5] mt-1.5">
                  <span className="text-[11px] font-black text-[#9C3C18]">₹180 - ₹210</span>
                  <span className="text-[9px] font-bold text-[#2E7D32]">Ready Stock</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => onNavigate(37, 'Viewing Blue Pottery Results')}
              className="bg-white border border-[#EFE2D8] rounded-2xl overflow-hidden shadow-2xs hover:border-[#9C3C18] transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-24 bg-[#F3EBE3]">
                <img
                  src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=400&q=80"
                  alt="Blue Pottery Bowl"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 left-1.5 bg-black/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">
                  MOQ 30 pcs
                </span>
              </div>
              <div className="p-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[11px] font-black text-[#1F1612] line-clamp-1">
                    Blue Pottery Bowl
                  </h4>
                  <p className="text-[9.5px] text-[#6B5A51]">Jaipur Craft Cluster</p>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-[#F5ECE5] mt-1.5">
                  <span className="text-[11px] font-black text-[#9C3C18]">₹290 - ₹340</span>
                  <span className="text-[9px] font-bold text-[#1565C0]">Food Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Popular Business Sourcing */}
        <div className="bg-[#FAF0E8] border border-[#EAD3C4] rounded-2xl p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9.5px] font-black uppercase text-[#9C3C18] tracking-wider block">
                B2B CURATED LINES
              </span>
              <h3 className="text-xs font-black text-[#1F1612]">Popular Business Sourcing</h3>
            </div>
            <button
              onClick={() => onNavigate(40, 'Opening Popular Business Sourcing')}
              className="text-[11px] font-bold text-[#9C3C18] hover:underline"
            >
              Explore All ↗
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div
              onClick={() => onNavigate(40, 'Exploring Corporate Gifting')}
              className="p-2 bg-white rounded-xl border border-[#E8DDD5] cursor-pointer hover:border-[#9C3C18]"
            >
              <span className="text-base block mb-0.5">🎁</span>
              <span className="text-[10px] font-bold text-[#1F1612] block truncate">Corporate Gifting</span>
              <span className="text-[8.5px] text-[#8C7A70]">From ₹680/set</span>
            </div>
            <div
              onClick={() => onNavigate(40, 'Exploring Hospitality Tableware')}
              className="p-2 bg-white rounded-xl border border-[#E8DDD5] cursor-pointer hover:border-[#9C3C18]"
            >
              <span className="text-base block mb-0.5">🍽️</span>
              <span className="text-[10px] font-bold text-[#1F1612] block truncate">Hospitality Dining</span>
              <span className="text-[8.5px] text-[#8C7A70]">From ₹120/pc</span>
            </div>
            <div
              onClick={() => onNavigate(40, 'Exploring Festive Hampers')}
              className="p-2 bg-white rounded-xl border border-[#E8DDD5] cursor-pointer hover:border-[#9C3C18]"
            >
              <span className="text-base block mb-0.5">✨</span>
              <span className="text-[10px] font-bold text-[#1F1612] block truncate">Festive Hampers</span>
              <span className="text-[8.5px] text-[#8C7A70]">From ₹950/box</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-white border-t border-[#EFE2D8] px-3 py-2 flex items-center justify-between">
        <button
          onClick={() => onNavigate(34, 'Back to Buyer Dashboard')}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#7A6A61] hover:text-[#1F1612] cursor-pointer"
        >
          <Compass className="w-4 h-4" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        <button
          onClick={() => setActiveTab('discover')}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl bg-[#FDEEE6] text-[#9C3C18] cursor-pointer"
        >
          <Search className="w-4 h-4 stroke-[2.5]" />
          <span className="text-[10px] font-bold">Discover</span>
        </button>

        <button
          onClick={() => showToast('Opening Requirements manager')}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#7A6A61] hover:text-[#1F1612] cursor-pointer"
        >
          <ClipboardList className="w-4 h-4" />
          <span className="text-[10px] font-bold">Requirements</span>
        </button>

        <button
          onClick={() => showToast('Orders tracking')}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#7A6A61] hover:text-[#1F1612] cursor-pointer"
        >
          <Receipt className="w-4 h-4" />
          <span className="text-[10px] font-bold">Orders</span>
        </button>

        <button
          onClick={() => onNavigate(33, 'Viewing Profile')}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl text-[#7A6A61] hover:text-[#1F1612] cursor-pointer"
        >
          <User className="w-4 h-4" />
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 36. BULK BUYER SEARCH & VOICE SCREEN (matching d2 - bulk— Search.png)
// ==========================================
export const BuyerSearchScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
  searchQuery,
  setSearchQuery,
}) => {
  const [queryText, setQueryText] = useState(searchQuery || 'Bamboo fruit baskets');
  const [isListening, setIsListening] = useState(false);

  const recentSearches = [
    'Bamboo fruit baskets',
    'Blue pottery tableware',
    'Brass diyas bulk',
    'Chanderi silk stoles',
  ];

  const popularSearches = [
    { title: 'Corporate Diwali gift boxes', craft: 'Brass & Lacquer' },
    { title: 'Terracotta cups 1000 pcs', craft: 'Pottery Cluster' },
    { title: 'Jute conference bags', craft: 'Natural Fibers' },
    { title: 'Madhubani hand-painted files', craft: 'Folk Art' },
  ];

  const handleVoiceSearch = () => {
    setIsListening(true);
    showToast('Listening in Hindi, English, Assamese...');
    setTimeout(() => {
      setIsListening(false);
      setQueryText('Bamboo fruit baskets');
      if (setSearchQuery) setSearchQuery('Bamboo fruit baskets');
      onNavigate(37, 'Voice search recognized: Bamboo fruit baskets');
    }, 1800);
  };

  const handleSelectQuery = (q: string) => {
    setQueryText(q);
    if (setSearchQuery) setSearchQuery(q);
    onNavigate(37, `Searching for: ${q}`);
  };

  return (
    <div className="w-full max-w-[390px] min-h-[720px] bg-[#FAF7F5] text-[#1F1612] flex flex-col justify-between rounded-[32px] overflow-hidden border border-[#E8DDD5] shadow-2xl relative font-sans select-none">
      {/* Search Header */}
      <div className="bg-white px-3.5 pt-3 pb-3 border-b border-[#EFE2D8] flex items-center gap-2 shadow-2xs">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-xl bg-[#FAF7F5] border border-[#E8DDD5] text-[#4A3830] flex items-center justify-center hover:bg-[#F3EBE3] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex-1 flex items-center gap-2 px-3 py-2 bg-[#FAF7F5] border border-[#E0D2C7] rounded-xl focus-within:border-[#9C3C18]">
          <Search className="w-4 h-4 text-[#8C7A70] shrink-0" />
          <input
            type="text"
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSelectQuery(queryText);
            }}
            placeholder="Search craft, cluster or artisan..."
            className="w-full bg-transparent text-xs text-[#1F1612] outline-none font-medium placeholder-[#8C7A70]"
            autoFocus
          />
          {queryText && (
            <button
              onClick={() => setQueryText('')}
              className="w-4 h-4 rounded-full bg-[#E5D5CB] text-[#5D463D] flex items-center justify-center text-[10px]"
            >
              ✕
            </button>
          )}
        </div>

        <button
          onClick={() => handleSelectQuery(queryText || 'Bamboo fruit baskets')}
          className="px-3 py-2 bg-[#9C3C18] text-white text-xs font-bold rounded-xl hover:bg-[#853213] cursor-pointer"
        >
          Search
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {/* Speak to Search Hero Card */}
        <div className="bg-gradient-to-br from-[#9C3C18] to-[#7D2F12] text-white rounded-3xl p-4.5 shadow-md space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
              MULTILINGUAL VOICE SOURCING
            </span>
            <span className="text-[10.5px] font-bold text-[#FBECE5]">10 Regional Dialects</span>
          </div>

          <div className="flex items-center gap-3.5">
            <button
              onClick={handleVoiceSearch}
              className={`w-14 h-14 rounded-2xl bg-white text-[#9C3C18] flex items-center justify-center shadow-lg cursor-pointer transition-all ${
                isListening ? 'scale-110 ring-4 ring-white/50 animate-pulse' : 'hover:scale-105'
              }`}
            >
              <Mic className="w-7 h-7 stroke-[2.5]" />
            </button>
            <div className="flex-1">
              <h3 className="text-sm font-black leading-tight">
                {isListening ? 'Listening now... बोलिए' : 'Speak to Search / बोलकर खोजें'}
              </h3>
              <p className="text-[11px] text-[#FBECE5] mt-0.5 font-medium leading-tight">
                Tap the microphone and tell us your bulk quantity and craft preference.
              </p>
            </div>
          </div>

          <div className="bg-black/20 p-2.5 rounded-xl text-[10.5px] text-[#FBECE5]">
            <span className="font-bold text-white block mb-0.5">Try saying:</span>
            "500 handwoven bamboo fruit baskets for Diwali gift hampers under ₹200"
          </div>
        </div>

        {/* Browse by Craft Section */}
        <div>
          <h3 className="text-xs font-black uppercase text-[#8C7A70] tracking-wider mb-2.5">
            Browse by Craft
          </h3>
          <div className="grid grid-cols-5 gap-2 text-center">
            {[
              { icon: '🏺', name: 'Pottery' },
              { icon: '🧵', name: 'Textiles' },
              { icon: '🪵', name: 'Woodcraft' },
              { icon: '🪙', name: 'Metalwork' },
              { icon: '🎋', name: 'Bamboo' },
            ].map((craft) => (
              <div
                key={craft.name}
                onClick={() => handleSelectQuery(craft.name)}
                className="p-2 bg-white border border-[#EFE2D8] rounded-xl cursor-pointer hover:border-[#9C3C18] transition-all flex flex-col items-center"
              >
                <span className="text-xl mb-1">{craft.icon}</span>
                <span className="text-[10px] font-bold text-[#1F1612] truncate w-full">{craft.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Searches */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-black uppercase text-[#8C7A70] tracking-wider">
              Recent Searches
            </h3>
            <span className="text-[10px] text-[#8C7A70]">Clear All</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {recentSearches.map((item) => (
              <button
                key={item}
                onClick={() => handleSelectQuery(item)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E8DDD5] rounded-full text-xs font-semibold text-[#4A3830] hover:border-[#9C3C18] hover:text-[#9C3C18] cursor-pointer"
              >
                <Clock className="w-3 h-3 text-[#8C7A70]" />
                <span>{item}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Bulk Demands */}
        <div>
          <h3 className="text-xs font-black uppercase text-[#8C7A70] tracking-wider mb-2">
            Trending in B2B Bulk Demands
          </h3>

          <div className="space-y-1.5">
            {popularSearches.map((item) => (
              <div
                key={item.title}
                onClick={() => handleSelectQuery(item.title)}
                className="p-2.5 bg-white border border-[#EFE2D8] rounded-xl flex items-center justify-between cursor-pointer hover:border-[#9C3C18] transition-all"
              >
                <div className="flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-[#E65100]" />
                  <div>
                    <h4 className="text-xs font-bold text-[#1F1612]">{item.title}</h4>
                    <span className="text-[9.5px] text-[#8C7A70]">{item.craft}</span>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#8C7A70]" />
              </div>
            ))}
          </div>
        </div>

        {/* Verified Cluster Guarantee */}
        <div className="p-3 bg-[#E8F5E9] border border-[#C8E6C9] rounded-2xl flex items-start gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
          <div className="text-[11px] text-[#1B5E20]">
            <span className="font-extrabold block">HunarSangam Escrow Guarantee</span>
            Direct cluster pricing with zero middleman commissions, sample inspections, and cluster milestone payments.
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 37. BULK BUYER SEARCH RESULTS SCREEN (matching d3 - bulk — Search Results.png)
// ==========================================
export const BuyerSearchResultsScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
  searchQuery = 'Bamboo fruit baskets',
}) => {
  const [selectedQty, setSelectedQty] = useState<'tier1' | 'tier2' | 'tier3'>('tier2');

  return (
    <div className="w-full max-w-[390px] min-h-[720px] bg-[#FAF7F5] text-[#1F1612] flex flex-col justify-between rounded-[32px] overflow-hidden border border-[#E8DDD5] shadow-2xl relative font-sans select-none">
      {/* Top Search & Filter Bar */}
      <div className="bg-white px-3.5 pt-3 pb-2.5 border-b border-[#EFE2D8] space-y-2 shadow-2xs">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-xl bg-[#FAF7F5] border border-[#E8DDD5] text-[#4A3830] flex items-center justify-center hover:bg-[#F3EBE3] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-[#FAF7F5] border border-[#E0D2C7] rounded-xl">
            <Search className="w-4 h-4 text-[#8C7A70]" />
            <span className="text-xs font-bold text-[#1F1612] truncate">{searchQuery}</span>
            <button
              onClick={onBack}
              className="w-4 h-4 rounded-full bg-[#E5D5CB] text-[#5D463D] flex items-center justify-center text-[10px] ml-auto"
            >
              ✕
            </button>
          </div>

          <button
            onClick={() => onNavigate(36, 'Voice Search')}
            className="w-8 h-8 rounded-xl bg-[#9C3C18] text-white flex items-center justify-center shadow-xs"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 no-scrollbar text-xs">
          <button
            onClick={() => showToast('Filters: Lead Time, Capacity, State applied')}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#9C3C18] text-white rounded-lg font-bold shrink-0 cursor-pointer"
          >
            <Filter className="w-3 h-3" /> Filters (2)
          </button>
          <button
            onClick={() => showToast('Sorted by Monthly Capacity: High to Low')}
            className="px-2.5 py-1 bg-white border border-[#E8DDD5] text-[#5D463D] rounded-lg font-bold shrink-0"
          >
            Capacity ▾
          </button>
          <button
            onClick={() => showToast('Filtered for MOQ under 100')}
            className="px-2.5 py-1 bg-white border border-[#E8DDD5] text-[#5D463D] rounded-lg font-bold shrink-0"
          >
            MOQ &lt; 100
          </button>
          <button
            onClick={() => showToast('GI Certified Clusters only')}
            className="px-2.5 py-1 bg-white border border-[#E8DDD5] text-[#5D463D] rounded-lg font-bold shrink-0"
          >
            GI Certified
          </button>
        </div>
      </div>

      {/* Main Results List */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5">
        <div className="flex items-center justify-between text-xs text-[#6B5A51]">
          <span className="font-bold">Showing 24 verified artisan clusters</span>
          <span>Assam &amp; Tripura</span>
        </div>

        {/* Result 1: Artisan Lead Card (Ramesh Kumar) */}
        <div
          onClick={() => onNavigate(39, 'Viewing Ramesh Kumar Profile')}
          className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 shadow-2xs hover:border-[#9C3C18] transition-all cursor-pointer space-y-3"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#F3EBE3] border border-[#E8DDD5]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80"
                  alt="Ramesh Kumar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-black text-[#1F1612]">Ramesh Kumar</h3>
                  <span className="bg-[#E8F5E9] text-[#2E7D32] text-[8.5px] font-black px-1.5 py-0.2 rounded-md flex items-center gap-0.5">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED CLUSTER LEAD
                  </span>
                </div>
                <p className="text-[10.5px] text-[#6B5A51] flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#9C3C18]" /> Barpeta, Assam • 28 yrs weaving
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-black text-[#9C3C18]">4.9★</span>
              <span className="text-[9px] text-[#8C7A70] block">48 B2B reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 bg-[#FAF7F5] p-2 rounded-xl text-[10px] text-[#5D463D]">
            <div>
              <span className="text-[#8C7A70] block text-[9px]">Capacity</span>
              <span className="font-extrabold text-[#1F1612]">500 pcs/mo</span>
            </div>
            <div>
              <span className="text-[#8C7A70] block text-[9px]">Turnaround</span>
              <span className="font-extrabold text-[#1F1612]">18-24 Days</span>
            </div>
            <div>
              <span className="text-[#8C7A70] block text-[9px]">Women Weavers</span>
              <span className="font-extrabold text-[#2E7D32]">32 Active</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-[#F5ECE5]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                showToast('Playing craft oral story by Ramesh Kumar');
              }}
              className="flex items-center gap-1 text-[11px] font-bold text-[#9C3C18]"
            >
              <Volume2 className="w-3.5 h-3.5" /> Listen to Oral Story
            </button>
            <span className="text-xs font-black text-[#9C3C18] flex items-center gap-0.5">
              View Profile &rsaquo;
            </span>
          </div>
        </div>

        {/* Result 2: Wholesale Product Card */}
        <div className="bg-white border border-[#EFE2D8] rounded-2xl overflow-hidden shadow-2xs space-y-3 p-3">
          <div className="flex gap-3">
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-[#F3EBE3] shrink-0 border border-[#E8DDD5] relative">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80"
                alt="Handwoven Natural Bamboo Fruit Basket"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 left-1 bg-black/70 text-white text-[8px] font-bold px-1 rounded">
                MOQ 50
              </span>
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black uppercase text-[#9C3C18]">READY STOCK IN CLUSTER</span>
                <h4 className="text-xs font-black text-[#1F1612] leading-tight">
                  Handwoven Natural Bamboo Fruit Basket (30cm)
                </h4>
                <p className="text-[10px] text-[#6B5A51] mt-0.5">Smoke-seasoned mold resistance</p>
              </div>

              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-sm font-black text-[#1F1612]">₹180 - ₹210</span>
                <span className="text-[10px] text-[#8C7A70]">/ piece</span>
              </div>
            </div>
          </div>

          {/* Volume Pricing Tiers */}
          <div className="bg-[#FAF7F5] p-2 rounded-xl space-y-1">
            <span className="text-[9.5px] font-black uppercase text-[#8C7A70] tracking-wider block">
              TIERED WHOLESALE VOLUME PRICING
            </span>
            <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
              <div
                onClick={() => setSelectedQty('tier1')}
                className={`p-1.5 rounded-lg border cursor-pointer ${
                  selectedQty === 'tier1' ? 'bg-[#FDEEE6] border-[#9C3C18] text-[#9C3C18]' : 'bg-white border-[#E8DDD5]'
                }`}
              >
                <span className="block font-bold">50-199 pcs</span>
                <span className="font-extrabold">₹210</span>
              </div>
              <div
                onClick={() => setSelectedQty('tier2')}
                className={`p-1.5 rounded-lg border cursor-pointer ${
                  selectedQty === 'tier2' ? 'bg-[#FDEEE6] border-[#9C3C18] text-[#9C3C18]' : 'bg-white border-[#E8DDD5]'
                }`}
              >
                <span className="block font-bold">200-499 pcs</span>
                <span className="font-extrabold">₹195</span>
              </div>
              <div
                onClick={() => setSelectedQty('tier3')}
                className={`p-1.5 rounded-lg border cursor-pointer ${
                  selectedQty === 'tier3' ? 'bg-[#FDEEE6] border-[#9C3C18] text-[#9C3C18]' : 'bg-white border-[#E8DDD5]'
                }`}
              >
                <span className="block font-bold">500+ pcs</span>
                <span className="font-extrabold">₹180</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => showToast('Sample order initiated (₹250/pc door delivery)')}
              className="flex-1 py-2 bg-white border border-[#E0D2C7] text-[#4A3830] text-xs font-bold rounded-xl hover:bg-[#FAF7F5]"
            >
              Order Sample (₹250)
            </button>
            <button
              onClick={() => onNavigate(39, 'Opening Custom Quote')}
              className="flex-1 py-2 bg-[#9C3C18] text-white text-xs font-bold rounded-xl hover:bg-[#853213] shadow-xs"
            >
              Request Custom Lot &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 38. FEATURED MASTER ARTISANS SCREEN (matching d4 - bulk — Featured Artisans.png)
// ==========================================
export const BuyerFeaturedArtisansScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
  return (
    <div className="w-full max-w-[390px] min-h-[720px] bg-[#FAF7F5] text-[#1F1612] flex flex-col justify-between rounded-[32px] overflow-hidden border border-[#E8DDD5] shadow-2xl relative font-sans select-none">
      {/* Header */}
      <div className="bg-white px-4 pt-3.5 pb-3 border-b border-[#EFE2D8] flex items-center gap-2.5 shadow-2xs">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-xl bg-[#FAF7F5] border border-[#E8DDD5] text-[#4A3830] flex items-center justify-center hover:bg-[#F3EBE3] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <span className="text-[9.5px] font-black uppercase text-[#9C3C18] tracking-wider block">
            DIRECT CLUSTER PROCUREMENT
          </span>
          <h1 className="text-sm font-black text-[#1F1612] leading-none">Featured Master Artisans</h1>
        </div>
      </div>

      {/* Main List */}
      <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-4">
        {/* Artisan 1: Ramesh Kumar */}
        <div
          onClick={() => onNavigate(39, 'Viewing Ramesh Kumar Profile')}
          className="bg-white border border-[#EFE2D8] rounded-2xl p-4 shadow-2xs hover:border-[#9C3C18] transition-all cursor-pointer space-y-3"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#F3EBE3] border border-[#E8DDD5] shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80"
                  alt="Ramesh Kumar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-black text-[#1F1612]">Ramesh Kumar</h3>
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                </div>
                <p className="text-[11px] text-[#6B5A51] mt-0.5">Barpeta Cane Guild, Assam</p>
                <span className="inline-block bg-[#FDEEE6] text-[#9C3C18] text-[9.5px] font-bold px-2 py-0.5 rounded-full mt-1">
                  28 Years Mastery • GI Certified
                </span>
              </div>
            </div>
            <span className="text-xs font-black text-[#9C3C18] bg-[#FAF0E8] px-2 py-0.5 rounded-md">
              4.9★
            </span>
          </div>

          <p className="text-xs text-[#5D463D] leading-relaxed">
            Specializing in high-tensile smoked bamboo kitchenware, open-weave laundry hampers, and corporate gifting sets with custom branding.
          </p>

          <div className="grid grid-cols-2 gap-2 bg-[#FAF7F5] p-2.5 rounded-xl text-xs text-[#5D463D]">
            <div>
              <span className="text-[#8C7A70] block text-[10px]">Monthly Production</span>
              <span className="font-extrabold text-[#1F1612]">500 - 800 units</span>
            </div>
            <div>
              <span className="text-[#8C7A70] block text-[10px]">Average Lead Time</span>
              <span className="font-extrabold text-[#1F1612]">18 - 24 Days</span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(39, 'Connecting to Ramesh Kumar');
            }}
            className="w-full py-2.5 bg-[#9C3C18] text-white text-xs font-bold rounded-xl hover:bg-[#853213] shadow-xs flex items-center justify-center gap-1"
          >
            View Artisan Profile &amp; Request Quote &rsaquo;
          </button>
        </div>

        {/* Artisan 2: Mohan Lal */}
        <div
          onClick={() => onNavigate(39, 'Viewing Mohan Lal Profile')}
          className="bg-white border border-[#EFE2D8] rounded-2xl p-4 shadow-2xs hover:border-[#9C3C18] transition-all cursor-pointer space-y-3"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl overflow-hidden bg-[#F3EBE3] border border-[#E8DDD5] shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
                  alt="Mohan Lal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-black text-[#1F1612]">Mohan Lal</h3>
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                </div>
                <p className="text-[11px] text-[#6B5A51] mt-0.5">Kot Jewar Blue Pottery, Jaipur</p>
                <span className="inline-block bg-[#E8F5E9] text-[#2E7D32] text-[9.5px] font-bold px-2 py-0.5 rounded-full mt-1">
                  State Awardee 2018 • 100% Lead Free
                </span>
              </div>
            </div>
            <span className="text-xs font-black text-[#9C3C18] bg-[#FAF0E8] px-2 py-0.5 rounded-md">
              4.95★
            </span>
          </div>

          <p className="text-xs text-[#5D463D] leading-relaxed">
            Authentic quartz-powder fired tableware, decorative tiles, and hospitality planters with drop-tested export packaging.
          </p>

          <div className="grid grid-cols-2 gap-2 bg-[#FAF7F5] p-2.5 rounded-xl text-xs text-[#5D463D]">
            <div>
              <span className="text-[#8C7A70] block text-[10px]">Monthly Production</span>
              <span className="font-extrabold text-[#1F1612]">1,200 units</span>
            </div>
            <div>
              <span className="text-[#8C7A70] block text-[10px]">Average Lead Time</span>
              <span className="font-extrabold text-[#1F1612]">14 - 20 Days</span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(39, 'Connecting to Mohan Lal');
            }}
            className="w-full py-2.5 bg-[#9C3C18] text-white text-xs font-bold rounded-xl hover:bg-[#853213] shadow-xs flex items-center justify-center gap-1"
          >
            View Artisan Profile &amp; Request Quote &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 39. PUBLIC ARTISAN PROFILE SCREEN (matching d5 bulk — Public Artisan Profile.png)
// ==========================================
export const BuyerArtisanProfileScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="w-full max-w-[390px] min-h-[720px] bg-[#FAF7F5] text-[#1F1612] flex flex-col justify-between rounded-[32px] overflow-hidden border border-[#E8DDD5] shadow-2xl relative font-sans select-none">
      {/* Top Header */}
      <div className="bg-white px-4 pt-3.5 pb-3 border-b border-[#EFE2D8] flex items-center justify-between shadow-2xs">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-xl bg-[#FAF7F5] border border-[#E8DDD5] text-[#4A3830] flex items-center justify-center hover:bg-[#F3EBE3] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <span className="text-xs font-black text-[#1F1612]">Artisan Profile</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsSaved(!isSaved);
              showToast(isSaved ? 'Removed from saved' : 'Artisan saved to your sourcing list');
            }}
            className="w-8 h-8 rounded-xl bg-[#FAF7F5] border border-[#E8DDD5] text-[#4A3830] flex items-center justify-center hover:text-[#9C3C18]"
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#9C3C18] text-[#9C3C18]' : ''}`} />
          </button>
          <button
            onClick={() => showToast('Share link copied to clipboard')}
            className="w-8 h-8 rounded-xl bg-[#FAF7F5] border border-[#E8DDD5] text-[#4A3830] flex items-center justify-center hover:text-[#9C3C18]"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Profile Body */}
      <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-4">
        {/* Artisan Hero Card */}
        <div className="bg-white border border-[#EFE2D8] rounded-2xl p-4 shadow-2xs space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#F3EBE3] border border-[#E8DDD5] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80"
                alt="Ramesh Kumar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <h2 className="text-base font-black text-[#1F1612]">Ramesh Kumar</h2>
                <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
              </div>
              <p className="text-xs text-[#6B5A51] flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#9C3C18]" /> Barpeta, Assam
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="bg-[#FDEEE6] text-[#9C3C18] text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Bamboo & Cane Guild
                </span>
                <span className="text-xs font-black text-[#9C3C18]">4.9★ (48 Reviews)</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#F5ECE5] text-xs text-[#5D463D] leading-relaxed">
            3rd generation master bamboo craftsman leading a cooperative of 32 women weavers in Assam. Specializing in food-grade kitchenware and custom hospitality storage.
          </div>
        </div>

        {/* Oral Craft Story Player */}
        <div className="bg-gradient-to-r from-[#9C3C18] to-[#802E10] text-white rounded-2xl p-4 shadow-sm space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
              AUTHENTIC AUDIO STORY
            </span>
            <span className="text-[10px] font-bold text-[#FBECE5]">Assamese &amp; Hindi</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsPlayingAudio(!isPlayingAudio);
                showToast(isPlayingAudio ? 'Audio paused' : 'Playing Ramesh Kumar craft heritage audio');
              }}
              className="w-11 h-11 rounded-xl bg-white text-[#9C3C18] flex items-center justify-center shrink-0 shadow-md cursor-pointer hover:scale-105 transition-transform"
            >
              {isPlayingAudio ? <Pause className="w-5 h-5 fill-[#9C3C18]" /> : <Play className="w-5 h-5 fill-[#9C3C18] ml-0.5" />}
            </button>

            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold leading-tight truncate">
                "The Soul of Barpeta Bamboo" - In Artisan's Words
              </h4>
              <p className="text-[10px] text-[#FBECE5] mt-0.5">Recorded live at artisan cluster workshop</p>
              {/* Fake Audio Waveform */}
              <div className="flex items-center gap-0.5 mt-2 h-3">
                {[4, 8, 12, 6, 10, 14, 8, 4, 11, 7, 13, 9, 5, 12, 6, 10, 4].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}px` }}
                    className={`flex-1 rounded-full ${isPlayingAudio ? 'bg-white animate-pulse' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Production Metrics */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-white border border-[#EFE2D8] rounded-xl p-3 shadow-2xs">
            <span className="text-[10px] font-bold text-[#8C7A70] block">Minimum Order Qty</span>
            <span className="text-sm font-black text-[#1F1612]">50 Pieces</span>
            <span className="text-[9.5px] text-[#2E7D32] block mt-0.5">Sample kit ready</span>
          </div>
          <div className="bg-white border border-[#EFE2D8] rounded-xl p-3 shadow-2xs">
            <span className="text-[10px] font-bold text-[#8C7A70] block">Monthly Capacity</span>
            <span className="text-sm font-black text-[#1F1612]">500 - 800 units</span>
            <span className="text-[9.5px] text-[#8C7A70] block mt-0.5">18-24 days lead time</span>
          </div>
        </div>

        {/* Products in Production */}
        <div>
          <h3 className="text-xs font-black uppercase text-[#8C7A70] tracking-wider mb-2">
            Wholesale Catalog Offerings
          </h3>

          <div className="space-y-2">
            <div className="bg-white border border-[#EFE2D8] rounded-xl p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#F3EBE3] border border-[#E8DDD5]">
                  <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=200&q=80"
                    alt="Bamboo Fruit Basket"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1612]">Handwoven Fruit Basket</h4>
                  <span className="text-[10px] text-[#8C7A70]">Tiered from ₹180/pc</span>
                </div>
              </div>
              <button
                onClick={() => showToast('Order sample for Handwoven Fruit Basket (₹250)')}
                className="px-2.5 py-1 bg-[#FAF7F5] border border-[#E0D2C7] text-[#9C3C18] text-[10.5px] font-bold rounded-lg hover:bg-white"
              >
                Sample ↗
              </button>
            </div>

            <div className="bg-white border border-[#EFE2D8] rounded-xl p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#F3EBE3] border border-[#E8DDD5]">
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=200&q=80"
                    alt="Bamboo Coaster Set"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1F1612]">Hexagonal Coaster Set (6 pcs)</h4>
                  <span className="text-[10px] text-[#8C7A70]">Tiered from ₹95/set</span>
                </div>
              </div>
              <button
                onClick={() => showToast('Order sample for Coaster Set (₹140)')}
                className="px-2.5 py-1 bg-[#FAF7F5] border border-[#E0D2C7] text-[#9C3C18] text-[10.5px] font-bold rounded-lg hover:bg-white"
              >
                Sample ↗
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom RFQ Action Dock */}
      <div className="bg-white border-t border-[#EFE2D8] p-3 flex gap-2.5 shadow-md">
        <button
          onClick={() => showToast('Opening direct WhatsApp / chat with Ramesh Kumar')}
          className="w-11 h-11 rounded-xl bg-[#FAF7F5] border border-[#E0D2C7] text-[#4A3830] flex items-center justify-center hover:bg-[#F3EBE3] cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 text-[#9C3C18]" />
        </button>
        <button
          onClick={() => {
            showToast('✅ RFQ sent to Ramesh Kumar! He will respond within 4 hours.');
          }}
          className="flex-1 py-2.5 bg-[#9C3C18] hover:bg-[#853213] text-white text-xs font-extrabold rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          Request Custom Lot Quote &rarr;
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 40. POPULAR BUSINESS SOURCING SCREEN (matching d6 bulk— Popular Business Sourcing.png)
// ==========================================
export const BuyerBusinessSourcingScreenView: React.FC<ScreenProps> = ({
  onNavigate,
  onBack,
  showToast,
}) => {
  return (
    <div className="w-full max-w-[390px] min-h-[720px] bg-[#FAF7F5] text-[#1F1612] flex flex-col justify-between rounded-[32px] overflow-hidden border border-[#E8DDD5] shadow-2xl relative font-sans select-none">
      {/* Header */}
      <div className="bg-white px-4 pt-3.5 pb-3 border-b border-[#EFE2D8] flex items-center gap-2.5 shadow-2xs">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-xl bg-[#FAF7F5] border border-[#E8DDD5] text-[#4A3830] flex items-center justify-center hover:bg-[#F3EBE3] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <span className="text-[9.5px] font-black uppercase text-[#9C3C18] tracking-wider block">
            STANDARDIZED B2B CATALOGS
          </span>
          <h1 className="text-sm font-black text-[#1F1612] leading-none">Popular Business Sourcing</h1>
        </div>
      </div>

      {/* Main List */}
      <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-4">
        <p className="text-xs text-[#6B5A51] leading-relaxed">
          Pre-vetted bulk production runs curated for corporate gifting, hospitality, and retail chains with escrow milestone tracking.
        </p>

        {/* Category 1: Corporate Gifting Sets */}
        <div className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 shadow-2xs space-y-3">
          <div className="relative h-28 rounded-xl overflow-hidden bg-[#F3EBE3]">
            <img
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80"
              alt="Corporate Gifting Sets"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-[#9C3C18] text-white text-[9px] font-black px-2 py-0.5 rounded-md">
              GI VERIFIED CLUSTER
            </span>
            <span className="absolute bottom-2 left-2 bg-black/75 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
              MOQ 100 sets
            </span>
          </div>

          <div>
            <h3 className="text-sm font-black text-[#1F1612]">Handcrafted Corporate Gifting Sets</h3>
            <p className="text-xs text-[#6B5A51] mt-0.5">
              Assam bamboo desk organizers, handmade diaries &amp; brass bookmarks with laser-engraved corporate logos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-[#FAF7F5] p-2 rounded-xl text-xs text-[#5D463D]">
            <div>
              <span className="text-[#8C7A70] block text-[10px]">Tiered Price</span>
              <span className="font-extrabold text-[#9C3C18]">₹680 - ₹820 / set</span>
            </div>
            <div>
              <span className="text-[#8C7A70] block text-[10px]">Lead Time</span>
              <span className="font-extrabold text-[#1F1612]">12 - 16 Days</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => showToast('Sample box dispatched for Corporate Gifting (₹890)')}
              className="flex-1 py-2 bg-white border border-[#E0D2C7] text-[#4A3830] text-xs font-bold rounded-xl hover:bg-[#FAF7F5]"
            >
              Order Sample Kit
            </button>
            <button
              onClick={() => showToast('Lot inquiry sent to Barpeta Guild')}
              className="flex-1 py-2 bg-[#9C3C18] text-white text-xs font-bold rounded-xl hover:bg-[#853213]"
            >
              Inquire Lot ↗
            </button>
          </div>
        </div>

        {/* Category 2: Hospitality Tableware */}
        <div className="bg-white border border-[#EFE2D8] rounded-2xl p-3.5 shadow-2xs space-y-3">
          <div className="relative h-28 rounded-xl overflow-hidden bg-[#F3EBE3]">
            <img
              src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=500&q=80"
              alt="Hospitality Dining"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-2 left-2 bg-[#1565C0] text-white text-[9px] font-black px-2 py-0.5 rounded-md">
              FOOD GRADE CERTIFIED
            </span>
            <span className="absolute bottom-2 left-2 bg-black/75 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
              MOQ 250 pcs
            </span>
          </div>

          <div>
            <h3 className="text-sm font-black text-[#1F1612]">Hospitality Dining &amp; Room Amenities</h3>
            <p className="text-xs text-[#6B5A51] mt-0.5">
              Microwave &amp; dishwasher-safe blue pottery serveware, terracotta water jugs, and woven room trays.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 bg-[#FAF7F5] p-2 rounded-xl text-xs text-[#5D463D]">
            <div>
              <span className="text-[#8C7A70] block text-[10px]">Tiered Price</span>
              <span className="font-extrabold text-[#9C3C18]">₹120 - ₹240 / pc</span>
            </div>
            <div>
              <span className="text-[#8C7A70] block text-[10px]">Lead Time</span>
              <span className="font-extrabold text-[#1F1612]">14 - 20 Days</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => showToast('Sample piece dispatched for Hospitality Tableware')}
              className="flex-1 py-2 bg-white border border-[#E0D2C7] text-[#4A3830] text-xs font-bold rounded-xl hover:bg-[#FAF7F5]"
            >
              Order Sample Kit
            </button>
            <button
              onClick={() => showToast('Lot inquiry sent to Jaipur Guild')}
              className="flex-1 py-2 bg-[#9C3C18] text-white text-xs font-bold rounded-xl hover:bg-[#853213]"
            >
              Inquire Lot ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
