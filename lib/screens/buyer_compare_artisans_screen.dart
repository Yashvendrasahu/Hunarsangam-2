// lib/screens/buyer_compare_artisans_screen.dart

import 'package:flutter/material.dart';
import '../widgets/buyer_bottom_nav_bar.dart';

class BuyerCompareArtisansScreen extends StatelessWidget {
  final VoidCallback onBack;
  final Function(String id) onSelectArtisan;
  final VoidCallback onMessageArtisans;
  final VoidCallback onOpenRequirements;
  final VoidCallback onOpenDiscover;
  final VoidCallback onOpenHome;

  const BuyerCompareArtisansScreen({
    super.key,
    required this.onBack,
    required this.onSelectArtisan,
    required this.onMessageArtisans,
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
        title: const Text('Side-by-Side Comparison', style: TextStyle(color: Color(0xFF2D2421), fontSize: 16, fontWeight: FontWeight.w800)),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFEADFD6)),
              ),
              child: Column(
                children: [
                  _buildComparisonRow('Metric', 'Ramu Kumar', 'Subhash D.'),
                  const Divider(height: 16, color: Color(0xFFEADBCE)),
                  _buildComparisonRow('Unit Quote', '₹280', '₹295'),
                  const Divider(height: 16, color: Color(0xFFEADBCE)),
                  _buildComparisonRow('Lead Time', '14 Days', '18 Days'),
                  const Divider(height: 16, color: Color(0xFFEADBCE)),
                  _buildComparisonRow('GI Certification', 'Verified', 'Verified'),
                  const Divider(height: 16, color: Color(0xFFEADBCE)),
                  _buildComparisonRow('Buyer Rating', '4.9 ★ (120)', '4.7 ★ (68)'),
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
                onPressed: () => onSelectArtisan('art_1'),
                child: const Text('Select Ramu Kumar & Lock Escrow', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
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

  Widget _buildComparisonRow(String metric, String val1, String val2) {
    return Row(
      children: [
        Expanded(flex: 2, child: Text(metric, style: const TextStyle(fontSize: 12.5, color: Color(0xFF7A685F), fontWeight: FontWeight.w600))),
        Expanded(flex: 2, child: Text(val1, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800, color: Color(0xFFA84318)))),
        Expanded(flex: 2, child: Text(val2, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF2D2421)))),
      ],
    );
  }
}
