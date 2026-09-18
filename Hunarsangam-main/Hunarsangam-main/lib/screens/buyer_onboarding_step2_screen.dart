// lib/screens/buyer_onboarding_step2_screen.dart

import 'package:flutter/material.dart';
import '../models/buyer_onboarding_model.dart';

/// Screen: Bulk Buyer Registration - Step 2 of 3: What are you looking for?
/// Exactly matches 'bulk buyer step 2 register.png'
class BuyerOnboardingStep2Screen extends StatefulWidget {
  final BuyerOnboardingModel model;
  final ValueChanged<BuyerOnboardingModel>? onContinue;
  final VoidCallback? onBack;

  const BuyerOnboardingStep2Screen({
    super.key,
    required this.model,
    this.onContinue,
    this.onBack,
  });

  @override
  State<BuyerOnboardingStep2Screen> createState() =>
      _BuyerOnboardingStep2ScreenState();
}

class _BuyerOnboardingStep2ScreenState
    extends State<BuyerOnboardingStep2Screen> {
  late List<String> _selectedCategories;

  static const Color _primaryRust = Color(0xFF9C3C18);
  static const Color _bgCanvas = Color(0xFFFDFBF9);
  static const Color _headerBg = Color(0xFFFAF5F0);
  static const Color _borderSubtle = Color(0xFFE5D5CB);
  static const Color _textDark = Color(0xFF1F1612);
  static const Color _textMuted = Color(0xFF6B5A51);

  final List<CraftCategoryItem> _allCategories = const [
    CraftCategoryItem(
      id: 'Home Decor',
      title: 'Home Decor',
      badgeText: '140+ Clusters',
      imageUrl:
          'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=500&auto=format&fit=crop&q=80',
    ),
    CraftCategoryItem(
      id: 'Bamboo Craft',
      title: 'Bamboo Craft',
      badgeText: 'GI Certified',
      imageUrl:
          'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=500&auto=format&fit=crop&q=80',
    ),
    CraftCategoryItem(
      id: 'Textiles',
      title: 'Textiles',
      badgeText: 'Weaves & Prints',
      imageUrl:
          'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&auto=format&fit=crop&q=80',
    ),
    CraftCategoryItem(
      id: 'Pottery',
      title: 'Pottery',
      badgeText: 'Studio & Clay',
      imageUrl:
          'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&auto=format&fit=crop&q=80',
    ),
    CraftCategoryItem(
      id: 'Wood Craft',
      title: 'Wood Craft',
      badgeText: 'Carvings & Toys',
      imageUrl:
          'https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&auto=format&fit=crop&q=80',
    ),
    CraftCategoryItem(
      id: 'Metal Craft',
      title: 'Metal Craft',
      badgeText: 'Brass & Dokra',
      imageUrl:
          'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=80',
    ),
    CraftCategoryItem(
      id: 'Jewelry',
      title: 'Jewelry',
      badgeText: 'Silver & Beads',
      imageUrl:
          'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&auto=format&fit=crop&q=80',
    ),
  ];

  @override
  void initState() {
    super.initState();
    _selectedCategories = List.from(widget.model.selectedCategories);
  }

  void _toggleCategory(String id) {
    setState(() {
      if (_selectedCategories.contains(id)) {
        if (_selectedCategories.length > 1) {
          _selectedCategories.remove(id);
        }
      } else {
        _selectedCategories.add(id);
      }
    });
  }

  void _handleContinue() {
    final updated = widget.model.copyWith(
      selectedCategories: _selectedCategories,
    );
    widget.onContinue?.call(updated);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bgCanvas,
      appBar: _buildAppBar(),
      body: SafeArea(
        child: Column(
          children: [
            _buildProgressBar(),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 14.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildHeading(),
                    const SizedBox(height: 14.0),
                    _buildSectionHeader(),
                    const SizedBox(height: 12.0),
                    _buildCategoryGrid(),
                    const SizedBox(height: 18.0),
                    _buildGuaranteeBox(),
                    const SizedBox(height: 20.0),
                  ],
                ),
              ),
            ),
            _buildBottomBar(),
          ],
        ),
      ),
    );
  }

  PreferredSizeWidget _buildAppBar() {
    return AppBar(
      backgroundColor: _headerBg,
      elevation: 0,
      scrolledUnderElevation: 0,
      leading: IconButton(
        icon: const Icon(Icons.arrow_back, color: _textDark, size: 20),
        onPressed: widget.onBack ?? () => Navigator.maybePop(context),
      ),
      title: Column(
        children: const [
          Text(
            'ONBOARDING',
            style: TextStyle(
              color: Color(0xFF8D6E63),
              fontSize: 9.5,
              fontWeight: FontWeight.w900,
              letterSpacing: 1.0,
            ),
          ),
          SizedBox(height: 2.0),
          Text(
            'Step 2 of 3',
            style: TextStyle(
              color: _primaryRust,
              fontSize: 14,
              fontWeight: FontWeight.w900,
            ),
          ),
        ],
      ),
      centerTitle: true,
      actions: [
        Container(
          margin: const EdgeInsets.only(right: 16.0),
          padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 4.0),
          decoration: BoxDecoration(
            color: const Color(0xFFF0E5DC),
            borderRadius: BorderRadius.circular(16.0),
          ),
          child: Row(
            children: const [
              Icon(Icons.storefront, color: Color(0xFF5D4037), size: 14),
              SizedBox(width: 4.0),
              Text(
                'Bulk Buyer',
                style: TextStyle(
                  color: Color(0xFF5D4037),
                  fontSize: 11,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ],
          ),
        ),
      ],
      bottom: PreferredSize(
        preferredSize: const Size.fromHeight(1.0),
        child: Container(color: const Color(0xFFE8DDD5), height: 1.0),
      ),
    );
  }

  Widget _buildProgressBar() {
    return Container(
      height: 4.0,
      color: const Color(0xFFEADFD6),
      child: Align(
        alignment: Alignment.centerLeft,
        child: FractionallySizedBox(
          widthFactor: 0.66,
          child: Container(color: _primaryRust),
        ),
      ),
    );
  }

  Widget _buildHeading() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: const [
        Text(
          'What are you looking for?',
          style: TextStyle(
            color: _textDark,
            fontSize: 22,
            fontWeight: FontWeight.w900,
            letterSpacing: -0.5,
          ),
        ),
        SizedBox(height: 4.0),
        Text(
          'Choose the craft categories and order volumes you want to source directly from certified artisan clusters.',
          style: TextStyle(
            color: _textMuted,
            fontSize: 12,
            height: 1.4,
          ),
        ),
      ],
    );
  }

  Widget _buildSectionHeader() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Row(
              children: const [
                Icon(Icons.layers_outlined, color: _primaryRust, size: 16),
                SizedBox(width: 6.0),
                Text(
                  'Product Categories',
                  style: TextStyle(
                    fontSize: 13,
                    fontWeight: FontWeight.w800,
                    color: _textDark,
                  ),
                ),
              ],
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 2.0),
              decoration: BoxDecoration(
                color: const Color(0xFFE8F5E9),
                border: Border.all(color: const Color(0xFFC8E6C9)),
                borderRadius: BorderRadius.circular(12.0),
              ),
              child: Text(
                '${_selectedCategories.length} Selected',
                style: const TextStyle(
                  color: Color(0xFF2E7D32),
                  fontSize: 10.5,
                  fontWeight: FontWeight.w800,
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 3.0),
        const Text(
          'Tap multiple categories to personalize your wholesale direct-sourcing feed.',
          style: TextStyle(
            fontSize: 11,
            color: Color(0xFF7A685F),
          ),
        ),
      ],
    );
  }

  Widget _buildCategoryGrid() {
    return GridView.builder(
      itemCount: _allCategories.length + 1,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 0.95,
        mainAxisSpacing: 10.0,
        crossAxisSpacing: 10.0,
      ),
      itemBuilder: (context, index) {
        if (index < _allCategories.length) {
          final cat = _allCategories[index];
          final isSelected = _selectedCategories.contains(cat.id);
          return _buildCategoryCard(cat, isSelected);
        } else {
          return _buildOtherCategoryCard();
        }
      },
    );
  }

  Widget _buildCategoryCard(CraftCategoryItem cat, bool isSelected) {
    return InkWell(
      onTap: () => _toggleCategory(cat.id),
      borderRadius: BorderRadius.circular(20.0),
      child: Container(
        padding: const EdgeInsets.all(8.0),
        decoration: BoxDecoration(
          color: isSelected ? const Color(0xFFFFFBF8) : Colors.white,
          border: Border.all(
            color: isSelected ? _primaryRust : _borderSubtle,
            width: isSelected ? 2.0 : 1.0,
          ),
          borderRadius: BorderRadius.circular(20.0),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: ClipRRect(
                borderRadius: BorderRadius.circular(14.0),
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    Image.network(
                      cat.imageUrl,
                      fit: BoxFit.cover,
                      errorBuilder: (_, __, ___) => Container(
                        color: const Color(0xFFF3EBE3),
                        child: const Center(
                          child: Icon(Icons.image, color: Color(0xFF8D6E63)),
                        ),
                      ),
                    ),
                    if (isSelected)
                      Positioned(
                        top: 6,
                        right: 6,
                        child: Container(
                          width: 20,
                          height: 20,
                          decoration: const BoxDecoration(
                            color: _primaryRust,
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(Icons.check, color: Colors.white, size: 14),
                        ),
                      ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 6.0),
            Text(
              cat.title,
              style: const TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w800,
                color: _textDark,
              ),
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
            Text(
              cat.badgeText,
              style: TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.w700,
                color: isSelected ? _primaryRust : const Color(0xFF7A685F),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildOtherCategoryCard() {
    final isSelected = _selectedCategories.contains('Other');
    return InkWell(
      onTap: () => _toggleCategory('Other'),
      borderRadius: BorderRadius.circular(20.0),
      child: Container(
        padding: const EdgeInsets.all(12.0),
        decoration: BoxDecoration(
          color: isSelected ? const Color(0xFFFFFBF8) : const Color(0xFFFAF5F0),
          border: Border.all(
            color: isSelected ? _primaryRust : const Color(0xFFD5C5BA),
            width: isSelected ? 2.0 : 1.0,
          ),
          borderRadius: BorderRadius.circular(20.0),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            CircleAvatar(
              radius: 18,
              backgroundColor: Color(0xFFEAE0D8),
              child: Icon(Icons.more_horiz, color: Color(0xFF5D4037), size: 20),
            ),
            SizedBox(height: 6.0),
            Text(
              'Other',
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w800,
                color: _textDark,
              ),
            ),
            SizedBox(height: 2.0),
            Text(
              'Leather, Paper & Stone',
              style: TextStyle(
                fontSize: 9.5,
                color: Color(0xFF7A685F),
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildGuaranteeBox() {
    return Container(
      padding: const EdgeInsets.all(10.0),
      decoration: BoxDecoration(
        color: const Color(0xFFFAF5F0),
        border: Border.all(color: const Color(0xFFECDCCF)),
        borderRadius: BorderRadius.circular(14.0),
      ),
      child: Row(
        children: const [
          Icon(Icons.verified_user_outlined, color: Color(0xFF2E7D32), size: 16),
          SizedBox(width: 8.0),
          Expanded(
            child: Text(
              'Cluster verify guarantee: Direct from verified artisan guilds',
              style: TextStyle(
                fontSize: 10.5,
                color: Color(0xFF4A3B32),
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBottomBar() {
    return Container(
      padding: const EdgeInsets.all(16.0),
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: Color(0xFFE8DDD5))),
      ),
      child: SizedBox(
        width: double.infinity,
        height: 48,
        child: ElevatedButton(
          onPressed: _handleContinue,
          style: ElevatedButton.styleFrom(
            backgroundColor: _primaryRust,
            foregroundColor: Colors.white,
            elevation: 2,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(16.0),
            ),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: const [
              Text(
                'Continue to Step 3',
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w800),
              ),
              SizedBox(width: 6.0),
              Icon(Icons.arrow_forward, size: 16),
            ],
          ),
        ),
      ),
    );
  }
}
