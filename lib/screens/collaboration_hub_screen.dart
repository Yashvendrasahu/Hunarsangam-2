// lib/screens/collaboration_hub_screen.dart
// Production-grade Flutter screen matching 'colloboration.png'
// Artisan Collaboration Hub: Requests For You & Sent Invites Management

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';

/// Screen 27: Collaboration Hub
/// 100% matching the UI design in 'colloboration.png'
class CollaborationHubScreen extends StatefulWidget {
  final OnboardingState? state;
  final VoidCallback? onBack;
  final Function(int)? onNavigateTab;
  final VoidCallback? onOpenOrderSpecs;
  final VoidCallback? onOpenFormCollective;
  final VoidCallback? onOpenSuggestedArtisans;

  const CollaborationHubScreen({
    super.key,
    this.state,
    this.onBack,
    this.onNavigateTab,
    this.onOpenOrderSpecs,
    this.onOpenFormCollective,
    this.onOpenSuggestedArtisans,
  });

  @override
  State<CollaborationHubScreen> createState() => _CollaborationHubScreenState();
}

class _CollaborationHubScreenState extends State<CollaborationHubScreen> {
  String _selectedLanguage = 'English';
  bool _isPlayingAudioGuide = false;
  bool _isPlayingRameshAudio = false;

  // Request state
  bool _rameshAccepted = true; // matches bottom green banner in screenshot
  bool _rameshDeclined = false;
  bool _meeraAccepted = false;
  bool _meeraDeclined = false;

  // Invites state
  bool _sohanReminded = false;

  int _currentBottomNavIndex = 3; // Collaborate tab active

  // Design Tokens
  static const Color _terracotta = Color(0xFF8C3A16);
  static const Color _terracottaDark = Color(0xFF702E11);
  static const Color _terracottaLight = Color(0xFFFAF0E8);
  static const Color _peachBg = Color(0xFFFDF3EC);
  static const Color _peachBorder = Color(0xFFF0DDD0);
  static const Color _bgScreen = Color(0xFFFDFBF9);
  static const Color _textDark = Color(0xFF1F1612);
  static const Color _textMuted = Color(0xFF6D4C41);
  static const Color _textSubtle = Color(0xFF8D6E63);
  static const Color _borderSubtle = Color(0xFFEADFD6);
  static const Color _greenPrimary = Color(0xFF1B7339);
  static const Color _greenBg = Color(0xFFDFF4E5);
  static const Color _greenBorder = Color(0xFFBEE5CB);
  static const Color _forestButton = Color(0xFF225737);
  static const Color _amberTagBg = Color(0xFFFCE3D2);

  void _showSnack(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Row(
          children: [
            const Icon(Icons.check_circle_outline, color: Colors.white, size: 18),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                message,
                style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600),
              ),
            ),
          ],
        ),
        backgroundColor: const Color(0xFF2E2420),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bgScreen,
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar
            _buildTopAppBar(),

            // Main Scrollable Area
            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Main Title & Tagline
                    _buildTitleHeader(),

                    const SizedBox(height: 14.0),

                    // Audio Guide Card
                    _buildAudioGuideCard(),

                    const SizedBox(height: 22.0),

                    // Section 1: Requests for You
                    _buildRequestsForYouSection(),

                    const SizedBox(height: 24.0),

                    // Section 2: Your Invites
                    _buildYourInvitesSection(),

                    const SizedBox(height: 24.0),
                  ],
                ),
              ),
            ),

            // Bottom Navigation Bar (Collaborate tab active)
            _buildBottomNavigationBar(),
          ],
        ),
      ),
    );
  }

  // 1. TOP APP BAR
  Widget _buildTopAppBar() {
    return Container(
      color: _bgScreen,
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              InkWell(
                onTap: widget.onBack ?? () => Navigator.maybePop(context),
                borderRadius: BorderRadius.circular(20),
                child: const Padding(
                  padding: EdgeInsets.all(6.0),
                  child: Icon(Icons.arrow_back, color: _textDark, size: 22),
                ),
              ),
              const SizedBox(width: 6),
              const Text(
                'HunarSangam',
                style: TextStyle(
                  color: Color(0xFF7C3F24),
                  fontSize: 18.0,
                  fontWeight: FontWeight.w900,
                  letterSpacing: -0.3,
                ),
              ),
            ],
          ),
          Row(
            children: [
              // Language Selector Pill
              InkWell(
                onTap: () {
                  final langs = ['English', 'हिंदी', 'অসমীয়া', 'বাংলা'];
                  final next = langs[(langs.indexOf(_selectedLanguage) + 1) % langs.length];
                  setState(() => _selectedLanguage = next);
                  _showSnack('Language set to $next');
                },
                borderRadius: BorderRadius.circular(20),
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  decoration: BoxDecoration(
                    color: const Color(0xFFF9EFE7),
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: const Color(0xFFEADBCE)),
                  ),
                  child: Row(
                    children: [
                      const Icon(Icons.translate, size: 14, color: _terracotta),
                      const SizedBox(width: 4),
                      Text(
                        _selectedLanguage,
                        style: const TextStyle(
                          color: _textDark,
                          fontSize: 12.0,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      const SizedBox(width: 2),
                      const Icon(Icons.keyboard_arrow_down, size: 14, color: _textSubtle),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 10),

              // Notification Bell
              Stack(
                children: [
                  InkWell(
                    onTap: () => _showSnack('🔔 2 new collaboration requests awaiting your response'),
                    borderRadius: BorderRadius.circular(20),
                    child: Container(
                      padding: const EdgeInsets.all(7.0),
                      child: const Icon(Icons.notifications_outlined, color: _textDark, size: 22),
                    ),
                  ),
                  Positioned(
                    top: 6,
                    right: 8,
                    child: Container(
                      width: 8,
                      height: 8,
                      decoration: const BoxDecoration(
                        color: Color(0xFFC7381B),
                        shape: BoxShape.circle,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }

  // 2. MAIN TITLE & SUBTITLE
  Widget _buildTitleHeader() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: const [
        Text(
          'Collaboration',
          style: TextStyle(
            color: _textDark,
            fontSize: 22.0,
            fontWeight: FontWeight.w900,
            letterSpacing: -0.5,
          ),
        ),
        SizedBox(height: 3.0),
        Text(
          'Work together. Complete more orders.',
          style: TextStyle(
            color: _textMuted,
            fontSize: 13.0,
            fontWeight: FontWeight.w500,
          ),
        ),
      ],
    );
  }

  // 3. AUDIO GUIDE CARD
  Widget _buildAudioGuideCard() {
    return InkWell(
      onTap: () {
        setState(() => _isPlayingAudioGuide = !_isPlayingAudioGuide);
        _showSnack(_isPlayingAudioGuide
            ? '🔊 Playing collaboration guide in $_selectedLanguage...'
            : 'Audio guide paused');
      },
      borderRadius: BorderRadius.circular(16),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 12.0),
        decoration: BoxDecoration(
          color: _peachBg,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: _peachBorder),
        ),
        child: Row(
          children: [
            // Orange Speaker Icon Circle
            Container(
              width: 44,
              height: 44,
              decoration: const BoxDecoration(
                color: Color(0xFFB84D20),
                shape: BoxShape.circle,
              ),
              child: const Icon(Icons.volume_up_rounded, color: Colors.white, size: 24),
            ),
            const SizedBox(width: 12.0),

            // Middle Text Block
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  Text(
                    'AUDIO GUIDE',
                    style: TextStyle(
                      color: Color(0xFFB84D20),
                      fontSize: 9.5,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 0.8,
                    ),
                  ),
                  SizedBox(height: 2),
                  Text(
                    'Tap to hear updates in Assamese / Hindi / English',
                    style: TextStyle(
                      color: Color(0xFF2C201A),
                      fontSize: 12.0,
                      fontWeight: FontWeight.w700,
                      height: 1.25,
                    ),
                  ),
                ],
              ),
            ),

            // Play Icon
            Icon(
              _isPlayingAudioGuide ? Icons.pause_circle_outline : Icons.play_circle_outline_rounded,
              color: _textSubtle,
              size: 26,
            ),
          ],
        ),
      ),
    );
  }

  // 4. SECTION 1: REQUESTS FOR YOU
  Widget _buildRequestsForYouSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Section Header Row
        Row(
          children: [
            const Text(
              'Requests for You',
              style: TextStyle(
                color: _textDark,
                fontSize: 16.0,
                fontWeight: FontWeight.w900,
                letterSpacing: -0.2,
              ),
            ),
            const SizedBox(width: 8.0),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 2.5),
              decoration: BoxDecoration(
                color: _terracotta,
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Text(
                '2 New',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 10.5,
                  fontWeight: FontWeight.w800,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 4.0),
        const Text(
          'Artisans want you to help complete their orders.',
          style: TextStyle(
            color: _textMuted,
            fontSize: 12.0,
            fontWeight: FontWeight.w500,
          ),
        ),

        const SizedBox(height: 12.0),

        // 4A. Request Card 1: Ramesh Kumar
        _buildRameshRequestCard(),

        const SizedBox(height: 14.0),

        // 4B. Request Card 2: Meera Bai
        _buildMeeraRequestCard(),
      ],
    );
  }

  // 4A. RAMESH KUMAR DETAILED REQUEST CARD
  Widget _buildRameshRequestCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: _borderSubtle),
        boxShadow: const [
          BoxShadow(color: Color(0x08000000), blurRadius: 6, offset: Offset(0, 2)),
        ],
      ),
      padding: const EdgeInsets.all(14.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header: Avatar, Name, Rating
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(24),
                child: Image.network(
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                  width: 44,
                  height: 44,
                  fit: BoxFit.cover,
                  errorBuilder: (_, __, ___) => Container(
                    width: 44,
                    height: 44,
                    color: const Color(0xFF8C3A16),
                    child: const Icon(Icons.person, color: Colors.white),
                  ),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: const [
                        Text(
                          'Ramesh Kumar',
                          style: TextStyle(
                            color: _textDark,
                            fontSize: 13.5,
                            fontWeight: FontWeight.w900,
                          ),
                        ),
                        SizedBox(width: 4),
                        Icon(Icons.check_circle, size: 14, color: _greenPrimary),
                      ],
                    ),
                    const SizedBox(height: 1),
                    const Text(
                      'Master Bamboo Craftsman • Barpeta',
                      style: TextStyle(color: _textMuted, fontSize: 11.0, fontWeight: FontWeight.w500),
                    ),
                  ],
                ),
              ),
              // Rating Badge
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3),
                decoration: BoxDecoration(
                  color: const Color(0xFFFFF8F0),
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: const Color(0xFFF3E2D5)),
                ),
                child: Row(
                  children: const [
                    Icon(Icons.star, size: 12, color: Color(0xFFB86B14)),
                    SizedBox(width: 3),
                    Text(
                      '4.9',
                      style: TextStyle(
                        fontSize: 11.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF2C201A),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),

          const SizedBox(height: 10.0),

          // Audio Request Strip
          InkWell(
            onTap: () {
              setState(() => _isPlayingRameshAudio = !_isPlayingRameshAudio);
              _showSnack(_isPlayingRameshAudio
                  ? '🎙️ Playing Ramesh Kumar voice request (0:18s)...'
                  : 'Audio paused');
            },
            borderRadius: BorderRadius.circular(10),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
              decoration: BoxDecoration(
                color: const Color(0xFFFAF0E8),
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: const Color(0xFFF3DFD1)),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: const [
                      Icon(Icons.hearing_rounded, size: 15, color: _terracotta),
                      SizedBox(width: 6),
                      Text(
                        'Listen to Request',
                        style: TextStyle(
                          color: Color(0xFF2A1F1B),
                          fontSize: 11.5,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      SizedBox(width: 4),
                      Icon(Icons.campaign_outlined, size: 14, color: _terracotta),
                    ],
                  ),
                  Text(
                    _isPlayingRameshAudio ? 'Playing (0:18s)' : 'Play (0:18s)',
                    style: const TextStyle(
                      color: _terracotta,
                      fontSize: 11.0,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ],
              ),
            ),
          ),

          const SizedBox(height: 10.0),

          // Inner B2B Order Card
          Container(
            padding: const EdgeInsets.all(12.0),
            decoration: BoxDecoration(
              color: const Color(0xFFFFF8F3),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFF3E3D7)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Product Header
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(8),
                      child: Image.network(
                        'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=300&q=80',
                        width: 46,
                        height: 46,
                        fit: BoxFit.cover,
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'BULK B2B ORDER',
                            style: TextStyle(
                              color: Color(0xFF1B7339),
                              fontSize: 9.5,
                              fontWeight: FontWeight.w900,
                              letterSpacing: 0.5,
                            ),
                          ),
                          const SizedBox(height: 1),
                          const Text(
                            'Bamboo Handwoven Basket',
                            style: TextStyle(
                              color: _textDark,
                              fontSize: 13.0,
                              fontWeight: FontWeight.w900,
                            ),
                          ),
                          const SizedBox(height: 2),
                          Row(
                            children: const [
                              Icon(Icons.account_balance_outlined, size: 12, color: _textSubtle),
                              SizedBox(width: 4),
                              Text(
                                'Heritage Handcrafts Pvt. Ltd.',
                                style: TextStyle(
                                  color: _textMuted,
                                  fontSize: 10.5,
                                  fontWeight: FontWeight.w600,
                                ),
                              ),
                              SizedBox(width: 3),
                              Icon(Icons.check_circle, size: 11, color: _greenPrimary),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 10),

                // Specs 2-Column Grid
                Row(
                  children: [
                    Expanded(
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(color: const Color(0xFFEFE3D8)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Text(
                              'Your Contribution',
                              style: TextStyle(color: _textSubtle, fontSize: 9.5, fontWeight: FontWeight.w500),
                            ),
                            SizedBox(height: 1),
                            Text(
                              '20 pieces',
                              style: TextStyle(color: _textDark, fontSize: 12.0, fontWeight: FontWeight.w900),
                            ),
                          ],
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(color: const Color(0xFFEFE3D8)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Text(
                              'Deadline',
                              style: TextStyle(color: _textSubtle, fontSize: 9.5, fontWeight: FontWeight.w500),
                            ),
                            SizedBox(height: 1),
                            Text(
                              '28 Sep 2026',
                              style: TextStyle(color: _textDark, fontSize: 12.0, fontWeight: FontWeight.w900),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 8),

                // Order Total & Escrow Row
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAF3ED),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: const Color(0xFFEFE3D8)),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          Text(
                            'Order Total: ₹22,500',
                            style: TextStyle(color: _textMuted, fontSize: 10.5, fontWeight: FontWeight.w500),
                          ),
                          SizedBox(height: 1),
                          Text(
                            'Your Share: ₹9,000',
                            style: TextStyle(
                              color: _terracotta,
                              fontSize: 12.5,
                              fontWeight: FontWeight.w900,
                            ),
                          ),
                        ],
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                          color: _greenBg,
                          borderRadius: BorderRadius.circular(8),
                          border: Border.all(color: const Color(0xFFC6EAD7)),
                        ),
                        child: Row(
                          children: const [
                            Icon(Icons.lock_outline, size: 11, color: _greenPrimary),
                            SizedBox(width: 3),
                            Text(
                              'Escrow Protected',
                              style: TextStyle(
                                color: _greenPrimary,
                                fontSize: 10.0,
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          const SizedBox(height: 12),

          // Accept / Decline Buttons
          if (!_rameshAccepted && !_rameshDeclined)
            Row(
              children: [
                Expanded(
                  child: ElevatedButton.icon(
                    onPressed: () {
                      setState(() => _rameshAccepted = true);
                      _showSnack('🎉 Accepted collaboration with Ramesh Kumar! ₹9,000 escrow locked.');
                    },
                    icon: const Icon(Icons.check_circle_outline, size: 16, color: Colors.white),
                    label: const Text('Accept', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 13)),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: _terracotta,
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 11),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      elevation: 0,
                    ),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: () {
                      setState(() => _rameshDeclined = true);
                      _showSnack('Declined collaboration request.');
                    },
                    icon: const Icon(Icons.close, size: 16, color: _textDark),
                    label: const Text('Decline', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: _textDark)),
                    style: OutlinedButton.styleFrom(
                      backgroundColor: Colors.white,
                      side: const BorderSide(color: Color(0xFFD5C4B8)),
                      padding: const EdgeInsets.symmetric(vertical: 11),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                  ),
                ),
              ],
            ),

          if (!_rameshAccepted && !_rameshDeclined) ...[
            const SizedBox(height: 8),
            Center(
              child: TextButton(
                onPressed: widget.onOpenOrderSpecs ?? () => _showSnack('Viewing full PO specs for #HS-8841'),
                child: const Text(
                  'View Order & Craft Specs >',
                  style: TextStyle(
                    color: _textMuted,
                    fontSize: 11.5,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ),
            ),
          ],

          // Banner when Accepted (matching image)
          if (_rameshAccepted) ...[
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
              decoration: BoxDecoration(
                color: _greenBg,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: _greenBorder),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(3),
                        decoration: const BoxDecoration(
                          color: _greenPrimary,
                          shape: BoxShape.circle,
                        ),
                        child: const Icon(Icons.check, size: 12, color: Colors.white),
                      ),
                      const SizedBox(width: 8),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          Text(
                            'Collaboration Accepted',
                            style: TextStyle(
                              color: Color(0xFF144D25),
                              fontSize: 11.5,
                              fontWeight: FontWeight.w900,
                            ),
                          ),
                          Text(
                            'Escrow locked for 20 pcs',
                            style: TextStyle(
                              color: Color(0xFF1F6335),
                              fontSize: 10.0,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                  ElevatedButton(
                    onPressed: () => _showSnack('💬 Opening live collaboration chat with Ramesh Kumar...'),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: _forestButton,
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                      elevation: 0,
                    ),
                    child: const Text(
                      'Chat with him',
                      style: TextStyle(fontSize: 11.0, fontWeight: FontWeight.w800),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }

  // 4B. MEERA BAI REQUEST CARD
  Widget _buildMeeraRequestCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: _borderSubtle),
        boxShadow: const [
          BoxShadow(color: Color(0x08000000), blurRadius: 6, offset: Offset(0, 2)),
        ],
      ),
      padding: const EdgeInsets.all(14.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header: Avatar, Name, Title, Price
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(24),
                child: Image.network(
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
                  width: 44,
                  height: 44,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: const [
                        Text(
                          'Meera Bai',
                          style: TextStyle(
                            color: _textDark,
                            fontSize: 13.5,
                            fontWeight: FontWeight.w900,
                          ),
                        ),
                        SizedBox(width: 4),
                        Icon(Icons.schedule, size: 13, color: _textSubtle),
                      ],
                    ),
                    const SizedBox(height: 1),
                    const Text(
                      'Terracotta Water Jugs • Due in 12 days',
                      style: TextStyle(color: _textMuted, fontSize: 11.0, fontWeight: FontWeight.w500),
                    ),
                  ],
                ),
              ),
              const Text(
                '₹4,500',
                style: TextStyle(
                  color: _terracotta,
                  fontSize: 14.0,
                  fontWeight: FontWeight.w900,
                ),
              ),
            ],
          ),

          const SizedBox(height: 10),

          // Detail Pill Row
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            decoration: BoxDecoration(
              color: const Color(0xFFFFFDFB),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: const Color(0xFFF0E2D8)),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: const [
                Text.rich(
                  TextSpan(
                    text: 'Need: ',
                    style: TextStyle(color: _textMuted, fontSize: 11.0),
                    children: [
                      TextSpan(
                        text: '10 pieces',
                        style: TextStyle(color: _textDark, fontWeight: FontWeight.w900),
                      ),
                    ],
                  ),
                ),
                Text.rich(
                  TextSpan(
                    text: 'Buyer: ',
                    style: TextStyle(color: _textMuted, fontSize: 11.0),
                    children: [
                      TextSpan(
                        text: 'Organic Living Co.',
                        style: TextStyle(color: _textDark, fontWeight: FontWeight.w900),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),

          const SizedBox(height: 10),

          // Accept / Decline Row
          if (!_meeraAccepted && !_meeraDeclined)
            Row(
              children: [
                Expanded(
                  child: ElevatedButton.icon(
                    onPressed: () {
                      setState(() => _meeraAccepted = true);
                      _showSnack('Accepted collaboration with Meera Bai for ₹4,500!');
                    },
                    icon: const Icon(Icons.check, size: 15, color: Colors.white),
                    label: const Text('Accept', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12.5)),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: _terracotta,
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(vertical: 9),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                      elevation: 0,
                    ),
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: OutlinedButton(
                    onPressed: () {
                      setState(() => _meeraDeclined = true);
                      _showSnack('Declined Meera Bai request');
                    },
                    style: OutlinedButton.styleFrom(
                      backgroundColor: Colors.white,
                      side: const BorderSide(color: Color(0xFFD5C4B8)),
                      padding: const EdgeInsets.symmetric(vertical: 9),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    ),
                    child: const Text('Decline', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12.5, color: _textDark)),
                  ),
                ),
              ],
            ),

          const SizedBox(height: 8),

          // Full width "Chat with him / her"
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: () => _showSnack('💬 Opening conversation with Meera Bai...'),
              style: ElevatedButton.styleFrom(
                backgroundColor: _terracotta,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 10),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                elevation: 0,
              ),
              child: const Text(
                'Chat with him',
                style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.w900),
              ),
            ),
          ),
        ],
      ),
    );
  }

  // 5. SECTION 2: YOUR INVITES
  Widget _buildYourInvitesSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Header
        Row(
          children: [
            const Text(
              'Your Invites',
              style: TextStyle(
                color: _textDark,
                fontSize: 16.0,
                fontWeight: FontWeight.w900,
                letterSpacing: -0.2,
              ),
            ),
            const SizedBox(width: 8.0),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 2.5),
              decoration: BoxDecoration(
                color: const Color(0xFFEBE0D7),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Text(
                '3 Total',
                style: TextStyle(
                  color: Color(0xFF5C4A40),
                  fontSize: 10.5,
                  fontWeight: FontWeight.w800,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 4.0),
        const Text(
          "Artisans you've invited to collaborate on your active orders.",
          style: TextStyle(
            color: _textMuted,
            fontSize: 12.0,
            fontWeight: FontWeight.w500,
          ),
        ),

        const SizedBox(height: 12.0),

        // 5A. Invite Card 1: Sohan Patel (Waiting for Response)
        _buildSohanInviteCard(),

        const SizedBox(height: 12.0),

        // 5B. Invite Card 2: Biren Kalita (Accepted)
        _buildBirenInviteCard(),
      ],
    );
  }

  // 5A. SOHAN PATEL INVITE CARD
  Widget _buildSohanInviteCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: _borderSubtle),
        boxShadow: const [
          BoxShadow(color: Color(0x08000000), blurRadius: 6, offset: Offset(0, 2)),
        ],
      ),
      padding: const EdgeInsets.all(14.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header: Avatar, Name, Status Badge
          Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(24),
                child: Image.network(
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
                  width: 44,
                  height: 44,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text(
                      'Sohan Patel',
                      style: TextStyle(
                        color: _textDark,
                        fontSize: 13.5,
                        fontWeight: FontWeight.w900,
                      ),
                    ),
                    SizedBox(height: 1),
                    Text(
                      'Bamboo Craft Artisan • Kamrup',
                      style: TextStyle(color: _textMuted, fontSize: 11.0, fontWeight: FontWeight.w500),
                    ),
                  ],
                ),
              ),
              // Waiting badge
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: _amberTagBg,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFFF5CCA8)),
                ),
                child: Row(
                  children: const [
                    Icon(Icons.hourglass_top, size: 12, color: Color(0xFF6D3B16)),
                    SizedBox(width: 3),
                    Text(
                      'Waiting for\nResponse',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Color(0xFF6D3B16),
                        fontSize: 9.5,
                        fontWeight: FontWeight.w800,
                        height: 1.1,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),

          const SizedBox(height: 10),

          // Order breakdown box
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            decoration: BoxDecoration(
              color: const Color(0xFFFFFDFB),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: const Color(0xFFF0E2D8)),
            ),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: const [
                    Text('Order:', style: TextStyle(color: _textMuted, fontSize: 11.0)),
                    Text(
                      'Bamboo Handwoven Basket',
                      style: TextStyle(color: _textDark, fontSize: 11.5, fontWeight: FontWeight.w900),
                    ),
                  ],
                ),
                const SizedBox(height: 4),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: const [
                    Text.rich(
                      TextSpan(
                        text: 'Requested: ',
                        style: TextStyle(color: _textMuted, fontSize: 11.0),
                        children: [
                          TextSpan(
                            text: '15 pcs',
                            style: TextStyle(color: _textDark, fontWeight: FontWeight.w900),
                          ),
                        ],
                      ),
                    ),
                    Text.rich(
                      TextSpan(
                        text: 'Capacity: ',
                        style: TextStyle(color: _textMuted, fontSize: 11.0),
                        children: [
                          TextSpan(
                            text: '20 pcs',
                            style: TextStyle(color: _textDark, fontWeight: FontWeight.w900),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),

          const SizedBox(height: 10),

          // Remind & View Profile Row
          Row(
            children: [
              Expanded(
                child: OutlinedButton(
                  onPressed: () {
                    setState(() => _sohanReminded = true);
                    _showSnack('🔔 SMS & Voice reminder dispatched to Sohan Patel!');
                  },
                  style: OutlinedButton.styleFrom(
                    backgroundColor: const Color(0xFFFFF8F3),
                    side: const BorderSide(color: Color(0xFFEAD5C8)),
                    padding: const EdgeInsets.symmetric(vertical: 9),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(Icons.notifications_active_outlined, size: 14, color: _terracotta),
                      const SizedBox(width: 4),
                      Text(
                        _sohanReminded ? 'Reminded ✓' : 'Remind 🔔',
                        style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12.0, color: _terracotta),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: OutlinedButton(
                  onPressed: () => _showSnack('Viewing Sohan Patel artisan profile...'),
                  style: OutlinedButton.styleFrom(
                    backgroundColor: Colors.white,
                    side: const BorderSide(color: Color(0xFFEADFD6)),
                    padding: const EdgeInsets.symmetric(vertical: 9),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  ),
                  child: const Text(
                    'View Profile',
                    style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12.0, color: _textDark),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  // 5B. BIREN KALITA INVITE CARD (ACCEPTED)
  Widget _buildBirenInviteCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: _borderSubtle),
        boxShadow: const [
          BoxShadow(color: Color(0x08000000), blurRadius: 6, offset: Offset(0, 2)),
        ],
      ),
      padding: const EdgeInsets.all(14.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header: Avatar, Name, Accepted Badge
          Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(24),
                child: Image.network(
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
                  width: 44,
                  height: 44,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    Text(
                      'Biren Kalita',
                      style: TextStyle(
                        color: _textDark,
                        fontSize: 13.5,
                        fontWeight: FontWeight.w900,
                      ),
                    ),
                    SizedBox(height: 1),
                    Text(
                      'Master Weaver • Guwahati',
                      style: TextStyle(color: _textMuted, fontSize: 11.0, fontWeight: FontWeight.w500),
                    ),
                  ],
                ),
              ),
              // Accepted Badge
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: _greenBg,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: _greenBorder),
                ),
                child: Row(
                  children: const [
                    Icon(Icons.check_circle, size: 12, color: _greenPrimary),
                    SizedBox(width: 3),
                    Text(
                      'Accepted',
                      style: TextStyle(
                        color: _greenPrimary,
                        fontSize: 10.5,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),

          const SizedBox(height: 10),

          // Assigned Box
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            decoration: BoxDecoration(
              color: const Color(0xFFFFFDFB),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: const Color(0xFFF0E2D8)),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: const [
                Text(
                  'Bamboo Fruit Bowls',
                  style: TextStyle(color: _textMuted, fontSize: 11.5, fontWeight: FontWeight.w600),
                ),
                Text(
                  '20 pieces assigned',
                  style: TextStyle(color: _textDark, fontSize: 11.5, fontWeight: FontWeight.w900),
                ),
              ],
            ),
          ),

          const SizedBox(height: 10),

          // Chat with him button
          SizedBox(
            width: double.infinity,
            child: ElevatedButton.icon(
              onPressed: () => _showSnack('💬 Opening conversation with Biren Kalita...'),
              icon: const Icon(Icons.handshake_outlined, size: 15, color: Colors.white),
              label: const Text('Chat with him', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12.5)),
              style: ElevatedButton.styleFrom(
                backgroundColor: _terracotta,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 10),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                elevation: 0,
              ),
            ),
          ),
        ],
      ),
    );
  }

  // 6. BOTTOM NAVIGATION BAR
  Widget _buildBottomNavigationBar() {
    final navItems = [
      {'icon': Icons.storefront_outlined, 'label': 'Home', 'index': 0},
      {'icon': Icons.palette_outlined, 'label': 'Products', 'index': 1},
      {'icon': Icons.receipt_long_outlined, 'label': 'Orders', 'index': 2},
      {'icon': Icons.group_outlined, 'label': 'Collaborate', 'index': 3},
      {'icon': Icons.person_outline, 'label': 'Profile', 'index': 4},
    ];

    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: _borderSubtle, width: 1)),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 6.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: navItems.map((item) {
          final isSelected = item['index'] == _currentBottomNavIndex;
          return InkWell(
            onTap: () {
              setState(() => _currentBottomNavIndex = item['index'] as int);
              widget.onNavigateTab?.call(item['index'] as int);
            },
            borderRadius: BorderRadius.circular(20),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5),
              decoration: BoxDecoration(
                color: isSelected ? const Color(0xFFFDEFE7) : Colors.transparent,
                borderRadius: BorderRadius.circular(20),
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(
                    item['icon'] as IconData,
                    size: 20,
                    color: isSelected ? _terracotta : _textMuted,
                  ),
                  const SizedBox(height: 2),
                  Text(
                    item['label'] as String,
                    style: TextStyle(
                      fontSize: 10.0,
                      fontWeight: isSelected ? FontWeight.w800 : FontWeight.w600,
                      color: isSelected ? _terracotta : _textMuted,
                    ),
                  ),
                ],
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}
