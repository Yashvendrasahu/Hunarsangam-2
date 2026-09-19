// lib/add_product/screens/dimension_review_screen.dart

import 'package:flutter/material.dart';
import '../models/product_draft.dart';
import '../widgets/add_product_app_bar.dart';
import '../widgets/artisan_bottom_navigation.dart';
import '../../services/hardware_service.dart';

/// Screen 4: Matches 'p4— photo and dimension review.png' 100% faithfully:
/// - Header: Back arrow, "STEP 2 OF 2 • DIMENSION TOOL", "₹10 Coin Size Detector", and "मदद" voice help button (Real audio TTS)
/// - Dual Photo Grid:
///     • Left: Top-down photo with ₹10 coin and AR white corner brackets [ ⌜ ⌝ ⌞ ⌟ ]
///     • Right: Studio beauty shot of the craft with rustic dried flowers & pebbles
/// - Retake Photo: Full width pill button with reload icon
/// - Zero-Typing Voice Correction: Round rust mic (Real mic recording), "Say: 'ऊंचाई 6 इंच करो' or tap values to fine-tune.", and ear icon
/// - Computer Vision Output Card:
///     • "COMPUTER VISION OUTPUT" in green, "Detected Dimensions", "✔ Auto-Calculated" badge
///     • 3 Metric Boxes:
///         1. Diameter (12.4 in / 31.5 cm) with ↔ arrow
///         2. Height (6.2 in / 15.7 cm) with ↕ arrow
///         3. Est. Weight (~420 g / Light Cane in green) with balance scale icon
///     • Recommended Packaging Box with "B2B Ready" badge: "14 × 14 × 8 in Corrugated Carton."
/// - "Accept Dimensions & Proceed →" CTA Button
/// - Standard 5-tab Artisan Bottom Navigation with Products active
class DimensionReviewScreen extends StatefulWidget {
  final ProductDraft draft;
  final VoidCallback onAccept;
  final VoidCallback onRetake;
  final VoidCallback onBack;
  final Function(int)? onNavigateTab;

  const DimensionReviewScreen({
    super.key,
    required this.draft,
    required this.onAccept,
    required this.onRetake,
    required this.onBack,
    this.onNavigateTab,
  });

  @override
  State<DimensionReviewScreen> createState() => _DimensionReviewScreenState();
}

class _DimensionReviewScreenState extends State<DimensionReviewScreen> {
  bool _isPlayingHelp = false;
  bool _isListeningVoiceCorrection = false;

  void _playVoiceHelp() {
    if (_isPlayingHelp) {
      HardwareService().stopAudio();
      setState(() => _isPlayingHelp = false);
    } else {
      setState(() => _isPlayingHelp = true);
      HardwareService().speakText(
        '₹10 सिक्का और कंप्यूटर विजन से माप निकाली गई है। व्यास 12.4 इंच और ऊंचाई 6.2 इंच है। बदलाव के लिए माइक दबाकर बोलें।',
        language: 'hi-IN',
        onDone: () {
          if (mounted) setState(() => _isPlayingHelp = false);
        },
      );
    }
  }

  void _startVoiceCorrection() async {
    if (_isListeningVoiceCorrection) {
      await HardwareService().stopListening();
      setState(() => _isListeningVoiceCorrection = false);
    } else {
      setState(() => _isListeningVoiceCorrection = true);
      final started = await HardwareService().startListening(
        language: 'hi-IN',
        onResult: (text, isFinal) {
          if (mounted && text.isNotEmpty) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text('सुना: "$text"'),
                backgroundColor: const Color(0xFF8C3A16),
                duration: const Duration(seconds: 2),
              ),
            );
          }
        },
        onStopped: () {
          if (mounted) setState(() => _isListeningVoiceCorrection = false);
        },
      );
      if (!started && mounted) {
        setState(() => _isListeningVoiceCorrection = false);
      }
    }
  }

  @override
  void dispose() {
    HardwareService().stopAudio();
    HardwareService().stopListening();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      appBar: AddProductAppBar(
        title: '₹10 Coin Size Detector',
        stepSubtitle: 'STEP 2 OF 2 • DIMENSION TOOL',
        onBack: widget.onBack,
        trailing: GestureDetector(
          onTap: _playVoiceHelp,
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
                Icon(
                  _isPlayingHelp ? Icons.pause_circle_filled : Icons.volume_up_rounded,
                  size: 15.0,
                  color: const Color(0xFF8C3A16),
                ),
                const SizedBox(width: 4.0),
                Text(
                  _isPlayingHelp ? 'रोकें' : 'मदद',
                  style: const TextStyle(
                    fontSize: 12.0,
                    fontWeight: FontWeight.w700,
                    color: Color(0xFF8C3A16),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
      body: SafeArea(
        child: SingleChildScrollView(
          physics: const BouncingScrollPhysics(),
          padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Dual Photo Grid (Left: ₹10 Coin with AR Corner Brackets, Right: Studio Beauty Shot)
              Row(
                children: [
                  // Left Photo (Coin calibration + AR corner brackets)
                  Expanded(
                    child: Container(
                      height: 175.0,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFEADFD6)),
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: Stack(
                        children: [
                          Positioned.fill(
                            child: Image.network(
                              widget.draft.photoUrl,
                              fit: BoxFit.cover,
                              errorBuilder: (ctx, err, stack) => Container(
                                color: const Color(0xFFE5D5CB),
                                child: const Center(
                                  child: Icon(Icons.shopping_basket_outlined, size: 40.0, color: Color(0xFF8C3A16)),
                                ),
                              ),
                            ),
                          ),
                          // AR White Corner Brackets Overlay
                          Positioned.fill(
                            child: CustomPaint(
                              painter: _ArCornerBracketsPainter(),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(width: 12.0),
                  // Right Photo (Studio Beauty Shot)
                  Expanded(
                    child: Container(
                      height: 175.0,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFEADFD6)),
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: Image.network(
                        widget.draft.secondaryPhotoUrl,
                        fit: BoxFit.cover,
                        errorBuilder: (ctx, err, stack) => Container(
                          color: const Color(0xFFE5D5CB),
                          child: const Center(
                            child: Icon(Icons.photo_library_outlined, size: 40.0, color: Color(0xFF8C3A16)),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),

              const SizedBox(height: 12.0),

              // Retake Photo Button
              SizedBox(
                width: double.infinity,
                height: 42.0,
                child: OutlinedButton.icon(
                  onPressed: widget.onRetake,
                  icon: const Icon(Icons.refresh_rounded, size: 17.0, color: Color(0xFF221C19)),
                  label: const Text(
                    'Retake Photo',
                    style: TextStyle(
                      fontSize: 13.0,
                      fontWeight: FontWeight.w700,
                      color: Color(0xFF221C19),
                    ),
                  ),
                  style: OutlinedButton.styleFrom(
                    backgroundColor: const Color(0xFFFBF2EB),
                    side: const BorderSide(color: Color(0xFFEADFD6)),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12.0),
                    ),
                  ),
                ),
              ),

              const SizedBox(height: 12.0),

              // Zero-Typing Voice Correction Card
              GestureDetector(
                onTap: _startVoiceCorrection,
                child: Container(
                  decoration: BoxDecoration(
                    color: _isListeningVoiceCorrection ? const Color(0xFFFFEADA) : const Color(0xFFFDF6F0),
                    borderRadius: BorderRadius.circular(16.0),
                    border: Border.all(
                      color: _isListeningVoiceCorrection ? const Color(0xFFA84318) : const Color(0xFFEADFD6),
                      width: _isListeningVoiceCorrection ? 1.5 : 1.0,
                    ),
                  ),
                  padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 12.0),
                  child: Row(
                    children: [
                      Container(
                        width: 44.0,
                        height: 44.0,
                        decoration: BoxDecoration(
                          color: _isListeningVoiceCorrection ? Colors.red : const Color(0xFF8C3A16),
                          shape: BoxShape.circle,
                        ),
                        child: Icon(
                          _isListeningVoiceCorrection ? Icons.mic_rounded : Icons.mic_rounded,
                          color: Colors.white,
                          size: 22.0,
                        ),
                      ),
                      const SizedBox(width: 12.0),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              _isListeningVoiceCorrection ? '🔴 Listening to microphone...' : 'Zero-Typing Voice Correction',
                              style: const TextStyle(
                                fontSize: 13.5,
                                fontWeight: FontWeight.w800,
                                color: Color(0xFF221C19),
                              ),
                            ),
                            const SizedBox(height: 2.0),
                            RichText(
                              text: const TextSpan(
                                style: TextStyle(
                                  fontSize: 11.5,
                                  color: Color(0xFF7A685F),
                                  height: 1.3,
                                ),
                                children: [
                                  TextSpan(text: 'Say: '),
                                  TextSpan(
                                    text: '"ऊंचाई 6 इंच करो"',
                                    style: TextStyle(
                                      fontWeight: FontWeight.w800,
                                      color: Color(0xFF8C3A16),
                                    ),
                                  ),
                                  TextSpan(text: ' or tap values to fine-tune.'),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(width: 4.0),
                      const Icon(Icons.hearing_rounded, color: Color(0xFF8C3A16), size: 22.0),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 12.0),

              // Computer Vision Output Card
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
                    // Header Row
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: const [
                            Text(
                              'COMPUTER VISION OUTPUT',
                              style: TextStyle(
                                fontSize: 10.0,
                                fontWeight: FontWeight.w800,
                                color: Color(0xFF1E824C),
                                letterSpacing: 0.5,
                              ),
                            ),
                            SizedBox(height: 2.0),
                            Text(
                              'Detected Dimensions',
                              style: TextStyle(
                                fontSize: 17.0,
                                fontWeight: FontWeight.w800,
                                color: Color(0xFF221C19),
                                letterSpacing: -0.3,
                              ),
                            ),
                          ],
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 3.5),
                          decoration: BoxDecoration(
                            color: const Color(0xFFD4EFDF),
                            borderRadius: BorderRadius.circular(12.0),
                          ),
                          child: const Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Icon(Icons.check_circle_rounded, size: 12.0, color: Color(0xFF1E824C)),
                              SizedBox(width: 3.5),
                              Text(
                                'Auto-Calculated',
                                style: TextStyle(
                                  fontSize: 10.5,
                                  fontWeight: FontWeight.w700,
                                  color: Color(0xFF1E824C),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 12.0),

                    // 3 Metric Boxes: Diameter, Height, Est. Weight
                    Row(
                      children: [
                        // Box 1: Diameter
                        Expanded(
                          child: _buildMetricBox(
                            icon: Icons.swap_horiz_rounded,
                            label: 'DIAMETER',
                            value: '${widget.draft.diameterIn} in',
                            subValue: '${(widget.draft.diameterIn * 2.54).toStringAsFixed(1)} cm',
                          ),
                        ),
                        const SizedBox(width: 8.0),
                        // Box 2: Height
                        Expanded(
                          child: _buildMetricBox(
                            icon: Icons.swap_vert_rounded,
                            label: 'HEIGHT',
                            value: '${widget.draft.heightIn} in',
                            subValue: '${(widget.draft.heightIn * 2.54).toStringAsFixed(1)} cm',
                          ),
                        ),
                        const SizedBox(width: 8.0),
                        // Box 3: Est. Weight
                        Expanded(
                          child: _buildMetricBox(
                            icon: Icons.scale_outlined,
                            label: 'EST. WEIGHT',
                            value: '~${widget.draft.estWeightGrams} g',
                            subValue: 'Light Cane',
                            subValueColor: const Color(0xFF1E824C),
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 12.0),

                    // Recommended Packaging Box
                    Container(
                      width: double.infinity,
                      decoration: BoxDecoration(
                        color: const Color(0xFFFBF4EE),
                        borderRadius: BorderRadius.circular(12.0),
                        border: Border.all(color: const Color(0xFFEADFD6)),
                      ),
                      padding: const EdgeInsets.all(10.0),
                      child: Row(
                        children: [
                          const Icon(Icons.inventory_2_outlined, color: Color(0xFF8C3A16), size: 18.0),
                          const SizedBox(width: 8.0),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  children: [
                                    const Text(
                                      'RECOMMENDED PACKAGING BOX',
                                      style: TextStyle(
                                        fontSize: 9.5,
                                        fontWeight: FontWeight.w800,
                                        color: Color(0xFF8C3A16),
                                        letterSpacing: 0.4,
                                      ),
                                    ),
                                    const SizedBox(width: 6.0),
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 5.0, vertical: 1.0),
                                      decoration: BoxDecoration(
                                        color: const Color(0xFFE0EFE5),
                                        borderRadius: BorderRadius.circular(4.0),
                                      ),
                                      child: const Text(
                                        'B2B Ready',
                                        style: TextStyle(
                                          fontSize: 8.5,
                                          fontWeight: FontWeight.w800,
                                          color: Color(0xFF1B7339),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 2.0),
                                Text(
                                  widget.draft.packagingBox,
                                  style: const TextStyle(
                                    fontSize: 11.5,
                                    fontWeight: FontWeight.w700,
                                    color: Color(0xFF221C19),
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

              const SizedBox(height: 14.0),

              // Accept Dimensions & Proceed CTA
              SizedBox(
                width: double.infinity,
                height: 52.0,
                child: ElevatedButton(
                  onPressed: widget.onAccept,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFA84318),
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
                        'Accept Dimensions & Proceed',
                        style: TextStyle(
                          fontSize: 15.0,
                          fontWeight: FontWeight.w800,
                          letterSpacing: 0.2,
                        ),
                      ),
                      SizedBox(width: 8.0),
                      Icon(Icons.arrow_forward_rounded, size: 20.0),
                    ],
                  ),
                ),
              ),

              const SizedBox(height: 20.0),
            ],
          ),
        ),
      ),
      bottomNavigationBar: ArtisanBottomNavigation(
        currentIndex: 1, // Products tab active
        onTap: (index) {
          if (widget.onNavigateTab != null) {
            widget.onNavigateTab!(index);
          }
        },
      ),
    );
  }

  Widget _buildMetricBox({
    required IconData icon,
    required String label,
    required String value,
    required String subValue,
    Color? subValueColor,
  }) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 10.0),
      decoration: BoxDecoration(
        color: const Color(0xFFFDF8F5),
        borderRadius: BorderRadius.circular(12.0),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(icon, size: 14.0, color: const Color(0xFF8C3A16)),
              const SizedBox(width: 4.0),
              Flexible(
                child: Text(
                  label,
                  style: const TextStyle(
                    fontSize: 9.0,
                    fontWeight: FontWeight.w800,
                    color: Color(0xFF7A685F),
                    letterSpacing: 0.3,
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ],
          ),
          const SizedBox(height: 6.0),
          Text(
            value,
            style: const TextStyle(
              fontSize: 15.0,
              fontWeight: FontWeight.w900,
              color: Color(0xFF221C19),
              letterSpacing: -0.3,
            ),
          ),
          const SizedBox(height: 2.0),
          Text(
            subValue,
            style: TextStyle(
              fontSize: 10.5,
              fontWeight: FontWeight.w600,
              color: subValueColor ?? const Color(0xFF7A685F),
            ),
          ),
        ],
      ),
    );
  }
}

class _ArCornerBracketsPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = Colors.white.withValues(alpha: 0.9)
      ..strokeWidth = 2.5
      ..style = PaintingStyle.stroke;

    const cornerLength = 16.0;
    const padding = 12.0;

    // Top-left
    canvas.drawLine(const Offset(padding, padding), const Offset(padding + cornerLength, padding), paint);
    canvas.drawLine(const Offset(padding, padding), const Offset(padding, padding + cornerLength), paint);

    // Top-right
    canvas.drawLine(Offset(size.width - padding, padding), Offset(size.width - padding - cornerLength, padding), paint);
    canvas.drawLine(Offset(size.width - padding, padding), Offset(size.width - padding, padding + cornerLength), paint);

    // Bottom-left
    canvas.drawLine(Offset(padding, size.height - padding), Offset(padding + cornerLength, size.height - padding), paint);
    canvas.drawLine(Offset(padding, size.height - padding), Offset(padding, size.height - padding - cornerLength), paint);

    // Bottom-right
    canvas.drawLine(Offset(size.width - padding, size.height - padding), Offset(size.width - padding - cornerLength, size.height - padding), paint);
    canvas.drawLine(Offset(size.width - padding, size.height - padding), Offset(size.width - padding, size.height - padding - cornerLength), paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
