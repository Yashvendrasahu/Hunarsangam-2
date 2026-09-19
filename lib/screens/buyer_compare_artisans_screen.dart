// lib/screens/buyer_compare_artisans_screen.dart

import 'package:flutter/material.dart';

/// Screen: Compare Artisans (r7-bulk ai artisan matching in bulk side.png)
/// Side-by-side multi-attribute cluster evaluation & AI recommendation analysis
class BuyerCompareArtisansScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final Function(String artisanId)? onSelectArtisan;
  final VoidCallback? onMessageArtisans;
  final VoidCallback? onOpenRequirements;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onOpenHome;

  const BuyerCompareArtisansScreen({
    super.key,
    this.onBack,
    this.onSelectArtisan,
    this.onMessageArtisans,
    this.onOpenRequirements,
    this.onOpenDiscover,
    this.onOpenHome,
  });

  @override
  State<BuyerCompareArtisansScreen> createState() => _BuyerCompareArtisansScreenState();
}

class _BuyerCompareArtisansScreenState extends State<BuyerCompareArtisansScreen> {
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
                    _buildActiveRequirementBanner(),
                    const SizedBox(height: 12),
                    _buildAIIntroCard(),
                    const SizedBox(height: 16),
                    _buildSelectionHeader(),
                    const SizedBox(height: 10),
                    _buildDualArtisanCards(),
                    const SizedBox(height: 16),
                    _buildComparisonMatrix(),
                    const SizedBox(height: 18),
                    _buildHighlightsSection(),
                    const SizedBox(height: 14),
                    _buildVoiceAssistantBox(),
                    const SizedBox(height: 16),
                    _buildActionButtons(),
                    const SizedBox(height: 12),
                    Center(
                      child: InkWell(
                        onTap: widget.onBack,
                        child: const Padding(
                          padding: EdgeInsets.symmetric(vertical: 6),
                          child: Text(
                            '← Back to Matched Craft Makers',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                              color: _primaryRust,
                            ),
                          ),
                        ),
                      ),
                    ),
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
                  'Compare Craft Makers',
                  style: TextStyle(
                    fontSize: 17,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
                Text(
                  'Review verified master profiles...',
                  style: TextStyle(fontSize: 10, color: _textMuted),
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFE5D5C8)),
            ),
            child: Row(
              children: const [
                Text(
                  'English',
                  style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: _textDark),
                ),
                Icon(Icons.arrow_drop_down, size: 16, color: _textDark),
              ],
            ),
          ),
          const SizedBox(width: 8),
          IconButton(
            icon: const Icon(Icons.tune, color: _textDark, size: 20),
            onPressed: () => _showNotification('Comparison settings'),
          ),
        ],
      ),
    );
  }

  Widget _buildActiveRequirementBanner() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFF7F2),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: const Color(0xFFF7DEC9)),
      ),
      padding: const EdgeInsets.all(14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text(
                'ACTIVE BULK REQUIREMENT',
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.w900,
                  color: _primaryRust,
                  letterSpacing: 0.5,
                ),
              ),
              Text(
                '#HS-BKT-892',
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.bold,
                  color: _textMuted,
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          const Text(
            '500 Handwoven Bamboo Baskets',
            style: TextStyle(
              fontSize: 17,
              fontWeight: FontWeight.w900,
              color: _textDark,
            ),
          ),
          const SizedBox(height: 8),
          Wrap(
            spacing: 6,
            runSpacing: 6,
            children: [
              _buildBadge(Icons.account_balance_wallet_outlined, 'Target: ₹380 / pc'),
              _buildBadge(Icons.calendar_today_outlined, 'Delivery by Oct 28'),
              _buildBadge(Icons.verified, 'Verified Craft Makers', isSuccess: true),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildBadge(IconData icon, String label, {bool isSuccess = false}) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: isSuccess ? const Color(0xFFD1FAE5) : const Color(0xFFFAF0E8),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(
          color: isSuccess ? const Color(0xFFA7F3D0) : const Color(0xFFEBD7CA),
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 11, color: isSuccess ? const Color(0xFF065F46) : _primaryRust),
          const SizedBox(width: 4),
          Text(
            label,
            style: TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.bold,
              color: isSuccess ? const Color(0xFF065F46) : const Color(0xFF3D2C22),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAIIntroCard() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFF6EE),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFF7DEC9)),
      ),
      padding: const EdgeInsets.all(12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(6),
            decoration: BoxDecoration(
              color: const Color(0xFFFCE9DB),
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Icon(Icons.auto_awesome, size: 16, color: _primaryRust),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'AI–Assisted Craft Comparison',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w900,
                    color: _primaryRust,
                  ),
                ),
                SizedBox(height: 2),
                Text(
                  "We've organized the available cluster information side-by-side to help you evaluate artisan capacity. You make the final choice.",
                  style: TextStyle(fontSize: 10.5, color: Color(0xFF5A483E), height: 1.35),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSelectionHeader() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children: [
            Container(
              width: 8,
              height: 8,
              decoration: const BoxDecoration(
                color: _primaryRust,
                shape: BoxShape.circle,
              ),
            ),
            const SizedBox(width: 6),
            const Text(
              '2 Craft Makers Selected for Evaluation',
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
          ],
        ),
        InkWell(
          onTap: () => _showNotification('Opening selection sheet'),
          child: const Text(
            'Change Selection >',
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.bold,
              color: _primaryRust,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildDualArtisanCards() {
    return Row(
      children: [
        Expanded(
          child: _buildMiniArtisanCard(
            name: 'Ramesh Kumar',
            title: 'Master Craftsman',
            badge: 'GI Craft',
            badgeColor: const Color(0xFF065F46),
            badgeBg: const Color(0xFFD1FAE5),
            location: 'Barpeta, Assam • GI Cl...',
            photoUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80',
            voiceTime: '0:42',
          ),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: _buildMiniArtisanCard(
            name: 'Biren Das',
            title: 'Guild President',
            badge: 'Guild Lead',
            badgeColor: const Color(0xFF92400E),
            badgeBg: const Color(0xFFFEF3C7),
            location: 'Cachar, Assam • Silchar...',
            photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
            voiceTime: '0:35',
          ),
        ),
      ],
    );
  }

  Widget _buildMiniArtisanCard({
    required String name,
    required String title,
    required String badge,
    required Color badgeColor,
    required Color badgeBg,
    required String location,
    required String photoUrl,
    required String voiceTime,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: Image.network(
                  photoUrl,
                  width: 36,
                  height: 36,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 1.5),
                      decoration: BoxDecoration(
                        color: badgeBg,
                        borderRadius: BorderRadius.circular(6),
                      ),
                      child: Text(
                        badge,
                        style: TextStyle(fontSize: 8.5, fontWeight: FontWeight.bold, color: badgeColor),
                      ),
                    ),
                    const SizedBox(height: 2),
                    Text(
                      name,
                      style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: _textDark),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            title,
            style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: _primaryRust),
          ),
          Text(
            location,
            style: const TextStyle(fontSize: 9.5, color: _textMuted),
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
          ),
          const SizedBox(height: 8),
          InkWell(
            onTap: () => _showNotification('Playing audio for $name'),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                color: const Color(0xFFFAF0E7),
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: const Color(0xFFEBD7C9)),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.volume_up, size: 12, color: _primaryRust),
                  const SizedBox(width: 4),
                  Text(
                    'Craft Voice Note $voiceTime',
                    style: const TextStyle(fontSize: 9, fontWeight: FontWeight.bold, color: _primaryRust),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildComparisonMatrix() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
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
                'DIRECT ATTRIBUTE\nCOMPARISON',
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w900,
                  color: _textDark,
                  letterSpacing: 0.5,
                  height: 1.2,
                ),
              ),
              Text(
                'Self–reported & Verified\nData',
                textAlign: TextAlign.right,
                style: TextStyle(fontSize: 9.5, color: _textMuted, height: 1.2),
              ),
            ],
          ),
          const SizedBox(height: 12),
          const Divider(height: 1, color: Color(0xFFF3E7DC)),
          const SizedBox(height: 12),

          // Price Guidance
          _buildMatrixHeader('PRICE GUIDANCE', icon: Icons.currency_rupee, hasInfo: true),
          const SizedBox(height: 6),
          Row(
            children: [
              Expanded(
                child: _buildPriceBox('₹350 – ₹390', 'per finished piece'),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _buildPriceBox('₹360 – ₹410', 'per finished piece'),
              ),
            ],
          ),
          const SizedBox(height: 4),
          const Text(
            'Price guidance is indicative and finalized upon mutual agreement with craft maker.',
            style: TextStyle(fontSize: 9, color: _textMuted, fontStyle: FontStyle.italic),
          ),
          const SizedBox(height: 14),

          // Monthly Capacity
          _buildMatrixHeader('MONTHLY CAPACITY', icon: Icons.inventory_2_outlined),
          const SizedBox(height: 6),
          Row(
            children: [
              Expanded(child: _buildAttributeText('500 – 800', 'pieces / month')),
              const SizedBox(width: 8),
              Expanded(child: _buildAttributeText('350 – 500', 'pieces / month')),
            ],
          ),
          const SizedBox(height: 14),

          // Capacity Fit
          _buildMatrixHeader('CAPACITY FIT FOR 500 PCS REQUIREMENT', icon: Icons.fact_check_outlined),
          const SizedBox(height: 6),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: _buildCapacityFitBadge('✓ Can comfortably\naccommodate 500 pcs\nbatch'),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _buildCapacityFitBadge('✓ Can accommodate\nup to 500 pcs batch'),
              ),
            ],
          ),
          const SizedBox(height: 14),

          // Mastery & Lineage
          _buildMatrixHeader('MASTERY & CRAFT LINEAGE', icon: Icons.workspace_premium_outlined),
          const SizedBox(height: 6),
          Row(
            children: [
              Expanded(child: _buildAttributeText('28 yrs', 'Generational artisan family')),
              const SizedBox(width: 8),
              Expanded(child: _buildAttributeText('24 yrs', 'Guild master certified')),
            ],
          ),
          const SizedBox(height: 14),

          // Cluster Location
          _buildMatrixHeader('CLUSTER LOCATION', icon: Icons.map_outlined),
          const SizedBox(height: 6),
          Row(
            children: [
              Expanded(child: _buildAttributeText('Barpeta, Assam', 'Brahmaputra Valley Cane Belt')),
              const SizedBox(width: 8),
              Expanded(child: _buildAttributeText('Cachar, Assam', 'Barak Valley Guild Center')),
            ],
          ),
          const SizedBox(height: 14),

          // Technique Specialization
          _buildMatrixHeader('TECHNIQUE SPECIALIZATION', icon: Icons.brush_outlined),
          const SizedBox(height: 6),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: _buildAttributeText(
                  'Double-rim bamboo fruit baskets',
                  'Smoke-seasoned split bamboo weaving',
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _buildAttributeText(
                  'Natural bamboo storage baskets',
                  'Structural woven joinery with braided tops',
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),

          // Verified Guild Standards
          _buildMatrixHeader('VERIFIED GUILD STANDARDS', icon: Icons.assignment_turned_in_outlined),
          const SizedBox(height: 6),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    _StandardCheck('Seasoned bamboo stock ready'),
                    _StandardCheck('Double-rim finish certified'),
                    _StandardCheck('Historical 99% dispatch punctuality'),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: const [
                    _StandardCheck('Export documented quality standard'),
                    _StandardCheck('Natural smoke kiln treatment'),
                    _StandardCheck('Fair-trade cooperative affiliate'),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildMatrixHeader(String title, {required IconData icon, bool hasInfo = false}) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children: [
            Icon(icon, size: 13, color: _primaryRust),
            const SizedBox(width: 4),
            Text(
              title,
              style: const TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.w900,
                color: _textMuted,
                letterSpacing: 0.5,
              ),
            ),
          ],
        ),
        if (hasInfo) const Icon(Icons.info_outline, size: 13, color: _textMuted),
      ],
    );
  }

  Widget _buildPriceBox(String price, String sub) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 10),
      decoration: BoxDecoration(
        color: const Color(0xFFFFF7F2),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFFF5E0D2)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            price,
            style: const TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w900,
              color: _primaryRust,
            ),
          ),
          Text(sub, style: const TextStyle(fontSize: 9, color: _textMuted)),
        ],
      ),
    );
  }

  Widget _buildAttributeText(String title, String subtitle) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w900, color: _textDark),
        ),
        const SizedBox(height: 2),
        Text(
          subtitle,
          style: const TextStyle(fontSize: 10, color: _textMuted, height: 1.25),
        ),
      ],
    );
  }

  Widget _buildCapacityFitBadge(String text) {
    return Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: const Color(0xFFD1FAE5),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFFA7F3D0)),
      ),
      child: Text(
        text,
        style: const TextStyle(
          fontSize: 9.5,
          fontWeight: FontWeight.bold,
          color: Color(0xFF065F46),
          height: 1.25,
        ),
      ),
    );
  }

  Widget _buildHighlightsSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: const [
            Icon(Icons.trending_up, size: 16, color: _primaryRust),
            SizedBox(width: 6),
            Text(
              'What Stands Out for Your Requirement',
              style: TextStyle(
                fontSize: 13,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
          ],
        ),
        const SizedBox(height: 10),

        // Ramesh Highlight Card
        Container(
          decoration: BoxDecoration(
            color: const Color(0xFFFFF9F5),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: const Color(0xFFF3DEC8)),
          ),
          padding: const EdgeInsets.all(12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: const BoxDecoration(
                          color: _primaryRust,
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 6),
                      const Text(
                        'Ramesh Kumar Profile',
                        style: TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.w900,
                          color: _textDark,
                        ),
                      ),
                    ],
                  ),
                  const Text(
                    'Barpeta Cluster',
                    style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: _primaryRust),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              const _HighlightCheck('Higher stated monthly headroom (500–800 pcs) providing buffer for volume spikes.'),
              const _HighlightCheck('28 years of master experience in specialized double-rim reinforced spec.'),
              const _HighlightCheck('Indicative price guidance starting at ₹350 / pc within your ₹380 budget.'),
              const SizedBox(height: 10),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () => widget.onSelectArtisan != null ? widget.onSelectArtisan!('ramesh') : null,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: _primaryRust,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    elevation: 0,
                  ),
                  child: const Text('Choose Ramesh', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w900)),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 12),

        // Biren Highlight Card
        Container(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: _borderSubtle),
          ),
          padding: const EdgeInsets.all(12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: const BoxDecoration(
                          color: Color(0xFF92400E),
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 6),
                      const Text(
                        'Biren Das Profile',
                        style: TextStyle(
                          fontSize: 13,
                          fontWeight: FontWeight.w900,
                          color: _textDark,
                        ),
                      ),
                    ],
                  ),
                  const Text(
                    'Silchar Guild',
                    style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Color(0xFF92400E)),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              const _HighlightCheck('Documented export testing protocols and fair-trade cooperative standardization.'),
              const _HighlightCheck('Dedicated natural smoke treatment kiln ensuring consistent pest resistance.'),
              const _HighlightCheck('Indicative price guidance starting at ₹360 / pc with 24 yrs guild oversight.'),
              const SizedBox(height: 10),
              SizedBox(
                width: double.infinity,
                child: OutlinedButton(
                  onPressed: () => widget.onSelectArtisan != null ? widget.onSelectArtisan!('biren') : null,
                  style: OutlinedButton.styleFrom(
                    foregroundColor: _textDark,
                    side: const BorderSide(color: Color(0xFFDFC8BA)),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    padding: const EdgeInsets.symmetric(vertical: 10),
                  ),
                  child: const Text('Choose Biren', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 8),
        const Text(
          'These observations are compiled from verified cluster records. Please discuss final price, packaging specifications, and delivery logistics directly with the artisan.',
          style: TextStyle(fontSize: 9.5, color: _textMuted, height: 1.3),
        ),
      ],
    );
  }

  Widget _buildVoiceAssistantBox() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFAF2EB),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFFE8D4C5)),
      ),
      padding: const EdgeInsets.all(12),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'Need help deciding?',
                  style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, color: _textDark),
                ),
                SizedBox(height: 2),
                Text(
                  'Ask the craft assistant via voice in Hindi, Assamese, or English.',
                  style: TextStyle(fontSize: 10, color: _textMuted),
                ),
              ],
            ),
          ),
          InkWell(
            onTap: () => _showNotification('Voice assistant listening...'),
            child: Container(
              width: 36,
              height: 36,
              decoration: const BoxDecoration(
                color: _primaryRust,
                shape: BoxShape.circle,
              ),
              child: const Icon(Icons.mic, color: Colors.white, size: 18),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildActionButtons() {
    return Row(
      children: [
        Expanded(
          child: OutlinedButton.icon(
            onPressed: widget.onMessageArtisans,
            icon: const Icon(Icons.chat_bubble_outline, size: 14),
            label: const Text('Message Craft Makers', style: TextStyle(fontSize: 11)),
            style: OutlinedButton.styleFrom(
              foregroundColor: _textDark,
              side: const BorderSide(color: Color(0xFFDFC8BA)),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              padding: const EdgeInsets.symmetric(vertical: 12),
            ),
          ),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: ElevatedButton.icon(
            onPressed: () => widget.onSelectArtisan != null ? widget.onSelectArtisan!('ramesh') : null,
            icon: const Icon(Icons.check, size: 14),
            label: const Text('Select Craft Maker', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900)),
            style: ElevatedButton.styleFrom(
              backgroundColor: _primaryRust,
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              padding: const EdgeInsets.symmetric(vertical: 12),
              elevation: 0,
            ),
          ),
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

class _StandardCheck extends StatelessWidget {
  final String text;
  const _StandardCheck(this.text);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Icon(Icons.check, size: 12, color: Color(0xFF10B981)),
          const SizedBox(width: 4),
          Expanded(
            child: Text(
              text,
              style: const TextStyle(fontSize: 10, color: Color(0xFF4A382D), height: 1.25),
            ),
          ),
        ],
      ),
    );
  }
}

class _HighlightCheck extends StatelessWidget {
  final String text;
  const _HighlightCheck(this.text);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 4),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Icon(Icons.check_circle_outline, size: 13, color: Color(0xFF10B981)),
          const SizedBox(width: 6),
          Expanded(
            child: Text(
              text,
              style: const TextStyle(fontSize: 10.5, color: Color(0xFF3D2C22), height: 1.3),
            ),
          ),
        ],
      ),
    );
  }
}
