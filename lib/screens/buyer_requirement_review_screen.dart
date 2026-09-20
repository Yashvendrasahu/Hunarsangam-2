// lib/screens/buyer_requirement_review_screen.dart

import 'package:flutter/material.dart';
import '../widgets/buyer_bottom_nav_bar.dart';

class BuyerRequirementReviewScreen extends StatelessWidget {
  final VoidCallback onBack;
  final VoidCallback onContinue;
  final VoidCallback onOpenRequirements;
  final VoidCallback onOpenDiscover;
  final VoidCallback onOpenHome;

  const BuyerRequirementReviewScreen({
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
        title: const Text('Review Parsed Requirement (Step 2/4)', style: TextStyle(color: Color(0xFF2D2421), fontSize: 15, fontWeight: FontWeight.w800)),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: const Color(0xFFE8F5E9),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFC8E6C9)),
              ),
              child: Row(
                children: const [
                  Icon(Icons.auto_awesome, color: Color(0xFF2E7D32), size: 22),
                  SizedBox(width: 10),
                  Expanded(
                    child: Text('AI extracted key procurement specifications from your speech.', style: TextStyle(color: Color(0xFF1B5E20), fontSize: 12.5, fontWeight: FontWeight.w600)),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFEADFD6)),
              ),
              child: Column(
                children: [
                  _buildRow('Craft Category', 'Bamboo & Cane Weaving'),
                  const Divider(height: 16, color: Color(0xFFEADBCE)),
                  _buildRow('Quantity Requested', '200 pieces'),
                  const Divider(height: 16, color: Color(0xFFEADBCE)),
                  _buildRow('Target Unit Price', '₹280 / piece'),
                  const Divider(height: 16, color: Color(0xFFEADBCE)),
                  _buildRow('Required Delivery', '28 April 2026'),
                  const Divider(height: 16, color: Color(0xFFEADBCE)),
                  _buildRow('Destination City', 'Mumbai, Maharashtra'),
                ],
              ),
            ),
            const SizedBox(height: 24),
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
                child: const Text('Continue to Image Specs', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
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

  Widget _buildRow(String label, String value) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(label, style: const TextStyle(fontSize: 13, color: Color(0xFF7A685F))),
        Text(value, style: const TextStyle(fontSize: 13.5, fontWeight: FontWeight.w800, color: Color(0xFF2D2421))),
      ],
    );
  }
}
