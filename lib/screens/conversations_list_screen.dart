// lib/screens/conversations_list_screen.dart
// Production-grade Conversations & Order Messaging Hub for HunarSangam
// Allows Artisans and Enterprise Buyers to track all buyer-artisan communication,
// escrow guarantees, order updates, and translation channels.

import 'package:flutter/material.dart';
import '../models/chat_models.dart';
import '../services/chat_service.dart';

class ConversationsListScreen extends StatefulWidget {
  final String userRole; // 'artisan' | 'buyer'
  final String currentUserName;
  final VoidCallback? onBack;
  final void Function(ChatConversation conversation)? onOpenConversation;

  const ConversationsListScreen({
    super.key,
    this.userRole = 'artisan',
    this.currentUserName = 'Ramu Kumar',
    this.onBack,
    this.onOpenConversation,
  });

  @override
  State<ConversationsListScreen> createState() => _ConversationsListScreenState();
}

class _ConversationsListScreenState extends State<ConversationsListScreen> {
  final ChatService _chatService = ChatService();
  final TextEditingController _searchController = TextEditingController();

  static const Color primaryTerracotta = Color(0xFF8C3A16);
  static const Color bgWarm = Color(0xFFFBF8F5);
  static const Color cardBg = Colors.white;
  static const Color textDark = Color(0xFF261E1A);
  static const Color textMuted = Color(0xFF7D726C);
  static const Color borderLight = Color(0xFFEADBCE);
  static const Color badgeGreen = Color(0xFF1E824C);

  int _selectedFilterIndex = 0; // 0: All, 1: Active, 2: Escrow Locked
  String _searchQuery = '';
  List<ChatConversation> _conversations = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadConversations();
    _searchController.addListener(() {
      setState(() {
        _searchQuery = _searchController.text.trim().toLowerCase();
      });
    });

    _chatService.conversationsStream.listen((convs) {
      if (mounted) {
        setState(() {
          _conversations = convs;
          _isLoading = false;
        });
      }
    });
  }

  @override
  void dispose() {
    _searchController.dispose();
    super.dispose();
  }

  Future<void> _loadConversations() async {
    setState(() => _isLoading = true);
    final convs = await _chatService.fetchConversations(userRole: widget.userRole);
    if (mounted) {
      setState(() {
        _conversations = convs;
        _isLoading = false;
      });
    }
  }

  List<ChatConversation> get _filteredConversations {
    return _conversations.where((conv) {
      final matchesSearch = _searchQuery.isEmpty ||
          conv.buyerName.toLowerCase().contains(_searchQuery) ||
          conv.artisanName.toLowerCase().contains(_searchQuery) ||
          conv.orderNumber.toLowerCase().contains(_searchQuery) ||
          conv.orderTitle.toLowerCase().contains(_searchQuery);

      if (!matchesSearch) return false;

      if (_selectedFilterIndex == 1) {
        return conv.unreadArtisan > 0 || conv.unreadBuyer > 0;
      } else if (_selectedFilterIndex == 2) {
        return conv.escrowStatus.contains('Escrow');
      }
      return true;
    }).toList();
  }

  @override
  Widget build(BuildContext context) {
    final isArtisan = widget.userRole == 'artisan';

    return Scaffold(
      backgroundColor: bgWarm,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0.5,
        leading: widget.onBack != null
            ? IconButton(
                icon: const Icon(Icons.arrow_back_ios_new, color: textDark, size: 20),
                onPressed: widget.onBack,
              )
            : null,
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              isArtisan ? 'Bulk Buyer Messages' : 'Artisan Order Chats',
              style: const TextStyle(
                color: textDark,
                fontSize: 16.5,
                fontWeight: FontWeight.w800,
                letterSpacing: -0.2,
              ),
            ),
            Text(
              'Secure Escrow & Real-Time Vernacular Translation',
              style: TextStyle(
                color: textMuted,
                fontSize: 11,
                fontWeight: FontWeight.w500,
              ),
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh_rounded, color: primaryTerracotta),
            tooltip: 'Refresh Discussions',
            onPressed: _loadConversations,
          ),
          const SizedBox(width: 4),
        ],
      ),
      body: SafeArea(
        child: Column(
          children: [
            // Search & Filter Header
            Container(
              color: Colors.white,
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 12),
              child: Column(
                children: [
                  // Search Bar
                  Container(
                    height: 44,
                    decoration: BoxDecoration(
                      color: const Color(0xFFF4ECE5),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: borderLight),
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 12),
                    child: Row(
                      children: [
                        const Icon(Icons.search_rounded, color: textMuted, size: 20),
                        const SizedBox(width: 8),
                        Expanded(
                          child: TextField(
                            controller: _searchController,
                            style: const TextStyle(color: textDark, fontSize: 13.5),
                            decoration: const InputDecoration(
                              hintText: 'Search by buyer, order ID (e.g. HS1048)...',
                              hintStyle: TextStyle(color: textMuted, fontSize: 13),
                              border: InputBorder.none,
                              isDense: true,
                            ),
                          ),
                        ),
                        if (_searchController.text.isNotEmpty)
                          GestureDetector(
                            onTap: () => _searchController.clear(),
                            child: const Icon(Icons.close_rounded, color: textMuted, size: 18),
                          ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 10),

                  // Filter Chips
                  SingleChildScrollView(
                    scrollDirection: Axis.horizontal,
                    child: Row(
                      children: [
                        _buildFilterChip('All Discussions', 0),
                        const SizedBox(width: 8),
                        _buildFilterChip('Active Unread', 1),
                        const SizedBox(width: 8),
                        _buildFilterChip('Escrow Secured', 2),
                      ],
                    ),
                  ),
                ],
              ),
            ),

            const Divider(height: 1, color: borderLight),

            // Content List
            Expanded(
              child: _isLoading
                  ? const Center(
                      child: CircularProgressIndicator(color: primaryTerracotta),
                    )
                  : _filteredConversations.isEmpty
                      ? _buildEmptyState()
                      : ListView.separated(
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                          itemCount: _filteredConversations.length,
                          separatorBuilder: (_, __) => const SizedBox(height: 10),
                          itemBuilder: (context, idx) {
                            final conv = _filteredConversations[idx];
                            return _buildConversationCard(conv, isArtisan);
                          },
                        ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFilterChip(String label, int index) {
    final isSelected = _selectedFilterIndex == index;
    return GestureDetector(
      onTap: () => setState(() => _selectedFilterIndex = index),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
        decoration: BoxDecoration(
          color: isSelected ? primaryTerracotta : const Color(0xFFF8F3EE),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
            color: isSelected ? primaryTerracotta : borderLight,
          ),
        ),
        child: Text(
          label,
          style: TextStyle(
            color: isSelected ? Colors.white : textDark,
            fontSize: 12,
            fontWeight: isSelected ? FontWeight.w700 : FontWeight.w500,
          ),
        ),
      ),
    );
  }

  Widget _buildConversationCard(ChatConversation conv, bool isArtisan) {
    final counterpartyName = isArtisan ? conv.buyerName : conv.artisanName;
    final counterpartySubtitle = isArtisan ? conv.buyerCompany : conv.artisanCraft;
    final counterpartyAvatar = isArtisan ? conv.buyerAvatar : conv.artisanAvatar;
    final unread = isArtisan ? conv.unreadArtisan : conv.unreadBuyer;

    return Container(
      decoration: BoxDecoration(
        color: cardBg,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: unread > 0 ? const Color(0xFFDCA88F) : borderLight,
          width: unread > 0 ? 1.4 : 1.0,
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.03),
            blurRadius: 8,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        borderRadius: BorderRadius.circular(16),
        child: InkWell(
          borderRadius: BorderRadius.circular(16),
          onTap: () {
            _chatService.markAsRead(conv.id, userRole: widget.userRole);
            if (widget.onOpenConversation != null) {
              widget.onOpenConversation!(conv);
            }
          },
          child: Padding(
            padding: const EdgeInsets.all(14),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Top Row: Avatar, Name, Order Number Tag, Time
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Stack(
                      children: [
                        CircleAvatar(
                          radius: 24,
                          backgroundColor: const Color(0xFFEDE4DC),
                          backgroundImage: counterpartyAvatar.isNotEmpty
                              ? NetworkImage(counterpartyAvatar)
                              : null,
                          child: counterpartyAvatar.isEmpty
                              ? Text(
                                  counterpartyName.isNotEmpty ? counterpartyName[0] : '?',
                                  style: const TextStyle(
                                    color: primaryTerracotta,
                                    fontWeight: FontWeight.bold,
                                  ),
                                )
                              : null,
                        ),
                        if (unread > 0)
                          Positioned(
                            right: 0,
                            top: 0,
                            child: Container(
                              width: 12,
                              height: 12,
                              decoration: BoxDecoration(
                                color: primaryTerracotta,
                                shape: BoxShape.circle,
                                border: Border.all(color: Colors.white, width: 2),
                              ),
                            ),
                          ),
                      ],
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Flexible(
                                child: Text(
                                  counterpartyName,
                                  style: const TextStyle(
                                    color: textDark,
                                    fontSize: 14.5,
                                    fontWeight: FontWeight.w700,
                                  ),
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                ),
                              ),
                              Text(
                                conv.lastMessageTime,
                                style: const TextStyle(
                                  color: textMuted,
                                  fontSize: 11,
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 2),
                          Text(
                            counterpartySubtitle,
                            style: const TextStyle(
                              color: textMuted,
                              fontSize: 11.5,
                              fontWeight: FontWeight.w400,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),

                // Order badge and Escrow info
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                  decoration: BoxDecoration(
                    color: const Color(0xFFFAF2EC),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: const Color(0xFFEED8CC)),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                            decoration: BoxDecoration(
                              color: primaryTerracotta.withOpacity(0.12),
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: Text(
                              conv.orderNumber,
                              style: const TextStyle(
                                color: primaryTerracotta,
                                fontSize: 10.5,
                                fontWeight: FontWeight.w800,
                              ),
                            ),
                          ),
                          const SizedBox(width: 6),
                          Text(
                            conv.orderTitle,
                            style: const TextStyle(
                              color: textDark,
                              fontSize: 11.5,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ],
                      ),
                      Row(
                        children: [
                          const Icon(Icons.shield_outlined, size: 12.5, color: badgeGreen),
                          const SizedBox(width: 3),
                          Text(
                            conv.escrowAmount,
                            style: const TextStyle(
                              color: badgeGreen,
                              fontSize: 11.5,
                              fontWeight: FontWeight.w800,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 8),

                // Last Message Snippet
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        conv.lastMessage,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          color: unread > 0 ? textDark : textMuted,
                          fontSize: 12.5,
                          fontWeight: unread > 0 ? FontWeight.w600 : FontWeight.w400,
                        ),
                      ),
                    ),
                    if (unread > 0) ...[
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                        decoration: BoxDecoration(
                          color: primaryTerracotta,
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Text(
                          '$unread',
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 10.5,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ],
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(32),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              padding: const EdgeInsets.all(18),
              decoration: const BoxDecoration(
                color: Color(0xFFF8ECE2),
                shape: BoxShape.circle,
              ),
              child: const Icon(
                Icons.chat_bubble_outline_rounded,
                size: 36,
                color: primaryTerracotta,
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              'No Conversations Found',
              style: TextStyle(
                color: textDark,
                fontSize: 16,
                fontWeight: FontWeight.w700,
              ),
            ),
            const SizedBox(height: 6),
            const Text(
              'Messages from bulk buyers and active orders will appear here.',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: textMuted,
                fontSize: 12.5,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
