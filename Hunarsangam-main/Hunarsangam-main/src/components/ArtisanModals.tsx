import React, { useState } from 'react';
import {
  X,
  Bell,
  Check,
  CheckCircle2,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Truck,
  Calendar,
  DollarSign,
  Share2,
  Download,
  Copy,
  Sparkles,
  Clock,
  ArrowRight,
  Eye,
  Users,
  Award,
  Phone,
  MessageCircle,
  Wallet,
  Send,
  Radio,
  Sliders,
  ExternalLink,
  Store,
  MapPin,
  QrCode,
  Printer,
  ChevronRight,
} from 'lucide-react';

export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  time: string;
  type: 'order' | 'escrow' | 'collab' | 'system' | 'message';
  unread: boolean;
  actionLabel?: string;
  targetScreenIndex?: number;
}

interface ArtisanModalsProps {
  // Notifications
  showNotificationsModal: boolean;
  setShowNotificationsModal: (show: boolean) => void;
  onNavigateToScreen: (screenIndex: number, toastMsg?: string) => void;
  showToast: (msg: string) => void;

  // Escrow Details
  showEscrowDetailsModal: boolean;
  setShowEscrowDetailsModal: (show: boolean) => void;

  // Completed Orders
  showCompletedOrdersModal: boolean;
  setShowCompletedOrdersModal: (show: boolean) => void;

  // Score Breakdown
  showScoreBreakdownModal: boolean;
  setShowScoreBreakdownModal: (show: boolean) => void;

  // Buyer Analytics
  showBuyerAnalyticsModal: boolean;
  setShowBuyerAnalyticsModal: (show: boolean) => void;

  // WhatsApp Share
  showShareWhatsAppModal: boolean;
  setShowShareWhatsAppModal: (show: boolean) => void;

  // Card Print
  showCardPrintModal: boolean;
  setShowCardPrintModal: (show: boolean) => void;

  // Wallet Pass
  showWalletPassModal: boolean;
  setShowWalletPassModal: (show: boolean) => void;

  // QR Enlarged
  showQrEnlargedModal: boolean;
  setShowQrEnlargedModal: (show: boolean) => void;

  // SLA Health
  showSlaHealthModal: boolean;
  setShowSlaHealthModal: (show: boolean) => void;

  // Capacity Planner
  showCapacityPlannerModal: boolean;
  setShowCapacityPlannerModal: (show: boolean) => void;

  artisanName?: string;
  selectedLanguage?: string;
}

export const ArtisanModals: React.FC<ArtisanModalsProps> = ({
  showNotificationsModal,
  setShowNotificationsModal,
  onNavigateToScreen,
  showToast,
  showEscrowDetailsModal,
  setShowEscrowDetailsModal,
  showCompletedOrdersModal,
  setShowCompletedOrdersModal,
  showScoreBreakdownModal,
  setShowScoreBreakdownModal,
  showBuyerAnalyticsModal,
  setShowBuyerAnalyticsModal,
  showShareWhatsAppModal,
  setShowShareWhatsAppModal,
  showCardPrintModal,
  setShowCardPrintModal,
  showWalletPassModal,
  setShowWalletPassModal,
  showQrEnlargedModal,
  setShowQrEnlargedModal,
  showSlaHealthModal,
  setShowSlaHealthModal,
  showCapacityPlannerModal,
  setShowCapacityPlannerModal,
  artisanName = 'Ramu Kumar',
  selectedLanguage = 'English',
}) => {
  // Notifications State
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 'notif-1',
      title: '₹22,500 Escrow Advance Deposited',
      body: 'Heritage Handcrafts (Buyer) deposited 100% advance into HunarSmart Escrow for Order #REQ-HH-1048.',
      time: '10 min ago',
      type: 'escrow',
      unread: true,
      actionLabel: 'Open Buyer Chat (Screen 29)',
      targetScreenIndex: 29,
    },
    {
      id: 'notif-2',
      title: 'New Bulk Order Request: 50 pcs',
      body: 'Purchase inquiry received for Woven Cane Baskets with lacquer finish. Delivery date: 28 Sept 2026.',
      time: '25 min ago',
      type: 'order',
      unread: true,
      actionLabel: 'Review Order Request (Screen 24)',
      targetScreenIndex: 24,
    },
    {
      id: 'notif-3',
      title: 'Cluster Collaboration Accepted',
      body: 'Suresh Das accepted your invite to split 15 pcs for the FabIndia order. Cluster capacity confirmed.',
      time: '1 hour ago',
      type: 'collab',
      unread: true,
      actionLabel: 'Open Collaboration Hub (Screen 27)',
      targetScreenIndex: 27,
    },
    {
      id: 'notif-4',
      title: 'Vernacular Translation Ready 🔊',
      body: 'Buyer inquiry translated into Hindi voice audio: "नमस्ते रामू जी, क्या आप प्राकृतिक लैकर फिनिश की पुष्टि कर सकते हैं?"',
      time: '3 hours ago',
      type: 'message',
      unread: false,
      actionLabel: 'Listen in Chat (Screen 29)',
      targetScreenIndex: 29,
    },
    {
      id: 'notif-5',
      title: 'Official GI Seal Verified ✓',
      body: 'Assam State Handicrafts Registry authenticated your GI Craft Certification #GI-AS-431 for B2B export.',
      time: 'Yesterday',
      type: 'system',
      unread: false,
      actionLabel: 'View Digital Visiting Card (Screen 20)',
      targetScreenIndex: 20,
    },
  ]);

  const [notificationFilter, setNotificationFilter] = useState<'all' | 'orders' | 'escrow' | 'collab'>('all');
  const [whatsappRecipient, setWhatsappRecipient] = useState<'retail' | 'b2b' | 'exhibition'>('b2b');
  const [printFormat, setPrintFormat] = useState<'pocket' | 'standee' | 'tag'>('pocket');
  const [personalCapacity, setPersonalCapacity] = useState<number>(50);
  const [guildCapacity, setGuildCapacity] = useState<number>(200);
  const [escrowMilestoneRequested, setEscrowMilestoneRequested] = useState<boolean>(false);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    showToast('All notifications marked as read');
  };

  const markSingleAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    );
  };

  const filteredNotifications = notifications.filter((n) => {
    if (notificationFilter === 'all') return true;
    if (notificationFilter === 'orders') return n.type === 'order';
    if (notificationFilter === 'escrow') return n.type === 'escrow';
    if (notificationFilter === 'collab') return n.type === 'collab';
    return true;
  });

  return (
    <>
      {/* 1. NOTIFICATIONS CENTER MODAL / DRAWER */}
      {showNotificationsModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-[#FFFDFB] rounded-t-3xl sm:rounded-3xl border border-[#E8DDD5] shadow-2xl w-full max-w-[390px] h-[85%] sm:h-[620px] flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
            {/* Header */}
            <div className="p-3.5 pb-2.5 border-b border-[#EADFD6] bg-[#FAF5F0] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shadow-xs">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-black text-[#1F1612]">सूचनाएं / Notifications</h3>
                    {unreadCount > 0 && (
                      <span className="bg-[#C53030] text-white text-[10px] font-black px-1.5 py-0.2 rounded-full">
                        {unreadCount} New
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-[#6D4C41]">Real-time orders, escrow &amp; cluster alerts</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-[10.5px] font-bold text-[#8C3A16] hover:underline px-1.5 py-0.5 cursor-pointer"
                  >
                    Mark read
                  </button>
                )}
                <button
                  onClick={() => setShowNotificationsModal(false)}
                  className="w-7 h-7 rounded-full bg-white border border-[#EADFD6] flex items-center justify-center text-[#6D4C41] hover:bg-[#F3EAE3] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="px-3.5 py-2 bg-white border-b border-[#F0E6DE] flex items-center gap-1.5 overflow-x-auto shrink-0">
              {[
                { id: 'all', label: 'All' },
                { id: 'escrow', label: '🔒 Escrow' },
                { id: 'orders', label: '📦 Orders' },
                { id: 'collab', label: '🤝 Collab' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setNotificationFilter(tab.id as any)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                    notificationFilter === tab.id
                      ? 'bg-[#8C3A16] text-white shadow-2xs'
                      : 'bg-[#FAF5F0] text-[#6D4C41] border border-[#EADFD6] hover:bg-[#F3EAE3]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Notification List */}
            <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5">
              {filteredNotifications.length === 0 ? (
                <div className="h-48 flex flex-col items-center justify-center text-center p-4 text-[#8D6E63]">
                  <CheckCircle2 className="w-8 h-8 text-[#2E7D32] mb-1.5" />
                  <p className="text-xs font-bold text-[#1F1612]">All caught up!</p>
                  <p className="text-[11px]">No notifications in this category right now.</p>
                </div>
              ) : (
                filteredNotifications.map((notif) => (
                  <div
                    key={notif.id}
                    onClick={() => {
                      markSingleAsRead(notif.id);
                      if (notif.targetScreenIndex !== undefined) {
                        setShowNotificationsModal(false);
                        onNavigateToScreen(notif.targetScreenIndex, `Opening: ${notif.title}`);
                      }
                    }}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer text-left relative ${
                      notif.unread
                        ? 'bg-[#FFF8F4] border-[#F5DAC8] shadow-xs'
                        : 'bg-white border-[#EADFD6] hover:bg-[#FAF5F0]'
                    }`}
                  >
                    {notif.unread && (
                      <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#C53030]" />
                    )}

                    <div className="flex items-start gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                          notif.type === 'escrow'
                            ? 'bg-[#EBF7EE] text-[#1B7339]'
                            : notif.type === 'order'
                            ? 'bg-[#FFF0E6] text-[#8C3A16]'
                            : notif.type === 'collab'
                            ? 'bg-[#EDE7F6] text-[#5E35B1]'
                            : notif.type === 'message'
                            ? 'bg-[#E3F2FD] text-[#1565C0]'
                            : 'bg-[#F5ECE4] text-[#6D4C41]'
                        }`}
                      >
                        {notif.type === 'escrow' && <ShieldCheck className="w-4 h-4" />}
                        {notif.type === 'order' && <FileText className="w-4 h-4" />}
                        {notif.type === 'collab' && <Users className="w-4 h-4" />}
                        {notif.type === 'message' && <MessageCircle className="w-4 h-4" />}
                        {notif.type === 'system' && <Award className="w-4 h-4" />}
                      </div>

                      <div className="flex-1 min-w-0 pr-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-black text-[#1F1612] truncate">{notif.title}</h4>
                        </div>
                        <p className="text-[11px] text-[#5D4037] leading-relaxed mt-0.5">{notif.body}</p>
                        <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#F0E5DC]/60">
                          <span className="text-[9.5px] font-semibold text-[#8D6E63] flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {notif.time}
                          </span>
                          {notif.actionLabel && (
                            <span className="text-[10px] font-extrabold text-[#8C3A16] flex items-center gap-0.5 hover:underline">
                              <span>{notif.actionLabel}</span>
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bottom Clear / Close Footer */}
            <div className="p-3 bg-[#FAF5F0] border-t border-[#EADFD6] flex gap-2 shrink-0">
              <button
                onClick={() => {
                  setNotifications([]);
                  showToast('Notifications cleared');
                }}
                className="flex-1 py-2 bg-white border border-[#EADFD6] rounded-xl text-xs font-bold text-[#6D4C41] hover:bg-[#F3EAE3] cursor-pointer"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowNotificationsModal(false)}
                className="flex-1 py-2 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. ESCROW DETAILS MODAL (HunarSmart Escrow Contract) */}
      {showEscrowDetailsModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[340px] max-h-[90%] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />

            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#EBF7EE] text-[#1B7339] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1F1612]">HunarSmart Escrow</h3>
                  <p className="text-[10px] text-[#2E7D32] font-semibold">Contract #ESC-HH-9021 • Secured</p>
                </div>
              </div>
              <button
                onClick={() => setShowEscrowDetailsModal(false)}
                className="w-6 h-6 rounded-full bg-[#F5ECE4] text-[#6D4C41] flex items-center justify-center hover:bg-[#EADFD6] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Escrow Amount Highlight */}
            <div className="bg-[#EBF7EE] border border-[#CDEED6] rounded-2xl p-3 my-3 text-center">
              <span className="text-[10px] font-bold text-[#2E7D32] uppercase tracking-wider">
                100% ADVANCE FUNDS LOCKED
              </span>
              <p className="text-2xl font-black text-[#1B7339] my-0.5">₹22,500</p>
              <p className="text-[10.5px] text-[#2E7D32]">
                Deposited by Heritage Handcrafts (B2B Verified Buyer)
              </p>
            </div>

            {/* Milestones */}
            <div className="space-y-2 mb-4">
              <p className="text-[10.5px] font-black text-[#6D4C41] uppercase">Release Milestones</p>

              {/* Milestone 1 */}
              <div className="p-2.5 rounded-xl border border-[#CDEED6] bg-[#F7FCF8] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#1F1612]">Milestone 1: 40% (₹9,000)</p>
                  <p className="text-[10px] text-[#2E7D32]">Order acceptance &amp; raw material prep</p>
                </div>
                <span className="text-[9.5px] font-extrabold bg-[#DFF4E5] text-[#1B7339] px-2 py-0.5 rounded-md">
                  {escrowMilestoneRequested ? 'Requested ⏳' : 'Ready to Release'}
                </span>
              </div>

              {/* Milestone 2 */}
              <div className="p-2.5 rounded-xl border border-[#EADFD6] bg-[#FAF5F0] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#1F1612]">Milestone 2: 30% (₹6,750)</p>
                  <p className="text-[10px] text-[#6D4C41]">Mid-production photo verification (20 pcs)</p>
                </div>
                <span className="text-[9.5px] font-bold bg-[#F0E5DC] text-[#7A5A4D] px-2 py-0.5 rounded-md">
                  Pending Photo
                </span>
              </div>

              {/* Milestone 3 */}
              <div className="p-2.5 rounded-xl border border-[#EADFD6] bg-[#FAF5F0] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#1F1612]">Milestone 3: 30% (₹6,750)</p>
                  <p className="text-[10px] text-[#6D4C41]">Final delivery &amp; courier barcode scan</p>
                </div>
                <span className="text-[9.5px] font-bold bg-[#F0E5DC] text-[#7A5A4D] px-2 py-0.5 rounded-md">
                  On Delivery
                </span>
              </div>
            </div>

            {/* Payout Destination */}
            <div className="bg-[#FFF4EC] border border-[#F5DAC8] rounded-xl p-2.5 mb-4 text-[11px] text-[#6D4C41]">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-[#1F1612]">Direct Bank Destination:</span>
                <span className="text-[#2E7D32] font-bold">Verified UPI</span>
              </div>
              <p>State Bank of India • A/C ending in **4821 (Ramu Kumar)</p>
              <p className="text-[10px] text-[#8C3A16] mt-1 font-semibold">
                🛡️ Zero commission deducted on HunarSangam artisan payout.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowEscrowDetailsModal(false)}
                className="flex-1 py-2.5 bg-[#FAF5F0] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#6D4C41] hover:bg-[#F3EAE3] cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setEscrowMilestoneRequested(true);
                  showToast('✅ Milestone 1 release request sent to Heritage Handcrafts!');
                }}
                className="flex-1 py-2.5 bg-[#1B7339] hover:bg-[#145a2c] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center gap-1"
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>{escrowMilestoneRequested ? 'Release Requested' : 'Request Milestone 1'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. COMPLETED ORDERS MODAL (Artisan History) */}
      {showCompletedOrdersModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[350px] max-h-[85%] flex flex-col animate-in zoom-in-95 duration-200">
            <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />

            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-sm font-black text-[#1F1612]">Completed Orders (28)</h3>
                <p className="text-[10.5px] text-[#6D4C41]">Lifetime verified order history &amp; payouts</p>
              </div>
              <button
                onClick={() => setShowCompletedOrdersModal(false)}
                className="w-6 h-6 rounded-full bg-[#F5ECE4] text-[#6D4C41] flex items-center justify-center hover:bg-[#EADFD6] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Total Earnings Banner */}
            <div className="bg-[#FAF5F0] border border-[#EADFD6] rounded-2xl p-3 mb-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-[#6D4C41] font-bold uppercase">Total Lifetime Payout</p>
                <p className="text-xl font-black text-[#8C3A16]">₹1,86,400</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-[#2E7D32] bg-[#E8F5E9] px-2 py-0.5 rounded-md">
                  100% On-Time
                </span>
                <p className="text-[9.5px] text-[#8D6E63] mt-0.5">28 Fulfilled • 0 Disputes</p>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {[
                {
                  id: 'PO-FAB-7719',
                  buyer: 'FabIndia Retail',
                  items: '50 × Woven Fruit Basket',
                  amount: '₹17,000',
                  date: '12 Aug 2026',
                  rating: '5.0 ★',
                },
                {
                  id: 'PO-TBS-3204',
                  buyer: 'The Bombay Store',
                  items: '30 × Cane Planter Baskets',
                  amount: '₹15,600',
                  date: '28 Jul 2026',
                  rating: '4.9 ★',
                },
                {
                  id: 'PO-TRI-9921',
                  buyer: 'Tribes India (TRIFED)',
                  items: '100 × Assam Bamboo Trays',
                  amount: '₹34,000',
                  date: '15 Jun 2026',
                  rating: '5.0 ★',
                },
                {
                  id: 'PO-DST-1102',
                  buyer: 'Dastkar Nature Bazaar',
                  items: '40 × Lacquered Picnic Baskets',
                  amount: '₹18,400',
                  date: '02 May 2026',
                  rating: '4.8 ★',
                },
              ].map((ord) => (
                <div key={ord.id} className="p-2.5 rounded-xl border border-[#EADFD6] bg-[#FFFDFB] text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-[#8C3A16] text-[11px]">#{ord.id}</span>
                    <span className="font-black text-[#1F1612] text-xs">{ord.amount}</span>
                  </div>
                  <p className="font-extrabold text-[#1F1612] mt-0.5">{ord.buyer}</p>
                  <p className="text-[10.5px] text-[#6D4C41]">{ord.items}</p>
                  <div className="flex justify-between items-center text-[9.5px] text-[#8D6E63] mt-1 pt-1 border-t border-[#F5ECE4]">
                    <span>Delivered: {ord.date}</span>
                    <span className="font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                      Buyer Rating: {ord.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-[#EADFD6] mt-2">
              <button
                onClick={() => setShowCompletedOrdersModal(false)}
                className="w-full py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
              >
                Close History
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. SCORE BREAKDOWN MODAL */}
      {showScoreBreakdownModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[340px] max-h-[85%] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#8C3A16]" />
                <h3 className="text-sm font-black text-[#1F1612]">Artisan Trust Score</h3>
              </div>
              <button
                onClick={() => setShowScoreBreakdownModal(false)}
                className="w-6 h-6 rounded-full bg-[#F5ECE4] text-[#6D4C41] flex items-center justify-center hover:bg-[#EADFD6] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Score Ring / Hero */}
            <div className="bg-[#FFF4EC] border border-[#F5DAC8] rounded-2xl p-4 text-center my-3">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8C3A16] text-white shadow-md mb-1.5">
                <span className="text-2xl font-black">96</span>
              </div>
              <h4 className="text-xs font-black text-[#1F1612]">Top-Tier Artisan (Elite Level 4)</h4>
              <p className="text-[10px] text-[#6D4C41]">Ranked top 2% across 3,400+ cane &amp; bamboo weavers</p>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-3 mb-4 text-xs">
              <div>
                <div className="flex justify-between font-bold text-[#1F1612] mb-1">
                  <span>On-Time Delivery</span>
                  <span className="text-[#2E7D32]">98% (42/43 batches)</span>
                </div>
                <div className="h-1.5 bg-[#EADFD6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#2E7D32] rounded-full" style={{ width: '98%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[#1F1612] mb-1">
                  <span>Craft Quality &amp; Precision</span>
                  <span className="text-[#8C3A16]">4.9 / 5.0 (34 reviews)</span>
                </div>
                <div className="h-1.5 bg-[#EADFD6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8C3A16] rounded-full" style={{ width: '98%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[#1F1612] mb-1">
                  <span>Buyer Vernacular Communication</span>
                  <span className="text-[#1565C0]">95% (Avg reply &lt; 15 min)</span>
                </div>
                <div className="h-1.5 bg-[#EADFD6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#1565C0] rounded-full" style={{ width: '95%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-[#1F1612] mb-1">
                  <span>Cluster Guild Cooperation</span>
                  <span className="text-[#6A1B9A]">92% (14 shared POs)</span>
                </div>
                <div className="h-1.5 bg-[#EADFD6] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6A1B9A] rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
            </div>

            {/* Verified Certifications */}
            <div className="bg-[#FAF5F0] border border-[#EADFD6] rounded-xl p-2.5 mb-4 text-[11px] space-y-1">
              <span className="font-black text-[#1F1612] block mb-1 text-[10.5px]">Official Accreditations:</span>
              <p className="flex items-center gap-1.5 text-[#2E7D32] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> GI Certified: Assam Bamboo Cane Crafts #431
              </p>
              <p className="flex items-center gap-1.5 text-[#2E7D32] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Ministry of Textiles Artisan Pehchan Card #8821
              </p>
              <p className="flex items-center gap-1.5 text-[#2E7D32] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> National Merit Awardee (Govt. of India 2019)
              </p>
            </div>

            <button
              onClick={() => setShowScoreBreakdownModal(false)}
              className="w-full py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 5. BUYER ANALYTICS MODAL */}
      {showBuyerAnalyticsModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[340px] max-h-[85%] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#8C3A16]" />
                <h3 className="text-sm font-black text-[#1F1612]">Buyer Impressions</h3>
              </div>
              <button
                onClick={() => setShowBuyerAnalyticsModal(false)}
                className="w-6 h-6 rounded-full bg-[#F5ECE4] text-[#6D4C41] flex items-center justify-center hover:bg-[#EADFD6] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-[#F0F4F8] border border-[#DFE5ED] rounded-2xl p-3 my-3 text-center">
              <p className="text-2xl font-black text-[#1E293B]">1,420</p>
              <p className="text-[10px] font-bold text-[#475569] uppercase">Verified B2B Views This Month (+24%)</p>
            </div>

            {/* Geographic Distribution */}
            <div className="space-y-2 mb-4 text-xs">
              <p className="text-[10.5px] font-black text-[#6D4C41] uppercase">Top Buyer Sourcing Cities</p>
              {[
                { city: 'Mumbai (Retail Chains & Export Hubs)', pct: '38%' },
                { city: 'Delhi NCR (FabIndia, Dastkar, Trade Expo)', pct: '32%' },
                { city: 'Bengaluru (Curated Home & Cafe Decor)', pct: '18%' },
                { city: 'International (US, UK, UAE buyers via ONDC)', pct: '12%' },
              ].map((loc) => (
                <div key={loc.city} className="flex justify-between items-center p-2 rounded-lg bg-[#FAF5F0] border border-[#EADFD6]">
                  <span className="font-bold text-[#1F1612] text-[11px] truncate">{loc.city}</span>
                  <span className="font-black text-[#8C3A16] text-[11px] shrink-0">{loc.pct}</span>
                </div>
              ))}
            </div>

            {/* Top Products */}
            <div className="space-y-1.5 mb-4 text-xs">
              <p className="text-[10.5px] font-black text-[#6D4C41] uppercase">Most Inquired Crafts</p>
              <div className="p-2 bg-[#FFF8F4] border border-[#F5DAC8] rounded-xl flex justify-between">
                <span className="font-bold text-[#1F1612]">Woven Fruit Basket</span>
                <span className="text-[#8C3A16] font-black">620 views • 12 inquiries</span>
              </div>
              <div className="p-2 bg-[#FFF8F4] border border-[#F5DAC8] rounded-xl flex justify-between">
                <span className="font-bold text-[#1F1612]">Cane Indoor Planter</span>
                <span className="text-[#8C3A16] font-black">480 views • 6 inquiries</span>
              </div>
            </div>

            <button
              onClick={() => setShowBuyerAnalyticsModal(false)}
              className="w-full py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 6. WHATSAPP SHARE MODAL */}
      {showShareWhatsAppModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[340px] max-h-[85%] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                  <Send className="w-3.5 h-3.5 rotate-45 -mt-0.5" />
                </div>
                <h3 className="text-sm font-black text-[#1F1612]">Share via WhatsApp</h3>
              </div>
              <button
                onClick={() => setShowShareWhatsAppModal(false)}
                className="w-6 h-6 rounded-full bg-[#F5ECE4] text-[#6D4C41] flex items-center justify-center hover:bg-[#EADFD6] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-[#6D4C41] mb-3">
              Select audience format to craft the perfect verified B2B message:
            </p>

            <div className="grid grid-cols-3 gap-1.5 mb-3">
              {[
                { id: 'b2b', label: 'B2B Buyer' },
                { id: 'retail', label: 'Retail Client' },
                { id: 'exhibition', label: 'Expo Visitor' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setWhatsappRecipient(opt.id as any)}
                  className={`py-1.5 rounded-xl text-[10.5px] font-bold border transition-all cursor-pointer ${
                    whatsappRecipient === opt.id
                      ? 'bg-[#25D366] text-white border-[#25D366]'
                      : 'bg-[#FAF5F0] border-[#EADFD6] text-[#4A3228]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Message Preview */}
            <div className="bg-[#E7F7ED] border border-[#C2ECCF] rounded-2xl p-3 text-xs text-[#1E3A25] font-sans leading-relaxed mb-4">
              <p className="font-bold text-[#145a2c]">Preview:</p>
              <p className="mt-1">
                "Namaste! 🙏 I am {artisanName}, GI-Certified Master Craftsman in Assam Bamboo &amp; Cane Weaving.
              </p>
              <p className="mt-1">
                View my verified portfolio, wholesale catalog, and live capacity on HunarSangam:
              </p>
              <p className="mt-1 font-mono text-[10.5px] text-[#0d5024] font-bold">
                https://hunarsangam.in/artisan/ramu-kumar-gi431
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  const text = encodeURIComponent(
                    `Namaste! 🙏 I am ${artisanName}, GI-Certified Master Craftsman in Assam Bamboo & Cane Weaving.\nView my verified B2B catalog: https://hunarsangam.in/artisan/ramu-kumar-gi431`
                  );
                  window.open(`https://wa.me/?text=${text}`, '_blank');
                  setShowShareWhatsAppModal(false);
                  showToast('📲 Opened WhatsApp with Digital Visiting Card preview!');
                }}
                className="w-full py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-black flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <Send className="w-4 h-4 rotate-45 -mt-0.5" />
                <span>Send via WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `Namaste! 🙏 I am ${artisanName}, GI-Certified Master Craftsman in Assam Bamboo & Cane Weaving.\nView my verified B2B catalog: https://hunarsangam.in/artisan/ramu-kumar-gi431`
                  );
                  setShowShareWhatsAppModal(false);
                  showToast('📋 WhatsApp message copied to clipboard!');
                }}
                className="w-full py-2 bg-[#FAF5F0] border border-[#EADFD6] hover:bg-[#F3EAE3] text-[#6D4C41] rounded-xl text-xs font-bold cursor-pointer"
              >
                Copy Text Only
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. PRINTABLE CARD & PDF DOWNLOAD MODAL */}
      {showCardPrintModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[340px] max-h-[85%] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Printer className="w-5 h-5 text-[#8C3A16]" />
                <h3 className="text-sm font-black text-[#1F1612]">Print / PDF Visiting Card</h3>
              </div>
              <button
                onClick={() => setShowCardPrintModal(false)}
                className="w-6 h-6 rounded-full bg-[#F5ECE4] text-[#6D4C41] flex items-center justify-center hover:bg-[#EADFD6] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-[#6D4C41] mb-3">Choose physical format for expo or packaging print:</p>

            <div className="space-y-2 mb-4">
              {[
                { id: 'pocket', title: 'Pocket Visiting Card', size: '3.5" × 2.0" Standard Cardstock' },
                { id: 'standee', title: 'Stall Counter Standee', size: 'A4 / A5 Display Stand with QR' },
                { id: 'tag', title: 'Craft Packaging Hang-Tag', size: '2.5" × 1.5" GI Authentication Tag' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setPrintFormat(opt.id as any)}
                  className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                    printFormat === opt.id
                      ? 'bg-[#FFF8F4] border-[#8C3A16] ring-1 ring-[#8C3A16]'
                      : 'bg-white border-[#EADFD6] hover:bg-[#FAF5F0]'
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-[#1F1612]">{opt.title}</p>
                    <p className="text-[10px] text-[#6D4C41]">{opt.size}</p>
                  </div>
                  {printFormat === opt.id && <Check className="w-4 h-4 text-[#8C3A16]" />}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowCardPrintModal(false)}
                className="flex-1 py-2.5 bg-[#FAF5F0] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#6D4C41] hover:bg-[#F3EAE3] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowCardPrintModal(false);
                  window.print?.();
                  showToast('📄 High-resolution PDF generated! Ready to print.');
                }}
                className="flex-1 py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download / Print</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 8. APPLE & GOOGLE WALLET PASS MODAL */}
      {showWalletPassModal && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#121212] text-white rounded-3xl p-5 border border-[#333] shadow-2xl w-full max-w-[320px] animate-in zoom-in-95 duration-200">
            <div className="w-10 h-1 bg-[#444] rounded-full mx-auto mb-3" />

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1.5">
                <Wallet className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-black tracking-wide text-neutral-300 uppercase">ARTISAN PASSPORT</span>
              </div>
              <button
                onClick={() => setShowWalletPassModal(false)}
                className="w-6 h-6 rounded-full bg-[#262626] text-neutral-400 flex items-center justify-center hover:bg-[#333] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Wallet Visual Card */}
            <div className="bg-gradient-to-br from-[#8C3A16] to-[#4A1E0B] rounded-2xl p-4 border border-[#A84A22] text-white shadow-lg space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-black">{artisanName}</h3>
                  <p className="text-[10px] text-orange-200">GI Master Craftsman • Barpeta</p>
                </div>
                <span className="text-[9px] font-black bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-xs">
                  GI-AS-431
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-orange-100 border-t border-white/15 pt-2">
                <div>
                  <span className="opacity-70 block">TRUST SCORE</span>
                  <span className="font-bold text-xs text-white">96 / 100 Elite</span>
                </div>
                <div>
                  <span className="opacity-70 block">B2B ESCROW ID</span>
                  <span className="font-bold text-xs text-white">#HS-ART-8821</span>
                </div>
              </div>

              {/* Barcode representation */}
              <div className="bg-white rounded-lg p-2 text-center">
                <div className="h-7 w-full flex items-center justify-around">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <span
                      key={i}
                      className="bg-black inline-block"
                      style={{
                        width: (i % 3 === 0 ? 3 : 1.5) + 'px',
                        height: '100%',
                      }}
                    />
                  ))}
                </div>
                <p className="text-[9px] font-mono text-black font-bold mt-1">HS-GI-431-RAMU-2026</p>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <button
                onClick={() => {
                  setShowWalletPassModal(false);
                  showToast('🪪 Added Artisan Passport to Google Wallet!');
                }}
                className="w-full py-2.5 bg-white text-black hover:bg-neutral-100 rounded-xl text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Save to Google Wallet</span>
              </button>
              <button
                onClick={() => {
                  setShowWalletPassModal(false);
                  showToast('🪪 Added Artisan Passport to Apple Wallet!');
                }}
                className="w-full py-2.5 bg-[#262626] text-white hover:bg-[#333] border border-[#444] rounded-xl text-xs font-bold cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Add to Apple Wallet</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 9. ENLARGED FULL-SCREEN QR CODE MODAL */}
      {showQrEnlargedModal && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 border border-[#E8DDD5] shadow-2xl w-full max-w-[320px] text-center animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-black text-[#8C3A16] uppercase tracking-wider">OFFICIAL GI QR PASSPORT</span>
              <button
                onClick={() => setShowQrEnlargedModal(false)}
                className="w-7 h-7 rounded-full bg-[#F5ECE4] text-[#6D4C41] flex items-center justify-center hover:bg-[#EADFD6] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-base font-black text-[#1F1612]">{artisanName}</h3>
            <p className="text-[11px] text-[#6D4C41] mt-0.5">Assam Bamboo Cane Crafts Guild</p>

            {/* High Contrast QR Code */}
            <div className="p-3 my-4 bg-white border-2 border-black rounded-2xl inline-block shadow-md">
              <svg viewBox="0 0 100 100" className="w-48 h-48">
                {/* 3 Corner Alignment Squares */}
                <rect x="5" y="5" width="26" height="26" fill="black" rx="2" />
                <rect x="8" y="8" width="20" height="20" fill="white" rx="1" />
                <rect x="11" y="11" width="14" height="14" fill="black" rx="1" />

                <rect x="69" y="5" width="26" height="26" fill="black" rx="2" />
                <rect x="72" y="8" width="20" height="20" fill="white" rx="1" />
                <rect x="75" y="11" width="14" height="14" fill="black" rx="1" />

                <rect x="5" y="69" width="26" height="26" fill="black" rx="2" />
                <rect x="8" y="72" width="20" height="20" fill="white" rx="1" />
                <rect x="11" y="75" width="14" height="14" fill="black" rx="1" />

                {/* Simulated Data Grid */}
                <rect x="36" y="8" width="8" height="6" fill="black" />
                <rect x="48" y="10" width="14" height="5" fill="black" />
                <rect x="38" y="18" width="6" height="8" fill="black" />
                <rect x="50" y="20" width="12" height="6" fill="black" />

                <rect x="8" y="38" width="6" height="8" fill="black" />
                <rect x="18" y="42" width="12" height="5" fill="black" />
                <rect x="6" y="52" width="18" height="6" fill="black" />

                <rect x="34" y="34" width="32" height="32" fill="#FAF5F0" rx="4" />
                <circle cx="50" cy="50" r="12" fill="#8C3A16" />
                <text x="50" y="54" fontSize="10" fontWeight="900" fill="white" textAnchor="middle">
                  HS
                </text>

                <rect x="70" y="38" width="8" height="12" fill="black" />
                <rect x="82" y="40" width="10" height="8" fill="black" />
                <rect x="72" y="54" width="18" height="6" fill="black" />

                <rect x="38" y="72" width="10" height="8" fill="black" />
                <rect x="52" y="74" width="12" height="6" fill="black" />
                <rect x="40" y="84" width="24" height="8" fill="black" />
                <rect x="72" y="72" width="8" height="8" fill="black" />
                <rect x="84" y="82" width="8" height="8" fill="black" />
              </svg>
            </div>

            <p className="text-xs text-[#1F1612] font-extrabold">
              Point any Phone Camera or UPI Scanner
            </p>
            <p className="text-[10.5px] text-[#6D4C41] mt-0.5">
              Instantly opens your Digital Visiting Card, catalog &amp; contact
            </p>

            <button
              onClick={() => setShowQrEnlargedModal(false)}
              className="w-full mt-4 py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};
