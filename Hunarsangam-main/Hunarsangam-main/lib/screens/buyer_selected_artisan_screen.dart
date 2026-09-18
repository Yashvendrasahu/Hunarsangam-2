// lib/screens/buyer_selected_artisan_screen.dart

import 'package:flutter/material.dart';

/// Screen: Selected Artisan (r8-bulk — Selected Artisan.png)
/// In-depth artisan capability, verified GI credentials, fair cost breakdown & order review
class BuyerSelectedArtisanScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onSelectAndReviewOrder;
  final VoidCallback? onMessageArtisan;
  final VoidCallback? onOpenRequirements;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onOpenHome;

  const BuyerSelectedArtisanScreen({
    super.key,
    this.onBack,
    this.onSelectAndReviewOrder,
    this.onMessageArtisan,
    this.onOpenRequirements,
    this.onOpenDiscover,
    this.onOpenHome,
  });

  @override
  State<BuyerSelectedArtisanScreen> createState() => _BuyerSelectedArtisanScreenState();
}

class _BuyerSelectedArtisanScreenState extends State<BuyerSelectedArtisanScreen> {
  bool _isPlayingIntro = false;

  static const Color _primaryRust = Color(0xFF9C3C18);
  static const Color _bgCanvas = Color(0xFFFCF9F6);
  static const Color _borderSubtle = Color(0xFFF0E0D4);
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
                    _buildWorkspaceBanner(),
                    const SizedBox(height: 12),
                    _buildArtisanHeroCard(),
                    const SizedBox(height: 16),
                    _buildAboutCraftsmanCard(),
                    const SizedBox(height: 18),
                    _buildSourcingSpecMatches(),
                    const SizedBox(height: 18),
                    _buildPriceGuidanceAndCapacity(),
                    const SizedBox(height: 24),
                  ],
                ),
              ),
            ),
            _buildBottomActionBar(),
            _buildBottomNavBar(),
          ],
        ),
      ),
    );
  }

  Widget _buildAppBar() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      child: Row(
        children: [
          IconButton(
            icon: const Icon(Icons.arrow_back, color: _textDark),
            onPressed: widget.onBack,
          ),
          const Expanded(
            child: Text(
              'Selected Artisan',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
          ),
          IconButton(
            icon: const Icon(Icons.share_outlined, color: _textDark, size: 20),
            onPressed: () => _showNotification('Shared artisan profile'),
          ),
          IconButton(
            icon: const Icon(Icons.bookmark_border, color: _textDark, size: 20),
            onPressed: () => _showNotification('Saved to shortlisted artisans'),
          ),
        ],
      ),
    );
  }

  Widget _buildWorkspaceBanner() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      decoration: BoxDecoration(
        color: const Color(0xFFFFF6EE),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFFF7DEC9)),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: [
              Container(
                width: 6,
                height: 6,
                decoration: const BoxDecoration(
                  color: Color(0xFF065F46),
                  shape: BoxShape.circle,
                ),
              ),
              const SizedBox(width: 6),
              const Text(
                'ACTIVE WORKSPACE',
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.w900,
                  color: Color(0xFF065F46),
                  letterSpacing: 0.5,
                ),
              ),
            ],
          ),
          const Text(
            'HunarSangam Bulk Buyer',
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

  Widget _buildArtisanHeroCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Stack(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(16),
                    child: Image.network(
                      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=200&q=80',
                      width: 80,
                      height: 80,
                      fit: BoxFit.cover,
                    ),
                  ),
                  Positioned(
                    bottom: 4,
                    left: 4,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(
                        color: const Color(0xFF065F46),
                        borderRadius: BorderRadius.circular(6),
                      ),
                      child: Row(
                        children: const [
                          Icon(Icons.verified, size: 10, color: Colors.white),
                          SizedBox(width: 2),
                          Text(
                            'GI Lead',
                            style: TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: Colors.white),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        const Text(
                          'Ramesh Kumar',
                          style: TextStyle(
                            fontSize: 17,
                            fontWeight: FontWeight.w900,
                            color: _textDark,
                          ),
                        ),
                        const SizedBox(width: 6),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                          decoration: BoxDecoration(
                            color: const Color(0xFFD1FAE5),
                            borderRadius: BorderRadius.circular(6),
                          ),
                          child: const Text(
                            'Verified GI Craft',
                            style: TextStyle(
                              fontSize: 9,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFF065F46),
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 3),
                    const Text(
                      'Cluster Lead • Barpeta Bamboo Craft',
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.bold,
                        color: _primaryRust,
                      ),
                    ),
                    const SizedBox(height: 3),
                    Row(
                      children: const [
                        Icon(Icons.location_on, size: 12, color: _textMuted),
                        SizedBox(width: 4),
                        Expanded(
                          child: Text(
                            'Barpeta, Assam (GI Craft Cluster)',
                            style: TextStyle(fontSize: 11, color: _textMuted),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),

          // 3 Metric Badges
          Row(
            children: [
              Expanded(child: _buildMetricTile('Experience', '28 Yrs\nExperience')),
              const SizedBox(width: 8),
              Expanded(child: _buildMetricTile('Production', '500–800\npcs/mo')),
              const SizedBox(width: 8),
              Expanded(child: _buildMetricTile('Avg Lead', '18–24\nDays')),
            ],
          ),
          const SizedBox(height: 12),

          // Intro audio card
          InkWell(
            onTap: () {
              setState(() => _isPlayingIntro = !_isPlayingIntro);
              _showNotification(_isPlayingIntro ? "Playing Ramesh's audio intro" : "Paused audio intro");
            },
            borderRadius: BorderRadius.circular(14),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              decoration: BoxDecoration(
                color: const Color(0xFFFFF7F2),
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: const Color(0xFFF5E0D2)),
              ),
              child: Row(
                children: [
                  Container(
                    width: 32,
                    height: 32,
                    decoration: const BoxDecoration(
                      color: _primaryRust,
                      shape: BoxShape.circle,
                    ),
                    child: Icon(
                      _isPlayingIntro ? Icons.pause : Icons.play_arrow,
                      color: Colors.white,
                      size: 18,
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text(
                          "Hear Ramesh's introduction",
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w900,
                            color: _textDark,
                          ),
                        ),
                        Text(
                          'Assamese / Hindi • 0:42 mins',
                          style: TextStyle(fontSize: 10, color: _textMuted),
                        ),
                      ],
                    ),
                  ),
                  Row(
                    children: List.generate(
                      5,
                      (index) => Container(
                        width: 3,
                        height: (index % 2 == 0 ? 16 : 22).toDouble(),
                        margin: const EdgeInsets.symmetric(horizontal: 1.5),
                        decoration: BoxDecoration(
                          color: _isPlayingIntro ? _primaryRust : const Color(0xFFD4B8A6),
                          borderRadius: BorderRadius.circular(2),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMetricTile(String label, String value) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 6),
      decoration: BoxDecoration(
        color: const Color(0xFFFAF2EB),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        children: [
          Text(label, style: const TextStyle(fontSize: 9, color: _textMuted)),
          const SizedBox(height: 2),
          Text(
            value,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.w900,
              color: _textDark,
              height: 1.2,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAboutCraftsmanCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: const [
              Icon(Icons.feed_outlined, size: 16, color: _primaryRust),
              SizedBox(width: 6),
              Text(
                'About the Master Craftsman',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w900,
                  color: _textDark,
                ),
              ),
            ],
          ),
          const SizedBox(height: 8),
          const Text(
            'Deep heritage in split bamboo weave, utilizing traditional non-toxic smoke seasoning ensuring zero pest issues and exceptional structural longevity. Ramesh leads and coordinates a direct grassroots cooperative of 32 local master weavers across Barpeta cluster, strictly maintaining ISO-compliant sizing consistency for export and enterprise retail standards.',
            style: TextStyle(
              fontSize: 11.5,
              color: Color(0xFF4A382D),
              height: 1.45,
            ),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAF2EB),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Row(
                    children: const [
                      Icon(Icons.eco, size: 14, color: Color(0xFF10B981)),
                      SizedBox(width: 6),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              '100% Eco–Seasoned',
                              style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: _textDark),
                            ),
                            Text(
                              'Zero chemical resins',
                              style: TextStyle(fontSize: 9, color: _textMuted),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAF2EB),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Row(
                    children: const [
                      Icon(Icons.groups, size: 14, color: _primaryRust),
                      SizedBox(width: 6),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              '32 Weavers Co–op',
                              style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: _textDark),
                            ),
                            Text(
                              'Direct fair-trade wages',
                              style: TextStyle(fontSize: 9, color: _textMuted),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildSourcingSpecMatches() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: const [
            Text(
              'Crafted for Your Sourcing Spec',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
            Text(
              '2 Matching',
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: _primaryRust,
              ),
            ),
          ],
        ),
        const Text(
          'Pre-audited matches against your active requirement',
          style: TextStyle(fontSize: 10.5, color: _textMuted),
        ),
        const SizedBox(height: 10),

        // Exact match product card
        Container(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: _borderSubtle),
          ),
          padding: const EdgeInsets.all(12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Stack(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(14),
                    child: Image.network(
                      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
                      height: 180,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    ),
                  ),
                  Positioned(
                    top: 10,
                    left: 10,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: _primaryRust,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Row(
                        children: const [
                          Icon(Icons.star, size: 11, color: Colors.white),
                          SizedBox(width: 4),
                          Text(
                            'Exact Spec Match',
                            style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Colors.white),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Positioned(
                    bottom: 10,
                    right: 10,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.95),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: const Text(
                        'MOQ: 50 pcs',
                        style: TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: _textDark),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text(
                          'Handwoven Bamboo Fruit Basket (10–inch)',
                          style: TextStyle(
                            fontSize: 14,
                            fontWeight: FontWeight.w900,
                            color: _textDark,
                          ),
                        ),
                        SizedBox(height: 2),
                        Text(
                          'Ref: HNS-BRP-084 • Food-safe smoke cure',
                          style: TextStyle(fontSize: 10, color: _textMuted),
                        ),
                      ],
                    ),
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: const [
                      Text(
                        '₹350 – ₹380',
                        style: TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.w900,
                          color: _primaryRust,
                        ),
                      ),
                      Text(
                        '/ pc wholesale',
                        style: TextStyle(fontSize: 9, color: _textMuted),
                      ),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                decoration: BoxDecoration(
                  color: const Color(0xFFFFF7F2),
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: const Color(0xFFF5E0D2)),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: const [
                        Icon(Icons.check_circle_outline, size: 14, color: Color(0xFF10B981)),
                        SizedBox(width: 6),
                        Text(
                          'Standard Sample available in 4 days',
                          style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: _textDark),
                        ),
                      ],
                    ),
                    InkWell(
                      onTap: () => _showNotification('Sample order initiated for ₹350'),
                      child: const Text(
                        'Order Sample',
                        style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: _primaryRust),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildPriceGuidanceAndCapacity() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: const [
                  Icon(Icons.account_balance_wallet_outlined, size: 16, color: _primaryRust),
                  SizedBox(width: 6),
                  Text(
                    'Price Guidance & Capacity',
                    style: TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.w900,
                      color: _textDark,
                    ),
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF0E7),
                  borderRadius: BorderRadius.circular(6),
                ),
                child: const Text(
                  'Fair Cost Model',
                  style: TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: _primaryRust),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Transparent breakdown
          Container(
            decoration: BoxDecoration(
              color: const Color(0xFFFFF9F5),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFF3DEC8)),
            ),
            padding: const EdgeInsets.all(12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Transparent Cost Distribution (Est. ₹360/unit)',
                  style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: _textMuted),
                ),
                const SizedBox(height: 8),

                // Bar 1: Raw Material
                _buildCostRow('Raw Jati Bamboo Material Cost', '₹110 (31%)', 0.31, const Color(0xFFD4A373)),
                const SizedBox(height: 8),

                // Bar 2: Fair Wages
                _buildCostRow('Fair Artisan Wages (Split & Weave)', '₹205 (57%)', 0.57, _primaryRust),
                const SizedBox(height: 8),

                // Bar 3: Smoke Cure & Packaging
                _buildCostRow('Smoke Cure & Export Packaging', '₹45 (12%)', 0.12, const Color(0xFF065F46)),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Cluster capacity confirmed box
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFFD1FAE5),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFA7F3D0)),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: 8,
                  height: 8,
                  margin: const EdgeInsets.only(top: 3),
                  decoration: const BoxDecoration(
                    color: Color(0xFF10B981),
                    shape: BoxShape.circle,
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: const [
                      Text(
                        'Cluster Capacity Confirmed',
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w900,
                          color: Color(0xFF065F46),
                        ),
                      ),
                      SizedBox(height: 2),
                      Text(
                        'Green: Ready to accept 500 pcs batch for October delivery. Co-op loom schedules reserved.',
                        style: TextStyle(fontSize: 10.5, color: Color(0xFF044D37), height: 1.3),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCostRow(String title, String costStr, double ratio, Color color) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(title, style: const TextStyle(fontSize: 10, color: _textDark, fontWeight: FontWeight.w600)),
            Text(costStr, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: _textDark)),
          ],
        ),
        const SizedBox(height: 3),
        ClipRRect(
          borderRadius: BorderRadius.circular(4),
          child: LinearProgressIndicator(
            value: ratio,
            backgroundColor: const Color(0xFFEADBCE),
            valueColor: AlwaysStoppedAnimation<Color>(color),
            minHeight: 5,
          ),
        ),
      ],
    );
  }

  Widget _buildBottomActionBar() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        border: const Border(top: BorderSide(color: Color(0xFFEFE2D8))),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.04),
            blurRadius: 8,
            offset: const Offset(0, -2),
          ),
        ],
      ),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      child: Row(
        children: [
          OutlinedButton.icon(
            onPressed: widget.onMessageArtisan,
            icon: const Icon(Icons.chat_bubble_outline, size: 14),
            label: const Text('Message\nArtisan', textAlign: TextAlign.center, style: TextStyle(fontSize: 10, height: 1.1)),
            style: OutlinedButton.styleFrom(
              foregroundColor: _textDark,
              side: const BorderSide(color: Color(0xFFDFC8BA)),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: ElevatedButton(
              onPressed: widget.onSelectAndReviewOrder,
              style: ElevatedButton.styleFrom(
                backgroundColor: _primaryRust,
                foregroundColor: Colors.white,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                padding: const EdgeInsets.symmetric(vertical: 12),
                elevation: 0,
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text(
                    'Select Artisan & Review Order',
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900),
                  ),
                  SizedBox(width: 4),
                  Icon(Icons.chevron_right, size: 16),
                ],
              ),
            ),
          ),
        ],
      ),
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
          _buildNavItem(Icons.local_shipping_outlined, 'Order'),
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
