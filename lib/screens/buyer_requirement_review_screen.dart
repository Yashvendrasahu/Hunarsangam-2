// lib/screens/buyer_requirement_review_screen.dart

import 'package:flutter/material.dart';

/// Screen: Create Bulk Requirement Review (r3-bulk — Create Bulk Requirement review.png)
/// Step 2 of 3: Requirement Description
class BuyerRequirementReviewScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onContinue;
  final VoidCallback? onOpenRequirements;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onOpenHome;

  const BuyerRequirementReviewScreen({
    super.key,
    this.onBack,
    this.onContinue,
    this.onOpenRequirements,
    this.onOpenDiscover,
    this.onOpenHome,
  });

  @override
  State<BuyerRequirementReviewScreen> createState() => _BuyerRequirementReviewScreenState();
}

class _BuyerRequirementReviewScreenState extends State<BuyerRequirementReviewScreen> {
  int _quantity = 500;

  static const Color _primaryRust = Color(0xFF9C3C18);
  static const Color _bgCanvas = Color(0xFFFCF9F6);
  static const Color _borderSubtle = Color(0xFFEFE2D8);
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
                    _buildInfoBanner(),
                    const SizedBox(height: 12),
                    _buildQuickVoiceFillCard(),
                    const SizedBox(height: 16),
                    _buildSectionHeader('What do you need?', Icons.inventory_2_outlined, actionText: 'Change', onAction: () => _showNotification('Change item')),
                    const SizedBox(height: 8),
                    _buildProductCard(),
                    const SizedBox(height: 16),
                    _buildSectionHeader('Craft & Artisan Cluster', Icons.palette_outlined, badgeText: 'Verified GI Craft'),
                    const SizedBox(height: 8),
                    _buildClusterCard(),
                    const SizedBox(height: 16),
                    _buildSectionHeader('Quantity Needed', Icons.layers_outlined, badgeText: 'Standard Bulk Tier'),
                    const SizedBox(height: 8),
                    _buildQuantityCard(),
                    const SizedBox(height: 16),
                    _buildSectionHeader('Required Delivery Timeline', Icons.calendar_today_outlined, actionText: 'Adjust', onAction: () => _showNotification('Adjust timeline')),
                    const SizedBox(height: 8),
                    _buildTimelineCard(),
                    const SizedBox(height: 20),
                    _buildContinueSection(),
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
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      child: Row(
        children: [
          IconButton(
            icon: const Icon(Icons.arrow_back, color: _textDark),
            onPressed: widget.onBack,
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'Post Bulk Requirement',
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w900,
                    color: _primaryRust,
                  ),
                ),
                Text(
                  'Step 2 of 3: Requirement Description',
                  style: TextStyle(
                    fontSize: 11,
                    color: _textMuted,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
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
              children: const [
                Icon(Icons.record_voice_over, size: 14, color: Color(0xFF065F46)),
                SizedBox(width: 4),
                Text(
                  'AI Voice',
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

  Widget _buildInfoBanner() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFF8F2),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFF5E2D3)),
      ),
      padding: const EdgeInsets.all(12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(6),
            decoration: BoxDecoration(
              color: const Color(0xFFFEE9D9),
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Icon(Icons.handshake_outlined, size: 16, color: _primaryRust),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'Specify your sourcing needs to connect directly with verified master craft maker clusters.',
                  style: TextStyle(
                    fontSize: 12,
                    color: Color(0xFF4A382D),
                    fontWeight: FontWeight.w500,
                    height: 1.3,
                  ),
                ),
                SizedBox(height: 4),
                Text(
                  '• Bulk Buyer Direct Access',
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF065F46),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuickVoiceFillCard() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFAF2EB),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: const Color(0xFFE8D4C5)),
      ),
      padding: const EdgeInsets.all(12),
      child: Row(
        children: [
          Container(
            width: 40,
            height: 40,
            decoration: const BoxDecoration(
              color: _primaryRust,
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.mic, color: Colors.white, size: 20),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text(
                      'QUICK VOICE-FILL',
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w900,
                        color: _primaryRust,
                        letterSpacing: 0.5,
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: const Color(0xFFE5D7CD)),
                      ),
                      child: const Text(
                        'Any Language',
                        style: TextStyle(
                          fontSize: 9,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF7A6A60),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 2),
                const Text(
                  '"Mujhe 500 bamboo baskets chahiye for corporate gifting by next month."',
                  style: TextStyle(
                    fontSize: 11,
                    fontStyle: FontStyle.italic,
                    color: Color(0xFF2E1E17),
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 2),
                const Text(
                  'Tap mic to autofill this entire screen in seconds',
                  style: TextStyle(fontSize: 10, color: Color(0xFF8C7A70)),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSectionHeader(
    String title,
    IconData icon, {
    String? badgeText,
    String? actionText,
    VoidCallback? onAction,
  }) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children: [
            Icon(icon, size: 16, color: _primaryRust),
            const SizedBox(width: 6),
            Text(
              title,
              style: const TextStyle(
                fontSize: 13,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
          ],
        ),
        if (badgeText != null)
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
            decoration: BoxDecoration(
              color: badgeText.contains('GI') ? const Color(0xFFD1FAE5) : const Color(0xFFFAF0E8),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(
                color: badgeText.contains('GI') ? const Color(0xFFA7F3D0) : const Color(0xFFF0DFD2),
              ),
            ),
            child: Text(
              badgeText,
              style: TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.bold,
                color: badgeText.contains('GI') ? const Color(0xFF065F46) : _primaryRust,
              ),
            ),
          ),
        if (actionText != null)
          InkWell(
            onTap: onAction,
            child: Row(
              children: [
                Text(
                  actionText,
                  style: const TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: _primaryRust,
                  ),
                ),
                if (actionText == 'Change') const SizedBox(width: 2),
                if (actionText == 'Change') const Icon(Icons.edit_outlined, size: 12, color: _primaryRust),
              ],
            ),
          ),
      ],
    );
  }

  Widget _buildProductCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(12),
      child: Row(
        children: [
          Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              color: const Color(0xFFFAF0E7),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0xFFEBD6C7)),
            ),
            child: const Icon(Icons.shopping_bag_outlined, color: _primaryRust, size: 22),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'Handmade Bamboo Fruit Baskets',
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
                SizedBox(height: 2),
                Text(
                  'Eco-friendly • Lacquered Natural Finish',
                  style: TextStyle(fontSize: 11, color: Color(0xFF6B5A4E)),
                ),
              ],
            ),
          ),
          Container(
            width: 24,
            height: 24,
            decoration: const BoxDecoration(
              color: Color(0xFF10B981),
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.check, color: Colors.white, size: 16),
          ),
        ],
      ),
    );
  }

  Widget _buildClusterCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text(
                'Bamboo & Cane Craft',
                style: TextStyle(
                  fontSize: 13,
                  fontWeight: FontWeight.w900,
                  color: _textDark,
                ),
              ),
              Icon(Icons.chevron_right, color: Color(0xFF8C7A70), size: 18),
            ],
          ),
          const SizedBox(height: 2),
          Row(
            children: const [
              Icon(Icons.location_on, size: 12, color: _primaryRust),
              SizedBox(width: 4),
              Text(
                'Assam (Barpeta) & West Bengal clusters',
                style: TextStyle(fontSize: 11, color: Color(0xFF6B5A4E)),
              ),
            ],
          ),
          const SizedBox(height: 8),
          const Divider(height: 1, color: Color(0xFFF5ECE5)),
          const SizedBox(height: 6),
          const Text(
            'Active Craft Maker Cooperatives: 14 Master Guilds Available',
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.bold,
              color: _primaryRust,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuantityCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(14),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.baseline,
                textBaseline: TextBaseline.alphabetic,
                children: [
                  Text(
                    '$_quantity',
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w900,
                      color: _textDark,
                    ),
                  ),
                  const SizedBox(width: 4),
                  const Text('pieces', style: TextStyle(fontSize: 12, color: Color(0xFF6B5A4E))),
                ],
              ),
              const SizedBox(height: 2),
              const Text(
                'Wholesale pricing bracket active (₹380 - ₹410/pc)',
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF15803D),
                ),
              ),
            ],
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFFF8F1EA),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: const Color(0xFFE8D9CC)),
            ),
            child: Row(
              children: [
                InkWell(
                  onTap: () {
                    if (_quantity > 100) setState(() => _quantity -= 50);
                  },
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 6),
                    child: Text('—', style: TextStyle(fontWeight: FontWeight.bold, color: _textDark)),
                  ),
                ),
                const Padding(
                  padding: EdgeInsets.symmetric(horizontal: 8),
                  child: Text(
                    'Edit',
                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: _primaryRust),
                  ),
                ),
                InkWell(
                  onTap: () {
                    setState(() => _quantity += 50);
                  },
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 6),
                    child: Text('+', style: TextStyle(fontWeight: FontWeight.bold, color: _textDark)),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTimelineCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(12),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF0E7),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: const Color(0xFFEBD6C7)),
                ),
                child: const Icon(Icons.access_time, color: _primaryRust, size: 20),
              ),
              const SizedBox(width: 12),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  Text(
                    '45 Days',
                    style: TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.w900,
                      color: _textDark,
                    ),
                  ),
                  Text(
                    'Estimated arrival: Mid Next Month',
                    style: TextStyle(fontSize: 11, color: Color(0xFF6B5A4E)),
                  ),
                ],
              ),
            ],
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFFFAF0E7),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFE8D4C5)),
            ),
            child: const Text(
              'Flexible (± 5 days)',
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: Color(0xFF4A382D),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildContinueSection() {
    return Column(
      children: [
        SizedBox(
          width: double.infinity,
          child: ElevatedButton(
            onPressed: widget.onContinue,
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
                  'Continue',
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900),
                ),
                SizedBox(width: 6),
                Icon(Icons.arrow_forward, size: 16),
              ],
            ),
          ),
        ),
        const SizedBox(height: 6),
        const Text(
          'Step 2 will cover reference photos, budget & customization.',
          style: TextStyle(
            fontSize: 11,
            color: _textMuted,
            fontWeight: FontWeight.w500,
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  Widget _buildBottomNavBar() {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: _borderSubtle)),
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
