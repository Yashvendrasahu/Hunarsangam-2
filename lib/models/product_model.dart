// lib/models/product_model.dart

class ProductImageModel {
  final String id;
  final String productId;
  final String imageUrl;
  final bool isPrimary;
  final DateTime createdAt;

  const ProductImageModel({
    required this.id,
    required this.productId,
    required this.imageUrl,
    this.isPrimary = false,
    required this.createdAt,
  });

  factory ProductImageModel.fromJson(Map<String, dynamic> json) {
    return ProductImageModel(
      id: json['id'] as String? ?? '',
      productId: json['product_id'] as String? ?? '',
      imageUrl: json['image_url'] as String? ?? '',
      isPrimary: json['is_primary'] as bool? ?? false,
      createdAt: json['created_at'] != null
          ? DateTime.tryParse(json['created_at'] as String) ?? DateTime.now()
          : DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'product_id': productId,
      'image_url': imageUrl,
      'is_primary': isPrimary,
      'created_at': createdAt.toIso8601String(),
    };
  }
}

class ProductModel {
  final String id;
  final String artisanId;
  final String name;
  final String category;
  final String description;
  final String material;
  final String craftType;
  final double price;
  final int stock;
  final String status;
  final double diameterIn;
  final double heightIn;
  final int weightGrams;
  final bool isOndcSynced;
  final bool isGiCertified;
  final List<ProductImageModel> images;
  final DateTime createdAt;
  final DateTime updatedAt;

  const ProductModel({
    required this.id,
    required this.artisanId,
    required this.name,
    required this.category,
    this.description = '',
    this.material = '',
    this.craftType = '',
    required this.price,
    this.stock = 0,
    this.status = 'published',
    this.diameterIn = 12.4,
    this.heightIn = 6.2,
    this.weightGrams = 420,
    this.isOndcSynced = true,
    this.isGiCertified = true,
    this.images = const [],
    required this.createdAt,
    required this.updatedAt,
  });

  String get primaryImageUrl {
    if (images.isNotEmpty) {
      final primary = images.firstWhere((img) => img.isPrimary, orElse: () => images.first);
      return primary.imageUrl;
    }
    return 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80';
  }

  factory ProductModel.fromJson(Map<String, dynamic> json) {
    var rawImages = json['product_images'] as List<dynamic>? ?? [];
    List<ProductImageModel> parsedImages = rawImages
        .map((img) => ProductImageModel.fromJson(img as Map<String, dynamic>))
        .toList();

    return ProductModel(
      id: json['id'] as String? ?? '',
      artisanId: json['artisan_id'] as String? ?? '22222222-2222-2222-2222-222222222222',
      name: json['name'] as String? ?? 'Handmade Bamboo Craft',
      category: json['category'] as String? ?? 'Home & Kitchen / Dining',
      description: json['description'] as String? ?? '',
      material: json['material'] as String? ?? '100% Natural River Bamboo',
      craftType: json['craft_type'] as String? ?? 'Bamboo Weaving',
      price: (json['price'] as num?)?.toDouble() ?? 280.0,
      stock: json['stock'] as int? ?? 10,
      status: json['status'] as String? ?? 'published',
      diameterIn: (json['diameter_in'] as num?)?.toDouble() ?? 12.4,
      heightIn: (json['height_in'] as num?)?.toDouble() ?? 6.2,
      weightGrams: json['weight_grams'] as int? ?? 420,
      isOndcSynced: json['is_ondc_synced'] as bool? ?? true,
      isGiCertified: json['is_gi_certified'] as bool? ?? true,
      images: parsedImages,
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
      'artisan_id': artisanId,
      'name': name,
      'category': category,
      'description': description,
      'material': material,
      'craft_type': craftType,
      'price': price,
      'stock': stock,
      'status': status,
      'diameter_in': diameterIn,
      'height_in': heightIn,
      'weight_grams': weightGrams,
      'is_ondc_synced': isOndcSynced,
      'is_gi_certified': isGiCertified,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }

  ProductModel copyWith({
    String? id,
    String? artisanId,
    String? name,
    String? category,
    String? description,
    String? material,
    String? craftType,
    double? price,
    int? stock,
    String? status,
    double? diameterIn,
    double? heightIn,
    int? weightGrams,
    bool? isOndcSynced,
    bool? isGiCertified,
    List<ProductImageModel>? images,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return ProductModel(
      id: id ?? this.id,
      artisanId: artisanId ?? this.artisanId,
      name: name ?? this.name,
      category: category ?? this.category,
      description: description ?? this.description,
      material: material ?? this.material,
      craftType: craftType ?? this.craftType,
      price: price ?? this.price,
      stock: stock ?? this.stock,
      status: status ?? this.status,
      diameterIn: diameterIn ?? this.diameterIn,
      heightIn: heightIn ?? this.heightIn,
      weightGrams: weightGrams ?? this.weightGrams,
      isOndcSynced: isOndcSynced ?? this.isOndcSynced,
      isGiCertified: isGiCertified ?? this.isGiCertified,
      images: images ?? this.images,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}
