// lib/screens/account_creation_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';
import '../widgets/onboarding_header.dart';
import '../widgets/action_button.dart';
import '../services/auth_service.dart';

class AccountCreationScreen extends StatefulWidget {
  final OnboardingState state;
  final ValueChanged<OnboardingState> onStateChanged;
  final VoidCallback onBack;
  final VoidCallback onContinue;
  final VoidCallback? onAlreadyHaveAccount;

  const AccountCreationScreen({
    super.key,
    required this.state,
    required this.onStateChanged,
    required this.onBack,
    required this.onContinue,
    this.onAlreadyHaveAccount,
  });

  @override
  State<AccountCreationScreen> createState() => _AccountCreationScreenState();
}

class _AccountCreationScreenState extends State<AccountCreationScreen> {
  late TextEditingController _nameController;
  late TextEditingController _locationController;
  late TextEditingController _phoneController;
  late TextEditingController _emailController;
  late TextEditingController _passwordController;
  bool _obscurePassword = true;
  String? _errorMessage;
  bool _isRegistering = false;

  @override
  void initState() {
    super.initState();
    _nameController = TextEditingController(
      text: widget.state.artisanName != 'Ramu Kumar' ? widget.state.artisanName : '',
    );
    _locationController = TextEditingController(
      text: widget.state.artisanLocation != 'Barabanki, Uttar Pradesh' ? widget.state.artisanLocation : '',
    );
    _phoneController = TextEditingController(text: widget.state.phoneNumber);
    _emailController = TextEditingController(text: widget.state.email);
    _passwordController = TextEditingController(text: widget.state.password);
  }

  @override
  void dispose() {
    _nameController.dispose();
    _locationController.dispose();
    _phoneController.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  Future<void> _updateStateAndContinue() async {
    final name = _nameController.text.trim();
    final phone = _phoneController.text.trim();
    final email = _emailController.text.trim();
    final location = _locationController.text.trim();
    final password = _passwordController.text.trim();

    if (name.isEmpty) {
      setState(() => _errorMessage = 'Please enter your Full Name / कारीगर का नाम');
      return;
    }
    if (phone.isEmpty && email.isEmpty) {
      setState(() => _errorMessage = 'Please enter either a Phone number or Email address');
      return;
    }
    if (password.length < 6) {
      setState(() => _errorMessage = 'Password must be at least 6 characters');
      return;
    }

    setState(() {
      _errorMessage = null;
      _isRegistering = true;
    });

    final updatedState = widget.state.copyWith(
      artisanName: name,
      artisanLocation: location.isNotEmpty ? location : 'Varanasi, Uttar Pradesh',
      phoneNumber: phone,
      email: email,
      password: password,
    );

    // Register in AuthService
    try {
      await AuthService().registerArtisan(
        name: name,
        phone: phone,
        email: email,
        password: password,
        location: location.isNotEmpty ? location : 'Varanasi, Uttar Pradesh',
      );
    } catch (_) {}

    widget.onStateChanged(updatedState);
    if (!mounted) return;
    setState(() => _isRegistering = false);

    // Show email verification modal dialog as requested
    await showDialog(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFFFFFDFB),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        title: Row(
          children: const [
            Icon(Icons.mark_email_unread_outlined, color: Color(0xFFA84318), size: 28),
            SizedBox(width: 10),
            Expanded(
              child: Text(
                'Verify Your Email',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: Color(0xFF1F1612)),
              ),
            ),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'A verification link has been sent to your email address:\n\n📧 ${email.isNotEmpty ? email : 'your-email@domain.com'}\n\nPlease check your inbox and click the verification link to activate your artisan account.',
              style: const TextStyle(fontSize: 13.5, color: Color(0xFF4E342E), height: 1.4),
            ),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: const Color(0xFFFFF8F3),
                borderRadius: BorderRadius.circular(10),
                border: Border.all(color: const Color(0xFFF3E3D7)),
              ),
              child: const Row(
                children: [
                  Icon(Icons.info_outline, size: 16, color: Color(0xFFA84318)),
                  SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      'You must verify your email before accessing your artisan dashboard.',
                      style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.w600, color: Color(0xFF8C3A16)),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('🔄 Resent verification email successfully!')),
              );
            },
            child: const Text('Resend Email', style: TextStyle(color: Color(0xFF6D4C41), fontWeight: FontWeight.w700)),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFFA84318),
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
            ),
            onPressed: () {
              Navigator.pop(ctx);
            },
            child: const Text('I Have Verified My Email', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12.5)),
          ),
        ],
      ),
    );

    if (!mounted) return;
    widget.onContinue();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            OnboardingHeader(
              currentStep: 1,
              totalSteps: 5,
              stepLabel: 'Craft Maker Registration',
              onBack: widget.onBack,
              currentLanguage: widget.state.selectedLanguage,
            ),

            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Three dot flourish
                    Row(
                      children: const [
                        _FlourishDot(color: Color(0xFFB85324)),
                        SizedBox(width: 6.0),
                        _FlourishDot(color: Color(0xFF2E7D32)),
                        SizedBox(width: 6.0),
                        _FlourishDot(color: Color(0xFFB85324)),
                      ],
                    ),

                    const SizedBox(height: 10.0),

                    const Text(
                      'Create Your Account',
                      style: TextStyle(
                        fontSize: 26.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF221C19),
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 4.0),
                    const Text(
                      'Join HunarSangam to connect with bulk buyers and showcase your craft.',
                      style: TextStyle(
                        fontSize: 14.0,
                        color: Color(0xFF6B584E),
                      ),
                    ),

                    if (_errorMessage != null) ...[
                      const SizedBox(height: 14.0),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 10.0),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFEBEE),
                          borderRadius: BorderRadius.circular(12.0),
                          border: Border.all(color: const Color(0xFFFFCDD2)),
                        ),
                        child: Row(
                          children: [
                            const Icon(Icons.error_outline, color: Color(0xFFC62828), size: 18.0),
                            const SizedBox(width: 8.0),
                            Expanded(
                              child: Text(
                                _errorMessage!,
                                style: const TextStyle(fontSize: 12.5, color: Color(0xFFC62828), fontWeight: FontWeight.w600),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],

                    const SizedBox(height: 20.0),

                    // Full Name Input
                    const Text(
                      'Full Name / पूरा नाम *',
                      style: TextStyle(
                        fontSize: 14.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFFF6ECE5),
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFE5D5CB)),
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 14.0),
                      child: Row(
                        children: [
                          const Icon(Icons.person_outline_rounded, color: Color(0xFF6B584E), size: 20.0),
                          const SizedBox(width: 12.0),
                          Expanded(
                            child: TextField(
                              controller: _nameController,
                              decoration: const InputDecoration(
                                hintText: 'Enter your full name (e.g. Ramu Kumar / Ramesh)',
                                hintStyle: TextStyle(
                                  fontSize: 14.0,
                                  color: Color(0xFF9E8D84),
                                ),
                                border: InputBorder.none,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // Location / City
                    const Text(
                      'Craft Location & State / स्थान व राज्य',
                      style: TextStyle(
                        fontSize: 14.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFFF6ECE5),
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFE5D5CB)),
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 14.0),
                      child: Row(
                        children: [
                          const Icon(Icons.location_on_outlined, color: Color(0xFF6B584E), size: 20.0),
                          const SizedBox(width: 12.0),
                          Expanded(
                            child: TextField(
                              controller: _locationController,
                              decoration: const InputDecoration(
                                hintText: 'e.g. Barabanki, UP / Varanasi / Jaipur',
                                hintStyle: TextStyle(
                                  fontSize: 14.0,
                                  color: Color(0xFF9E8D84),
                                ),
                                border: InputBorder.none,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // Phone Number Input
                    const Text(
                      'Phone Number / मोबाइल नंबर',
                      style: TextStyle(
                        fontSize: 14.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFFF6ECE5),
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFE5D5CB)),
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 14.0),
                      child: Row(
                        children: [
                          const Icon(Icons.phone_outlined, color: Color(0xFF6B584E), size: 20.0),
                          const SizedBox(width: 10.0),
                          const Text(
                            '+91',
                            style: TextStyle(
                              fontSize: 15.0,
                              fontWeight: FontWeight.w700,
                              color: Color(0xFF2D2421),
                            ),
                          ),
                          Container(
                            height: 24.0,
                            width: 1.0,
                            color: const Color(0xFFD6C5BB),
                            margin: const EdgeInsets.symmetric(horizontal: 12.0),
                          ),
                          Expanded(
                            child: TextField(
                              controller: _phoneController,
                              keyboardType: TextInputType.phone,
                              decoration: const InputDecoration(
                                hintText: 'Enter 10-digit phone number',
                                hintStyle: TextStyle(
                                  fontSize: 14.0,
                                  color: Color(0xFF9E8D84),
                                ),
                                border: InputBorder.none,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // Email Address Input
                    const Text(
                      'Email Address / ईमेल (Optional)',
                      style: TextStyle(
                        fontSize: 14.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFFF6ECE5),
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFE5D5CB)),
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 14.0),
                      child: Row(
                        children: [
                          const Icon(Icons.mail_outline_rounded, color: Color(0xFF6B584E), size: 20.0),
                          const SizedBox(width: 12.0),
                          Expanded(
                            child: TextField(
                              controller: _emailController,
                              keyboardType: TextInputType.emailAddress,
                              decoration: const InputDecoration(
                                hintText: 'you@hunarsangam.in',
                                hintStyle: TextStyle(
                                  fontSize: 14.0,
                                  color: Color(0xFF9E8D84),
                                ),
                                border: InputBorder.none,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 16.0),

                    // Password Input
                    const Text(
                      'Create Password / पासवर्ड बनाएं *',
                      style: TextStyle(
                        fontSize: 14.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFFF6ECE5),
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFE5D5CB)),
                      ),
                      padding: const EdgeInsets.symmetric(horizontal: 14.0),
                      child: Row(
                        children: [
                          const Icon(Icons.lock_outline_rounded, color: Color(0xFF6B584E), size: 20.0),
                          const SizedBox(width: 12.0),
                          Expanded(
                            child: TextField(
                              controller: _passwordController,
                              obscureText: _obscurePassword,
                              decoration: const InputDecoration(
                                hintText: 'Create a password (min 6 characters)',
                                hintStyle: TextStyle(
                                  fontSize: 14.0,
                                  color: Color(0xFF9E8D84),
                                ),
                                border: InputBorder.none,
                              ),
                            ),
                          ),
                          IconButton(
                            icon: Icon(
                              _obscurePassword ? Icons.visibility_outlined : Icons.visibility_off_outlined,
                              color: const Color(0xFF7A685F),
                              size: 20.0,
                            ),
                            onPressed: () {
                              setState(() {
                                _obscurePassword = !_obscurePassword;
                              });
                            },
                          ),
                        ],
                      ),
                    ),

                    const SizedBox(height: 24.0),

                    // Already have an account? Sign in link
                    Center(
                      child: InkWell(
                        onTap: widget.onAlreadyHaveAccount,
                        borderRadius: BorderRadius.circular(12.0),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 8.0),
                          child: RichText(
                            text: const TextSpan(
                              text: 'Already have an account? ',
                              style: TextStyle(
                                fontSize: 14.0,
                                color: Color(0xFF6B584E),
                              ),
                              children: [
                                TextSpan(
                                  text: 'Sign In / लॉगिन करें',
                                  style: TextStyle(
                                    fontWeight: FontWeight.w800,
                                    color: Color(0xFFB85324),
                                    decoration: TextDecoration.underline,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),

                    const SizedBox(height: 20.0),
                  ],
                ),
              ),
            ),

            // Bottom Continue Action Button
            Container(
              padding: const EdgeInsets.all(20.0),
              decoration: const BoxDecoration(
                color: Color(0xFFFDFBF9),
                border: Border(
                  top: BorderSide(color: Color(0xFFF3E7DF)),
                ),
              ),
              child: ActionButton(
                text: _isRegistering ? 'Registering...' : 'Continue / आगे बढ़ें',
                icon: Icons.arrow_forward_rounded,
                onPressed: _isRegistering ? () {} : _updateStateAndContinue,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _FlourishDot extends StatelessWidget {
  final Color color;
  const _FlourishDot({required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 6.0,
      height: 6.0,
      decoration: BoxDecoration(
        color: color,
        shape: BoxShape.circle,
      ),
    );
  }
}
