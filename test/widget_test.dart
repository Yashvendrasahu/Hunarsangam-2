import 'package:flutter_test/flutter_test.dart';
import 'package:hunarsangam/main.dart';

void main() {
  testWidgets('HunarSangam app initial smoke test', (WidgetTester tester) async {
    // Build our app and trigger an initial frame.
    await tester.pumpWidget(const HunarSangamApp());
    expect(find.byType(HunarSangamApp), findsOneWidget);
    // Drain any initial splash timer so no timers remain pending
    await tester.pumpAndSettle(const Duration(seconds: 6));
  });
}
