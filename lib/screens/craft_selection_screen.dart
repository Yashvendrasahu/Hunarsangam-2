// lib/screens/craft_selection_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';
import '../widgets/onboarding_header.dart';
import '../widgets/action_button.dart';

class CraftCategory {
  final String id;
  final String title;
  final String subtitle;
  final IconData icon;
  final Color accentColor;

  const CraftCategory({
    required this.id,
    required this.title,
    required this.subtitle,
    required this.icon,
    required this.accentColor,
  });
}

class CraftSelectionScreen extends StatefulWidget {
  final OnboardingState state;
  final ValueChanged<OnboardingState> onStateChanged;
  final VoidCallback onBack;
  final VoidCallback onContinue;

  const CraftSelectionScreen({
    super.key,
    required this.state,
    required this.onStateChanged,
    required this.onBack,
    required this.onContinue,
  });

  @override
  State<CraftSelectionScreen> createState() => _CraftSelectionScreenState();
}

class _CraftSelectionScreenState extends State<CraftSelectionScreen> {
  late List<String> _selectedCrafts;

  static const List<CraftCategory> _crafts = [
    CraftCategory(
      id: 'bamboo_cane',
      title: 'Bamboo & Cane',
      subtitle: 'Baskets, planters, lamps, mats',
      icon: Icons.grass_rounded,
      accentColor: Color(0xFF5D7A38),
    ),
    CraftCategory(
      id: 'pottery_terracotta',
      title: 'Pottery &\nTerracotta',
      subtitle: 'Earthen pots, vases, tableware, diyas',
      icon: Icons.local_florist_rounded,
      accentColor: Color(0xFFBA5427),
    ),
    CraftCategory(
      id: 'handloom_textiles',
      title: 'Handloom &\nTextiles',
      subtitle: 'Sarees, dupattas, stoles, home linen',
      icon: Icons.texture_rounded,
      accentColor: Color(0xFF386B8C),
    ),
    CraftCategory(
      id: 'embroidery_zardozi',
      title: 'Embroidery &\nZardozi',
      subtitle: 'Chikan, kantha, mirror work, zari',
      icon: Icons.auto_awesome_rounded,
      accentColor: Color(0xFF8C386B),
    ),
    CraftCategory(
      id: 'wood_craft',
      title: 'Wood Craft &\nCarving',
      subtitle: 'Toys, wooden trays, wall panels, utensils',
      icon: Icons.carpenter_rounded,
      accentColor: Color(0xFF7A5138),
    ),
    CraftCategory(
      id: 'metal_craft',
      title: 'Metal Craft &\nDhokra',
      subtitle: 'Brass statues, bell metal, copperware',
      icon: Icons.shield_moon_rounded,
      accentColor: Color(0xFFB58900),
    ),
    CraftCategory(
      id: 'handmade_jewellery',
      title: 'Handmade\nJewellery',
      subtitle: 'Beaded, terracotta, tribal silver, filigree',
      icon: Icons.diamond_outlined,
      accentColor: Color(0xFFC2410C),
    ),
    CraftCategory(
      id: 'traditional_painting',
      title: 'Traditional\nPainting',
      subtitle: 'Madhubani, Warli, Pichwai, miniature',
      icon: Icons.palette_outlined,
      accentColor: Color(0xFF0F766E),
    ),
    CraftCategory(
      id: 'leather_craft',
      title: 'Leather Craft',
      subtitle: 'Juttis, bags, journals, embossed goods',
      icon: Icons.work_outline_rounded,
      accentColor: Color(0xFF78350F),
    ),
    CraftCategory(
      id: 'stone_marble',
      title: 'Stone & Marble',
      subtitle: 'Inlay work, jaali panels, sculptures',
      icon: Icons.temple_hindu_rounded,
      accentColor: Color(0xFF475569),
    ),
  ];

  @override
  void initState() {
    super.initState();
    _selectedCrafts = List.from(widget.state.selectedCraftIds);
  }

  void _toggleCraft(String id) {
    setState(() {
      if (_selectedCrafts.contains(id)) {
        _selectedCrafts.remove(id);
      } else {
        _selectedCrafts.add(id);
      }
    });
    widget.onStateChanged(widget.state.copyWith(selectedCraftIds: _selectedCrafts));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            OnboardingHeader(
              currentStep: 3,
              totalSteps: 5,
              stepLabel: 'Artisan Craft',
              onBack: widget.onBack,
              currentLanguage: widget.state.selectedLanguage,
            ),

            // Top Audio Banner
            Container(
              margin: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 4.0),
              padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 8.0),
              decoration: BoxDecoration(
                color: const Color(0xFFFFF3ED),
                borderRadius: BorderRadius.circular(12.0),
                border: Border.all(color: const Color(0xFFF8DACD)),
              ),
              child: const Row(
                children: [
                  Icon(Icons.volume_up_outlined, size: 16.0, color: Color(0xFFA84318)),
                  SizedBox(width: 8.0),
                  Expanded(
                    child: Text(
                      'Audio assistance active • Tap any craft to hear details',
                      style: TextStyle(
                        fontSize: 12.0,
                        fontWeight: FontWeight.w600,
                        color: Color(0xFFA84318),
                      ),
                    ),
                  ),
                ],
              ),
            ),

            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'What do you make?',
                      style: TextStyle(
                        fontSize: 16.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF221C19),
                      ),
                    ),
                    const SizedBox(height: 2.0),
                    const Text(
                      'Choose your primary craft. You can select more than one or tell us with your voice.',
                      style: TextStyle(
                        fontSize: 13.0,
                        color: Color(0xFF6B584E),
                        height: 1.35,
                      ),
                    ),

                    const SizedBox(height: 14.0),

                    // Tap Microphone Card
                    Container(
                      padding: const EdgeInsets.all(14.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFAF0E9),
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFEAD8CC)),
                      ),
                      child: Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(10.0),
                            decoration: const BoxDecoration(
                              color: Color(0xFF8C3814),
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(Icons.mic, color: Colors.white, size: 20.0),
                          ),
                          const SizedBox(width: 12.0),
                          const Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Tap microphone to speak your craft name',
                                  style: TextStyle(
                                    fontSize: 13.0,
                                    fontWeight: FontWeight.w700,
                                    color: Color(0xFF2D2421),
                                  ),
                                ),
                                SizedBox(height: 2.0),
                                Text(
                                  'Say e.g. "I make terracotta pots and clay planters"',
                                  style: TextStyle(
                                    fontSize: 11.5,
                                    fontStyle: FontStyle.italic,
                                    color: Color(0xFF7A685F),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // 2-Column Visual Craft Cards Grid
                    GridView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        crossAxisSpacing: 12.0,
                        mainAxisSpacing: 12.0,
                        childAspectRatio: 0.82,
                      ),
                      itemCount: _crafts.length,
                      itemBuilder: (context, index) {
                        final craft = _crafts[index];
                        final isSelected = _selectedCrafts.contains(craft.id);

                        return InkWell(
                          onTap: () => _toggleCraft(craft.id),
                          borderRadius: BorderRadius.circular(16.0),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(16.0),
                              border: Border.all(
                                color: isSelected ? const Color(0xFFA84318) : const Color(0xFFE8DDD5),
                                width: isSelected ? 2.5 : 1.2,
                              ),
                              boxShadow: [
                                if (isSelected)
                                  BoxShadow(
                                    color: const Color(0xFFA84318).withValues(alpha: 0.1),
                                    blurRadius: 8.0,
                                    offset: const Offset(0, 3),
                                  ),
                              ],
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                // Visual Graphic Banner Header with Audio preview button
                                Stack(
                                  children: [
                                    Container(
                                      height: 90.0,
                                      decoration: BoxDecoration(
                                        color: craft.accentColor.withValues(alpha: 0.12),
                                        borderRadius: const BorderRadius.vertical(top: Radius.circular(14.0)),
                                      ),
                                      child: Center(
                                        child: Icon(
                                          craft.icon,
                                          size: 40.0,
                                          color: craft.accentColor,
                                        ),
                                      ),
                                    ),
                                    // Audio preview button
                                    Positioned(
                                      bottom: 6.0,
                                      left: 6.0,
                                      child: Container(
                                        padding: const EdgeInsets.all(4.0),
                                        decoration: BoxDecoration(
                                          color: Colors.white.withValues(alpha: 0.9),
                                          shape: BoxShape.circle,
                                        ),
                                        child: const Icon(
                                          Icons.volume_up_outlined,
                                          size: 13.0,
                                          color: Color(0xFF6E5D53),
                                        ),
                                      ),
                                    ),
                                    // Selected check indicator
                                    if (isSelected)
                                      Positioned(
                                        top: 6.0,
                                        right: 6.0,
                                        child: Container(
                                          padding: const EdgeInsets.all(3.0),
                                          decoration: const BoxDecoration(
                                            color: Color(0xFFA84318),
                                            shape: BoxShape.circle,
                                          ),
                                          child: const Icon(
                                            Icons.check,
                                            size: 13.0,
                                            color: Colors.white,
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
                                        craft.title,
                                        style: const TextStyle(
                                          fontSize: 13.5,
                                          fontWeight: FontWeight.w800,
                                          color: Color(0xFF221C19),
                                          height: 1.2,
                                        ),
                                      ),
                                      const SizedBox(height: 3.0),
                                      Text(
                                        craft.subtitle,
                                        maxLines: 2,
                                        overflow: TextOverflow.ellipsis,
                                        style: const TextStyle(
                                          fontSize: 10.5,
                                          color: Color(0xFF7A685F),
                                          height: 1.25,
                                        ),
                                      ),
                                      const SizedBox(height: 6.0),
                                      Text(
                                        isSelected ? 'Selected' : 'Tap to choose',
                                        style: TextStyle(
                                          fontSize: 10.5,
                                          fontWeight: FontWeight.w700,
                                          color: isSelected ? const Color(0xFFA84318) : const Color(0xFF8C7368),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          ),
                        );
                      },
                    ),

                    const SizedBox(height: 12.0),

                    // Other Unique Crafts banner
                    Container(
                      padding: const EdgeInsets.all(12.0),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFE8DDD5)),
                      ),
                      child: Row(
                        children: [
                          Container(
                            width: 50.0,
                            height: 50.0,
                            decoration: BoxDecoration(
                              color: const Color(0xFFF7EFE9),
                              borderRadius: BorderRadius.circular(10.0),
                            ),
                            child: const Icon(Icons.category_outlined, color: Color(0xFF8C4421)),
                          ),
                          const SizedBox(width: 12.0),
                          const Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Other Unique Crafts',
                                  style: TextStyle(
                                    fontSize: 13.5,
                                    fontWeight: FontWeight.w800,
                                    color: Color(0xFF221C19),
                                  ),
                                ),
                                SizedBox(height: 2.0),
                                Text(
                                  'Paper mache, glasswork, horn craft, lacquer',
                                  style: TextStyle(
                                    fontSize: 11.0,
                                    color: Color(0xFF7A685F),
                                  ),
                                ),
                                SizedBox(height: 2.0),
                                Text(
                                  'Tap to browse more',
                                  style: TextStyle(
                                    fontSize: 10.5,
                                    fontWeight: FontWeight.w600,
                                    color: Color(0xFF8C7368),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const Icon(Icons.volume_up_outlined, size: 16.0, color: Color(0xFF8C7368)),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16.0),
                  ],
                ),
              ),
            ),

            // Fixed Bottom Action Bar
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: ActionButton(
                text: 'Continue',
                backgroundColor: const Color(0xFFE66B38),
                footerNote: 'You can change or add secondary craft skills anytime.',
                onPressed: widget.onContinue,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
