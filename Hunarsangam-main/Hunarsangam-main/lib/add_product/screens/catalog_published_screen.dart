// lib/add_product/screens/catalog_published_screen.dart

import 'package:flutter/material.dart';
import '../models/product_draft.dart';
import '../widgets/add_product_app_bar.dart';
import '../widgets/distribution_channels_card.dart';
import '../widgets/artisan_bottom_navigation.dart';

/// Screen 10: Matches 'p10 — Product Finalized & ONDC Ready.png'
/// Catalog Published! - B2B Ready • ONDC Synced
/// - Top Success Banner: "Your Craft is Live & Verified!" with green shield
/// - ONDC Network Ready card with GI Tagged Craft Authenticity & Listing Digital ID (#HS-BAM-8842 + QR Code)
/// - Product Catalog Summary card with Verified Dimensions + ₹10 coin badge
/// - Distribution Channels Activated (3 Active)
/// - WhatsApp Direct Share Button: "💬 Share Catalog Card on WhatsApp"
/// - "Go to Artisan Dashboard →" & "🎙️ + Add Another Craft (Voice)"
class CatalogPublishedScreen extends StatelessWidget {
  final ProductDraft draft;
  final VoidCallback onGoToDashboard;
  final VoidCallback onAddAnotherCraft;
  final Function(int)? onNavigateTab;

  const CatalogPublishedScreen({
    super.key,
    required this.draft,
    required this.onGoToDashboard,
    required this.onAddAnotherCraft,
    this.onNavigateTab,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      appBar: AddProductAppBar(
        title: 'Catalog Published!',
        badgeText: 'Active Listing',
        badgeColor: const Color(0xFFE8F5E9),
        badgeTextColor: const Color(0xFF2E7D32),
        onClose: onGoToDashboard,
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Top Success Banner
              Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  color: const Color(0xFFE8F5E9),
                  borderRadius: BorderRadius.circular(18.0),
                  border: Border.all(color: const Color(0xFFC8E6C9)),
                ),
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    Container(
                      width: 48.0,
                      height: 48.0,
                      decoration: const BoxDecoration(
                        color: Color(0xFF2E7D32),
                        shape: BoxShape.circle,
                      ),
                      child: const Center(
                        child: Icon(Icons.check_rounded, color: Colors.white, size: 28.0),
                      ),
                    ),
                    const SizedBox(height: 10.0),
                    const Text(
                      'B2B READY • ONDC SYNCED',
                      style: TextStyle(
                        fontSize: 10.5,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF2E7D32),
                        letterSpacing: 0.5,
                      ),
                    ),
                    const SizedBox(height: 3.0),
                    const Text(
                      'Your Craft is Live & Verified!',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 18.0,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFF1B5E20),
                        letterSpacing: -0.3,
                      ),
                    ),
                    const SizedBox(height: 4.0),
                    Text(
                      '${draft.title} is now discoverable by verified B2B buyers across India.',
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        fontSize: 12.0,
                        color: Color(0xFF2E7D32),
                        height: 1.3,
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 14.0),

              // ONDC Network Ready Card
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFDFB),
                  borderRadius: BorderRadius.circular(18.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.all(14.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          children: const [
                            Icon(Icons.hub_outlined, color: Color(0xFF2E7D32), size: 18.0),
                            SizedBox(width: 6.0),
                            Text(
                              'ONDC Network Ready',
                              style: TextStyle(
                                fontSize: 13.5,
                                fontWeight: FontWeight.w800,
                                color: Color(0xFF221C19),
                              ),
                            ),
                          ],
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 3.0),
                          decoration: BoxDecoration(
                            color: const Color(0xFFE8F5E9),
                            borderRadius: BorderRadius.circular(10.0),
                          ),
                          child: const Text(
                            'Pan-India Reach',
                            style: TextStyle(
                              fontSize: 10.5,
                              fontWeight: FontWeight.w700,
                              color: Color(0xFF2E7D32),
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 10.0),
                    const Divider(height: 1.0, color: Color(0xFFEADFD6)),
                    const SizedBox(height: 10.0),

                    // GI Tagged Authenticity
                    Row(
                      children: [
                        const Icon(Icons.workspace_premium_outlined, color: Color(0xFF8C3A16), size: 18.0),
                        const SizedBox(width: 8.0),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                'GI Tagged Craft Authenticity',
                                style: TextStyle(
                                  fontSize: 11.0,
                                  fontWeight: FontWeight.w700,
                                  color: Color(0xFF7A685F),
                                ),
                              ),
                              Text(
                                '${draft.giCluster} (${draft.giRegNumber})',
                                style: const TextStyle(
                                  fontSize: 12.5,
                                  fontWeight: FontWeight.w800,
                                  color: Color(0xFF221C19),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 10.0),

                    // Listing Digital ID + QR Code
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Text(
                              'Listing Digital ID',
                              style: TextStyle(
                                fontSize: 11.0,
                                color: Color(0xFF7A685F),
                              ),
                            ),
                            Text(
                              draft.digitalListingId,
                              style: const TextStyle(
                                fontSize: 14.0,
                                fontWeight: FontWeight.w900,
                                color: Color(0xFF8C3A16),
                              ),
                            ),
                          ],
                        ),
                        OutlinedButton.icon(
                          onPressed: () {
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(
                                content: Text('ONDC Verified QR Code generated!'),
                                duration: Duration(seconds: 1),
                              ),
                            );
                          },
                          icon: const Icon(Icons.qr_code_2_rounded, size: 16.0, color: Color(0xFF4A372D)),
                          label: const Text(
                            'QR Code',
                            style: TextStyle(
                              fontSize: 12.0,
                              fontWeight: FontWeight.w700,
                              color: Color(0xFF4A372D),
                            ),
                          ),
                          style: OutlinedButton.styleFrom(
                            padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 6.0),
                            side: const BorderSide(color: Color(0xFFE5D5CB)),
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(12.0),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 14.0),

              // Product Catalog Summary Card
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFDFB),
                  borderRadius: BorderRadius.circular(18.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                clipBehavior: Clip.antiAlias,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Stack(
                      children: [
                        Image.network(
                          draft.photoUrl,
                          height: 150.0,
                          width: double.infinity,
                          fit: BoxFit.cover,
                          errorBuilder: (ctx, err, stack) => Container(
                            height: 150.0,
                            color: const Color(0xFFF3E7DF),
                            child: const Center(
                              child: Icon(Icons.shopping_basket_outlined, size: 40.0, color: Color(0xFF8C3A16)),
                            ),
                          ),
                        ),
                        Positioned(
                          top: 8.0,
                          left: 8.0,
                          child: Container(
                            padding: const EdgeInsets.symmetric(horizontal: 7.0, vertical: 3.5),
                            decoration: BoxDecoration(
                              color: Colors.black.withValues(alpha: 0.7),
                              borderRadius: BorderRadius.circular(8.0),
                            ),
                            child: const Row(
                              children: [
                                Icon(Icons.verified, color: Color(0xFF69F0AE), size: 10.0),
                                SizedBox(width: 3.0),
                                Text(
                                  'Verified Dimensions',
                                  style: TextStyle(
                                    fontSize: 9.5,
                                    fontWeight: FontWeight.w700,
                                    color: Colors.white,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                        Positioned(
                          bottom: 8.0,
                          right: 8.0,
                          child: Container(
                            padding: const EdgeInsets.symmetric(horizontal: 7.0, vertical: 3.5),
                            decoration: BoxDecoration(
                              color: Colors.black.withValues(alpha: 0.7),
                              borderRadius: BorderRadius.circular(8.0),
                            ),
                            child: const Row(
                              children: [
                                Icon(Icons.monetization_on, color: Color(0xFFFFD54F), size: 10.0),
                                SizedBox(width: 3.0),
                                Text(
                                  'Verified with ₹10 coin',
                                  style: TextStyle(
                                    fontSize: 9.5,
                                    fontWeight: FontWeight.w700,
                                    color: Colors.white,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                    Padding(
                      padding: const EdgeInsets.all(12.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            draft.title,
                            style: const TextStyle(
                              fontSize: 15.5,
                              fontWeight: FontWeight.w800,
                              color: Color(0xFF221C19),
                            ),
                          ),
                          const SizedBox(height: 6.0),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                '₹${draft.basePrice} / pc',
                                style: const TextStyle(
                                  fontSize: 15.0,
                                  fontWeight: FontWeight.w900,
                                  color: Color(0xFF8C3A16),
                                ),
                              ),
                              Text(
                                '${draft.diameterIn}" W × ${draft.heightIn}" H, Wt: ${draft.estWeightGrams}g',
                                style: const TextStyle(
                                  fontSize: 11.5,
                                  fontWeight: FontWeight.w600,
                                  color: Color(0xFF4A372D),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 4.0),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Text(
                                '📈 Capacity: ${draft.dailyCapacityPcs} pcs / day',
                                style: const TextStyle(
                                  fontSize: 11.0,
                                  fontWeight: FontWeight.w700,
                                  color: Color(0xFF2E7D32),
                                ),
                              ),
                              Text(
                                '⏱️ Lead: ${draft.leadTime}',
                                style: const TextStyle(
                                  fontSize: 11.0,
                                  color: Color(0xFF7A685F),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 14.0),

              // Distribution Channels Activated Card
              const DistributionChannelsCard(),

              const SizedBox(height: 14.0),

              // WhatsApp Share Button (Green)
              SizedBox(
                width: double.infinity,
                height: 50.0,
                child: ElevatedButton.icon(
                  onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('Sharing catalog card link on WhatsApp...'),
                        backgroundColor: Color(0xFF25D366),
                      ),
                    );
                  },
                  icon: const Icon(Icons.chat_bubble_rounded, color: Colors.white, size: 20.0),
                  label: const Text(
                    'Share Catalog Card on WhatsApp',
                    style: TextStyle(
                      fontSize: 14.5,
                      fontWeight: FontWeight.w800,
                      color: Colors.white,
                    ),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF25D366),
                    elevation: 1,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16.0),
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 12.0),

              // Primary Action: Go to Artisan Dashboard
              SizedBox(
                width: double.infinity,
                height: 52.0,
                child: ElevatedButton(
                  onPressed: onGoToDashboard,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF8C3A16),
                    foregroundColor: Colors.white,
                    elevation: 1,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16.0),
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Text(
                        'Go to Artisan Dashboard',
                        style: TextStyle(
                          fontSize: 15.0,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      SizedBox(width: 6.0),
                      Icon(Icons.arrow_forward_rounded, size: 18.0),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 10.0),

              // Secondary Action: Add Another Craft (Voice)
              SizedBox(
                width: double.infinity,
                height: 48.0,
                child: OutlinedButton.icon(
                  onPressed: onAddAnotherCraft,
                  icon: const Icon(Icons.mic_rounded, color: Color(0xFF8C3A16), size: 18.0),
                  label: const Text(
                    '+ Add Another Craft (Voice)',
                    style: TextStyle(
                      fontSize: 13.5,
                      fontWeight: FontWeight.w700,
                      color: Color(0xFF8C3A16),
                    ),
                  ),
                  style: OutlinedButton.styleFrom(
                    backgroundColor: const Color(0xFFFBF4EE),
                    side: const BorderSide(color: Color(0xFFEADFD6)),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16.0),
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 20.0),
            ],
          ),
        ),
      ),
      bottomNavigationBar: ArtisanBottomNavigation(
        currentIndex: 1,
        onTap: onNavigateTab,
      ),
    );
  }
}
