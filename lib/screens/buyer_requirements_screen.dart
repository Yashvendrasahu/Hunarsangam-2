// lib/screens/buyer_requirements_screen.dart

import 'package:flutter/material.dart';

/// Screen: My Requirements Section (r1 - bulk - requriment section.png)
/// 100% UI Match to r1
class BuyerRequirementsScreen extends StatefulWidget {
  final VoidCallback? onBackToHome;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onCreateRequirement;
  final Function(String)? onSelectRequirement;
  final VoidCallback? onOpenOrders;
  final VoidCallback? onOpenProfile;

  const BuyerRequirementsScreen({
    super.key,
    this.onBackToHome,
    this.onOpenDiscover,
    this.onCreateRequirement,
    this.onSelectRequirement,
    this.onOpenOrders,
    this.onOpenProfile,
  });

  @override
  State<BuyerRequirementsScreen> createState() => _BuyerRequirementsScreenState();
}

class _BuyerRequirementsScreenState extends State<BuyerRequirementsScreen> {
  int _currentNavIndex = 2; // 0: Home, 1: Discover, 2: Requirement, 3: Orders, 4: Profile

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
            _buildTopAppBar(),
            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildHeroAddRequirementCard(),
                    const SizedBox(height: 20),
                    _buildPreviousRequirementsHeader(),
                    const SizedBox(height: 12),
                    _buildRequirementCard1(),
                    const SizedBox(height: 14),
                    _buildRequirementCard2(),
                    const SizedBox(height: 14),
                    _buildRequirementCard3(),
                    const SizedBox(height: 24),
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

  Widget _buildTopAppBar() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: const [
              Text(
                'My Requirements',
                style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.w900,
                  color: _textDark,
                  letterSpacing: -0.5,
                ),
              ),
              SizedBox(height: 2),
              Text(
                'Manage your bulk sourcing requirements',
                style: TextStyle(
                  fontSize: 12,
                  color: _textMuted,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ],
          ),
          Row(
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                decoration: BoxDecoration(
                  color: const Color(0xFFF5ECE5),
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: const Color(0xFFE7D6C8)),
                ),
                child: Row(
                  children: const [
                    Text(
                      'EN',
                      style: TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF4A382D),
                      ),
                    ),
                    SizedBox(width: 4),
                    Icon(Icons.arrow_drop_down, size: 16, color: Color(0xFF4A382D)),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Stack(
                children: [
                  Container(
                    width: 36,
                    height: 36,
                    decoration: BoxDecoration(
                      color: const Color(0xFFF5ECE5),
                      shape: BoxShape.circle,
                      border: Border.all(color: const Color(0xFFE7D6C8)),
                    ),
                    child: const Icon(Icons.notifications_none, size: 20, color: Color(0xFF4A382D)),
                  ),
                  Positioned(
                    top: 6,
                    right: 6,
                    child: Container(
                      width: 8,
                      height: 8,
                      decoration: const BoxDecoration(
                        color: Color(0xFFD9531E),
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

  Widget _buildHeroAddRequirementCard() {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(24),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFFB3451B), Color(0xFF8E300E)],
        ),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF9C3C18).withOpacity(0.25),
            blurRadius: 16,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header Row
          Row(
            children: [
              Container(
                width: 38,
                height: 38,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: Colors.white.withOpacity(0.15),
                  border: Border.all(color: Colors.white.withOpacity(0.3)),
                ),
                child: const Icon(Icons.add, color: Colors.white, size: 22),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Add New Requirement',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w900,
                        color: Colors.white,
                      ),
                    ),
                    Text(
                      'Create a new bulk sourcing requirement',
                      style: TextStyle(
                        fontSize: 11,
                        color: Colors.white.withOpacity(0.8),
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),

          // Speak your requirement box
          InkWell(
            onTap: widget.onCreateRequirement,
            borderRadius: BorderRadius.circular(16),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              decoration: BoxDecoration(
                color: Colors.black.withOpacity(0.2),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: Colors.white.withOpacity(0.15)),
              ),
              child: Row(
                children: [
                  Icon(Icons.mic, color: Colors.white.withOpacity(0.9), size: 18),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Speak your requirement',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 12,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        Text(
                          '"Mujhe 500 handmade terracotta cups c..."',
                          style: TextStyle(
                            color: Colors.white.withOpacity(0.7),
                            fontSize: 11,
                            fontStyle: FontStyle.italic,
                          ),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ],
                    ),
                  ),
                  Container(
                    width: 32,
                    height: 32,
                    decoration: const BoxDecoration(
                      color: Colors.white,
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(Icons.graphic_eq, color: _primaryRust, size: 18),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 12),

          // Create Requirement Button
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: widget.onCreateRequirement,
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: const Color(0xFF8E300E),
                padding: const EdgeInsets.symmetric(vertical: 12),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                elevation: 0,
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.add, size: 18, color: Color(0xFF8E300E)),
                  SizedBox(width: 6),
                  Text(
                    'Create Requirement',
                    style: TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFF8E300E),
                    ),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 14),

          // Stepper bar
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _buildStepIcon(Icons.palette_outlined, 'Product'),
              Text('›', style: TextStyle(color: Colors.white.withOpacity(0.4))),
              _buildStepIcon(Icons.inventory_2_outlined, 'Quantity'),
              Text('›', style: TextStyle(color: Colors.white.withOpacity(0.4))),
              _buildStepIcon(Icons.calendar_today_outlined, 'Date'),
              Text('›', style: TextStyle(color: Colors.white.withOpacity(0.4))),
              _buildStepIcon(Icons.people_outline, 'Artisans'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildStepIcon(IconData icon, String label) {
    return Column(
      children: [
        Container(
          width: 28,
          height: 28,
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.18),
            shape: BoxShape.circle,
          ),
          child: Icon(icon, color: Colors.white, size: 14),
        ),
        const SizedBox(height: 4),
        Text(
          label,
          style: TextStyle(
            color: Colors.white.withOpacity(0.85),
            fontSize: 10,
            fontWeight: FontWeight.w500,
          ),
        ),
      ],
    );
  }

  Widget _buildPreviousRequirementsHeader() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children: [
            const Text(
              'Previous Requirements',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
            const SizedBox(width: 6),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
              decoration: BoxDecoration(
                color: const Color(0xFFEFE4DB),
                borderRadius: BorderRadius.circular(12),
              ),
              child: const Text(
                '3',
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w900,
                  color: Color(0xFF4A382D),
                ),
              ),
            ),
          ],
        ),
        InkWell(
          onTap: () => _showNotification('Filter & Sort applied'),
          borderRadius: BorderRadius.circular(12),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0xFFE3D4C8)),
            ),
            child: Row(
              children: const [
                Icon(Icons.tune, size: 14, color: _primaryRust),
                SizedBox(width: 4),
                Text(
                  'Filter & Sort',
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF4A382D),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildRequirementCard1() {
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
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.network(
                  'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=300&q=80',
                  width: 76,
                  height: 76,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Handmade Terracotta Cups',
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w900,
                        color: _textDark,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFEF3C7),
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: const Color(0xFFFDE68A)),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: const [
                          Icon(Icons.circle, size: 6, color: Color(0xFFD97706)),
                          SizedBox(width: 4),
                          Text(
                            'In Progress',
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFFB45309),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      '500 pieces • Req: 20 Oct 2026',
                      style: TextStyle(fontSize: 11, color: _textMuted),
                    ),
                    const Text(
                      'Target: ₹45/pc',
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w900,
                        color: _primaryRust,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          const Divider(height: 1, color: Color(0xFFF5ECE5)),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Row(
                children: [
                  Icon(Icons.verified_user_outlined, size: 14, color: Color(0xFF15803D)),
                  SizedBox(width: 4),
                  Text(
                    'Kutch Traditional Pottery Guild',
                    style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFF4A382D),
                    ),
                  ),
                ],
              ),
              Text(
                '65% completed',
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w900,
                  color: _primaryRust,
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          ClipRRect(
            borderRadius: BorderRadius.circular(4),
            child: LinearProgressIndicator(
              value: 0.65,
              backgroundColor: const Color(0xFFF0E6DF),
              valueColor: const AlwaysStoppedAnimation<Color>(Color(0xFFB3451B)),
              minHeight: 5,
            ),
          ),
          const SizedBox(height: 12),
          OutlinedButton(
            onPressed: () => widget.onSelectRequirement?.call('Handmade Terracotta Cups'),
            style: OutlinedButton.styleFrom(
              foregroundColor: _primaryRust,
              side: const BorderSide(color: Color(0xFFECD9CC)),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              minimumSize: const Size(double.infinity, 38),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                Text('View Details', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                SizedBox(width: 4),
                Icon(Icons.arrow_forward, size: 14),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRequirementCard2() {
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
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.network(
                  'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80',
                  width: 76,
                  height: 76,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Handwoven Cotton Tote Bags',
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w900,
                        color: _textDark,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFF7ED),
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: const Color(0xFFFFEDD5)),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: const [
                          Icon(Icons.access_time, size: 10, color: Color(0xFFC2410C)),
                          SizedBox(width: 4),
                          Text(
                            'Awaiting Response',
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFFC2410C),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      '200 pieces • Req: 5 Nov 2026',
                      style: TextStyle(fontSize: 11, color: _textMuted),
                    ),
                    const Text(
                      'Target: ₹180/pc',
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w900,
                        color: _primaryRust,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          const Divider(height: 1, color: Color(0xFFF5ECE5)),
          const SizedBox(height: 8),
          Row(
            children: const [
              Icon(Icons.people_outline, size: 14, color: _primaryRust),
              SizedBox(width: 6),
              Text(
                'Sent to 3 artisan clusters • 2 reviewing schedule',
                style: TextStyle(fontSize: 11, color: _textMuted),
              ),
            ],
          ),
          const SizedBox(height: 12),
          OutlinedButton(
            onPressed: () => widget.onSelectRequirement?.call('Handwoven Cotton Tote Bags'),
            style: OutlinedButton.styleFrom(
              foregroundColor: _primaryRust,
              side: const BorderSide(color: Color(0xFFECD9CC)),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              minimumSize: const Size(double.infinity, 38),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                Text('View Details', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                SizedBox(width: 4),
                Icon(Icons.arrow_forward, size: 14),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRequirementCard3() {
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
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.network(
                  'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=300&q=80',
                  width: 76,
                  height: 76,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'Traditional Wooden Desk Decor',
                      style: TextStyle(
                        fontSize: 14,
                        fontWeight: FontWeight.w900,
                        color: _textDark,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(
                        color: const Color(0xFFECFDF5),
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: const Color(0xFFA7F3D0)),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: const [
                          Icon(Icons.check_circle_outline, size: 10, color: Color(0xFF15803D)),
                          SizedBox(width: 4),
                          Text(
                            'Completed',
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFF15803D),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      '100 pieces • Delivered 15 Sep 2026',
                      style: TextStyle(fontSize: 11, color: _textMuted),
                    ),
                    const Text(
                      'Total: ₹42,000',
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFF047857),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: const Color(0xFFF0FDF4),
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: const Color(0xFFDCFCE7)),
            ),
            child: Row(
              children: const [
                Icon(Icons.local_shipping_outlined, size: 14, color: Color(0xFF15803D)),
                SizedBox(width: 6),
                Text(
                  'Delivered successfully to Mumbai warehouse',
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF065F46),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: OutlinedButton(
                  onPressed: () => widget.onSelectRequirement?.call('Traditional Wooden Desk Decor'),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: _primaryRust,
                    side: const BorderSide(color: Color(0xFFECD9CC)),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    minimumSize: const Size(0, 38),
                  ),
                  child: const Text('View Details', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: ElevatedButton.icon(
                  onPressed: widget.onCreateRequirement,
                  icon: const Icon(Icons.sync, size: 14, color: Color(0xFF8E300E)),
                  label: const Text(
                    '+ Create Similar',
                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, color: Color(0xFF8E300E)),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFFFEDE4),
                    elevation: 0,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    minimumSize: const Size(0, 38),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
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
          _buildNavItem(0, Icons.home_outlined, 'Home', onTap: widget.onBackToHome),
          _buildNavItem(1, Icons.explore_outlined, 'Discover', onTap: widget.onOpenDiscover),
          _buildNavItem(2, Icons.assignment, 'Requirement', isActive: true),
          _buildNavItem(3, Icons.local_shipping_outlined, 'Order', onTap: widget.onOpenOrders),
          _buildNavItem(4, Icons.person_outline, 'Profile', onTap: widget.onOpenProfile),
        ],
      ),
    );
  }

  Widget _buildNavItem(
    int index,
    IconData icon,
    String label, {
    bool isActive = false,
    VoidCallback? onTap,
  }) {
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
