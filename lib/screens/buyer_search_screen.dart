// lib/screens/buyer_search_screen.dart
// Screen d2: Bulk Buyer Search & Voice Search Screen
// 100% UI Match to 'd2 - bulk— Search.png'

import 'package:flutter/material.dart';

class BuyerSearchScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final Function(String query)? onSelectQuery;
  final VoidCallback? onVoiceSearch;
  final Function(int)? onTabChange;

  const BuyerSearchScreen({
    super.key,
    this.onBack,
    this.onSelectQuery,
    this.onVoiceSearch,
    this.onTabChange,
  });

  @override
  State<BuyerSearchScreen> createState() => _BuyerSearchScreenState();
}

class _BuyerSearchScreenState extends State<BuyerSearchScreen> {
  int _currentNavIndex = 1; // Discover tab
  final TextEditingController _searchController = TextEditingController();
  bool _isListening = false;

  static const Color _primaryRust = Color(0xFF9C3C18);
  static const Color _bgCanvas = Color(0xFFFAF7F5);
  static const Color _cardBg = Colors.white;
  static const Color _borderSubtle = Color(0xFFEFE2D8);
  static const Color _textDark = Color(0xFF1F1612);
  static const Color _textMuted = Color(0xFF6B5A51);
  static const Color _successGreen = Color(0xFF386B3E);

  final List<String> _recentSearches = [
    'Bamboo fruit baskets',
    'Blue pottery tableware',
    'Brass diyas bulk',
    'Chanderi silk stoles',
  ];

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  void _triggerSearch(String query) {
    widget.onSelectQuery?.call(query);
  }

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
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar with back button & search text field
            _buildTopSearchBar(),

            // Scrollable Search Content
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Speak to Search Hero Card
                    _buildVoiceSearchCard(),
                    const SizedBox(height: 22),

                    // Browse by Craft
                    _buildBrowseByCraftSection(),
                    const SizedBox(height: 22),

                    // Recent Searches
                    if (_recentSearches.isNotEmpty) ...[
                      _buildRecentSearchesSection(),
                      const SizedBox(height: 22),
                    ],

                    // Popular Searches in Bulk
                    _buildPopularSearchesSection(),
                    const SizedBox(height: 20),

                    // Verified Artisan Production Card
                    _buildVerifiedTrustCard(),
                    const SizedBox(height: 24),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: _buildBottomNavigationBar(),
    );
  }

  Widget _buildTopSearchBar() {
    return Container(
      color: _bgCanvas,
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
      child: Row(
        children: [
          IconButton(
            onPressed: widget.onBack,
            icon: const Icon(Icons.arrow_back, color: _textDark, size: 22),
            style: IconButton.styleFrom(
              padding: EdgeInsets.zero,
              minimumSize: const Size(36, 36),
            ),
          ),
          const SizedBox(width: 4),
          Expanded(
            child: Container(
              height: 48,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(24),
                border: Border.all(color: const Color(0xFFE5D7CD)),
                boxShadow: const [
                  BoxShadow(
                    color: Color(0x08000000),
                    blurRadius: 4,
                    offset: Offset(0, 1),
                  ),
                ],
              ),
              padding: const EdgeInsets.symmetric(horizontal: 14),
              child: Row(
                children: [
                  const Icon(Icons.search, color: Color(0xFF8C7A70), size: 20),
                  const SizedBox(width: 8),
                  Expanded(
                    child: TextField(
                      controller: _searchController,
                      autofocus: false,
                      onSubmitted: (val) {
                        if (val.trim().isNotEmpty) {
                          _triggerSearch(val.trim());
                        }
                      },
                      style: const TextStyle(
                        fontSize: 14,
                        color: _textDark,
                        fontWeight: FontWeight.w500,
                      ),
                      decoration: const InputDecoration(
                        hintText: 'Search craft makers, crafts or products|',
                        hintStyle: TextStyle(
                          color: Color(0xFF8C7A70),
                          fontSize: 13.5,
                        ),
                        border: InputBorder.none,
                        isDense: true,
                        contentPadding: EdgeInsets.zero,
                      ),
                    ),
                  ),
                  if (_searchController.text.isNotEmpty)
                    GestureDetector(
                      onTap: () {
                        setState(() {
                          _searchController.clear();
                        });
                      },
                      child: const Icon(Icons.close, color: Color(0xFF8C7A70), size: 18),
                    )
                  else
                    GestureDetector(
                      onTap: () => _triggerSearch('Bamboo fruit baskets'),
                      child: const Icon(Icons.close, color: Color(0xFF8C7A70), size: 18),
                    ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildVoiceSearchCard() {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: const Color(0xFFFFF7F2),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFFF7E2D6)),
        boxShadow: const [
          BoxShadow(
            color: Color(0x06000000),
            blurRadius: 6,
            offset: Offset(0, 2),
          ),
        ],
      ),
      padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 16),
      child: Column(
        children: [
          // Voice Ripple circle button
          GestureDetector(
            onTap: () {
              setState(() => _isListening = !_isListening);
              if (_isListening) {
                _showSnack('Listening: "Bamboo fruit baskets"...');
                Future.delayed(const Duration(milliseconds: 1200), () {
                  if (mounted) {
                    setState(() => _isListening = false);
                    _triggerSearch('Bamboo fruit baskets');
                  }
                });
              }
            },
            child: Container(
              width: 80,
              height: 80,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: const Color(0xFFFCE1D4),
                border: Border.all(
                  color: const Color(0xFFF3C0A9),
                  width: _isListening ? 4 : 2,
                ),
                boxShadow: [
                  BoxShadow(
                    color: _primaryRust.withValues(alpha: 0.18),
                    blurRadius: 18,
                    spreadRadius: _isListening ? 6 : 2,
                  ),
                ],
              ),
              child: Center(
                child: Container(
                  width: 56,
                  height: 56,
                  decoration: const BoxDecoration(
                    color: _primaryRust,
                    shape: BoxShape.circle,
                  ),
                  child: Icon(
                    _isListening ? Icons.graphic_eq : Icons.mic,
                    color: Colors.white,
                    size: 28,
                  ),
                ),
              ),
            ),
          ),
          const SizedBox(height: 14),

          // Title
          RichText(
            text: const TextSpan(
              text: 'Speak to search ',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
              children: [
                TextSpan(
                  text: '/ बोलकर खोजें',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: _primaryRust,
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 6),

          // Suggestion text
          RichText(
            textAlign: TextAlign.center,
            text: TextSpan(
              text: 'Try saying: ',
              style: const TextStyle(fontSize: 12, color: _textMuted),
              children: [
                TextSpan(
                  text: '“Handmade terracotta planters 500 pieces”',
                  style: const TextStyle(fontWeight: FontWeight.w700, color: Color(0xFF8C3A16)),
                ),
                const TextSpan(text: ' or '),
                TextSpan(
                  text: '“Assam bamboo baskets”',
                  style: const TextStyle(fontWeight: FontWeight.w700, color: Color(0xFF8C3A16)),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),

          // Dialect tag
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: const Color(0xFFECD8CC)),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: const [
                Icon(Icons.record_voice_over, size: 14, color: _successGreen),
                SizedBox(width: 6),
                Text(
                  'Voice enabled in Hindi, English & 10 regional dialects',
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF386B3E),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBrowseByCraftSection() {
    final crafts = [
      {'title': 'Pottery', 'icon': Icons.bubble_chart},
      {'title': 'Textiles', 'icon': Icons.checkroom},
      {'title': 'Woodcraft', 'icon': Icons.carpenter},
      {'title': 'Metal', 'icon': Icons.hardware},
      {'title': 'Bamboo', 'icon': Icons.eco},
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text(
              'Browse by Craft',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
            GestureDetector(
              onTap: () => _showSnack('Opening Full Bulk Catalog'),
              child: const Text(
                'Bulk Catalog',
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.w700,
                  color: _primaryRust,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 12),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: crafts.map((craft) {
            return GestureDetector(
              onTap: () {
                if (craft['title'] == 'Bamboo') {
                  _triggerSearch('Bamboo fruit baskets');
                } else {
                  _triggerSearch('${craft['title']} craft wholesale');
                }
              },
              child: Column(
                children: [
                  Container(
                    width: 54,
                    height: 54,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      shape: BoxShape.circle,
                      border: Border.all(color: const Color(0xFFEADBCE)),
                      boxShadow: const [
                        BoxShadow(
                          color: Color(0x06000000),
                          blurRadius: 4,
                          offset: Offset(0, 1),
                        ),
                      ],
                    ),
                    child: Icon(
                      craft['icon'] as IconData,
                      color: _primaryRust,
                      size: 22,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    craft['title'] as String,
                    style: const TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.bold,
                      color: _textDark,
                    ),
                  ),
                ],
              ),
            );
          }).toList(),
        ),
      ],
    );
  }

  Widget _buildRecentSearchesSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: const [
                Icon(Icons.history, size: 16, color: _textMuted),
                SizedBox(width: 4),
                Text(
                  'Recent Searches',
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
              ],
            ),
            GestureDetector(
              onTap: () {
                setState(() => _recentSearches.clear());
                _showSnack('Recent searches cleared');
              },
              child: const Text(
                'Clear all',
                style: TextStyle(
                  fontSize: 11.5,
                  fontWeight: FontWeight.w600,
                  color: _textMuted,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 10),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: _recentSearches.map((query) {
            return GestureDetector(
              onTap: () => _triggerSearch(query),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: const Color(0xFFE5D7CD)),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Icon(Icons.access_time, size: 13, color: Color(0xFF8C7A70)),
                    const SizedBox(width: 6),
                    Text(
                      query,
                      style: const TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.w600,
                        color: _textDark,
                      ),
                    ),
                    const SizedBox(width: 6),
                    GestureDetector(
                      onTap: () {
                        setState(() => _recentSearches.remove(query));
                      },
                      child: const Icon(Icons.close, size: 14, color: Color(0xFF8C7A70)),
                    ),
                  ],
                ),
              ),
            );
          }).toList(),
        ),
      ],
    );
  }

  Widget _buildPopularSearchesSection() {
    final items = [
      {
        'title': 'Corporate Diwali gift boxes',
        'subtitle': '5,200+ units requested this week',
      },
      {
        'title': 'Terracotta cups (kulhad) 1000 pcs',
        'subtitle': 'Verified GI pottery clusters',
      },
      {
        'title': 'Jute tote bags with logo',
        'subtitle': 'Custom screen branding available',
      },
      {
        'title': 'Handloom cotton throws',
        'subtitle': 'Ready to ship wholesale crates',
      },
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: const [
                Icon(Icons.trending_up, size: 16, color: _primaryRust),
                SizedBox(width: 4),
                Text(
                  'Popular Searches in Bulk',
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
              ],
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
              decoration: BoxDecoration(
                color: const Color(0xFFFDEEE6),
                borderRadius: BorderRadius.circular(10),
              ),
              child: const Text(
                'Live Demand',
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.bold,
                  color: _primaryRust,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 10),

        Column(
          children: items.map((item) {
            return GestureDetector(
              onTap: () => _triggerSearch(item['title']!),
              child: Container(
                margin: const EdgeInsets.only(bottom: 8),
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFFEFE6DE)),
                ),
                child: Row(
                  children: [
                    Container(
                      width: 32,
                      height: 32,
                      decoration: BoxDecoration(
                        color: const Color(0xFFFDEEE6),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: const Icon(Icons.trending_up, size: 18, color: _primaryRust),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            item['title']!,
                            style: const TextStyle(
                              fontSize: 13,
                              fontWeight: FontWeight.w800,
                              color: _textDark,
                            ),
                          ),
                          const SizedBox(height: 1),
                          Text(
                            item['subtitle']!,
                            style: const TextStyle(fontSize: 11, color: _textMuted),
                          ),
                        ],
                      ),
                    ),
                    const Icon(Icons.north_east, size: 16, color: Color(0xFFB5A499)),
                  ],
                ),
              ),
            );
          }).toList(),
        ),
      ],
    );
  }

  Widget _buildVerifiedTrustCard() {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: const Color(0xFFF3F8F4),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFD4E8D7)),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 36,
            height: 36,
            decoration: BoxDecoration(
              color: const Color(0xFFE8F5E9),
              shape: BoxShape.circle,
              border: Border.all(color: const Color(0xFFA5D6A7)),
            ),
            child: const Icon(Icons.verified_user, color: _successGreen, size: 20),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'Verified Craft Maker Production',
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.w900,
                    color: Color(0xFF1B5E20),
                  ),
                ),
                SizedBox(height: 3),
                Text(
                  'Escrow payment security, sample verification, and direct state craft maker cluster logistics.',
                  style: TextStyle(
                    fontSize: 11,
                    color: Color(0xFF386B3E),
                    height: 1.35,
                  ),
                ),
              ],
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
