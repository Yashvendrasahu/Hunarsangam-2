// lib/screens/language_selection_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';
import '../widgets/onboarding_header.dart';
import '../widgets/action_button.dart';

class LanguageOption {
  final String nativeName;
  final String englishName;
  final String code;

  const LanguageOption({
    required this.nativeName,
    required this.englishName,
    required this.code,
  });
}

class LanguageSelectionScreen extends StatefulWidget {
  final OnboardingState state;
  final ValueChanged<OnboardingState> onStateChanged;
  final VoidCallback onContinue;
  final VoidCallback? onBack;

  const LanguageSelectionScreen({
    super.key,
    required this.state,
    required this.onStateChanged,
    required this.onContinue,
    this.onBack,
  });

  @override
  State<LanguageSelectionScreen> createState() => _LanguageSelectionScreenState();
}

class _LanguageSelectionScreenState extends State<LanguageSelectionScreen> {
  static const List<LanguageOption> _languages = [
    LanguageOption(nativeName: 'हिंदी', englishName: 'Hindi', code: 'hi'),
    LanguageOption(nativeName: 'English', englishName: 'English', code: 'en'),
    LanguageOption(nativeName: 'मराठी', englishName: 'Marathi', code: 'mr'),
    LanguageOption(nativeName: 'ગુજરાતી', englishName: 'Gujarati', code: 'gu'),
    LanguageOption(nativeName: 'বাংলা', englishName: 'Bengali', code: 'bn'),
    LanguageOption(nativeName: 'தமிழ்', englishName: 'Tamil', code: 'ta'),
    LanguageOption(nativeName: 'తెలుగు', englishName: 'Telugu', code: 'te'),
  ];

  late String _selectedLangCode;

  @override
  void initState() {
    super.initState();
    _selectedLangCode = widget.state.selectedLanguage.contains('Hindi') ? 'hi' : 'en';
  }

  void _selectLanguage(String code, String displayName) {
    setState(() {
      _selectedLangCode = code;
    });
    widget.onStateChanged(widget.state.copyWith(selectedLanguage: displayName));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar with HunarSangam Brand Logo & Help Icon
            OnboardingHeader(
              currentLanguage: widget.state.selectedLanguage,
              onBack: widget.onBack,
              showHelpIcon: true,
            ),

            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const SizedBox(height: 8.0),

                    // Central Artisan Lady Avatar Badge with Verified Star
                    Stack(
                      alignment: Alignment.bottomRight,
                      children: [
                        Container(
                          width: 105.0,
                          height: 105.0,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: const Color(0xFFF4E5DC),
                            border: Border.all(
                              color: const Color(0xFFEAD5C8),
                              width: 2.0,
                            ),
                          ),
                          child: const Center(
                            child: Icon(
                              Icons.brush_rounded,
                              size: 48.0,
                              color: Color(0xFFB85324),
                            ),
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.all(4.0),
                          decoration: const BoxDecoration(
                            color: Color(0xFFD85A2A),
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(
                            Icons.verified,
                            size: 16.0,
                            color: Colors.white,
                          ),
                        ),
                      ],
                    ),

                    const SizedBox(height: 16.0),

                    // Title & Subtitle
                    const Text(
                      'Choose your language',
                      style: TextStyle(
                        fontSize: 26.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF221C19),
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 4.0),
                    const Text(
                      'अपनी भाषा चुनें',
                      style: TextStyle(
                        fontSize: 18.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFFA84318),
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    const Text(
                      'You can change this anytime / इसे कभी भी बदल सकते हैं',
                      style: TextStyle(
                        fontSize: 13.0,
                        color: Color(0xFF6B584E),
                      ),
                    ),

                    const SizedBox(height: 24.0),

                    // 2-Column Grid of Languages
                    GridView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        crossAxisSpacing: 14.0,
                        mainAxisSpacing: 14.0,
                        childAspectRatio: 1.7,
                      ),
                      itemCount: _languages.length + 1,
                      itemBuilder: (context, index) {
                        // "+ More" Card
                        if (index == _languages.length) {
                          return Container(
                            decoration: BoxDecoration(
                              color: const Color(0xFFFAF3EE),
                              borderRadius: BorderRadius.circular(16.0),
                              border: Border.all(
                                color: const Color(0xFFDECFC5),
                                style: BorderStyle.solid,
                              ),
                            ),
                            child: InkWell(
                              onTap: () {},
                              borderRadius: BorderRadius.circular(16.0),
                              child: const Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                  Text(
                                    '+ More +',
                                    style: TextStyle(
                                      fontSize: 15.0,
                                      fontWeight: FontWeight.w700,
                                      color: Color(0xFF4A3B32),
                                    ),
                                  ),
                                  SizedBox(height: 2.0),
                                  Text(
                                    'अन्य भाषाएं',
                                    style: TextStyle(
                                      fontSize: 12.0,
                                      color: Color(0xFF8C7368),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          );
                        }

                        final lang = _languages[index];
                        final isSelected = _selectedLangCode == lang.code;

                        return InkWell(
                          onTap: () => _selectLanguage(lang.code, '${lang.nativeName} / ${lang.englishName}'),
                          borderRadius: BorderRadius.circular(16.0),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 10.0),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(16.0),
                              border: Border.all(
                                color: isSelected ? const Color(0xFFA84318) : const Color(0xFFE5D5CB),
                                width: isSelected ? 2.5 : 1.2,
                              ),
                              boxShadow: [
                                if (isSelected)
                                  BoxShadow(
                                    color: const Color(0xFFA84318).withValues(alpha: 0.08),
                                    blurRadius: 8.0,
                                    offset: const Offset(0, 3),
                                  ),
                              ],
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      lang.nativeName,
                                      style: TextStyle(
                                        fontSize: 16.5,
                                        fontWeight: FontWeight.w800,
                                        color: isSelected ? const Color(0xFFA84318) : const Color(0xFF2D2421),
                                      ),
                                    ),
                                    Text(
                                      lang.englishName,
                                      style: TextStyle(
                                        fontSize: 12.5,
                                        fontWeight: FontWeight.w500,
                                        color: isSelected ? const Color(0xFFA84318) : const Color(0xFF7A685F),
                                      ),
                                    ),
                                  ],
                                ),
                                Container(
                                  width: 22.0,
                                  height: 22.0,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    color: isSelected ? const Color(0xFFA84318) : Colors.transparent,
                                    border: Border.all(
                                      color: isSelected ? const Color(0xFFA84318) : const Color(0xFFC7B8AF),
                                      width: 1.5,
                                    ),
                                  ),
                                  child: isSelected
                                      ? const Icon(Icons.check, size: 14.0, color: Colors.white)
                                      : null,
                                ),
                              ],
                            ),
                          ),
                        );
                      },
                    ),

                    const SizedBox(height: 20.0),

                    // Artisan Direct Trust Banner
                    Container(
                      padding: const EdgeInsets.all(12.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFF7EFE9),
                        borderRadius: BorderRadius.circular(14.0),
                        border: Border.all(color: const Color(0xFFEAD9CF)),
                      ),
                      child: Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(8.0),
                            decoration: const BoxDecoration(
                              color: Color(0xFFECD6C8),
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(Icons.handshake_outlined, size: 20.0, color: Color(0xFF8C4421)),
                          ),
                          const SizedBox(width: 12.0),
                          const Expanded(
                            child: Text(
                              'शत प्रतिशत प्रत्यक्ष कारीगर जुड़ाव : हर खरीद से भारतीय शिल्पकारों और पारंपरिक हथकरघा को सीधा प्रोत्साहन मिलता है।',
                              style: TextStyle(
                                fontSize: 11.5,
                                height: 1.35,
                                color: Color(0xFF4A3B32),
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
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
                text: 'आगे बढ़ें • Continue',
                icon: Icons.arrow_forward_rounded,
                footerNote: 'अगला कदम: उपयोगकर्ता प्रकार • Next: Role Selection',
                footerIcon: Icons.check_circle_outline_rounded,
                onPressed: widget.onContinue,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
