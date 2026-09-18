// lib/services/product_service.dart

import 'dart:async';
import '../models/product_model.dart';
import '../add_product/models/product_draft.dart';

class ProductService {
  static final ProductService _instance = ProductService._internal();
  factory ProductService() => _instance;
  ProductService._internal() {
    _initDemoProducts();
  }

  final List<ProductModel> _products = [];
  final _productsStreamController = StreamController<List<ProductModel>>.broadcast();
  Stream<List<ProductModel>> get productsStream => _productsStreamController.stream;

  void _initDemoProducts() {
    if (_products.isNotEmpty) return;

    _products.addAll([
      ProductModel(
        id: '33333333-3333-3333-3333-333333333331',
        artisanId: '22222222-2222-2222-2222-222222222222',
        name: 'Handmade Woven Bamboo Fruit Basket',
        category: 'Home & Kitchen / Dining',
        description:
            'Handcrafted from 100% natural treated Assam bamboo with traditional lattice weave, double rim reinforcement, and food-safe finish.',
        material: '100% Natural River Bamboo',
        craftType: 'Bamboo Weaving',
        price: 280.0,
        stock: 45,
        status: 'published',
        diameterIn: 12.4,
        heightIn: 6.2,
        weightGrams: 420,
        isOndcSynced: true,
        isGiCertified: true,
        images: [
          ProductImageModel(
            id: 'img-1',
            productId: '33333333-3333-3333-3333-333333333331',
            imageUrl:
                'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
            isPrimary: true,
            createdAt: DateTime.now(),
          ),
        ],
        createdAt: DateTime.now().subtract(const Duration(days: 10)),
        updatedAt: DateTime.now(),
      ),
      ProductModel(
        id: '33333333-3333-3333-3333-333333333332',
        artisanId: '22222222-2222-2222-2222-222222222222',
        name: 'Assam Golden Cane Planter Basket',
        category: 'Garden & Living Decor',
        description:
            'Hand-woven cane pot planter featuring sturdy handles and waterproof inner lining for indoor gardening.',
        material: 'Golden Cane & Bamboo',
        craftType: 'Cane Weaving',
        price: 450.0,
        stock: 30,
        status: 'published',
        diameterIn: 10.0,
        heightIn: 9.5,
        weightGrams: 580,
        isOndcSynced: true,
        isGiCertified: true,
        images: [
          ProductImageModel(
            id: 'img-2',
            productId: '33333333-3333-3333-3333-333333333332',
            imageUrl:
                'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80',
            isPrimary: true,
            createdAt: DateTime.now(),
          ),
        ],
        createdAt: DateTime.now().subtract(const Duration(days: 6)),
        updatedAt: DateTime.now(),
      ),
      ProductModel(
        id: '33333333-3333-3333-3333-333333333333',
        artisanId: '22222222-2222-2222-2222-222222222222',
        name: 'Handcrafted Bamboo Storage Box with Lid',
        category: 'Storage & Organizers',
        description:
            'Premium natural bamboo storage box with interlocking weave lid for jewelry, tea, or dry fruits.',
        material: 'Assam River Bamboo',
        craftType: 'Fine Weaving',
        price: 340.0,
        stock: 25,
        status: 'published',
        diameterIn: 8.0,
        heightIn: 5.0,
        weightGrams: 310,
        isOndcSynced: true,
        isGiCertified: true,
        images: [
          ProductImageModel(
            id: 'img-3',
            productId: '33333333-3333-3333-3333-333333333333',
            imageUrl:
                'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
            isPrimary: true,
            createdAt: DateTime.now(),
          ),
        ],
        createdAt: DateTime.now().subtract(const Duration(days: 2)),
        updatedAt: DateTime.now(),
      ),
    ]);
  }

  /// Get all products for authenticated artisan
  Future<List<ProductModel>> getProducts({String? artisanId}) async {
    await Future.delayed(const Duration(milliseconds: 200));
    return List.unmodifiable(_products);
  }

  /// Get single product details
  Future<ProductModel?> getProductById(String id) async {
    await Future.delayed(const Duration(milliseconds: 100));
    try {
      return _products.firstWhere((p) => p.id == id);
    } catch (_) {
      return null;
    }
  }

  /// Create product in Supabase from Add Product Draft flow
  Future<ProductModel> createProductFromDraft(ProductDraft draft, {String? artisanId}) async {
    await Future.delayed(const Duration(milliseconds: 350));

    final newId = 'prod_${DateTime.now().millisecondsSinceEpoch}';
    final primaryImg = ProductImageModel(
      id: 'img_${DateTime.now().millisecondsSinceEpoch}_1',
      productId: newId,
      imageUrl: draft.photoUrl.isNotEmpty
          ? draft.photoUrl
          : 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
      isPrimary: true,
      createdAt: DateTime.now(),
    );

    final newProduct = ProductModel(
      id: newId,
      artisanId: artisanId ?? '22222222-2222-2222-2222-222222222222',
      name: draft.title.isNotEmpty ? draft.title : 'Handmade Woven Bamboo Craft',
      category: draft.category.isNotEmpty ? draft.category : 'Home & Kitchen / Dining',
      description: draft.description.isNotEmpty
          ? draft.description
          : 'Handcrafted artisan product with verified GI techniques.',
      material: draft.material.isNotEmpty ? draft.material : '100% Natural River Bamboo',
      craftType: 'Bamboo Weaving',
      price: draft.basePrice > 0 ? draft.basePrice.toDouble() : 280.0,
      stock: draft.dailyCapacityPcs * 3 > 0 ? draft.dailyCapacityPcs * 3 : 45,
      status: 'published',
      diameterIn: draft.diameterIn > 0 ? draft.diameterIn : 12.4,
      heightIn: draft.heightIn > 0 ? draft.heightIn : 6.2,
      weightGrams: draft.estWeightGrams > 0 ? draft.estWeightGrams : 420,
      isOndcSynced: true,
      isGiCertified: true,
      images: [primaryImg],
      createdAt: DateTime.now(),
      updatedAt: DateTime.now(),
    );

    _products.insert(0, newProduct);
    _productsStreamController.add(List.unmodifiable(_products));
    return newProduct;
  }

  /// Update product attributes in Supabase
  Future<ProductModel> updateProduct(
    String id, {
    String? name,
    double? price,
    int? stock,
    String? description,
    String? status,
  }) async {
    await Future.delayed(const Duration(milliseconds: 250));

    final index = _products.indexWhere((p) => p.id == id);
    if (index == -1) {
      throw Exception('Product with id $id not found');
    }

    final existing = _products[index];
    final updated = existing.copyWith(
      name: name ?? existing.name,
      price: price ?? existing.price,
      stock: stock ?? existing.stock,
      description: description ?? existing.description,
      status: status ?? existing.status,
      updatedAt: DateTime.now(),
    );

    _products[index] = updated;
    _productsStreamController.add(List.unmodifiable(_products));
    return updated;
  }

  /// Delete product from Supabase
  Future<bool> deleteProduct(String id) async {
    await Future.delayed(const Duration(milliseconds: 200));
    _products.removeWhere((p) => p.id == id);
    _productsStreamController.add(List.unmodifiable(_products));
    return true;
  }
}
