// lib/screens/profile_photo_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';
import '../widgets/onboarding_header.dart';
import '../widgets/action_button.dart';

class ProfilePhotoScreen extends StatelessWidget {
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
  Widget build(BuildContext context) {
    final photoUrl = state.profilePhotoUrl.isNotEmpty
        ? state.profilePhotoUrl
        : 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80';

    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              OnboardingHeader(
                currentStep: 6,
                totalSteps: 7,
                title: 'Add Your Workshop Photo',
                subtitle: 'Buyers love seeing the authentic master artisan behind the handcrafted creations',
                onBack: onBack,
              ),
              const Spacer(),
              Center(
                child: Stack(
                  children: [
                    Container(
                      width: 140,
                      height: 140,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(color: const Color(0xFFA84318), width: 3),
                        image: DecorationImage(
                          image: NetworkImage(photoUrl),
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    Positioned(
                      bottom: 0,
                      right: 0,
                      child: Container(
                        padding: const EdgeInsets.all(10),
                        decoration: const BoxDecoration(
                          color: Color(0xFFA84318),
                          shape: BoxShape.circle,
                        ),
                        child: const Icon(Icons.camera_alt, color: Colors.white, size: 20),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),
              Center(
                child: Text(
                  state.artisanName.isNotEmpty ? state.artisanName : 'Ramu Kumar',
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: Color(0xFF2D2421)),
                ),
              ),
              Center(
                child: Text(
                  state.selectedCraft.isNotEmpty ? state.selectedCraft : 'Master Bamboo Artisan',
                  style: const TextStyle(fontSize: 13, color: Color(0xFF7A685F)),
                ),
              ),
              const Spacer(),
              ActionButton(
                text: 'Continue / आगे बढ़ें',
                onPressed: () {
                  onStateChanged(state.copyWith(profilePhotoUrl: photoUrl));
                  onContinue();
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
