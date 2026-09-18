// lib/screens/buyer_home_screen.dart

import 'package:flutter/material.dart';
import '../models/buyer_onboarding_model.dart';

/// Screen: Bulk Buyer Home Dashboard
/// 100% UI Match to 'home - bulk buyer.png'
class BuyerHomeScreen extends StatefulWidget {
  final BuyerOnboardingModel? model;
  final VoidCallback? onLogout;
  final Function(int)? onTabChange;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onOpenSearch;
  final VoidCallback? onPostRequirement;

  const BuyerHomeScreen({
    super.key,
    this.model,
    this.onLogout,
    this.onTabChange,
    this.onOpenDiscover,
    this.onOpenSearch,
    this.onPostRequirement,
  });

  @override
  State<BuyerHomeScreen> createState() => _BuyerHomeScreenState();
}

class _BuyerHomeScreenState extends State<BuyerHomeScreen> {
  int _currentBottomNavIndex = 0; // 0: Home, 1: Discover, 2: Requirements, 3: Orders, 4: Profile
  final TextEditingController _searchController = TextEditingController();

  static const Color _primaryRust = Color(0xFF9C3C18);
  static const Color _bgCanvas = Color(0xFFFAF7F5);
  static const Color _cardBg = Color(0xFFFFFDFB);
  static const Color _borderSubtle = Color(0xFFEFE2D8);
  static const Color _textDark = Color(0xFF1F1612);
  static const Color _textMuted = Color(0xFF6B5A51);
  static const Color _successGreen = Color(0xFF2E7D32);
  static const Color _peachAccent = Color(0xFFFDEEE6);

  String get _buyerName => widget.model?.yourName.isNotEmpty == true 
      ? widget.model!.yourName 
      : 'Vikram';
  String get _companyName => widget.model?.businessName.isNotEmpty == true 
      ? widget.model!.businessName 
      : 'FabCraft Living';

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  void _showNotificationSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: const Color(0xFF2D2421),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bgCanvas,
      appBar: _buildAppBar(),
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildGreetingSection(),
              const SizedBox(height: 14.0),
              _buildSearchBar(),
              const SizedBox(height: 16.0),
              _buildHeroBulkBanner(),
              const SizedBox(height: 14.0),
              _buildQuickActionCards(),
              const SizedBox(height: 22.0),
              _buildActiveRequirementsSection(),
              const SizedBox(height: 24.0),
              _buildExploreProductsSection(),
              const SizedBox(height: 24.0),
              _buildArtisansForYouSection(),
              const SizedBox(height: 30.0),
            ],
          ),
        ),
      ),
      bottomNavigationBar: _buildBottomNavBar(),
    );
  }

  PreferredSizeWidget _buildAppBar() {
    return AppBar(
      backgroundColor: _bgCanvas,
      elevation: 0,
      scrolledUnderElevation: 0,
      automaticallyImplyLeading: false,
      titleSpacing: 16.0,
      title: Row(
        children: [
          // Logo Symbol / Art Icon
          Container(
            width: 32,
            height: 32,
            decoration: BoxDecoration(
              color: Colors.white,
              shape: BoxShape.circle,
              border: Border.all(color: const Color(0xFFE8DDD5), width: 1.0),
            ),
            child: const Center(
              child: Icon(Icons.hub, size: 18, color: Color(0xFF8C3A16)),
            ),
          ),
          const SizedBox(width: 8.0),
          const Text(
            'HunarSangam',
            style: TextStyle(
              color: Color(0xFF8C3A16),
              fontSize: 17,
              fontWeight: FontWeight.w900,
              letterSpacing: -0.2,
            ),
          ),
          const SizedBox(width: 6.0),
          // Bulk Buyer Chip
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 7.0, vertical: 3.0),
            decoration: BoxDecoration(
              color: _peachAccent,
              borderRadius: BorderRadius.circular(16.0),
            ),
            child: const Text(
              'Bulk Buyer',
              style: TextStyle(
                color: _primaryRust,
                fontSize: 10,
                fontWeight: FontWeight.w800,
              ),
            ),
          ),
        ],
      ),
      actions: [
        // Language Toggle
        IconButton(
          onPressed: () => _showNotificationSnackBar('Language changed to English / Hindi'),
          icon: const Icon(Icons.translate, size: 20, color: Color(0xFF4A3830)),
          tooltip: 'Language',
        ),
        // Notifications Bell
        Stack(
          children: [
            IconButton(
              onPressed: () => _showNotificationSnackBar('No new alerts from craft clusters'),
              icon: const Icon(Icons.notifications_none, size: 22, color: Color(0xFF4A3830)),
              tooltip: 'Notifications',
            ),
            Positioned(
              right: 12,
              top: 12,
              child: Container(
                width: 7,
                height: 7,
                decoration: const BoxDecoration(
                  color: Color(0xFFE65100),
                  shape: BoxShape.circle,
                ),
              ),
            ),
          ],
        ),
        // User Profile Avatar
        GestureDetector(
          onTap: () => _showNotificationSnackBar('Bulk Buyer Account: $_companyName'),
          child: Container(
            margin: const EdgeInsets.only(right: 16.0, left: 4.0),
            width: 34,
            height: 34,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: const Color(0xFFE0D2C7), width: 1.5),
              image: const DecorationImage(
                image: NetworkImage(
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
                ),
                fit: BoxFit.cover,
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildGreetingSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Text(
              'Good morning, $_buyerName',
              style: const TextStyle(
                fontSize: 22,
                fontWeight: FontWeight.w900,
                color: _textDark,
                letterSpacing: -0.3,
              ),
            ),
            const SizedBox(width: 6.0),
            const Text('👋', style: TextStyle(fontSize: 20)),
          ],
        ),
        const SizedBox(height: 3.0),
        const Text(
          'Find the right handmade products for your business.',
          style: TextStyle(
            fontSize: 13,
            color: _textMuted,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(height: 10.0),
        // Account Identification Badge
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 6.0),
          decoration: BoxDecoration(
            color: const Color(0xFFF6ECE3),
            border: Border.all(color: const Color(0xFFEBDCD0), width: 1.0),
            borderRadius: BorderRadius.circular(12.0),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.storefront_outlined, size: 16, color: Color(0xFF2E7D32)),
              const SizedBox(width: 8.0),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    _companyName,
                    style: const TextStyle(
                      fontSize: 11.5,
                      fontWeight: FontWeight.w800,
                      color: _textDark,
                      height: 1.1,
                    ),
                  ),
                  const Text(
                    'Bulk Buyer Account',
                    style: TextStyle(
                      fontSize: 9.5,
                      color: Color(0xFF6B5A51),
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildSearchBar() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 5.0),
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: const Color(0xFFE5D7CD), width: 1.0),
        borderRadius: BorderRadius.circular(20.0),
        boxShadow: const [
          BoxShadow(
            color: Color(0x08000000),
            blurRadius: 8,
            offset: Offset(0, 2),
          ),
        ],
      ),
      child: Row(
        children: [
          GestureDetector(
            onTap: widget.onOpenSearch,
            child: const Icon(Icons.search, color: Color(0xFF8C7A70), size: 20),
          ),
          const SizedBox(width: 10.0),
          Expanded(
            child: GestureDetector(
              onTap: widget.onOpenSearch,
              child: AbsorbPointer(
                absorbing: widget.onOpenSearch != null,
                child: TextField(
                  controller: _searchController,
                  decoration: const InputDecoration(
                    hintText: 'What are you looking for?',
                    hintStyle: TextStyle(
                      color: Color(0xFF8C7A70),
                      fontSize: 13.5,
                      fontWeight: FontWeight.w500,
                    ),
                    border: InputBorder.none,
                    isDense: true,
                  ),
                ),
              ),
            ),
          ),
          // Voice Search Button
          Container(
            width: 36,
            height: 36,
            decoration: BoxDecoration(
              color: _primaryRust,
              borderRadius: BorderRadius.circular(12.0),
            ),
            child: IconButton(
              padding: EdgeInsets.zero,
              icon: const Icon(Icons.mic, color: Colors.white, size: 18),
              onPressed: widget.onOpenSearch ?? () => _showNotificationSnackBar('Voice search activated: Speak your product requirements'),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildHeroBulkBanner() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18.0),
      decoration: BoxDecoration(
        color: _primaryRust,
        borderRadius: BorderRadius.circular(24.0),
        boxShadow: const [
          BoxShadow(
            color: Color(0x289C3C18),
            blurRadius: 16,
            offset: Offset(0, 6),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Direct Artisan Sourcing Tag
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 4.0),
            decoration: BoxDecoration(
              color: Colors.white.withValues(alpha: 0.18),
              borderRadius: BorderRadius.circular(16.0),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: const [
                Icon(Icons.sell_outlined, size: 12, color: Colors.white),
                SizedBox(width: 5.0),
                Text(
                  'Direct Artisan Sourcing',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 11,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12.0),
          const Text(
            'Need products in bulk?',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w900,
              color: Colors.white,
              letterSpacing: -0.3,
            ),
          ),
          const SizedBox(height: 6.0),
          const Text(
            'Tell us what you need and connect with suitable artisans directly.',
            style: TextStyle(
              fontSize: 12.5,
              color: Color(0xFFFBECE5),
              height: 1.35,
              fontWeight: FontWeight.w500,
            ),
          ),
          const SizedBox(height: 16.0),
          // Post a Requirement Button
          SizedBox(
            width: double.infinity,
            height: 46,
            child: ElevatedButton(
              onPressed: () => _showPostRequirementDialog(),
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: _primaryRust,
                elevation: 0,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16.0),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.add_circle_outline, size: 18, color: _primaryRust),
                  SizedBox(width: 6.0),
                  Text(
                    'Post a Requirement',
                    style: TextStyle(
                      fontSize: 13.5,
                      fontWeight: FontWeight.w900,
                      color: _primaryRust,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildQuickActionCards() {
    return Row(
      children: [
        // Discover Card
        Expanded(
          child: InkWell(
            onTap: () {
              setState(() => _currentBottomNavIndex = 1);
              _showNotificationSnackBar('Navigating to Discover catalog');
            },
            borderRadius: BorderRadius.circular(18.0),
            child: Container(
              padding: const EdgeInsets.all(14.0),
              decoration: BoxDecoration(
                color: Colors.white,
                border: Border.all(color: _borderSubtle, width: 1.0),
                borderRadius: BorderRadius.circular(18.0),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        width: 36,
                        height: 36,
                        decoration: BoxDecoration(
                          color: const Color(0xFFFBEFE7),
                          borderRadius: BorderRadius.circular(12.0),
                        ),
                        child: const Icon(Icons.explore_outlined, color: _primaryRust, size: 20),
                      ),
                      const Icon(Icons.arrow_forward, size: 16, color: Color(0xFFC4B2A7)),
                    ],
                  ),
                  const SizedBox(height: 12.0),
                  const Text(
                    'Discover',
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w800,
                      color: _textDark,
                    ),
                  ),
                  const SizedBox(height: 2.0),
                  const Text(
                    'Find handmade products',
                    style: TextStyle(
                      fontSize: 10.5,
                      color: _textMuted,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
        const SizedBox(width: 12.0),
        // Requirements Card
        Expanded(
          child: InkWell(
            onTap: () {
              setState(() => _currentBottomNavIndex = 2);
              _showNotificationSnackBar('Managing active bulk requirements');
            },
            borderRadius: BorderRadius.circular(18.0),
            child: Container(
              padding: const EdgeInsets.all(14.0),
              decoration: BoxDecoration(
                color: Colors.white,
                border: Border.all(color: _borderSubtle, width: 1.0),
                borderRadius: BorderRadius.circular(18.0),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        width: 36,
                        height: 36,
                        decoration: BoxDecoration(
                          color: const Color(0xFFFBEFE7),
                          borderRadius: BorderRadius.circular(12.0),
                        ),
                        child: const Icon(Icons.assignment_outlined, color: _primaryRust, size: 20),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 6.0, vertical: 2.5),
                        decoration: BoxDecoration(
                          color: const Color(0xFFE8F5E9),
                          borderRadius: BorderRadius.circular(10.0),
                        ),
                        child: const Text(
                          '1 Active',
                          style: TextStyle(
                            color: _successGreen,
                            fontSize: 9.5,
                            fontWeight: FontWeight.w800,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12.0),
                  const Text(
                    'Requirements',
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w800,
                      color: _textDark,
                    ),
                  ),
                  const SizedBox(height: 2.0),
                  const Text(
                    'Manage bulk requirements',
                    style: TextStyle(
                      fontSize: 10.5,
                      color: _textMuted,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildActiveRequirementsSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Header
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: [
                const Text(
                  'Your Active Requirements',
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
                const SizedBox(width: 6.0),
                Container(
                  width: 7,
                  height: 7,
                  decoration: const BoxDecoration(
                    color: _successGreen,
                    shape: BoxShape.circle,
                  ),
                ),
              ],
            ),
            GestureDetector(
              onTap: () => _showNotificationSnackBar('Viewing all 1 active bulk RFQs'),
              child: const Text(
                'View All ›',
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w800,
                  color: _primaryRust,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 12.0),
        // Active Requirement Card
        Container(
          padding: const EdgeInsets.all(14.0),
          decoration: BoxDecoration(
            color: const Color(0xFFFFF9F5),
            border: Border.all(color: const Color(0xFFEFE2D8), width: 1.0),
            borderRadius: BorderRadius.circular(20.0),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 42,
                    height: 42,
                    decoration: BoxDecoration(
                      color: const Color(0xFFFBEFE7),
                      borderRadius: BorderRadius.circular(12.0),
                    ),
                    child: const Icon(Icons.inventory_2_outlined, color: Color(0xFF8C3A16), size: 22),
                  ),
                  const SizedBox(width: 12.0),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            const Text(
                              '500 Bamboo Baskets',
                              style: TextStyle(
                                fontSize: 15,
                                fontWeight: FontWeight.w900,
                                color: _textDark,
                              ),
                            ),
                            const Spacer(),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 7.0, vertical: 3.0),
                              decoration: BoxDecoration(
                                color: const Color(0xFFE8F5E9),
                                borderRadius: BorderRadius.circular(12.0),
                              ),
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: const [
                                  Icon(Icons.circle, size: 6, color: _successGreen),
                                  SizedBox(width: 4.0),
                                  Text(
                                    'Finding Artisans',
                                    style: TextStyle(
                                      color: _successGreen,
                                      fontSize: 10,
                                      fontWeight: FontWeight.w800,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 4.0),
                        const Text(
                          'Target delivery: 45 days • Corporate packaging needed',
                          style: TextStyle(
                            fontSize: 11.5,
                            color: _textMuted,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10.0),
              // Activity Row
              Row(
                children: const [
                  Icon(Icons.group_outlined, size: 14, color: Color(0xFF5D4037)),
                  SizedBox(width: 5.0),
                  Text(
                    '4 Artisans responded',
                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Color(0xFF4A3830)),
                  ),
                  SizedBox(width: 8.0),
                  Text('•', style: TextStyle(color: Color(0xFFBCAAA4))),
                  SizedBox(width: 8.0),
                  Text(
                    'Last activity 20 mins ago',
                    style: TextStyle(fontSize: 11, color: Color(0xFF795548)),
                  ),
                ],
              ),
              const SizedBox(height: 12.0),
              // View Requirement CTA
              SizedBox(
                width: double.infinity,
                height: 42,
                child: ElevatedButton(
                  onPressed: () => _showNotificationSnackBar('Opening details for 500 Bamboo Baskets requirement'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: _primaryRust,
                    foregroundColor: Colors.white,
                    elevation: 0,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14.0),
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Text(
                        'View Requirement',
                        style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.w800),
                      ),
                      SizedBox(width: 6.0),
                      Icon(Icons.arrow_forward, size: 15),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildExploreProductsSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              'Explore Handmade\nProducts',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w900,
                color: _textDark,
                height: 1.2,
              ),
            ),
            GestureDetector(
              onTap: () => _showNotificationSnackBar('Browsing complete 850+ wholesale product catalog'),
              child: const Text(
                'Browse Catalog ›',
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w800,
                  color: _primaryRust,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 3.0),
        const Text(
          'Verified craft lines curated for retail and commercial buyers',
          style: TextStyle(
            fontSize: 11.5,
            color: _textMuted,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(height: 12.0),
        // Horizontal Scrollable Cards
        SizedBox(
          height: 255,
          child: ListView(
            scrollDirection: Axis.horizontal,
            children: [
              // Product 1: Bamboo Fruit Basket
              _buildProductCatalogCard(
                imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80',
                craftTag: 'Bamboo Craft',
                minMoq: 'Min Bulk: 50 pcs',
                title: 'Handwoven Bamboo Fruit Basket',
                artisan: 'Ramesh Kumar',
                location: 'Barpeta, Assam',
                priceTier: 'Tiered from ₹320/pc',
              ),
              const SizedBox(width: 12.0),
              // Product 2: Blue Pottery Vase
              _buildProductCatalogCard(
                imageUrl: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=400&q=80',
                craftTag: 'Ceramic & Pottery',
                minMoq: 'Min Bulk: 30 pcs',
                title: 'Blue Pottery Floral Vase',
                artisan: 'Mohan Lal',
                location: 'Jaipur, Rajasthan',
                priceTier: 'Tiered from ₹480/pc',
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildProductCatalogCard({
    required String imageUrl,
    required String craftTag,
    required String minMoq,
    required String title,
    required String artisan,
    required String location,
    required String priceTier,
  }) {
    return Container(
      width: 210,
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: _borderSubtle, width: 1.0),
        borderRadius: BorderRadius.circular(20.0),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Image Box with Overlays
          Stack(
            children: [
              ClipRRect(
                borderRadius: const BorderRadius.vertical(top: Radius.circular(20.0)),
                child: Image.network(
                  imageUrl,
                  height: 125,
                  width: double.infinity,
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) => Container(
                    height: 125,
                    color: const Color(0xFFF3EBE3),
                    child: const Center(child: Icon(Icons.image, color: Color(0xFFC4B2A7))),
                  ),
                ),
              ),
              // Tag Top Left
              Positioned(
                top: 8,
                left: 8,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 7.0, vertical: 3.0),
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.9),
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  child: Text(
                    craftTag,
                    style: const TextStyle(
                      fontSize: 9.5,
                      fontWeight: FontWeight.w800,
                      color: _textDark,
                    ),
                  ),
                ),
              ),
              // MOQ Bottom Left
              Positioned(
                bottom: 8,
                left: 8,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 6.0, vertical: 2.5),
                  decoration: BoxDecoration(
                    color: Colors.black.withValues(alpha: 0.75),
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                  child: Text(
                    minMoq,
                    style: const TextStyle(
                      fontSize: 9,
                      fontWeight: FontWeight.w700,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(
                    fontSize: 12.5,
                    fontWeight: FontWeight.w800,
                    color: _textDark,
                  ),
                ),
                const SizedBox(height: 3.0),
                Text(
                  '👤 Artisan: $artisan',
                  style: const TextStyle(fontSize: 10, color: _textMuted),
                ),
                Text(
                  '📍 $location',
                  style: const TextStyle(fontSize: 10, color: _textMuted),
                ),
                const SizedBox(height: 8.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Flexible(
                      child: Text(
                        priceTier,
                        style: const TextStyle(
                          fontSize: 10,
                          fontWeight: FontWeight.w800,
                          color: _textDark,
                        ),
                      ),
                    ),
                    InkWell(
                      onTap: () => _showNotificationSnackBar('Viewing specs for $title'),
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          border: Border.all(color: const Color(0xFFE5D5CB), width: 1.0),
                          borderRadius: BorderRadius.circular(10.0),
                        ),
                        child: const Text(
                          'View Product',
                          style: TextStyle(
                            fontSize: 9.5,
                            fontWeight: FontWeight.w800,
                            color: _primaryRust,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildArtisansForYouSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              'Artisans for You',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
            GestureDetector(
              onTap: () => _showNotificationSnackBar('Browsing all 140+ verified craft guild clusters'),
              child: const Text(
                'All Artisans ›',
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w800,
                  color: _primaryRust,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 3.0),
        const Text(
          'Direct partnerships with high-capacity grassroots clusters',
          style: TextStyle(
            fontSize: 11.5,
            color: _textMuted,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(height: 12.0),
        // Artisan 1
        _buildArtisanTile(
          name: 'Ramesh Kumar',
          statusBadge: 'Master Craftsman',
          craft: 'Bamboo & Cane',
          rating: '★ 4.9',
          location: 'Barpeta, Assam',
          capacity: 'Capacity: 300 pcs/mo',
          imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=150&q=80',
        ),
        const SizedBox(height: 12.0),
        // Artisan 2
        _buildArtisanTile(
          name: 'Mohan Lal',
          statusBadge: 'GI Verified',
          craft: 'Ceramic & Pottery',
          rating: '★ 4.8',
          location: 'Jaipur, Rajasthan',
          capacity: 'Capacity: 250 pcs/mo',
          imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
        ),
      ],
    );
  }

  Widget _buildArtisanTile({
    required String name,
    required String statusBadge,
    required String craft,
    required String rating,
    required String location,
    required String capacity,
    required String imageUrl,
  }) {
    return Container(
      padding: const EdgeInsets.all(14.0),
      decoration: BoxDecoration(
        color: const Color(0xFFFFF9F5),
        border: Border.all(color: const Color(0xFFEFE2D8), width: 1.0),
        borderRadius: BorderRadius.circular(20.0),
      ),
      child: Column(
        children: [
          Row(
            children: [
              // Avatar with online status
              Stack(
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(14.0),
                    child: Image.network(
                      imageUrl,
                      width: 52,
                      height: 52,
                      fit: BoxFit.cover,
                      errorBuilder: (context, error, stackTrace) => Container(
                        width: 52,
                        height: 52,
                        color: const Color(0xFFF3EBE3),
                        child: const Icon(Icons.person, color: Color(0xFF8C3A16)),
                      ),
                    ),
                  ),
                  Positioned(
                    bottom: 2,
                    right: 2,
                    child: Container(
                      width: 10,
                      height: 10,
                      decoration: BoxDecoration(
                        color: _successGreen,
                        shape: BoxShape.circle,
                        border: Border.all(color: Colors.white, width: 2.0),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(width: 12.0),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          name,
                          style: const TextStyle(
                            fontSize: 14.5,
                            fontWeight: FontWeight.w900,
                            color: _textDark,
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 7.0, vertical: 3.0),
                          decoration: BoxDecoration(
                            color: _peachAccent,
                            borderRadius: BorderRadius.circular(10.0),
                          ),
                          child: Text(
                            statusBadge,
                            style: const TextStyle(
                              color: _primaryRust,
                              fontSize: 9.5,
                              fontWeight: FontWeight.w800,
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 2.0),
                    Text(
                      craft,
                      style: const TextStyle(
                        fontSize: 11.5,
                        fontWeight: FontWeight.w700,
                        color: _primaryRust,
                      ),
                    ),
                    const SizedBox(height: 4.0),
                    Row(
                      children: [
                        Text(
                          '$rating • $location',
                          style: const TextStyle(fontSize: 10.5, color: _textMuted),
                        ),
                        const Spacer(),
                        Container(
                          width: 5,
                          height: 5,
                          decoration: const BoxDecoration(
                            color: _successGreen,
                            shape: BoxShape.circle,
                          ),
                        ),
                        const SizedBox(width: 4.0),
                        Text(
                          capacity,
                          style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: Color(0xFF4A3830)),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 10.0),
          // View Artisan Button
          SizedBox(
            width: double.infinity,
            height: 38,
            child: TextButton(
              onPressed: () => _showNotificationSnackBar('Connecting with master artisan $name'),
              style: TextButton.styleFrom(
                backgroundColor: const Color(0xFFF0E5DC),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12.0),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text(
                    'View Artisan',
                    style: TextStyle(
                      fontSize: 11.5,
                      fontWeight: FontWeight.w800,
                      color: Color(0xFF3E2723),
                    ),
                  ),
                  SizedBox(width: 4.0),
                  Icon(Icons.arrow_forward, size: 14, color: Color(0xFF3E2723)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBottomNavBar() {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(
          top: BorderSide(color: Color(0xFFEADFD6), width: 1.0),
        ),
      ),
      child: BottomNavigationBar(
        currentIndex: _currentBottomNavIndex,
        onTap: (index) {
          setState(() => _currentBottomNavIndex = index);
          widget.onTabChange?.call(index);
          if (index == 1) {
            widget.onOpenDiscover?.call();
          }
        },
        type: BottomNavigationBarType.fixed,
        backgroundColor: Colors.white,
        selectedItemColor: _primaryRust,
        unselectedItemColor: const Color(0xFF7A6A61),
        selectedLabelStyle: const TextStyle(fontSize: 10.5, fontWeight: FontWeight.w800),
        unselectedLabelStyle: const TextStyle(fontSize: 10, fontWeight: FontWeight.w600),
        elevation: 0,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home_outlined),
            activeIcon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.explore_outlined),
            activeIcon: Icon(Icons.explore),
            label: 'Discover',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.assignment_outlined),
            activeIcon: Icon(Icons.assignment),
            label: 'Requirements',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.receipt_long_outlined),
            activeIcon: Icon(Icons.receipt_long),
            label: 'Orders',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person_outline),
            activeIcon: Icon(Icons.person),
            label: 'Profile',
          ),
        ],
      ),
    );
  }

  void _showPostRequirementDialog() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => Container(
        padding: const EdgeInsets.all(20.0),
        decoration: const BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.vertical(top: Radius.circular(28.0)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  'Post Bulk Requirement',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: _textDark),
                ),
                IconButton(
                  icon: const Icon(Icons.close),
                  onPressed: () => Navigator.pop(context),
                ),
              ],
            ),
            const SizedBox(height: 6.0),
            const Text(
              'Broadcast your sourcing RFQ directly to certified artisan clusters across India.',
              style: TextStyle(fontSize: 12, color: _textMuted),
            ),
            const SizedBox(height: 16.0),
            TextField(
              decoration: InputDecoration(
                labelText: 'Craft Item or Category',
                hintText: 'e.g. 500 Handwoven Bamboo Baskets',
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(14.0)),
              ),
            ),
            const SizedBox(height: 12.0),
            TextField(
              decoration: InputDecoration(
                labelText: 'Target Units / Quantity',
                hintText: 'e.g. 250 - 500 pcs',
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(14.0)),
              ),
            ),
            const SizedBox(height: 18.0),
            SizedBox(
              width: double.infinity,
              height: 48,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.pop(context);
                  if (widget.onPostRequirement != null) {
                    widget.onPostRequirement!();
                  } else {
                    _showNotificationSnackBar('✅ Bulk RFQ broadcasted to 140+ craft guilds!');
                  }
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: _primaryRust,
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16.0)),
                ),
                child: const Text('Broadcast Requirement →', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ),
            const SizedBox(height: 12.0),
          ],
        ),
      ),
    );
  }
}
