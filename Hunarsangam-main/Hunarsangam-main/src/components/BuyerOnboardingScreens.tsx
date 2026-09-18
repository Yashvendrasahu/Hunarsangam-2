import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Store,
  User,
  Mail,
  Mic,
  MessageSquare,
  Building2,
  PartyPopper,
  Landmark,
  MoreHorizontal,
  Lock,
  Sparkles,
  ShieldCheck,
  Pencil,
  Armchair,
  Flame,
  Scissors,
  Hammer,
  Gem,
  PenTool,
  Upload,
  Layers,
  Compass,
  ClipboardList,
  Bell,
  Receipt,
  Search,
  PlusCircle,
  Tag,
  ShoppingBag,
  Boxes,
  Star,
  MapPin,
  Users,
  Coins,
  FileText,
  Languages,
} from 'lucide-react';

interface BuyerOnboardingScreensProps {
  activeScreenIndex: number;
  onNavigate: (index: number, msg?: string) => void;
  onBack: () => void;
  showToast: (msg: string) => void;
}

export const BuyerOnboardingScreens: React.FC<BuyerOnboardingScreensProps> = ({
  activeScreenIndex,
  onNavigate,
  onBack,
  showToast,
}) => {
  // Step 1 Form States
  const [yourName, setYourName] = useState('Vikram Malhotra');
  const [businessName, setBusinessName] = useState('FabCraft Living Pvt. Ltd.');
  const [phoneNumber, setPhoneNumber] = useState('98765 43210');
  const [useWhatsApp, setUseWhatsApp] = useState(true);
  const [workEmail, setWorkEmail] = useState('procurement@fabcraft.in');
  const [logoUploaded, setLogoUploaded] = useState(true);
  const [selectedBusinessType, setSelectedBusinessType] = useState('Retailer');

  // Step 2 Category Selection States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'Home Decor',
    'Bamboo Craft',
    'Pottery',
  ]);

  // Profile Created Success Modal
  const [showCreatedModal, setShowCreatedModal] = useState(false);

  // Business Types List matching Image 1
  const businessTypes = [
    {
      id: 'Retailer',
      title: 'Retailer',
      subtitle: 'Stores & Boutiques',
      icon: Store,
    },
    {
      id: 'Event Organizer',
      title: 'Event Organizer',
      subtitle: 'Weddings & Gifting',
      icon: PartyPopper,
    },
    {
      id: 'Corporate Buyer',
      title: 'Corporate Buyer',
      subtitle: 'Gifting & Decor',
      icon: Building2,
    },
    {
      id: 'Shop Owner',
      title: 'Shop Owner',
      subtitle: 'Local Outlets',
      icon: Store,
    },
    {
      id: 'Institutional',
      title: 'Institutional',
      subtitle: 'Hotels & Exports',
      icon: Landmark,
    },
    {
      id: 'Other',
      title: 'Other',
      subtitle: 'Custom Inquiries',
      icon: MoreHorizontal,
    },
  ];

  // Craft Categories matching Image 2
  const craftCategories = [
    {
      id: 'Home Decor',
      title: 'Home Decor',
      tag: '140+ Clusters',
      icon: Armchair,
      imageUrl:
        'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'Bamboo Craft',
      title: 'Bamboo Craft',
      tag: 'GI Certified',
      icon: Sparkles,
      imageUrl:
        'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'Textiles',
      title: 'Textiles',
      tag: 'Weaves & Prints',
      icon: Scissors,
      imageUrl:
        'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'Pottery',
      title: 'Pottery',
      tag: 'Studio & Clay',
      icon: Flame,
      imageUrl:
        'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'Wood Craft',
      title: 'Wood Craft',
      tag: 'Carvings & Toys',
      icon: PenTool,
      imageUrl:
        'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'Metal Craft',
      title: 'Metal Craft',
      tag: 'Brass & Dokra',
      icon: Hammer,
      imageUrl:
        'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=80',
    },
    {
      id: 'Jewelry',
      title: 'Jewelry',
      tag: 'Silver & Beads',
      icon: Gem,
      imageUrl:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80',
    },
  ];

  const toggleCategory = (catId: string) => {
    if (selectedCategories.includes(catId)) {
      if (selectedCategories.length === 1) {
        showToast('Please select at least 1 category');
        return;
      }
      setSelectedCategories(selectedCategories.filter((c) => c !== catId));
    } else {
      setSelectedCategories([...selectedCategories, catId]);
    }
  };

  /* =========================================================================
   * STEP 1: BASIC DETAILS (bulk buyer setp 1 register.png)
   * ========================================================================= */
  if (activeScreenIndex === 30) {
    return (
      <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
        {/* Top Header */}
        <div className="px-4 py-2.5 bg-[#FAF5F0] border-b border-[#E8DDD5] flex items-center justify-between shrink-0 shadow-2xs">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-white border border-[#E0D2C7] flex items-center justify-center text-[#1F1612] hover:bg-[#F5ECE4] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#1F1612]" />
          </button>

          <h2 className="text-sm font-extrabold text-[#1F1612]">Business Setup</h2>

          <div className="bg-[#F0E5DC] text-[#5D4037] text-xs font-bold px-2.5 py-0.5 rounded-full">
            1 of 3
          </div>
        </div>

        {/* Progress bar info */}
        <div className="px-4 pt-2.5 pb-1.5 bg-[#FDFBF9] border-b border-[#F0E5DC]">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-extrabold text-[#8C3A16] border-b-2 border-[#8C3A16] pb-0.5">
              Step 1: Basic Details
            </span>
            <span className="font-bold text-[#6D4C41]">33% completed</span>
          </div>
          <div className="w-full bg-[#EADFD6] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#8C3A16] h-full rounded-full w-1/3 transition-all duration-300" />
          </div>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E8F5E9] border border-[#C8E6C9] rounded-full text-xs font-bold text-[#2E7D32]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>Bulk Buyer Onboarding</span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-xl font-black text-[#1F1612] tracking-tight">
              Tell us about your business
            </h1>
            <p className="text-xs text-[#6B5A51] mt-1 leading-relaxed">
              Help artisans understand your sourcing scale and procurement needs.
            </p>
          </div>

          {/* Field: Your Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-[#1F1612]">
              Your Name <span className="text-[#C53030]">*</span>
            </label>
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white border border-[#E5D5CB] rounded-2xl focus-within:border-[#8C3A16] transition-all shadow-2xs">
              <User className="w-4 h-4 text-[#8D6E63] shrink-0" />
              <input
                type="text"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
                placeholder="Full Name"
                className="w-full bg-transparent text-xs font-bold text-[#1F1612] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Field: Business / Organization Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-[#1F1612]">
              Business / Organization Name <span className="text-[#C53030]">*</span>
            </label>
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white border border-[#E5D5CB] rounded-2xl focus-within:border-[#8C3A16] transition-all shadow-2xs">
              <Store className="w-4 h-4 text-[#8D6E63] shrink-0" />
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Company / Store Name"
                className="w-full bg-transparent text-xs font-bold text-[#1F1612] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Field: Phone Number with Country Code & WhatsApp option */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-[#1F1612]">
              Phone Number <span className="text-[#C53030]">*</span>
            </label>
            <div className="flex items-stretch rounded-2xl border border-[#E5D5CB] bg-white overflow-hidden shadow-2xs focus-within:border-[#8C3A16]">
              <div className="px-3 py-2.5 bg-[#FAF5F0] border-r border-[#E5D5CB] flex items-center gap-1.5 font-extrabold text-xs text-[#1F1612] shrink-0">
                <span className="text-sm">🇮🇳</span>
                <span>+91</span>
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="98765 43210"
                className="flex-1 px-3 py-2.5 bg-transparent text-xs font-bold text-[#1F1612] focus:outline-hidden"
              />
              <button
                type="button"
                onClick={() => showToast('🎙️ Speak phone number aloud via Hunar Voice Assistant')}
                className="px-3 text-[#8D6E63] hover:text-[#8C3A16] transition-colors"
                title="Voice Input"
              >
                <Mic className="w-4 h-4" />
              </button>
            </div>

            {/* WhatsApp Updates Checkbox */}
            <div
              onClick={() => setUseWhatsApp(!useWhatsApp)}
              className="flex items-start gap-2 pt-1 cursor-pointer select-none"
            >
              <div
                className={`w-4 h-4 rounded-md flex items-center justify-center mt-0.5 transition-colors ${
                  useWhatsApp ? 'bg-[#2E7D32] text-white' : 'border border-[#C5B4A8] bg-white'
                }`}
              >
                {useWhatsApp && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <div className="flex items-center gap-1.5 flex-1">
                <MessageSquare className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                <span className="text-[11px] text-[#4A3B32] font-medium leading-tight">
                  Use this number for WhatsApp order updates and dispatch notices
                </span>
              </div>
            </div>
          </div>

          {/* Field: Work Email Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-[#1F1612]">
              Work Email Address <span className="text-[#C53030]">*</span>
            </label>
            <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white border border-[#E5D5CB] rounded-2xl focus-within:border-[#8C3A16] transition-all shadow-2xs">
              <Mail className="w-4 h-4 text-[#8D6E63] shrink-0" />
              <input
                type="email"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder="procurement@organization.com"
                className="w-full bg-transparent text-xs font-bold text-[#1F1612] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Upload Logo Section */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-[#1F1612]">
              Upload logo
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => {
                  setLogoUploaded(true);
                  showToast('📁 Logo attached: FabCraft Verified Emblem');
                }}
                className="border-2 border-dashed border-[#D5C5BA] hover:border-[#8C3A16] bg-white rounded-2xl py-4 px-2 text-center cursor-pointer transition-all active:scale-98 group flex flex-col items-center justify-center gap-1"
              >
                <Upload className="w-4 h-4 text-[#8D6E63] group-hover:text-[#8C3A16]" />
                <span className="text-xs text-[#6B5A51] font-medium group-hover:text-[#8C3A16]">
                  upload logo here
                </span>
              </div>

              <div
                onClick={() => {
                  setLogoUploaded(true);
                  showToast('📂 File Browser: Selected logo_fabcraft.png');
                }}
                className="border-2 border-dashed border-[#D5C5BA] hover:border-[#8C3A16] bg-white rounded-2xl py-4 px-2 text-center cursor-pointer transition-all active:scale-98 group flex flex-col items-center justify-center gap-1"
              >
                <Store className="w-4 h-4 text-[#8D6E63] group-hover:text-[#8C3A16]" />
                <span className="text-xs text-[#6B5A51] font-medium group-hover:text-[#8C3A16]">
                  Browse here
                </span>
              </div>
            </div>
          </div>

          {/* Field: Business Type (2 cols x 3 rows) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold text-[#1F1612]">
                Business Type <span className="text-[#C53030]">*</span>
              </label>
              <span className="text-[10.5px] text-[#7A685F] font-medium">
                Select primary model
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {businessTypes.map((item) => {
                const isSelected = selectedBusinessType === item.id;
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedBusinessType(item.id)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer relative ${
                      isSelected
                        ? 'border-2 border-[#8C3A16] bg-[#FDF5F0] shadow-xs'
                        : 'border-[#E5D5CB] bg-white hover:border-[#CDBDB2]'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#8C3A16] text-white'
                            : 'bg-[#F4ECE5] text-[#5D4037]'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {/* Radio / Check Circle */}
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#8C3A16] text-white'
                            : 'border border-[#C5B4A8] bg-transparent'
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                    </div>

                    <h4 className="text-xs font-black text-[#1F1612] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-[#6B5A51] mt-0.5 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Verification Guarantee Footnote */}
          <div className="p-3 bg-[#FAF5F0] border border-[#ECDCCF] rounded-2xl flex items-center gap-2.5">
            <Lock className="w-4 h-4 text-[#2E7D32] shrink-0" />
            <p className="text-[10.5px] text-[#4A3B32] font-medium leading-tight">
              Your business information is verified to connect with certified GI artisan clusters.
            </p>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="p-4 bg-white border-t border-[#E8DDD5] shrink-0">
          <button
            onClick={() => {
              if (!yourName.trim() || !businessName.trim()) {
                showToast('Please enter your name and business name');
                return;
              }
              onNavigate(31, 'Moving to Step 2: Craft Categories');
            }}
            className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] active:scale-98 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span>Continue to Sourcing Needs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  /* =========================================================================
   * STEP 2: WHAT ARE YOU LOOKING FOR? (bulk buyer step 2 register.png)
   * ========================================================================= */
  if (activeScreenIndex === 31) {
    return (
      <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
        {/* Top Header */}
        <div className="px-4 py-2.5 bg-[#FAF5F0] border-b border-[#E8DDD5] flex items-center justify-between shrink-0 shadow-2xs">
          <button
            onClick={() => onNavigate(30)}
            className="w-8 h-8 rounded-full bg-white border border-[#E0D2C7] flex items-center justify-center text-[#1F1612] hover:bg-[#F5ECE4] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#1F1612]" />
          </button>

          <div className="text-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#8D6E63] block">
              ONBOARDING
            </span>
            <h2 className="text-sm font-black text-[#8C3A16] leading-none">Step 2 of 3</h2>
          </div>

          <div className="flex items-center gap-1 bg-[#F0E5DC] text-[#5D4037] text-xs font-bold px-2.5 py-1 rounded-full">
            <Store className="w-3 h-3 text-[#5D4037]" />
            <span>Bulk Buyer</span>
          </div>
        </div>

        {/* Progress Bar (66%) */}
        <div className="w-full bg-[#EADFD6] h-1.5 shrink-0">
          <div className="bg-[#8C3A16] h-full rounded-r-full w-2/3 transition-all duration-300" />
        </div>

        {/* Scrollable Category Grid Body */}
        <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-4">
          {/* Header */}
          <div>
            <h1 className="text-xl font-black text-[#1F1612] tracking-tight">
              What are you looking for?
            </h1>
            <p className="text-xs text-[#6B5A51] mt-1 leading-relaxed">
              Choose the craft categories and order volumes you want to source directly from certified artisan clusters.
            </p>
          </div>

          {/* Section Sub-heading */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#1F1612]">
                <Layers className="w-4 h-4 text-[#8C3A16]" />
                <span>Product Categories</span>
              </div>
              <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                {selectedCategories.length} Selected
              </span>
            </div>
            <p className="text-[11px] text-[#7A685F] mt-0.5">
              Tap multiple categories to personalize your wholesale direct-sourcing feed.
            </p>
          </div>

          {/* Category Cards (2 columns) */}
          <div className="grid grid-cols-2 gap-3">
            {craftCategories.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);
              const CatIcon = cat.icon;
              return (
                <div
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`rounded-3xl p-2.5 border transition-all cursor-pointer relative active:scale-98 overflow-hidden flex flex-col ${
                    isSelected
                      ? 'border-2 border-[#8C3A16] bg-[#FFFBF8] shadow-xs'
                      : 'border-[#E5D5CB] bg-white hover:border-[#CDBDB2]'
                  }`}
                >
                  {/* Photo Container */}
                  <div className="w-full h-24 rounded-2xl overflow-hidden relative mb-2 bg-[#F3EBE3]">
                    <img
                      src={cat.imageUrl}
                      alt={cat.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />

                    {/* Checkmark badge */}
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Title & Tag */}
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1">
                      <CatIcon className="w-3 h-3 text-[#8C3A16] shrink-0" />
                      <h4 className="text-xs font-black text-[#1F1612] truncate">
                        {cat.title}
                      </h4>
                    </div>
                    <span
                      className={`text-[10px] block font-bold truncate ${
                        isSelected ? 'text-[#8C3A16]' : 'text-[#7A685F]'
                      }`}
                    >
                      {cat.tag}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* 8th Card: Other */}
            <div
              onClick={() => {
                showToast('💡 Custom craft request: Specializing in Stone, Leather & Natural Fibers');
                toggleCategory('Other');
              }}
              className={`rounded-3xl p-3 border-2 border-dashed border-[#D5C5BA] bg-[#FAF5F0]/60 hover:bg-[#FAF5F0] transition-all cursor-pointer flex flex-col items-center justify-center text-center h-[160px] active:scale-98 ${
                selectedCategories.includes('Other')
                  ? 'border-[#8C3A16] bg-[#FFFBF8]'
                  : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#EAE0D8] text-[#5D4037] flex items-center justify-center mb-1.5">
                <MoreHorizontal className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-black text-[#1F1612]">Other</h4>
              <p className="text-[10px] text-[#7A685F] mt-0.5">
                Leather, Paper &amp; Stone
              </p>
            </div>
          </div>

          {/* Bottom Cluster verify guarantee */}
          <div className="p-3 bg-[#FAF5F0] border border-[#ECDCCF] rounded-2xl flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
            <p className="text-[10.5px] text-[#4A3B32] font-medium leading-tight">
              Cluster verify guarantee: Direct from verified artisan guilds
            </p>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="p-4 bg-white border-t border-[#E8DDD5] shrink-0">
          <button
            onClick={() => {
              if (selectedCategories.length === 0) {
                showToast('Please select at least one craft category');
                return;
              }
              onNavigate(32, 'Moving to Step 3: Review Profile');
            }}
            className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] active:scale-98 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <span>Continue to Step 3</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  /* =========================================================================
   * STEP 3: REVIEW YOUR PROFILE (bulk buyer step 3 register.png)
   * ========================================================================= */
  return (
    <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden relative">
      {/* Top Header */}
      <div className="px-4 py-2.5 bg-[#FAF5F0] border-b border-[#E8DDD5] flex items-center justify-between shrink-0 shadow-2xs">
        <button
          onClick={() => onNavigate(31)}
          className="w-8 h-8 rounded-full bg-white border border-[#E0D2C7] flex items-center justify-center text-[#1F1612] hover:bg-[#F5ECE4] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#1F1612]" />
        </button>

        <h2 className="text-sm font-black text-[#1F1612]">Step 3 of 3</h2>

        <div className="flex items-center gap-1 bg-[#F0E5DC] text-[#5D4037] text-xs font-bold px-2.5 py-1 rounded-full">
          <span>Bulk Buyer</span>
        </div>
      </div>

      {/* Progress Bar (100%) */}
      <div className="w-full bg-[#8C3A16] h-1.5 shrink-0" />

      {/* Scrollable Review Body */}
      <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-xl font-black text-[#1F1612] tracking-tight">
            Review your profile
          </h1>
          <p className="text-xs text-[#6B5A51] mt-1 leading-relaxed">
            Verify your business and sourcing preferences before connecting with craft clusters.
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="bg-[#FFFDFB] border border-[#F0E4DA] rounded-3xl p-4 shadow-xs space-y-3.5">
          {/* Header Row with Verified Logo & Business Info */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5">
              {/* Verified Blue-Cyan Emblem */}
              <div className="w-10 h-10 rounded-full bg-[#EBF7FF] border border-[#BBE3FC] flex items-center justify-center shrink-0 shadow-2xs">
                <div className="relative flex flex-col items-center">
                  <ShieldCheck className="w-5 h-5 text-[#0077CC]" />
                  <span className="text-[7px] font-black text-[#0077CC] tracking-tighter uppercase">
                    CIRRS
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black text-[#1F1612] leading-tight">
                  {businessName || 'FabCraft Living Pvt. Ltd.'}
                </h3>
                <span className="text-[11px] text-[#7A685F] font-medium block mt-0.5">
                  Bulk Buyer ID: #BB-8492
                </span>
              </div>
            </div>

            {/* Business Type Badge */}
            <span className="bg-[#DFF4E5] text-[#1B7339] border border-[#C8E6C9] text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0">
              {selectedBusinessType}
            </span>
          </div>

          <div className="border-t border-[#F5ECE5]" />

          {/* Row 1: YOUR NAME */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9.5px] font-extrabold text-[#8D6E63] uppercase tracking-wider block">
                YOUR NAME
              </span>
              <span className="text-xs font-bold text-[#1F1612] mt-0.5 block">
                {yourName}
              </span>
            </div>
            <button
              onClick={() => onNavigate(30, 'Editing Your Name')}
              className="p-1.5 text-[#8C3A16] hover:bg-[#FAF2EC] rounded-lg transition-colors cursor-pointer"
              title="Edit Name"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="border-t border-[#F5ECE5]" />

          {/* Row 2: CONTACT */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9.5px] font-extrabold text-[#8D6E63] uppercase tracking-wider block">
                CONTACT
              </span>
              <span className="text-xs font-bold text-[#1F1612] mt-0.5 block">
                +91 {phoneNumber}
              </span>
              <span className="text-[11px] text-[#6B5A51] font-medium block">
                {workEmail}
              </span>
            </div>
            <button
              onClick={() => onNavigate(30, 'Editing Contact Information')}
              className="p-1.5 text-[#8C3A16] hover:bg-[#FAF2EC] rounded-lg transition-colors cursor-pointer"
              title="Edit Contact"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="border-t border-[#F5ECE5]" />

          {/* Row 3: BUSINESS TYPE */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[9.5px] font-extrabold text-[#8D6E63] uppercase tracking-wider block">
                BUSINESS TYPE
              </span>
              <span className="text-xs font-bold text-[#1F1612] mt-0.5 block">
                {selectedBusinessType} (Stores &amp; Online Boutique)
              </span>
            </div>
            <button
              onClick={() => onNavigate(30, 'Editing Business Type')}
              className="p-1.5 text-[#8C3A16] hover:bg-[#FAF2EC] rounded-lg transition-colors cursor-pointer"
              title="Edit Business Type"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="border-t border-[#F5ECE5]" />

          {/* Row 4: LOOKING FOR */}
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[9.5px] font-extrabold text-[#8D6E63] uppercase tracking-wider block mb-1.5">
                LOOKING FOR
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCategories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF0E8] border border-[#ECD9CE] text-[11px] font-semibold text-[#8C3A16]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C3A16]" />
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => onNavigate(31, 'Editing Sourcing Categories')}
              className="p-1.5 text-[#8C3A16] hover:bg-[#FAF2EC] rounded-lg transition-colors cursor-pointer shrink-0 mt-1"
              title="Edit Categories"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Cluster Direct Assurance Box */}
        <div className="bg-[#FDF5F0] border border-[#F0E4DA] rounded-2xl p-3.5 flex items-start gap-3 shadow-2xs">
          <div className="w-8 h-8 rounded-full bg-[#D1F2D9] text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-black text-[#1F1612]">
              Cluster Direct Assurance
            </h4>
            <p className="text-[11px] text-[#6B5A51] leading-relaxed mt-0.5">
              Verified GST and bulk escrow protection enabled for authenticated craft orders.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 bg-white border-t border-[#E8DDD5] shrink-0 space-y-2">
        <button
          onClick={() => {
            onNavigate(33, '🎉 Your Bulk Buyer Profile is Ready!');
          }}
          className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] active:scale-98 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <span>Create Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate(30, 'Returned to Step 1 for adjustments')}
          className="w-full py-1 text-xs font-bold text-[#6D4C41] hover:text-[#8C3A16] text-center transition-colors cursor-pointer"
        >
          Make adjustments
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
 * SCREEN 33: BULK BUYER PROFILE CONFIRMATION SCREEN
 * 100% UI Match to 'bulk buyer profile confirmation after register.png'
 * ========================================================================= */
export const BuyerProfileConfirmationScreenView: React.FC<{
  yourName: string;
  businessName: string;
  onNavigate: (index: number, msg?: string) => void;
  showToast: (msg: string) => void;
}> = ({ yourName, businessName, onNavigate, showToast }) => {
  return (
    <div className="flex-1 flex flex-col h-full bg-[#FAF7F5] overflow-hidden">
      {/* Top Header */}
      <div className="px-4 py-2.5 bg-[#FAF7F5] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          {/* Logo Symbol */}
          <div className="w-7 h-7 rounded-full bg-white border border-[#E8DDD5] p-0.5 flex items-center justify-center shadow-2xs">
            <img
              src="/Logo.png"
              alt="HunarSangam"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-base font-black text-[#8C3A16] tracking-tight">HunarSangam</span>
          <div className="flex items-center gap-1 bg-[#E8F5E9] border border-[#A5D6A7] text-[#2E7D32] text-[10.5px] font-extrabold px-2 py-0.5 rounded-full">
            <Check className="w-3 h-3 stroke-[3]" />
            <span>Bulk Buyer</span>
          </div>
        </div>

        {/* Language selector */}
        <div
          onClick={() => showToast('Language: English (EN)')}
          className="flex items-center gap-1.5 bg-[#F4ECE5] border border-[#E5D7CD] px-2.5 py-1 rounded-full text-xs font-bold text-[#4A3830] cursor-pointer hover:bg-[#EDE3DA] transition-colors"
        >
          <Languages className="w-3.5 h-3.5 text-[#4A3830]" />
          <span>EN</span>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {/* Large Success Checkmark Circle */}
        <div className="pt-2 flex justify-center">
          <div className="w-18 h-18 rounded-full bg-[#2E7D32] text-white flex items-center justify-center shadow-lg shadow-[#2E7D32]/20 ring-4 ring-[#E8F5E9]">
            <Check className="w-10 h-10 stroke-[3.5]" />
          </div>
        </div>

        {/* Headline & Description */}
        <div className="text-center space-y-1.5">
          <h1 className="text-[21px] font-black text-[#1F1612] tracking-tight leading-tight">
            Your Bulk Buyer Profile is<br />Ready
          </h1>
          <p className="text-xs text-[#6B5A51] max-w-xs mx-auto leading-relaxed font-medium">
            Now discover artisans, explore handmade products and send bulk requirements directly to craft clusters.
          </p>
        </div>

        {/* Wholesale Tier Badge */}
        <div className="flex justify-center">
          <div className="bg-[#FAF4EF] border border-[#ECDCCE] rounded-full px-3.5 py-1.5 inline-flex items-center gap-2 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32] shrink-0" />
            <span className="text-[11px] font-bold text-[#3D2D24]">
              Wholesale Tier: Direct-to-Cluster Access Enabled
            </span>
          </div>
        </div>

        {/* BULK BUYER CAPABILITIES Section */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center justify-between px-0.5">
            <span className="text-[11px] font-black tracking-wider text-[#6B5A51] uppercase">
              BULK BUYER CAPABILITIES
            </span>
            <div className="flex items-center gap-1 text-[#9C3C18] font-bold text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9C3C18]" />
              <span>Enterprise Protected</span>
            </div>
          </div>

          {/* Card 1: Discover Artisans */}
          <div
            onClick={() => onNavigate(34, 'Navigating to Discover Artisans in Dashboard')}
            className="p-3.5 bg-[#FFFDFB] border border-[#EFE2D8] rounded-2xl shadow-2xs hover:border-[#DFC8BA] transition-all cursor-pointer space-y-2"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6ECE4] text-[#9C3C18] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-[#9C3C18]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-[#1F1612]">Discover Artisans</h3>
                  <ArrowRight className="w-4 h-4 text-[#C4B2A7]" />
                </div>
                <p className="text-[11.5px] text-[#6B5A51] mt-0.5 leading-snug">
                  Explore master artisans from 120+ GI craft clusters across India.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pl-13">
              <span className="inline-flex items-center gap-1 bg-[#E8F5E9] text-[#2E7D32] text-[10.5px] font-bold px-2 py-0.5 rounded-lg">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified Guilds</span>
              </span>
              <span className="bg-[#F2EBE5] text-[#5D4037] text-[10.5px] font-medium px-2 py-0.5 rounded-lg">
                Direct cluster contacts
              </span>
            </div>
          </div>

          {/* Card 2: Find Products */}
          <div
            onClick={() => onNavigate(34, 'Navigating to Wholesale Catalog in Dashboard')}
            className="p-3.5 bg-[#FFFDFB] border border-[#EFE2D8] rounded-2xl shadow-2xs hover:border-[#DFC8BA] transition-all cursor-pointer space-y-2"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6ECE4] text-[#9C3C18] flex items-center justify-center shrink-0">
                <Store className="w-5 h-5 text-[#9C3C18]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-[#1F1612]">Find Products</h3>
                  <ArrowRight className="w-4 h-4 text-[#C4B2A7]" />
                </div>
                <p className="text-[11.5px] text-[#6B5A51] mt-0.5 leading-snug">
                  Browse authentic catalog items with transparent wholesale bulk tiers.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pl-13">
              <span className="inline-flex items-center gap-1 bg-[#E8F5E9] text-[#2E7D32] text-[10.5px] font-bold px-2 py-0.5 rounded-lg">
                <Coins className="w-3 h-3" />
                <span>Tiered B2B Pricing</span>
              </span>
              <span className="bg-[#F2EBE5] text-[#5D4037] text-[10.5px] font-medium px-2 py-0.5 rounded-lg">
                MOQ transparency
              </span>
            </div>
          </div>

          {/* Card 3: Post a Requirement */}
          <div
            onClick={() => onNavigate(34, 'Opening Post a Requirement in Dashboard')}
            className="p-3.5 bg-[#FFFDFB] border border-[#EFE2D8] rounded-2xl shadow-2xs hover:border-[#DFC8BA] transition-all cursor-pointer space-y-2"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F6ECE4] text-[#9C3C18] flex items-center justify-center shrink-0">
                <ClipboardList className="w-5 h-5 text-[#9C3C18]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-[#1F1612]">Post a Requirement</h3>
                  <ArrowRight className="w-4 h-4 text-[#C4B2A7]" />
                </div>
                <p className="text-[11.5px] text-[#6B5A51] mt-0.5 leading-snug">
                  Specify custom designs, sample requests, and batch quantities directly.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pl-13">
              <span className="inline-flex items-center gap-1 bg-[#FDEEE6] text-[#9C3C18] text-[10.5px] font-bold px-2 py-0.5 rounded-lg">
                <Pencil className="w-3 h-3" />
                <span>Custom RFQs</span>
              </span>
              <span className="bg-[#F2EBE5] text-[#5D4037] text-[10.5px] font-medium px-2 py-0.5 rounded-lg">
                Audio notes supported
              </span>
            </div>
          </div>
        </div>

        {/* Empowerment Footnote */}
        <div className="flex items-center justify-center gap-2 pt-1 text-center">
          <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
          <p className="text-[11px] text-[#6B5A51] font-medium leading-tight">
            Direct settlements directly empowering rural artisan clusters.
          </p>
        </div>
      </div>

      {/* Bottom Fixed Action Buttons */}
      <div className="p-4 bg-white border-t border-[#EFE2D8] shrink-0 space-y-2">
        <button
          onClick={() => {
            onNavigate(34, '🚀 Welcome to your Bulk Buyer Home Dashboard!');
          }}
          className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] active:scale-98 text-white rounded-2xl font-black text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <span>Go to Dashboard</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate(32, 'Viewing profile summary')}
          className="w-full py-2.5 bg-white hover:bg-[#FAF5F0] border border-[#E5D8CF] text-[#1F1612] rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <Store className="w-3.5 h-3.5 text-[#5D4037]" />
          <span>View My Profile</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
 * SCREEN 34: BULK BUYER HOME DASHBOARD SCREEN
 * 100% UI Match to 'home - bulk buyer.png'
 * ========================================================================= */
export const BuyerHomeScreenView: React.FC<{
  yourName: string;
  businessName: string;
  onNavigate: (index: number, msg?: string) => void;
  showToast: (msg: string) => void;
}> = ({ yourName, businessName, onNavigate, showToast }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'discover' | 'requirements' | 'orders' | 'profile'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPostReqModal, setShowPostReqModal] = useState(false);
  const [rfqCraft, setRfqCraft] = useState('');
  const [rfqQty, setRfqQty] = useState('');

  return (
    <div className="flex-1 flex flex-col h-full bg-[#FAF7F5] overflow-hidden select-none">
      {/* Top Header Bar matching home - bulk buyer.png */}
      <div className="px-4 py-2.5 bg-[#FAF7F5] border-b border-[#EFE2D8] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white border border-[#E8DDD5] p-0.5 flex items-center justify-center shadow-2xs">
            <img
              src="/Logo.png"
              alt="HunarSangam"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-base font-black text-[#8C3A16] tracking-tight">HunarSangam</span>
          <div className="bg-[#FDEFEA] text-[#9C3C18] text-[9.5px] font-extrabold px-2 py-0.5 rounded-full">
            Bulk Buyer
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Language button */}
          <button
            onClick={() => showToast('Language: English / Hindi')}
            className="w-8 h-8 rounded-full bg-white border border-[#E5D7CD] flex items-center justify-center text-[#4A3830] hover:bg-[#F5ECE4] transition-colors cursor-pointer"
            title="Language"
          >
            <Languages className="w-4 h-4 text-[#4A3830]" />
          </button>

          {/* Notifications button with red unread dot */}
          <button
            onClick={() => showToast('🔔 2 new responses from Assam Cane Guild')}
            className="w-8 h-8 rounded-full bg-white border border-[#E5D7CD] flex items-center justify-center text-[#4A3830] relative hover:bg-[#F5ECE4] transition-colors cursor-pointer"
            title="Notifications"
          >
            <Bell className="w-4 h-4 text-[#4A3830]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E65100]" />
          </button>

          {/* Vikram Malhotra profile avatar */}
          <div
            onClick={() => showToast(`👤 Logged in as ${yourName || 'Vikram Malhotra'} (${businessName || 'FabCraft Living'})`)}
            className="w-8 h-8 rounded-full border-2 border-[#E0D2C7] overflow-hidden cursor-pointer shrink-0"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
              alt="Vikram Malhotra"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scrollable Dashboard Body */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4">
        {/* 1. Greeting Section & Business Account Pill */}
        <div>
          <div className="flex items-center gap-1.5">
            <h1 className="text-xl font-black text-[#1F1612] tracking-tight">
              Good morning, {yourName || 'Vikram'}
            </h1>
            <span className="text-lg">👋</span>
          </div>
          <p className="text-xs text-[#6B5A51] mt-0.5 font-medium">
            Find the right handmade products for your business.
          </p>

          <div className="mt-2.5 inline-flex items-center gap-2 bg-[#F6ECE3] border border-[#EBDCD0] px-2.5 py-1.5 rounded-xl shadow-2xs">
            <Store className="w-4 h-4 text-[#2E7D32] shrink-0" />
            <div>
              <h4 className="text-[11px] font-black text-[#1F1612] leading-none">
                {businessName || 'FabCraft Living'}
              </h4>
              <span className="text-[9.5px] text-[#6B5A51] font-semibold">Bulk Buyer Account</span>
            </div>
          </div>
        </div>

        {/* 2. Search Bar with Microphone */}
        <div
          onClick={() => onNavigate(36, 'Opening Search & Voice Search')}
          className="flex items-center gap-2 bg-white border border-[#E5D7CD] rounded-2xl px-3 py-1.5 shadow-2xs cursor-pointer hover:border-[#9C3C18] transition-all"
        >
          <Search className="w-4 h-4 text-[#8C7A70] shrink-0" />
          <input
            type="text"
            value={searchQuery}
            readOnly
            placeholder="What are you looking for in bulk?"
            className="w-full bg-transparent text-xs text-[#1F1612] placeholder-[#8C7A70] outline-none font-medium cursor-pointer"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate(36, '🎤 Activating Voice Search...');
            }}
            className="w-8 h-8 rounded-xl bg-[#9C3C18] hover:bg-[#853213] text-white flex items-center justify-center shrink-0 cursor-pointer shadow-xs transition-colors"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>

        {/* 3. Hero Banner: Need products in bulk? */}
        <div className="bg-[#9C3C18] text-white rounded-3xl p-4.5 space-y-3 shadow-md relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 bg-white/20 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold">
            <Tag className="w-3 h-3" />
            <span>Direct Artisan Sourcing</span>
          </div>

          <div>
            <h2 className="text-[19px] font-black leading-tight tracking-tight">
              Need products in bulk?
            </h2>
            <p className="text-xs text-[#FBECE5] mt-1 leading-relaxed font-medium">
              Tell us what you need and connect with suitable artisans directly.
            </p>
          </div>

          <button
            onClick={() => setShowPostReqModal(true)}
            className="w-full py-2.5 bg-white hover:bg-neutral-50 active:scale-98 text-[#9C3C18] rounded-2xl font-black text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-[#9C3C18]" />
            <span>Post a Requirement</span>
          </button>
        </div>

        {/* 4. Two Quick Action Cards: Discover & Requirements */}
        <div className="grid grid-cols-2 gap-3">
          {/* Discover Card */}
          <div
            onClick={() => {
              onNavigate(35, 'Opening Discover Catalog');
            }}
            className="p-3.5 bg-white border border-[#EFE2D8] rounded-2xl shadow-2xs hover:border-[#DFC8BA] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FBEFE7] text-[#9C3C18] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-[#C4B2A7]" />
            </div>
            <h3 className="text-xs font-black text-[#1F1612]">Discover</h3>
            <p className="text-[10px] text-[#6B5A51] mt-0.5 font-medium">Find handmade products</p>
          </div>

          {/* Requirements Card */}
          <div
            onClick={() => {
              setActiveTab('requirements');
              showToast('Managing 1 Active bulk requirement');
            }}
            className="p-3.5 bg-white border border-[#EFE2D8] rounded-2xl shadow-2xs hover:border-[#DFC8BA] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FBEFE7] text-[#9C3C18] flex items-center justify-center">
                <ClipboardList className="w-5 h-5" />
              </div>
              <span className="bg-[#E8F5E9] text-[#2E7D32] text-[9.5px] font-black px-2 py-0.5 rounded-full">
                1 Active
              </span>
            </div>
            <h3 className="text-xs font-black text-[#1F1612]">Requirements</h3>
            <p className="text-[10px] text-[#6B5A51] mt-0.5 font-medium">Manage bulk requirements</p>
          </div>
        </div>

        {/* 5. Your Active Requirements Section */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm font-black text-[#1F1612]">Your Active Requirements</h2>
              <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
            </div>
            <button
              onClick={() => showToast('Viewing all active requirements')}
              className="text-xs font-black text-[#9C3C18] hover:underline cursor-pointer"
            >
              View All &rsaquo;
            </button>
          </div>

          {/* Active Requirement Card */}
          <div className="p-3.5 bg-[#FFF9F5] border border-[#EFE2D8] rounded-2xl shadow-2xs space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FBEFE7] text-[#8C3A16] flex items-center justify-center shrink-0">
                <Boxes className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h3 className="text-xs font-black text-[#1F1612] truncate">500 Bamboo Baskets</h3>
                  <span className="inline-flex items-center gap-1 bg-[#E8F5E9] text-[#2E7D32] text-[9.5px] font-extrabold px-2 py-0.5 rounded-full shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                    <span>Finding Artisans</span>
                  </span>
                </div>
                <p className="text-[10.5px] text-[#6B5A51] mt-0.5 font-medium">
                  Target delivery: 45 days • Corporate packaging needed
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10.5px] text-[#4A3830] font-medium pt-0.5">
              <span className="flex items-center gap-1 font-bold">
                <Users className="w-3.5 h-3.5 text-[#5D4037]" />
                <span>4 Artisans responded</span>
              </span>
              <span className="text-[#C4B2A7]">•</span>
              <span className="text-[#795548]">Last activity 20 mins ago</span>
            </div>

            <button
              onClick={() => showToast('Opening active RFQ: 500 Bamboo Baskets (4 artisan bids received)')}
              className="w-full py-2 bg-[#9C3C18] hover:bg-[#853213] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1 shadow-xs transition-colors cursor-pointer"
            >
              <span>View Requirement</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6. Explore Handmade Products Section */}
        <div className="space-y-2.5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-sm font-black text-[#1F1612] leading-tight">
                Explore Handmade<br />Products
              </h2>
              <p className="text-[10.5px] text-[#6B5A51] mt-0.5 font-medium">
                Verified craft lines curated for retail and commercial buyers
              </p>
            </div>
            <button
              onClick={() => onNavigate(37, 'Browsing Wholesale Catalog')}
              className="text-xs font-black text-[#9C3C18] hover:underline cursor-pointer shrink-0 pt-0.5"
            >
              Browse Catalog &rsaquo;
            </button>
          </div>

          {/* Horizontal Product Cards */}
          <div className="flex gap-3 overflow-x-auto pb-1">
            {/* Product 1: Bamboo Fruit Basket */}
            <div
              onClick={() => onNavigate(37, 'Viewing specs: Handwoven Bamboo Fruit Basket')}
              className="w-48 bg-white border border-[#EFE2D8] rounded-2xl overflow-hidden shadow-2xs shrink-0 flex flex-col cursor-pointer hover:border-[#9C3C18] transition-all"
            >
              <div className="relative h-28 bg-[#F3EBE3]">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80"
                  alt="Handwoven Bamboo Fruit Basket"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs text-[#1F1612] text-[9px] font-black px-1.5 py-0.5 rounded-md">
                  Bamboo Craft
                </span>
                <span className="absolute bottom-2 left-2 bg-black/75 text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-md">
                  Min Bulk: 50 pcs
                </span>
              </div>

              <div className="p-2.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="text-xs font-black text-[#1F1612] line-clamp-1">
                    Handwoven Bamboo Fruit Basket
                  </h4>
                  <p className="text-[10px] text-[#6B5A51] mt-0.5">👤 Artisan: Ramesh Kumar</p>
                  <p className="text-[10px] text-[#6B5A51]">📍 Barpeta, Assam</p>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#F5ECE5]">
                  <span className="text-[10px] font-black text-[#1F1612]">Tiered from ₹180/pc</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(37, 'Viewing specs: Handwoven Bamboo Fruit Basket');
                    }}
                    className="px-2 py-1 bg-white hover:bg-[#FAF5F0] border border-[#E5D5CB] text-[#9C3C18] text-[9.5px] font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2: Blue Pottery Floral Vase */}
            <div
              onClick={() => onNavigate(37, 'Viewing specs: Blue Pottery Floral Vase')}
              className="w-48 bg-white border border-[#EFE2D8] rounded-2xl overflow-hidden shadow-2xs shrink-0 flex flex-col cursor-pointer hover:border-[#9C3C18] transition-all"
            >
              <div className="relative h-28 bg-[#F3EBE3]">
                <img
                  src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=400&q=80"
                  alt="Blue Pottery Floral Vase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs text-[#1F1612] text-[9px] font-black px-1.5 py-0.5 rounded-md">
                  Ceramic &amp; Pottery
                </span>
                <span className="absolute bottom-2 left-2 bg-black/75 text-white text-[8.5px] font-bold px-1.5 py-0.5 rounded-md">
                  Min Bulk: 30 pcs
                </span>
              </div>

              <div className="p-2.5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h4 className="text-xs font-black text-[#1F1612] line-clamp-1">
                    Blue Pottery Floral Vase
                  </h4>
                  <p className="text-[10px] text-[#6B5A51] mt-0.5">👤 Artisan: Mohan Lal</p>
                  <p className="text-[10px] text-[#6B5A51]">📍 Jaipur, Rajasthan</p>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-[#F5ECE5]">
                  <span className="text-[10px] font-black text-[#1F1612]">Tiered from ₹480/pc</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate(37, 'Viewing specs: Blue Pottery Floral Vase');
                    }}
                    className="px-2 py-1 bg-white hover:bg-[#FAF5F0] border border-[#E5D5CB] text-[#9C3C18] text-[9.5px] font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Artisans for You Section */}
        <div className="space-y-2.5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-sm font-black text-[#1F1612] leading-tight">Artisans for You</h2>
              <p className="text-[10.5px] text-[#6B5A51] mt-0.5 font-medium">
                Direct partnerships with high-capacity grassroots clusters
              </p>
            </div>
            <button
              onClick={() => onNavigate(38, 'Viewing all Featured Master Artisans')}
              className="text-xs font-black text-[#9C3C18] hover:underline cursor-pointer shrink-0 pt-0.5"
            >
              All Artisans &rsaquo;
            </button>
          </div>

          {/* Artisan 1: Ramesh Kumar */}
          <div
            onClick={() => onNavigate(39, 'Opening Ramesh Kumar Profile')}
            className="p-3.5 bg-[#FFF9F5] border border-[#EFE2D8] rounded-2xl shadow-2xs space-y-2.5 cursor-pointer hover:border-[#9C3C18] transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#E0D2C7]">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80"
                  alt="Ramesh Kumar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-[#2E7D32] ring-2 ring-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black text-[#1F1612]">Ramesh Kumar</h3>
                  <span className="bg-[#FCEEE6] text-[#9C3C18] text-[9.5px] font-extrabold px-2 py-0.5 rounded-md">
                    Master Craftsman
                  </span>
                </div>
                <p className="text-[11px] font-bold text-[#9C3C18] mt-0.5">Bamboo &amp; Cane</p>
                <div className="flex items-center justify-between text-[10px] text-[#6B5A51] mt-1 font-medium">
                  <span>★ 4.9 • Barpeta, Assam</span>
                  <span className="font-semibold text-[#4A3830] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                    Capacity: 300 pcs/mo
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(39, 'Connecting with master artisan Ramesh Kumar');
              }}
              className="w-full py-2 bg-[#F0E5DC] hover:bg-[#E8DCD2] text-[#3E2723] text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <span>View Artisan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Artisan 2: Mohan Lal */}
          <div className="p-3.5 bg-[#FFF9F5] border border-[#EFE2D8] rounded-2xl shadow-2xs space-y-2.5">
            <div className="flex items-start gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#E0D2C7]">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
                  alt="Mohan Lal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-[#2E7D32] ring-2 ring-white" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-black text-[#1F1612]">Mohan Lal</h3>
                  <span className="bg-[#FCEEE6] text-[#9C3C18] text-[9.5px] font-extrabold px-2 py-0.5 rounded-md">
                    GI Verified
                  </span>
                </div>
                <p className="text-[11px] font-bold text-[#9C3C18] mt-0.5">Ceramic &amp; Pottery</p>
                <div className="flex items-center justify-between text-[10px] text-[#6B5A51] mt-1 font-medium">
                  <span>★ 4.8 • Jaipur, Rajasthan</span>
                  <span className="font-semibold text-[#4A3830] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                    Capacity: 250 pcs/mo
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate(38, 'Connecting with GI artisan Mohan Lal')}
              className="w-full py-2 bg-[#F0E5DC] hover:bg-[#E8DCD2] text-[#3E2723] text-xs font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <span>View Artisan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom 5-Tab Navigation Bar matching home - bulk buyer.png */}
      <div className="bg-white border-t border-[#EADFD6] px-3 py-2 flex items-center justify-around shrink-0 shadow-xs">
        {/* Home */}
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
            activeTab === 'home'
              ? 'bg-[#FDEEE6] text-[#9C3C18]'
              : 'text-[#7A6A61] hover:text-[#1F1612]'
          }`}
        >
          <Store className="w-4 h-4 stroke-[2.5]" />
          <span className="text-[10px] font-black">Home</span>
        </button>

        {/* Discover */}
        <button
          onClick={() => {
            onNavigate(35, 'Opening Discover Catalog');
          }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
            activeTab === 'discover'
              ? 'bg-[#FDEEE6] text-[#9C3C18]'
              : 'text-[#7A6A61] hover:text-[#1F1612]'
          }`}
        >
          <Compass className="w-4 h-4 stroke-[2]" />
          <span className="text-[10px] font-bold">Discover</span>
        </button>

        {/* Requirements */}
        <button
          onClick={() => {
            setActiveTab('requirements');
            showToast('Requirements tab selected');
          }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
            activeTab === 'requirements'
              ? 'bg-[#FDEEE6] text-[#9C3C18]'
              : 'text-[#7A6A61] hover:text-[#1F1612]'
          }`}
        >
          <ClipboardList className="w-4 h-4 stroke-[2]" />
          <span className="text-[10px] font-bold">Requirements</span>
        </button>

        {/* Orders */}
        <button
          onClick={() => {
            setActiveTab('orders');
            showToast('Orders tab selected');
          }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
            activeTab === 'orders'
              ? 'bg-[#FDEEE6] text-[#9C3C18]'
              : 'text-[#7A6A61] hover:text-[#1F1612]'
          }`}
        >
          <Receipt className="w-4 h-4 stroke-[2]" />
          <span className="text-[10px] font-bold">Orders</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => {
            setActiveTab('profile');
            onNavigate(32, 'Viewing Profile Summary');
          }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all cursor-pointer ${
            activeTab === 'profile'
              ? 'bg-[#FDEEE6] text-[#9C3C18]'
              : 'text-[#7A6A61] hover:text-[#1F1612]'
          }`}
        >
          <User className="w-4 h-4 stroke-[2]" />
          <span className="text-[10px] font-bold">Profile</span>
        </button>
      </div>

      {/* Post Requirement Modal */}
      {showPostReqModal && (
        <div className="absolute inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end justify-center">
          <div className="bg-white rounded-t-3xl p-5 border-t border-[#E8DDD5] shadow-2xl w-full max-w-[390px] space-y-3 animate-in slide-in-from-bottom-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-[#9C3C18] tracking-wider block">
                  BULK SOURCING
                </span>
                <h3 className="text-base font-black text-[#1F1612]">Post a Requirement</h3>
              </div>
              <button
                onClick={() => setShowPostReqModal(false)}
                className="w-7 h-7 rounded-full bg-[#FAF5F0] text-[#5D4037] flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#6B5A51]">
              Broadcast your custom quantity requirement directly to verified artisan guilds across India.
            </p>

            <div className="space-y-2 text-xs">
              <div>
                <label className="font-bold text-[#4A3830] block mb-1">Craft Category / Product Name</label>
                <input
                  type="text"
                  value={rfqCraft}
                  onChange={(e) => setRfqCraft(e.target.value)}
                  placeholder="e.g. 500 Handwoven Bamboo Baskets"
                  className="w-full px-3 py-2 bg-[#FAF5F0] border border-[#E0D2C7] rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-[#4A3830] block mb-1">Batch Units / Quantity</label>
                <input
                  type="text"
                  value={rfqQty}
                  onChange={(e) => setRfqQty(e.target.value)}
                  placeholder="e.g. 250 - 500 pcs"
                  className="w-full px-3 py-2 bg-[#FAF5F0] border border-[#E0D2C7] rounded-xl outline-none"
                />
              </div>
            </div>

            <button
              onClick={() => {
                setShowPostReqModal(false);
                showToast('✅ Bulk requirement broadcasted to 140+ craft clusters!');
              }}
              className="w-full py-3 bg-[#9C3C18] hover:bg-[#853213] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Broadcast Requirement &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
