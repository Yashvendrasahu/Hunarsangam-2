// lib/screens/buyer_reference_image_screen.dart

import 'package:flutter/material.dart';
import '../widgets/buyer_bottom_nav_bar.dart';
import '../services/hardware_service.dart';

class BuyerReferenceImageScreen extends StatefulWidget {
  final VoidCallback onBack;
  final VoidCallback onContinue;
  final VoidCallback onSkip;
  final VoidCallback onOpenRequirements;
  final VoidCallback onOpenDiscover;
  final VoidCallback onOpenHome;

  const BuyerReferenceImageScreen({
    super.key,
    required this.onBack,
    required this.onContinue,
    required this.onSkip,
    required this.onOpenRequirements,
    required this.onOpenDiscover,
    required this.onOpenHome,
  });

  @override
  State<BuyerReferenceImageScreen> createState() => _BuyerReferenceImageScreenState();
}

class _BuyerReferenceImageScreenState extends State<BuyerReferenceImageScreen> {
  String? _selectedFileName;

  Future<void> _handleCamera() async {
    final photo = await HardwareService().captureImageFromCamera();
    if (photo != null && mounted) {
      setState(() => _selectedFileName = photo.name);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('📸 Reference photo captured: ${photo.name}!'),
          backgroundColor: const Color(0xFF2E7D32),
        ),
      );
    }
  }

  Future<void> _handleGallery() async {
    final file = await HardwareService().pickImageFromGallery();
    if (file != null && mounted) {
      setState(() => _selectedFileName = file.name);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('🖼️ Spec sheet selected: ${file.name}!'),
          backgroundColor: const Color(0xFF2E7D32),
        ),
      );
    }
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
        title: const Text('Add Reference Image (Step 3/4)', style: TextStyle(color: Color(0xFF2D2421), fontSize: 15, fontWeight: FontWeight.w800)),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.all(20),
              width: double.infinity,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFA84318), style: BorderStyle.solid),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.add_photo_alternate_outlined, color: Color(0xFFA84318), size: 44),
                  const SizedBox(height: 10),
                  const Text('Upload Reference Moodboard or Spec Sheet', textAlign: TextAlign.center, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: Color(0xFF2D2421))),
                  const SizedBox(height: 4),
                  const Text('PNG, JPG, Camera photo up to 10MB', style: TextStyle(fontSize: 11, color: Color(0xFF7A685F))),
                  if (_selectedFileName != null) ...[
                    const SizedBox(height: 12),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                      decoration: BoxDecoration(
                        color: const Color(0xFFE8F5E9),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          const Icon(Icons.check_circle, size: 16, color: Color(0xFF2E7D32)),
                          const SizedBox(width: 6),
                          Text(_selectedFileName!, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF2E7D32))),
                        ],
                      ),
                    ),
                  ],
                  const SizedBox(height: 16),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      ElevatedButton.icon(
                        icon: const Icon(Icons.photo_camera, size: 16),
                        label: const Text('Camera', style: TextStyle(fontSize: 12)),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFFA84318),
                          foregroundColor: Colors.white,
                        ),
                        onPressed: _handleCamera,
                      ),
                      const SizedBox(width: 12),
                      OutlinedButton.icon(
                        icon: const Icon(Icons.photo_library, size: 16),
                        label: const Text('Gallery', style: TextStyle(fontSize: 12)),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: const Color(0xFFA84318),
                          side: const BorderSide(color: Color(0xFFA84318)),
                        ),
                        onPressed: _handleGallery,
                      ),
                    ],
                  ),
                ],
              ),
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
                child: const Text('Proceed to Cluster Matching', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
              ),
            ),
            const SizedBox(height: 12),
            TextButton(
              onPressed: widget.onSkip,
              child: const Text('Skip Photo Upload', style: TextStyle(color: Color(0xFF7A685F), fontWeight: FontWeight.w600)),
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
