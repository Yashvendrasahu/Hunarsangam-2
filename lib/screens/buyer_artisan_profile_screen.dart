// lib/screens/buyer_artisan_profile_screen.dart
// Screen d5: Public Artisan Profile Screen
// 100% UI Match to 'd5 bulk — Public Artisan Profile.png'

import 'package:flutter/material.dart';

class BuyerArtisanProfileScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onMessageArtisan;
  final VoidCallback? onCreateRequirement;
  final Function(int)? onTabChange;

  const BuyerArtisanProfileScreen({
    super.key,
    this.onBack,
    this.onMessageArtisan,
    this.onCreateRequirement,
    this.onTabChange,
  });

  @override
  State<BuyerArtisanProfileScreen> createState() => _BuyerArtisanProfileScreenState();
}

class _BuyerArtisanProfileScreenState extends State<BuyerArtisanProfileScreen> {
  int _currentNavIndex = 1;
  bool _isPlaying = false;
  bool _isSaved = false;

  static const Color _primaryRust = Color(0xFF9C3C18);
  static const Color _bgCanvas = Color(0xFFFAF7F5);
  static const Color _cardBg = Colors.white;
  static const Color _borderSubtle = Color(0xFFEFE2D8);
  static const Color _textDark = Color(0xFF1F1612);
  static const Color _textMuted = Color(0xFF6B5A51);
  static const Color _successGreen = Color(0xFF2E7D32);

  void _showSnack(String msg) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(msg),
        backgroundColor: const Color(0xFF2D2421),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        duration: const Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bgCanvas,
      appBar: _buildTopAppBar(),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Profile Header Card
                    _buildProfileHeaderCard(),
                    const SizedBox(height: 16),

                    // Audio Story Player Card
                    _buildAudioStoryPlayer(),
                    const SizedBox(height: 20),

                    // Cluster Production Capacity
                    _buildProductionCapacitySection(),
                    const SizedBox(height: 20),

                    // About Craft & Technique
                    _buildAboutCraftSection(),
                    const SizedBox(height: 20),

                    // Catalog & Bulk Offerings
                    _buildCatalogOfferingsSection(),
                    const SizedBox(height: 24),
                  ],
                ),
              ),
            ),

            // Fixed Sticky Action Bar
            _buildBottomActionDock(),
          ],
        ),
      ),
      bottomNavigationBar: _buildBottomNavigationBar(),
    );
  }

  PreferredSizeWidget _buildTopAppBar() {
    return AppBar(
      backgroundColor: _bgCanvas,
      elevation: 0,
      scrolledUnderElevation: 0,
      automaticallyImplyLeading: false,
      titleSpacing: 12,
      leading: IconButton(
        icon: const Icon(Icons.arrow_back, color: _textDark),
        onPressed: widget.onBack,
      ),
      title: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text(
            'BULK BUYER VIEW',
            style: TextStyle(
              fontSize: 9.5,
              fontWeight: FontWeight.w800,
              letterSpacing: 0.8,
              color: _textMuted,
            ),
          ),
          Text(
            'Artisan Profile',
            style: TextStyle(
              fontSize: 16,
              fontWeight: FontWeight.w900,
              color: _primaryRust,
            ),
          ),
        ],
      ),
      actions: [
        IconButton(
          onPressed: () => _showSnack('Artisan profile link copied to clipboard'),
          icon: const Icon(Icons.share_outlined, color: _textDark, size: 20),
        ),
        IconButton(
          onPressed: () {
            setState(() => _isSaved = !_isSaved);
            _showSnack(_isSaved ? 'Artisan saved to your favorites' : 'Removed from favorites');
          },
          icon: Icon(_isSaved ? Icons.bookmark : Icons.bookmark_border, color: _isSaved ? _primaryRust : _textDark, size: 20),
        ),
        const SizedBox(width: 6),
      ],
    );
  }

  Widget _buildProfileHeaderCard() {
    return Container(
      decoration: BoxDecoration(
        color: _cardBg,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: _borderSubtle),
        boxShadow: const [
          BoxShadow(
            color: Color(0x06000000),
            blurRadius: 6,
            offset: Offset(0, 2),
          ),
        ],
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        children: [
          // Center Avatar Photo with GI Lead badge
          Stack(
            children: [
              Container(
                width: 86,
                height: 86,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                  color: const Color(0xFFF3ECE4),
                  border: Border.all(color: const Color(0xFFE5D7CD), width: 1.5),
                ),
                clipBehavior: Clip.antiAlias,
                child: Image.network(
                  'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80',
                  fit: BoxFit.cover,
                  errorBuilder: (_, __, ___) => const Icon(Icons.person, color: _primaryRust, size: 40),
                ),
              ),
              Positioned(
                bottom: 0,
                left: 0,
                right: 0,
                child: Container(
                  padding: const EdgeInsets.symmetric(vertical: 2),
                  decoration: const BoxDecoration(
                    color: Color(0xFF1B5E20),
                    borderRadius: BorderRadius.vertical(bottom: Radius.circular(18)),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Icon(Icons.check, size: 10, color: Colors.white),
                      SizedBox(width: 2),
                      Text(
                        'GI Lead',
                        style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.bold, color: Colors.white),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Name and Verified Cluster Lead badge
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Ramesh Kumar',
                style: TextStyle(
                  fontSize: 19,
                  fontWeight: FontWeight.w900,
                  color: _textDark,
                ),
              ),
              const SizedBox(width: 6),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2.5),
                decoration: BoxDecoration(
                  color: const Color(0xFFE8F5E9),
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: const Color(0xFFA5D6A7)),
                ),
                child: const Text(
                  'Verified Cluster Lead',
                  style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: _successGreen),
                ),
              ),
            ],
          ),
          const SizedBox(height: 2),

          // Craft Line
          const Text(
            'Barpeta Bamboo & Cane Craft',
            style: TextStyle(
              fontSize: 13.5,
              fontWeight: FontWeight.w800,
              color: _primaryRust,
            ),
          ),
          const SizedBox(height: 2),

          // Location
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: const [
              Icon(Icons.location_on, size: 13, color: _textMuted),
              SizedBox(width: 3),
              Text(
                'Barpeta, Assam (GI Cluster)',
                style: TextStyle(fontSize: 12, color: _textMuted),
              ),
            ],
          ),
          const SizedBox(height: 12),

          // Three highlight pills
          Wrap(
            alignment: WrapAlignment.center,
            spacing: 6,
            runSpacing: 6,
            children: [
              _buildHighlightPill('28 Yrs Experience', Icons.military_tech, const Color(0xFFFFF3E0), const Color(0xFFB45309)),
              _buildHighlightPill('Available for Bulk Orders', Icons.inventory, const Color(0xFFE8F5E9), _successGreen),
              _buildHighlightPill('Direct Cooperative Lead', Icons.groups, const Color(0xFFFDEEE6), _primaryRust),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildHighlightPill(String text, IconData icon, Color bg, Color color) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 12, color: color),
          const SizedBox(width: 4),
          Text(
            text,
            style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: color),
          ),
        ],
      ),
    );
  }

  Widget _buildAudioStoryPlayer() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFDEEE6),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: const Color(0xFFF7D9CB)),
      ),
      padding: const EdgeInsets.all(14),
      child: Column(
        children: [
          Row(
            children: [
              GestureDetector(
                onTap: () {
                  setState(() => _isPlaying = !_isPlaying);
                  _showSnack(_isPlaying ? 'Playing Ramesh\'s oral craft story (0:45s)' : 'Audio paused');
                },
                child: Container(
                  width: 48,
                  height: 48,
                  decoration: const BoxDecoration(
                    color: _primaryRust,
                    shape: BoxShape.circle,
                  ),
                  child: Icon(
                    _isPlaying ? Icons.pause : Icons.play_arrow,
                    color: Colors.white,
                    size: 26,
                  ),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: const [
                        Text(
                          'Listen to Ramesh\'s Story',
                          style: TextStyle(
                            fontSize: 13.5,
                            fontWeight: FontWeight.w900,
                            color: _textDark,
                          ),
                        ),
                        SizedBox(width: 6),
                        Text(
                          '0:45s',
                          style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: _primaryRust),
                        ),
                      ],
                    ),
                    const SizedBox(height: 2),
                    const Text(
                      'Spoken in Assamese • English translation available',
                      style: TextStyle(fontSize: 11, color: _textMuted),
                    ),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),

          // Waveform bar visualizer
          Container(
            height: 28,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(8),
            ),
            padding: const EdgeInsets.symmetric(horizontal: 8),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: List.generate(24, (index) {
                final heights = [8, 14, 20, 16, 10, 22, 18, 12, 16, 24, 20, 14, 18, 12, 22, 16, 10, 14, 20, 12, 8, 16, 12, 6];
                return Container(
                  width: 3,
                  height: heights[index % heights.length].toDouble(),
                  decoration: BoxDecoration(
                    color: index < 10 ? _primaryRust : const Color(0xFFDFCFCE),
                    borderRadius: BorderRadius.circular(2),
                  ),
                );
              }),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildProductionCapacitySection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              'Cluster Production Capacity',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
            Row(
              children: const [
                Icon(Icons.verified, size: 14, color: _successGreen),
                SizedBox(width: 3),
                Text(
                  'Verified Specs',
                  style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: _successGreen),
                ),
              ],
            ),
          ],
        ),
        const SizedBox(height: 10),
        Row(
          children: [
            // Card 1: Minimum Order
            Expanded(
              child: Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: _cardBg,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: _borderSubtle),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      width: 30,
                      height: 30,
                      decoration: BoxDecoration(
                        color: const Color(0xFFFDEEE6),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: const Icon(Icons.shopping_bag_outlined, size: 16, color: _primaryRust),
                    ),
                    const SizedBox(height: 8),
                    const Text('Minimum Order', style: TextStyle(fontSize: 10.5, color: _textMuted)),
                    const SizedBox(height: 2),
                    const Text(
                      '50 pieces',
                      style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: _textDark),
                    ),
                    const SizedBox(height: 2),
                    const Text('Sample pieces available', style: TextStyle(fontSize: 10, color: _textMuted)),
                  ],
                ),
              ),
            ),
            const SizedBox(width: 10),

            // Card 2: Cluster Artisans
            Expanded(
              child: Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: _cardBg,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: _borderSubtle),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      width: 30,
                      height: 30,
                      decoration: BoxDecoration(
                        color: const Color(0xFFFDEEE6),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: const Icon(Icons.people_outline, size: 16, color: _primaryRust),
                    ),
                    const SizedBox(height: 8),
                    const Text('Cluster Artisans', style: TextStyle(fontSize: 10.5, color: _textMuted)),
                    const SizedBox(height: 2),
                    const Text(
                      '42 Artisans',
                      style: TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: _textDark),
                    ),
                    const SizedBox(height: 2),
                    const Text('32 Women Weavers & 10 Carvers', style: TextStyle(fontSize: 10, color: _textMuted), maxLines: 1, overflow: TextOverflow.ellipsis),
                  ],
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildAboutCraftSection() {
    return Container(
      decoration: BoxDecoration(
        color: _cardBg,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'About the Craft & Technique',
            style: TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.w900,
              color: _textDark,
            ),
          ),
          const SizedBox(height: 6),
          const Text(
            'Specializing in traditional Assam riverbank bamboo techniques. All bamboo is seasoned with natural non-toxic smoke treatment, rendering products mold-resistant and export-ready.',
            style: TextStyle(fontSize: 12, color: _textMuted, height: 1.4),
          ),
          const SizedBox(height: 12),

          _buildFeatureBullet(Icons.eco, 'Zero-Chemical Smoke Seasoned'),
          const SizedBox(height: 6),
          _buildFeatureBullet(Icons.language, 'Export Compliance Documentation'),
          const SizedBox(height: 6),
          _buildFeatureBullet(Icons.handshake, 'Fair Wage Direct Cooperative'),
        ],
      ),
    );
  }

  Widget _buildFeatureBullet(IconData icon, String text) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
      decoration: BoxDecoration(
        color: const Color(0xFFFAF5F0),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFFEFE6DE)),
      ),
      child: Row(
        children: [
          Icon(icon, size: 14, color: _successGreen),
          const SizedBox(width: 8),
          Text(
            text,
            style: const TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700, color: _textDark),
          ),
        ],
      ),
    );
  }

  Widget _buildCatalogOfferingsSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'Catalog & Bulk Offerings',
                  style: TextStyle(
                    fontSize: 17,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
                SizedBox(height: 2),
                Text(
                  'Tiered pricing for verified Bulk Buyers',
                  style: TextStyle(fontSize: 11.5, color: _textMuted),
                ),
              ],
            ),
            GestureDetector(
              onTap: () => _showSnack('Showing all 18 catalog items'),
              child: const Text(
                'View All 18 Items >',
                style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold, color: _primaryRust),
              ),
            ),
          ],
        ),
        const SizedBox(height: 14),

        // Product 1: Handwoven Bamboo Fruit Basket
        _buildCatalogCard(
          title: 'Handwoven Bamboo Fruit Basket',
          description: 'Natural golden finish with double-rim reinforcement. Export-grade treatment.',
          moq: 'MOQ: 50 pcs',
          price: '₹180',
          tag: 'Bulk Ready',
          imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=500&q=80',
        ),
        const SizedBox(height: 14),

        // Product 2: Hexagonal Split-Bamboo Planter
        _buildCatalogCard(
          title: 'Hexagonal Split-Bamboo Planter',
          description: 'Modern hexagonal silhouette suitable for home décor and hospitality projects.',
          moq: 'MOQ: 40 pcs',
          price: '₹240',
          tag: 'Bulk Ready',
          imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80',
        ),
        const SizedBox(height: 14),

        // Product 3: Bamboo Corporate Desktop Organizer
        _buildCatalogCard(
          title: 'Bamboo Corporate Desktop Organizer',
          description: 'Premium corporate gifting item with option for custom laser-engraved branding.',
          moq: 'MOQ: 100 pcs',
          price: '₹310',
          tag: 'Customizable',
          imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=500&q=80',
        ),
      ],
    );
  }

  Widget _buildCatalogCard({
    required String title,
    required String description,
    required String moq,
    required String price,
    required String tag,
    required String imageUrl,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: _cardBg,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: _borderSubtle),
      ),
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Stack(
            children: [
              SizedBox(
                height: 150,
                width: double.infinity,
                child: Image.network(
                  imageUrl,
                  fit: BoxFit.cover,
                  errorBuilder: (_, __, ___) => Container(color: const Color(0xFFF3ECE4)),
                ),
              ),
              Positioned(
                top: 10,
                left: 10,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.black.withValues(alpha: 0.75),
                    borderRadius: BorderRadius.circular(6),
                  ),
                  child: Text(
                    moq,
                    style: const TextStyle(fontSize: 10.5, fontWeight: FontWeight.bold, color: Colors.white),
                  ),
                ),
              ),
            ],
          ),

          Padding(
            padding: const EdgeInsets.all(14),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: _textDark)),
                const SizedBox(height: 3),
                Text(description, style: const TextStyle(fontSize: 11.5, color: _textMuted, height: 1.35)),
                const SizedBox(height: 10),

                // Pricing box with Bulk Ready tag
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAF5F0),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      RichText(
                        text: TextSpan(
                          text: 'Tiered pricing from ',
                          style: const TextStyle(fontSize: 11, color: _textMuted),
                          children: [
                            TextSpan(
                              text: price,
                              style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w900, color: _primaryRust),
                            ),
                            const TextSpan(text: ' / piece', style: TextStyle(fontSize: 11, color: _textMuted)),
                          ],
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                        decoration: BoxDecoration(
                          color: const Color(0xFFE8F5E9),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: Text(
                          tag,
                          style: const TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: _successGreen),
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 10),

                GestureDetector(
                  onTap: () => _showSnack('Viewing bulk quantity price tiers for $title'),
                  child: Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFDEEE6),
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: const Color(0xFFF7D9CB)),
                    ),
                    alignment: Alignment.center,
                    child: const Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text('View Bulk Tiers', style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold, color: _primaryRust)),
                        SizedBox(width: 4),
                        Icon(Icons.arrow_forward, size: 14, color: _primaryRust),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBottomActionDock() {
    return Container(
      color: Colors.white,
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      child: Row(
        children: [
          Expanded(
            flex: 2,
            child: OutlinedButton.icon(
              onPressed: widget.onMessageArtisan ?? () => _showSnack('Opening chat with Ramesh Kumar'),
              icon: const Icon(Icons.chat_bubble_outline, size: 15, color: _textDark),
              label: const Text('Message Artisan', style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: _textDark)),
              style: OutlinedButton.styleFrom(
                side: const BorderSide(color: Color(0xFFDCCDC2)),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                minimumSize: const Size.fromHeight(44),
              ),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            flex: 3,
            child: ElevatedButton(
              onPressed: widget.onCreateRequirement ?? () => _showSnack('Select Artisan for new requirement'),
              style: ElevatedButton.styleFrom(
                backgroundColor: _primaryRust,
                foregroundColor: Colors.white,
                elevation: 0,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                minimumSize: const Size.fromHeight(44),
              ),
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text('Create Requirement / Select Artisan', style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.bold)),
                  SizedBox(width: 4),
                  Icon(Icons.arrow_forward, size: 14),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBottomNavigationBar() {
    return BottomNavigationBar(
      currentIndex: _currentNavIndex,
      onTap: (idx) {
        setState(() => _currentNavIndex = idx);
        widget.onTabChange?.call(idx);
        if (idx == 0) widget.onBack?.call();
      },
      type: BottomNavigationBarType.fixed,
      backgroundColor: Colors.white,
      selectedItemColor: _primaryRust,
      unselectedItemColor: const Color(0xFF7A6A61),
      selectedFontSize: 11,
      unselectedFontSize: 11,
      elevation: 8,
      items: const [
        BottomNavigationBarItem(icon: Icon(Icons.storefront), label: 'Home'),
        BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
        BottomNavigationBarItem(icon: Icon(Icons.assignment), label: 'Requirement'),
        BottomNavigationBarItem(icon: Icon(Icons.receipt_long), label: 'Order'),
        BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
      ],
    );
  }
}
