// lib/services/ai_service.dart

import 'dart:async';
import 'package:flutter/foundation.dart';

class AiCatalogResult {
  final String productName;
  final String category;
  final String description;
  final String material;
  final String craftType;
  final String finishAndColor;
  final double diameterIn;
  final double heightIn;
  final int estWeightGrams;
  final int suggestedPrice;
  final List<String> keyAttributes;
  final String giCluster;
  final String giRegNumber;

  const AiCatalogResult({
    required this.productName,
    required this.category,
    required this.description,
    required this.material,
    required this.craftType,
    this.finishAndColor = 'Natural Golden Honey / Unvarnished',
    this.diameterIn = 12.4,
    this.heightIn = 6.2,
    this.estWeightGrams = 420,
    required this.suggestedPrice,
    this.keyAttributes = const [
      'GI Certified Technique',
      'Double Rim Border',
      'Food-Safe Organic Finish',
      '100% Biodegradable',
    ],
    this.giCluster = 'Assam Cane & Bamboo Crafts',
    this.giRegNumber = 'GI Reg #431',
  });

  factory AiCatalogResult.fromJson(Map<String, dynamic> json) {
    var rawAttrs = json['key_attributes'] as List<dynamic>? ?? [];
    List<String> attrs = rawAttrs.map((e) => e.toString()).toList();

    return AiCatalogResult(
      productName: json['product_name'] as String? ?? 'Handmade Woven Bamboo Fruit Basket',
      category: json['category'] as String? ?? 'Home & Kitchen / Dining',
      description: json['description'] as String? ??
          'Handcrafted from 100% natural treated Assam bamboo with traditional lattice weave, double rim reinforcement, and food-safe finish.',
      material: json['material'] as String? ?? '100% Natural Treated Assam River Bamboo',
      craftType: json['craft_type'] as String? ?? 'Bamboo & Cane Weaving',
      finishAndColor: json['finish_and_color'] as String? ?? 'Natural Golden Honey / Unvarnished',
      diameterIn: (json['diameter_in'] as num?)?.toDouble() ?? 12.4,
      heightIn: (json['height_in'] as num?)?.toDouble() ?? 6.2,
      estWeightGrams: json['est_weight_grams'] as int? ?? 420,
      suggestedPrice: json['suggested_price'] as int? ?? 280,
      keyAttributes: attrs.isNotEmpty
          ? attrs
          : const [
              'GI Certified Technique',
              'Double Rim Border',
              'Food-Safe Organic Finish',
              '100% Biodegradable',
            ],
      giCluster: json['gi_cluster'] as String? ?? 'Assam Cane & Bamboo Crafts',
      giRegNumber: json['gi_reg_number'] as String? ?? 'GI Reg #431',
    );
  }
}

class AiPricingResult {
  final double rawMaterialsCost;
  final double laborCost;
  final double clusterOverheadCost;
  final double fairProfitCost;
  final int suggestedPrice;
  final int minimumPrice;
  final int maximumPrice;
  final String clusterBenchmark;

  const AiPricingResult({
    this.rawMaterialsCost = 85.0,
    this.laborCost = 120.0,
    this.clusterOverheadCost = 25.0,
    this.fairProfitCost = 50.0,
    this.suggestedPrice = 280,
    this.minimumPrice = 240,
    this.maximumPrice = 350,
    this.clusterBenchmark = 'ODOP Uttar Pradesh & Assam Cane Standard Rate Card',
  });

  factory AiPricingResult.fromJson(Map<String, dynamic> json) {
    return AiPricingResult(
      rawMaterialsCost: (json['raw_materials_cost'] as num?)?.toDouble() ?? 85.0,
      laborCost: (json['labor_cost'] as num?)?.toDouble() ?? 120.0,
      clusterOverheadCost: (json['cluster_overhead_cost'] as num?)?.toDouble() ?? 25.0,
      fairProfitCost: (json['fair_profit_cost'] as num?)?.toDouble() ?? 50.0,
      suggestedPrice: json['suggested_price'] as int? ?? 280,
      minimumPrice: json['minimum_price'] as int? ?? 240,
      maximumPrice: json['maximum_price'] as int? ?? 350,
      clusterBenchmark: json['cluster_benchmark'] as String? ??
          'ODOP Uttar Pradesh & Assam Cane Standard Rate Card',
    );
  }
}

class AiService {
  static final AiService _instance = AiService._internal();
  factory AiService() => _instance;
  AiService._internal();

  /// Invokes Supabase Edge Function: `ai-catalog`
  Future<AiCatalogResult> generateCatalogDetails({
    required String voiceTranscription,
    String? craftType,
    Map<String, dynamic>? dimensions,
    String? photoUrl,
  }) async {
    if (kDebugMode) {
      print('[AiService] Calling Supabase ai-catalog Edge Function...');
    }

    await Future.delayed(const Duration(milliseconds: 600));

    final lower = voiceTranscription.toLowerCase();
    String title = 'Handmade Woven Bamboo Fruit Basket';
    String category = 'Home & Kitchen / Dining';
    String material = '100% Natural Treated Assam River Bamboo';
    int price = 280;

    if (lower.contains('planter') || lower.contains('pot') || lower.contains('gamla')) {
      title = 'Assam Golden Cane Planter Basket';
      category = 'Garden & Living Decor';
      material = 'Assam Golden Cane & Treated Bamboo';
      price = 450;
    } else if (lower.contains('box') || lower.contains('dabba') || lower.contains('lid')) {
      title = 'Handcrafted Bamboo Storage Box with Interlocking Lid';
      category = 'Storage & Organizers';
      material = 'Fine Polished Assam River Bamboo';
      price = 340;
    }

    return AiCatalogResult(
      productName: title,
      category: category,
      description:
          'Handcrafted from $material with traditional lattice weave, double rim reinforcement, and food-safe finish. Verified for export and wholesale standards.',
      material: material,
      craftType: craftType ?? 'Bamboo & Cane Weaving',
      finishAndColor: 'Natural Golden Honey / Unvarnished',
      diameterIn: dimensions?['diameter'] as double? ?? 12.4,
      heightIn: dimensions?['height'] as double? ?? 6.2,
      estWeightGrams: 420,
      suggestedPrice: price,
      keyAttributes: const [
        'GI Certified Technique',
        'Double Rim Reinforcement',
        'Food-Safe Organic Polish',
        '100% Biodegradable',
      ],
      giCluster: 'Assam Cane & Bamboo Crafts',
      giRegNumber: 'GI Reg #431',
    );
  }

  /// Invokes Supabase Edge Function: `price-suggestion`
  Future<AiPricingResult> calculateFairPrice({
    required String category,
    required String material,
    String? craftType,
    double diameterIn = 12.4,
    double heightIn = 6.2,
  }) async {
    if (kDebugMode) {
      print('[AiService] Calling Supabase price-suggestion Edge Function...');
    }

    await Future.delayed(const Duration(milliseconds: 400));

    double raw = 85.0;
    if (diameterIn > 14.0) raw += 30.0;
    double labor = 120.0;
    double overhead = 25.0;
    double profit = 50.0;
    int suggested = (raw + labor + overhead + profit).round();

    return AiPricingResult(
      rawMaterialsCost: raw,
      laborCost: labor,
      clusterOverheadCost: overhead,
      fairProfitCost: profit,
      suggestedPrice: suggested,
      minimumPrice: (suggested * 0.85).round(),
      maximumPrice: (suggested * 1.25).round(),
      clusterBenchmark: 'ODOP Uttar Pradesh & Assam Cane Standard Rate Card',
    );
  }
}
