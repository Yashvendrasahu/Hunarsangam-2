// lib/add_product/widgets/distribution_channels_card.dart

import 'package:flutter/material.dart';

class DistributionChannelsCard extends StatelessWidget {
  final bool isMarketplaceActive;
  final bool isOndcActive;
  final bool isWhatsAppActive;

  const DistributionChannelsCard({
    super.key,
    this.isMarketplaceActive = true,
    this.isOndcActive = true,
    this.isWhatsAppActive = true,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFFDFB),
        borderRadius: BorderRadius.circular(18.0),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      padding: const EdgeInsets.all(14.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                'Distribution Channels Activated',
                style: TextStyle(
                  fontSize: 14.5,
                  fontWeight: FontWeight.w800,
                  color: Color(0xFF221C19),
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 3.0),
                decoration: BoxDecoration(
                  color: const Color(0xFFE8F5E9),
                  borderRadius: BorderRadius.circular(10.0),
                ),
                child: const Text(
                  '3 Active',
                  style: TextStyle(
                    fontSize: 10.5,
                    fontWeight: FontWeight.w700,
                    color: Color(0xFF2E7D32),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12.0),

          // Channel 1: HunarSangam Marketplace
          _buildChannelItem(
            icon: Icons.storefront_outlined,
            iconBg: const Color(0xFFFFE8DC),
            iconColor: const Color(0xFFA84318),
            title: 'HunarSangam Marketplace',
            status: 'Live • Instant Quotations enabled',
            isActive: isMarketplaceActive,
          ),
          const SizedBox(height: 8.0),

          // Channel 2: ONDC Handicraft Registry
          _buildChannelItem(
            icon: Icons.hub_outlined,
            iconBg: const Color(0xFFE8F5E9),
            iconColor: const Color(0xFF2E7D32),
            title: 'ONDC Handicraft Registry',
            status: 'Synced • Pan-India open network',
            isActive: isOndcActive,
          ),
          const SizedBox(height: 8.0),

          // Channel 3: Direct WhatsApp Catalog
          _buildChannelItem(
            icon: Icons.share_outlined,
            iconBg: const Color(0xFFF5EBE1),
            iconColor: const Color(0xFF7C3F24),
            title: 'Direct WhatsApp Catalog',
            status: 'Link ready to share with buyers',
            isActive: isWhatsAppActive,
          ),
        ],
      ),
    );
  }

  Widget _buildChannelItem({
    required IconData icon,
    required Color iconBg,
    required Color iconColor,
    required String title,
    required String status,
    required bool isActive,
  }) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFBF4EE),
        borderRadius: BorderRadius.circular(14.0),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 10.0),
      child: Row(
        children: [
          Container(
            width: 34.0,
            height: 34.0,
            decoration: BoxDecoration(
              color: iconBg,
              borderRadius: BorderRadius.circular(10.0),
            ),
            child: Icon(icon, color: iconColor, size: 18.0),
          ),
          const SizedBox(width: 10.0),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 13.0,
                    fontWeight: FontWeight.w700,
                    color: Color(0xFF2D2421),
                  ),
                ),
                const SizedBox(height: 1.0),
                Text(
                  status,
                  style: const TextStyle(
                    fontSize: 11.0,
                    color: Color(0xFF2E7D32),
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
          Icon(
            isActive ? Icons.check_circle_rounded : Icons.radio_button_unchecked,
            color: isActive ? const Color(0xFF2E7D32) : const Color(0xFFB0A096),
            size: 20.0,
          ),
        ],
      ),
    );
  }
}
