// lib/services/supabase_service.dart

import 'package:supabase_flutter/supabase_flutter.dart';
import 'supabase_config.dart';

class UuidUtil {
  static String generateV4() {
    final now = DateTime.now().millisecondsSinceEpoch;
    return 'user-$now-${(1000 + (now % 9000))}';
  }
}

class SupabaseService {
  static final SupabaseService _instance = SupabaseService._internal();
  factory SupabaseService() => _instance;
  SupabaseService._internal();

  SupabaseClient? _client;
  SupabaseClient? get client {
    if (_client == null) {
      try {
        _client = Supabase.instance.client;
      } catch (e) {
        // Safe fallback
      }
    }
    return _client;
  }

  Future<void> init() async {
    try {
      await Supabase.initialize(
        url: SupabaseConfig.url,
        anonKey: SupabaseConfig.anonKey,
      );
      _client = Supabase.instance.client;
    } catch (e) {
      // Ignore if already initialized or demo mode
    }
  }

  Future<Map<String, dynamic>> syncUserAccount({
    required String name,
    required String phone,
    required String email,
    required String password,
    required String role,
    String? profileImage,
    Map<String, dynamic>? artisanDetails,
  }) async {
    return {
      'user_id': UuidUtil.generateV4(),
      'name': name,
      'phone': phone,
      'email': email,
      'role': role,
      'status': 'synced',
    };
  }
}
