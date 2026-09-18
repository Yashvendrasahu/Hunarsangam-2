// lib/screens/buyer_matched_artisans_screen.dart

import 'package:flutter/material.dart';

/// Screen: Matched Artisans (r6-bulk — Artisan Match & Comparison.png)
/// AI-Assisted Artisan Matching, Selection & Comparison Hub
class BuyerMatchedArtisansScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onCompare;
  final Function(String artisanId)? onViewArtisan;
  final VoidCallback? onOpenRequirements;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onOpenHome;

  const BuyerMatchedArtisansScreen({
    super.key,
    this.onBack,
    this.onCompare,
    this.onViewArtisan,
    this.onOpenRequirements,
    this.onOpenDiscover,
    this.onOpenHome,
  });

  @override
  State<BuyerMatchedArtisansScreen> createState() => _BuyerMatchedArtisansScreenState();
}

class _BuyerMatchedArtisansScreenState extends State<BuyerMatchedArtisansScreen> {
  int _activeFilter = 0; // 0: All Matches (6), 1: GI Certified (4), 2: Under ₹400
  final Set<String> _selectedForCompare = {'ramesh', 'biren'};

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

  void _toggleCompare(String id) {
    setState(() {
      if (_selectedForCompare.contains(id)) {
        _selectedForCompare.remove(id);
      } else {
        _selectedForCompare.add(id);
      }
    });
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
                    _buildRequirementHeroBanner(),
                    const SizedBox(height: 12),
                    _buildFilterTabs(),
                    const SizedBox(height: 14),
                    _buildRameshCard(),
                    const SizedBox(height: 16),
                    _buildBirenCard(),
                    const SizedBox(height: 16),
                    _buildSunitaCard(),
                    const SizedBox(height: 80), // bottom bar spacing
                  ],
                ),
              ),
            ),
            if (_selectedForCompare.isNotEmpty) _buildComparisonBar(),
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
              'Matched Artisans',
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
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
                Icon(Icons.translate, size: 14, color: _primaryRust),
                SizedBox(width: 4),
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
            onPressed: () => _showNotification('Filter options opened'),
          ),
        ],
      ),
    );
  }

  Widget _buildRequirementHeroBanner() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFF7F2),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFFF7DEC9)),
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(
                  color: const Color(0xFFFDECE0),
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: const Color(0xFFF3D2BA)),
                ),
                child: Row(
                  children: const [
                    Icon(Icons.auto_awesome, size: 12, color: _primaryRust),
                    SizedBox(width: 4),
                    Text(
                      'AI–Assisted Matching for Your Requirement',
                      style: TextStyle(
                        fontSize: 10,
                        fontWeight: FontWeight.w900,
                        color: _primaryRust,
                      ),
                    ),
                  ],
                ),
              ),
              InkWell(
                onTap: () => _showNotification('Opening requirement details'),
                child: const Icon(Icons.open_in_new, size: 14, color: _textMuted),
              ),
            ],
          ),
          const SizedBox(height: 8),
          const Text(
            '500 Handwoven\nBamboo Baskets',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w900,
              color: _textDark,
              height: 1.2,
            ),
          ),
          const SizedBox(height: 6),
          Row(
            children: const [
              Icon(Icons.account_balance_wallet_outlined, size: 13, color: _primaryRust),
              SizedBox(width: 4),
              Text(
                'Target: ₹380/pc',
                style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: _textDark),
              ),
              SizedBox(width: 10),
              Icon(Icons.calendar_today_outlined, size: 13, color: _primaryRust),
              SizedBox(width: 4),
              Text(
                'By Oct 28',
                style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: _textDark),
              ),
            ],
          ),
          const SizedBox(height: 2),
          const Text(
            'Requirement ID: #HS-BKT-892',
            style: TextStyle(fontSize: 10, color: _textMuted),
          ),
          const SizedBox(height: 10),
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: const Color(0xFFFAF0E6),
              borderRadius: BorderRadius.circular(10),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Icon(Icons.info_outline, size: 14, color: _primaryRust),
                SizedBox(width: 6),
                Expanded(
                  child: Text(
                    'AI-assisted suggestions based on craft specialty, monthly capacity & delivery timeline. You make the final choice.',
                    style: TextStyle(fontSize: 10, color: Color(0xFF5A483E), height: 1.3),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFilterTabs() {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      physics: const BouncingScrollPhysics(),
      child: Row(
        children: [
          _buildFilterChip(0, 'All Matches (6)'),
          const SizedBox(width: 8),
          _buildFilterChip(1, '✓ GI Certified (4)'),
          const SizedBox(width: 8),
          _buildFilterChip(2, 'Under ₹400'),
        ],
      ),
    );
  }

  Widget _buildFilterChip(int index, String label) {
    final isActive = _activeFilter == index;
    return InkWell(
      onTap: () => setState(() => _activeFilter = index),
      borderRadius: BorderRadius.circular(20),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
        decoration: BoxDecoration(
          color: isActive ? _primaryRust : const Color(0xFFFAF2EB),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: isActive ? _primaryRust : const Color(0xFFE5D5C8),
          ),
        ),
        child: Text(
          label,
          style: TextStyle(
            fontSize: 11,
            fontWeight: FontWeight.bold,
            color: isActive ? Colors.white : const Color(0xFF4A382D),
          ),
        ),
      ),
    );
  }

  Widget _buildRameshCard() {
    final isSelected = _selectedForCompare.contains('ramesh');
    return _buildArtisanCard(
      id: 'ramesh',
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      badgeTag: 'GI Lead',
      badgeColor: const Color(0xFF065F46),
      badgeBg: const Color(0xFFD1FAE5),
      name: 'Ramesh Kumar',
      roleBadge: 'Master Craftsman',
      roleBadgeBg: const Color(0xFFA7F3D0),
      location: 'Barpeta, Assam • GI Cluster Lead',
      priceText: '₹350 – ₹390',
      monthlyCapacity: '500 – 800 pcs/mo',
      experience: '28 yrs experience',
      bullets: [
        'Specializes in double–rim bamboo baskets',
        'Has ready bamboo seasoned stock',
        'Historical 99% on-time dispatch rate',
      ],
      isSelected: isSelected,
      onToggleCompare: () => _toggleCompare('ramesh'),
      onViewArtisan: () => widget.onViewArtisan != null ? widget.onViewArtisan!('ramesh') : null,
    );
  }

  Widget _buildBirenCard() {
    final isSelected = _selectedForCompare.contains('biren');
    return _buildArtisanCard(
      id: 'biren',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      badgeTag: 'Guild Lead',
      badgeColor: const Color(0xFF92400E),
      badgeBg: const Color(0xFFFEF3C7),
      name: 'Biren Das',
      roleBadge: 'Guild President',
      roleBadgeBg: const Color(0xFFFDE68A),
      location: 'Cachar, Assam • Silchar Bamboo Guild',
      priceText: '₹360 – ₹410',
      monthlyCapacity: '350 – 500 pcs/mo',
      experience: '24 yrs experience',
      bullets: [
        'Export documented & tested quality standard',
        'Natural smoke treatment certified against pests',
      ],
      isSelected: isSelected,
      onToggleCompare: () => _toggleCompare('biren'),
      onViewArtisan: () => widget.onViewArtisan != null ? widget.onViewArtisan!('biren') : null,
    );
  }

  Widget _buildSunitaCard() {
    final isSelected = _selectedForCompare.contains('sunita');
    return _buildArtisanCard(
      id: 'sunita',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      badgeTag: 'Women SHG',
      badgeColor: const Color(0xFF065F46),
      badgeBg: const Color(0xFFD1FAE5),
      name: 'Sunita Devi',
      roleBadge: 'Cooperative Lead',
      roleBadgeBg: const Color(0xFFA7F3D0),
      location: 'Barpeta Women SHG • 42 Artisan Weavers',
      priceText: '₹340 – ₹380',
      monthlyCapacity: '400 pcs/mo',
      experience: '18 – 22 Days',
      isLeadTime: true,
      bullets: [
        'High capacity organic weaving & split cane processing',
        'Fair wage certified cooperative enterprise',
      ],
      isSelected: isSelected,
      onToggleCompare: () => _toggleCompare('sunita'),
      onViewArtisan: () => widget.onViewArtisan != null ? widget.onViewArtisan!('sunita') : null,
    );
  }

  Widget _buildArtisanCard({
    required String id,
    required String imageUrl,
    required String badgeTag,
    required Color badgeColor,
    required Color badgeBg,
    required String name,
    required String roleBadge,
    required Color roleBadgeBg,
    required String location,
    required String priceText,
    required String monthlyCapacity,
    required String experience,
    bool isLeadTime = false,
    required List<String> bullets,
    required bool isSelected,
    required VoidCallback onToggleCompare,
    required VoidCallback onViewArtisan,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: _borderSubtle, width: 1.5),
      ),
      padding: const EdgeInsets.all(12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Photo with tags
          Stack(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(16),
                child: Image.network(
                  imageUrl,
                  height: 170,
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              Positioned(
                top: 10,
                left: 10,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(
                    color: badgeBg,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Row(
                    children: [
                      Icon(Icons.verified, size: 12, color: badgeColor),
                      const SizedBox(width: 4),
                      Text(
                        badgeTag,
                        style: TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          color: badgeColor,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Positioned(
                bottom: 8,
                left: 10,
                right: 10,
                child: InkWell(
                  onTap: () => _showNotification('Playing audio voice note for $name'),
                  child: Container(
                    padding: const EdgeInsets.symmetric(vertical: 6),
                    decoration: BoxDecoration(
                      color: Colors.black.withOpacity(0.65),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Icon(Icons.volume_up, size: 14, color: Colors.white),
                        SizedBox(width: 6),
                        Text(
                          'Craft Voice Note',
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Name and Price
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      name,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w900,
                        color: _textDark,
                      ),
                    ),
                    const SizedBox(height: 2),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(
                        color: roleBadgeBg,
                        borderRadius: BorderRadius.circular(6),
                      ),
                      child: Text(
                        roleBadge,
                        style: const TextStyle(
                          fontSize: 9,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF065F46),
                        ),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Row(
                      children: [
                        const Icon(Icons.location_on, size: 12, color: _primaryRust),
                        const SizedBox(width: 4),
                        Expanded(
                          child: Text(
                            location,
                            style: const TextStyle(fontSize: 10, color: _textMuted),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  const Text(
                    'Price Guidance',
                    style: TextStyle(fontSize: 9, color: _textMuted, fontWeight: FontWeight.w600),
                  ),
                  Text(
                    priceText,
                    style: const TextStyle(
                      fontSize: 15,
                      fontWeight: FontWeight.w900,
                      color: _primaryRust,
                    ),
                  ),
                  const Text(
                    '/ piece',
                    style: TextStyle(fontSize: 9, color: _textMuted),
                  ),
                ],
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Stats Box
          Row(
            children: [
              Expanded(
                child: Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAF2EB),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Monthly Capacity',
                        style: TextStyle(fontSize: 9, color: _textMuted),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        monthlyCapacity,
                        style: const TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w900,
                          color: _textDark,
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
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        isLeadTime ? 'Batch Delivery Time' : 'Mastery & Experience',
                        style: const TextStyle(fontSize: 9, color: _textMuted),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        experience,
                        style: const TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w900,
                          color: _textDark,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),

          // Bullets
          ...bullets.map((b) => Padding(
                padding: const EdgeInsets.only(bottom: 4),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Icon(Icons.check_circle, size: 12, color: Color(0xFF10B981)),
                    const SizedBox(width: 6),
                    Expanded(
                      child: Text(
                        b,
                        style: const TextStyle(fontSize: 11, color: Color(0xFF3B2A22)),
                      ),
                    ),
                  ],
                ),
              )),
          const SizedBox(height: 12),

          // Action Buttons
          Row(
            children: [
              InkWell(
                onTap: onToggleCompare,
                borderRadius: BorderRadius.circular(8),
                child: Row(
                  children: [
                    Checkbox(
                      value: isSelected,
                      activeColor: _primaryRust,
                      onChanged: (_) => onToggleCompare(),
                      materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                    ),
                    const Text(
                      'Compare',
                      style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: _textDark),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: OutlinedButton(
                  onPressed: () => _showNotification('Sample requested from $name'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: _textDark,
                    side: const BorderSide(color: Color(0xFFDFC8BA)),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    padding: const EdgeInsets.symmetric(vertical: 8),
                  ),
                  child: const Text(
                    'Request\nSample',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, height: 1.1),
                  ),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: ElevatedButton(
                  onPressed: onViewArtisan,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: _primaryRust,
                    foregroundColor: Colors.white,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    elevation: 0,
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Text(
                        'View\nArtisan',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, height: 1.1),
                      ),
                      SizedBox(width: 2),
                      Icon(Icons.chevron_right, size: 14),
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

  Widget _buildComparisonBar() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFBEFE6),
        border: Border.all(color: const Color(0xFFF2D7C2)),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.06),
            blurRadius: 10,
            offset: const Offset(0, -2),
          ),
        ],
      ),
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
      child: Row(
        children: [
          Container(
            width: 28,
            height: 28,
            decoration: const BoxDecoration(
              color: _primaryRust,
              shape: BoxShape.circle,
            ),
            alignment: Alignment.center,
            child: Text(
              '${_selectedForCompare.length}',
              style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w900, color: Colors.white),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  '${_selectedForCompare.length} Artisans selected for side-by-side comparison',
                  style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w900, color: _textDark),
                ),
                Text(
                  _selectedForCompare.contains('ramesh') && _selectedForCompare.contains('biren')
                      ? 'Ramesh Kumar & Biren Das'
                      : 'Selected artisan clusters',
                  style: const TextStyle(fontSize: 10, color: _textMuted),
                ),
              ],
            ),
          ),
          ElevatedButton.icon(
            onPressed: widget.onCompare,
            icon: const Icon(Icons.compare_arrows, size: 14),
            label: Text(
              'Compare\nArtisans (${_selectedForCompare.length})',
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w900, height: 1.1),
            ),
            style: ElevatedButton.styleFrom(
              backgroundColor: _primaryRust,
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
              elevation: 0,
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
