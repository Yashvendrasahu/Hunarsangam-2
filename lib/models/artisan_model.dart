// lib/models/artisan_model.dart

class ArtisanProfileModel {
  final String id;
  final String userId;
  final String name;
  final String phone;
  final String email;
  final String profileImage;
  final String role;
  final String craftType;
  final String location;
  final String bio;
  final String verificationStatus;
  final String experienceYears;
  final String giCluster;
  final String giRegistrationNumber;
  final int reliabilityScore;
  final int monthlyCapacity;
  final DateTime createdAt;
  final DateTime updatedAt;

  const ArtisanProfileModel({
    required this.id,
    required this.userId,
    required this.name,
    this.phone = '',
    this.email = '',
    this.profileImage = '',
    this.role = 'artisan',
    this.craftType = 'Bamboo & Cane Weaving',
    this.location = 'Barabanki, Uttar Pradesh',
    this.bio = '',
    this.verificationStatus = 'verified',
    this.experienceYears = '10+ Years',
    this.giCluster = 'Assam Cane & Bamboo Crafts',
    this.giRegistrationNumber = 'GI Reg #431',
    this.reliabilityScore = 98,
    this.monthlyCapacity = 500,
    required this.createdAt,
    required this.updatedAt,
  });

  factory ArtisanProfileModel.fromJson(Map<String, dynamic> json) {
    return ArtisanProfileModel(
      id: json['id'] as String? ?? '22222222-2222-2222-2222-222222222222',
      userId: json['user_id'] as String? ?? '11111111-1111-1111-1111-111111111111',
      name: json['name'] as String? ?? 'Ramu Kumar',
      phone: json['phone'] as String? ?? '+91 98765 43210',
      email: json['email'] as String? ?? 'ramukumar@hunarsangam.in',
      profileImage: json['profile_image'] as String? ??
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      role: json['role'] as String? ?? 'artisan',
      craftType: json['craft_type'] as String? ?? 'Bamboo & Cane Weaving',
      location: json['location'] as String? ?? 'Barabanki, Uttar Pradesh',
      bio: json['bio'] as String? ??
          'Master craftsman specializing in GI-certified Assam cane and natural river bamboo baskets.',
      verificationStatus: json['verification_status'] as String? ?? 'verified',
      experienceYears: json['experience_years'] as String? ?? '10+ Years',
      giCluster: json['gi_cluster'] as String? ?? 'Assam Cane & Bamboo Crafts',
      giRegistrationNumber: json['gi_registration_number'] as String? ?? 'GI Reg #431',
      reliabilityScore: json['reliability_score'] as int? ?? 98,
      monthlyCapacity: json['monthly_capacity'] as int? ?? 500,
      createdAt: json['created_at'] != null
          ? DateTime.tryParse(json['created_at'] as String) ?? DateTime.now()
          : DateTime.now(),
      updatedAt: json['updated_at'] != null
          ? DateTime.tryParse(json['updated_at'] as String) ?? DateTime.now()
          : DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'user_id': userId,
      'name': name,
      'phone': phone,
      'email': email,
      'profile_image': profileImage,
      'role': role,
      'craft_type': craftType,
      'location': location,
      'bio': bio,
      'verification_status': verificationStatus,
      'experience_years': experienceYears,
      'gi_cluster': giCluster,
      'gi_registration_number': giRegistrationNumber,
      'reliability_score': reliabilityScore,
      'monthly_capacity': monthlyCapacity,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }

  ArtisanProfileModel copyWith({
    String? id,
    String? userId,
    String? name,
    String? phone,
    String? email,
    String? profileImage,
    String? role,
    String? craftType,
    String? location,
    String? bio,
    String? verificationStatus,
    String? experienceYears,
    String? giCluster,
    String? giRegistrationNumber,
    int? reliabilityScore,
    int? monthlyCapacity,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return ArtisanProfileModel(
      id: id ?? this.id,
      userId: userId ?? this.userId,
      name: name ?? this.name,
      phone: phone ?? this.phone,
      email: email ?? this.email,
      profileImage: profileImage ?? this.profileImage,
      role: role ?? this.role,
      craftType: craftType ?? this.craftType,
      location: location ?? this.location,
      bio: bio ?? this.bio,
      verificationStatus: verificationStatus ?? this.verificationStatus,
      experienceYears: experienceYears ?? this.experienceYears,
      giCluster: giCluster ?? this.giCluster,
      giRegistrationNumber: giRegistrationNumber ?? this.giRegistrationNumber,
      reliabilityScore: reliabilityScore ?? this.reliabilityScore,
      monthlyCapacity: monthlyCapacity ?? this.monthlyCapacity,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}
