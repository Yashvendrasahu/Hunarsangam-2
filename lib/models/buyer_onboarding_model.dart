// lib/models/buyer_onboarding_model.dart

import 'package:flutter/foundation.dart';

enum BusinessType {
  retailer('Retailer', 'Stores & Boutiques'),
  eventOrganizer('Event Organizer', 'Weddings & Gifting'),
  corporateBuyer('Corporate Bulk Buyer', 'Gifting & Decor'),
  shopOwner('Shop Owner', 'Local Outlets'),
  institutional('Institutional', 'Hotels & Exports'),
  other('Other', 'Custom Inquiries');

  final String title;
  final String subtitle;
  const BusinessType(this.title, this.subtitle);
}

class CraftCategoryItem {
  final String id;
  final String title;
  final String badgeText;
  final String imageUrl;

  const CraftCategoryItem({
    required this.id,
    required this.title,
    required this.badgeText,
    required this.imageUrl,
  });
}

@immutable
class BuyerOnboardingModel {
  final String yourName;
  final String businessName;
  final String countryCode;
  final String phoneNumber;
  final bool useWhatsAppNotifications;
  final String workEmail;
  final bool hasLogo;
  final String? logoPath;
  final BusinessType businessType;
  final List<String> selectedCategories;
  final String buyerId;

  const BuyerOnboardingModel({
    this.yourName = 'Vikram Malhotra',
    this.businessName = 'FabCraft Living Pvt. Ltd.',
    this.countryCode = '+91',
    this.phoneNumber = '98765 43210',
    this.useWhatsAppNotifications = true,
    this.workEmail = 'procurement@fabcraft.in',
    this.hasLogo = true,
    this.logoPath,
    this.businessType = BusinessType.retailer,
    this.selectedCategories = const [
      'Home Decor',
      'Bamboo Craft',
      'Pottery',
    ],
    this.buyerId = '#BB-8492',
  });

  BuyerOnboardingModel copyWith({
    String? yourName,
    String? businessName,
    String? countryCode,
    String? phoneNumber,
    bool? useWhatsAppNotifications,
    String? workEmail,
    bool? hasLogo,
    String? logoPath,
    BusinessType? businessType,
    List<String>? selectedCategories,
    String? buyerId,
  }) {
    return BuyerOnboardingModel(
      yourName: yourName ?? this.yourName,
      businessName: businessName ?? this.businessName,
      countryCode: countryCode ?? this.countryCode,
      phoneNumber: phoneNumber ?? this.phoneNumber,
      useWhatsAppNotifications:
          useWhatsAppNotifications ?? this.useWhatsAppNotifications,
      workEmail: workEmail ?? this.workEmail,
      hasLogo: hasLogo ?? this.hasLogo,
      logoPath: logoPath ?? this.logoPath,
      businessType: businessType ?? this.businessType,
      selectedCategories: selectedCategories ?? this.selectedCategories,
      buyerId: buyerId ?? this.buyerId,
    );
  }
}
