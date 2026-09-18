// lib/services/supabase_service.dart
import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:supabase_flutter/supabase_flutter.dart';
import 'supabase_config.dart';

class SupabaseService {
  static final SupabaseService _instance = SupabaseService._internal();
  factory SupabaseService() => _instance;
  SupabaseService._internal();

  bool _initialized = false;
  bool get isInitialized => _initialized;

  SupabaseClient? get client {
    if (!_initialized || !SupabaseConfig.isConfigured) return null;
    try {
      return Supabase.instance.client;
    } catch (_) {
      return null;
    }
  }

  /// Initializes Supabase Flutter client
  Future<void> init() async {
    if (_initialized) return;

    if (!SupabaseConfig.isConfigured) {
      if (kDebugMode) {
        print('[SupabaseService] Offline mode: Waiting for credentials.');
      }
      return;
    }

    try {
      await Supabase.initialize(
        url: SupabaseConfig.supabaseUrl,
        anonKey: SupabaseConfig.supabaseAnonKey,
      );
      _initialized = true;
      if (kDebugMode) {
        print('[SupabaseService] Connected to live Supabase: ${SupabaseConfig.supabaseUrl}');
      }
    } catch (e) {
      if (kDebugMode) {
        print('[SupabaseService] Init notice: $e');
      }
    }
  }

  // ---------------------------------------------------------
  // REST API Client Headers
  // ---------------------------------------------------------

  Map<String, String> get _headers => {
        'apikey': SupabaseConfig.supabaseAnonKey,
        'Authorization': 'Bearer ${SupabaseConfig.supabaseAnonKey}',
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      };

  // ---------------------------------------------------------
  // Generic Query & Mutation Helpers
  // ---------------------------------------------------------

  Future<List<Map<String, dynamic>>> queryTable(
    String tableName, {
    String select = '*',
    Map<String, String>? filters,
    int? limit,
    String? order,
  }) async {
    if (!SupabaseConfig.isConfigured) return [];

    try {
      var uri = Uri.parse('${SupabaseConfig.supabaseUrl}/rest/v1/$tableName?select=$select');
      final queryParams = Map<String, String>.from(uri.queryParameters);
      if (filters != null) queryParams.addAll(filters);
      if (limit != null) queryParams['limit'] = limit.toString();
      if (order != null) queryParams['order'] = order;
      uri = uri.replace(queryParameters: queryParams);

      final response = await http.get(uri, headers: _headers);
      if (response.statusCode >= 200 && response.statusCode < 300) {
        final List<dynamic> data = jsonDecode(response.body);
        return data.cast<Map<String, dynamic>>();
      } else {
        if (kDebugMode) {
          print('[SupabaseService] Query $tableName error ${response.statusCode}: ${response.body}');
        }
        return [];
      }
    } catch (e) {
      if (kDebugMode) {
        print('[SupabaseService] Network error on $tableName: $e');
      }
      return [];
    }
  }

  Future<Map<String, dynamic>?> insertRecord(
    String tableName,
    Map<String, dynamic> record,
  ) async {
    if (!SupabaseConfig.isConfigured) {
      return {'id': 'mock_${DateTime.now().millisecondsSinceEpoch}', ...record};
    }

    try {
      final uri = Uri.parse('${SupabaseConfig.supabaseUrl}/rest/v1/$tableName');
      final response = await http.post(
        uri,
        headers: _headers,
        body: jsonEncode(record),
      );

      if (response.statusCode >= 200 && response.statusCode < 300) {
        final data = jsonDecode(response.body);
        if (data is List && data.isNotEmpty) {
          return data.first as Map<String, dynamic>;
        }
        return record;
      } else {
        if (kDebugMode) {
          print('[SupabaseService] Insert $tableName error ${response.statusCode}: ${response.body}');
        }
        return null;
      }
    } catch (e) {
      if (kDebugMode) {
        print('[SupabaseService] Network error inserting into $tableName: $e');
      }
      return null;
    }
  }

  // ---------------------------------------------------------
  // 1. Profiles Table Operations
  // ---------------------------------------------------------

  Future<List<Map<String, dynamic>>> getProfiles({String? role}) async {
    final filters = <String, String>{};
    if (role != null) filters['role'] = 'eq.$role';
    return await queryTable('profiles', filters: filters);
  }

  Future<Map<String, dynamic>?> getProfileById(String id) async {
    final res = await queryTable('profiles', filters: {'id': 'eq.$id'}, limit: 1);
    return res.isNotEmpty ? res.first : null;
  }

  Future<Map<String, dynamic>?> createProfile(Map<String, dynamic> profileData) async {
    return await insertRecord('profiles', profileData);
  }

  // ---------------------------------------------------------
  // 2. Artisans Table Operations
  // ---------------------------------------------------------

  Future<List<Map<String, dynamic>>> getArtisans({String? craftType}) async {
    final filters = <String, String>{};
    if (craftType != null && craftType.isNotEmpty) {
      filters['craft_type'] = 'ilike.%$craftType%';
    }
    return await queryTable('artisans', filters: filters);
  }

  Future<Map<String, dynamic>?> getArtisanById(String id) async {
    final res = await queryTable('artisans', filters: {'id': 'eq.$id'}, limit: 1);
    return res.isNotEmpty ? res.first : null;
  }

  Future<Map<String, dynamic>?> registerArtisan(Map<String, dynamic> artisanData) async {
    return await insertRecord('artisans', artisanData);
  }

  // ---------------------------------------------------------
  // 3. Products & Product Images Operations
  // ---------------------------------------------------------

  Future<List<Map<String, dynamic>>> getProducts({
    String? category,
    String? craftType,
    String? artisanId,
  }) async {
    final filters = <String, String>{};
    if (category != null && category.isNotEmpty) {
      filters['category'] = 'ilike.%$category%';
    }
    if (craftType != null && craftType.isNotEmpty) {
      filters['craft_type'] = 'ilike.%$craftType%';
    }
    if (artisanId != null && artisanId.isNotEmpty) {
      filters['artisan_id'] = 'eq.$artisanId';
    }
    return await queryTable('products', filters: filters);
  }

  Future<Map<String, dynamic>?> addProduct(Map<String, dynamic> productData) async {
    return await insertRecord('products', productData);
  }

  Future<List<Map<String, dynamic>>> getProductImages(String productId) async {
    return await queryTable('product_images', filters: {'product_id': 'eq.$productId'});
  }

  // ---------------------------------------------------------
  // 4. Orders & Order Items Operations
  // ---------------------------------------------------------

  Future<List<Map<String, dynamic>>> getOrders({
    String? artisanId,
    String? buyerId,
    String? status,
  }) async {
    final filters = <String, String>{};
    if (artisanId != null) filters['artisan_id'] = 'eq.$artisanId';
    if (buyerId != null) filters['buyer_id'] = 'eq.$buyerId';
    if (status != null) filters['status'] = 'eq.$status';
    return await queryTable('orders', filters: filters, order: 'created_at.desc');
  }

  Future<Map<String, dynamic>?> createOrder(Map<String, dynamic> orderData) async {
    return await insertRecord('orders', orderData);
  }

  Future<List<Map<String, dynamic>>> getOrderItems(String orderId) async {
    return await queryTable('order_items', filters: {'order_id': 'eq.$orderId'});
  }

  // ---------------------------------------------------------
  // 5. Production Updates (Milestones)
  // ---------------------------------------------------------

  Future<List<Map<String, dynamic>>> getProductionUpdates(String orderId) async {
    return await queryTable(
      'production_updates',
      filters: {'order_id': 'eq.$orderId'},
      order: 'created_at.asc',
    );
  }

  Future<Map<String, dynamic>?> addProductionUpdate(Map<String, dynamic> updateData) async {
    return await insertRecord('production_updates', updateData);
  }

  // ---------------------------------------------------------
  // 6. Notifications
  // ---------------------------------------------------------

  Future<List<Map<String, dynamic>>> getNotifications({String? artisanId, String? userId}) async {
    final filters = <String, String>{};
    if (artisanId != null) filters['artisan_id'] = 'eq.$artisanId';
    if (userId != null) filters['user_id'] = 'eq.$userId';
    return await queryTable('notifications', filters: filters, order: 'created_at.desc');
  }

  // ---------------------------------------------------------
  // 7. Python FastAPI AI Service Gateway
  // ---------------------------------------------------------

  Future<Map<String, dynamic>> calculateFairPriceAI({
    required String craftCategory,
    required double materialCost,
    required double laborHours,
    String artisanTier = 'artisan',
    String complexity = 'medium',
    int batchSize = 1,
  }) async {
    try {
      final uri = Uri.parse('${SupabaseConfig.aiBackendUrl}/api/ai/fair-price-estimator');
      final response = await http.post(
        uri,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({
          'craft_category': craftCategory,
          'material_cost': materialCost,
          'labor_hours': laborHours,
          'artisan_tier': artisanTier,
          'complexity': complexity,
          'batch_size': batchSize,
        }),
      );

      if (response.statusCode == 200) {
        return jsonDecode(response.body) as Map<String, dynamic>;
      }
    } catch (e) {
      if (kDebugMode) {
        print('[SupabaseService] AI Service fallback: $e');
      }
    }

    // Heuristic fallback
    final hourly = artisanTier == 'master' ? 240.0 : 160.0;
    final labor = laborHours * hourly * (complexity == 'high' ? 1.5 : 1.2);
    final base = materialCost + labor;
    final payout = base * 1.22;
    return {
      'fair_hourly_wage': hourly,
      'total_labor_cost': labor,
      'material_cost_per_unit': materialCost,
      'artisan_recommended_payout': payout,
      'bulk_unit_price': payout * 0.92,
      'suggested_retail_price': payout * 1.65,
      'fair_margin_percent': 22.0,
      'breakdown_notes': 'Artisan dignity margin calculated with fair living wage benchmark.',
      'currency': 'INR',
    };
  }

  Future<Map<String, dynamic>> parseVoiceQueryAI(String transcript) async {
    try {
      final uri = Uri.parse('${SupabaseConfig.aiBackendUrl}/api/ai/voice-to-query');
      final response = await http.post(
        uri,
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'transcript': transcript}),
      );

      if (response.statusCode == 200) {
        return jsonDecode(response.body) as Map<String, dynamic>;
      }
    } catch (e) {
      if (kDebugMode) {
        print('[SupabaseService] Voice Query AI fallback: $e');
      }
    }

    return {
      'craft_detected': 'Terracotta & Blue Pottery',
      'quantity_detected': 100,
      'region_detected': 'Pan-India',
      'timeline_detected': 'Standard (3-4 weeks)',
      'estimated_budget_min': 25000.0,
      'estimated_budget_max': 75000.0,
    };
  }
}
