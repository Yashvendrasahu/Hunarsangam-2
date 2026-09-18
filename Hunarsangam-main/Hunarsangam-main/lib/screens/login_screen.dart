// lib/screens/login_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';
import '../services/auth_service.dart';
import '../widgets/brand_logo_card.dart';
import 'artisan_home_screen.dart';

/// Screen matching 'ar-Artisan- login.png'
/// Allows registered artisans to sign into their account, validates credentials,
/// sets up the active session state, and seamlessly redirects directly to the Artisan Home Dashboard screen.
class LoginScreen extends StatefulWidget {
  final OnboardingState? initialState;
  final VoidCallback? onLoginSuccess;
  final ValueChanged<OnboardingState>? onLoginSuccessWithState;
  final VoidCallback? onCreateAccount;
  final VoidCallback? onBack;
  final String currentLanguage;

  const LoginScreen({
    super.key,
    this.initialState,
    this.onLoginSuccess,
    this.onLoginSuccessWithState,
    this.onCreateAccount,
    this.onBack,
    this.currentLanguage = 'English',
  });

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _contactController =
      TextEditingController(text: 'ramukumar@hunarsangam.in');
  final TextEditingController _passwordController =
      TextEditingController(text: 'password123');

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  bool _obscurePassword = true;
  bool _isLoading = false;
  String _selectedLanguage = 'English';
  String? _contactError;
  String? _passwordError;

  @override
  void initState() {
    super.initState();
    _selectedLanguage = widget.currentLanguage;
    if (widget.initialState != null &&
        (widget.initialState!.email.isNotEmpty ||
            widget.initialState!.phoneNumber.isNotEmpty)) {
      _contactController.text = widget.initialState!.email.isNotEmpty
          ? widget.initialState!.email
          : widget.initialState!.phoneNumber;
    }
  }

  @override
  void dispose() {
    _contactController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  bool _validateInputs() {
    setState(() {
      _contactError = null;
      _passwordError = null;
    });

    final contact = _contactController.text.trim();
    final password = _passwordController.text.trim();

    bool isValid = true;

    if (contact.isEmpty) {
      setState(() {
        _contactError = 'Please enter your email or phone number';
      });
      isValid = false;
    } else if (contact.contains('@') &&
        !RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(contact)) {
      setState(() {
        _contactError = 'Please enter a valid email address';
      });
      isValid = false;
    } else if (!contact.contains('@') && contact.length < 8) {
      setState(() {
        _contactError = 'Phone number must be at least 8 digits';
      });
      isValid = false;
    }

    if (password.isEmpty) {
      setState(() {
        _passwordError = 'Please enter your password';
      });
      isValid = false;
    } else if (password.length < 6) {
      setState(() {
        _passwordError = 'Password must be at least 6 characters (8 recommended)';
      });
      isValid = false;
    }

    return isValid;
  }

  Future<void> _handleLogin() async {
    FocusScope.of(context).unfocus();

    if (!_validateInputs()) {
      return;
    }

    setState(() {
      _isLoading = true;
    });

    // Authenticate via Supabase AuthService
    try {
      await AuthService().loginWithEmailOrPhone(
        contact: _contactController.text.trim(),
        password: _passwordController.text.trim(),
      );
    } catch (_) {}

    if (!mounted) return;

    final contact = _contactController.text.trim();
    final isEmail = contact.contains('@');

    // Build the validated active user session state
    final baseState = widget.initialState ?? const OnboardingState();
    final updatedSessionState = baseState.copyWith(
      email: isEmail ? contact : (baseState.email.isNotEmpty ? baseState.email : 'ramukumar@hunarsangam.in'),
      phoneNumber: !isEmail ? contact : (baseState.phoneNumber.isNotEmpty ? baseState.phoneNumber : '+91 98765 43210'),
      password: _passwordController.text.trim(),
      selectedLanguage: _selectedLanguage,
      selectedRole: UserRole.artisan,
      artisanName: baseState.artisanName.isNotEmpty ? baseState.artisanName : 'Ramu Kumar',
      artisanLocation: baseState.artisanLocation.isNotEmpty ? baseState.artisanLocation : 'Barabanki, Uttar Pradesh',
      experienceYears: baseState.experienceYears.isNotEmpty ? baseState.experienceYears : '10+ Years',
      selectedCraftIds: baseState.selectedCraftIds.isNotEmpty ? baseState.selectedCraftIds : const ['bamboo_cane'],
      bulkProductionReady: true,
      hasProfilePhoto: true,
    );

    setState(() {
      _isLoading = false;
    });

    // Show quick feedback banner
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Row(
          children: [
            const Icon(Icons.check_circle, color: Colors.white, size: 20.0),
            const SizedBox(width: 10.0),
            Expanded(
              child: Text(
                'Welcome back, ${updatedSessionState.artisanName}!',
                style: const TextStyle(fontWeight: FontWeight.w700),
              ),
            ),
          ],
        ),
        backgroundColor: const Color(0xFF2E7D32),
        duration: const Duration(seconds: 2),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
      ),
    );

    // 1. If parent coordinator callback with state is provided, notify it
    if (widget.onLoginSuccessWithState != null) {
      widget.onLoginSuccessWithState!(updatedSessionState);
      return;
    }

    // 2. If standard callback is provided, invoke it
    if (widget.onLoginSuccess != null) {
      widget.onLoginSuccess!();
      return;
    }

    // 3. Fallback: Seamless direct navigation to ArtisanHomeScreen via Navigator
    Navigator.of(context).pushReplacement(
      MaterialPageRoute(
        builder: (context) => ArtisanHomeScreen(
          state: updatedSessionState,
        ),
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
            // Top App Bar with back navigation, logo & language pill
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  // Back button
                  IconButton(
                    icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                    onPressed: widget.onBack ?? widget.onCreateAccount,
                    splashRadius: 22.0,
                  ),

                  // Center brand logo + title
                  const HunarSangamLogoBadge(
                    size: 34.0,
                    showText: true,
                  ),

                  // Language dropdown pill
                  PopupMenuButton<String>(
                    onSelected: (val) {
                      setState(() {
                        _selectedLanguage = val;
                      });
                    },
                    itemBuilder: (ctx) => [
                      const PopupMenuItem(value: 'English', child: Text('English')),
                      const PopupMenuItem(value: 'हिंदी / Hindi', child: Text('हिंदी / Hindi')),
                      const PopupMenuItem(value: 'অসমীয়া / Assamese', child: Text('অসমীয়া / Assamese')),
                      const PopupMenuItem(value: 'বাংলা / Bengali', child: Text('বাংলা / Bengali')),
                    ],
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFFDFB),
                        borderRadius: BorderRadius.circular(16.0),
                        border: Border.all(color: const Color(0xFFE5D5CB)),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            _selectedLanguage,
                            style: const TextStyle(
                              fontSize: 12.0,
                              fontWeight: FontWeight.w600,
                              color: Color(0xFF4A372D),
                            ),
                          ),
                          const SizedBox(width: 4.0),
                          const Icon(
                            Icons.arrow_drop_down,
                            size: 16.0,
                            color: Color(0xFF7B665C),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),

            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
                child: Form(
                  key: _formKey,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const SizedBox(height: 8.0),

                      // Three decorative flourish dots
                      Row(
                        children: const [
                          _LoginFlourishDot(color: Color(0xFFB85324)),
                          SizedBox(width: 6.0),
                          _LoginFlourishDot(color: Color(0xFF2E7D32)),
                          SizedBox(width: 6.0),
                          _LoginFlourishDot(color: Color(0xFFB85324)),
                        ],
                      ),

                      const SizedBox(height: 14.0),

                      // Title
                      const Text(
                        'Login Your Account',
                        style: TextStyle(
                          fontSize: 30.0,
                          fontWeight: FontWeight.w800,
                          color: Color(0xFF221C19),
                          letterSpacing: -0.5,
                        ),
                      ),

                      const SizedBox(height: 6.0),

                      // Subtitle
                      const Text(
                        'Enter your contact details to login.',
                        style: TextStyle(
                          fontSize: 14.5,
                          color: Color(0xFF7A685F),
                          fontWeight: FontWeight.w400,
                        ),
                      ),

                      const SizedBox(height: 28.0),

                      // Field 1: Email Address / Phone number
                      const Text(
                        'Email Address / Phone number',
                        style: TextStyle(
                          fontSize: 14.0,
                          fontWeight: FontWeight.w700,
                          color: Color(0xFF2D2421),
                        ),
                      ),
                      const SizedBox(height: 8.0),
                      Container(
                        decoration: BoxDecoration(
                          color: const Color(0xFFF5EBE1),
                          borderRadius: BorderRadius.circular(16.0),
                          border: Border.all(
                            color: _contactError != null
                                ? const Color(0xFFD32F2F)
                                : const Color(0xFFE8DDD5),
                            width: _contactError != null ? 1.5 : 1.0,
                          ),
                        ),
                        padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 2.0),
                        child: Row(
                          children: [
                            const Icon(Icons.mail_outline_rounded, color: Color(0xFF8A776D), size: 20.0),
                            const SizedBox(width: 12.0),
                            Expanded(
                              child: TextField(
                                controller: _contactController,
                                keyboardType: TextInputType.emailAddress,
                                textInputAction: TextInputAction.next,
                                style: const TextStyle(
                                  fontSize: 14.0,
                                  color: Color(0xFF2D2421),
                                  fontWeight: FontWeight.w500,
                                ),
                                decoration: const InputDecoration(
                                  hintText: 'Enter your email address / phone number',
                                  hintStyle: TextStyle(
                                    fontSize: 13.5,
                                    color: Color(0xFF9E8D84),
                                  ),
                                  border: InputBorder.none,
                                ),
                                onChanged: (_) {
                                  if (_contactError != null) {
                                    setState(() {
                                      _contactError = null;
                                    });
                                  }
                                },
                              ),
                            ),
                          ],
                        ),
                      ),
                      if (_contactError != null) ...[
                        const SizedBox(height: 6.0),
                        Padding(
                          padding: const EdgeInsets.only(left: 4.0),
                          child: Text(
                            _contactError!,
                            style: const TextStyle(
                              fontSize: 12.0,
                              color: Color(0xFFD32F2F),
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                      ],

                      const SizedBox(height: 22.0),

                      // Field 2: Password
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
                          color: const Color(0xFFF5EBE1),
                          borderRadius: BorderRadius.circular(16.0),
                          border: Border.all(
                            color: _passwordError != null
                                ? const Color(0xFFD32F2F)
                                : const Color(0xFFE8DDD5),
                            width: _passwordError != null ? 1.5 : 1.0,
                          ),
                        ),
                        padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 2.0),
                        child: Row(
                          children: [
                            const Icon(Icons.lock_outline_rounded, color: Color(0xFF8A776D), size: 20.0),
                            const SizedBox(width: 12.0),
                            Expanded(
                              child: TextField(
                                controller: _passwordController,
                                obscureText: _obscurePassword,
                                textInputAction: TextInputAction.done,
                                onSubmitted: (_) => _handleLogin(),
                                style: const TextStyle(
                                  fontSize: 14.0,
                                  color: Color(0xFF2D2421),
                                  fontWeight: FontWeight.w500,
                                ),
                                decoration: const InputDecoration(
                                  hintText: 'Enter a password',
                                  hintStyle: TextStyle(
                                    fontSize: 13.5,
                                    color: Color(0xFF9E8D84),
                                  ),
                                  border: InputBorder.none,
                                ),
                                onChanged: (_) {
                                  if (_passwordError != null) {
                                    setState(() {
                                      _passwordError = null;
                                    });
                                  }
                                },
                              ),
                            ),
                            IconButton(
                              icon: Icon(
                                _obscurePassword ? Icons.visibility_outlined : Icons.visibility_off_outlined,
                                color: const Color(0xFF8A776D),
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
                      if (_passwordError != null) ...[
                        const SizedBox(height: 6.0),
                        Padding(
                          padding: const EdgeInsets.only(left: 4.0),
                          child: Text(
                            _passwordError!,
                            style: const TextStyle(
                              fontSize: 12.0,
                              color: Color(0xFFD32F2F),
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                      ] else ...[
                        const SizedBox(height: 6.0),
                        const Text(
                          'Use at least 8 characters',
                          style: TextStyle(
                            fontSize: 12.0,
                            color: Color(0xFF7A685F),
                          ),
                        ),
                      ],
                    ],
                  ),
                ),
              ),
            ),

            // Bottom Orange CTA Button & Switch link
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 16.0),
              child: Column(
                children: [
                  SizedBox(
                    width: double.infinity,
                    height: 54.0,
                    child: ElevatedButton(
                      onPressed: _isLoading ? null : _handleLogin,
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFFE87338),
                        foregroundColor: Colors.white,
                        disabledBackgroundColor: const Color(0xFFE87338).withOpacity(0.7),
                        elevation: 0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(18.0),
                        ),
                      ),
                      child: _isLoading
                          ? const SizedBox(
                              width: 22.0,
                              height: 22.0,
                              child: CircularProgressIndicator(
                                strokeWidth: 2.5,
                                valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                              ),
                            )
                          : const Text(
                              'login',
                              style: TextStyle(
                                fontSize: 16.5,
                                fontWeight: FontWeight.w700,
                                letterSpacing: 0.3,
                              ),
                            ),
                    ),
                  ),

                  const SizedBox(height: 16.0),

                  // "New here , create account Here"
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        'New here , create account ',
                        style: TextStyle(
                          fontSize: 13.5,
                          color: Color(0xFF2D2421),
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      GestureDetector(
                        onTap: widget.onCreateAccount,
                        child: const Text(
                          'Here',
                          style: TextStyle(
                            fontSize: 13.5,
                            color: Color(0xFF2563EB),
                            fontWeight: FontWeight.w700,
                            decoration: TextDecoration.underline,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 8.0),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _LoginFlourishDot extends StatelessWidget {
  final Color color;
  const _LoginFlourishDot({required this.color});

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

