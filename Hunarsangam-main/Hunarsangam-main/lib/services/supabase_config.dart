// lib/services/supabase_config.dart

class SupabaseConfig {
  static const String supabaseUrl = String.fromEnvironment(
    'SUPABASE_URL',
    defaultValue: 'https://hunarsangam-artisan-project.supabase.co',
  );

  static const String supabaseAnonKey = String.fromEnvironment(
    'SUPABASE_ANON_KEY',
    defaultValue: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_anon_key_for_hunarsangam_demo',
  );

  static const String functionsUrl = String.fromEnvironment(
    'SUPABASE_FUNCTIONS_URL',
    defaultValue: 'https://hunarsangam-artisan-project.supabase.co/functions/v1',
  );

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
