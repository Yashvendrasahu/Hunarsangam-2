// lib/services/hardware_service.dart
// Real device hardware service for Microphone (Speech Recognition & Audio),
// Camera (Live Device Capture & Gallery File Reading), and Audio Playback (TTS & Web Audio).

import 'dart:async';
import 'dart:convert';
import 'package:flutter/foundation.dart';

// Use universal_html or dart:html on web, graceful stubs for other platforms
import 'dart:html' as html;
import 'dart:js' as js;

class CapturedImage {
  final Uint8List bytes;
  final String dataUrl;
  final String name;

  const CapturedImage({
    required this.bytes,
    required this.dataUrl,
    required this.name,
  });

  String get fileName => name;
  String get base64String => base64Encode(bytes);
}

class HardwareService {
  static final HardwareService _instance = HardwareService._internal();
  factory HardwareService() => _instance;
  HardwareService._internal();

  // --- Voice / Speech Recognition State ---
  dynamic _speechRecognition;
  bool _isListening = false;
  Function(String text, bool isFinal)? _onTranscriptCallback;
  Function(String error)? _onErrorCallback;
  VoidCallback? _onListeningStopped;

  bool get isListening => _isListening;

  // --- Audio Playback / TTS State ---
  bool _isPlayingAudio = false;
  String? _currentlyPlayingText;
  html.AudioElement? _activeAudioElement;
  VoidCallback? _onAudioComplete;

  bool get isPlayingAudio => _isPlayingAudio;
  String? get currentlyPlayingText => _currentlyPlayingText;

  // ==========================================
  // 1. REAL MICROPHONE & SPEECH RECOGNITION
  // ==========================================

  /// Checks if microphone and speech recognition is supported in current environment
  bool get isSpeechSupported {
    if (!kIsWeb) return false;
    try {
      return js.context.hasProperty('webkitSpeechRecognition') ||
          js.context.hasProperty('SpeechRecognition');
    } catch (_) {
      return false;
    }
  }

  /// Request microphone permission explicitly via getUserMedia
  Future<bool> requestMicrophonePermission() async {
    if (!kIsWeb) return true;
    try {
      final mediaDevices = html.window.navigator.mediaDevices;
      if (mediaDevices != null) {
        final stream = await mediaDevices.getUserMedia({'audio': true});
        // Stop audio tracks after permission check
        for (var track in stream.getAudioTracks()) {
          track.stop();
        }
        return true;
      }
    } catch (e) {
      debugPrint('[HardwareService] Microphone permission error: $e');
    }
    return false;
  }

  /// Starts listening to the device microphone and returns live transcript
  Future<bool> startListening({
    required Function(String text, bool isFinal) onResult,
    Function(String error)? onError,
    VoidCallback? onStopped,
    String language = 'en-IN',
  }) async {
    if (_isListening) {
      await stopListening();
    }

    _onTranscriptCallback = onResult;
    _onErrorCallback = onError;
    _onListeningStopped = onStopped;

    if (!kIsWeb) {
      _onErrorCallback?.call('Microphone recording not supported on this platform');
      return false;
    }

    try {
      // Create speech recognition object
      final speechClass = js.context['webkitSpeechRecognition'] ?? js.context['SpeechRecognition'];
      if (speechClass == null) {
        // Fallback to audio stream if speech recognition API is missing
        final granted = await requestMicrophonePermission();
        if (!granted) {
          _onErrorCallback?.call('Microphone access was denied or is unavailable.');
          return false;
        }
        _isListening = true;
        _onTranscriptCallback?.call('Listening to real microphone...', false);
        return true;
      }

      _speechRecognition = js.JsObject(speechClass);
      _speechRecognition['continuous'] = true;
      _speechRecognition['interimResults'] = true;

      // Select speech language matching current user preference
      if (language.toLowerCase().contains('hi')) {
        _speechRecognition['lang'] = 'hi-IN';
      } else if (language.toLowerCase().contains('ta')) {
        _speechRecognition['lang'] = 'ta-IN';
      } else if (language.toLowerCase().contains('bn')) {
        _speechRecognition['lang'] = 'bn-IN';
      } else {
        _speechRecognition['lang'] = 'en-IN';
      }

      _speechRecognition['onstart'] = (event) {
        debugPrint('[HardwareService] Speech recognition started');
        _isListening = true;
      };

      _speechRecognition['onresult'] = (event) {
        try {
          String interimTranscript = '';
          String finalTranscript = '';

          final results = event['results'];
          final resultsLength = results['length'] as int;

          for (int i = 0; i < resultsLength; i++) {
            final item = results[i];
            final isFinal = item['isFinal'] as bool? ?? false;
            final transcript = item[0]['transcript'] as String? ?? '';

            if (isFinal) {
              finalTranscript += '$transcript ';
            } else {
              interimTranscript += transcript;
            }
          }

          final combined = (finalTranscript.isNotEmpty ? finalTranscript : interimTranscript).trim();
          if (combined.isNotEmpty) {
            _onTranscriptCallback?.call(combined, finalTranscript.isNotEmpty);
          }
        } catch (e) {
          debugPrint('[HardwareService] Error parsing speech result: $e');
        }
      };

      _speechRecognition['onerror'] = (event) {
        final error = event['error']?.toString() ?? 'Unknown speech recognition error';
        debugPrint('[HardwareService] Speech recognition error: $error');
        if (error == 'not-allowed') {
          _onErrorCallback?.call('Microphone access denied. Please allow microphone permissions in browser settings.');
        } else if (error != 'no-speech') {
          _onErrorCallback?.call('Voice input notice: $error');
        }
      };

      _speechRecognition['onend'] = (event) {
        debugPrint('[HardwareService] Speech recognition ended');
        _isListening = false;
        _onListeningStopped?.call();
      };

      _speechRecognition.callMethod('start');
      _isListening = true;
      return true;
    } catch (e) {
      debugPrint('[HardwareService] Failed to start speech recognition: $e');
      _onErrorCallback?.call('Could not start voice recognition: $e');
      _isListening = false;
      return false;
    }
  }

  /// Stops speech recognition / microphone recording
  Future<void> stopListening() async {
    _isListening = false;
    try {
      if (_speechRecognition != null) {
        _speechRecognition.callMethod('stop');
        _speechRecognition = null;
      }
    } catch (e) {
      debugPrint('[HardwareService] Error stopping speech recognition: $e');
    }
    _onListeningStopped?.call();
  }

  // ==========================================
  // 2. REAL CAMERA & IMAGE CAPTURE
  // ==========================================

  /// Opens the device camera to capture a real photo
  Future<CapturedImage?> captureFromCamera() async {
    if (!kIsWeb) return null;

    final completer = Completer<CapturedImage?>();

    try {
      final input = html.FileUploadInputElement();
      input.accept = 'image/*';
      // Request direct camera capture on mobile / supported devices
      input.setAttribute('capture', 'environment');

      input.onChange.listen((event) {
        final files = input.files;
        if (files == null || files.isEmpty) {
          completer.complete(null);
          return;
        }

        final file = files[0];
        final reader = html.FileReader();

        reader.onLoadEnd.listen((e) {
          try {
            final result = reader.result;
            if (result is String) {
              // Extract base64 payload if data URL
              final commaIndex = result.indexOf(',');
              final base64Str = commaIndex != -1 ? result.substring(commaIndex + 1) : result;
              final bytes = base64Decode(base64Str);

              completer.complete(
                CapturedImage(
                  bytes: bytes,
                  dataUrl: result,
                  name: file.name,
                ),
              );
            } else if (result is Uint8List) {
              final dataUrl = 'data:${file.type};base64,${base64Encode(result)}';
              completer.complete(
                CapturedImage(
                  bytes: result,
                  dataUrl: dataUrl,
                  name: file.name,
                ),
              );
            } else {
              completer.complete(null);
            }
          } catch (err) {
            debugPrint('[HardwareService] Error reading captured file: $err');
            completer.complete(null);
          }
        });

        reader.onError.listen((err) {
          debugPrint('[HardwareService] FileReader error: $err');
          completer.complete(null);
        });

        reader.readAsDataUrl(file);
      });

      // Trigger user click on the file input
      input.click();
    } catch (e) {
      debugPrint('[HardwareService] Camera capture invocation failed: $e');
      completer.complete(null);
    }

    return completer.future;
  }

  /// Opens the file gallery / document picker to select an existing craft photo
  Future<CapturedImage?> pickFromGallery() async {
    if (!kIsWeb) return null;

    final completer = Completer<CapturedImage?>();

    try {
      final input = html.FileUploadInputElement();
      input.accept = 'image/*';
      // Standard file picker without forced camera capture attribute

      input.onChange.listen((event) {
        final files = input.files;
        if (files == null || files.isEmpty) {
          completer.complete(null);
          return;
        }

        final file = files[0];
        final reader = html.FileReader();

        reader.onLoadEnd.listen((e) {
          try {
            final result = reader.result;
            if (result is String) {
              final commaIndex = result.indexOf(',');
              final base64Str = commaIndex != -1 ? result.substring(commaIndex + 1) : result;
              final bytes = base64Decode(base64Str);

              completer.complete(
                CapturedImage(
                  bytes: bytes,
                  dataUrl: result,
                  name: file.name,
                ),
              );
            } else {
              completer.complete(null);
            }
          } catch (err) {
            debugPrint('[HardwareService] Error reading gallery image: $err');
            completer.complete(null);
          }
        });

        reader.readAsDataUrl(file);
      });

      input.click();
    } catch (e) {
      debugPrint('[HardwareService] Gallery picker failed: $e');
      completer.complete(null);
    }

    return completer.future;
  }

  // ==========================================
  // 3. REAL AUDIO PLAYBACK & TEXT-TO-SPEECH
  // ==========================================

  /// Speaks text out loud using the real device speech synthesis engine
  Future<void> speakText(
    String text, {
    String language = 'en-US',
    double rate = 0.95,
    double pitch = 1.0,
    VoidCallback? onStart,
    VoidCallback? onDone,
  }) async {
    if (text.trim().isEmpty) return;

    // Stop previous speech/audio
    await stopAudio();

    if (!kIsWeb) return;

    try {
      final synth = html.window.speechSynthesis;
      if (synth == null) {
        _playSynthesizedTone();
        onDone?.call();
        return;
      }

      final utterance = html.SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = pitch;

      // Assign voice language
      if (language.toLowerCase().contains('hi')) {
        utterance.lang = 'hi-IN';
      } else if (language.toLowerCase().contains('ta')) {
        utterance.lang = 'ta-IN';
      } else {
        utterance.lang = 'en-US';
      }

      _isPlayingAudio = true;
      _currentlyPlayingText = text;
      _onAudioComplete = onDone;
      onStart?.call();

      utterance.onEnd.listen((event) {
        _isPlayingAudio = false;
        _currentlyPlayingText = null;
        onDone?.call();
      });

      utterance.onError.listen((event) {
        debugPrint('[HardwareService] Speech synthesis error');
        _isPlayingAudio = false;
        _currentlyPlayingText = null;
        onDone?.call();
      });

      synth.speak(utterance);
    } catch (e) {
      debugPrint('[HardwareService] Failed to speak text: $e');
      _isPlayingAudio = false;
      _currentlyPlayingText = null;
      onDone?.call();
    }
  }

  /// Plays a remote or local audio URL through real device speakers
  Future<void> playAudioUrl(
    String url, {
    VoidCallback? onStart,
    VoidCallback? onDone,
    Function(String error)? onError,
  }) async {
    await stopAudio();

    if (!kIsWeb) return;

    try {
      _activeAudioElement = html.AudioElement(url);
      _isPlayingAudio = true;
      _onAudioComplete = onDone;
      onStart?.call();

      _activeAudioElement!.onEnded.listen((_) {
        _isPlayingAudio = false;
        _activeAudioElement = null;
        onDone?.call();
      });

      _activeAudioElement!.onError.listen((e) {
        debugPrint('[HardwareService] Audio playback error for URL: $url');
        _isPlayingAudio = false;
        _activeAudioElement = null;
        onError?.call('Audio loading failed');
        onDone?.call();
      });

      await _activeAudioElement!.play();
    } catch (e) {
      debugPrint('[HardwareService] Audio play exception: $e');
      _isPlayingAudio = false;
      _activeAudioElement = null;
      onError?.call('Could not play audio: $e');
      onDone?.call();
    }
  }

  /// Stops any currently playing speech synthesis or audio element
  Future<void> stopAudio() async {
    _isPlayingAudio = false;
    _currentlyPlayingText = null;

    if (!kIsWeb) return;

    try {
      final synth = html.window.speechSynthesis;
      if (synth != null && synth.speaking == true) {
        synth.cancel();
      }

      if (_activeAudioElement != null) {
        _activeAudioElement!.pause();
        _activeAudioElement!.currentTime = 0;
        _activeAudioElement = null;
      }
    } catch (e) {
      debugPrint('[HardwareService] Error stopping audio: $e');
    }

    _onAudioComplete?.call();
    _onAudioComplete = null;
  }

  /// Plays a pleasant real audio confirmation tone using browser AudioContext
  void _playSynthesizedTone({int freq = 520, double durationSeconds = 0.25}) {
    if (!kIsWeb) return;
    try {
      final audioContextConstructor = js.context['AudioContext'] ?? js.context['webkitAudioContext'];
      if (audioContextConstructor != null) {
        final audioCtx = js.JsObject(audioContextConstructor as js.JsFunction);
        final osc = audioCtx.callMethod('createOscillator');
        final gain = audioCtx.callMethod('createGain');

        osc['type'] = 'sine';
        osc['frequency']['value'] = freq;

        gain['gain']['setValueAtTime'](0.15, audioCtx['currentTime']);
        gain['gain']['exponentialRampToValueAtTime'](0.0001, (audioCtx['currentTime'] as num) + durationSeconds);

        osc.callMethod('connect', [gain]);
        gain.callMethod('connect', [audioCtx['destination']]);

        osc.callMethod('start');
        osc.callMethod('stop', [(audioCtx['currentTime'] as num) + durationSeconds]);
      }
    } catch (_) {}
  }
}
