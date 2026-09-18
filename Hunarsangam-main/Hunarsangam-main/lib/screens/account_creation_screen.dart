// lib/screens/account_creation_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';
import '../widgets/onboarding_header.dart';
import '../widgets/action_button.dart';

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
  late TextEditingController _phoneController;
  late TextEditingController _emailController;
  late TextEditingController _passwordController;
  bool _obscurePassword = true;

  @override
  void initState() {
    super.initState();
    _phoneController = TextEditingController(text: widget.state.phoneNumber);
    _emailController = TextEditingController(text: widget.state.email);
    _passwordController = TextEditingController(text: widget.state.password);
  }

  @override
  void dispose() {
    _phoneController.dispose();
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _updateStateAndContinue() {
    widget.onStateChanged(
      widget.state.copyWith(
        phoneNumber: _phoneController.text,
        email: _emailController.text,
        password: _passwordController.text,
      ),
    );
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
              stepLabel: 'Artisan Setup',
              onBack: widget.onBack,
              currentLanguage: widget.state.selectedLanguage,
            ),

            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 12.0),
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

                    const SizedBox(height: 12.0),

                    const Text(
                      'Create Your Account',
                      style: TextStyle(
                        fontSize: 28.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF221C19),
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 4.0),
                    const Text(
                      'Enter your contact details to get started.',
                      style: TextStyle(
                        fontSize: 14.5,
                        color: Color(0xFF6B584E),
                      ),
                    ),

                    const SizedBox(height: 28.0),

                    // Phone Number Input
                    const Text(
                      'Phone Number',
                      style: TextStyle(
                        fontSize: 14.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    const SizedBox(height: 8.0),
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
                                hintText: 'Enter your phone number',
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

                    const SizedBox(height: 20.0),

                    // Email Address Input
                    const Text(
                      'Email Address',
                      style: TextStyle(
                        fontSize: 14.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    const SizedBox(height: 8.0),
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
                                hintText: 'Enter your email address',
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

                    const SizedBox(height: 20.0),

                    // Password Input
                    const Text(
                      'Create Password',
                      style: TextStyle(
                        fontSize: 14.0,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    const SizedBox(height: 8.0),
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
                                hintText: 'Enter a password',
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
                    const SizedBox(height: 6.0),
                    const Text(
                      'Use at least 8 characters',
                      style: TextStyle(
                        fontSize: 12.0,
                        color: Color(0xFF7A685F),
                      ),
                    ),
                  ],
                ),
              ),
            ),

            // Bottom Continue Button & Already have account option
            Padding(
              padding: const EdgeInsets.fromLTRB(16.0, 8.0, 16.0, 16.0),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  ActionButton(
                    text: 'Continue',
                    backgroundColor: const Color(0xFFE66B38),
                    onPressed: _updateStateAndContinue,
                  ),
                  if (widget.onAlreadyHaveAccount != null) ...[
                    const SizedBox(height: 12.0),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Text(
                          'Already have an account? ',
                          style: TextStyle(
                            fontSize: 13.5,
                            color: Color(0xFF6B584E),
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        GestureDetector(
                          onTap: widget.onAlreadyHaveAccount,
                          child: const Text(
                            'Login',
                            style: TextStyle(
                              fontSize: 13.5,
                              color: Color(0xFFE66B38),
                              fontWeight: FontWeight.w800,
                              decoration: TextDecoration.underline,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ],
                ],
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
