// lib/models/order_model.dart

class OrderItemModel {
  final String id;
  final String orderId;
  final String? productId;
  final String productName;
  final int quantity;
  final double price;

  const OrderItemModel({
    required this.id,
    required this.orderId,
    this.productId,
    required this.productName,
    required this.quantity,
    required this.price,
  });

  factory OrderItemModel.fromJson(Map<String, dynamic> json) {
    return OrderItemModel(
      id: json['id'] as String? ?? '',
      orderId: json['order_id'] as String? ?? '',
      productId: json['product_id'] as String?,
      productName: json['product_name'] as String? ?? 'Handmade Craft',
      quantity: json['quantity'] as int? ?? 1,
      price: (json['price'] as num?)?.toDouble() ?? 0.0,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'order_id': orderId,
      'product_id': productId,
      'product_name': productName,
      'quantity': quantity,
      'price': price,
    };
  }
}

class OrderModel {
  final String id;
  final String orderNumber;
  final String artisanId;
  final String? buyerId;
  final String buyerName;
  final double totalAmount;
  final String status; // pending, accepted, in_production, ready, completed, rejected
  final double escrowAmount;
  final int unitsTotal;
  final int unitsCompleted;
  final DateTime? dispatchDate;
  final List<OrderItemModel> items;
  final DateTime createdAt;
  final DateTime updatedAt;

  const OrderModel({
    required this.id,
    required this.orderNumber,
    required this.artisanId,
    this.buyerId,
    required this.buyerName,
    required this.totalAmount,
    this.status = 'pending',
    this.escrowAmount = 0.0,
    this.unitsTotal = 1,
    this.unitsCompleted = 0,
    this.dispatchDate,
    this.items = const [],
    required this.createdAt,
    required this.updatedAt,
  });

  factory OrderModel.fromJson(Map<String, dynamic> json) {
    var rawItems = json['order_items'] as List<dynamic>? ?? [];
    List<OrderItemModel> parsedItems = rawItems
        .map((item) => OrderItemModel.fromJson(item as Map<String, dynamic>))
        .toList();

    return OrderModel(
      id: json['id'] as String? ?? '',
      orderNumber: json['order_number'] as String? ?? 'PO-2026-8891',
      artisanId: json['artisan_id'] as String? ?? '22222222-2222-2222-2222-222222222222',
      buyerId: json['buyer_id'] as String?,
      buyerName: json['buyer_name'] as String? ?? 'Heritage Handcrafts Retail',
      totalAmount: (json['total_amount'] as num?)?.toDouble() ?? 14000.0,
      status: json['status'] as String? ?? 'in_production',
      escrowAmount: (json['escrow_amount'] as num?)?.toDouble() ?? 5600.0,
      unitsTotal: json['units_total'] as int? ?? 50,
      unitsCompleted: json['units_completed'] as int? ?? 30,
      dispatchDate: json['dispatch_date'] != null
          ? DateTime.tryParse(json['dispatch_date'] as String)
          : null,
      items: parsedItems,
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
      'order_number': orderNumber,
      'artisan_id': artisanId,
      'buyer_id': buyerId,
      'buyer_name': buyerName,
      'total_amount': totalAmount,
      'status': status,
      'escrow_amount': escrowAmount,
      'units_total': unitsTotal,
      'units_completed': unitsCompleted,
      'dispatch_date': dispatchDate?.toIso8601String(),
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }

  OrderModel copyWith({
    String? id,
    String? orderNumber,
    String? artisanId,
    String? buyerId,
    String? buyerName,
    double? totalAmount,
    String? status,
    double? escrowAmount,
    int? unitsTotal,
    int? unitsCompleted,
    DateTime? dispatchDate,
    List<OrderItemModel>? items,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return OrderModel(
      id: id ?? this.id,
      orderNumber: orderNumber ?? this.orderNumber,
      artisanId: artisanId ?? this.artisanId,
      buyerId: buyerId ?? this.buyerId,
      buyerName: buyerName ?? this.buyerName,
      totalAmount: totalAmount ?? this.totalAmount,
      status: status ?? this.status,
      escrowAmount: escrowAmount ?? this.escrowAmount,
      unitsTotal: unitsTotal ?? this.unitsTotal,
      unitsCompleted: unitsCompleted ?? this.unitsCompleted,
      dispatchDate: dispatchDate ?? this.dispatchDate,
      items: items ?? this.items,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}

class OrderRequestModel {
  final String id;
  final String artisanId;
  final String? buyerId;
  final String buyerName;
  final String buyerLocation;
  final String? productId;
  final String productName;
  final int quantity;
  final double unitPrice;
  final double totalAmount;
  final String message;
  final String status; // pending, accepted, rejected
  final DateTime createdAt;
  final DateTime updatedAt;

  const OrderRequestModel({
    required this.id,
    required this.artisanId,
    this.buyerId,
    required this.buyerName,
    this.buyerLocation = 'New Delhi',
    this.productId,
    required this.productName,
    required this.quantity,
    required this.unitPrice,
    required this.totalAmount,
    this.message = '',
    this.status = 'pending',
    required this.createdAt,
    required this.updatedAt,
  });

  factory OrderRequestModel.fromJson(Map<String, dynamic> json) {
    return OrderRequestModel(
      id: json['id'] as String? ?? '',
      artisanId: json['artisan_id'] as String? ?? '22222222-2222-2222-2222-222222222222',
      buyerId: json['buyer_id'] as String?,
      buyerName: json['buyer_name'] as String? ?? 'FabIndia Sourcing Hub',
      buyerLocation: json['buyer_location'] as String? ?? 'New Delhi',
      productId: json['product_id'] as String?,
      productName: json['product_name'] as String? ?? 'Handmade Woven Bamboo Fruit Basket',
      quantity: json['quantity'] as int? ?? 400,
      unitPrice: (json['unit_price'] as num?)?.toDouble() ?? 280.0,
      totalAmount: (json['total_amount'] as num?)?.toDouble() ?? 112000.0,
      message: json['message'] as String? ?? '',
      status: json['status'] as String? ?? 'pending',
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
      'buyer_id': buyerId,
      'buyer_name': buyerName,
      'buyer_location': buyerLocation,
      'product_id': productId,
      'product_name': productName,
      'quantity': quantity,
      'unit_price': unitPrice,
      'total_amount': totalAmount,
      'message': message,
      'status': status,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }
}
