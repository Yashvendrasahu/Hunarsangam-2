// lib/screens/buyer_onboarding_step2_screen.dart

import 'package:flutter/material.dart';
import '../models/buyer_onboarding_model.dart';
import '../widgets/onboarding_header.dart';
import '../widgets/action_button.dart';

class BuyerOnboardingStep2Screen extends StatefulWidget {
  final BuyerOnboardingModel model;
  final VoidCallback onBack;
  final ValueChanged<BuyerOnboardingModel> onContinue;

  const BuyerOnboardingStep2Screen({
    super.key,
    required this.model,
    required this.onBack,
    required this.onContinue,
  });

  @override
  State<BuyerOnboardingStep2Screen> createState() => _BuyerOnboardingStep2ScreenState();
}

class _BuyerOnboardingStep2ScreenState extends State<BuyerOnboardingStep2Screen> {
  late List<String> _selectedCategories;
  late String _volumeRequirement;

  final List<String> _availableCategories = [
    'Pottery & Ceramics',
    'Bamboo & Cane',
    'Handloom & Textiles',
    'Brass & Metal Craft',
    'Woodcarving',
    'Leather Craft',
    'Stone Craft',
    'Zari & Embroidery',
  ];

  @override
  void initState() {
    super.initState();
    _selectedCategories = List.from(widget.model.selectedCategories);
    _volumeRequirement = widget.model.volumeRequirement ?? '50-200 pcs / month';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              OnboardingHeader(
                currentStep: 2,
                totalSteps: 3,
                title: 'Sourcing Preferences',
                subtitle: 'Select the craft categories and order quantities your business frequently sources',
                onBack: widget.onBack,
              ),
              const SizedBox(height: 16),
              const Text(
                'Select Craft Disciplines',
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: Color(0xFF2D2421)),
              ),
              const SizedBox(height: 10),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: _availableCategories.map((cat) {
                  final isSelected = _selectedCategories.contains(cat);
                  return FilterChip(
                    label: Text(cat),
                    selected: isSelected,
                    selectedColor: const Color(0xFFA84318),
                    backgroundColor: Colors.white,
                    side: BorderSide(
                      color: isSelected ? const Color(0xFFA84318) : const Color(0xFFEADFD6),
                    ),
                    labelStyle: TextStyle(
                      color: isSelected ? Colors.white : const Color(0xFF2D2421),
                      fontWeight: FontWeight.w700,
                      fontSize: 12.5,
                    ),
                    onSelected: (selected) {
                      setState(() {
                        if (selected) {
                          _selectedCategories.add(cat);
                        } else {
                          _selectedCategories.remove(cat);
                        }
                      });
                    },
                  );
                }).toList(),
              ),
              const SizedBox(height: 24),
              const Text(
                'Typical Monthly Order Volume',
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: Color(0xFF2D2421)),
              ),
              const SizedBox(height: 10),
              ...['10-50 pcs (Sample & Boutique)', '50-200 pcs (Standard Retail)', '200-1,000+ pcs (Wholesale & Export)'].map((vol) {
                final isSelected = _volumeRequirement == vol;
                return RadioListTile<String>(
                  title: Text(vol, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600)),
                  value: vol,
                  groupValue: _volumeRequirement,
                  activeColor: const Color(0xFFA84318),
                  contentPadding: EdgeInsets.zero,
                  onChanged: (val) {
                    if (val != null) setState(() => _volumeRequirement = val);
                  },
                );
              }),
              const Spacer(),
              ActionButton(
                text: 'Review Sourcing Profile',
                onPressed: () {
                  widget.onContinue(widget.model.copyWith(
                    selectedCategories: _selectedCategories,
                    volumeRequirement: _volumeRequirement,
                  ));
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
