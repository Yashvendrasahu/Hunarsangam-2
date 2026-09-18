// lib/services/collaboration_service.dart

import 'dart:async';
import '../models/collaboration_model.dart';

class CollaborationService {
  static final CollaborationService _instance = CollaborationService._internal();
  factory CollaborationService() => _instance;
  CollaborationService._internal() {
    _initDemoCollaborations();
  }

  final List<CollaborationModel> _collaborations = [];
  final _collaborationsStreamController = StreamController<List<CollaborationModel>>.broadcast();
  Stream<List<CollaborationModel>> get collaborationsStream => _collaborationsStreamController.stream;

  void _initDemoCollaborations() {
    if (_collaborations.isNotEmpty) return;

    _collaborations.addAll([
      CollaborationModel(
        id: 'collab-fabindia-guild',
        artisanId: '22222222-2222-2222-2222-222222222222',
        title: 'FabIndia 400 pcs Festive Guild Pool',
        description: 'Cooperative cluster splitting for 400 pcs basket bulk purchase order.',
        clusterName: 'Barabanki Bamboo Guild',
        partnerArtisanName: 'Sunita Devi (150 pcs) & Biren Kalita (100 pcs)',
        allocatedUnits: 250,
        status: 'open',
        createdAt: DateTime.now().subtract(const Duration(hours: 3)),
        updatedAt: DateTime.now(),
      ),
    ]);
  }

  /// Get collaboration requests
  Future<List<CollaborationModel>> getCollaborations({String? status}) async {
    await Future.delayed(const Duration(milliseconds: 150));
    if (status == null || status.isEmpty || status == 'all') {
      return List.unmodifiable(_collaborations);
    }
    return _collaborations.where((c) => c.status == status).toList();
  }

  /// Accept collaboration and form cluster guild
  Future<CollaborationModel> acceptCollaboration(String id) async {
    await Future.delayed(const Duration(milliseconds: 250));
    final index = _collaborations.indexWhere((c) => c.id == id);
    if (index == -1) {
      throw Exception('Collaboration $id not found');
    }

    final existing = _collaborations[index];
    final updated = CollaborationModel(
      id: existing.id,
      artisanId: existing.artisanId,
      buyerId: existing.buyerId,
      title: existing.title,
      description: existing.description,
      clusterName: existing.clusterName,
      partnerArtisanName: existing.partnerArtisanName,
      allocatedUnits: existing.allocatedUnits,
      status: 'active',
      createdAt: existing.createdAt,
      updatedAt: DateTime.now(),
    );

    _collaborations[index] = updated;
    _collaborationsStreamController.add(List.unmodifiable(_collaborations));
    return updated;
  }

  /// Reject / decline collaboration
  Future<bool> declineCollaboration(String id) async {
    await Future.delayed(const Duration(milliseconds: 200));
    final index = _collaborations.indexWhere((c) => c.id == id);
    if (index != -1) {
      final existing = _collaborations[index];
      _collaborations[index] = CollaborationModel(
        id: existing.id,
        artisanId: existing.artisanId,
        buyerId: existing.buyerId,
        title: existing.title,
        description: existing.description,
        clusterName: existing.clusterName,
        partnerArtisanName: existing.partnerArtisanName,
        allocatedUnits: existing.allocatedUnits,
        status: 'declined',
        createdAt: existing.createdAt,
        updatedAt: DateTime.now(),
      );
      _collaborationsStreamController.add(List.unmodifiable(_collaborations));
    }
    return true;
  }
}
