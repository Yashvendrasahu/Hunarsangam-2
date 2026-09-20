// lib/services/ai_service.dart

import '../add_product/models/product_draft.dart';

class AiCatalogResult {
  final String productName;
  final String category;
  final String description;
  final String material;
  final String finishAndColor;
  final double diameterIn;
  final double heightIn;
  final double estWeightGrams;
  final double suggestedPrice;
  final String giCluster;
  final String giRegNumber;

  const AiCatalogResult({
    required this.productName,
    required this.category,
    required this.description,
    required this.material,
    required this.finishAndColor,
    required this.diameterIn,
    required this.heightIn,
    required this.estWeightGrams,
    required this.suggestedPrice,
    required this.giCluster,
    required this.giRegNumber,
  });
}

class AiService {
  static final AiService _instance = AiService._internal();
  factory AiService() => _instance;
  AiService._internal();

  Future<ProductDraft> generateProductDetailsFromVoice(String voiceTranscript, ProductDraft currentDraft) async {
    // Simulates AI catalog generation from voice description
    return currentDraft.copyWith(
      title: 'Handcrafted Terracotta Decorative Urn',
      description: 'Hand-thrown natural earthen clay vessel with artisan relief patterns and authentic kiln finish.',
      category: 'Pottery & Ceramics',
      basePrice: 850.0,
      material: 'Terracotta Clay',
      finishAndColor: 'Natural Terracotta Red',
    );
  }

  Future<AiCatalogResult> generateCatalogDetails({
    required String voiceTranscription,
    required String craftType,
    required Map<String, dynamic> dimensions,
    required String photoUrl,
  }) async {
    await Future.delayed(const Duration(milliseconds: 300));
    return AiCatalogResult(
      productName: 'Handmade Woven Bamboo Fruit Basket',
      category: craftType.isNotEmpty ? craftType : 'Bamboo & Cane Weaving',
      description: 'Handwoven natural bamboo storage basket crafted using traditional heritage weaving techniques.',
      material: 'Natural Assam Golden Bamboo',
      finishAndColor: 'Honey Gold Polish',
      diameterIn: (dimensions['diameter'] as num?)?.toDouble() ?? 12.0,
      heightIn: (dimensions['height'] as num?)?.toDouble() ?? 8.5,
      estWeightGrams: 420.0,
      suggestedPrice: 320.0,
      giCluster: 'Barabanki Bamboo Cluster (UP)',
      giRegNumber: 'GI-429',
    );
  }

  Future<double> estimateFairPrice({
    required double materialCost,
    required double laborHours,
    required double hourlyWage,
    double markupMargin = 0.25,
  }) async {
    final directCost = materialCost + (laborHours * hourlyWage);
    return directCost * (1 + markupMargin);
  }
}
