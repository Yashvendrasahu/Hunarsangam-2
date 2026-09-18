// lib/screens/buyer_profile_screen.dart
// Production-grade Flutter screen matching 'bulk - profile section.png'
// Enterprise Buyer Profile with Organization details, Sourcing Preferences, Trust badges, and Settings

import 'package:flutter/material.dart';

class BuyerProfileScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onEditProfile;
  final VoidCallback? onEditDetails;
  final VoidCallback? onEditPreferences;
  final VoidCallback? onNotifications;
  final VoidCallback? onLanguage;
  final VoidCallback? onHelpSupport;
  final VoidCallback? onLogOut;
  final Function(int index)? onNavTap;

  const BuyerProfileScreen({
    super.key,
    this.onBack,
    this.onEditProfile,
    this.onEditDetails,
    this.onEditPreferences,
    this.onNotifications,
    this.onLanguage,
    this.onHelpSupport,
    this.onLogOut,
    this.onNavTap,
  });

  @override
  State<BuyerProfileScreen> createState() => _BuyerProfileScreenState();
}

class _BuyerProfileScreenState extends State<BuyerProfileScreen> {
  @override
  Widget build(BuildContext context) {
    const Color primaryRust = Color(0xFF9C3C18);
    const Color textDark = Color(0xFF1F1612);
    const Color textMuted = Color(0xFF7A6A60);
    const Color bgCanvas = Color(0xFFFCF9F6);
    const Color borderBeige = Color(0xFFF0DFD3);

    return Scaffold(
      backgroundColor: bgCanvas,
      appBar: AppBar(
        backgroundColor: bgCanvas,
        elevation: 0,
        scrolledUnderElevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: primaryRust),
          onPressed: widget.onBack ?? () => Navigator.of(context).maybePop(),
        ),
        title: const Text(
          'My Profile',
          style: TextStyle(
            color: textDark,
            fontWeight: FontWeight.w900,
            fontSize: 18,
          ),
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              children: [
                // 1. Enterprise Profile Header Card
                Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: borderBeige),
                    boxShadow: const [
                      BoxShadow(
                        color: Color(0x06000000),
                        blurRadius: 8,
                        offset: Offset(0, 2),
                      ),
                    ],
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            width: 60,
                            height: 60,
                            decoration: BoxDecoration(
                              color: const Color(0xFFF3E7DC),
                              borderRadius: BorderRadius.circular(16),
                              border: Border.all(color: const Color(0xFFE5D5C8)),
                            ),
                            child: const Center(
                              child: Text(
                                'CC',
                                style: TextStyle(
                                  color: Color(0xFF6B4226),
                                  fontWeight: FontWeight.w900,
                                  fontSize: 20,
                                ),
                              ),
                            ),
                          ),
                          const SizedBox(width: 14),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                const Text(
                                  'CraftHouse Collective',
                                  style: TextStyle(
                                    color: textDark,
                                    fontWeight: FontWeight.w900,
                                    fontSize: 16,
                                  ),
                                ),
                                const SizedBox(height: 2),
                                const Text(
                                  'Rahul Sharma',
                                  style: TextStyle(
                                    color: textMuted,
                                    fontSize: 12.5,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                                const SizedBox(height: 4),
                                Row(
                                  children: const [
                                    Icon(Icons.verified, size: 14, color: Color(0xFF065F46)),
                                    SizedBox(width: 3),
                                    Icon(Icons.location_on_outlined, size: 13, color: textMuted),
                                    SizedBox(width: 2),
                                    Text(
                                      'Indore, Madhya Pradesh',
                                      style: TextStyle(
                                        color: textMuted,
                                        fontSize: 11.5,
                                        fontWeight: FontWeight.w500,
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      Wrap(
                        spacing: 6,
                        runSpacing: 6,
                        children: [
                          _buildTag(label: 'Bulk Buyer', bg: const Color(0xFF9C3C18), textColor: Colors.white),
                          _buildTag(
                            label: '✓ Verified Enterprise',
                            bg: const Color(0xFFD1FAE5),
                            textColor: const Color(0xFF065F46),
                            borderColor: const Color(0xFFA7F3D0),
                          ),
                          _buildTag(
                            label: '🏪 Retail Chain',
                            bg: const Color(0xFFFAF2EB),
                            textColor: const Color(0xFF7A6A60),
                            borderColor: const Color(0xFFEADBCE),
                          ),
                        ],
                      ),
                      const SizedBox(height: 14),
                      const Divider(height: 1, color: Color(0xFFF3E7DC)),
                      const SizedBox(height: 12),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: const [
                          Text(
                            'Profile Status',
                            style: TextStyle(color: textDark, fontSize: 12, fontWeight: FontWeight.bold),
                          ),
                          Text(
                            '80% Complete',
                            style: TextStyle(color: primaryRust, fontSize: 12, fontWeight: FontWeight.w900),
                          ),
                        ],
                      ),
                      const SizedBox(height: 6),
                      ClipRRect(
                        borderRadius: BorderRadius.circular(4),
                        child: const LinearProgressIndicator(
                          value: 0.8,
                          minHeight: 6,
                          backgroundColor: Color(0xFFF0E5DC),
                          valueColor: AlwaysStoppedAnimation<Color>(primaryRust),
                        ),
                      ),
                      const SizedBox(height: 6),
                      Row(
                        children: const [
                          Icon(Icons.info_outline, size: 12, color: primaryRust),
                          SizedBox(width: 4),
                          Expanded(
                            child: Text(
                              'Add warehouse shipping pincodes to reach 100%',
                              style: TextStyle(color: textMuted, fontSize: 10.5),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 14),
                      SizedBox(
                        width: double.infinity,
                        child: OutlinedButton.icon(
                          onPressed: widget.onEditProfile ?? () {},
                          icon: const Icon(Icons.edit_outlined, size: 14),
                          label: const Text(
                            'Edit Profile',
                            style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                          ),
                          style: OutlinedButton.styleFrom(
                            foregroundColor: textDark,
                            side: const BorderSide(color: Color(0xFFDCC8BB)),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                            padding: const EdgeInsets.symmetric(vertical: 10),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 20),

                // 2. YOUR DETAILS SECTION
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text(
                          'Your Details',
                          style: TextStyle(color: textDark, fontWeight: FontWeight.w900, fontSize: 16),
                        ),
                        SizedBox(height: 1),
                        Text(
                          'Information from your business registration',
                          style: TextStyle(color: textMuted, fontSize: 11),
                        ),
                      ],
                    ),
                    GestureDetector(
                      onTap: widget.onEditDetails ?? () {},
                      child: Row(
                        children: const [
                          Icon(Icons.edit_outlined, size: 13, color: primaryRust),
                          SizedBox(width: 2),
                          Text(
                            'Edit',
                            style: TextStyle(color: primaryRust, fontSize: 12, fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),

                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: borderBeige),
                  ),
                  child: Column(
                    children: [
                      _buildDetailRow(
                        label: 'Full Name',
                        value: 'Rahul Sharma',
                        icon: Icons.person_outline,
                      ),
                      const Divider(height: 16, color: Color(0xFFF7ECE4)),
                      _buildDetailRow(
                        label: 'Mobile Number',
                        value: '+91 98260 41230',
                        verifiedBadge: true,
                        icon: Icons.phone_outlined,
                      ),
                      const Divider(height: 16, color: Color(0xFFF7ECE4)),
                      _buildDetailRow(
                        label: 'Work Email',
                        value: 'rahul.sharma@crafthouse.in',
                        icon: Icons.mail_outline,
                      ),
                      const Divider(height: 16, color: Color(0xFFF7ECE4)),
                      _buildDetailRow(
                        label: 'Business / Organization',
                        value: 'CraftHouse Collective',
                        icon: Icons.business_outlined,
                      ),
                      const Divider(height: 16, color: Color(0xFFF7ECE4)),
                      _buildDetailRow(
                        label: 'Business Type',
                        value: 'Home Décor & Lifestyle Retailer',
                        icon: Icons.storefront_outlined,
                      ),
                      const Divider(height: 16, color: Color(0xFFF7ECE4)),
                      _buildDetailRow(
                        label: 'GSTIN',
                        value: '23AAACH7409R1ZV',
                        verifiedBadge: true,
                        icon: Icons.badge_outlined,
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 20),

                // 3. SOURCING PREFERENCES
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text(
                          'Sourcing Preferences',
                          style: TextStyle(color: textDark, fontWeight: FontWeight.w900, fontSize: 16),
                        ),
                        SizedBox(height: 1),
                        Text(
                          'Your default wholesale criteria',
                          style: TextStyle(color: textMuted, fontSize: 11),
                        ),
                      ],
                    ),
                    GestureDetector(
                      onTap: widget.onEditPreferences ?? () {},
                      child: Row(
                        children: const [
                          Icon(Icons.edit_outlined, size: 13, color: primaryRust),
                          SizedBox(width: 2),
                          Text(
                            'Edit',
                            style: TextStyle(color: primaryRust, fontSize: 12, fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),

                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: borderBeige),
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Preferred Crafts',
                        style: TextStyle(color: textMuted, fontSize: 11, fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(height: 8),
                      Wrap(
                        spacing: 8,
                        runSpacing: 8,
                        children: [
                          _buildCraftPill('🌱 Bamboo Craft'),
                          _buildCraftPill('⚒ Pottery'),
                          _buildCraftPill('🧶 Handloom'),
                          _buildCraftPill('🪵 Woodcraft'),
                          _buildCraftPill('🏺 Home Décor'),
                        ],
                      ),
                      const SizedBox(height: 14),

                      // Typical Order Size Card
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFF7F2),
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: const Color(0xFFF7DEC9)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text('Typical Order Size', style: TextStyle(color: textMuted, fontSize: 10.5)),
                            const SizedBox(height: 4),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 3),
                              decoration: BoxDecoration(
                                color: primaryRust,
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: const Text(
                                '250–500 pieces',
                                style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12),
                              ),
                            ),
                            const SizedBox(height: 4),
                            const Text('Per SKU bulk dispatch', style: TextStyle(color: textMuted, fontSize: 10.5)),
                          ],
                        ),
                      ),
                      const SizedBox(height: 10),

                      // Sourcing Preference Card
                      Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFF7F2),
                          borderRadius: BorderRadius.circular(14),
                          border: Border.all(color: const Color(0xFFF7DEC9)),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Text('Sourcing Preference', style: TextStyle(color: textMuted, fontSize: 10.5)),
                            SizedBox(height: 2),
                            Text('Bulk / Large Quantity', style: TextStyle(color: textDark, fontWeight: FontWeight.w900, fontSize: 13)),
                            Text('OEM & Direct Cluster', style: TextStyle(color: textMuted, fontSize: 10.5)),
                          ],
                        ),
                      ),
                      const SizedBox(height: 14),

                      const Text(
                        'Priority Artisan Clusters',
                        style: TextStyle(color: textMuted, fontSize: 11, fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(height: 8),
                      Wrap(
                        spacing: 8,
                        runSpacing: 8,
                        children: [
                          _buildClusterChip('↗ Assam & North East'),
                          _buildClusterChip('☼ Kutch & Gujarat'),
                          _buildClusterChip('🏰 Rajasthan'),
                        ],
                      ),
                      const SizedBox(height: 14),
                      const Divider(height: 1, color: Color(0xFFF3E7DC)),
                      const SizedBox(height: 10),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: const [
                              Text('Customization & White–label', style: TextStyle(color: textMuted, fontSize: 10.5)),
                              SizedBox(height: 2),
                              Text('Custom designs & Private label', style: TextStyle(color: textDark, fontWeight: FontWeight.w900, fontSize: 12.5)),
                            ],
                          ),
                          Container(
                            padding: const EdgeInsets.all(6),
                            decoration: BoxDecoration(
                              color: const Color(0xFFFAF2EB),
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: const Icon(Icons.tune_outlined, size: 16, color: primaryRust),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 20),

                // 4. QUICK SETTINGS & SUPPORT
                const Text(
                  'Quick Settings & Support',
                  style: TextStyle(color: textDark, fontWeight: FontWeight.w900, fontSize: 16),
                ),
                const SizedBox(height: 10),

                Container(
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: borderBeige),
                  ),
                  child: Column(
                    children: [
                      _buildSettingsTile(
                        icon: Icons.notifications_outlined,
                        iconBg: const Color(0xFFFFF0E8),
                        title: 'Notifications',
                        subtitle: 'Order, requirement and message updates',
                        onTap: widget.onNotifications ?? () {},
                      ),
                      const Divider(height: 1, color: Color(0xFFF7ECE4)),
                      _buildSettingsTile(
                        icon: Icons.translate_outlined,
                        iconBg: const Color(0xFFFFF0E8),
                        title: 'Language',
                        subtitle: 'English • Hindi voice translation enabled',
                        onTap: widget.onLanguage ?? () {},
                      ),
                      const Divider(height: 1, color: Color(0xFFF7ECE4)),
                      _buildSettingsTile(
                        icon: Icons.help_outline,
                        iconBg: const Color(0xFFFFF0E8),
                        title: 'Help & Support',
                        subtitle: 'Direct cluster liaison desk & FAQ',
                        onTap: widget.onHelpSupport ?? () {},
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 16),

                // 5. Log Out Button
                SizedBox(
                  width: double.infinity,
                  child: OutlinedButton.icon(
                    onPressed: widget.onLogOut ?? () {},
                    icon: const Icon(Icons.logout, size: 15, color: primaryRust),
                    label: const Text(
                      'Log Out',
                      style: TextStyle(color: primaryRust, fontSize: 13, fontWeight: FontWeight.w800),
                    ),
                    style: OutlinedButton.styleFrom(
                      side: const BorderSide(color: Color(0xFFF2D1BF)),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      padding: const EdgeInsets.symmetric(vertical: 13),
                    ),
                  ),
                ),
                const SizedBox(height: 12),

                // App Version Footer
                const Center(
                  child: Text(
                    'HunarSangam Bulk Buyer App • v2.4.1 (Enterprise)',
                    style: TextStyle(color: textMuted, fontSize: 10.5, fontWeight: FontWeight.w600),
                  ),
                ),
                const SizedBox(height: 20),
              ],
            ),
          ),

          // Bottom Nav
          _buildBottomNav(),
        ],
      ),
    );
  }

  Widget _buildTag({
    required String label,
    required Color bg,
    required Color textColor,
    Color? borderColor,
  }) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(12),
        border: borderColor != null ? Border.all(color: borderColor) : null,
      ),
      child: Text(
        label,
        style: TextStyle(color: textColor, fontSize: 10.5, fontWeight: FontWeight.bold),
      ),
    );
  }

  Widget _buildDetailRow({
    required String label,
    required String value,
    required IconData icon,
    bool verifiedBadge = false,
  }) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label, style: const TextStyle(color: Color(0xFF7A6A60), fontSize: 10.5)),
            const SizedBox(height: 2),
            Row(
              children: [
                Text(
                  value,
                  style: const TextStyle(
                    color: Color(0xFF1F1612),
                    fontWeight: FontWeight.w900,
                    fontSize: 13,
                  ),
                ),
                if (verifiedBadge) ...[
                  const SizedBox(width: 6),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 1.5),
                    decoration: BoxDecoration(
                      color: const Color(0xFFD1FAE5),
                      borderRadius: BorderRadius.circular(6),
                    ),
                    child: const Text(
                      '✓ Verified',
                      style: TextStyle(color: Color(0xFF065F46), fontSize: 9.5, fontWeight: FontWeight.bold),
                    ),
                  ),
                ],
              ],
            ),
          ],
        ),
        Icon(icon, size: 18, color: const Color(0xFF7A6A60)),
      ],
    );
  }

  Widget _buildCraftPill(String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: const Color(0xFFFFF9F5),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFFF2D9C7)),
      ),
      child: Text(
        label,
        style: const TextStyle(color: Color(0xFF9C3C18), fontSize: 11, fontWeight: FontWeight.bold),
      ),
    );
  }

  Widget _buildClusterChip(String label) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: const Color(0xFFF9F3ED),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFFEADBCE)),
      ),
      child: Text(
        label,
        style: const TextStyle(color: Color(0xFF3B2A22), fontSize: 11, fontWeight: FontWeight.w600),
      ),
    );
  }

  Widget _buildSettingsTile({
    required IconData icon,
    required Color iconBg,
    required String title,
    required String subtitle,
    required VoidCallback onTap,
  }) {
    return ListTile(
      onTap: onTap,
      leading: Container(
        padding: const EdgeInsets.all(8),
        decoration: BoxDecoration(
          color: iconBg,
          shape: BoxShape.circle,
        ),
        child: Icon(icon, size: 18, color: const Color(0xFF9C3C18)),
      ),
      title: Text(
        title,
        style: const TextStyle(color: Color(0xFF1F1612), fontWeight: FontWeight.w900, fontSize: 13),
      ),
      subtitle: Text(
        subtitle,
        style: const TextStyle(color: Color(0xFF7A6A60), fontSize: 11),
      ),
      trailing: const Icon(Icons.chevron_right, color: Color(0xFF7A6A60), size: 18),
      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 2),
    );
  }

  Widget _buildBottomNav() {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: Color(0xFFE5D5C8))),
      ),
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _buildNavItem(icon: Icons.home_outlined, label: 'Home', isSelected: false, index: 0),
          _buildNavItem(icon: Icons.explore_outlined, label: 'Discover', isSelected: false, index: 1),
          _buildNavItem(icon: Icons.assignment_outlined, label: 'Requirement', isSelected: false, index: 2),
          _buildNavItem(icon: Icons.local_shipping_outlined, label: 'Order', isSelected: false, index: 3),
          _buildNavItem(icon: Icons.person, label: 'Profile', isSelected: true, index: 4),
        ],
      ),
    );
  }

  Widget _buildNavItem({
    required IconData icon,
    required String label,
    required bool isSelected,
    required int index,
  }) {
    return GestureDetector(
      onTap: () => widget.onNavTap?.call(index),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            icon,
            size: 20,
            color: isSelected ? const Color(0xFF9C3C18) : const Color(0xFF7A6A60),
          ),
          const SizedBox(height: 2),
          Text(
            label,
            style: TextStyle(
              fontSize: 10,
              fontWeight: isSelected ? FontWeight.w900 : FontWeight.w500,
              color: isSelected ? const Color(0xFF9C3C18) : const Color(0xFF7A6A60),
            ),
          ),
        ],
      ),
    );
  }
}
