// lib/widgets/top_header_bar.dart

import 'package:flutter/material.dart';

/// Top bar displaying the SIH Initiative badge on the left
/// and the "AI Helped craft" marker with a palette icon on the right.
class TopHeaderBar extends StatelessWidget {
  const TopHeaderBar({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 12.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: const [
          _SihInitiativePill(),
          _AiCraftedIndicator(),
        ],
      ),
    );
  }
}

/// Pill container with green active dot indicator and "SIH INITIATIVE" text
class _SihInitiativePill extends StatelessWidget {
  const _SihInitiativePill();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 6.0),
      decoration: BoxDecoration(
        color: const Color(0xFFF3E7DF),
        borderRadius: BorderRadius.circular(20.0),
        border: Border.all(
          color: const Color(0xFFE5D5CB),
          width: 1.0,
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 7.0,
            height: 7.0,
            decoration: const BoxDecoration(
              color: Color(0xFF2E7D32),
              shape: BoxShape.circle,
            ),
          ),
          const SizedBox(width: 7.0),
          const Text(
            'SIH INITIATIVE',
            style: TextStyle(
              fontSize: 11.0,
              fontWeight: FontWeight.w700,
              letterSpacing: 0.8,
              color: Color(0xFF4A3B32),
            ),
          ),
        ],
      ),
    );
  }
}

/// Right-side craft metadata indicator with palette icon
class _AiCraftedIndicator extends StatelessWidget {
  const _AiCraftedIndicator();

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: const [
        Icon(
          Icons.palette_outlined,
          size: 16.0,
          color: Color(0xFF6E5D53),
        ),
        SizedBox(width: 5.0),
        Text(
          'AI Helped craft',
          style: TextStyle(
            fontSize: 12.0,
            fontWeight: FontWeight.w500,
            color: Color(0xFF6E5D53),
            letterSpacing: 0.1,
          ),
        ),
      ],
    );
  }
}
