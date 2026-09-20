// lib/screens/buyer_requirements_screen.dart

import 'package:flutter/material.dart';
import '../widgets/buyer_bottom_nav_bar.dart';

class BuyerRequirementsScreen extends StatelessWidget {
  final VoidCallback onBackToHome;
  final VoidCallback onCreateRequirement;
  final VoidCallback onOpenDiscover;
  final VoidCallback onOpenOrders;
  final VoidCallback onOpenProfile;

  const BuyerRequirementsScreen({
    super.key,
    required this.onBackToHome,
    required this.onCreateRequirement,
    required this.onOpenDiscover,
    required this.onOpenOrders,
    required this.onOpenProfile,
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
          onPressed: onBackToHome,
        ),
        title: const Text('Bulk Sourcing Requirements', style: TextStyle(color: Color(0xFF2D2421), fontSize: 16, fontWeight: FontWeight.w800)),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.all(18),
              decoration: BoxDecoration(
                gradient: const LinearGradient(
                  colors: [Color(0xFF8D3412), Color(0xFFA84318)],
                ),
                borderRadius: BorderRadius.circular(18),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Post New Custom Sourcing Need', style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w800)),
                  const SizedBox(height: 6),
                  const Text('AI will match your voice or photo specs directly to certified artisan clusters with capacity.', style: TextStyle(color: Color(0xFFFFD4C2), fontSize: 12, height: 1.4)),
                  const SizedBox(height: 14),
                  ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: const Color(0xFFA84318),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                    ),
                    icon: const Icon(Icons.mic, size: 18),
                    label: const Text('Create Bulk Requirement', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13)),
                    onPressed: onCreateRequirement,
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            const Text('Active Posted Requirements', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w800, color: Color(0xFF2D2421))),
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFEADFD6)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Text('REQ-2026-092', style: TextStyle(fontWeight: FontWeight.w900, color: Color(0xFFA84318), fontSize: 13)),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(color: const Color(0xFFE8F5E9), borderRadius: BorderRadius.circular(6)),
                        child: const Text('3 MATCHES FOUND', style: TextStyle(color: Color(0xFF2E7D32), fontSize: 10, fontWeight: FontWeight.w800)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  const Text('200 Pcs Natural Woven Storage Baskets', style: TextStyle(fontSize: 14.5, fontWeight: FontWeight.w800, color: Color(0xFF2D2421))),
                  const SizedBox(height: 4),
                  const Text('Budget: ₹300/pc • Target Delivery: 30 Apr 2026', style: TextStyle(fontSize: 12, color: Color(0xFF7A685F))),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BuyerBottomNavBar(
        currentIndex: 2,
        onTap: (idx) {
          if (idx == 0) onBackToHome();
          if (idx == 1) onOpenDiscover();
          if (idx == 2) {}
          if (idx == 3) onOpenOrders();
          if (idx == 4) onOpenProfile();
        },
      ),
    );
  }
}
