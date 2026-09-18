// lib/add_product/screens/voice_description_screen.dart

import 'package:flutter/material.dart';
import '../models/product_draft.dart';
import '../widgets/artisan_bottom_navigation.dart';

/// Screen 5: Matches 'p5-desciption all about product with raw materila cost voice serach.png' 100%
/// Create Product Voice-First screen:
/// - App Bar: Back arrow, "Create Product", "VOICE-FIRST" badge, "Step 1 of 2 • Voice Input", "English ▾" dropdown
/// - "Tell us about your product" card with person speaking icon
/// - "EXAMPLE PROMPT" card with speaker icon, "Tap to listen ▷", and italicized text
/// - Big white card with:
///     • "🔴 🔴 Recording Live (0:12)" status pill
///     • Concentric glowing circles with large circular rust mic button
///     • 7-bar sound equalizer waveform
///     • Real-time Transcription card with highlighted "[250 rupees wholesale]" badge
///     • "✓ Done Recording" button
/// - Footer: "💡 Zero typing needed • Speak in your natural rhythm"
/// - 5-tab Artisan Bottom Navigation with Products active
class VoiceDescriptionScreen extends StatefulWidget {
  final ProductDraft draft;
  final Function(String transcription) onDoneRecording;
  final VoidCallback onBack;
  final Function(int)? onNavigateTab;

  const VoiceDescriptionScreen({
    super.key,
    required this.draft,
    required this.onDoneRecording,
    required this.onBack,
    this.onNavigateTab,
  });

  @override
  State<VoiceDescriptionScreen> createState() => _VoiceDescriptionScreenState();
}

class _VoiceDescriptionScreenState extends State<VoiceDescriptionScreen> {
  bool _isRecording = true;
  String _selectedLanguage = 'English';
  final String _transcriptionPrefix = '“ ...natural bamboo fruit basket with double rim... ';
  final String _transcriptionHighlight = '250 rupees wholesale';
  final String _transcriptionSuffix = ' ...”';

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
          children: [
            Row(
              children: [
                const Text(
                  'Create Product',
                  style: TextStyle(
                    fontSize: 16.5,
                    fontWeight: FontWeight.w800,
                    color: Color(0xFF221C19),
                  ),
                ),
                const SizedBox(width: 6.0),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 7.0, vertical: 2.0),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFFE8DC),
                    borderRadius: BorderRadius.circular(6.0),
                  ),
                  child: const Text(
                    'VOICE-FIRST',
                    style: TextStyle(
                      fontSize: 9.5,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFF8C3A16),
                      letterSpacing: 0.3,
                    ),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 1.0),
            const Text(
              'Step 1 of 2 • Voice Input',
              style: TextStyle(
                fontSize: 11.0,
                color: Color(0xFF7A685F),
                fontWeight: FontWeight.w500,
              ),
            ),
          ],
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 14.0),
            child: Center(
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 4.5),
                decoration: BoxDecoration(
                  color: const Color(0xFFFBF2EB),
                  borderRadius: BorderRadius.circular(16.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      _selectedLanguage,
                      style: const TextStyle(
                        fontSize: 12.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF221C19),
                      ),
                    ),
                    const SizedBox(width: 3.0),
                    const Icon(Icons.arrow_drop_down_rounded, size: 18.0, color: Color(0xFF221C19)),
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
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Card 1: Tell us about your product
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFDF6F0),
                  borderRadius: BorderRadius.circular(16.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.all(14.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Icon(Icons.record_voice_over_rounded, color: Color(0xFF8C3A16), size: 22.0),
                    const SizedBox(width: 10.0),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: const [
                          Text(
                            'Tell us about your product',
                            style: TextStyle(
                              fontSize: 15.5,
                              fontWeight: FontWeight.w800,
                              color: Color(0xFF221C19),
                            ),
                          ),
                          SizedBox(height: 3.0),
                          Text(
                            'Speak naturally in Hindi, Bengali, Tamil, English, or your local dialect. AI handles the cataloging.',
                            style: TextStyle(
                              fontSize: 11.5,
                              color: Color(0xFF7A685F),
                              height: 1.35,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 12.0),

              // Card 2: EXAMPLE PROMPT
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF1EA),
                  borderRadius: BorderRadius.circular(16.0),
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
                          children: [
                            Container(
                              padding: const EdgeInsets.all(4.0),
                              decoration: const BoxDecoration(
                                color: Color(0xFFF1DFD5),
                                shape: BoxShape.circle,
                              ),
                              child: const Icon(Icons.volume_up_rounded, size: 14.0, color: Color(0xFF8C3A16)),
                            ),
                            const SizedBox(width: 8.0),
                            const Text(
                              'EXAMPLE PROMPT',
                              style: TextStyle(
                                fontSize: 10.5,
                                fontWeight: FontWeight.w800,
                                color: Color(0xFF8C3A16),
                                letterSpacing: 0.5,
                              ),
                            ),
                          ],
                        ),
                        GestureDetector(
                          onTap: () {
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(
                                content: Text('Playing example audio prompt...'),
                                duration: Duration(seconds: 1),
                              ),
                            );
                          },
                          child: const Text(
                            'Tap to listen ▷',
                            style: TextStyle(
                              fontSize: 11.0,
                              fontWeight: FontWeight.w700,
                              color: Color(0xFF8C3A16),
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8.0),
                    const Text(
                      '“I weave natural bamboo fruit baskets with double rim borders. Diameter 12 inches, wholesale price 250 rupees per piece.”',
                      style: TextStyle(
                        fontSize: 12.0,
                        color: Color(0xFF4A372D),
                        fontStyle: FontStyle.italic,
                        height: 1.35,
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 14.0),

              // Card 3: Big White Recording Studio Card
              Container(
                decoration: BoxDecoration(
                  color: const Color(0xFFFFFDFB),
                  borderRadius: BorderRadius.circular(20.0),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 16.0),
                child: Column(
                  children: [
                    // Status Pill: 🔴 🔴 Recording Live (0:12)
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 4.5),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFBF2EB),
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFF3D5C5)),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Container(
                            width: 6.0,
                            height: 6.0,
                            decoration: const BoxDecoration(
                              color: Color(0xFFD32F2F),
                              shape: BoxShape.circle,
                            ),
                          ),
                          const SizedBox(width: 4.0),
                          Container(
                            width: 6.0,
                            height: 6.0,
                            decoration: const BoxDecoration(
                              color: Color(0xFFD32F2F),
                              shape: BoxShape.circle,
                            ),
                          ),
                          const SizedBox(width: 6.0),
                          const Text(
                            'Recording Live (0:12)',
                            style: TextStyle(
                              fontSize: 11.0,
                              fontWeight: FontWeight.w800,
                              color: Color(0xFF8C3A16),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 20.0),

                    // Concentric Glowing Microphone Button
                    GestureDetector(
                      onTap: () {
                        setState(() {
                          _isRecording = !_isRecording;
                        });
                      },
                      child: Container(
                        width: 150.0,
                        height: 150.0,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: const Color(0xFFF7ECE4).withValues(alpha: 0.6),
                        ),
                        child: Center(
                          child: Container(
                            width: 115.0,
                            height: 115.0,
                            decoration: const BoxDecoration(
                              shape: BoxShape.circle,
                              color: Color(0xFFF0DDD0),
                            ),
                            child: Center(
                              child: Container(
                                width: 80.0,
                                height: 80.0,
                                decoration: const BoxDecoration(
                                  shape: BoxShape.circle,
                                  color: Color(0xFFA84318),
                                  boxShadow: [
                                    BoxShadow(
                                      color: Color(0x33A84318),
                                      blurRadius: 16.0,
                                      offset: Offset(0, 4),
                                    ),
                                  ],
                                ),
                                child: const Icon(
                                  Icons.mic_rounded,
                                  color: Colors.white,
                                  size: 38.0,
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // 7-bar Equalizer Waveform
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        _buildWaveformBar(12.0),
                        _buildWaveformBar(20.0),
                        _buildWaveformBar(14.0),
                        _buildWaveformBar(26.0),
                        _buildWaveformBar(16.0),
                        _buildWaveformBar(22.0),
                        _buildWaveformBar(12.0),
                      ],
                    ),

                    const SizedBox(height: 16.0),

                    // Real-time Transcription Box
                    Container(
                      width: double.infinity,
                      decoration: BoxDecoration(
                        color: const Color(0xFFFBF4EE),
                        borderRadius: BorderRadius.circular(14.0),
                        border: Border.all(color: const Color(0xFFEADFD6)),
                      ),
                      padding: const EdgeInsets.all(12.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: const [
                              Icon(Icons.graphic_eq_rounded, size: 14.0, color: Color(0xFF1E824C)),
                              SizedBox(width: 5.0),
                              Text(
                                'Real-time Transcription',
                                style: TextStyle(
                                  fontSize: 10.5,
                                  fontWeight: FontWeight.w700,
                                  color: Color(0xFF4A372D),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 6.0),
                          RichText(
                            text: TextSpan(
                              style: const TextStyle(
                                fontSize: 12.0,
                                color: Color(0xFF221C19),
                                height: 1.4,
                              ),
                              children: [
                                TextSpan(text: _transcriptionPrefix),
                                WidgetSpan(
                                  alignment: PlaceholderAlignment.middle,
                                  child: Container(
                                    padding: const EdgeInsets.symmetric(horizontal: 6.0, vertical: 1.5),
                                    decoration: BoxDecoration(
                                      color: const Color(0xFFFFE2D4),
                                      borderRadius: BorderRadius.circular(4.0),
                                    ),
                                    child: Text(
                                      _transcriptionHighlight,
                                      style: const TextStyle(
                                        fontSize: 11.5,
                                        fontWeight: FontWeight.w800,
                                        color: Color(0xFF8C3A16),
                                      ),
                                    ),
                                  ),
                                ),
                                TextSpan(text: _transcriptionSuffix),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // Done Recording Button
                    SizedBox(
                      width: double.infinity,
                      height: 50.0,
                      child: ElevatedButton(
                        onPressed: () => widget.onDoneRecording(
                          '$_transcriptionPrefix $_transcriptionHighlight $_transcriptionSuffix',
                        ),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF8C3A16),
                          foregroundColor: Colors.white,
                          elevation: 1,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(14.0),
                          ),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: const [
                            Icon(Icons.check_circle_outline_rounded, size: 18.0),
                            SizedBox(width: 6.0),
                            Text(
                              'Done Recording',
                              style: TextStyle(
                                fontSize: 14.5,
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              const SizedBox(height: 12.0),

              // Footer: 💡 Zero typing needed • Speak in your natural rhythm
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(Icons.lightbulb_outline_rounded, size: 15.0, color: Color(0xFF8C3A16)),
                  SizedBox(width: 5.0),
                  Text(
                    'Zero typing needed • Speak in your natural rhythm',
                    style: TextStyle(
                      fontSize: 11.0,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF7A685F),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 16.0),
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

  Widget _buildWaveformBar(double height) {
    return Container(
      width: 4.0,
      height: height,
      margin: const EdgeInsets.symmetric(horizontal: 2.5),
      decoration: BoxDecoration(
        color: const Color(0xFF8C3A16),
        borderRadius: BorderRadius.circular(2.0),
      ),
    );
  }
}

