// lib/add_product/screens/fair_pricing_screen.dart

import 'package:flutter/material.dart';
import '../models/product_draft.dart';
import '../widgets/artisan_bottom_navigation.dart';

/// Screen 7: Matches 'p7— Fair Pricing Assistant.png' 100%
/// Know Your Fair Price - Step 3 of 3 • Price Intelligence
/// - App Bar: Back arrow, "Know Your Fair Price", "Step 3 of 3 • Price Intelligence", "🔊 Listen" button
/// - AI Cost & Wage Calculator card with orange calculator icon and "Active" badge
/// - Product Reference Card with GI Certified • Assam Bamboo and Cluster Code: ASM-KAM-42
/// - Interactive Cost Breakdown (Raw Materials ₹85, Artisan Labor & Time ₹120 [Benchmark], Cluster Overhead ₹25, Fair Profit ₹50)
/// - Voice Adjustment Bar: "Say 'Increase labor to 150 rupees' or tap to..." + Mic
/// - Total Production Cost (₹230) & Recommended Base Price (₹280/piece) with Fair Wage Certified badge
/// - Market Benchmark Comparison (Middleman ₹160 [Exploitative] vs HunarSangam ₹250-₹280 [Fair & Viable] vs Retail ₹650-₹850)
/// - Custom + "Lock Fair Price (₹280) & Proceed →" CTAs
/// - Footer: Verified against Ministry of Textiles & Handicraft Fair Wage Index
/// - 5-tab Artisan Bottom Navigation with Products active
class FairPricingScreen extends StatefulWidget {
  final ProductDraft draft;
  final Function(int lockedPrice) onLockPrice;
  final VoidCallback onBack;
  final Function(int)? onNavigateTab;

  const FairPricingScreen({
    super.key,
    required this.draft,
    required this.onLockPrice,
    required this.onBack,
    this.onNavigateTab,
  });

  @override
  State<FairPricingScreen> createState() => _FairPricingScreenState();
}

class _FairPricingScreenState extends State<FairPricingScreen> {
  double _rawMaterials = 85.0;
  double _labor = 120.0;
  double _overhead = 25.0;
  double _profit = 50.0;

  double get _totalCost => _rawMaterials + _labor + _overhead;
  int get _recommendedPrice => 280;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      appBar: AppBar(
        backgroundColor: const Color(0xFFFFFDFB),
        elevation: 0,
        scrolledUnderElevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Color(0xFF221C19), size: 22.0),
          onPressed: widget.onBack,
        ),
        titleSpacing: 0,
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const [
            Text(
              'Know Your Fair Price',
              style: TextStyle(
                fontSize: 16.5,
                fontWeight: FontWeight.w800,
                color: Color(0xFF221C19),
              ),
            ),
            SizedBox(height: 1.0),
            Text(
              'Step 3 of 3 • Price Intelligence',
              style: TextStyle(
                fontSize: 11.0,
                fontWeight: FontWeight.w800,
                color: Color(0xFF8C3A16),
              ),
            ),
          ],
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 14.0),
            child: Center(
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
                decoration: BoxDecoration(
                  color: const Color(0xFFFBF2EB),
                  borderRadius: BorderRadius.circular(16.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                child: const Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.volume_up_rounded, size: 14.0, color: Color(0xFF8C3A16)),
                    SizedBox(width: 4.0),
                    Text(
                      'Listen',
                      style: TextStyle(
                        fontSize: 11.5,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF8C3A16),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
        bottom: const PreferredSize(
          preferredSize: Size.fromHeight(1.0),
          child: Divider(height: 1.0, color: Color(0xFFEADFD6)),
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Card 1: AI Cost & Wage Calculator Banner
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFDFB),
                  borderRadius: BorderRadius.circular(16.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.all(12.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      width: 36.0,
                      height: 36.0,
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFE8DC),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                      child: const Center(
                        child: Icon(Icons.calculate_outlined, color: Color(0xFF8C3A16), size: 20.0),
                      ),
                    ),
                    const SizedBox(width: 10.0),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              const Text(
                                'AI Cost & Wage Calculator',
                                style: TextStyle(
                                  fontSize: 14.0,
                                  fontWeight: FontWeight.w800,
                                  color: Color(0xFF221C19),
                                ),
                              ),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 6.0, vertical: 2.0),
                                decoration: BoxDecoration(
                                  color: const Color(0xFFD4EFDF),
                                  borderRadius: BorderRadius.circular(6.0),
                                ),
                                child: const Text(
                                  'Active',
                                  style: TextStyle(
                                    fontSize: 9.5,
                                    fontWeight: FontWeight.w800,
                                    color: Color(0xFF1E824C),
                                  ),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 3.0),
                          const Text(
                            'Ensuring you never sell below fair living wage while staying competitive for bulk B2B buyers.',
                            style: TextStyle(
                              fontSize: 11.0,
                              color: Color(0xFF7A685F),
                              height: 1.3,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 12.0),

              // Card 2: Product Reference Row
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFDFB),
                  borderRadius: BorderRadius.circular(14.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.all(10.0),
                child: Row(
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(8.0),
                      child: Image.network(
                        'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80',
                        width: 48.0,
                        height: 48.0,
                        fit: BoxFit.cover,
                        errorBuilder: (ctx, err, stack) => Container(
                          width: 48.0,
                          height: 48.0,
                          color: const Color(0xFFEADFD6),
                          child: const Icon(Icons.shopping_basket_outlined, size: 20.0),
                        ),
                      ),
                    ),
                    const SizedBox(width: 10.0),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          Row(
                            children: [
                              Icon(Icons.verified, color: Color(0xFF1E824C), size: 12.0),
                              SizedBox(width: 3.0),
                              Text(
                                'GI Certified • Assam Bamboo',
                                style: TextStyle(
                                  fontSize: 10.0,
                                  fontWeight: FontWeight.w800,
                                  color: Color(0xFF1E824C),
                                ),
                              ),
                            ],
                          ),
                          SizedBox(height: 2.0),
                          Text(
                            'Handmade Woven Bamboo Fruit Basket',
                            style: TextStyle(
                              fontSize: 12.5,
                              fontWeight: FontWeight.w800,
                              color: Color(0xFF221C19),
                            ),
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                          Text(
                            'Cluster Code: ASM-KAM-42',
                            style: TextStyle(
                              fontSize: 10.5,
                              color: Color(0xFF7A685F),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 14.0),

              // Interactive Cost Breakdown Header
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: const [
                  Row(
                    children: [
                      Icon(Icons.tune_rounded, size: 16.0, color: Color(0xFF8C3A16)),
                      SizedBox(width: 5.0),
                      Text(
                        'Interactive Cost Breakdown',
                        style: TextStyle(
                          fontSize: 13.5,
                          fontWeight: FontWeight.w800,
                          color: Color(0xFF221C19),
                        ),
                      ),
                    ],
                  ),
                  Text(
                    'Tap card to edit',
                    style: TextStyle(
                      fontSize: 10.5,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF7A685F),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 8.0),

              // 4 Cost Breakdown Cards matching p7
              _buildCostItem(
                icon: Icons.forest_outlined,
                title: 'Raw Materials',
                amount: '₹${_rawMaterials.toInt()}',
                details: 'Treated Assam Cane ₹55 • Polish ₹30',
                actionText: 'Adjust ✎',
                isHighlighted: false,
                onTap: () {
                  setState(() => _rawMaterials = (_rawMaterials == 85.0) ? 90.0 : 85.0);
                },
              ),
              const SizedBox(height: 8.0),
              _buildCostItem(
                icon: Icons.person_outline,
                title: 'Artisan Labor & Time',
                amount: '₹${_labor.toInt()}',
                details: '3.5 hours weaving @ ₹34/hr benchmark',
                actionText: 'Fair rate',
                badgeText: 'Benchmark',
                badgeColor: const Color(0xFFD4EFDF),
                badgeTextColor: const Color(0xFF1E824C),
                isHighlighted: true,
                onTap: () {
                  setState(() => _labor = (_labor == 120.0) ? 140.0 : 120.0);
                },
              ),
              const SizedBox(height: 8.0),
              _buildCostItem(
                icon: Icons.deck_outlined,
                title: 'Cluster Overhead',
                amount: '₹${_overhead.toInt()}',
                details: 'Tools, shared shed & transport',
                actionText: 'Adjust ✎',
                isHighlighted: false,
                onTap: () {
                  setState(() => _overhead = (_overhead == 25.0) ? 30.0 : 25.0);
                },
              ),
              const SizedBox(height: 8.0),
              _buildCostItem(
                icon: Icons.trending_up_rounded,
                title: 'Fair Profit (20%)',
                amount: '₹${_profit.toInt()}',
                details: 'Artisan growth & tool maintenance',
                actionText: 'Automated',
                badgeText: 'Reinvest',
                badgeColor: const Color(0xFFFFE8DC),
                badgeTextColor: const Color(0xFF8C3A16),
                isHighlighted: false,
                onTap: () {},
              ),

              const SizedBox(height: 10.0),

              // Voice Adjustment Bar
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF1EA),
                  borderRadius: BorderRadius.circular(16.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 6.0),
                child: Row(
                  children: [
                    const Icon(Icons.mic_none_rounded, color: Color(0xFF8C3A16), size: 16.0),
                    const SizedBox(width: 8.0),
                    const Expanded(
                      child: Text(
                        'Say “Increase labor to 150 rupees” or tap to...',
                        style: TextStyle(
                          fontSize: 11.0,
                          color: Color(0xFF7A685F),
                        ),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.all(6.0),
                      decoration: const BoxDecoration(
                        color: Color(0xFF8C3A16),
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(Icons.mic_rounded, color: Colors.white, size: 14.0),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 12.0),

              // Pricing Summary Card (₹230 / ₹280) + Fair Wage Certified
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFDFB),
                  borderRadius: BorderRadius.circular(16.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.all(14.0),
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Text(
                              'Total Production Cost',
                              style: TextStyle(
                                fontSize: 11.0,
                                color: Color(0xFF7A685F),
                                fontWeight: FontWeight.w600,
                              ),
                            ),
                            SizedBox(height: 2.0),
                            Text(
                              '₹230',
                              style: TextStyle(
                                fontSize: 18.0,
                                fontWeight: FontWeight.w900,
                                color: Color(0xFF221C19),
                              ),
                            ),
                          ],
                        ),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            const Text(
                              'Recommended Base Price',
                              style: TextStyle(
                                fontSize: 11.0,
                                color: Color(0xFF8C3A16),
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                            const SizedBox(height: 2.0),
                            Row(
                              crossAxisAlignment: CrossAxisAlignment.baseline,
                              textBaseline: TextBaseline.alphabetic,
                              children: const [
                                Text(
                                  '₹280',
                                  style: TextStyle(
                                    fontSize: 22.0,
                                    fontWeight: FontWeight.w900,
                                    color: Color(0xFF8C3A16),
                                  ),
                                ),
                                SizedBox(width: 3.0),
                                Text(
                                  '/ piece',
                                  style: TextStyle(
                                    fontSize: 10.5,
                                    color: Color(0xFF7A685F),
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                    const SizedBox(height: 12.0),
                    Container(
                      padding: const EdgeInsets.all(10.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFD4EFDF).withValues(alpha: 0.5),
                        borderRadius: BorderRadius.circular(10.0),
                        border: Border.all(color: const Color(0xFFA9DFBF)),
                      ),
                      child: Row(
                        children: const [
                          Icon(Icons.workspace_premium_outlined, color: Color(0xFF1E824C), size: 18.0),
                          SizedBox(width: 8.0),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Fair Wage Certified • ₹780/day artisan income',
                                  style: TextStyle(
                                    fontSize: 10.5,
                                    fontWeight: FontWeight.w800,
                                    color: Color(0xFF1E824C),
                                  ),
                                ),
                                Text(
                                  'Meets Indian Handicraft Living Standard Benchmark',
                                  style: TextStyle(
                                    fontSize: 9.5,
                                    color: Color(0xFF1E824C),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 12.0),

              // Market Benchmark Comparison Card
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFDFB),
                  borderRadius: BorderRadius.circular(16.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.all(14.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: const [
                        Text(
                          'Market Benchmark Comparison',
                          style: TextStyle(
                            fontSize: 13.5,
                            fontWeight: FontWeight.w800,
                            color: Color(0xFF221C19),
                          ),
                        ),
                        Icon(Icons.info_outline, size: 16.0, color: Color(0xFF7A685F)),
                      ],
                    ),
                    const SizedBox(height: 3.0),
                    const Text(
                      'Transparency check against local middlemen and urban commercial retail margins.',
                      style: TextStyle(
                        fontSize: 10.5,
                        color: Color(0xFF7A685F),
                        height: 1.3,
                      ),
                    ),
                    const SizedBox(height: 12.0),

                    // Multi-color Track (Red + Green + Gray)
                    Row(
                      children: [
                        Expanded(
                          flex: 3,
                          child: Container(
                            height: 6.0,
                            decoration: const BoxDecoration(
                              color: Color(0xFFC0392B),
                              borderRadius: BorderRadius.horizontal(left: Radius.circular(3.0)),
                            ),
                          ),
                        ),
                        const SizedBox(width: 2.0),
                        Expanded(
                          flex: 5,
                          child: Container(
                            height: 6.0,
                            color: const Color(0xFF27AE60),
                          ),
                        ),
                        const SizedBox(width: 2.0),
                        Expanded(
                          flex: 4,
                          child: Container(
                            height: 6.0,
                            decoration: const BoxDecoration(
                              color: Color(0xFFBDC3C7),
                              borderRadius: BorderRadius.horizontal(right: Radius.circular(3.0)),
                            ),
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 12.0),

                    // Row 1: Local Middleman
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 8.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFAF1EA),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                      child: Row(
                        children: [
                          Container(
                            width: 8.0,
                            height: 8.0,
                            decoration: const BoxDecoration(
                              color: Color(0xFFC0392B),
                              shape: BoxShape.circle,
                            ),
                          ),
                          const SizedBox(width: 6.0),
                          const Expanded(
                            child: Text(
                              'Local Middleman Offer',
                              style: TextStyle(
                                fontSize: 11.5,
                                fontWeight: FontWeight.w700,
                                color: Color(0xFF221C19),
                              ),
                            ),
                          ),
                          const Text(
                            '₹160',
                            style: TextStyle(
                              fontSize: 12.5,
                              fontWeight: FontWeight.w800,
                              color: Color(0xFFC0392B),
                            ),
                          ),
                          const SizedBox(width: 6.0),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6.0, vertical: 2.0),
                            decoration: BoxDecoration(
                              color: const Color(0xFFC0392B),
                              borderRadius: BorderRadius.circular(4.0),
                            ),
                            child: const Text(
                              'Exploitative',
                              style: TextStyle(
                                fontSize: 9.0,
                                fontWeight: FontWeight.w700,
                                color: Colors.white,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 8.0),

                    // Row 2: HunarSangam Living Wage (Green Highlight Card)
                    Container(
                      padding: const EdgeInsets.all(10.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFD4EFDF).withValues(alpha: 0.6),
                        borderRadius: BorderRadius.circular(12.0),
                        border: Border.all(color: const Color(0xFFA9DFBF)),
                      ),
                      child: Row(
                        children: [
                          Container(
                            width: 8.0,
                            height: 8.0,
                            decoration: const BoxDecoration(
                              color: Color(0xFF1E824C),
                              shape: BoxShape.circle,
                            ),
                          ),
                          const SizedBox(width: 6.0),
                          const Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'HunarSangam Living Wage',
                                  style: TextStyle(
                                    fontSize: 11.5,
                                    fontWeight: FontWeight.w800,
                                    color: Color(0xFF1E824C),
                                  ),
                                ),
                                Text(
                                  'Direct artisan empowerment',
                                  style: TextStyle(
                                    fontSize: 9.5,
                                    color: Color(0xFF7A685F),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const Text(
                            '₹250 – ₹280',
                            style: TextStyle(
                              fontSize: 13.5,
                              fontWeight: FontWeight.w900,
                              color: Color(0xFF1E824C),
                            ),
                          ),
                          const SizedBox(width: 6.0),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6.0, vertical: 3.0),
                            decoration: BoxDecoration(
                              color: const Color(0xFF1E824C),
                              borderRadius: BorderRadius.circular(4.0),
                            ),
                            child: const Text(
                              'Fair &\nViable',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                fontSize: 8.5,
                                fontWeight: FontWeight.w800,
                                color: Colors.white,
                                height: 1.1,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 8.0),

                    // Row 3: Retail Metro Market Price
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 8.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFAF1EA),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                      child: Row(
                        children: [
                          Container(
                            width: 8.0,
                            height: 8.0,
                            decoration: const BoxDecoration(
                              color: Color(0xFF7F8C8D),
                              shape: BoxShape.circle,
                            ),
                          ),
                          const SizedBox(width: 6.0),
                          const Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Retail Metro Market Price',
                                  style: TextStyle(
                                    fontSize: 11.5,
                                    fontWeight: FontWeight.w700,
                                    color: Color(0xFF221C19),
                                  ),
                                ),
                                Text(
                                  'Delhi, Mumbai lifestyle stores',
                                  style: TextStyle(
                                    fontSize: 9.5,
                                    color: Color(0xFF7A685F),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: const [
                              Text(
                                '₹650 – ₹850',
                                style: TextStyle(
                                  fontSize: 12.0,
                                  fontWeight: FontWeight.w800,
                                  color: Color(0xFF221C19),
                                ),
                              ),
                              Text(
                                'Healthy B2B buyer margin',
                                style: TextStyle(
                                  fontSize: 8.5,
                                  color: Color(0xFF1E824C),
                                  fontWeight: FontWeight.w600,
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

              const SizedBox(height: 16.0),

              // Bottom Actions: Custom & Lock Fair Price
              Row(
                children: [
                  OutlinedButton(
                    onPressed: () {},
                    style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 14.0),
                      side: const BorderSide(color: Color(0xFFEADFD6)),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12.0),
                      ),
                    ),
                    child: const Text(
                      'Custom',
                      style: TextStyle(
                        fontSize: 13.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF221C19),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10.0),
                  Expanded(
                    child: ElevatedButton(
                      onPressed: () => widget.onLockPrice(_recommendedPrice),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFF8C3A16),
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14.0),
                        elevation: 1,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12.0),
                        ),
                      ),
                      child: const Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            'Lock Fair Price (₹280) & Proceed',
                            style: TextStyle(
                              fontSize: 13.5,
                              fontWeight: FontWeight.w800,
                            ),
                          ),
                          SizedBox(width: 4.0),
                          Icon(Icons.arrow_forward_rounded, size: 16.0),
                        ],
                      ),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 8.0),

              const Center(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.verified_user_outlined, size: 12.0, color: Color(0xFF1E824C)),
                    SizedBox(width: 4.0),
                    Text(
                      'Verified against Ministry of Textiles & Handicraft Fair Wage Index',
                      style: TextStyle(
                        fontSize: 10.0,
                        color: Color(0xFF7A685F),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 14.0),
            ],
          ),
        ),
      ),
      bottomNavigationBar: ArtisanBottomNavigation(
        currentIndex: 1,
        onTap: widget.onNavigateTab,
      ),
    );
  }

  Widget _buildCostItem({
    required IconData icon,
    required String title,
    required String amount,
    required String details,
    required String actionText,
    String? badgeText,
    Color? badgeColor,
    Color? badgeTextColor,
    required bool isHighlighted,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFFFFFDFB),
          borderRadius: BorderRadius.circular(14.0),
          border: Border.all(
            color: isHighlighted ? const Color(0xFF1E824C) : const Color(0xFFEADFD6),
            width: isHighlighted ? 1.5 : 1.0,
          ),
        ),
        padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 10.0),
        child: Row(
          children: [
            Container(
              width: 32.0,
              height: 32.0,
              decoration: BoxDecoration(
                color: isHighlighted ? const Color(0xFFD4EFDF) : const Color(0xFFFBF4EE),
                borderRadius: BorderRadius.circular(8.0),
              ),
              child: Icon(
                icon,
                size: 18.0,
                color: isHighlighted ? const Color(0xFF1E824C) : const Color(0xFF8C3A16),
              ),
            ),
            const SizedBox(width: 10.0),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Text(
                        title,
                        style: const TextStyle(
                          fontSize: 12.5,
                          fontWeight: FontWeight.w800,
                          color: Color(0xFF221C19),
                        ),
                      ),
                      if (badgeText != null) ...[
                        const SizedBox(width: 6.0),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 5.0, vertical: 1.5),
                          decoration: BoxDecoration(
                            color: badgeColor ?? const Color(0xFFD4EFDF),
                            borderRadius: BorderRadius.circular(6.0),
                          ),
                          child: Text(
                            badgeText,
                            style: TextStyle(
                              fontSize: 9.0,
                              fontWeight: FontWeight.w800,
                              color: badgeTextColor ?? const Color(0xFF1E824C),
                            ),
                          ),
                        ),
                      ],
                    ],
                  ),
                  const SizedBox(height: 2.0),
                  Text(
                    details,
                    style: const TextStyle(
                      fontSize: 10.5,
                      color: Color(0xFF7A685F),
                    ),
                  ),
                ],
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(
                  amount,
                  style: TextStyle(
                    fontSize: 15.0,
                    fontWeight: FontWeight.w900,
                    color: isHighlighted ? const Color(0xFF1E824C) : const Color(0xFF8C3A16),
                  ),
                ),
                Text(
                  actionText,
                  style: TextStyle(
                    fontSize: 9.5,
                    color: isHighlighted ? const Color(0xFF1E824C) : const Color(0xFF8C3A16),
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

