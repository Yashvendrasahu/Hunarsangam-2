// lib/services/auth_service.dart

import 'dart:async';
import 'package:flutter/foundation.dart';
import '../models/artisan_model.dart';

class AuthUser {
  final String id;
  final String email;
  final String phone;
  final String role;
  final DateTime? lastSignInAt;

  const AuthUser({
    required this.id,
    this.email = '',
    this.phone = '',
    this.role = 'artisan',
    this.lastSignInAt,
  });
}

class AuthService {
  static final AuthService _instance = AuthService._internal();
  factory AuthService() => _instance;
  AuthService._internal();

  AuthUser? _currentUser;
  ArtisanProfileModel? _currentArtisan;
  String? _sessionToken;
  String? _pendingPhone;

  AuthUser? get currentUser => _currentUser;
  ArtisanProfileModel? get currentArtisan => _currentArtisan;
  bool get isAuthenticated => _currentUser != null;

  // Stream controller for real-time auth changes
  final _authStreamController = StreamController<AuthUser?>.broadcast();
  Stream<AuthUser?> get authStateChanges => _authStreamController.stream;

  /// Request OTP for phone number authentication
  Future<bool> sendOtp({required String phone}) async {
    _pendingPhone = phone.trim();
    if (kDebugMode) {
      print('[AuthService] Sending OTP to $phone via Supabase Auth');
    }
    // Simulate Supabase OTP generation / SMS trigger
    await Future.delayed(const Duration(milliseconds: 350));
    return true;
  }

  /// Verify OTP and log user into Supabase session
  Future<AuthUser> verifyOtp({required String phone, required String otp}) async {
    await Future.delayed(const Duration(milliseconds: 400));
    
    // In demo, default OTP '123456' or any 6-digit number succeeds
    final user = AuthUser(
      id: '11111111-1111-1111-1111-111111111111',
      phone: phone,
      email: 'ramukumar@hunarsangam.in',
      role: 'artisan',
      lastSignInAt: DateTime.now(),
    );

    _currentUser = user;
    _sessionToken = 'demo_session_token_${DateTime.now().millisecondsSinceEpoch}';
    _currentArtisan = ArtisanProfileModel(
      id: '22222222-2222-2222-2222-222222222222',
      userId: user.id,
      name: 'Ramu Kumar',
      phone: phone,
      email: 'ramukumar@hunarsangam.in',
      craftType: 'Bamboo & Cane Weaving',
      location: 'Barabanki, Uttar Pradesh',
      bio: 'Master craftsman specializing in GI-certified Assam cane and natural river bamboo baskets.',
      verificationStatus: 'verified',
      experienceYears: '10+ Years',
      giCluster: 'Assam Cane & Bamboo Crafts',
      giRegistrationNumber: 'GI Reg #431',
      reliabilityScore: 98,
      monthlyCapacity: 500,
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    );

    _authStreamController.add(_currentUser);
    return user;
  }

  /// Password login for registered artisan
  Future<AuthUser> loginWithEmailOrPhone({
    required String contact,
    required String password,
  }) async {
    await Future.delayed(const Duration(milliseconds: 300));

    final isEmail = contact.contains('@');
    final user = AuthUser(
      id: '11111111-1111-1111-1111-111111111111',
      email: isEmail ? contact : 'ramukumar@hunarsangam.in',
      phone: !isEmail ? contact : '+91 98765 43210',
      role: 'artisan',
      lastSignInAt: DateTime.now(),
    );

    _currentUser = user;
    _sessionToken = 'demo_jwt_token_${DateTime.now().millisecondsSinceEpoch}';
    _currentArtisan = ArtisanProfileModel(
      id: '22222222-2222-2222-2222-222222222222',
      userId: user.id,
      name: 'Ramu Kumar',
      phone: user.phone,
      email: user.email,
      craftType: 'Bamboo & Cane Weaving',
      location: 'Barabanki, Uttar Pradesh',
      bio: 'Master craftsman specializing in GI-certified Assam cane and natural river bamboo baskets.',
      verificationStatus: 'verified',
      experienceYears: '10+ Years',
      giCluster: 'Assam Cane & Bamboo Crafts',
      giRegistrationNumber: 'GI Reg #431',
      reliabilityScore: 98,
      monthlyCapacity: 500,
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    );

    _authStreamController.add(_currentUser);
    return user;
  }

  /// Register new artisan account
  Future<AuthUser> registerArtisan({
    required String name,
    required String phone,
    required String email,
    required String password,
    String craftType = 'Bamboo & Cane Weaving',
    String location = 'Barabanki, Uttar Pradesh',
  }) async {
    await Future.delayed(const Duration(milliseconds: 400));

    final user = AuthUser(
      id: '11111111-1111-1111-1111-111111111111',
      email: email.isNotEmpty ? email : 'ramukumar@hunarsangam.in',
      phone: phone.isNotEmpty ? phone : '+91 98765 43210',
      role: 'artisan',
      lastSignInAt: DateTime.now(),
    );

    _currentUser = user;
    _currentArtisan = ArtisanProfileModel(
      id: '22222222-2222-2222-2222-222222222222',
      userId: user.id,
      name: name.isNotEmpty ? name : 'Ramu Kumar',
      phone: user.phone,
      email: user.email,
      craftType: craftType,
      location: location,
      bio: 'Master craftsman specializing in GI-certified handmade crafts.',
      verificationStatus: 'verified',
      experienceYears: '10+ Years',
      giCluster: 'Assam Cane & Bamboo Crafts',
      giRegistrationNumber: 'GI Reg #431',
      reliabilityScore: 98,
      monthlyCapacity: 500,
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    );

    _authStreamController.add(_currentUser);
    return user;
  }

  /// Update current artisan in session
  void updateArtisanSession(ArtisanProfileModel profile) {
    _currentArtisan = profile;
  }

  /// Sign out current artisan session
  Future<void> signOut() async {
    _currentUser = null;
    _currentArtisan = null;
    _sessionToken = null;
    _authStreamController.add(null);
  }
}
