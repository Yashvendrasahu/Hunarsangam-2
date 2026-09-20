// lib/screens/buyer_reference_image_screen.dart

import 'package:flutter/material.dart';
import '../widgets/buyer_bottom_nav_bar.dart';

class BuyerReferenceImageScreen extends StatelessWidget {
  final VoidCallback onBack;
  final VoidCallback onContinue;
  final VoidCallback onSkip;
  final VoidCallback onOpenRequirements;
  final VoidCallback onOpenDiscover;
  final VoidCallback onOpenHome;

  const BuyerReferenceImageScreen({
    super.key,
    required this.onBack,
    required this.onContinue,
    required this.onSkip,
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
        title: const Text('Add Reference Image (Step 3/4)', style: TextStyle(color: Color(0xFF2D2421), fontSize: 15, fontWeight: FontWeight.w800)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Container(
              height: 200,
              width: double.infinity,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFA84318), style: BorderStyle.solid),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.add_photo_alternate_outlined, color: Color(0xFFA84318), size: 48),
                  SizedBox(height: 10),
                  Text('Upload Reference Moodboard or Spec Sheet', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF2D2421))),
                  Text('PNG, JPG up to 10MB', style: TextStyle(fontSize: 11, color: Color(0xFF7A685F))),
                ],
              ),
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
                child: const Text('Proceed to Cluster Matching', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
              ),
            ),
            const SizedBox(height: 12),
            TextButton(
              onPressed: onSkip,
              child: const Text('Skip Photo Upload', style: TextStyle(color: Color(0xFF7A685F), fontWeight: FontWeight.w600)),
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
