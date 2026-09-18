// lib/models/onboarding_state.dart

enum UserRole {
  artisan,
  buyer,
}

class CraftItem {
  final String id;
  final String title;
  final String subtitle;
  final String category;
  final String? previewAudioText;

  const CraftItem({
    required this.id,
    required this.title,
    required this.subtitle,
    required this.category,
    this.previewAudioText,
  });
}

class OnboardingState {
  final String selectedLanguage;
  final UserRole selectedRole;
  final String phoneNumber;
  final String email;
  final String password;
  final bool hasRecordedVoice;
  final String voiceDuration;
  final String voiceTranscript;
  final List<String> selectedCraftIds;
  final bool hasProfilePhoto;
  final String? profilePhotoUrl;
  final String artisanName;
  final String artisanLocation;
  final String experienceYears;
  final List<String> specialties;
  final bool bulkProductionReady;
  final String bulkCapacityText;

  const OnboardingState({
    this.selectedLanguage = 'हिंदी / Hindi',
    this.selectedRole = UserRole.artisan,
    this.phoneNumber = '',
    this.email = '',
    this.password = '',
    this.hasRecordedVoice = false,
    this.voiceDuration = '0:18',
    this.voiceTranscript =
        'I make handmade bamboo baskets and decorative planters and have been doing this for 10+ years in Barabanki, UP.',
    this.selectedCraftIds = const ['bamboo_cane'],
    this.hasProfilePhoto = false,
    this.profilePhotoUrl,
    this.artisanName = 'Ramu Kumar',
    this.artisanLocation = 'Barabanki, Uttar Pradesh',
    this.experienceYears = '10+ Years',
    this.specialties = const [
      'Fruit Baskets',
      'Decorative Planters',
      'Fine Lattice Weaving',
    ],
    this.bulkProductionReady = true,
    this.bulkCapacityText =
        'Capacity to supply 200–500 pieces monthly with regional cooperative support.',
  });

  OnboardingState copyWith({
    String? selectedLanguage,
    UserRole? selectedRole,
    String? phoneNumber,
    String? email,
    String? password,
    bool? hasRecordedVoice,
    String? voiceDuration,
    String? voiceTranscript,
    List<String>? selectedCraftIds,
    bool? hasProfilePhoto,
    String? profilePhotoUrl,
    String? artisanName,
    String? artisanLocation,
    String? experienceYears,
    List<String>? specialties,
    bool? bulkProductionReady,
    String? bulkCapacityText,
  }) {
    return OnboardingState(
      selectedLanguage: selectedLanguage ?? this.selectedLanguage,
      selectedRole: selectedRole ?? this.selectedRole,
      phoneNumber: phoneNumber ?? this.phoneNumber,
      email: email ?? this.email,
      password: password ?? this.password,
      hasRecordedVoice: hasRecordedVoice ?? this.hasRecordedVoice,
      voiceDuration: voiceDuration ?? this.voiceDuration,
      voiceTranscript: voiceTranscript ?? this.voiceTranscript,
      selectedCraftIds: selectedCraftIds ?? this.selectedCraftIds,
      hasProfilePhoto: hasProfilePhoto ?? this.hasProfilePhoto,
      profilePhotoUrl: profilePhotoUrl ?? this.profilePhotoUrl,
      artisanName: artisanName ?? this.artisanName,
      artisanLocation: artisanLocation ?? this.artisanLocation,
      experienceYears: experienceYears ?? this.experienceYears,
      specialties: specialties ?? this.specialties,
      bulkProductionReady: bulkProductionReady ?? this.bulkProductionReady,
      bulkCapacityText: bulkCapacityText ?? this.bulkCapacityText,
    );
  }
}
