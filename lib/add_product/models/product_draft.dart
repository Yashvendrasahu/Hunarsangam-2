// lib/add_product/models/product_draft.dart

/// Model holding complete state of a product being created across all Add Product steps.
class ProductDraft {
  final String id;
  final String title;
  final String subtitle;
  final String description;
  final String category;
  final String material;
  final String finishAndColor;
  final String giCluster;
  final String giRegNumber;
  final String clusterCode;
  final double diameterIn;
  final double heightIn;
  final int estWeightGrams;
  final String packagingBox;
  final double rawMaterialsCost;
  final double laborCost;
  final double clusterOverheadCost;
  final double fairProfitCost;
  final int basePrice;
  final int wholesaleMoq;
  final int dailyCapacityPcs;
  final String leadTime;
  final String photoUrl;
  final String secondaryPhotoUrl;
  final String digitalListingId;
  final String voiceClipTranscription;
  final bool isPublished;
  final bool isOndcSynced;
  final bool isHunarSangamLive;
  final bool isWhatsAppReady;

  const ProductDraft({
    this.id = 'HS-BAM-8842',
    this.title = 'Handmade Woven Bamboo Fruit Basket',
    this.subtitle = 'GI Tag: Assam Cane & Bamboo Work (GI-429)',
    this.description =
        'Handcrafted from 100% natural treated Assam bamboo with traditional lattice weave, double rim reinforcement, and food-safe finish. Ideal for dining storage, eco-friendly gift hampers, and artisanal home decor.',
    this.category = 'Home & Kitchen / Dining',
    this.material = '100% Natural River Bamboo',
    this.finishAndColor = 'Natural Golden Honey / Unvarnished',
    this.giCluster = 'Assam Cane & Bamboo Crafts',
    this.giRegNumber = 'GI Reg #431',
    this.clusterCode = 'ASM-KAM-42',
    this.diameterIn = 12.4,
    this.heightIn = 6.2,
    this.estWeightGrams = 420,
    this.packagingBox = '14 × 14 × 8 in Corrugated Carton',
    this.rawMaterialsCost = 85.0,
    this.laborCost = 120.0,
    this.clusterOverheadCost = 25.0,
    this.fairProfitCost = 50.0,
    this.basePrice = 280,
    this.wholesaleMoq = 20,
    this.dailyCapacityPcs = 15,
    this.leadTime = '5 - 7 days',
    this.photoUrl =
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    this.secondaryPhotoUrl =
        'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80',
    this.digitalListingId = '#HS-BAM-8842',
    this.voiceClipTranscription =
        'I weave natural bamboo fruit baskets with double rim borders. Diameter 12 inches, wholesale price 250 rupees per piece.',
    this.isPublished = true,
    this.isOndcSynced = true,
    this.isHunarSangamLive = true,
    this.isWhatsAppReady = true,
  });

  ProductDraft copyWith({
    String? id,
    String? title,
    String? subtitle,
    String? description,
    String? category,
    String? material,
    String? finishAndColor,
    String? giCluster,
    String? giRegNumber,
    String? clusterCode,
    double? diameterIn,
    double? heightIn,
    int? estWeightGrams,
    String? packagingBox,
    double? rawMaterialsCost,
    double? laborCost,
    double? clusterOverheadCost,
    double? fairProfitCost,
    int? basePrice,
    int? wholesaleMoq,
    int? dailyCapacityPcs,
    String? leadTime,
    String? photoUrl,
    String? secondaryPhotoUrl,
    String? digitalListingId,
    String? voiceClipTranscription,
    bool? isPublished,
    bool? isOndcSynced,
    bool? isHunarSangamLive,
    bool? isWhatsAppReady,
  }) {
    return ProductDraft(
      id: id ?? this.id,
      title: title ?? this.title,
      subtitle: subtitle ?? this.subtitle,
      description: description ?? this.description,
      category: category ?? this.category,
      material: material ?? this.material,
      finishAndColor: finishAndColor ?? this.finishAndColor,
      giCluster: giCluster ?? this.giCluster,
      giRegNumber: giRegNumber ?? this.giRegNumber,
      clusterCode: clusterCode ?? this.clusterCode,
      diameterIn: diameterIn ?? this.diameterIn,
      heightIn: heightIn ?? this.heightIn,
      estWeightGrams: estWeightGrams ?? this.estWeightGrams,
      packagingBox: packagingBox ?? this.packagingBox,
      rawMaterialsCost: rawMaterialsCost ?? this.rawMaterialsCost,
      laborCost: laborCost ?? this.laborCost,
      clusterOverheadCost: clusterOverheadCost ?? this.clusterOverheadCost,
      fairProfitCost: fairProfitCost ?? this.fairProfitCost,
      basePrice: basePrice ?? this.basePrice,
      wholesaleMoq: wholesaleMoq ?? this.wholesaleMoq,
      dailyCapacityPcs: dailyCapacityPcs ?? this.dailyCapacityPcs,
      leadTime: leadTime ?? this.leadTime,
      photoUrl: photoUrl ?? this.photoUrl,
      secondaryPhotoUrl: secondaryPhotoUrl ?? this.secondaryPhotoUrl,
      digitalListingId: digitalListingId ?? this.digitalListingId,
      voiceClipTranscription:
          voiceClipTranscription ?? this.voiceClipTranscription,
      isPublished: isPublished ?? this.isPublished,
      isOndcSynced: isOndcSynced ?? this.isOndcSynced,
      isHunarSangamLive: isHunarSangamLive ?? this.isHunarSangamLive,
      isWhatsAppReady: isWhatsAppReady ?? this.isWhatsAppReady,
    );
  }
}
