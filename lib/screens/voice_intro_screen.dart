// lib/screens/voice_intro_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';
import '../widgets/onboarding_header.dart';
import '../widgets/action_button.dart';

class VoiceIntroScreen extends StatefulWidget {
  final OnboardingState state;
  final ValueChanged<OnboardingState> onStateChanged;
  final VoidCallback onBack;
  final VoidCallback onContinue;

  const VoiceIntroScreen({
    super.key,
    required this.state,
    required this.onStateChanged,
    required this.onBack,
    required this.onContinue,
  });

  @override
  State<VoiceIntroScreen> createState() => _VoiceIntroScreenState();
}

class _VoiceIntroScreenState extends State<VoiceIntroScreen> with SingleTickerProviderStateMixin {
  late bool _isRecording;
  late AnimationController _pulseController;

  @override
  void initState() {
    super.initState();
    _isRecording = widget.state.hasRecordedVoice;
    _pulseController = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1400),
    )..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulseController.dispose();
    super.dispose();
  }

  void _toggleRecording() {
    setState(() {
      _isRecording = !_isRecording;
    });
    widget.onStateChanged(
      widget.state.copyWith(
        hasRecordedVoice: _isRecording,
        voiceDuration: '0:18',
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            OnboardingHeader(
              currentStep: 2,
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
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const SizedBox(height: 8.0),

                    const Text(
                      'Tell us about yourself',
                      style: TextStyle(
                        fontSize: 27.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF221C19),
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    const Text(
                      'Speak naturally. We will create your artisan profile for you.',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 14.0,
                        color: Color(0xFF6B584E),
                        height: 1.35,
                      ),
                    ),

                    const SizedBox(height: 14.0),

                    // Audio Assistance Active Badge
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 6.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFE8F5E9),
                        borderRadius: BorderRadius.circular(20.0),
                        border: Border.all(color: const Color(0xFFC8E6C9)),
                      ),
                      child: const Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.hearing_rounded, size: 16.0, color: Color(0xFF2E7D32)),
                          SizedBox(width: 6.0),
                          Text(
                            'Audio assistance active\nHindi/English/other supported',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 11.5,
                              fontWeight: FontWeight.w600,
                              color: Color(0xFF2E7D32),
                              height: 1.2,
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 24.0),

                    // Concentric Glowing Microphone Recording Button
                    GestureDetector(
                      onTap: _toggleRecording,
                      child: AnimatedBuilder(
                        animation: _pulseController,
                        builder: (context, child) {
                          final pulse = _isRecording ? _pulseController.value * 12.0 : 0.0;
                          return Stack(
                            alignment: Alignment.center,
                            children: [
                              // Outer Ring
                              Container(
                                width: 190.0 + pulse,
                                height: 190.0 + pulse,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  color: const Color(0xFFD85A2A).withValues(alpha: 0.12),
                                ),
                              ),
                              // Middle Ring
                              Container(
                                width: 155.0,
                                height: 155.0,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  color: const Color(0xFFD85A2A).withValues(alpha: 0.22),
                                ),
                              ),
                              // Core Mic Button
                              Container(
                                width: 120.0,
                                height: 120.0,
                                decoration: const BoxDecoration(
                                  shape: BoxShape.circle,
                                  gradient: RadialGradient(
                                    colors: [
                                      Color(0xFFBA4B1D),
                                      Color(0xFF8C3814),
                                    ],
                                  ),
                                  boxShadow: [
                                    BoxShadow(
                                      color: Color(0x338C3814),
                                      blurRadius: 16.0,
                                      offset: Offset(0, 6),
                                    ),
                                  ],
                                ),
                                child: Icon(
                                  _isRecording ? Icons.mic : Icons.mic_none_rounded,
                                  size: 48.0,
                                  color: Colors.white,
                                ),
                              ),
                            ],
                          );
                        },
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // Tap to speak instruction
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Icon(Icons.graphic_eq_rounded, size: 16.0, color: Color(0xFFA84318)),
                        SizedBox(width: 6.0),
                        Text(
                          'Tap the microphone and speak naturally.',
                          style: TextStyle(
                            fontSize: 14.0,
                            fontWeight: FontWeight.w700,
                            color: Color(0xFFA84318),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 4.0),
                    const Text(
                      'Tell us your craft name, village, or years of work.',
                      style: TextStyle(
                        fontSize: 12.5,
                        color: Color(0xFF7A685F),
                      ),
                    ),

                    const SizedBox(height: 20.0),

                    // Speak Your Following Details Card with Prompt Chips
                    Container(
                      padding: const EdgeInsets.all(16.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFFBF9),
                        borderRadius: BorderRadius.circular(18.0),
                        border: Border.all(color: const Color(0xFFF0E2D8)),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Row(
                            children: [
                              Icon(Icons.lightbulb_rounded, size: 16.0, color: Color(0xFFB85324)),
                              SizedBox(width: 6.0),
                              Text(
                                'SPEAK YOUR FOLLOWING DETAILS',
                                style: TextStyle(
                                  fontSize: 11.0,
                                  fontWeight: FontWeight.w700,
                                  letterSpacing: 0.6,
                                  color: Color(0xFF8C4421),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 12.0),
                          Wrap(
                            spacing: 8.0,
                            runSpacing: 8.0,
                            children: const [
                              _DetailChip(label: 'Full Name'),
                              _DetailChip(label: 'Full Address'),
                              _DetailChip(label: 'Experience'),
                              _DetailChip(label: 'Specialities'),
                              _DetailChip(label: 'Products You are making'),
                            ],
                          ),
                          const SizedBox(height: 12.0),
                          Container(
                            padding: const EdgeInsets.all(12.0),
                            decoration: BoxDecoration(
                              color: const Color(0xFFFBF6F2),
                              borderRadius: BorderRadius.circular(12.0),
                            ),
                            child: const Text(
                              'Example : "I make handmade bamboo baskets and have been doing this for many years in Barabanki, UP." All About Your self',
                              style: TextStyle(
                                fontSize: 12.0,
                                fontStyle: FontStyle.italic,
                                color: Color(0xFF4A3B32),
                                height: 1.35,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 20.0),

                    // Secondary Action: Add Details Manually
                    ActionButton(
                      text: 'Add Details Manually',
                      icon: Icons.edit_note_rounded,
                      isOutlined: true,
                      onPressed: () {},
                    ),

                    const SizedBox(height: 12.0),
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
                footerNote: 'Designed for speaking, seeing and tapping — zero typing required.',
                footerIcon: Icons.verified_user_outlined,
                onPressed: widget.onContinue,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _DetailChip extends StatelessWidget {
  final String label;
  const _DetailChip({required this.label});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 7.0),
      decoration: BoxDecoration(
        color: const Color(0xFFF7EFE9),
        borderRadius: BorderRadius.circular(12.0),
        border: Border.all(color: const Color(0xFFEADAD0)),
      ),
      child: Text(
        label,
        style: const TextStyle(
          fontSize: 12.0,
          fontStyle: FontStyle.italic,
          fontWeight: FontWeight.w600,
          color: Color(0xFF4A3B32),
        ),
      ),
    );
  }
}
