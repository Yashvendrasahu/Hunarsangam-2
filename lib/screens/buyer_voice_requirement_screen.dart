// lib/screens/buyer_voice_requirement_screen.dart

import 'package:flutter/material.dart';
import '../widgets/buyer_bottom_nav_bar.dart';

class BuyerVoiceRequirementScreen extends StatelessWidget {
  final VoidCallback onBack;
  final VoidCallback onContinue;
  final VoidCallback onOpenRequirements;
  final VoidCallback onOpenDiscover;
  final VoidCallback onOpenHome;

  const BuyerVoiceRequirementScreen({
    super.key,
    required this.onBack,
    required this.onContinue,
    required this.onOpenRequirements,
    required this.onOpenDiscover,
    required this.onOpenHome,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
          onPressed: onBack,
        ),
        title: const Text('Voice Post Requirement (Step 1/4)', style: TextStyle(color: Color(0xFF2D2421), fontSize: 15, fontWeight: FontWeight.w800)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            const Spacer(),
            GestureDetector(
              onTap: onContinue,
              child: Container(
                width: 100,
                height: 100,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: const Color(0xFFA84318),
                  boxShadow: [
                    BoxShadow(
                      color: const Color(0xFFA84318).withOpacity(0.3),
                      blurRadius: 20,
                      spreadRadius: 5,
                    ),
                  ],
                ),
                child: const Icon(Icons.mic, color: Colors.white, size: 48),
              ),
            ),
            const SizedBox(height: 24),
            const Text('Tap & Speak Your Sourcing Needs', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
            const SizedBox(height: 8),
            const Text(
              'e.g. "We need 200 units of handmade terracotta bowls delivered to Mumbai by next month, budget ₹250 per piece"',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 13, color: Color(0xFF7A685F), height: 1.4),
            ),
            const Spacer(),
            SizedBox(
              width: double.infinity,
              height: 52,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFA84318),
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
                onPressed: onContinue,
                child: const Text('Process Voice Requirement', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BuyerBottomNavBar(
        currentIndex: 2,
        onTap: (idx) {
          if (idx == 0) onOpenHome();
          if (idx == 1) onOpenDiscover();
          if (idx == 2) onOpenRequirements();
        },
      ),
    );
  }
}
