// lib/services/supabase_config.dart

class SupabaseConfig {
  /// Supabase Project URL
  /// Configured with user's live Supabase instance
  static String supabaseUrl = const String.fromEnvironment(
    'SUPABASE_URL',
    defaultValue: 'https://jjcxnwtvhlaadcrzvkec.supabase.co',
  );

  /// Supabase Anon Public Key
  /// Configured with user's live Anon Key
  static String supabaseAnonKey = const String.fromEnvironment(
    'SUPABASE_ANON_KEY',
    defaultValue: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqY3hud3R2aGxhYWRjcnp2a2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2NDU1MjYsImV4cCI6MjEwNTIyMTUyNn0.kCjapmVQrkEZkzOAV4-rMV51AFM-q-qMhLtkElD7blw',
  );

  /// Python FastAPI AI Backend URL
  static String aiBackendUrl = const String.fromEnvironment(
    'AI_BACKEND_URL',
    defaultValue: 'http://localhost:8001',
  );

  /// Helper to check if valid Supabase credentials have been injected
  static bool get isConfigured {
    return supabaseUrl.isNotEmpty &&
        !supabaseUrl.contains('dummy_project') &&
        supabaseAnonKey.isNotEmpty &&
        !supabaseAnonKey.contains('dummy_anon_key');
  }

  // Storage bucket names
  static const String bucketArtisanProfiles = 'artisan-profiles';
  static const String bucketProductImages = 'product-images';
  static const String bucketProductionPhotos = 'production-photos';
  static const String bucketVerificationPhotos = 'verification-photos';

  static Map<String, String> get defaultHeaders => {
        'apikey': supabaseAnonKey,
        'Authorization': 'Bearer $supabaseAnonKey',
        'Content-Type': 'application/json',
      };
}
