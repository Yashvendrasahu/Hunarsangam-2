// lib/widgets/brand_logo_card.dart

import 'package:flutter/material.dart';

/// Central brand emblem squircle card with deep terracotta border,
/// halo glow effect, and custom artisan insignia featuring the new HunarSangam logo.
class BrandLogoCard extends StatelessWidget {
  final double size;

  const BrandLogoCard({
    super.key,
    this.size = 136.0,
  });

  static const Color _terracottaBorderColor = Color(0xFFB85324);
  static const Color _haloRingColor = Color(0x33D9794E);
  static const Color _cardBackgroundColor = Color(0xFFFFFBF9);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Stack(
        alignment: Alignment.center,
        children: [
          // Outer Soft Glow / Concentric Halo Ring
          Container(
            width: size + 32.0,
            height: size + 32.0,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: _haloRingColor.withValues(alpha: 0.18),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFFD9794E).withValues(alpha: 0.15),
                  blurRadius: 28.0,
                  spreadRadius: 4.0,
                ),
              ],
            ),
          ),

          // Secondary Mid Halo Ring
          Container(
            width: size + 16.0,
            height: size + 16.0,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: _haloRingColor.withValues(alpha: 0.35),
            ),
          ),

          // Primary Squircle Card Container
          Container(
            width: size,
            height: size,
            decoration: BoxDecoration(
              color: _cardBackgroundColor,
              borderRadius: BorderRadius.circular(32.0),
              border: Border.all(
                color: _terracottaBorderColor,
                width: 3.5,
              ),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF7C3F24).withValues(alpha: 0.18),
                  offset: const Offset(0, 8),
                  blurRadius: 22.0,
                  spreadRadius: 1.0,
                ),
              ],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(28.0),
              child: const Padding(
                padding: EdgeInsets.all(8.0),
                child: _ArtisanEmblemContent(),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// Compact version of HunarSangam logo badge for AppBars and Headers
class HunarSangamLogoBadge extends StatelessWidget {
  final double size;
  final bool showText;
  final Color? textColor;

  const HunarSangamLogoBadge({
    super.key,
    this.size = 32.0,
    this.showText = false,
    this.textColor,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Container(
          width: size,
          height: size,
          decoration: BoxDecoration(
            color: const Color(0xFFFFFBF9),
            borderRadius: BorderRadius.circular(size * 0.25),
            border: Border.all(
              color: const Color(0xFFE5D5CB),
              width: 1.2,
            ),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.04),
                blurRadius: 4.0,
                offset: const Offset(0, 1),
              ),
            ],
          ),
          child: Padding(
            padding: EdgeInsets.all(size * 0.08),
            child: Image.asset(
              'assets/images/logo.png',
              fit: BoxFit.contain,
              errorBuilder: (context, error, stackTrace) {
                return CustomPaint(
                  painter: _HunarSangamLogoVectorPainter(),
                );
              },
            ),
          ),
        ),
        if (showText) ...[
          const SizedBox(width: 8.0),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                'HunarSangam',
                style: TextStyle(
                  fontSize: size * 0.44,
                  fontWeight: FontWeight.w800,
                  color: textColor ?? const Color(0xFF7C3F24),
                  letterSpacing: -0.2,
                  height: 1.1,
                ),
              ),
              Text(
                'हुनर संगम',
                style: TextStyle(
                  fontSize: size * 0.28,
                  fontWeight: FontWeight.w800,
                  color: const Color(0xFF8C5338),
                  height: 1.0,
                ),
              ),
            ],
          ),
        ],
      ],
    );
  }
}

/// Internal emblem content with high-definition vector logo and branding
class _ArtisanEmblemContent extends StatelessWidget {
  const _ArtisanEmblemContent();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        // New Official HunarSangam Logo Image with Vector Painter Fallback
        Expanded(
          child: AspectRatio(
            aspectRatio: 1.0,
            child: Image.asset(
              'assets/images/logo.png',
              fit: BoxFit.contain,
              errorBuilder: (context, error, stackTrace) {
                return CustomPaint(
                  painter: _HunarSangamLogoVectorPainter(),
                );
              },
            ),
          ),
        ),
        const SizedBox(height: 2.0),

        // Hindi Typography "हुनर संगम"
        const FittedBox(
          fit: BoxFit.scaleDown,
          child: Text(
            'हुनर संगम',
            style: TextStyle(
              fontFamily: 'serif',
              fontSize: 14.0,
              fontWeight: FontWeight.w900,
              color: Color(0xFF7C3F24),
              letterSpacing: 0.4,
              height: 1.0,
            ),
          ),
        ),

        const SizedBox(height: 1.0),

        // Sub-motto flourish line
        FittedBox(
          fit: BoxFit.scaleDown,
          child: Row(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 10.0,
                height: 1.0,
                color: const Color(0xFFB85324).withValues(alpha: 0.6),
              ),
              const SizedBox(width: 4.0),
              const Text(
                'कला • शिल्प • संगम',
                style: TextStyle(
                  fontSize: 6.5,
                  fontWeight: FontWeight.w700,
                  color: Color(0xFF8C5338),
                  letterSpacing: 0.2,
                ),
              ),
              const SizedBox(width: 4.0),
              Container(
                width: 10.0,
                height: 1.0,
                color: const Color(0xFFB85324).withValues(alpha: 0.6),
              ),
            ],
          ),
        ),
      ],
    );
  }
}

/// Vector painter rendering the new HunarSangam logo:
/// - Monograms "H" (royal cobalt blue) and "S" (vibrant magenta-orange gradient)
/// - Top-left paintbrush with flame bristles
/// - Left artist palette with vivid swatches
/// - Top-right sewing needle and thread spool
/// - Seated master artisan painting terracotta pottery
/// - Finished earthenware jars, pigment jars, and decorative leaf flourishes
class _HunarSangamLogoVectorPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final double w = size.width;
    final double h = size.height;

    // Scale canvas to standard 100x100 coordinate space
    canvas.save();
    canvas.scale(w / 100.0, h / 100.0);

    // 1. Enclosing ribbon glow curve
    final Paint ribbonGlowPaint = Paint()
      ..shader = const LinearGradient(
        colors: [
          Color(0xFFFF4081),
          Color(0xFF9C27B0),
          Color(0xFF00BCD4),
          Color(0xFFFF9800),
        ],
      ).createShader(const Rect.fromLTWH(0, 0, 100, 100))
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.4
      ..strokeCap = StrokeCap.round;

    final Path outerRibbonPath = Path();
    outerRibbonPath.moveTo(25, 85);
    outerRibbonPath.cubicTo(10, 72, 8, 48, 16, 32);
    outerRibbonPath.cubicTo(24, 16, 52, 10, 72, 18);
    outerRibbonPath.cubicTo(86, 24, 96, 40, 92, 60);
    outerRibbonPath.cubicTo(88, 80, 68, 94, 46, 93);
    canvas.drawPath(outerRibbonPath, ribbonGlowPaint);

    // 2. Left Monogram 'H' (Cobalt Blue with Serif)
    final Paint blueHPaint = Paint()
      ..shader = const LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [Color(0xFF1976D2), Color(0xFF0D47A1)],
      ).createShader(const Rect.fromLTWH(20, 20, 30, 60))
      ..style = PaintingStyle.fill;

    // Left vertical stem of H
    final Path hStem = Path();
    hStem.moveTo(26, 28);
    hStem.lineTo(39, 28);
    hStem.lineTo(36, 33);
    hStem.lineTo(36, 82);
    hStem.lineTo(26, 82);
    hStem.lineTo(26, 85);
    hStem.lineTo(46, 85);
    hStem.lineTo(46, 82);
    hStem.lineTo(40, 82);
    hStem.lineTo(40, 33);
    hStem.lineTo(42, 28);
    canvas.drawPath(hStem, blueHPaint);

    // H Crossbar
    final RRect crossbar = RRect.fromRectAndRadius(
      const Rect.fromLTWH(36, 55, 21, 6),
      const Radius.circular(1.0),
    );
    canvas.drawRRect(crossbar, blueHPaint);

    // 3. Paintbrush with Flame Bristles on top of left H
    // Brush handle
    final Paint handlePaint = Paint()..color = const Color(0xFF1A237E);
    final Path handlePath = Path();
    handlePath.moveTo(22, 22);
    handlePath.lineTo(28, 46);
    handlePath.lineTo(30, 45);
    handlePath.lineTo(25, 21);
    handlePath.close();
    canvas.drawPath(handlePath, handlePaint);

    // Ferrule
    final Paint ferrulePaint = Paint()..color = const Color(0xFFB0BEC5);
    canvas.drawRect(const Rect.fromLTWH(22, 20, 4, 3), ferrulePaint);

    // Flame bristles
    final Paint flamePaint = Paint()
      ..shader = const LinearGradient(
        begin: Alignment.bottomCenter,
        end: Alignment.topCenter,
        colors: [Color(0xFFD50000), Color(0xFFFF3D00), Color(0xFFFFEA00)],
      ).createShader(const Rect.fromLTWH(18, 4, 12, 18))
      ..style = PaintingStyle.fill;

    final Path flamePath = Path();
    flamePath.moveTo(22, 21);
    flamePath.cubicTo(20, 16, 18, 12, 24, 4);
    flamePath.cubicTo(27, 10, 30, 14, 26, 20);
    flamePath.close();
    canvas.drawPath(flamePath, flamePaint);

    // 4. Monogram 'S' in vibrant Gradient Ribbon
    final Paint sRibbonPaint = Paint()
      ..shader = const LinearGradient(
        colors: [
          Color(0xFFFF4081),
          Color(0xFF8E24AA),
          Color(0xFF5E35B1),
          Color(0xFFFF5722),
          Color(0xFFFFB300),
        ],
      ).createShader(const Rect.fromLTWH(50, 25, 45, 65))
      ..style = PaintingStyle.fill;

    final Path sPath = Path();
    sPath.moveTo(52, 27);
    sPath.cubicTo(66, 24, 84, 30, 86, 46);
    sPath.cubicTo(88, 62, 64, 66, 50, 72);
    sPath.cubicTo(38, 77, 22, 86, 30, 92);
    sPath.cubicTo(40, 99, 72, 97, 86, 84);
    sPath.cubicTo(88, 75, 94, 60, 92, 54);
    sPath.cubicTo(96, 68, 87, 88, 68, 94);
    sPath.cubicTo(46, 100, 26, 94, 20, 84);
    sPath.cubicTo(14, 74, 22, 66, 36, 58);
    sPath.cubicTo(50, 50, 74, 46, 72, 36);
    sPath.cubicTo(70, 28, 58, 28, 52, 27);
    sPath.close();
    canvas.drawPath(sPath, sRibbonPaint);

    // 5. Left Artist Palette with colorful spots
    final Paint palettePaint = Paint()
      ..shader = const RadialGradient(
        colors: [Color(0xFF283593), Color(0xFF0D1B48)],
      ).createShader(const Rect.fromLTWH(8, 44, 25, 30))
      ..style = PaintingStyle.fill;

    final Path palPath = Path();
    palPath.moveTo(20, 46);
    palPath.cubicTo(30, 45, 34, 54, 30, 63);
    palPath.cubicTo(27, 70, 21, 72, 15, 69);
    palPath.cubicTo(10, 66, 9, 58, 12, 52);
    palPath.close();
    canvas.drawPath(palPath, palettePaint);

    // Palette Color Dots
    canvas.drawCircle(const Offset(17, 51), 1.8, Paint()..color = const Color(0xFFFF4081));
    canvas.drawCircle(const Offset(23, 50), 1.8, Paint()..color = const Color(0xFFFFC107));
    canvas.drawCircle(const Offset(27, 55), 1.8, Paint()..color = const Color(0xFF00E676));
    canvas.drawCircle(const Offset(18, 58), 1.8, Paint()..color = const Color(0xFF00E5FF));

    // 6. Top-Right: Magenta Sewing Spool & Steel Needle
    final Paint spoolPaint = Paint()..color = const Color(0xFFE91E63);
    canvas.drawRRect(
      RRect.fromRectAndRadius(const Rect.fromLTWH(74, 26, 8, 10), const Radius.circular(1.5)),
      spoolPaint,
    );
    final Paint spoolRim = Paint()..color = const Color(0xFF1A237E);
    canvas.drawOval(const Rect.fromLTWH(73, 24, 10, 3), spoolRim);
    canvas.drawOval(const Rect.fromLTWH(73, 35, 10, 3), spoolRim);

    // Needle
    final Paint needlePaint = Paint()
      ..color = const Color(0xFFB0BEC5)
      ..strokeWidth = 1.0;
    canvas.drawLine(const Offset(71, 20), const Offset(79, 38), needlePaint);

    // 7. Lower Center: Seated Artisan & Terracotta Pot
    // Artisan Head / Hair & Beard
    canvas.drawOval(const Rect.fromLTWH(64, 54, 7, 8.5), Paint()..color = const Color(0xFF3E2723));
    canvas.drawOval(const Rect.fromLTWH(64.5, 55, 5.8, 6.5), Paint()..color = const Color(0xFF8D5B4C));
    // Beard
    final Path beard = Path()
      ..moveTo(64.5, 57)
      ..cubicTo(65, 62, 69, 62, 70, 57)
      ..close();
    canvas.drawPath(beard, Paint()..color = const Color(0xFF212121));

    // Shirt & Leather Apron
    canvas.drawPath(
      Path()
        ..moveTo(61, 62)
        ..lineTo(73, 62)
        ..lineTo(76, 75)
        ..lineTo(58, 75)
        ..close(),
      Paint()..color = const Color(0xFF212121),
    );
    canvas.drawPath(
      Path()
        ..moveTo(63, 63)
        ..lineTo(71, 63)
        ..lineTo(73, 76)
        ..lineTo(61, 76)
        ..close(),
      Paint()..color = const Color(0xFF795548),
    );

    // Seated Legs
    canvas.drawOval(const Rect.fromLTWH(55, 74, 24, 7), Paint()..color = const Color(0xFF1A237E));

    // Terracotta Pot being painted
    final Paint potPaint = Paint()
      ..shader = const RadialGradient(
        colors: [Color(0xFFD97746), Color(0xFF8D3A12)],
      ).createShader(const Rect.fromLTWH(63, 69, 10, 9))
      ..style = PaintingStyle.fill;
    canvas.drawOval(const Rect.fromLTWH(63, 69, 10, 9), potPaint);
    canvas.drawOval(
      const Rect.fromLTWH(65, 71, 6, 5),
      Paint()
        ..color = Colors.white
        ..style = PaintingStyle.stroke
        ..strokeWidth = 0.6,
    );

    // Fine brush in artisan's hand
    canvas.drawLine(
      const Offset(72, 68),
      const Offset(67, 72),
      Paint()
        ..color = const Color(0xFF212121)
        ..strokeWidth = 0.8,
    );
    canvas.drawCircle(const Offset(67, 72), 0.6, Paint()..color = Colors.white);

    // 8. Base Earthen Pots and Pigment Jars
    final Paint earthenPot = Paint()..color = const Color(0xFFB85324);
    canvas.drawOval(const Rect.fromLTWH(49, 74, 7, 6), earthenPot); // Left pitcher
    canvas.drawOval(const Rect.fromLTWH(76, 75, 8, 6.5), earthenPot); // Right handi

    // Pigment pots (Magenta, Violet, Yellow, Cyan)
    canvas.drawRect(const Rect.fromLTWH(62, 80, 2.2, 3), Paint()..color = const Color(0xFFE91E63));
    canvas.drawRect(const Rect.fromLTWH(65, 80, 2.2, 3), Paint()..color = const Color(0xFF673AB7));
    canvas.drawRect(const Rect.fromLTWH(68, 80, 2.2, 3), Paint()..color = const Color(0xFFFFC107));
    canvas.drawRect(const Rect.fromLTWH(71, 80, 2.2, 3), Paint()..color = const Color(0xFF00BCD4));

    // 9. Decorative Foliage Leaves (Right Side)
    final Paint leafGreen = Paint()..color = const Color(0xFF00C853);
    final Paint leafCyan = Paint()..color = const Color(0xFF00B0FF);
    final Paint leafPink = Paint()..color = const Color(0xFFE91E63);

    final Path leaf1 = Path()
      ..moveTo(84, 56)
      ..cubicTo(89, 50, 94, 54, 90, 60)
      ..close();
    canvas.drawPath(leaf1, leafGreen);

    final Path leaf2 = Path()
      ..moveTo(88, 53)
      ..cubicTo(93, 48, 97, 51, 93, 55)
      ..close();
    canvas.drawPath(leaf2, leafCyan);

    final Path leaf3 = Path()
      ..moveTo(87, 62)
      ..cubicTo(92, 61, 94, 66, 90, 68)
      ..close();
    canvas.drawPath(leaf3, leafPink);

    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
