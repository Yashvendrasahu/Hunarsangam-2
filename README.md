# HunarSangam (हुनर संगम) - Smart India Hackathon (SIH)

A cross-platform **Flutter & Dart** application designed for Indian artisan collectives, craft makers, and bulk enterprise buyers. Empowering rural artisans with AI-powered craft storytelling, voice-first onboarding, dynamic fair-pricing calculator, and seamless direct B2B bulk orders.

---

## 🌟 Key Features

1. **Artisan Hub & Vernacular Onboarding**:
   - Multi-language support (Hindi, English, etc.)
   - Voice-guided profile creation & audio recording
   - Craft selection (Blue Pottery, Madhubani, Pashmina, Brassware, Woodcarving, etc.)
   - Digital visiting card generation & collective management

2. **Enterprise Bulk Buyer Portal**:
   - Multi-step buyer onboarding (Business entity, GST, annual sourcing budget, craft categories)
   - Discovery suite & featured artisan stories
   - Voice requirement intake & AI-powered artisan matching
   - Direct sample requests, live order tracking & escrow payment flow

3. **Multilingual Real-Time Chat**:
   - Voice-note transmission & automatic speech-to-speech / audio playback
   - Real-time messaging between buyers and artisans
   - Order timeline & production stage updates

4. **Hardware & Sensors Integration**:
   - Device camera & gallery image picker for catalog & identity verification
   - Hardware TTS (Text-to-Speech) & STT (Speech-to-Text) support

---

## 📱 Platforms Supported

- **Android (APK & App Bundle)**: Native Android app with material design, camera, and microphone permissions.
- **Web**: Responsive Flutter Web client for desktop and mobile browsers.

---

## 🚀 How to Run the Flutter Project

### Prerequisites
- [Flutter SDK](https://docs.flutter.dev/get-started/install) (`>= 3.0.0`)
- [Android Studio / Android SDK](https://developer.android.com/studio) (for Android APK build)
- Google Chrome / Edge (for Web build)

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/hunarsangam.git
cd hunarsangam
```

### 2. Install Dependencies
```bash
flutter pub get
```

### 3. Run on Flutter Web
```bash
flutter run -d chrome
```

To build a release web bundle:
```bash
flutter build web --release
```
*(The production files will be generated in `build/web/`)*

### 4. Run on Android Device / Emulator
Ensure an Android device or emulator is connected:
```bash
flutter devices
flutter run
```

To build a release APK:
```bash
flutter build apk --release
```
*(The output APK will be located at `build/app/outputs/flutter-apk/app-release.apk`)*

To build an Android App Bundle (AAB):
```bash
flutter build appbundle --release
```

---

## 📁 Project Structure

```text
.
├── android/            # Native Android project configuration & manifests
├── assets/             # Branding assets, logos, and UI graphics
│   └── images/
│       └── logo.png    # HunarSangam official logo
├── lib/                # Flutter application source code
│   ├── models/         # Data models (buyer onboarding, orders, crafts)
│   ├── screens/        # UI screens (Artisan & Buyer portals, chat, onboarding)
│   ├── services/       # Supabase, Gemini AI, Hardware, Auth & Order services
│   ├── widgets/        # Reusable UI components & branding badges
│   └── main.dart       # App entry point & navigation router
├── web/                # Flutter Web runner (index.html, manifest, icons)
├── backend/            # FastAPI AI services & Gemini integration
├── supabase/           # Database schema migrations & SQL setup
├── pubspec.yaml        # Flutter project dependencies & asset definitions
└── README.md           # Project documentation
```

---

## 🛠️ Environment Configuration (Optional)

Create a `.env` file or pass compile-time flags using `--dart-define`:
```bash
flutter run -d chrome \
  --dart-define=SUPABASE_URL=your_supabase_url \
  --dart-define=SUPABASE_ANON_KEY=your_supabase_anon_key \
  --dart-define=GEMINI_API_KEY=your_gemini_api_key
```

---

## 🏆 Smart India Hackathon (SIH)
- **Project**: HunarSangam
- **Tech Stack**: Flutter (Dart), FastAPI (Python), Supabase (PostgreSQL), Gemini AI Models
