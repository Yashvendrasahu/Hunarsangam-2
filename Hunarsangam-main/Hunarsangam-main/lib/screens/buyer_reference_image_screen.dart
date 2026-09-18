// lib/screens/buyer_reference_image_screen.dart

import 'package:flutter/material.dart';

/// Screen: Reference Image Upload (r4- bulk  — Reference Image.png)
/// Step 3 of 3 • Reference Design
class BuyerReferenceImageScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onContinue;
  final VoidCallback? onSkip;
  final VoidCallback? onOpenRequirements;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onOpenHome;

  const BuyerReferenceImageScreen({
    super.key,
    this.onBack,
    this.onContinue,
    this.onSkip,
    this.onOpenRequirements,
    this.onOpenDiscover,
    this.onOpenHome,
  });

  @override
  State<BuyerReferenceImageScreen> createState() => _BuyerReferenceImageScreenState();
}

class _BuyerReferenceImageScreenState extends State<BuyerReferenceImageScreen> {
  bool _hasImage = true;

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
                    _buildModeBadge(),
                    const SizedBox(height: 10),
                    const Text(
                      'Have a reference design?',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w900,
                        color: _textDark,
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'Use an image to show artisans the exact style, weave, shape or custom finishing you want.',
                      style: TextStyle(
                        fontSize: 12,
                        color: Color(0xFF6E5A4E),
                        height: 1.4,
                      ),
                    ),
                    const SizedBox(height: 16),
                    _buildUploadOptions(),
                    const SizedBox(height: 16),
                    if (_hasImage) _buildAttachedReferenceCard(),
                    const SizedBox(height: 14),
                    Center(
                      child: InkWell(
                        onTap: widget.onSkip,
                        child: const Text(
                          "Don't have a photo? Skip this step",
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.bold,
                            color: _primaryRust,
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(height: 16),
                    _buildContinueButton(),
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
                  'Step 3 of 3 • Reference Design',
                  style: TextStyle(
                    fontSize: 11,
                    color: _textMuted,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
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

  Widget _buildModeBadge() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: const Color(0xFFD1FAE5),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFA7F3D0)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: const [
          Icon(Icons.check_circle, size: 12, color: Color(0xFF10B981)),
          SizedBox(width: 6),
          Text(
            'Bulk Buyer Mode',
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.bold,
              color: Color(0xFF065F46),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildUploadOptions() {
    return Row(
      children: [
        Expanded(
          child: InkWell(
            onTap: () => _showNotification('Camera opened to capture reference photo'),
            borderRadius: BorderRadius.circular(18),
            child: Container(
              padding: const EdgeInsets.symmetric(vertical: 16),
              decoration: BoxDecoration(
                color: const Color(0xFFFDF8F4),
                borderRadius: BorderRadius.circular(18),
                border: Border.all(color: const Color(0xFFEADBCE)),
              ),
              child: Column(
                children: [
                  Container(
                    width: 44,
                    height: 44,
                    decoration: const BoxDecoration(
                      color: Color(0xFFF5ECE2),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(Icons.camera_alt_outlined, color: _primaryRust, size: 22),
                  ),
                  const SizedBox(height: 8),
                  const Text(
                    'Take Photo',
                    style: TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.w900,
                      color: _textDark,
                    ),
                  ),
                  const SizedBox(height: 2),
                  const Text(
                    'Instant capture',
                    style: TextStyle(fontSize: 10, color: _textMuted),
                  ),
                ],
              ),
            ),
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: InkWell(
            onTap: () => _showNotification('Gallery picker opened'),
            borderRadius: BorderRadius.circular(18),
            child: Container(
              padding: const EdgeInsets.symmetric(vertical: 16),
              decoration: BoxDecoration(
                color: const Color(0xFFFDF8F4),
                borderRadius: BorderRadius.circular(18),
                border: Border.all(color: const Color(0xFFEADBCE)),
              ),
              child: Column(
                children: [
                  Container(
                    width: 44,
                    height: 44,
                    decoration: const BoxDecoration(
                      color: Color(0xFFF5ECE2),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(Icons.add_photo_alternate_outlined, color: _primaryRust, size: 22),
                  ),
                  const SizedBox(height: 8),
                  const Text(
                    'Upload Image',
                    style: TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.w900,
                      color: _textDark,
                    ),
                  ),
                  const SizedBox(height: 2),
                  const Text(
                    'JPG, PNG, WEBP',
                    style: TextStyle(fontSize: 10, color: _textMuted),
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildAttachedReferenceCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(10),
      child: Column(
        children: [
          Stack(
            children: [
              ClipRRect(
                borderRadius: BorderRadius.circular(14),
                child: Image.network(
                  'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
                  height: 190,
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              Positioned(
                top: 8,
                left: 8,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.95),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Row(
                    children: const [
                      Icon(Icons.attach_file, size: 12, color: _primaryRust),
                      SizedBox(width: 4),
                      Text(
                        '1 Reference Attached',
                        style: TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          color: _textDark,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              Positioned(
                bottom: 0,
                left: 0,
                right: 0,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                  decoration: BoxDecoration(
                    color: Colors.black.withOpacity(0.65),
                    borderRadius: const BorderRadius.vertical(bottom: Radius.circular(14)),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: const [
                      Row(
                        children: [
                          Icon(Icons.eco_outlined, size: 14, color: Color(0xFF10B981)),
                          SizedBox(width: 6),
                          Text(
                            'Bamboo Fruit Basket 10–inch',
                            style: TextStyle(fontSize: 11, color: Colors.white, fontWeight: FontWeight.bold),
                          ),
                        ],
                      ),
                      Text(
                        '2.4 MB',
                        style: TextStyle(fontSize: 10, color: Colors.white70),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: () => _showNotification('Replace image selected'),
                  icon: const Icon(Icons.sync, size: 14),
                  label: const Text('Replace Image', style: TextStyle(fontSize: 11)),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: _textDark,
                    side: const BorderSide(color: Color(0xFFDFC8BA)),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    padding: const EdgeInsets.symmetric(vertical: 8),
                  ),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: () {
                    setState(() => _hasImage = false);
                    _showNotification('Image removed');
                  },
                  icon: const Icon(Icons.delete_outline, size: 14, color: Color(0xFFDC2626)),
                  label: const Text('Remove', style: TextStyle(fontSize: 11, color: Color(0xFFDC2626))),
                  style: OutlinedButton.styleFrom(
                    backgroundColor: const Color(0xFFFEF2F2),
                    side: const BorderSide(color: Color(0xFFFECACA)),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    padding: const EdgeInsets.symmetric(vertical: 8),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildContinueButton() {
    return SizedBox(
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
