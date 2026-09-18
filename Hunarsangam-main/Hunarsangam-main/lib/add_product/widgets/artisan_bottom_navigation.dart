// lib/add_product/widgets/artisan_bottom_navigation.dart

import 'package:flutter/material.dart';

class ArtisanBottomNavigation extends StatelessWidget {
  final int currentIndex;
  final ValueChanged<int>? onTap;

  const ArtisanBottomNavigation({
    super.key,
    this.currentIndex = 1, // Products tab active by default
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFFDFB),
        border: const Border(
          top: BorderSide(color: Color(0xFFEADFD6), width: 1.0),
        ),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF7C3F24).withValues(alpha: 0.05),
            offset: const Offset(0, -2),
            blurRadius: 8.0,
          ),
        ],
      ),
      padding: const EdgeInsets.symmetric(vertical: 6.0),
      child: SafeArea(
        top: false,
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            _buildNavItem(
              index: 0,
              icon: Icons.storefront_outlined,
              selectedIcon: Icons.storefront_rounded,
              label: 'Home',
            ),
            _buildNavItem(
              index: 1,
              icon: Icons.palette_outlined,
              selectedIcon: Icons.palette_rounded,
              label: 'Products',
            ),
            _buildNavItem(
              index: 2,
              icon: Icons.assignment_outlined,
              selectedIcon: Icons.assignment_rounded,
              label: 'Orders',
            ),
            _buildNavItem(
              index: 3,
              icon: Icons.groups_outlined,
              selectedIcon: Icons.groups_rounded,
              label: 'Collaborate',
            ),
            _buildNavItem(
              index: 4,
              icon: Icons.person_outline_rounded,
              selectedIcon: Icons.person_rounded,
              label: 'Profile',
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildNavItem({
    required int index,
    required IconData icon,
    required IconData selectedIcon,
    required String label,
  }) {
    final bool isSelected = currentIndex == index;

    return GestureDetector(
      onTap: () => onTap?.call(index),
      behavior: HitTestBehavior.opaque,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 4.0),
        decoration: BoxDecoration(
          color: isSelected ? const Color(0xFFFFE8DC) : Colors.transparent,
          borderRadius: BorderRadius.circular(20.0),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              isSelected ? selectedIcon : icon,
              color: isSelected ? const Color(0xFF8C3A16) : const Color(0xFF6B584E),
              size: 22.0,
            ),
            const SizedBox(height: 2.0),
            Text(
              label,
              style: TextStyle(
                fontSize: 10.5,
                fontWeight: isSelected ? FontWeight.w800 : FontWeight.w500,
                color: isSelected ? const Color(0xFF8C3A16) : const Color(0xFF6B584E),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
