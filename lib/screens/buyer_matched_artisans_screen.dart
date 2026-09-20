// lib/screens/buyer_matched_artisans_screen.dart

import 'package:flutter/material.dart';
import '../widgets/buyer_bottom_nav_bar.dart';

class BuyerMatchedArtisansScreen extends StatelessWidget {
  final VoidCallback onBack;
  final VoidCallback onCompare;
  final Function(String id) onViewArtisan;
  final VoidCallback onOpenRequirements;
  final VoidCallback onOpenDiscover;
  final VoidCallback onOpenHome;

  const BuyerMatchedArtisansScreen({
    super.key,
    required this.onBack,
    required this.onCompare,
    required this.onViewArtisan,
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
        title: const Text('Matched Artisans (3 Found)', style: TextStyle(color: Color(0xFF2D2421), fontSize: 16, fontWeight: FontWeight.w800)),
        actions: [
          TextButton(
            onPressed: onCompare,
            child: const Text('Compare All', style: TextStyle(color: Color(0xFFA84318), fontWeight: FontWeight.w800)),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _buildMatchCard(
            name: 'Ramu Kumar (Barabanki Cluster)',
            score: '98% Match',
            quote: '₹280 / piece',
            capacity: '450 pcs/mo capacity • GI Verified',
            onTap: () => onViewArtisan('art_1'),
          ),
          const SizedBox(height: 12),
          _buildMatchCard(
            name: 'Subhash Debbarma (Tripura Collective)',
            score: '92% Match',
            quote: '₹295 / piece',
            capacity: '600 pcs/mo capacity • GI Verified',
            onTap: () => onViewArtisan('art_2'),
          ),
          const SizedBox(height: 12),
          _buildMatchCard(
            name: 'Kavitha K. (Wayanad Artisans)',
            score: '88% Match',
            quote: '₹310 / piece',
            capacity: '300 pcs/mo capacity • State Awardee',
            onTap: () => onViewArtisan('art_3'),
          ),
        ],
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

  Widget _buildMatchCard({
    required String name,
    required String score,
    required String quote,
    required String capacity,
    required VoidCallback onTap,
  }) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(16),
      child: Container(
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
                Text(score, style: const TextStyle(fontWeight: FontWeight.w800, color: Color(0xFF2E7D32), fontSize: 12)),
                Text(quote, style: const TextStyle(fontWeight: FontWeight.w900, color: Color(0xFFA84318), fontSize: 14)),
              ],
            ),
            const SizedBox(height: 6),
            Text(name, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: Color(0xFF2D2421))),
            const SizedBox(height: 4),
            Text(capacity, style: const TextStyle(fontSize: 12, color: Color(0xFF7A685F))),
          ],
        ),
      ),
    );
  }
}
