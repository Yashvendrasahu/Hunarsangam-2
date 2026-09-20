// lib/services/hardware_service.dart

import 'dart:async';
import 'package:flutter/foundation.dart';

class HardwareService {
  static final HardwareService _instance = HardwareService._internal();
  factory HardwareService() => _instance;
  HardwareService._internal();

  bool _isRecording = false;
  bool get isRecording => _isRecording;

  Future<void> startVoiceRecording() async {
    _isRecording = true;
  }

  Future<String?> stopVoiceRecording() async {
    _isRecording = false;
    return 'This is a premium handcrafted clay vase crafted with natural clay and baked in our traditional wood kiln for 18 hours.';
  }

  Future<bool> startListening({
    String? language,
    dynamic Function(String text, dynamic isFinal)? onResult,
    Function(String error)? onError,
    VoidCallback? onStopped,
  }) async {
    _isRecording = true;
    if (onResult != null) {
      Future.delayed(const Duration(milliseconds: 600), () {
        onResult('Handmade natural bamboo fruit basket with smooth heritage weave', true);
      });
    }
    return true;
  }

  Future<void> stopListening() async {
    _isRecording = false;
  }

  Future<void> stopAudio() async {}

  Future<void> speakText(
    String text, {
    String? language,
    String? languageCode,
    VoidCallback? onDone,
  }) async {
    if (onDone != null) {
      Future.delayed(const Duration(milliseconds: 800), onDone);
    }
  }
}
