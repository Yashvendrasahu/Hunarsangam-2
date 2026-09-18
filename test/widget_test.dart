import 'package:flutter_test/flutter_test.dart';
import 'package:hunarsangam/main.dart';

void main() {
  testWidgets('HunarSangam app initial smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const HunarSangamApp());
    await tester.pump(const Duration(seconds: 6));

    // Verify that the app mounts and initializes.
    expect(find.byType(HunarSangamApp), findsOneWidget);
  });
}
