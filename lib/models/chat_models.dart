// lib/models/chat_models.dart
// Production-grade data models for HunarSangam real-time bilingual chat

class ChatConversation {
  final String id;
  final String orderId;
  final String orderNumber;
  final String orderTitle;
  final String buyerName;
  final String buyerCompany;
  final String artisanName;
  final String artisanCraft;
  final String artisanAvatar;
  final String buyerAvatar;
  final String lastMessage;
  final String lastMessageTime;
  final String escrowAmount;
  final String escrowStatus;
  final String deliveryDate;
  final int unreadArtisan;
  final int unreadBuyer;
  final DateTime updatedAt;

  const ChatConversation({
    required this.id,
    this.orderId = '',
    this.orderNumber = 'HS1048',
    this.orderTitle = '50 pcs Cane Baskets',
    this.buyerName = 'Heritage Handcrafts',
    this.buyerCompany = 'FabIndia Sourcing Partner',
    this.artisanName = 'Ramu Kumar',
    this.artisanCraft = 'Bamboo & Cane Weaver',
    this.artisanAvatar = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    this.buyerAvatar = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150',
    this.lastMessage = 'Can you confirm if all 50 pieces will have the lacquer finish?',
    this.lastMessageTime = '10:42 AM',
    this.escrowAmount = '₹22,500',
    this.escrowStatus = 'Funds Locked in Escrow',
    this.deliveryDate = '28 Sept',
    this.unreadArtisan = 1,
    this.unreadBuyer = 0,
    required this.updatedAt,
  });

  factory ChatConversation.fromJson(Map<String, dynamic> json) {
    return ChatConversation(
      id: json['id'] as String? ?? '',
      orderId: json['order_id'] as String? ?? '',
      orderNumber: json['order_number'] as String? ?? 'HS1048',
      orderTitle: json['order_title'] as String? ?? 'Bulk Order',
      buyerName: json['buyer_name'] as String? ?? 'Enterprise Buyer',
      buyerCompany: json['buyer_company'] as String? ?? 'Wholesale Partner',
      artisanName: json['artisan_name'] as String? ?? 'Master Artisan',
      artisanCraft: json['artisan_craft'] as String? ?? 'Traditional Craft',
      artisanAvatar: json['artisan_avatar'] as String? ?? '',
      buyerAvatar: json['buyer_avatar'] as String? ?? '',
      lastMessage: json['last_message'] as String? ?? '',
      lastMessageTime: json['last_message_time'] as String? ?? '',
      escrowAmount: json['escrow_amount'] as String? ?? '₹0',
      escrowStatus: json['escrow_status'] as String? ?? 'Active Escrow',
      deliveryDate: json['delivery_date'] as String? ?? '',
      unreadArtisan: json['unread_artisan'] as int? ?? 0,
      unreadBuyer: json['unread_buyer'] as int? ?? 0,
      updatedAt: json['updated_at'] != null
          ? DateTime.tryParse(json['updated_at'].toString()) ?? DateTime.now()
          : DateTime.now(),
    );
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'order_id': orderId,
        'order_number': orderNumber,
        'order_title': orderTitle,
        'buyer_name': buyerName,
        'buyer_company': buyerCompany,
        'artisan_name': artisanName,
        'artisan_craft': artisanCraft,
        'artisan_avatar': artisanAvatar,
        'buyer_avatar': buyerAvatar,
        'last_message': lastMessage,
        'last_message_time': lastMessageTime,
        'escrow_amount': escrowAmount,
        'escrow_status': escrowStatus,
        'delivery_date': deliveryDate,
        'unread_artisan': unreadArtisan,
        'unread_buyer': unreadBuyer,
        'updated_at': updatedAt.toIso8601String(),
      };
}

class ChatMessage {
  final String id;
  final String conversationId;
  final String senderId;
  final String senderType; // 'buyer' | 'artisan' | 'system'
  final String senderName;
  final String content;
  final String? translatedContent;
  final String? sourceLanguage;
  final String? targetLanguage;
  final bool isAudio;
  final String? messageType;
  final String? audioDuration;
  final bool isVerifiedProof;
  final String? photoUrl;
  final String? orderId;
  final String time;
  final DateTime? createdAt;
  final bool isRead;

  const ChatMessage({
    required this.id,
    required this.conversationId,
    this.senderId = '',
    required this.senderType,
    required this.senderName,
    required this.content,
    this.translatedContent,
    this.sourceLanguage,
    this.targetLanguage,
    this.isAudio = false,
    this.messageType,
    this.audioDuration,
    this.isVerifiedProof = false,
    this.photoUrl,
    this.orderId,
    this.time = 'Just now',
    this.createdAt,
    this.isRead = false,
  });

  bool get isArtisan => senderType == 'artisan';
  bool get isBuyer => senderType == 'buyer';
  bool get isSystem => senderType == 'system';

  factory ChatMessage.fromJson(Map<String, dynamic> json) {
    return ChatMessage(
      id: json['id'] as String? ?? '',
      conversationId: json['conversation_id'] as String? ?? '',
      senderId: json['sender_id'] as String? ?? '',
      senderType: json['sender_type'] as String? ?? 'artisan',
      senderName: json['sender_name'] as String? ?? '',
      content: json['content'] as String? ?? '',
      translatedContent: json['translated_content'] as String?,
      sourceLanguage: json['source_language'] as String?,
      targetLanguage: json['target_language'] as String?,
      isAudio: json['is_audio'] as bool? ?? false,
      audioDuration: json['audio_duration'] as String?,
      isVerifiedProof: json['is_verified_proof'] as bool? ?? false,
      photoUrl: json['photo_url'] as String?,
      orderId: json['order_id'] as String?,
      time: json['time'] as String? ?? 'Just now',
      createdAt: json['created_at'] != null
          ? DateTime.tryParse(json['created_at'].toString())
          : null,
      isRead: json['is_read'] as bool? ?? false,
    );
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'conversation_id': conversationId,
        'sender_id': senderId,
        'sender_type': senderType,
        'sender_name': senderName,
        'content': content,
        'translated_content': translatedContent,
        'source_language': sourceLanguage,
        'target_language': targetLanguage,
        'is_audio': isAudio,
        'audio_duration': audioDuration,
        'is_verified_proof': isVerifiedProof,
        'photo_url': photoUrl,
        'order_id': orderId,
        'time': time,
        'created_at': (createdAt ?? DateTime.now()).toIso8601String(),
        'is_read': isRead,
      };
}

class ChatAiSuggestion {
  final String text;
  final String? _label;
  final String? translation;
  final String type; // 'quick_reply', 'technical_assurance', 'production_update'

  const ChatAiSuggestion({
    required this.text,
    String? label,
    this.translation,
    this.type = 'quick_reply',
  }) : _label = label;

  String get label => _label ?? (text.length > 28 ? '${text.substring(0, 28)}...' : text);
  String get textHindi => text;

  factory ChatAiSuggestion.fromJson(Map<String, dynamic> json) {
    return ChatAiSuggestion(
      text: json['text'] as String? ?? json['text_hindi'] as String? ?? '',
      label: json['label'] as String? ?? json['title'] as String?,
      translation: json['translation'] as String? ?? json['text_english'] as String?,
      type: json['type'] as String? ?? 'quick_reply',
    );
  }

  Map<String, dynamic> toJson() => {
        'text': text,
        'label': label,
        'translation': translation,
        'type': type,
      };
}
