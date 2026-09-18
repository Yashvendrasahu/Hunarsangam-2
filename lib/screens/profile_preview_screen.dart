// lib/screens/profile_preview_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';
import '../widgets/onboarding_header.dart';
import '../widgets/action_button.dart';

class ProfilePreviewScreen extends StatefulWidget {
  final OnboardingState state;
  final ValueChanged<OnboardingState> onStateChanged;
  final VoidCallback onBack;
  final VoidCallback onComplete;

  const ProfilePreviewScreen({
    super.key,
    required this.state,
    required this.onStateChanged,
    required this.onBack,
    required this.onComplete,
  });

  @override
  State<ProfilePreviewScreen> createState() => _ProfilePreviewScreenState();
}

class _ProfilePreviewScreenState extends State<ProfilePreviewScreen> {
  bool _isPlayingAudio = false;

  void _toggleAudio() {
    setState(() {
      _isPlayingAudio = !_isPlayingAudio;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            OnboardingHeader(
              currentStep: 5,
              totalSteps: 5,
              stepLabel: 'Artisan Setup',
              onBack: widget.onBack,
              currentLanguage: widget.state.selectedLanguage,
            ),

            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Voice-Crafted Badge
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 4.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFDE8DF),
                        borderRadius: BorderRadius.circular(16.0),
                      ),
                      child: const Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.record_voice_over_outlined, size: 14.0, color: Color(0xFFD85A2A)),
                          SizedBox(width: 4.0),
                          Text(
                            'VOICE-CRAFTED',
                            style: TextStyle(
                              fontSize: 10.5,
                              fontWeight: FontWeight.w700,
                              letterSpacing: 0.5,
                              color: Color(0xFF7C3F24),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 10.0),

                    const Text(
                      'Your Profile',
                      style: TextStyle(
                        fontSize: 28.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF221C19),
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 4.0),
                    const Text(
                      'We generated this from your voice. Check if everything looks accurate.',
                      style: TextStyle(
                        fontSize: 13.5,
                        color: Color(0xFF6B584E),
                        height: 1.35,
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // Voice Note Player Card
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 12.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFF3ED),
                        borderRadius: BorderRadius.circular(20.0),
                        border: Border.all(color: const Color(0xFFF8DACD)),
                      ),
                      child: Row(
                        children: [
                          GestureDetector(
                            onTap: _toggleAudio,
                            child: Container(
                              width: 44.0,
                              height: 44.0,
                              decoration: const BoxDecoration(
                                color: Color(0xFF8C3814),
                                shape: BoxShape.circle,
                              ),
                              child: Icon(
                                _isPlayingAudio ? Icons.pause_rounded : Icons.play_arrow_rounded,
                                color: Colors.white,
                                size: 28.0,
                              ),
                            ),
                          ),
                          const SizedBox(width: 12.0),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  children: [
                                    const Text(
                                      'Voice Note Recorded',
                                      style: TextStyle(
                                        fontSize: 14.0,
                                        fontWeight: FontWeight.w700,
                                        color: Color(0xFF2D2421),
                                      ),
                                    ),
                                    const SizedBox(width: 6.0),
                                    Container(
                                      width: 6.0,
                                      height: 6.0,
                                      decoration: const BoxDecoration(
                                        color: Color(0xFF2E7D32),
                                        shape: BoxShape.circle,
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 2.0),
                                Text(
                                  '${widget.state.voiceDuration} • Original Audio Input',
                                  style: const TextStyle(
                                    fontSize: 12.0,
                                    color: Color(0xFF7A685F),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const Icon(Icons.graphic_eq_rounded, size: 28.0, color: Color(0xFFA84318)),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // Artisan Summary Card
                    Container(
                      padding: const EdgeInsets.all(16.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFFBF9),
                        borderRadius: BorderRadius.circular(24.0),
                        border: Border.all(color: const Color(0xFFEFE4DC)),
                        boxShadow: [
                          BoxShadow(
                            color: const Color(0xFF7C3F24).withValues(alpha: 0.05),
                            blurRadius: 12.0,
                            offset: const Offset(0, 4),
                          ),
                        ],
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          // Header: Avatar, Name, Location, Verified, Craft
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Stack(
                                alignment: Alignment.bottomRight,
                                children: [
                                  Container(
                                    width: 64.0,
                                    height: 64.0,
                                    decoration: BoxDecoration(
                                      color: const Color(0xFFF4E5DC),
                                      borderRadius: BorderRadius.circular(16.0),
                                      border: Border.all(color: const Color(0xFFE5D5CB)),
                                    ),
                                    child: const Center(
                                      child: Icon(
                                        Icons.person_rounded,
                                        size: 38.0,
                                        color: Color(0xFF8C5338),
                                      ),
                                    ),
                                  ),
                                  Container(
                                    padding: const EdgeInsets.all(3.0),
                                    decoration: const BoxDecoration(
                                      color: Color(0xFF2E7D32),
                                      shape: BoxShape.circle,
                                    ),
                                    child: const Icon(
                                      Icons.check,
                                      size: 11.0,
                                      color: Colors.white,
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
                                      children: [
                                        Text(
                                          widget.state.artisanName,
                                          style: const TextStyle(
                                            fontSize: 18.0,
                                            fontWeight: FontWeight.w800,
                                            color: Color(0xFF221C19),
                                          ),
                                        ),
                                        const SizedBox(width: 8.0),
                                        Container(
                                          padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 2.0),
                                          decoration: BoxDecoration(
                                            color: const Color(0xFFE8F5E9),
                                            borderRadius: BorderRadius.circular(10.0),
                                            border: Border.all(color: const Color(0xFFC8E6C9)),
                                          ),
                                          child: const Text(
                                            'Verified',
                                            style: TextStyle(
                                              fontSize: 10.5,
                                              fontWeight: FontWeight.w700,
                                              color: Color(0xFF2E7D32),
                                            ),
                                          ),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(height: 3.0),
                                    Row(
                                      children: [
                                        const Icon(Icons.location_on_outlined, size: 14.0, color: Color(0xFF8C5338)),
                                        const SizedBox(width: 4.0),
                                        Text(
                                          widget.state.artisanLocation,
                                          style: const TextStyle(
                                            fontSize: 12.5,
                                            color: Color(0xFF6B584E),
                                          ),
                                        ),
                                      ],
                                    ),
                                    const SizedBox(height: 6.0),
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
                                      decoration: BoxDecoration(
                                        color: const Color(0xFFFDF0EA),
                                        borderRadius: BorderRadius.circular(8.0),
                                      ),
                                      child: const Row(
                                        mainAxisSize: MainAxisSize.min,
                                        children: [
                                          Icon(Icons.palette_outlined, size: 13.0, color: Color(0xFFA84318)),
                                          SizedBox(width: 4.0),
                                          Text(
                                            'Bamboo & Cane Craft',
                                            style: TextStyle(
                                              fontSize: 11.5,
                                              fontWeight: FontWeight.w700,
                                              color: Color(0xFFA84318),
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

                          const SizedBox(height: 16.0),
                          const Divider(color: Color(0xFFF0E5DE), height: 1.0),
                          const SizedBox(height: 12.0),

                          // Experience Row
                          Row(
                            children: [
                              Container(
                                padding: const EdgeInsets.all(8.0),
                                decoration: BoxDecoration(
                                  color: const Color(0xFFFAF0E9),
                                  borderRadius: BorderRadius.circular(10.0),
                                ),
                                child: const Icon(Icons.military_tech_outlined, size: 20.0, color: Color(0xFF8C4421)),
                              ),
                              const SizedBox(width: 12.0),
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Text(
                                    'Experience',
                                    style: TextStyle(fontSize: 11.5, color: Color(0xFF7A685F)),
                                  ),
                                  Text(
                                    widget.state.experienceYears,
                                    style: const TextStyle(
                                      fontSize: 14.5,
                                      fontWeight: FontWeight.w800,
                                      color: Color(0xFF2D2421),
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),

                          const SizedBox(height: 16.0),

                          // Key Specialties
                          const Text(
                            'KEY SPECIALTIES',
                            style: TextStyle(
                              fontSize: 11.0,
                              fontWeight: FontWeight.w700,
                              letterSpacing: 0.6,
                              color: Color(0xFF8C4421),
                            ),
                          ),
                          const SizedBox(height: 8.0),
                          Wrap(
                            spacing: 8.0,
                            runSpacing: 8.0,
                            children: [
                              _SpecialtyChip(
                                label: 'Fruit Baskets',
                                icon: Icons.eco_outlined,
                              ),
                              _SpecialtyChip(
                                label: 'Decorative Planters',
                                icon: Icons.yard_outlined,
                              ),
                              _SpecialtyChip(
                                label: 'Fine Lattice Weaving',
                                icon: Icons.grid_view_rounded,
                              ),
                            ],
                          ),

                          const SizedBox(height: 16.0),

                          // Bulk Production Ready Card
                          Container(
                            padding: const EdgeInsets.all(12.0),
                            decoration: BoxDecoration(
                              color: const Color(0xFFFDF5F0),
                              borderRadius: BorderRadius.circular(14.0),
                              border: Border.all(color: const Color(0xFFF5E4DB)),
                            ),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Container(
                                  padding: const EdgeInsets.all(6.0),
                                  decoration: BoxDecoration(
                                    color: const Color(0xFFF7E2D7),
                                    borderRadius: BorderRadius.circular(8.0),
                                  ),
                                  child: const Icon(Icons.inventory_2_outlined, size: 18.0, color: Color(0xFFA84318)),
                                ),
                                const SizedBox(width: 10.0),
                                Expanded(
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      const Text(
                                        'Bulk Production Ready',
                                        style: TextStyle(
                                          fontSize: 13.0,
                                          fontWeight: FontWeight.w700,
                                          color: Color(0xFF2D2421),
                                        ),
                                      ),
                                      const SizedBox(height: 2.0),
                                      Text(
                                        widget.state.bulkCapacityText,
                                        style: const TextStyle(
                                          fontSize: 11.5,
                                          color: Color(0xFF6B584E),
                                          height: 1.35,
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

                    const SizedBox(height: 16.0),

                    // GI Trust Guarantee
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Icon(Icons.verified_user_outlined, size: 16.0, color: Color(0xFF2E7D32)),
                        SizedBox(width: 8.0),
                        Expanded(
                          child: Text(
                            'Profile verified for the Open Craft Network & Government GI directory.',
                            style: TextStyle(
                              fontSize: 12.0,
                              color: Color(0xFF4A3B32),
                              height: 1.35,
                            ),
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 20.0),
                  ],
                ),
              ),
            ),

            // Fixed Bottom Action Bar
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  ActionButton(
                    text: 'Create My Profile →',
                    backgroundColor: const Color(0xFFA84318),
                    onPressed: widget.onComplete,
                  ),
                  const SizedBox(height: 10.0),
                  ActionButton(
                    text: 'Edit with Voice',
                    icon: Icons.mic,
                    isOutlined: true,
                    textColor: const Color(0xFF4A3228),
                    onPressed: () => Navigator.pop(context),
                  ),
                  const SizedBox(height: 8.0),
                  const Text(
                    'You can update your craft details or add photos anytime.',
                    style: TextStyle(
                      fontSize: 11.5,
                      color: Color(0xFF7A685F),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SpecialtyChip extends StatelessWidget {
  final String label;
  final IconData icon;

  const _SpecialtyChip({required this.label, required this.icon});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 6.0),
      decoration: BoxDecoration(
        color: const Color(0xFFF7EFE9),
        borderRadius: BorderRadius.circular(10.0),
        border: Border.all(color: const Color(0xFFEADCD3)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 14.0, color: const Color(0xFFA84318)),
          const SizedBox(width: 6.0),
          Text(
            label,
            style: const TextStyle(
              fontSize: 12.0,
              fontWeight: FontWeight.w600,
              color: Color(0xFF4A3228),
            ),
          ),
        ],
      ),
    );
  }
}
