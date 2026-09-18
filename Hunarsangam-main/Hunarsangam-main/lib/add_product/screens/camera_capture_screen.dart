// lib/add_product/screens/camera_capture_screen.dart

import 'package:flutter/material.dart';
import '../widgets/add_product_app_bar.dart';
import '../widgets/artisan_studio_tips.dart';

/// Screen 2: Matches 'p2-camer open.png'
/// Initial camera capture screen with Step 2 of 3 Product Photography header,
/// clean camera viewfinder canvas, studio tips, and terracotta shutter trigger.
class CameraCaptureScreen extends StatelessWidget {
  final VoidCallback onCapture;
  final VoidCallback onBack;

  const CameraCaptureScreen({
    super.key,
    required this.onCapture,
    required this.onBack,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      appBar: AddProductAppBar(
        title: 'Product Photography',
        stepSubtitle: 'STEP 2 OF 3',
        onBack: onBack,
      ),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Column(
            children: [
              // Large Camera Viewfinder Canvas
              Expanded(
                child: Container(
                  width: double.infinity,
                  decoration: BoxDecoration(
                    color: const Color(0xFFD3D7D9),
                    borderRadius: BorderRadius.circular(16.0),
                  ),
                  child: Stack(
                    children: [
                      // Viewfinder corner marks
                      Positioned(
                        top: 16.0,
                        left: 16.0,
                        child: _buildCornerBracket(isTop: true, isLeft: true),
                      ),
                      Positioned(
                        top: 16.0,
                        right: 16.0,
                        child: _buildCornerBracket(isTop: true, isLeft: false),
                      ),
                      Positioned(
                        bottom: 16.0,
                        left: 16.0,
                        child: _buildCornerBracket(isTop: false, isLeft: true),
                      ),
                      Positioned(
                        bottom: 16.0,
                        right: 16.0,
                        child: _buildCornerBracket(isTop: false, isLeft: false),
                      ),

                      // Center camera icon indicator
                      Center(
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(
                              Icons.camera_alt_outlined,
                              size: 48.0,
                              color: Colors.black.withValues(alpha: 0.25),
                            ),
                            const SizedBox(height: 8.0),
                            Text(
                              'Position craft & ₹10 coin inside frame',
                              style: TextStyle(
                                fontSize: 13.0,
                                fontWeight: FontWeight.w600,
                                color: Colors.black.withValues(alpha: 0.35),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 14.0),

              // Studio Tips Card
              const ArtisanStudioTipsCard(),

              const SizedBox(height: 16.0),

              // Concentric Shutter Button
              GestureDetector(
                onTap: onCapture,
                child: Container(
                  width: 76.0,
                  height: 76.0,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: const Color(0xFFEADFD6),
                    border: Border.all(color: const Color(0xFFD5C4B8), width: 3.0),
                  ),
                  padding: const EdgeInsets.all(5.0),
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
                          fontSize: 13.0,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 12.0),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildCornerBracket({required bool isTop, required bool isLeft}) {
    return Container(
      width: 24.0,
      height: 24.0,
      decoration: BoxDecoration(
        border: Border(
          top: isTop
              ? BorderSide(color: Colors.white.withValues(alpha: 0.8), width: 3.0)
              : BorderSide.none,
          bottom: !isTop
              ? BorderSide(color: Colors.white.withValues(alpha: 0.8), width: 3.0)
              : BorderSide.none,
          left: isLeft
              ? BorderSide(color: Colors.white.withValues(alpha: 0.8), width: 3.0)
              : BorderSide.none,
          right: !isLeft
              ? BorderSide(color: Colors.white.withValues(alpha: 0.8), width: 3.0)
              : BorderSide.none,
        ),
      ),
    );
  }
}
