// lib/widgets/action_button.dart

import 'package:flutter/material.dart';

/// Primary action button for onboarding screens with optional icon,
/// secondary outlined mode, and optional bottom guarantee/step indicator note.
class ActionButton extends StatelessWidget {
  final String text;
  final VoidCallback? onPressed;
  final IconData? icon;
  final bool isOutlined;
  final String? footerNote;
  final IconData? footerIcon;
  final Color? backgroundColor;
  final Color? textColor;

  const ActionButton({
    super.key,
    required this.text,
    required this.onPressed,
    this.icon,
    this.isOutlined = false,
    this.footerNote,
    this.footerIcon,
    this.backgroundColor,
    this.textColor,
  });

  @override
  Widget build(BuildContext context) {
    const Color primaryTerracotta = Color(0xFFA84318);
    const Color defaultText = Colors.white;

    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          width: double.infinity,
          height: 54.0,
          child: isOutlined
              ? OutlinedButton(
                  onPressed: onPressed,
                  style: OutlinedButton.styleFrom(
                    foregroundColor: textColor ?? const Color(0xFF4A3228),
                    side: const BorderSide(color: Color(0xFFE0D0C5), width: 1.5),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16.0),
                    ),
                    backgroundColor: const Color(0xFFFFFBF9),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      if (icon != null) ...[
                        Icon(icon, size: 18.0, color: textColor ?? const Color(0xFF8C5338)),
                        const SizedBox(width: 8.0),
                      ],
                      Text(
                        text,
                        style: TextStyle(
                          fontSize: 15.0,
                          fontWeight: FontWeight.w700,
                          color: textColor ?? const Color(0xFF4A3228),
                        ),
                      ),
                    ],
                  ),
                )
              : ElevatedButton(
                  onPressed: onPressed,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: backgroundColor ?? primaryTerracotta,
                    foregroundColor: textColor ?? defaultText,
                    elevation: 0,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16.0),
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        text,
                        style: TextStyle(
                          fontSize: 16.0,
                          fontWeight: FontWeight.w700,
                          color: textColor ?? defaultText,
                          letterSpacing: 0.2,
                        ),
                      ),
                      if (icon != null) ...[
                        const SizedBox(width: 8.0),
                        Icon(icon, size: 18.0),
                      ],
                    ],
                  ),
                ),
        ),
        if (footerNote != null) ...[
          const SizedBox(height: 10.0),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              if (footerIcon != null) ...[
                Icon(footerIcon, size: 14.0, color: const Color(0xFF2E7D32)),
                const SizedBox(width: 6.0),
              ],
              Flexible(
                child: Text(
                  footerNote!,
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    fontSize: 11.5,
                    fontWeight: FontWeight.w500,
                    color: Color(0xFF7A685F),
                  ),
                ),
              ),
            ],
          ),
        ],
      ],
    );
  }
}
