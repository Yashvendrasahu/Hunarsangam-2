// lib/screens/profile_photo_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';
import '../widgets/onboarding_header.dart';
import '../widgets/action_button.dart';

class ProfilePhotoScreen extends StatefulWidget {
  final OnboardingState state;
  final ValueChanged<OnboardingState> onStateChanged;
  final VoidCallback onBack;
  final VoidCallback onContinue;

  const ProfilePhotoScreen({
    super.key,
    required this.state,
    required this.onStateChanged,
    required this.onBack,
    required this.onContinue,
  });

  @override
  State<ProfilePhotoScreen> createState() => _ProfilePhotoScreenState();
}

class _ProfilePhotoScreenState extends State<ProfilePhotoScreen> {
  late bool _hasPhoto;

  @override
  void initState() {
    super.initState();
    _hasPhoto = widget.state.hasProfilePhoto;
  }

  void _simulatePhotoSelection() {
    setState(() {
      _hasPhoto = true;
    });
    widget.onStateChanged(
      widget.state.copyWith(
        hasProfilePhoto: true,
        profilePhotoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      ),
    );
  }

  void _simulateRetake() {
    setState(() {
      _hasPhoto = false;
    });
    widget.onStateChanged(
      widget.state.copyWith(
        hasProfilePhoto: false,
        profilePhotoUrl: null,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            OnboardingHeader(
              currentStep: 4,
              totalSteps: 5,
              stepLabel: 'Craft Maker Setup',
              onBack: widget.onBack,
              currentLanguage: widget.state.selectedLanguage,
            ),

            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 12.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const SizedBox(height: 8.0),

                    const Text(
                      'Add Your Profile Photo',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 27.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF221C19),
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    const Text(
                      'A clear photo helps buyers recognize and trust you.',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 14.0,
                        color: Color(0xFF6B584E),
                        height: 1.35,
                      ),
                    ),

                    const SizedBox(height: 36.0),

                    // Central Circular Avatar Container with Dashed Border
                    Stack(
                      alignment: Alignment.bottomRight,
                      children: [
                        CustomPaint(
                          painter: _DashedCirclePainter(
                            color: _hasPhoto ? const Color(0xFF00E676) : const Color(0xFFE66B38),
                          ),
                          child: Container(
                            width: 170.0,
                            height: 170.0,
                            padding: const EdgeInsets.all(10.0),
                            child: Container(
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: const Color(0xFFF7EFE9),
                                image: _hasPhoto
                                    ? const DecorationImage(
                                        image: NetworkImage(
                                          'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
                                        ),
                                        fit: BoxFit.cover,
                                      )
                                    : null,
                              ),
                              child: _hasPhoto
                                  ? null
                                  : const Center(
                                      child: Icon(
                                        Icons.person_outline_rounded,
                                        size: 72.0,
                                        color: Color(0xFF5D7A68),
                                      ),
                                    ),
                            ),
                          ),
                        ),

                        // Camera Badge (shown before photo added)
                        if (!_hasPhoto)
                          Positioned(
                            bottom: 8.0,
                            right: 8.0,
                            child: Container(
                              padding: const EdgeInsets.all(8.0),
                              decoration: const BoxDecoration(
                                color: Color(0xFFD85A2A),
                                shape: BoxShape.circle,
                                boxShadow: [
                                  BoxShadow(
                                    color: Color(0x33000000),
                                    blurRadius: 6.0,
                                    offset: Offset(0, 2),
                                  ),
                                ],
                              ),
                              child: const Icon(
                                Icons.camera_alt,
                                size: 18.0,
                                color: Colors.white,
                              ),
                            ),
                          ),
                      ],
                    ),

                    const SizedBox(height: 40.0),

                    // Two Photo Actions
                    ActionButton(
                      text: _hasPhoto ? 'Retake photo' : 'Take a Photo',
                      icon: Icons.camera_alt_outlined,
                      isOutlined: true,
                      onPressed: _hasPhoto ? _simulateRetake : _simulatePhotoSelection,
                    ),

                    const SizedBox(height: 14.0),

                    ActionButton(
                      text: _hasPhoto ? 'Change photo' : 'Choose from Gallery',
                      icon: Icons.photo_library_outlined,
                      isOutlined: true,
                      onPressed: _simulatePhotoSelection,
                    ),

                    const SizedBox(height: 24.0),
                  ],
                ),
              ),
            ),

            // Fixed Bottom Action Bar
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  ActionButton(
                    text: 'Continue',
                    backgroundColor: const Color(0xFFE66B38),
                    onPressed: widget.onContinue,
                  ),
                  if (!_hasPhoto) ...[
                    const SizedBox(height: 10.0),
                    TextButton(
                      onPressed: widget.onContinue,
                      child: const Text(
                        'Skip for now',
                        style: TextStyle(
                          fontSize: 13.5,
                          fontWeight: FontWeight.w700,
                          color: Color(0xFF6B584E),
                        ),
                      ),
                    ),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _DashedCirclePainter extends CustomPainter {
  final Color color;

  _DashedCirclePainter({required this.color});

  @override
  void paint(Canvas canvas, Size size) {
    final Paint paint = Paint()
      ..color = color
      ..strokeWidth = 2.0
      ..style = PaintingStyle.stroke;

    final double radius = size.width / 2;
    const double dashWidth = 6.0;
    const double dashSpace = 4.0;
    final double circumference = 2 * 3.141592653589793 * radius;
    final int dashCount = (circumference / (dashWidth + dashSpace)).floor();

    for (int i = 0; i < dashCount; i++) {
      final double startAngle = (i * (dashWidth + dashSpace) / circumference) * 2 * 3.141592653589793;
      final double sweepAngle = (dashWidth / circumference) * 2 * 3.141592653589793;
      canvas.drawArc(
        Rect.fromCircle(center: Offset(radius, radius), radius: radius),
        startAngle,
        sweepAngle,
        false,
        paint,
      );
    }
  }

  @override
  bool shouldRepaint(covariant _DashedCirclePainter oldDelegate) => oldDelegate.color != color;
}
