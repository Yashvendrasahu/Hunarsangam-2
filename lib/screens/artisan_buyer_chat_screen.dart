// lib/screens/artisan_buyer_chat_screen.dart

import 'package:flutter/material.dart';
import '../models/chat_models.dart';
import '../services/chat_service.dart';

class ArtisanBuyerChatScreen extends StatefulWidget {
  final String conversationId;
  final String buyerName;
  final String orderId;
  final String orderTitle;
  final String escrowAmount;
  final String deliveryDate;
  final VoidCallback onBack;
  final VoidCallback? onEscrowTap;

  const ArtisanBuyerChatScreen({
    super.key,
    required this.conversationId,
    this.buyerName = 'FabIndia Retail Ltd.',
    this.orderId = 'PO-2026-8891',
    this.orderTitle = 'Handcrafted Bamboo Fruit Baskets (50 pcs)',
    this.escrowAmount = '₹5,600',
    this.deliveryDate = '28 Mar 2026',
    required this.onBack,
    this.onEscrowTap,
  });

  @override
  State<ArtisanBuyerChatScreen> createState() => _ArtisanBuyerChatScreenState();
}

class _ArtisanBuyerChatScreenState extends State<ArtisanBuyerChatScreen> {
  final TextEditingController _msgController = TextEditingController();
  final ChatService _chatService = ChatService();
  List<ChatMessage> _messages = [];

  @override
  void initState() {
    super.initState();
    _loadMessages();
  }

  void _loadMessages() async {
    final msgs = await _chatService.fetchMessages(widget.conversationId, userRole: 'artisan');
    if (mounted) {
      setState(() {
        _messages = msgs;
      });
    }
  }

  void _sendTextMessage() async {
    final text = _msgController.text.trim();
    if (text.isEmpty) return;
    _msgController.clear();

    await _chatService.sendMessage(
      conversationId: widget.conversationId,
      senderType: 'artisan',
      senderName: 'Artisan Ramu',
      senderId: 'artisan_1',
      content: text,
      orderId: widget.orderId,
    );
    _loadMessages();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
          onPressed: widget.onBack,
        ),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              widget.buyerName,
              style: const TextStyle(color: Color(0xFF2D2421), fontSize: 15, fontWeight: FontWeight.w800),
            ),
            Text(
              '${widget.orderId} • Live Auto-Translate Active',
              style: const TextStyle(color: Color(0xFF2E7D32), fontSize: 11, fontWeight: FontWeight.w600),
            ),
          ],
        ),
      ),
      body: Column(
        children: [
          // Escrow status bar
          InkWell(
            onTap: widget.onEscrowTap,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              color: const Color(0xFFFDECE8),
              child: Row(
                children: [
                  const Icon(Icons.lock_clock_outlined, color: Color(0xFFA84318), size: 18),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text(
                      'Escrow Advance Locked: ${widget.escrowAmount} • Dispatch by ${widget.deliveryDate}',
                      style: const TextStyle(color: Color(0xFFA84318), fontSize: 11.5, fontWeight: FontWeight.w700),
                    ),
                  ),
                  const Icon(Icons.chevron_right, color: Color(0xFFA84318), size: 18),
                ],
              ),
            ),
          ),
          Expanded(
            child: ListView.separated(
              padding: const EdgeInsets.all(16),
              itemCount: _messages.length,
              separatorBuilder: (_, __) => const SizedBox(height: 12),
              itemBuilder: (context, index) {
                final msg = _messages[index];
                final isMe = msg.senderType == 'artisan';

                return Align(
                  alignment: isMe ? Alignment.centerRight : Alignment.centerLeft,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width * 0.78),
                    decoration: BoxDecoration(
                      color: isMe ? const Color(0xFFA84318) : Colors.white,
                      borderRadius: BorderRadius.circular(16),
                      border: isMe ? null : Border.all(color: const Color(0xFFEADFD6)),
                    ),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          msg.content,
                          style: TextStyle(
                            color: isMe ? Colors.white : const Color(0xFF2D2421),
                            fontSize: 13,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        if (msg.translatedContent != null) ...[
                          const SizedBox(height: 4),
                          Text(
                            '🌐 ${msg.translatedContent}',
                            style: TextStyle(
                              color: isMe ? const Color(0xFFFFD4C2) : const Color(0xFFA84318),
                              fontSize: 11,
                              fontStyle: FontStyle.italic,
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                );
              },
            ),
          ),
          Container(
            padding: const EdgeInsets.all(12),
            color: Colors.white,
            child: SafeArea(
              child: Row(
                children: [
                  IconButton(
                    icon: const Icon(Icons.mic, color: Color(0xFFA84318)),
                    onPressed: () {
                      _msgController.text = 'नमस्ते! बांस की टोकरियों का काम प्रगति पर है।';
                      _sendTextMessage();
                    },
                  ),
                  Expanded(
                    child: TextField(
                      controller: _msgController,
                      decoration: InputDecoration(
                        hintText: 'Type reply (auto-translated)...',
                        hintStyle: const TextStyle(fontSize: 13, color: Color(0xFF8D6E63)),
                        filled: true,
                        fillColor: const Color(0xFFFAF6F2),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(24),
                          borderSide: BorderSide.none,
                        ),
                        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                      ),
                      onSubmitted: (_) => _sendTextMessage(),
                    ),
                  ),
                  const SizedBox(width: 8),
                  IconButton(
                    icon: const Icon(Icons.send, color: Color(0xFFA84318)),
                    onPressed: _sendTextMessage,
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
