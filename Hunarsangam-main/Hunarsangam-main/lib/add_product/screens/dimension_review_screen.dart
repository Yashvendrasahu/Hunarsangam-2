// lib/add_product/screens/dimension_review_screen.dart

import 'package:flutter/material.dart';
import '../models/product_draft.dart';
import '../widgets/add_product_app_bar.dart';
import '../widgets/artisan_bottom_navigation.dart';

/// Screen 4: Matches 'p4— photo and dimension review.png' 100% faithfully:
/// - Header: Back arrow, "STEP 2 OF 2 • DIMENSION TOOL", "₹10 Coin Size Detector", and "मदद" voice help button
/// - Dual Photo Grid:
///     • Left: Top-down photo with ₹10 coin and AR white corner brackets [ ⌜ ⌝ ⌞ ⌟ ]
///     • Right: Studio beauty shot of the craft with rustic dried flowers & pebbles
/// - Retake Photo: Full width pill button with reload icon
/// - Zero-Typing Voice Correction: Round rust mic, "Say: 'ऊंचाई 6 इंच करो' or tap values to fine-tune.", and ear icon
/// - Computer Vision Output Card:
///     • "COMPUTER VISION OUTPUT" in green, "Detected Dimensions", "✔ Auto-Calculated" badge
///     • 3 Metric Boxes:
///         1. Diameter (12.4 in / 31.5 cm) with ↔ arrow
///         2. Height (6.2 in / 15.7 cm) with ↕ arrow
///         3. Est. Weight (~420 g / Light Cane in green) with balance scale icon
///     • Recommended Packaging Box with "B2B Ready" badge: "14 × 14 × 8 in Corrugated Carton."
/// - "Accept Dimensions & Proceed →" CTA Button
/// - Standard 5-tab Artisan Bottom Navigation with Products active
class DimensionReviewScreen extends StatelessWidget {
  final ProductDraft draft;
  final VoidCallback onAccept;
  final VoidCallback onRetake;
  final VoidCallback onBack;
  final Function(int)? onNavigateTab;

  const DimensionReviewScreen({
    super.key,
    required this.draft,
    required this.onAccept,
    required this.onRetake,
    required this.onBack,
    this.onNavigateTab,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      appBar: AddProductAppBar(
        title: '₹10 Coin Size Detector',
        stepSubtitle: 'STEP 2 OF 2 • DIMENSION TOOL',
        onBack: onBack,
        trailing: Container(
          padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 4.5),
          decoration: BoxDecoration(
            color: const Color(0xFFFBF2EB),
            borderRadius: BorderRadius.circular(16.0),
            border: Border.all(color: const Color(0xFFEADFD6)),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: const [
              Icon(Icons.volume_up_rounded, size: 15.0, color: Color(0xFF8C3A16)),
              SizedBox(width: 4.0),
              Text(
                'मदद',
                style: TextStyle(
                  fontSize: 12.0,
                  fontWeight: FontWeight.w700,
                  color: Color(0xFF8C3A16),
                ),
              ),
            ],
          ),
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Dual Photo Grid (Left: ₹10 Coin with AR Corner Brackets, Right: Studio Beauty Shot)
              Row(
                children: [
                  // Left Photo (Coin calibration + AR corner brackets)
                  Expanded(
                    child: Container(
                      height: 175.0,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFEADFD6)),
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: Stack(
                        children: [
                          Positioned.fill(
                            child: Image.network(
                              draft.photoUrl,
                              fit: BoxFit.cover,
                              errorBuilder: (ctx, err, stack) => Container(
                                color: const Color(0xFFE5D5CB),
                                child: const Center(
                                  child: Icon(Icons.shopping_basket_outlined, size: 40.0, color: Color(0xFF8C3A16)),
                                ),
                              ),
                            ),
                          ),
                          // AR White Corner Brackets Overlay
                          Positioned.fill(
                            child: CustomPaint(
                              painter: _ArCornerBracketsPainter(),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(width: 12.0),
                  // Right Photo (Studio Beauty Shot)
                  Expanded(
                    child: Container(
                      height: 175.0,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFEADFD6)),
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: Image.network(
                        draft.secondaryPhotoUrl,
                        fit: BoxFit.cover,
                        errorBuilder: (ctx, err, stack) => Container(
                          color: const Color(0xFFE5D5CB),
                          child: const Center(
                            child: Icon(Icons.photo_library_outlined, size: 40.0, color: Color(0xFF8C3A16)),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 12.0),

              // Retake Photo Button (Wide Pill Button matching screenshot)
              SizedBox(
                width: double.infinity,
                height: 42.0,
                child: OutlinedButton.icon(
                  onPressed: onRetake,
                  icon: const Icon(Icons.refresh_rounded, size: 17.0, color: Color(0xFF221C19)),
                  label: const Text(
                    'Retake Photo',
                    style: TextStyle(
                      fontSize: 13.0,
                      fontWeight: FontWeight.w700,
                      color: Color(0xFF221C19),
                    ),
                  ),
                  style: OutlinedButton.styleFrom(
                    backgroundColor: const Color(0xFFFBF2EB),
                    side: const BorderSide(color: Color(0xFFEADFD6)),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12.0),
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 12.0),

              // Zero-Typing Voice Correction Card (Matches screenshot with Hindi highlight)
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFDF6F0),
                  borderRadius: BorderRadius.circular(16.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 12.0),
                child: Row(
                  children: [
                    Container(
                      width: 44.0,
                      height: 44.0,
                      decoration: const BoxDecoration(
                        color: Color(0xFF8C3A16),
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(Icons.mic_rounded, color: Colors.white, size: 22.0),
                    ),
                    const SizedBox(width: 12.0),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Zero-Typing Voice Correction',
                            style: TextStyle(
                              fontSize: 13.5,
                              fontWeight: FontWeight.w800,
                              color: Color(0xFF221C19),
                            ),
                          ),
                          const SizedBox(height: 2.0),
                          RichText(
                            text: const TextSpan(
                              style: TextStyle(
                                fontSize: 11.5,
                                color: Color(0xFF7A685F),
                                height: 1.3,
                              ),
                              children: [
                                TextSpan(text: 'Say: '),
                                TextSpan(
                                  text: '"ऊंचाई 6 इंच करो"',
                                  style: TextStyle(
                                    fontWeight: FontWeight.w800,
                                    color: Color(0xFF8C3A16),
                                  ),
                                ),
                                TextSpan(text: ' or tap values to fine-tune.'),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(width: 4.0),
                    const Icon(Icons.hearing_rounded, color: Color(0xFF8C3A16), size: 22.0),
                  ],
                ),
              ),

              const SizedBox(height: 12.0),

              // Computer Vision Output Card
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFDFB),
                  borderRadius: BorderRadius.circular(18.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.all(14.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Header Row: Subtitle + Title + Auto-Calculated Badge
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Text(
                              'COMPUTER VISION OUTPUT',
                              style: TextStyle(
                                fontSize: 10.0,
                                fontWeight: FontWeight.w800,
                                color: Color(0xFF1E824C),
                                letterSpacing: 0.5,
                              ),
                            ),
                            SizedBox(height: 2.0),
                            Text(
                              'Detected Dimensions',
                              style: TextStyle(
                                fontSize: 17.0,
                                fontWeight: FontWeight.w800,
                                color: Color(0xFF221C19),
                                letterSpacing: -0.3,
                              ),
                            ),
                          ],
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 3.5),
                          decoration: BoxDecoration(
                            color: const Color(0xFFD4EFDF),
                            borderRadius: BorderRadius.circular(12.0),
                          ),
                          child: const Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Icon(Icons.check_circle_rounded, size: 12.0, color: Color(0xFF1E824C)),
                              SizedBox(width: 3.5),
                              Text(
                                'Auto-Calculated',
                                style: TextStyle(
                                  fontSize: 10.5,
                                  fontWeight: FontWeight.w700,
                                  color: Color(0xFF1E824C),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 12.0),

                    // 3 Metric Boxes in Row: Diameter, Height, Est. Weight
                    Row(
                      children: [
                        // Box 1: Diameter
                        Expanded(
                          child: _buildMetricCard(
                            label: 'Diameter',
                            topRightIcon: Icons.swap_horiz_rounded,
                            mainNumber: '12.4',
                            mainUnit: ' in',
                            subText: '31.5 cm',
                            isSubTextGreen: false,
                          ),
                        ),
                        const SizedBox(width: 8.0),
                        // Box 2: Height
                        Expanded(
                          child: _buildMetricCard(
                            label: 'Height',
                            topRightIcon: Icons.swap_vert_rounded,
                            mainNumber: '6.2',
                            mainUnit: ' in',
                            subText: '15.7 cm',
                            isSubTextGreen: false,
                          ),
                        ),
                        const SizedBox(width: 8.0),
                        // Box 3: Est. Weight
                        Expanded(
                          child: _buildMetricCard(
                            label: 'Est. Weight',
                            topRightIcon: Icons.balance_rounded,
                            mainNumber: '~420',
                            mainUnit: ' g',
                            subText: 'Light Cane',
                            isSubTextGreen: true,
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 12.0),

                    // Recommended Packaging Box Row
                    Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFFFBF2EB),
                        borderRadius: BorderRadius.circular(12.0),
                        border: Border.all(color: const Color(0xFFEADFD6)),
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 10.0),
                      child: Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(6.0),
                            decoration: BoxDecoration(
                              color: const Color(0xFFF3E3D6),
                              borderRadius: BorderRadius.circular(8.0),
                            ),
                            child: const Icon(Icons.inventory_2_outlined, color: Color(0xFF8C3A16), size: 18.0),
                          ),
                          const SizedBox(width: 10.0),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  children: [
                                    const Text(
                                      'Recommended Packaging Box',
                                      style: TextStyle(
                                        fontSize: 11.0,
                                        fontWeight: FontWeight.w700,
                                        color: Color(0xFF4A372D),
                                      ),
                                    ),
                                    const SizedBox(width: 6.0),
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 5.0, vertical: 1.5),
                                      decoration: BoxDecoration(
                                        color: const Color(0xFFFFE5D6),
                                        borderRadius: BorderRadius.circular(4.0),
                                      ),
                                      child: const Text(
                                        'B2B Ready',
                                        style: TextStyle(
                                          fontSize: 8.5,
                                          fontWeight: FontWeight.w800,
                                          color: Color(0xFF8C3A16),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 2.0),
                                const Text(
                                  '14 × 14 × 8 in Corrugated Carton.',
                                  style: TextStyle(
                                    fontSize: 12.5,
                                    fontWeight: FontWeight.w800,
                                    color: Color(0xFF221C19),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 18.0),

              // Accept CTA Button: "Accept Dimensions & Proceed →"
              SizedBox(
                width: double.infinity,
                height: 52.0,
                child: ElevatedButton(
                  onPressed: onAccept,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF8C3A16),
                    foregroundColor: Colors.white,
                    elevation: 1,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16.0),
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Text(
                        'Accept Dimensions & Proceed',
                        style: TextStyle(
                          fontSize: 15.0,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                      SizedBox(width: 6.0),
                      Icon(Icons.arrow_forward_rounded, size: 18.0),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 20.0),
            ],
          ),
        ),
      ),
      bottomNavigationBar: ArtisanBottomNavigation(
        currentIndex: 1,
        onTap: onNavigateTab,
      ),
    );
  }

  Widget _buildMetricCard({
    required String label,
    required IconData topRightIcon,
    required String mainNumber,
    required String mainUnit,
    required String subText,
    required bool isSubTextGreen,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFBF2EB),
        borderRadius: BorderRadius.circular(12.0),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 10.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                label,
                style: const TextStyle(
                  fontSize: 11.0,
                  fontWeight: FontWeight.w700,
                  color: Color(0xFF4A372D),
                ),
              ),
              Icon(topRightIcon, size: 13.0, color: const Color(0xFF4A372D)),
            ],
          ),
          const SizedBox(height: 4.0),
          RichText(
            text: TextSpan(
              children: [
                TextSpan(
                  text: mainNumber,
                  style: const TextStyle(
                    fontSize: 16.0,
                    fontWeight: FontWeight.w900,
                    color: Color(0xFF221C19),
                  ),
                ),
                TextSpan(
                  text: mainUnit,
                  style: const TextStyle(
                    fontSize: 11.5,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF7A685F),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 2.0),
          Text(
            subText,
            style: TextStyle(
              fontSize: 10.5,
              fontWeight: isSubTextGreen ? FontWeight.w700 : FontWeight.w500,
              color: isSubTextGreen ? const Color(0xFF1E824C) : const Color(0xFF7A685F),
            ),
          ),
        ],
      ),
    );
  }
}

/// Custom painter to draw the white AR corner brackets overlay [ ⌜ ⌝ ⌞ ⌟ ]
class _ArCornerBracketsPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.white.withValues(alpha: 0.9)
      ..strokeWidth = 2.5
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;

    const cornerLength = 22.0;
    const padding = 14.0;

    // Top-Left ⌜
    canvas.drawLine(const Offset(padding, padding + cornerLength), const Offset(padding, padding), paint);
    canvas.drawLine(const Offset(padding, padding), const Offset(padding + cornerLength, padding), paint);

    // Top-Right ⌝
    canvas.drawLine(Offset(size.width - padding - cornerLength, padding), Offset(size.width - padding, padding), paint);
    canvas.drawLine(Offset(size.width - padding, padding), Offset(size.width - padding, padding + cornerLength), paint);

    // Bottom-Left ⌞
    canvas.drawLine(Offset(padding, size.height - padding - cornerLength), Offset(padding, size.height - padding), paint);
    canvas.drawLine(Offset(padding, size.height - padding), Offset(padding + cornerLength, size.height - padding), paint);

    // Bottom-Right ⌟
    canvas.drawLine(Offset(size.width - padding - cornerLength, size.height - padding), Offset(size.width - padding, size.height - padding), paint);
    canvas.drawLine(Offset(size.width - padding, size.height - padding - cornerLength), Offset(size.width - padding, size.height - padding), paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

