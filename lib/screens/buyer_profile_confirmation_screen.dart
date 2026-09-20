// lib/screens/buyer_profile_confirmation_screen.dart

import 'package:flutter/material.dart';
import '../models/buyer_onboarding_model.dart';
import '../widgets/action_button.dart';

class BuyerProfileConfirmationScreen extends StatelessWidget {
  final BuyerOnboardingModel model;
  final VoidCallback onGoToDashboard;
  final VoidCallback onViewProfile;
  final VoidCallback? onBack;

  const BuyerProfileConfirmationScreen({
    super.key,
    required this.model,
    required this.onGoToDashboard,
    required this.onViewProfile,
    this.onBack,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 80,
                height: 80,
                decoration: const BoxDecoration(
                  color: Color(0xFFE8F5E9),
                  shape: BoxShape.circle,
                ),
                child: const Icon(Icons.verified, color: Color(0xFF2E7D32), size: 48),
              ),
              const SizedBox(height: 20),
              const Text(
                'Buyer Profile Registered!',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.w900,
                  color: Color(0xFF2D2421),
                ),
              ),
              const SizedBox(height: 8),
              Text(
                'Welcome, ${model.yourName.isNotEmpty ? model.yourName : "Valued Partner"}! You now have direct access to India’s verified GI craft clusters with escrow-secured bulk ordering.',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 13, color: Color(0xFF7A685F), height: 1.4),
              ),
              const SizedBox(height: 32),
              ActionButton(
                text: 'Explore Verified Artisans',
                onPressed: onGoToDashboard,
              ),
              const SizedBox(height: 12),
              TextButton(
                onPressed: onViewProfile,
                child: const Text(
                  'View & Edit Profile Details',
                  style: TextStyle(color: Color(0xFFA84318), fontWeight: FontWeight.w700),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
