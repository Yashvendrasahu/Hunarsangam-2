// lib/models/notification_model.dart

class NotificationModel {
  final String id;
  final String? userId;
  final String artisanId;
  final String title;
  final String message;
  final String type; // order, collaboration, production, payment, system
  final bool isRead;
  final DateTime createdAt;

  const NotificationModel({
    required this.id,
    this.userId,
    required this.artisanId,
    required this.title,
    required this.message,
    this.type = 'order',
    this.isRead = false,
    required this.createdAt,
  });

  factory NotificationModel.fromJson(Map<String, dynamic> json) {
    return NotificationModel(
      id: json['id'] as String? ?? '',
      userId: json['user_id'] as String?,
      artisanId: json['artisan_id'] as String? ?? '22222222-2222-2222-2222-222222222222',
      title: json['title'] as String? ?? 'New Notification',
      message: json['message'] as String? ?? '',
      type: json['type'] as String? ?? 'order',
      isRead: json['is_read'] as bool? ?? false,
      createdAt: json['created_at'] != null
          ? DateTime.tryParse(json['created_at'] as String) ?? DateTime.now()
          : DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'user_id': userId,
      'artisan_id': artisanId,
      'title': title,
      'message': message,
      'type': type,
      'is_read': isRead,
      'created_at': createdAt.toIso8601String(),
    };
  }

  NotificationModel copyWith({
    String? id,
    String? userId,
    String? artisanId,
    String? title,
    String? message,
    String? type,
    bool? isRead,
    DateTime? createdAt,
  }) {
    return NotificationModel(
      id: id ?? this.id,
      userId: userId ?? this.userId,
      artisanId: artisanId ?? this.artisanId,
      title: title ?? this.title,
      message: message ?? this.message,
      type: type ?? this.type,
      isRead: isRead ?? this.isRead,
      createdAt: createdAt ?? this.createdAt,
    );
  }
}
