// lib/models/artisan_model.dart

class ArtisanProfileModel {
  final String id;
  final String? userId;
  final String name;
  final String? phone;
  final String? email;
  final String? profileImage;
  final String? role;
  final String craftType;
  final String location;
  final String? bio;
  final String? verificationStatus;
  final String? experienceYears;
  final String? giCluster;
  final String? giRegistrationNumber;
  final int reliabilityScore;
  final int monthlyCapacity;
  final DateTime? createdAt;
  final DateTime? updatedAt;
  final double rating;
  final int totalReviews;
  final int totalOrders;

  const ArtisanProfileModel({
    required this.id,
    this.userId,
    required this.name,
    this.phone,
    this.email,
    this.profileImage,
    this.role = 'artisan',
    required this.craftType,
    required this.location,
    this.bio,
    this.verificationStatus = 'verified',
    this.experienceYears = '10+ Years',
    this.giCluster,
    this.giRegistrationNumber = 'GI-429',
    this.reliabilityScore = 98,
    this.monthlyCapacity = 500,
    this.createdAt,
    this.updatedAt,
    this.rating = 4.9,
    this.totalReviews = 32,
    this.totalOrders = 85,
  });
}
