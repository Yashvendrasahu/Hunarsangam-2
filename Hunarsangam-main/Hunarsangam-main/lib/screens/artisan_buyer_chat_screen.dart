// lib/screens/artisan_buyer_chat_screen.dart
// Production-grade Flutter screen matching 'artisan vs bulk buyer chat.png'
// Artisan vs Bulk Buyer Chat with Escrow Sync, Vernacular Auto-Translation & Production Verification

import 'package:flutter/material.dart';

class ArtisanBuyerChatScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onViewOrderSpecs;
  final VoidCallback? onEscrowTap;
  final VoidCallback? onCameraTap;
  final String buyerName;
  final String orderId;
  final String orderTitle;
  final String escrowAmount;
  final String deliveryDate;

  const ArtisanBuyerChatScreen({
    super.key,
    this.onBack,
    this.onViewOrderSpecs,
    this.onEscrowTap,
    this.onCameraTap,
    this.buyerName = 'Heritage Handcrafts (Buyer)',
    this.orderId = 'REQ-HH-1048',
    this.orderTitle = '50 pcs Cane Baskets',
    this.escrowAmount = '₹22,500',
    this.deliveryDate = '28 Sept',
  });

  @override
  State<ArtisanBuyerChatScreen> createState() => _ArtisanBuyerChatScreenState();
}

class _ArtisanBuyerChatScreenState extends State<ArtisanBuyerChatScreen> {
  final TextEditingController _textController = TextEditingController();
  final ScrollController _scrollController = ScrollController();
  
  bool _isMicPressed = false;
  bool _isBuyerAudioPlaying = false;
  bool _isArtisanVoicePlaying = false;
  bool _isBuyerSecondAudioPlaying = false;
  String _activeTranslationMode = 'हिंदी / En';

  final List<Map<String, dynamic>> _customMessages = [];

  @override
  void dispose() {
    _textController.dispose();
    _scrollController.dispose();
    super.dispose();
  }

  void _sendMessage(String text, {String? translation}) {
    if (text.trim().isEmpty) return;
    setState(() {
      _customMessages.add({
        'text': text.trim(),
        'time': 'Just now',
        'isUser': true,
        'translated': translation ?? 'Auto-translated to English for Heritage Handcrafts',
      });
    });
    _textController.clear();
    _scrollToBottom();
  }

  void _scrollToBottom() {
    Future.delayed(const Duration(milliseconds: 100), () {
      if (_scrollController.hasClients) {
        _scrollController.animateTo(
          _scrollController.position.maxScrollExtent,
          duration: const Duration(milliseconds: 300),
          curve: Curves.easeOut,
        );
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFAF7F2),
      appBar: _buildTopAppBar(context),
      body: Column(
        children: [
          // Order Summary & Escrow Banner
          _buildOrderSummaryBanner(context),

          // Translation Mode Indicator Bar
          _buildTranslationBar(context),

          // Chat Messages List
          Expanded(
            child: ListView(
              controller: _scrollController,
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
              children: [
                // Date Stamp
                Center(
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: const Color(0xFFF2E8DF),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: const Color(0xFFE4D5C7)),
                    ),
                    child: const Text(
                      'Today, 24 Sept 2026',
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF8D6E63),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 12),

                // Escrow Locked Notification
                _buildEscrowLockedBanner(),
                const SizedBox(height: 14),

                // Message 1: Buyer English Query + Hindi Translation Card
                _buildBuyerMessageWithTranslation(
                  time: '10:05 AM',
                  originalEnglish:
                      'Hello Ramu ji, we saw your catalog sample of the Woven Bamboo Baskets. Can you confirm if all 50 pieces will have the natural lacquer waterproof finish?',
                  hindiTranslation:
                      'नमस्ते रामू जी, हमने आपके बांस की टोकरियों का कैटलॉग सैंपल देखा। क्या आप पुष्टि कर सकते हैं कि सभी 50 पीस में प्राकृतिक लैकर वाटरप्रूफ फिनिश होगी?',
                  isPlaying: _isBuyerAudioPlaying,
                  onToggleAudio: () {
                    setState(() {
                      _isBuyerAudioPlaying = !_isBuyerAudioPlaying;
                    });
                  },
                ),
                const SizedBox(height: 14),

                // Message 2: Artisan Voice Note (Hindi) + English Auto-Transcript
                _buildArtisanVoiceNoteBubble(
                  time: '10:12 AM',
                  duration: '0:18',
                  hindiTranscript:
                      'हाँ सर, बिल्कुल! हम असम के ऑर्गेनिक बीजों के तेल और हर्बल लैकर से ही कोटिंग करेंगे। 100% वाटरप्रूफ और एक्सपोर्ट क्वालिटी रहेगा।',
                  englishForBuyer:
                      'Yes sir, absolutely! We will coat using organic seed oil and herbal lacquer from Assam. 100% waterproof and export grade.',
                  isPlaying: _isArtisanVoicePlaying,
                  onTogglePlay: () {
                    setState(() {
                      _isArtisanVoicePlaying = !_isArtisanVoicePlaying;
                    });
                  },
                ),
                const SizedBox(height: 14),

                // Message 3: Buyer Response + Hindi Translation
                _buildBuyerMessageWithTranslation(
                  time: '10:15 AM',
                  originalEnglish:
                      'Excellent! Please share a quick production photo once the first 15-20 baskets are woven so we can release Milestone 1 payment.',
                  hindiTranslation:
                      'बहुत बढ़िया! कृपया पहले 15-20 टोकरियां बनने पर एक प्रोडक्शन फोटो साझा करें ताकि हम माइलस्टोन 1 का भुगतान जारी कर सकें।',
                  isPlaying: _isBuyerSecondAudioPlaying,
                  onToggleAudio: () {
                    setState(() {
                      _isBuyerSecondAudioPlaying = !_isBuyerSecondAudioPlaying;
                    });
                  },
                ),
                const SizedBox(height: 14),

                // Dynamic user sent messages
                ..._customMessages.map((msg) => _buildCustomMessageBubble(msg)),
              ],
            ),
          ),

          // Quick Suggestion Chips
          _buildQuickActionChips(),

          // Bottom Input & Voice Recording Bar
          _buildBottomInputBar(context),
        ],
      ),
    );
  }

  PreferredSizeWidget _buildTopAppBar(BuildContext context) {
    return AppBar(
      backgroundColor: const Color(0xFFFAF5F0),
      elevation: 0.5,
      leadingWidth: 40,
      leading: IconButton(
        icon: const Icon(Icons.arrow_back_ios_new, size: 18, color: Color(0xFF1F1612)),
        onPressed: widget.onBack ?? () => Navigator.of(context).maybePop(),
      ),
      titleSpacing: 0,
      title: Row(
        children: [
          Stack(
            children: [
              Container(
                width: 38,
                height: 38,
                decoration: const BoxDecoration(
                  color: Color(0xFF1B7339),
                  shape: BoxShape.circle,
                ),
                alignment: Alignment.center,
                child: const Text(
                  'HH',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 13,
                  ),
                ),
              ),
              Positioned(
                bottom: 0,
                right: 0,
                child: Container(
                  width: 10,
                  height: 10,
                  decoration: BoxDecoration(
                    color: Colors.green,
                    shape: BoxShape.circle,
                    border: Border.all(color: Colors.white, width: 2),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  children: [
                    Flexible(
                      child: Text(
                        widget.buyerName,
                        style: const TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.w900,
                          color: Color(0xFF1F1612),
                        ),
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                    const SizedBox(width: 4),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 1),
                      decoration: BoxDecoration(
                        color: const Color(0xFFDFF4E5),
                        border: Border.all(color: const Color(0xFFBEE5CB)),
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: const Text(
                        'B2B',
                        style: TextStyle(
                          fontSize: 9,
                          fontWeight: FontWeight.w900,
                          color: Color(0xFF1B7339),
                        ),
                      ),
                    ),
                  ],
                ),
                const Row(
                  children: [
                    Icon(Icons.circle, size: 6, color: Colors.green),
                    SizedBox(width: 4),
                    Text(
                      'Online • Typically replies instantly',
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.w600,
                        color: Color(0xFF2E7D32),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
      actions: [
        // Escrow pill
        GestureDetector(
          onTap: widget.onEscrowTap,
          child: Container(
            margin: const EdgeInsets.symmetric(vertical: 10),
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
            decoration: BoxDecoration(
              color: const Color(0xFFDFF4E5),
              border: Border.all(color: const Color(0xFFBEE5CB)),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.shield_outlined, size: 13, color: Color(0xFF1B7339)),
                const SizedBox(width: 3),
                Text(
                  widget.escrowAmount,
                  style: const TextStyle(
                    fontSize: 10.5,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF1B7339),
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(width: 6),
        IconButton(
          icon: const Icon(Icons.phone_outlined, size: 20, color: Color(0xFF1F1612)),
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text('Connecting via HunarSangam Voice Bridge...')),
            );
          },
        ),
      ],
    );
  }

  Widget _buildOrderSummaryBanner(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: const BoxDecoration(
        color: Color(0xFFFFF4EC),
        border: Border(bottom: BorderSide(color: Color(0xFFF5DAC8))),
      ),
      child: Row(
        children: [
          Container(
            width: 30,
            height: 30,
            decoration: BoxDecoration(
              color: const Color(0xFF8C3A16),
              borderRadius: BorderRadius.circular(8),
            ),
            alignment: Alignment.center,
            child: const Icon(Icons.inventory_2_outlined, color: Colors.white, size: 16),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Text(
                      'Order #${widget.orderId}',
                      style: const TextStyle(
                        fontSize: 11.5,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFF1F1612),
                      ),
                    ),
                    const SizedBox(width: 6),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 1),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFCECE3),
                        border: Border.all(color: const Color(0xFFF5DAC8)),
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: Text(
                        widget.orderTitle,
                        style: const TextStyle(
                          fontSize: 9.5,
                          fontWeight: FontWeight.w800,
                          color: Color(0xFF8C3A16),
                        ),
                      ),
                    ),
                  ],
                ),
                Text(
                  'Delivery: ${widget.deliveryDate} • Total: ${widget.escrowAmount} (Advance Escrowed)',
                  style: const TextStyle(
                    fontSize: 9.5,
                    color: Color(0xFF6D4C41),
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
          OutlinedButton(
            style: OutlinedButton.styleFrom(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              side: const BorderSide(color: Color(0xFFEADFD6)),
              backgroundColor: Colors.white,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
            ),
            onPressed: widget.onViewOrderSpecs,
            child: const Text(
              'View Specs',
              style: TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.bold,
                color: Color(0xFF8C3A16),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTranslationBar(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
      decoration: const BoxDecoration(
        color: Color(0xFFFAF5F0),
        border: Border(bottom: BorderSide(color: Color(0xFFF0E5DC))),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Row(
            children: [
              Icon(Icons.g_translate, size: 14, color: Color(0xFF8C3A16)),
              SizedBox(width: 6),
              Text(
                'Vernacular Auto-Translate:',
                style: TextStyle(
                  fontSize: 10.5,
                  fontWeight: FontWeight.w800,
                  color: Color(0xFF1F1612),
                ),
              ),
              SizedBox(width: 4),
              Text(
                'Active (Hindi ⇄ English)',
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF4E342E),
                ),
              ),
            ],
          ),
          InkWell(
            onTap: () {
              setState(() {
                _activeTranslationMode = _activeTranslationMode == 'हिंदी / En'
                    ? 'Assamese / En'
                    : 'हिंदी / En';
              });
            },
            child: Row(
              children: [
                Text(
                  _activeTranslationMode,
                  style: const TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.w900,
                    color: Color(0xFF8C3A16),
                  ),
                ),
                const SizedBox(width: 2),
                const Icon(Icons.auto_awesome, size: 12, color: Color(0xFF8C3A16)),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildEscrowLockedBanner() {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: const Color(0xFFEBF7EE),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFFCDEED6)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Icon(Icons.verified_user_outlined, size: 16, color: Color(0xFF1B7339)),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  '🔒 ${widget.escrowAmount} Escrow Advance Locked',
                  style: const TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF1B7339),
                  ),
                ),
                const SizedBox(height: 2),
                const Text(
                  'Heritage Handcrafts has deposited 100% advance funds into the HunarSangam Escrow Smart Contract. Payment unlocks upon milestone verification.',
                  style: TextStyle(
                    fontSize: 9.5,
                    color: Color(0xFF2E7D32),
                    height: 1.3,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBuyerMessageWithTranslation({
    required String time,
    required String originalEnglish,
    required String hindiTranslation,
    required bool isPlaying,
    required VoidCallback onToggleAudio,
  }) {
    return Align(
      alignment: Alignment.centerLeft,
      child: ConstrainedBox(
        constraints: BoxConstraints(
          maxWidth: MediaQuery.of(context).size.width * 0.85,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Original English Card
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(4),
                  topRight: Radius.circular(16),
                  bottomLeft: Radius.circular(16),
                  bottomRight: Radius.circular(16),
                ),
                border: Border.all(color: const Color(0xFFE8DDD5)),
                boxShadow: const [
                  BoxShadow(
                    color: Color(0x08000000),
                    blurRadius: 4,
                    offset: Offset(0, 2),
                  ),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        'Heritage Handcrafts (Buyer)',
                        style: TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.w800,
                          color: Color(0xFF8C3A16),
                        ),
                      ),
                      Text(
                        time,
                        style: const TextStyle(fontSize: 9, color: Color(0xFF8D6E63)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Text(
                    originalEnglish,
                    style: const TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF1F1612),
                      height: 1.4,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 4),

            // AI Vernacular Translation Card
            Container(
              margin: const EdgeInsets.only(left: 8),
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: const Color(0xFFFFF4EC),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: const Color(0xFFF5DAC8)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Row(
                        children: [
                          Icon(Icons.auto_awesome, size: 12, color: Color(0xFF8C3A16)),
                          SizedBox(width: 4),
                          Text(
                            'AI Hindi Translation (हिंदी अनुवाद)',
                            style: TextStyle(
                              fontSize: 9.5,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFF8C3A16),
                            ),
                          ),
                        ],
                      ),
                      InkWell(
                        onTap: onToggleAudio,
                        child: Row(
                          children: [
                            Icon(
                              isPlaying ? Icons.pause_circle_outline : Icons.volume_up_outlined,
                              size: 13,
                              color: const Color(0xFF8C3A16),
                            ),
                            const SizedBox(width: 2),
                            Text(
                              isPlaying ? 'Pause' : 'Sunein 🔊',
                              style: const TextStyle(
                                fontSize: 9.5,
                                fontWeight: FontWeight.bold,
                                color: Color(0xFF8C3A16),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),
                  Text(
                    '"$hindiTranslation"',
                    style: const TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.w500,
                      color: Color(0xFF3E2723),
                      height: 1.4,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildArtisanVoiceNoteBubble({
    required String time,
    required String duration,
    required String hindiTranscript,
    required String englishForBuyer,
    required bool isPlaying,
    required VoidCallback onTogglePlay,
  }) {
    return Align(
      alignment: Alignment.centerRight,
      child: ConstrainedBox(
        constraints: BoxConstraints(
          maxWidth: MediaQuery.of(context).size.width * 0.85,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Container(
              padding: const EdgeInsets.all(12),
              decoration: const BoxDecoration(
                color: Color(0xFF8C3A16),
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(16),
                  topRight: Radius.circular(4),
                  bottomLeft: Radius.circular(16),
                  bottomRight: Radius.circular(16),
                ),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text(
                        'You (Voice Note)',
                        style: TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFFF9EBE0),
                        ),
                      ),
                      Text(
                        time,
                        style: const TextStyle(fontSize: 9, color: Color(0xFFF9EBE0)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),

                  // Voice Player UI
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                    decoration: BoxDecoration(
                      color: const Color(0xFF772F10),
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: Row(
                      children: [
                        GestureDetector(
                          onTap: onTogglePlay,
                          child: Container(
                            width: 26,
                            height: 26,
                            decoration: const BoxDecoration(
                              color: Colors.white,
                              shape: BoxShape.circle,
                            ),
                            child: Icon(
                              isPlaying ? Icons.pause : Icons.play_arrow,
                              size: 16,
                              color: const Color(0xFF8C3A16),
                            ),
                          ),
                        ),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                            children: List.generate(
                              16,
                              (index) => Container(
                                width: 3,
                                height: [4.0, 8.0, 12.0, 16.0, 10.0, 14.0, 18.0, 12.0, 6.0, 15.0, 12.0, 8.0, 14.0, 16.0, 10.0, 6.0][index],
                                decoration: BoxDecoration(
                                  color: isPlaying ? const Color(0xFFFFCC80) : Colors.white70,
                                  borderRadius: BorderRadius.circular(2),
                                ),
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(width: 8),
                        Text(
                          duration,
                          style: const TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    hindiTranscript,
                    style: const TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.w500,
                      color: Color(0xFFFFF0E6),
                      height: 1.3,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 4),

            // Delivered to Buyer in English
            Container(
              margin: const EdgeInsets.only(right: 8),
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: const Color(0xFFF5ECE4),
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: const Color(0xFFE4D5C7)),
              ),
              child: RichText(
                text: TextSpan(
                  style: const TextStyle(fontSize: 9.5, color: Color(0xFF5D4037)),
                  children: [
                    const TextSpan(
                      text: 'English Delivered to Buyer: ',
                      style: TextStyle(
                        fontWeight: FontWeight.w900,
                        color: Color(0xFF8C3A16),
                      ),
                    ),
                    TextSpan(text: '"$englishForBuyer"'),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCustomMessageBubble(Map<String, dynamic> msg) {
    final bool isUser = msg['isUser'] == true;
    return Align(
      alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        margin: const EdgeInsets.only(bottom: 8),
        padding: const EdgeInsets.all(12),
        constraints: BoxConstraints(
          maxWidth: MediaQuery.of(context).size.width * 0.8,
        ),
        decoration: BoxDecoration(
          color: isUser ? const Color(0xFF8C3A16) : Colors.white,
          borderRadius: BorderRadius.only(
            topLeft: const Radius.circular(14),
            topRight: const Radius.circular(14),
            bottomLeft: Radius.circular(isUser ? 14 : 2),
            bottomRight: Radius.circular(isUser ? 2 : 14),
          ),
          border: isUser ? null : Border.all(color: const Color(0xFFE8DDD5)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              msg['text'] ?? '',
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w600,
                color: isUser ? Colors.white : const Color(0xFF1F1612),
              ),
            ),
            if (msg['translated'] != null) ...[
              const SizedBox(height: 4),
              Text(
                '🌐 ${msg['translated']}',
                style: const TextStyle(
                  fontSize: 9.5,
                  color: Color(0xFFF3DAC8),
                ),
              ),
            ],
            const SizedBox(height: 2),
            Align(
              alignment: Alignment.bottomRight,
              child: Text(
                msg['time'] ?? 'Just now',
                style: TextStyle(
                  fontSize: 9,
                  color: isUser ? const Color(0xFFF0DDD0) : const Color(0xFF8D6E63),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildQuickActionChips() {
    final chips = [
      {'icon': '📸', 'text': 'Share Production Photo'},
      {'icon': '✓', 'text': 'Confirm Lacquer Finish'},
      {'icon': '📦', 'text': 'Milestone 1 Ready'},
      {'icon': '🤝', 'text': 'Request Escrow Release'},
    ];

    return Container(
      height: 38,
      padding: const EdgeInsets.symmetric(horizontal: 10),
      color: const Color(0xFFFDFBF9),
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: chips.length,
        separatorBuilder: (_, __) => const SizedBox(width: 6),
        itemBuilder: (context, index) {
          final item = chips[index];
          return ActionChip(
            backgroundColor: const Color(0xFFF9EFE7),
            side: const BorderSide(color: Color(0xFFEADBCE)),
            padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 0),
            avatar: Text(item['icon']!, style: const TextStyle(fontSize: 12)),
            label: Text(
              item['text']!,
              style: const TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: Color(0xFF1F1612),
              ),
            ),
            onPressed: () {
              _sendMessage(item['text']!);
            },
          );
        },
      ),
    );
  }

  Widget _buildBottomInputBar(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(10, 8, 10, 8),
      decoration: const BoxDecoration(
        color: Color(0xFFFDFBF9),
        border: Border(top: BorderSide(color: Color(0xFFF0E5DC))),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Row(
            children: [
              // Plus Button
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  color: const Color(0xFFF5ECE4),
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                child: IconButton(
                  padding: EdgeInsets.zero,
                  icon: const Icon(Icons.add, size: 20, color: Color(0xFF1F1612)),
                  onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('📎 Attach specs, sample image or escrow document')),
                    );
                  },
                ),
              ),
              const SizedBox(width: 6),

              // Camera Button
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  color: const Color(0xFFDFF4E5),
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: const Color(0xFFBEE5CB)),
                ),
                child: IconButton(
                  padding: EdgeInsets.zero,
                  icon: const Icon(Icons.camera_alt_outlined, size: 20, color: Color(0xFF1B7339)),
                  onPressed: widget.onCameraTap ??
                      () {
                        ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(content: Text('📷 Capture production floor photo...')),
                        );
                      },
                ),
              ),
              const SizedBox(width: 6),

              // Text Field
              Expanded(
                child: Container(
                  height: 38,
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: const Color(0xFFE0D2C7)),
                  ),
                  child: TextField(
                    controller: _textController,
                    style: const TextStyle(fontSize: 12, color: Color(0xFF1F1612)),
                    decoration: const InputDecoration(
                      hintText: 'Type in Hindi/English...',
                      hintStyle: TextStyle(fontSize: 12, color: Color(0xFF9E8B80)),
                      border: InputBorder.none,
                      isDense: true,
                      contentPadding: EdgeInsets.symmetric(vertical: 10),
                    ),
                    onSubmitted: (val) => _sendMessage(val),
                  ),
                ),
              ),
              const SizedBox(width: 6),

              // Mic / Send Button
              GestureDetector(
                onTapDown: (_) => setState(() => _isMicPressed = true),
                onTapUp: (_) {
                  setState(() => _isMicPressed = false);
                  _sendMessage(
                    '🎤 [Voice Note: 0:12s - "Ji bilkul, kal tak photo bhej denge"]',
                    translation: 'Transcribed & Translated: "Yes definitely, will send photos by tomorrow."',
                  );
                },
                child: Container(
                  width: 38,
                  height: 38,
                  decoration: BoxDecoration(
                    color: _isMicPressed ? Colors.red : const Color(0xFF8C3A16),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.mic, color: Colors.white, size: 20),
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),

          // Bottom Voice Subtext
          const Row(
            children: [
              Icon(Icons.circle, size: 6, color: Color(0xFF1B7339)),
              SizedBox(width: 4),
              Text(
                'Auto-Translate: ',
                style: TextStyle(
                  fontSize: 9.5,
                  fontWeight: FontWeight.w900,
                  color: Color(0xFF1B7339),
                ),
              ),
              Text(
                'Bol kar sandesh bhejein • Hindi voice translated into English for buyer',
                style: TextStyle(
                  fontSize: 9.5,
                  fontWeight: FontWeight.w500,
                  color: Color(0xFF6D4C41),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
