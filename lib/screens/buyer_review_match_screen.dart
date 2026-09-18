// lib/screens/buyer_review_match_screen.dart

import 'package:flutter/material.dart';

/// Screen: Review & Match (r5-bulk — Find Artisan Matches.png)
/// Requirement Ready for Matching & Sourcing specifications review
class BuyerReviewMatchScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onPublishAndFind;
  final VoidCallback? onOpenRequirements;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onOpenHome;

  const BuyerReviewMatchScreen({
    super.key,
    this.onBack,
    this.onPublishAndFind,
    this.onOpenRequirements,
    this.onOpenDiscover,
    this.onOpenHome,
  });

  @override
  State<BuyerReviewMatchScreen> createState() => _BuyerReviewMatchScreenState();
}

class _BuyerReviewMatchScreenState extends State<BuyerReviewMatchScreen> {
  bool _isPlaying = false;
  double _audioProgress = 0.41;

  static const Color _primaryRust = Color(0xFF9C3C18);
  static const Color _bgCanvas = Color(0xFFFCF9F6);
  static const Color _cardBg = Color(0xFFFFF9F5);
  static const Color _borderSubtle = Color(0xFFF3E3D7);
  static const Color _textDark = Color(0xFF1F1612);
  static const Color _textMuted = Color(0xFF7A6A60);

  void _showNotification(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: const Color(0xFF2D2421),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bgCanvas,
      body: SafeArea(
        child: Column(
          children: [
            _buildAppBar(),
            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Requirement Ready for Matching',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w900,
                        color: _textDark,
                        letterSpacing: -0.3,
                      ),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'Review your bulk sourcing specifications before our algorithm identifies suitable artisan clusters.',
                      style: TextStyle(
                        fontSize: 12,
                        color: Color(0xFF6B5A4E),
                        height: 1.35,
                      ),
                    ),
                    const SizedBox(height: 16),
                    _buildSpecificationSummaryCard(),
                    const SizedBox(height: 20),
                    _buildPublishCTA(),
                    const SizedBox(height: 20),
                  ],
                ),
              ),
            ),
            _buildBottomNavBar(),
          ],
        ),
      ),
    );
  }

  Widget _buildAppBar() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: Color(0xFFF0E5DC))),
      ),
      child: Row(
        children: [
          IconButton(
            icon: const Icon(Icons.arrow_back, color: _textDark),
            onPressed: widget.onBack,
          ),
          const Expanded(
            child: Text(
              'Review & Match',
              style: TextStyle(
                fontSize: 17,
                fontWeight: FontWeight.w900,
                color: _primaryRust,
              ),
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFFD1FAE5),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: const Color(0xFFA7F3D0)),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  width: 6,
                  height: 6,
                  decoration: const BoxDecoration(
                    color: Color(0xFF10B981),
                    shape: BoxShape.circle,
                  ),
                ),
                const SizedBox(width: 6),
                const Text(
                  'Ready to Match',
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF065F46),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(width: 8),
          InkWell(
            onTap: () => _showNotification('Language switched'),
            child: Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(
                color: const Color(0xFFF5ECE5),
                borderRadius: BorderRadius.circular(10),
              ),
              child: const Icon(Icons.translate, size: 18, color: _primaryRust),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSpecificationSummaryCard() {
    return Container(
      decoration: BoxDecoration(
        color: _cardBg,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Product header
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.network(
                  'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=160&q=80',
                  width: 64,
                  height: 64,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFAF0E7),
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(color: const Color(0xFFEBD6C7)),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: const [
                          Icon(Icons.verified_outlined, size: 11, color: _primaryRust),
                          SizedBox(width: 4),
                          Text(
                            'Bamboo Handicraft',
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.bold,
                              color: _primaryRust,
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'Handwoven Bamboo Fruit Basket',
                      style: TextStyle(
                        fontSize: 15,
                        fontWeight: FontWeight.w900,
                        color: _textDark,
                      ),
                    ),
                    const SizedBox(height: 2),
                    const Text(
                      'ID: HS-BLK-883492',
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.bold,
                        color: _textMuted,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),
          const Divider(height: 1, color: Color(0xFFEFE2D8)),
          const SizedBox(height: 12),

          // Quantity Row
          _buildSpecRow(
            icon: Icons.inventory_2_outlined,
            label: 'QUANTITY',
            valueWidget: Row(
              children: [
                const Text(
                  '500 pieces',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
                const SizedBox(width: 8),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFDECE2),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: const Text(
                    'Medium Bulk Tier',
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.bold,
                      color: _primaryRust,
                    ),
                  ),
                ),
              ],
            ),
            onEdit: () => _showNotification('Edit quantity'),
          ),
          const SizedBox(height: 12),

          // Target Delivery Date
          _buildSpecRow(
            icon: Icons.calendar_today_outlined,
            label: 'TARGET DELIVERY DATE',
            valueWidget: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  '28 October 2026',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
                Text(
                  '(Flexible ±7 days)',
                  style: TextStyle(fontSize: 11, color: _textMuted),
                ),
              ],
            ),
            onEdit: () => _showNotification('Edit delivery date'),
          ),
          const SizedBox(height: 12),

          // Target Budget
          _buildSpecRow(
            icon: Icons.account_balance_wallet_outlined,
            label: 'TARGET BUDGET',
            valueWidget: Row(
              crossAxisAlignment: CrossAxisAlignment.baseline,
              textBaseline: TextBaseline.alphabetic,
              children: const [
                Text(
                  '₹380 / pc',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
                SizedBox(width: 4),
                Text(
                  '(~₹1,90,000 total)',
                  style: TextStyle(fontSize: 11, color: _textMuted),
                ),
              ],
            ),
            onEdit: () => _showNotification('Edit budget'),
          ),
          const SizedBox(height: 12),

          // Customizations
          _buildSpecRow(
            icon: Icons.tune,
            label: 'CUSTOMIZATIONS',
            valueWidget: Wrap(
              spacing: 6,
              runSpacing: 6,
              children: [
                _buildCustomizationChip('Custom 10–inch size'),
                _buildCustomizationChip('Logo kraft hangtag'),
                _buildCustomizationChip('Recycled individual box'),
              ],
            ),
            onEdit: () => _showNotification('Edit customizations'),
          ),
          const SizedBox(height: 16),
          const Divider(height: 1, color: Color(0xFFEFE2D8)),
          const SizedBox(height: 14),

          // Attached visual reference
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Row(
                children: [
                  Icon(Icons.attachment, size: 14, color: _primaryRust),
                  SizedBox(width: 6),
                  Text(
                    'ATTACHED VISUAL REFERENCE',
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.w900,
                      color: _textMuted,
                      letterSpacing: 0.5,
                    ),
                  ),
                ],
              ),
              Text(
                '1 File attached',
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.bold,
                  color: _textMuted,
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Container(
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFEADBCE)),
            ),
            padding: const EdgeInsets.all(8),
            child: Row(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: Image.network(
                    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=120&q=80',
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
                        'bamboo_basket_dualrim_spec.jpg',
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w900,
                          color: _textDark,
                        ),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                      ),
                      SizedBox(height: 2),
                      Text(
                        '2.4 MB • Reference Image',
                        style: TextStyle(fontSize: 10, color: _textMuted),
                      ),
                    ],
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.remove_red_eye_outlined, size: 18, color: _primaryRust),
                  onPressed: () => _showNotification('Previewing reference image'),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          const Divider(height: 1, color: Color(0xFFEFE2D8)),
          const SizedBox(height: 14),

          // Buyer Audio Brief & Transcript
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: const [
                  Icon(Icons.graphic_eq, size: 14, color: _primaryRust),
                  SizedBox(width: 6),
                  Text(
                    'BUYER AUDIO BRIEF &\nTRANSCRIPT',
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.w900,
                      color: _textMuted,
                      letterSpacing: 0.5,
                      height: 1.2,
                    ),
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: const Color(0xFFD1FAE5),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: const Text(
                  'Verified\nVoice',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 9,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF065F46),
                    height: 1.1,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Container(
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFEADBCE)),
            ),
            padding: const EdgeInsets.all(12),
            child: Column(
              children: [
                Row(
                  children: [
                    InkWell(
                      onTap: () {
                        setState(() => _isPlaying = !_isPlaying);
                        _showNotification(_isPlaying ? 'Playing brief audio' : 'Paused brief audio');
                      },
                      child: Container(
                        width: 32,
                        height: 32,
                        decoration: const BoxDecoration(
                          color: _primaryRust,
                          shape: BoxShape.circle,
                        ),
                        child: Icon(
                          _isPlaying ? Icons.pause : Icons.play_arrow,
                          color: Colors.white,
                          size: 18,
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: LinearProgressIndicator(
                          value: _audioProgress,
                          backgroundColor: const Color(0xFFF3E5DC),
                          valueColor: const AlwaysStoppedAnimation<Color>(_primaryRust),
                          minHeight: 6,
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    const Text(
                      '0:24 / 0:58',
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.bold,
                        color: _textMuted,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAF2EB),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: const Text(
                    '"Need 500 handwoven natural bamboo fruit baskets with reinforced dual-rim finish. Should comfortably hold 3–4 kg weight. Delivery needed in Delhi warehouse by late October with food-safe organic polish."',
                    style: TextStyle(
                      fontSize: 11,
                      fontStyle: FontStyle.italic,
                      color: Color(0xFF3B2A22),
                      height: 1.35,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSpecRow({
    required IconData icon,
    required String label,
    required Widget valueWidget,
    required VoidCallback onEdit,
  }) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          padding: const EdgeInsets.all(6),
          decoration: BoxDecoration(
            color: const Color(0xFFF7ECE4),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Icon(icon, size: 14, color: _primaryRust),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                label,
                style: const TextStyle(
                  fontSize: 9,
                  fontWeight: FontWeight.w900,
                  color: _textMuted,
                  letterSpacing: 0.5,
                ),
              ),
              const SizedBox(height: 2),
              valueWidget,
            ],
          ),
        ),
        InkWell(
          onTap: onEdit,
          child: Row(
            children: const [
              Icon(Icons.edit_outlined, size: 12, color: _primaryRust),
              SizedBox(width: 2),
              Text(
                'Edit',
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.bold,
                  color: _primaryRust,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildCustomizationChip(String text) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: const Color(0xFFEDE0D4),
        borderRadius: BorderRadius.circular(6),
      ),
      child: Text(
        text,
        style: const TextStyle(
          fontSize: 10,
          fontWeight: FontWeight.w600,
          color: Color(0xFF3E2C22),
        ),
      ),
    );
  }

  Widget _buildPublishCTA() {
    return Column(
      children: [
        SizedBox(
          width: double.infinity,
          child: ElevatedButton(
            onPressed: widget.onPublishAndFind,
            style: ElevatedButton.styleFrom(
              backgroundColor: _primaryRust,
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(vertical: 14),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
              elevation: 0,
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                Text(
                  'Publish & Find Matching Artisans',
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900),
                ),
                SizedBox(width: 8),
                Icon(Icons.arrow_forward, size: 16),
              ],
            ),
          ),
        ),
        const SizedBox(height: 10),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(Icons.podcasts, size: 14, color: _primaryRust),
            SizedBox(width: 6),
            Text(
              'Ready to connect with qualified master artisans\nacross India.',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 11,
                color: _textMuted,
                fontWeight: FontWeight.w500,
                height: 1.25,
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildBottomNavBar() {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: Color(0xFFEFE2D8))),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          _buildNavItem(Icons.home_outlined, 'Home', onTap: widget.onOpenHome),
          _buildNavItem(Icons.explore_outlined, 'Discover', onTap: widget.onOpenDiscover),
          _buildNavItem(Icons.assignment, 'Requirement', isActive: true, onTap: widget.onOpenRequirements),
          _buildNavItem(Icons.local_shipping_outlined, 'Orders'),
          _buildNavItem(Icons.person_outline, 'Profile'),
        ],
      ),
    );
  }

  Widget _buildNavItem(IconData icon, String label, {bool isActive = false, VoidCallback? onTap}) {
    final color = isActive ? _primaryRust : _textMuted;
    return InkWell(
      onTap: onTap,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 20, color: color),
          const SizedBox(height: 2),
          Text(
            label,
            style: TextStyle(
              fontSize: 10,
              fontWeight: isActive ? FontWeight.w900 : FontWeight.w500,
              color: color,
            ),
          ),
        ],
      ),
    );
  }
}
