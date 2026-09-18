// lib/widgets/onboarding_header.dart

import 'package:flutter/material.dart';

/// Top bar with Back button, Step counter pill (e.g. "Step 1 of 5 • Artisan Setup"),
/// and language selector pill.
class OnboardingHeader extends StatelessWidget {
  final int? currentStep;
  final int totalSteps;
  final String? stepLabel;
  final String currentLanguage;
  final VoidCallback? onBack;
  final VoidCallback? onLanguageTap;
  final bool showHelpIcon;

  const OnboardingHeader({
    super.key,
    this.currentStep,
    this.totalSteps = 5,
    this.stepLabel,
    this.currentLanguage = 'English',
    this.onBack,
    this.onLanguageTap,
    this.showHelpIcon = false,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Back or Brand icon button
          if (onBack != null)
            IconButton(
              icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
              onPressed: onBack,
              splashRadius: 22.0,
            )
          else
            Row(
              children: [
                Container(
                  width: 34.0,
                  height: 34.0,
                  decoration: BoxDecoration(
                    color: const Color(0xFFFFFBF9),
                    borderRadius: BorderRadius.circular(10.0),
                    border: Border.all(color: const Color(0xFFE5D5CB)),
                  ),
                  padding: const EdgeInsets.all(4.0),
                  child: const Center(
                    child: Text(
                      'हुनर',
                      style: TextStyle(
                        fontSize: 10.0,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFF7C3F24),
                      ),
                    ),
                  ),
                ),
                const SizedBox(width: 8.0),
                const Text(
                  'HunarSangam',
                  style: TextStyle(
                    fontSize: 17.0,
                    fontWeight: FontWeight.w800,
                    color: Color(0xFF7C3F24),
                  ),
                ),
              ],
            ),

          // Step Pill (if in step sequence) or Onboarding Step Tag
          if (currentStep != null)
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 5.0),
              decoration: BoxDecoration(
                color: const Color(0xFFFDE8DF),
                borderRadius: BorderRadius.circular(20.0),
              ),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    width: 7.0,
                    height: 7.0,
                    decoration: const BoxDecoration(
                      color: Color(0xFFD85A2A),
                      shape: BoxShape.circle,
                    ),
                  ),
                  const SizedBox(width: 6.0),
                  Text(
                    'Step $currentStep of $totalSteps • ${stepLabel ?? "Artisan Setup"}',
                    style: const TextStyle(
                      fontSize: 11.5,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF6B4232),
                    ),
                  ),
                ],
              ),
            ),

          // Right Action (Language Dropdown or Help icon)
          if (showHelpIcon)
            IconButton(
              icon: const Icon(Icons.help_outline_rounded, color: Color(0xFF6E5D53)),
              onPressed: () {},
            )
          else
            InkWell(
              onTap: onLanguageTap,
              borderRadius: BorderRadius.circular(20.0),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFDFB),
                  borderRadius: BorderRadius.circular(20.0),
                  border: Border.all(color: const Color(0xFFE5D5CB)),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Icon(Icons.translate_rounded, size: 14.0, color: Color(0xFF8C5338)),
                    const SizedBox(width: 4.0),
                    Text(
                      currentLanguage.split(' ').first,
                      style: const TextStyle(
                        fontSize: 12.0,
                        fontWeight: FontWeight.w600,
                        color: Color(0xFF4A3B32),
                      ),
                    ),
                    const SizedBox(width: 2.0),
                    const Icon(Icons.arrow_drop_down, size: 16.0, color: Color(0xFF6E5D53)),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}
