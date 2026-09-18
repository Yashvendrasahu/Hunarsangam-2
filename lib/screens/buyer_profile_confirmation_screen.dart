// lib/screens/buyer_profile_confirmation_screen.dart

import 'package:flutter/material.dart';
import '../models/buyer_onboarding_model.dart';

/// Screen: Bulk Buyer Profile Confirmation (After Register)
/// 100% UI Match to 'bulk buyer profile confirmation after register.png'
class BuyerProfileConfirmationScreen extends StatelessWidget {
  final BuyerOnboardingModel model;
  final VoidCallback onGoToDashboard;
  final VoidCallback? onViewProfile;
  final VoidCallback? onBack;

  const BuyerProfileConfirmationScreen({
    super.key,
    required this.model,
    required this.onGoToDashboard,
    this.onViewProfile,
    this.onBack,
  });

  static const Color _primaryRust = Color(0xFF9C3C18);
  static const Color _bgCanvas = Color(0xFFFAF7F5);
  static const Color _cardBg = Color(0xFFFFFDFB);
  static const Color _borderSubtle = Color(0xFFEFE2D8);
  static const Color _textDark = Color(0xFF1F1612);
  static const Color _textMuted = Color(0xFF6B5A51);
  static const Color _successGreen = Color(0xFF2E7D32);
  static const Color _peachIconBg = Color(0xFFF6ECE4);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bgCanvas,
      appBar: _buildAppBar(context),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 18.0, vertical: 12.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const SizedBox(height: 12.0),
                    _buildSuccessCheckCircle(),
                    const SizedBox(height: 18.0),
                    _buildTitleAndSubtitle(),
                    const SizedBox(height: 14.0),
                    _buildWholesaleTierPill(),
                    const SizedBox(height: 24.0),
                    _buildCapabilitiesHeader(),
                    const SizedBox(height: 12.0),
                    _buildCapabilityCards(context),
                    const SizedBox(height: 18.0),
                    _buildFootnote(),
                    const SizedBox(height: 16.0),
                  ],
                ),
              ),
            ),
            _buildBottomButtons(context),
          ],
        ),
      ),
    );
  }

  PreferredSizeWidget _buildAppBar(BuildContext context) {
    return AppBar(
      backgroundColor: _bgCanvas,
      elevation: 0,
      scrolledUnderElevation: 0,
      automaticallyImplyLeading: false,
      titleSpacing: 16.0,
      title: Row(
        children: [
          // HunarSangam Brand Name
          const Text(
            'HunarSangam',
            style: TextStyle(
              color: Color(0xFF8C3A16),
              fontSize: 18,
              fontWeight: FontWeight.w900,
              letterSpacing: -0.2,
            ),
          ),
          const SizedBox(width: 8.0),
          // Bulk Buyer Badge
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 3.5),
            decoration: BoxDecoration(
              color: const Color(0xFFE8F5E9),
              border: Border.all(color: const Color(0xFFA5D6A7), width: 1.0),
              borderRadius: BorderRadius.circular(20.0),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: const [
                Icon(Icons.check, size: 12, color: _successGreen),
                SizedBox(width: 4.0),
                Text(
                  'Bulk Buyer',
                  style: TextStyle(
                    color: _successGreen,
                    fontSize: 10.5,
                    fontWeight: FontWeight.w800,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      actions: [
        // Language EN Selector
        Container(
          margin: const EdgeInsets.only(right: 16.0),
          padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
          decoration: BoxDecoration(
            color: const Color(0xFFF3ECE5),
            border: Border.all(color: const Color(0xFFE5D7CD), width: 1.0),
            borderRadius: BorderRadius.circular(20.0),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: const [
              Icon(Icons.translate, size: 13, color: Color(0xFF4A3830)),
              SizedBox(width: 4.0),
              Text(
                'EN',
                style: TextStyle(
                  color: Color(0xFF4A3830),
                  fontSize: 11,
                  fontWeight: FontWeight.w800,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildSuccessCheckCircle() {
    return Container(
      width: 76,
      height: 76,
      decoration: const BoxDecoration(
        color: _successGreen,
        shape: BoxShape.circle,
        boxShadow: [
          BoxShadow(
            color: Color(0x252E7D32),
            blurRadius: 16,
            offset: Offset(0, 6),
          ),
        ],
      ),
      child: const Center(
        child: Icon(
          Icons.check,
          color: Colors.white,
          size: 44,
        ),
      ),
    );
  }

  Widget _buildTitleAndSubtitle() {
    return Column(
      children: const [
        Text(
          'Your Bulk Buyer Profile is\nReady',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.w900,
            color: _textDark,
            letterSpacing: -0.4,
            height: 1.25,
          ),
        ),
        SizedBox(height: 8.0),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 12.0),
          child: Text(
            'Now discover artisans, explore handmade products and send bulk requirements directly to craft clusters.',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 12.5,
              color: _textMuted,
              height: 1.4,
              fontWeight: FontWeight.w500,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildWholesaleTierPill() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 7.0),
      decoration: BoxDecoration(
        color: const Color(0xFFFAF3ED),
        border: Border.all(color: const Color(0xFFEBDCD0), width: 1.0),
        borderRadius: BorderRadius.circular(24.0),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 7,
            height: 7,
            decoration: const BoxDecoration(
              color: _successGreen,
              shape: BoxShape.circle,
            ),
          ),
          const SizedBox(width: 7.0),
          const Text(
            'Wholesale Tier: Direct-to-Cluster Access Enabled',
            style: TextStyle(
              color: Color(0xFF3D2D24),
              fontSize: 11.5,
              fontWeight: FontWeight.w700,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCapabilitiesHeader() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        const Text(
          'BULK BUYER CAPABILITIES',
          style: TextStyle(
            color: Color(0xFF6B5A51),
            fontSize: 11,
            fontWeight: FontWeight.w900,
            letterSpacing: 0.6,
          ),
        ),
        Row(
          children: const [
            Icon(Icons.shield_outlined, size: 13, color: _primaryRust),
            SizedBox(width: 4.0),
            Text(
              'Enterprise Protected',
              style: TextStyle(
                color: _primaryRust,
                fontSize: 11,
                fontWeight: FontWeight.w800,
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildCapabilityCards(BuildContext context) {
    return Column(
      children: [
        // Card 1: Discover Artisans
        _buildCapabilityCard(
          icon: Icons.people_alt_outlined,
          title: 'Discover Artisans',
          subtitle: 'Explore master artisans from 120+ GI craft clusters across India.',
          tags: [
            _buildTag(
              icon: Icons.shield_outlined,
              label: 'Verified Guilds',
              bgColor: const Color(0xFFE8F5E9),
              textColor: _successGreen,
              isBold: true,
            ),
            _buildTag(
              label: 'Direct cluster contacts',
              bgColor: const Color(0xFFF2EBE5),
              textColor: const Color(0xFF5D4037),
            ),
          ],
          onTap: onGoToDashboard,
        ),
        const SizedBox(height: 12.0),

        // Card 2: Find Products
        _buildCapabilityCard(
          icon: Icons.store_mall_directory_outlined,
          title: 'Find Products',
          subtitle: 'Browse authentic catalog items with transparent wholesale bulk tiers.',
          tags: [
            _buildTag(
              icon: Icons.payments_outlined,
              label: 'Tiered B2B Pricing',
              bgColor: const Color(0xFFE8F5E9),
              textColor: _successGreen,
              isBold: true,
            ),
            _buildTag(
              label: 'MOQ transparency',
              bgColor: const Color(0xFFF2EBE5),
              textColor: const Color(0xFF5D4037),
            ),
          ],
          onTap: onGoToDashboard,
        ),
        const SizedBox(height: 12.0),

        // Card 3: Post a Requirement
        _buildCapabilityCard(
          icon: Icons.assignment_turned_in_outlined,
          title: 'Post a Requirement',
          subtitle: 'Specify custom designs, sample requests, and batch quantities directly.',
          tags: [
            _buildTag(
              icon: Icons.edit_note,
              label: 'Custom RFQs',
              bgColor: const Color(0xFFFDEEE6),
              textColor: _primaryRust,
              isBold: true,
            ),
            _buildTag(
              label: 'Audio notes supported',
              bgColor: const Color(0xFFF2EBE5),
              textColor: const Color(0xFF5D4037),
            ),
          ],
          onTap: onGoToDashboard,
        ),
      ],
    );
  }

  Widget _buildCapabilityCard({
    required IconData icon,
    required String title,
    required String subtitle,
    required List<Widget> tags,
    VoidCallback? onTap,
  }) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(20.0),
      child: Container(
        padding: const EdgeInsets.all(14.0),
        decoration: BoxDecoration(
          color: _cardBg,
          border: Border.all(color: _borderSubtle, width: 1.0),
          borderRadius: BorderRadius.circular(20.0),
          boxShadow: const [
            BoxShadow(
              color: Color(0x0A000000),
              blurRadius: 6,
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
                // Icon Box
                Container(
                  width: 44,
                  height: 44,
                  decoration: BoxDecoration(
                    color: _peachIconBg,
                    borderRadius: BorderRadius.circular(14.0),
                  ),
                  child: Icon(icon, color: _primaryRust, size: 22),
                ),
                const SizedBox(width: 12.0),
                // Title and Arrow
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            title,
                            style: const TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.w800,
                              color: _textDark,
                            ),
                          ),
                          const Icon(
                            Icons.arrow_forward,
                            size: 16,
                            color: Color(0xFFC4B2A7),
                          ),
                        ],
                      ),
                      const SizedBox(height: 3.0),
                      Text(
                        subtitle,
                        style: const TextStyle(
                          fontSize: 11.5,
                          color: _textMuted,
                          height: 1.35,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10.0),
            // Tags Row
            Wrap(
              spacing: 6.0,
              runSpacing: 4.0,
              children: tags,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTag({
    IconData? icon,
    required String label,
    required Color bgColor,
    required Color textColor,
    bool isBold = false,
  }) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 3.5),
      decoration: BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.circular(12.0),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (icon != null) ...[
            Icon(icon, size: 11, color: textColor),
            const SizedBox(width: 4.0),
          ],
          Text(
            label,
            style: TextStyle(
              color: textColor,
              fontSize: 10.5,
              fontWeight: isBold ? FontWeight.w800 : FontWeight.w600,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFootnote() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: const [
        Icon(Icons.verified_outlined, size: 14, color: _successGreen),
        SizedBox(width: 6.0),
        Flexible(
          child: Text(
            'Direct settlements directly empowering rural artisan clusters.',
            style: TextStyle(
              fontSize: 11,
              color: Color(0xFF6B5A51),
              fontWeight: FontWeight.w500,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildBottomButtons(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(18.0, 10.0, 18.0, 14.0),
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(
          top: BorderSide(color: Color(0xFFEFE2D8), width: 1.0),
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Primary CTA: Go to Dashboard ->
          SizedBox(
            width: double.infinity,
            height: 50,
            child: ElevatedButton(
              onPressed: onGoToDashboard,
              style: ElevatedButton.styleFrom(
                backgroundColor: _primaryRust,
                foregroundColor: Colors.white,
                elevation: 2,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16.0),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text(
                    'Go to Dashboard',
                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800),
                  ),
                  SizedBox(width: 6.0),
                  Icon(Icons.arrow_forward, size: 16),
                ],
              ),
            ),
          ),
          const SizedBox(height: 8.0),
          // Secondary CTA: View My Profile
          SizedBox(
            width: double.infinity,
            height: 46,
            child: OutlinedButton(
              onPressed: onViewProfile ?? onBack,
              style: OutlinedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: _textDark,
                side: const BorderSide(color: Color(0xFFE5D8CF), width: 1.0),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16.0),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.storefront_outlined, size: 16, color: Color(0xFF5D4037)),
                  SizedBox(width: 6.0),
                  Text(
                    'View My Profile',
                    style: TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.w700,
                      color: _textDark,
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
}
