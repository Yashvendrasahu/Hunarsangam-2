// lib/screens/buyer_voice_requirement_screen.dart

import 'package:flutter/material.dart';

/// Screen: Voice-First Requirement Description (r2- bulk — Voice-First Requirement Description.png)
/// Step 1 of 3: Requirement Description
class BuyerVoiceRequirementScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onContinue;
  final VoidCallback? onOpenRequirements;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onOpenHome;

  const BuyerVoiceRequirementScreen({
    super.key,
    this.onBack,
    this.onContinue,
    this.onOpenRequirements,
    this.onOpenDiscover,
    this.onOpenHome,
  });

  @override
  State<BuyerVoiceRequirementScreen> createState() => _BuyerVoiceRequirementScreenState();
}

class _BuyerVoiceRequirementScreenState extends State<BuyerVoiceRequirementScreen> {
  bool _isListening = true;
  bool _isEditing = false;
  late TextEditingController _transcriptController;

  static const Color _primaryRust = Color(0xFF9C3C18);
  static const Color _bgCanvas = Color(0xFFFCF9F6);
  static const Color _borderSubtle = Color(0xFFEFE2D8);
  static const Color _textDark = Color(0xFF1F1612);
  static const Color _textMuted = Color(0xFF7A6A60);

  @override
  void initState() {
    super.initState();
    _transcriptController = TextEditingController(
      text:
          'Need 500 handwoven natural bamboo fruit baskets with reinforced dual-rim finish. Size approximately 10-inch diameter. Packaging required in individual biodegradable brown paper boxes with custom brand tags.',
    );
  }

  @override
  void dispose() {
    _transcriptController.dispose();
    super.dispose();
  }

  void _showNotification(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
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
            _buildAppBar(),
            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildRoleBadge(),
                    const SizedBox(height: 10),
                    const Text(
                      'Tell us what you need',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w900,
                        color: _textDark,
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 4),
                    const Text(
                      'Speak naturally in Hindi, English, or regional languages. Our platform transcribes, extracts, and matches your craft specifications.',
                      style: TextStyle(
                        fontSize: 12,
                        color: Color(0xFF6E5A4E),
                        height: 1.4,
                      ),
                    ),
                    const SizedBox(height: 14),
                    _buildVoiceRecordingCard(),
                    const SizedBox(height: 12),
                    _buildVoicePromptIdeaCard(),
                    const SizedBox(height: 14),
                    _buildTranscribedCard(),
                    const SizedBox(height: 16),
                    _buildAutoExtractedSpecsSection(),
                    const SizedBox(height: 14),
                    _buildTargetDispatchCard(),
                    const SizedBox(height: 18),
                    _buildContinueButton(),
                    const SizedBox(height: 20),
                  ],
                ),
              ),
            ),
            _buildBottomNavBar(),
          ],
        ),
      ),
    );
  }

  Widget _buildAppBar() {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
      child: Row(
        children: [
          IconButton(
            icon: const Icon(Icons.arrow_back, color: _textDark),
            onPressed: widget.onBack,
          ),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'Post Bulk Requirement',
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w900,
                    color: _primaryRust,
                  ),
                ),
                Text(
                  'Step 1 of 3: Requirement Description',
                  style: TextStyle(
                    fontSize: 11,
                    color: _textMuted,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFFD1FAE5),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: const Color(0xFFA7F3D0)),
            ),
            child: Row(
              children: const [
                Icon(Icons.record_voice_over, size: 14, color: Color(0xFF065F46)),
                SizedBox(width: 4),
                Text(
                  'AI Voice',
                  style: TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF065F46),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(width: 8),
          InkWell(
            onTap: () => _showNotification('Language switched: Hindi / Hinglish'),
            child: Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(
                color: const Color(0xFFF5ECE5),
                borderRadius: BorderRadius.circular(10),
              ),
              child: const Icon(Icons.translate, size: 18, color: _primaryRust),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRoleBadge() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: const Color(0xFFFBF1EA),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFF2D7C6)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: const [
          Icon(Icons.circle, size: 6, color: _primaryRust),
          SizedBox(width: 6),
          Text(
            'Role: Bulk Buyer Enterprise Portal',
            style: TextStyle(
              fontSize: 11,
              fontWeight: FontWeight.bold,
              color: _primaryRust,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildVoiceRecordingCard() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFAF4EF),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: const Color(0xFFEBDCCF)),
      ),
      padding: const EdgeInsets.all(18),
      child: Column(
        children: [
          GestureDetector(
            onTap: () {
              setState(() => _isListening = !_isListening);
              _showNotification(_isListening ? 'Listening started' : 'Listening paused');
            },
            child: Container(
              width: 76,
              height: 76,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: _primaryRust,
                border: Border.all(
                  color: const Color(0xFFF5D8C7),
                  width: 6,
                ),
                boxShadow: [
                  BoxShadow(
                    color: _primaryRust.withOpacity(0.2),
                    blurRadius: 16,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: const Icon(Icons.mic, color: Colors.white, size: 36),
            ),
          ),
          const SizedBox(height: 12),
          const Text(
            'Tap to Speak / बोलकर बताएं',
            style: TextStyle(
              fontSize: 14,
              fontWeight: FontWeight.w900,
              color: _primaryRust,
            ),
          ),
          const SizedBox(height: 2),
          const Text(
            'Listening: 00:14 • Hindi / Hinglish / English',
            style: TextStyle(fontSize: 11, color: Color(0xFF7A695E), fontWeight: FontWeight.w500),
          ),
          const SizedBox(height: 12),
          // Waveform bars
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            decoration: BoxDecoration(
              color: const Color(0xFFF3E8DF),
              borderRadius: BorderRadius.circular(14),
              border: Border.all(color: const Color(0xFFE5D5C8)),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [10, 24, 14, 32, 20, 36, 16, 28, 12, 30, 18, 8]
                  .map(
                    (h) => Container(
                      width: 4,
                      height: _isListening ? h.toDouble() : 6.0,
                      margin: const EdgeInsets.symmetric(horizontal: 2),
                      decoration: BoxDecoration(
                        color: _primaryRust,
                        borderRadius: BorderRadius.circular(4),
                      ),
                    ),
                  )
                  .toList(),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildVoicePromptIdeaCard() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFF8F2),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFF5DFD0)),
      ),
      padding: const EdgeInsets.all(12),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(6),
            decoration: BoxDecoration(
              color: const Color(0xFFFEE9D9),
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Icon(Icons.lightbulb_outline, size: 16, color: Color(0xFFB45309)),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text(
                      'Voice Prompt Idea',
                      style: TextStyle(
                        fontSize: 11,
                        fontWeight: FontWeight.bold,
                        color: _primaryRust,
                      ),
                    ),
                    InkWell(
                      onTap: () => _showNotification('Prompt refreshed'),
                      child: Row(
                        children: const [
                          Icon(Icons.sync, size: 12, color: _primaryRust),
                          SizedBox(width: 2),
                          Text(
                            'Try another',
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.bold,
                              color: _primaryRust,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 4),
                const Text(
                  'tell here actual product need , quantity , timeline deadline , deminsion or any specification',
                  style: TextStyle(
                    fontSize: 11,
                    color: Color(0xFF524137),
                    fontStyle: FontStyle.italic,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTranscribedCard() {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: _borderSubtle),
      ),
      padding: const EdgeInsets.all(14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: const [
                  Icon(Icons.check_circle, color: Color(0xFF15803D), size: 16),
                  SizedBox(width: 6),
                  Text(
                    'Transcribed Requirement',
                    style: TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.w900,
                      color: _textDark,
                    ),
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                decoration: BoxDecoration(
                  color: const Color(0xFFD1FAE5),
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: const Color(0xFFA7F3D0)),
                ),
                child: const Text(
                  'AI Processed',
                  style: TextStyle(
                    fontSize: 10,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF065F46),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: const Color(0xFFFAF5F0),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0xFFECDCCF)),
            ),
            child: _isEditing
                ? TextField(
                    controller: _transcriptController,
                    maxLines: 4,
                    style: const TextStyle(fontSize: 12, color: _textDark),
                    decoration: const InputDecoration.collapsed(hintText: 'Edit requirements...'),
                  )
                : Text(
                    '"${_transcriptController.text}"',
                    style: const TextStyle(
                      fontSize: 12,
                      color: Color(0xFF2E1E17),
                      height: 1.4,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
          ),
          const SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  OutlinedButton.icon(
                    onPressed: () {
                      setState(() => _isEditing = !_isEditing);
                      _showNotification(_isEditing ? 'Editing text' : 'Saved edited text');
                    },
                    icon: Icon(_isEditing ? Icons.check : Icons.edit_outlined, size: 14),
                    label: Text(_isEditing ? 'Save Text' : 'Edit Text', style: const TextStyle(fontSize: 11)),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: const Color(0xFF4A382D),
                      side: const BorderSide(color: Color(0xFFE3D4C8)),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                    ),
                  ),
                  const SizedBox(width: 8),
                  OutlinedButton.icon(
                    onPressed: () => _showNotification('🎤 Recording restarted'),
                    icon: const Icon(Icons.mic_none, size: 14),
                    label: const Text('Speak Again', style: const TextStyle(fontSize: 11)),
                    style: OutlinedButton.styleFrom(
                      foregroundColor: const Color(0xFF4A382D),
                      side: const BorderSide(color: Color(0xFFE3D4C8)),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                    ),
                  ),
                ],
              ),
              IconButton(
                onPressed: () {
                  setState(() => _transcriptController.clear());
                  _showNotification('Transcription cleared');
                },
                icon: const Icon(Icons.delete_outline, color: Color(0xFFDC2626), size: 18),
                style: IconButton.styleFrom(
                  backgroundColor: const Color(0xFFFEF2F2),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                    side: const BorderSide(color: Color(0xFFFECACA)),
                  ),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildAutoExtractedSpecsSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: const [
            Text(
              'Auto-Extracted Specifications',
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w900,
                color: _textDark,
              ),
            ),
            Text(
              '4 tags confirmed',
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: _textMuted,
              ),
            ),
          ],
        ),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(child: _buildSpecCard(Icons.inventory_2_outlined, 'PRODUCT', 'Bamboo Fruit Basket')),
            const SizedBox(width: 8),
            Expanded(child: _buildSpecCard(Icons.layers_outlined, 'QUANTITY', '500 pcs')),
          ],
        ),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(child: _buildSpecCard(Icons.brush_outlined, 'FINISH', 'Double-Rim Natural')),
            const SizedBox(width: 8),
            Expanded(child: _buildSpecCard(Icons.eco_outlined, 'PACKAGING', 'Eco Gift Box')),
          ],
        ),
      ],
    );
  }

  Widget _buildSpecCard(IconData icon, String label, String value) {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: const Color(0xFFFAF4EF),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFFEADBCE)),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(6),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: const Color(0xFFE0D0C2)),
            ),
            child: Icon(icon, size: 14, color: _primaryRust),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: const TextStyle(
                    fontSize: 9,
                    fontWeight: FontWeight.w900,
                    color: Color(0xFF8C7A70),
                    letterSpacing: 0.5,
                  ),
                ),
                Text(
                  value,
                  style: const TextStyle(
                    fontSize: 11,
                    fontWeight: FontWeight.bold,
                    color: _textDark,
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTargetDispatchCard() {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFFFFF6EF),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFF4DEC8)),
      ),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: const Color(0xFFFEEADB),
              borderRadius: BorderRadius.circular(10),
            ),
            child: const Icon(Icons.handshake_outlined, size: 18, color: _primaryRust),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text(
                  'Target Dispatch Within',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.w900,
                    color: _textDark,
                  ),
                ),
                Text(
                  'Recommended: 18–24 Days for Crafting',
                  style: TextStyle(fontSize: 11, color: _textMuted),
                ),
              ],
            ),
          ),
          InkWell(
            onTap: () => _showNotification('Dispatch timeline editor'),
            child: const Text(
              'Adjust',
              style: TextStyle(
                fontSize: 11,
                fontWeight: FontWeight.bold,
                color: _primaryRust,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildContinueButton() {
    return SizedBox(
      width: double.infinity,
      child: ElevatedButton(
        onPressed: widget.onContinue,
        style: ElevatedButton.styleFrom(
          backgroundColor: _primaryRust,
          foregroundColor: Colors.white,
          padding: const EdgeInsets.symmetric(vertical: 14),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
          elevation: 0,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Text(
              'Continue',
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900),
            ),
            SizedBox(width: 6),
            Icon(Icons.arrow_forward, size: 16),
          ],
        ),
      ),
    );
  }

  Widget _buildBottomNavBar() {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: _borderSubtle)),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          _buildNavItem(Icons.home_outlined, 'Home', onTap: widget.onOpenHome),
          _buildNavItem(Icons.explore_outlined, 'Discover', onTap: widget.onOpenDiscover),
          _buildNavItem(Icons.assignment, 'Requirement', isActive: true, onTap: widget.onOpenRequirements),
          _buildNavItem(Icons.local_shipping_outlined, 'Orders'),
          _buildNavItem(Icons.person_outline, 'Profile'),
        ],
      ),
    );
  }

  Widget _buildNavItem(IconData icon, String label, {bool isActive = false, VoidCallback? onTap}) {
    final color = isActive ? _primaryRust : _textMuted;
    return InkWell(
      onTap: onTap,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 20, color: color),
          const SizedBox(height: 2),
          Text(
            label,
            style: TextStyle(
              fontSize: 10,
              fontWeight: isActive ? FontWeight.w900 : FontWeight.w500,
              color: color,
            ),
          ),
        ],
      ),
    );
  }
}
