// lib/screens/buyer_voice_requirement_screen.dart

import 'package:flutter/material.dart';
import '../widgets/buyer_bottom_nav_bar.dart';
import '../services/hardware_service.dart';

class BuyerVoiceRequirementScreen extends StatefulWidget {
  final VoidCallback onBack;
  final VoidCallback onContinue;
  final VoidCallback onOpenRequirements;
  final VoidCallback onOpenDiscover;
  final VoidCallback onOpenHome;

  const BuyerVoiceRequirementScreen({
    super.key,
    required this.onBack,
    required this.onContinue,
    required this.onOpenRequirements,
    required this.onOpenDiscover,
    required this.onOpenHome,
  });

  @override
  State<BuyerVoiceRequirementScreen> createState() => _BuyerVoiceRequirementScreenState();
}

class _BuyerVoiceRequirementScreenState extends State<BuyerVoiceRequirementScreen> {
  bool _isListening = false;
  String _transcribedText = '';

  Future<void> _toggleVoiceRecording() async {
    if (_isListening) {
      await HardwareService().stopListening();
      if (mounted) setState(() => _isListening = false);
      return;
    }

    setState(() {
      _isListening = true;
      _transcribedText = '';
    });

    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('🎙️ Recording voice requirement... Speak clearly into the microphone'),
        backgroundColor: Color(0xFFA84318),
        duration: Duration(seconds: 3),
      ),
    );

    await HardwareService().startListening(
      onResult: (text, isFinal) {
        if (text.isNotEmpty && mounted) {
          setState(() => _transcribedText = text);
          if (isFinal) {
            setState(() => _isListening = false);
          }
        }
      },
      onStopped: () {
        if (mounted) setState(() => _isListening = false);
      },
      onError: (err) {
        if (mounted) setState(() => _isListening = false);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
          onPressed: widget.onBack,
        ),
        title: const Text('Voice Post Requirement (Step 1/4)', style: TextStyle(color: Color(0xFF2D2421), fontSize: 15, fontWeight: FontWeight.w800)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            const Spacer(),
            GestureDetector(
              onTap: _toggleVoiceRecording,
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 250),
                width: 100,
                height: 100,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: _isListening ? Colors.red : const Color(0xFFA84318),
                  boxShadow: [
                    BoxShadow(
                      color: (_isListening ? Colors.red : const Color(0xFFA84318)).withOpacity(0.35),
                      blurRadius: _isListening ? 30 : 20,
                      spreadRadius: _isListening ? 10 : 5,
                    ),
                  ],
                ),
                child: Icon(_isListening ? Icons.stop : Icons.mic, color: Colors.white, size: 48),
              ),
            ),
            const SizedBox(height: 24),
            Text(
              _isListening ? 'Listening & Transcribing...' : 'Tap Mic & Speak Sourcing Needs',
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Color(0xFF2D2421)),
            ),
            const SizedBox(height: 8),
            if (_transcribedText.isNotEmpty)
              Container(
                margin: const EdgeInsets.symmetric(vertical: 12),
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: const Color(0xFFEADFD6)),
                ),
                child: Text(
                  '“$_transcribedText”',
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF2D2421)),
                ),
              )
            else
              const Text(
                'e.g. "We need 200 units of handmade terracotta bowls delivered to Mumbai by next month, budget ₹250 per piece"',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 13, color: Color(0xFF7A685F), height: 1.4),
              ),
            const Spacer(),
            SizedBox(
              width: double.infinity,
              height: 52,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFA84318),
                  foregroundColor: Colors.white,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
                onPressed: widget.onContinue,
                child: const Text('Process Voice Requirement', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BuyerBottomNavBar(
        currentIndex: 2,
        onTap: (idx) {
          if (idx == 0) widget.onOpenHome();
          if (idx == 1) widget.onOpenDiscover();
          if (idx == 2) widget.onOpenRequirements();
        },
      ),
    );
  }
}
