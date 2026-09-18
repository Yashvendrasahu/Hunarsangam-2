// lib/add_product/screens/coin_detector_ar_screen.dart

import 'package:flutter/material.dart';
import '../models/product_draft.dart';
import '../widgets/add_product_app_bar.dart';
import '../widgets/artisan_studio_tips.dart';
import '../widgets/artisan_bottom_navigation.dart';

/// Screen 3: Matches 'p3 — Camera-First Add Photo with 10 rupes.png'
/// Camera viewfinder with AR computer vision overlays:
/// - ₹10 Coin detection indicator & lock badge
/// - Live 60fps indicator
/// - Top and Base AR measurement lines (Top: 12.4 in, Base: 8.1 in)
/// - Height callout (Height: 6.2 in ±0.1 cm)
/// - Artisan studio tips
/// - Concentric terracotta shutter button
class CoinDetectorArScreen extends StatelessWidget {
  final ProductDraft draft;
  final VoidCallback onCapture;
  final VoidCallback onBack;
  final Function(int)? onNavigateTab;

  const CoinDetectorArScreen({
    super.key,
    required this.draft,
    required this.onCapture,
    required this.onBack,
    this.onNavigateTab,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      appBar: AddProductAppBar(
        title: '₹10 Coin Size Detector',
        stepSubtitle: 'STEP 1 OF 2 • PRODUCT PHOTOGRAPHY',
        onBack: onBack,
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 4.0),
          child: Column(
            children: [
              // AR Camera Viewfinder
              Expanded(
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(20.0),
                  child: Stack(
                    children: [
                      // Camera image background
                      Positioned.fill(
                        child: Image.network(
                          draft.photoUrl,
                          fit: BoxFit.cover,
                          errorBuilder: (ctx, err, stack) => Container(
                            color: const Color(0xFFEADFD6),
                            child: const Center(
                              child: Icon(Icons.shopping_basket_outlined, size: 60.0, color: Color(0xFF8C3A16)),
                            ),
                          ),
                        ),
                      ),

                      // Dark subtle gradient overlay
                      Positioned.fill(
                        child: Container(
                          decoration: BoxDecoration(
                            gradient: LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: [
                                Colors.black.withValues(alpha: 0.35),
                                Colors.transparent,
                                Colors.black.withValues(alpha: 0.45),
                              ],
                            ),
                          ),
                        ),
                      ),

                      // Top-left: Live 60fps pill
                      Positioned(
                        top: 14.0,
                        left: 14.0,
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
                          decoration: BoxDecoration(
                            color: Colors.black.withValues(alpha: 0.7),
                            borderRadius: BorderRadius.circular(16.0),
                          ),
                          child: Row(
                            children: const [
                              Icon(Icons.videocam_outlined, color: Colors.white, size: 14.0),
                              SizedBox(width: 5.0),
                              Text(
                                'Live 60fps',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 11.0,
                                  fontWeight: FontWeight.w700,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),

                      // Viewfinder Corner Brackets
                      Positioned(
                        top: 14.0,
                        right: 14.0,
                        child: _buildCorner(isTop: true, isLeft: false),
                      ),
                      Positioned(
                        bottom: 14.0,
                        left: 14.0,
                        child: _buildCorner(isTop: false, isLeft: true),
                      ),
                      Positioned(
                        bottom: 14.0,
                        right: 14.0,
                        child: _buildCorner(isTop: false, isLeft: false),
                      ),

                      // AR Top Measurement Bar
                      Positioned(
                        top: 80.0,
                        left: 30.0,
                        right: 30.0,
                        child: Column(
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 4.0),
                              decoration: BoxDecoration(
                                color: Colors.black.withValues(alpha: 0.8),
                                borderRadius: BorderRadius.circular(12.0),
                              ),
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  const Icon(Icons.straighten, color: Color(0xFF69F0AE), size: 14.0),
                                  const SizedBox(width: 4.0),
                                  Text(
                                    'Top: ${draft.diameterIn} in (${(draft.diameterIn * 2.54).toStringAsFixed(1)} cm)',
                                    style: const TextStyle(
                                      color: Colors.white,
                                      fontSize: 11.5,
                                      fontWeight: FontWeight.w800,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(height: 3.0),
                            Row(
                              children: [
                                _buildArDot(),
                                Expanded(
                                  child: Container(
                                    height: 2.0,
                                    color: const Color(0xFF69F0AE),
                                  ),
                                ),
                                _buildArDot(),
                              ],
                            ),
                          ],
                        ),
                      ),

                      // AR Height Callout Box
                      Positioned(
                        top: 130.0,
                        right: 24.0,
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 8.0),
                          decoration: BoxDecoration(
                            color: Colors.black.withValues(alpha: 0.8),
                            borderRadius: BorderRadius.circular(12.0),
                            border: Border.all(color: const Color(0xFF69F0AE).withValues(alpha: 0.4)),
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                'Height',
                                style: TextStyle(
                                  fontSize: 10.5,
                                  fontWeight: FontWeight.w700,
                                  color: Color(0xFF69F0AE),
                                ),
                              ),
                              Text(
                                '${draft.heightIn} in (${(draft.heightIn * 2.54).toStringAsFixed(1)} cm)',
                                style: const TextStyle(
                                  fontSize: 13.0,
                                  fontWeight: FontWeight.w900,
                                  color: Colors.white,
                                ),
                              ),
                              const Text(
                                '±0.1 cm',
                                style: TextStyle(
                                  fontSize: 9.5,
                                  color: Color(0xFFE0E0E0),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),

                      // AR Base Measurement Bar
                      Positioned(
                        bottom: 95.0,
                        left: 70.0,
                        right: 70.0,
                        child: Column(
                          children: [
                            Row(
                              children: [
                                _buildArDot(),
                                Expanded(
                                  child: Container(
                                    height: 2.0,
                                    color: const Color(0xFF69F0AE),
                                  ),
                                ),
                                _buildArDot(),
                              ],
                            ),
                            const SizedBox(height: 2.0),
                            const Text(
                              'Base: 8.1 in (20.5 cm)',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 11.0,
                                fontWeight: FontWeight.w800,
                                shadows: [Shadow(color: Colors.black, blurRadius: 4.0)],
                              ),
                            ),
                          ],
                        ),
                      ),

                      // ₹10 Coin Detection Target Lock & Badge
                      Positioned(
                        bottom: 24.0,
                        left: 20.0,
                        child: Row(
                          children: [
                            // Pulsing green circle with checkmark
                            Container(
                              width: 38.0,
                              height: 38.0,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: const Color(0xFF2E7D32).withValues(alpha: 0.3),
                                border: Border.all(color: const Color(0xFF69F0AE), width: 2.0),
                              ),
                              child: const Center(
                                child: Icon(Icons.check, color: Color(0xFF69F0AE), size: 20.0),
                              ),
                            ),
                            const SizedBox(width: 8.0),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 6.0),
                              decoration: BoxDecoration(
                                color: Colors.black.withValues(alpha: 0.85),
                                borderRadius: BorderRadius.circular(12.0),
                                border: Border.all(color: const Color(0xFF2E7D32)),
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    children: [
                                      Container(
                                        width: 6.0,
                                        height: 6.0,
                                        decoration: const BoxDecoration(
                                          color: Color(0xFF69F0AE),
                                          shape: BoxShape.circle,
                                        ),
                                      ),
                                      const SizedBox(width: 5.0),
                                      const Text(
                                        '₹10 Coin Locked',
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 11.5,
                                          fontWeight: FontWeight.w800,
                                        ),
                                      ),
                                    ],
                                  ),
                                  const Text(
                                    'Standard 27.00 mm scale',
                                    style: TextStyle(
                                      color: Color(0xFFB0BEC5),
                                      fontSize: 9.5,
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
              ),

              const SizedBox(height: 10.0),

              // Studio Tips Card
              const ArtisanStudioTipsCard(),

              const SizedBox(height: 10.0),

              // Concentric Shutter Button
              GestureDetector(
                onTap: onCapture,
                child: Container(
                  width: 68.0,
                  height: 68.0,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: const Color(0xFFEADFD6),
                    border: Border.all(color: const Color(0xFFD5C4B8), width: 3.0),
                  ),
                  padding: const EdgeInsets.all(4.0),
                  child: Container(
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: const Color(0xFFA84318),
                      boxShadow: [
                        BoxShadow(
                          color: const Color(0xFFA84318).withValues(alpha: 0.35),
                          offset: const Offset(0, 3),
                          blurRadius: 8.0,
                        ),
                      ],
                    ),
                    child: const Center(
                      child: Text(
                        'Click',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 12.0,
                          fontWeight: FontWeight.w800,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 6.0),
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

  Widget _buildCorner({required bool isTop, required bool isLeft}) {
    return Container(
      width: 22.0,
      height: 22.0,
      decoration: BoxDecoration(
        border: Border(
          top: isTop ? const BorderSide(color: Colors.white, width: 3.0) : BorderSide.none,
          bottom: !isTop ? const BorderSide(color: Colors.white, width: 3.0) : BorderSide.none,
          left: isLeft ? const BorderSide(color: Colors.white, width: 3.0) : BorderSide.none,
          right: !isLeft ? const BorderSide(color: Colors.white, width: 3.0) : BorderSide.none,
        ),
      ),
    );
  }

  Widget _buildArDot() {
    return Container(
      width: 7.0,
      height: 7.0,
      decoration: const BoxDecoration(
        color: Color(0xFF69F0AE),
        shape: BoxShape.circle,
      ),
    );
  }
}
