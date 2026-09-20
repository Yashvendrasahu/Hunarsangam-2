// lib/screens/buyer_profile_screen.dart

import 'package:flutter/material.dart';
import '../widgets/buyer_bottom_nav_bar.dart';
import '../widgets/brand_logo_card.dart';

class BuyerProfileScreen extends StatelessWidget {
  final VoidCallback onBack;
  final VoidCallback onLogOut;
  final Function(int)? onNavTap;

  const BuyerProfileScreen({
    super.key,
    required this.onBack,
    required this.onLogOut,
    this.onNavTap,
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
        title: Row(
          children: const [
            HunarSangamLogoBadge(size: 26.0),
            SizedBox(width: 8.0),
            Text('Buyer Profile', style: TextStyle(color: Color(0xFF2D2421), fontSize: 16, fontWeight: FontWeight.w800)),
          ],
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          Container(
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: const Color(0xFFEADFD6)),
            ),
            child: Column(
              children: const [
                CircleAvatar(
                  radius: 36,
                  backgroundColor: Color(0xFFFDECE8),
                  child: Text('F', style: TextStyle(color: Color(0xFFA84318), fontSize: 24, fontWeight: FontWeight.w900)),
                ),
                SizedBox(height: 10),
                Text('FabIndia Retail Sourcing', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w900, color: Color(0xFF2D2421))),
                Text('Verified Enterprise Retailer • GSTIN Verified', style: TextStyle(fontSize: 12, color: Color(0xFF2E7D32), fontWeight: FontWeight.w700)),
              ],
            ),
          ),
          const SizedBox(height: 20),
          _buildOptionTile(Icons.history, 'Sourcing History & Invoices', () {}),
          _buildOptionTile(Icons.account_balance_wallet_outlined, 'Escrow Wallet & Payouts', () {}),
          _buildOptionTile(Icons.security, 'Cluster Quality Guarantee Settings', () {}),
          _buildOptionTile(Icons.logout, 'Log Out', onLogOut, isDestructive: true),
        ],
      ),
      bottomNavigationBar: BuyerBottomNavBar(
        currentIndex: 4,
        onTap: (idx) => onNavTap?.call(idx),
      ),
    );
  }

  Widget _buildOptionTile(IconData icon, String title, VoidCallback onTap, {bool isDestructive = false}) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      child: ListTile(
        leading: Icon(icon, color: isDestructive ? Colors.red : const Color(0xFFA84318)),
        title: Text(title, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 13.5, color: isDestructive ? Colors.red : const Color(0xFF2D2421))),
        trailing: const Icon(Icons.chevron_right, color: Color(0xFF8D6E63)),
        onTap: onTap,
      ),
    );
  }
}
