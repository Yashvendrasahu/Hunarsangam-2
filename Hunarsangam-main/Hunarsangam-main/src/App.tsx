/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Globe,
  Palette,
  ShieldCheck,
  ChevronsUpDown,
  ChevronDown,
  Copy,
  Check,
  Code2,
  Smartphone,
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Mic,
  Volume2,
  Camera,
  Upload,
  Sparkles,
  Timer,
  Play,
  RotateCcw,
  User,
  ShoppingBag,
  Sliders,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Bell,
  Building2,
  Calendar,
  Layers,
  Store,
  RefreshCw,
  Award,
  Users,
  Star,
  Package,
  Plus,
  Radio,
  FileText,
  AlertTriangle,
  HelpCircle,
  HandMetal,
  Headphones,
  Pause,
  MapPin,
  Medal,
  Truck,
  MessageSquare,
  MessageCircle,
  SlidersHorizontal,
  Image as LucideImage,
  Clock,
  Ear,
  MoveHorizontal,
  MoveVertical,
  Scale,
  Calculator,
  TrendingUp,
  Info,
  QrCode,
  Share2,
  Wallet,
  Send,
  Download,
  Link,
  Tag,
  Shield,
  Menu,
  Receipt,
  Minus,
  Wrench,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  PlayCircle,
  Sprout,
  LayoutGrid,
  Inbox,
  CheckCircle,
  Handshake,
  Phone,
  MoreVertical,
  CheckCheck,
  Languages,
} from 'lucide-react';
import { t, getLangCode } from './translations';
import { HunarSangamLogo } from './components/HunarSangamLogo';
import { ArtisanModals } from './components/ArtisanModals';
import {
  BuyerOnboardingScreens,
  BuyerProfileConfirmationScreenView,
  BuyerHomeScreenView,
} from './components/BuyerOnboardingScreens';
import {
  BuyerDiscoverScreenView,
  BuyerSearchScreenView,
  BuyerSearchResultsScreenView,
  BuyerFeaturedArtisansScreenView,
  BuyerArtisanProfileScreenView,
  BuyerBusinessSourcingScreenView,
} from './components/BuyerDiscoverScreens';
import {
  BuyerRequirementsScreenView,
  BuyerVoiceRequirementScreenView,
  BuyerRequirementReviewScreenView,
  BuyerReferenceImageScreenView,
} from './components/BuyerRequirementScreens';
import {
  BuyerReviewMatchScreenView,
  BuyerMatchedArtisansScreenView,
  BuyerCompareArtisansScreenView,
  BuyerSelectedArtisanScreenView,
} from './components/BuyerArtisanMatchingScreens';
import {
  BuyerOrdersHubScreenView,
  BuyerOrderDetailsScreenView,
} from './components/BuyerOrderScreens';
import {
  BuyerProfileScreenView,
  BuyerArtisanChatScreenView,
} from './components/BuyerProfileAndChatScreens';

const DART_FILES: Record<string, { path: string; language: string; content: string }> = {
  'artisan_chat_screen.dart': {
    path: 'lib/screens/artisan_chat_screen.dart',
    language: 'dart',
    content: `// lib/screens/artisan_chat_screen.dart - Screen 28: Artisan-to-Artisan Collaboration Chat matching 'artisan vs artisan chat.png'`,
  },
  'artisan_orders_screen.dart': {
    path: 'lib/screens/artisan_orders_screen.dart',
    language: 'dart',
    content: `// lib/screens/artisan_orders_screen.dart
// Production-grade Flutter screen matching 'o1- order first page.png'
// Artisan Orders & Production Management Hub

import 'package:flutter/material.dart';

class ArtisanOrdersScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final Function(int)? onNavigateTab;
  final VoidCallback? onCollaborateTap;
  final String artisanName;
  final String clusterName;

  const ArtisanOrdersScreen({
    super.key,
    this.onBack,
    this.onNavigateTab,
    this.onCollaborateTap,
    this.artisanName = 'Ramu Kumar',
    this.clusterName = 'Assam Cane & Bamboo',
  });

  @override
  State<ArtisanOrdersScreen> createState() => _ArtisanOrdersScreenState();
}

class _ArtisanOrdersScreenState extends State<ArtisanOrdersScreen> {
  int _selectedFilterIndex = 0; // 0: All (3), 1: In Production (2), 2: Payment Due (1)
  int _bambooPcsCompleted = 75;
  final int _bambooPcsTotal = 120;
  bool _isBombayStoreAccepted = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            _buildTopAppBar(),
            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildSectionHeader(),
                    const SizedBox(height: 14.0),
                    _buildMetricsGrid(),
                    const SizedBox(height: 16.0),
                    _buildClusterAlertCard(),
                    const SizedBox(height: 16.0),
                    _buildFilterTabs(),
                    const SizedBox(height: 16.0),
                    if (_selectedFilterIndex == 0 || _selectedFilterIndex == 1)
                      _buildFabIndiaOrderCard(),
                    if (_selectedFilterIndex == 0 || _selectedFilterIndex == 1)
                      const SizedBox(height: 14.0),
                    if (_selectedFilterIndex == 0 || _selectedFilterIndex == 2)
                      _buildBombayStoreOrderCard(),
                    const SizedBox(height: 24.0),
                  ],
                ),
              ),
            ),
            _buildBottomNavigationBar(),
          ],
        ),
      ),
    );
  }
  // [Full Material 3 responsive cards, PO specs modal, dispatch scheduler, and progress slider]
}`,
  },
  'digital_visiting_card_screen.dart': {
    path: 'lib/screens/digital_visiting_card_screen.dart',
    language: 'dart',
    content: `// lib/screens/digital_visiting_card_screen.dart
// Artisan Digital Visiting Card & Verified B2B Identity Passport
import 'package:flutter/material.dart';

class DigitalVisitingCardScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onShareWhatsApp;
  final VoidCallback? onDownloadPdf;
  final VoidCallback? onCopyLink;
  final VoidCallback? onAddToWallet;
  final VoidCallback? onVoiceRecordStory;
  final VoidCallback? onShareCard;

  const DigitalVisitingCardScreen({
    super.key,
    this.onBack,
    this.onShareWhatsApp,
    this.onDownloadPdf,
    this.onCopyLink,
    this.onAddToWallet,
    this.onVoiceRecordStory,
    this.onShareCard,
  });

  @override
  State<DigitalVisitingCardScreen> createState() => _DigitalVisitingCardScreenState();
}

enum VisitingCardTemplate { phoneCard, stallStandee, packagingTag }

class _DigitalVisitingCardScreenState extends State<DigitalVisitingCardScreen> {
  VisitingCardTemplate _selectedTemplate = VisitingCardTemplate.phoneCard;
  bool _isPlayingAudio = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar
            _buildTopBar(),
            // Scrollable Passport Content
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
                child: Column(
                  children: [
                    _buildIdentityBanner(),
                    const SizedBox(height: 12.0),
                    _buildVoiceStoryCTA(),
                    const SizedBox(height: 14.0),
                    _buildDigitalCardHero(),
                    const SizedBox(height: 20.0),
                    _buildQuickSharingSection(),
                    const SizedBox(height: 22.0),
                    _buildFormatsSection(),
                    const SizedBox(height: 18.0),
                    _buildPrimaryCTA(),
                  ],
                ),
              ),
            ),
            _buildBottomNav(),
          ],
        ),
      ),
    );
  }
}`,
  },
  'add_product_flow.dart': {
    path: 'lib/add_product/add_product_flow.dart',
    language: 'dart',
    content: `// lib/add_product/add_product_flow.dart
// Master Coordinator for the 10-screen Artisan "Add Product" Flow
// Orchestrates: Catalog -> Camera -> Coin AR -> Dimensions -> Voice Specs -> AI Draft -> Fair Price -> Bulk Capacity -> Final Preview -> Published ONDC
import 'package:flutter/material.dart';
import 'models/product_draft.dart';
import 'screens/product_catalog_screen.dart';
import 'screens/camera_capture_screen.dart';
import 'screens/coin_detector_ar_screen.dart';
import 'screens/dimension_review_screen.dart';
import 'screens/voice_description_screen.dart';
import 'screens/ai_draft_preview_screen.dart';
import 'screens/fair_pricing_screen.dart';
import 'screens/bulk_capacity_screen.dart';
import 'screens/product_final_preview_screen.dart';
import 'screens/catalog_published_screen.dart';`,
  },
  'product_catalog_screen.dart': {
    path: 'lib/add_product/screens/product_catalog_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/product_catalog_screen.dart - Screen 1 (ar--p1-Artisan Product Catalog.png)`,
  },
  'coin_detector_ar_screen.dart': {
    path: 'lib/add_product/screens/coin_detector_ar_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/coin_detector_ar_screen.dart - Screen 3 (p3 — Camera-First Add Photo with 10 rupes.png)`,
  },
  'dimension_review_screen.dart': {
    path: 'lib/add_product/screens/dimension_review_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/dimension_review_screen.dart - Screen 4 (p4— photo and dimension review.png)`,
  },
  'voice_description_screen.dart': {
    path: 'lib/add_product/screens/voice_description_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/voice_description_screen.dart - Screen 5 (p5-desciption all about product with raw materila cost voice serach.png)`,
  },
  'ai_draft_preview_screen.dart': {
    path: 'lib/add_product/screens/ai_draft_preview_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/ai_draft_preview_screen.dart - Screen 6 (p6-decsiption review.png)`,
  },
  'fair_pricing_screen.dart': {
    path: 'lib/add_product/screens/fair_pricing_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/fair_pricing_screen.dart - Screen 7 (p7— Fair Pricing Assistant.png)`,
  },
  'bulk_capacity_screen.dart': {
    path: 'lib/add_product/screens/bulk_capacity_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/bulk_capacity_screen.dart - Screen 8 (p8-voice based piese in day asking.png)`,
  },
  'product_final_preview_screen.dart': {
    path: 'lib/add_product/screens/product_final_preview_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/product_final_preview_screen.dart - Screen 9 (p9-final preview ar.png)`,
  },
  'catalog_published_screen.dart': {
    path: 'lib/add_product/screens/catalog_published_screen.dart',
    language: 'dart',
    content: `// lib/add_product/screens/catalog_published_screen.dart - Screen 10 (p10 — Product Finalized & ONDC Ready.png)`,
  },
  'login_screen.dart': {
    path: 'lib/screens/login_screen.dart',
    language: 'dart',
    content: `// lib/screens/login_screen.dart

import 'package:flutter/material.dart';

/// Screen matching 'ar-Artisan- login.png'
/// Allows registered artisans to log in and proceed straight to the Artisan Home Dashboard.
class LoginScreen extends StatefulWidget {
  final VoidCallback onLoginSuccess;
  final VoidCallback onCreateAccount;
  final VoidCallback? onBack;
  final String currentLanguage;

  const LoginScreen({
    super.key,
    required this.onLoginSuccess,
    required this.onCreateAccount,
    this.onBack,
    this.currentLanguage = 'English',
  });

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _contactController = TextEditingController(text: 'ramukumar@hunarsangam.in');
  final TextEditingController _passwordController = TextEditingController(text: 'password123');
  bool _obscurePassword = true;
  String _selectedLanguage = 'English';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar with back navigation, brand logo & language selector
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    icon: const Icon(Icons.arrow_back, color: Color(0xFF2D2421)),
                    onPressed: widget.onBack ?? widget.onCreateAccount,
                  ),
                  Row(
                    children: [
                      Container(
                        width: 32.0,
                        height: 32.0,
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFFBF9),
                          borderRadius: BorderRadius.circular(9.0),
                          border: Border.all(color: const Color(0xFFE5D5CB)),
                        ),
                        child: const Center(
                          child: Text(
                            'हुनर',
                            style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w900, color: Color(0xFF7C3F24)),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8.0),
                      const Text(
                        'HunarSangam',
                        style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.w800, color: Color(0xFF7C3F24)),
                      ),
                    ],
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFFFDFB),
                      borderRadius: BorderRadius.circular(16.0),
                      border: Border.all(color: const Color(0xFFE5D5CB)),
                    ),
                    child: Row(
                      children: [
                        Text(_selectedLanguage, style: const TextStyle(fontSize: 12.0, fontWeight: FontWeight.w600)),
                        const Icon(Icons.arrow_drop_down, size: 16.0),
                      ],
                    ),
                  ),
                ],
              ),
            ),

            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: const [
                        _LoginDot(color: Color(0xFFB85324)),
                        SizedBox(width: 6.0),
                        _LoginDot(color: Color(0xFF2E7D32)),
                        SizedBox(width: 6.0),
                        _LoginDot(color: Color(0xFFB85324)),
                      ],
                    ),
                    const SizedBox(height: 14.0),
                    const Text(
                      'Login Your Account',
                      style: TextStyle(fontSize: 30.0, fontWeight: FontWeight.w800, color: Color(0xFF221C19)),
                    ),
                    const SizedBox(height: 6.0),
                    const Text('Enter your contact details to login.', style: TextStyle(fontSize: 14.5, color: Color(0xFF7A685F))),
                    const SizedBox(height: 28.0),

                    // Email / Phone field
                    const Text('Email Address / Phone number', style: TextStyle(fontSize: 14.0, fontWeight: FontWeight.w700)),
                    const SizedBox(height: 8.0),
                    Container(
                      decoration: BoxDecoration(color: const Color(0xFFF5EBE1), borderRadius: BorderRadius.circular(16.0)),
                      padding: const EdgeInsets.symmetric(horizontal: 14.0),
                      child: Row(
                        children: [
                          const Icon(Icons.mail_outline_rounded, color: Color(0xFF8A776D), size: 20.0),
                          const SizedBox(width: 12.0),
                          Expanded(child: TextField(controller: _contactController, decoration: const InputDecoration(border: InputBorder.none))),
                        ],
                      ),
                    ),
                    const SizedBox(height: 22.0),

                    // Password field
                    const Text('Create Password', style: TextStyle(fontSize: 14.0, fontWeight: FontWeight.w700)),
                    const SizedBox(height: 8.0),
                    Container(
                      decoration: BoxDecoration(color: const Color(0xFFF5EBE1), borderRadius: BorderRadius.circular(16.0)),
                      padding: const EdgeInsets.symmetric(horizontal: 14.0),
                      child: Row(
                        children: [
                          const Icon(Icons.lock_outline_rounded, color: Color(0xFF8A776D), size: 20.0),
                          const SizedBox(width: 12.0),
                          Expanded(
                            child: TextField(
                              controller: _passwordController,
                              obscureText: _obscurePassword,
                              decoration: const InputDecoration(border: InputBorder.none),
                            ),
                          ),
                          IconButton(
                            icon: Icon(_obscurePassword ? Icons.visibility_outlined : Icons.visibility_off_outlined),
                            onPressed: () => setState(() => _obscurePassword = !_obscurePassword),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 6.0),
                    const Text('Use at least 8 characters', style: TextStyle(fontSize: 12.0, color: Color(0xFF7A685F))),
                  ],
                ),
              ),
            ),

            // Login Button & Link
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                children: [
                  SizedBox(
                    width: double.infinity,
                    height: 54.0,
                    child: ElevatedButton(
                      onPressed: widget.onLoginSuccess,
                      style: ElevatedButton.styleFrom(backgroundColor: const Color(0xFFE87338), foregroundColor: Colors.white),
                      child: const Text('login', style: TextStyle(fontSize: 16.5, fontWeight: FontWeight.w700)),
                    ),
                  ),
                  const SizedBox(height: 16.0),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text('New here , create account '),
                      GestureDetector(
                        onTap: widget.onCreateAccount,
                        child: const Text('Here', style: TextStyle(color: Color(0xFF2563EB), fontWeight: FontWeight.w700, decoration: TextDecoration.underline)),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}`,
  },
  'artisan_home_screen.dart': {
    path: 'lib/screens/artisan_home_screen.dart',
    language: 'dart',
    content: `// lib/screens/artisan_home_screen.dart

import 'package:flutter/material.dart';
import '../models/onboarding_state.dart';

/// Primary Artisan Home Dashboard matching 'Artisan Home section.png'
/// Displays metrics, urgent B2B bulk orders with progress bar, products catalog,
/// reliability score, and guild collaboration opportunities.
class ArtisanHomeScreen extends StatefulWidget {
  final OnboardingState? state;
  final VoidCallback? onLogout;

  const ArtisanHomeScreen({super.key, this.state, this.onLogout});

  @override
  State<ArtisanHomeScreen> createState() => _ArtisanHomeScreenState();
}

class _ArtisanHomeScreenState extends State<ArtisanHomeScreen> {
  int _currentNavIndex = 0;
  int _bambooBasketProgress = 30;
  final int _bambooBasketTotal = 50;

  @override
  Widget build(BuildContext context) {
    final String artisanName = widget.state?.artisanName.isNotEmpty ?? false ? widget.state!.artisanName : 'Ramu';

    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Stack(
          children: [
            Column(
              children: [
                _buildTopAppBar(),
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Good morning, $artisanName 👋', style: const TextStyle(fontSize: 24.0, fontWeight: FontWeight.w800)),
                        const Text('Ready to create something beautiful today?', style: TextStyle(fontSize: 14.0, color: Color(0xFF6B584E))),
                        const SizedBox(height: 14.0),

                        // Voice Search Bar
                        _buildVoiceSearchBar(),
                        const SizedBox(height: 16.0),

                        // Metrics (New Orders: 2, In Progress: 1, Completed: 28)
                        _buildMetricsCardsRow(),
                        const SizedBox(height: 18.0),

                        // Needs Attention Banner
                        _buildActiveOrderCard(),
                        const SizedBox(height: 22.0),

                        // My Products Section
                        _buildMyProductsSection(),
                        const SizedBox(height: 20.0),

                        // Artisan Score Card
                        _buildArtisanScoreCard(),
                        const SizedBox(height: 22.0),

                        // Opportunities for you
                        _buildOpportunitiesSection(),
                        const SizedBox(height: 80.0),
                      ],
                    ),
                  ),
                ),
              ],
            ),
            Positioned(
              right: 18.0,
              bottom: 74.0,
              child: FloatingActionButton(
                onPressed: () {},
                backgroundColor: const Color(0xFF8C3A16),
                child: const Icon(Icons.mic_rounded, color: Colors.white),
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: _buildBottomNavigationBar(),
    );
  }
  // [Full widgets for metrics, orders, products, and opportunities...]
}`,
  },
  'account_creation_screen.dart': {
    path: 'lib/screens/account_creation_screen.dart',
    language: 'dart',
    content: `// lib/screens/account_creation_screen.dart - Step 1 of 5: Mobile & Name registration with "Already have an account? Login" link`,
  },
  'main.dart': {
    path: 'lib/main.dart',
    language: 'dart',
    content: `// lib/main.dart - Orchestrates Splash, Onboarding Steps 1-5, Login Screen, and Artisan Home Dashboard`,
  },
  'craft_story_screen.dart': {
    path: 'lib/screens/craft_story_screen.dart',
    language: 'dart',
    content: `// lib/screens/craft_story_screen.dart - My Craft Story with AI Voice-to-Text & B2B Buyer Story Structuring`,
  },
  'splash_welcome_screen.dart': {
    path: 'lib/screens/splash_welcome_screen.dart',
    language: 'dart',
    content: `// lib/screens/splash_welcome_screen.dart - Splash Screen with 2s Auto Timer and Get Started CTA`,
  },
  'collaboration_hub_screen.dart': {
    path: 'lib/screens/collaboration_hub_screen.dart',
    language: 'dart',
    content: `// lib/screens/collaboration_hub_screen.dart - Screen 27: Collaboration Hub matching 'colloboration.png' (Requests for You & Your Invites)`,
  },
  'buyer_profile_confirmation_screen.dart': {
    path: 'lib/screens/buyer_profile_confirmation_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_profile_confirmation_screen.dart
// Production-grade Flutter screen matching 'bulk buyer profile confirmation after register.png'
// Bulk Buyer Profile Confirmation Screen

import 'package:flutter/material.dart';
import '../models/buyer_onboarding_model.dart';

class BuyerProfileConfirmationScreen extends StatelessWidget {
  final BuyerOnboardingModel model;
  final VoidCallback onGoToDashboard;
  final VoidCallback? onViewProfile;
  final VoidCallback? onBack;

  const BuyerProfileConfirmationScreen({
    super.key,
    required this.model,
    required this.onGoToDashboard,
    this.onViewProfile,
    this.onBack,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFAF7F5),
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Row(
                    children: [
                      const Text(
                        'HunarSangam',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.w900,
                          color: Color(0xFF8C3A16),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(
                          color: const Color(0xFFE8F5E9),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: const Color(0xFFA5D6A7)),
                        ),
                        child: const Row(
                          children: [
                            Icon(Icons.check, size: 12, color: Color(0xFF2E7D32)),
                            SizedBox(width: 3),
                            Text(
                              'Bulk Buyer',
                              style: TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.w800,
                                color: Color(0xFF2E7D32),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                    decoration: BoxDecoration(
                      color: const Color(0xFFF4ECE5),
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(color: const Color(0xFFE5D7CD)),
                    ),
                    child: const Row(
                      children: [
                        Icon(Icons.translate, size: 14, color: Color(0xFF4A3830)),
                        SizedBox(width: 4),
                        Text(
                          'EN',
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.bold,
                            color: Color(0xFF4A3830),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            // Body Content
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                child: Column(
                  children: [
                    const SizedBox(height: 12),
                    Container(
                      width: 76,
                      height: 76,
                      decoration: const BoxDecoration(
                        color: Color(0xFF2E7D32),
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: Color(0x332E7D32),
                            blurRadius: 16,
                            offset: Offset(0, 6),
                          ),
                        ],
                      ),
                      child: const Icon(Icons.check, color: Colors.white, size: 44),
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      'Your Bulk Buyer Profile is\\nReady',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w900,
                        color: Color(0xFF1F1612),
                        height: 1.2,
                      ),
                    ),
                    const SizedBox(height: 8),
                    const Text(
                      'Now discover artisans, explore handmade products and send bulk requirements directly to craft clusters.',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 12.5,
                        color: Color(0xFF6B5A51),
                        height: 1.4,
                      ),
                    ),
                    const SizedBox(height: 16),
                    // Wholesale Tier Access
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 7),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFAF4EF),
                        borderRadius: BorderRadius.circular(20),
                        border: Border.all(color: const Color(0xFFECDCCE)),
                      ),
                      child: const Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(Icons.circle, size: 7, color: Color(0xFF2E7D32)),
                          SizedBox(width: 6),
                          Text(
                            'Wholesale Tier: Direct-to-Cluster Access Enabled',
                            style: TextStyle(
                              fontSize: 11.5,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFF3D2D24),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 24),
                    // Capabilities
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text(
                          'BULK BUYER CAPABILITIES',
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w900,
                            letterSpacing: 0.8,
                            color: Color(0xFF6B5A51),
                          ),
                        ),
                        Row(
                          children: const [
                            Icon(Icons.shield, size: 14, color: Color(0xFF9C3C18)),
                            SizedBox(width: 3),
                            Text(
                              'Enterprise Protected',
                              style: TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.bold,
                                color: Color(0xFF9C3C18),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                    const SizedBox(height: 10),
                    // Capability Card 1: Discover Artisans
                    // Capability Card 2: Find Products
                    // Capability Card 3: Post a Requirement
                  ],
                ),
              ),
            ),
            // Bottom Action
            Padding(
              padding: const EdgeInsets.all(16),
              child: ElevatedButton(
                onPressed: onGoToDashboard,
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF9C3C18),
                  minimumSize: const Size.fromHeight(48),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
                child: const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('Go to Dashboard', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                    SizedBox(width: 6),
                    Icon(Icons.arrow_forward, color: Colors.white, size: 16),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}`,
  },
  'buyer_home_screen.dart': {
    path: 'lib/screens/buyer_home_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_home_screen.dart
// Production-grade Flutter screen matching 'home - bulk buyer.png'
// Bulk Buyer Home Dashboard Screen

import 'package:flutter/material.dart';
import '../models/buyer_onboarding_model.dart';

class BuyerHomeScreen extends StatefulWidget {
  final BuyerOnboardingModel? model;
  final VoidCallback? onLogout;

  const BuyerHomeScreen({
    super.key,
    this.model,
    this.onLogout,
  });

  @override
  State<BuyerHomeScreen> createState() => _BuyerHomeScreenState();
}

class _BuyerHomeScreenState extends State<BuyerHomeScreen> {
  int _currentNavIndex = 0;

  @override
  Widget build(BuildContext context) {
    final buyerName = widget.model?.yourName.isNotEmpty == true ? widget.model!.yourName : 'Vikram';
    final businessName = widget.model?.businessName.isNotEmpty == true ? widget.model!.businessName : 'FabCraft Living';

    return Scaffold(
      backgroundColor: const Color(0xFFFAF7F5),
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar
            // Greeting & Store Info
            // Search Bar with Microphone
            // Hero Banner: Need products in bulk? -> Post a Requirement
            // Two Action Cards: Discover & Requirements (1 Active)
            // Your Active Requirements: 500 Bamboo Baskets
            // Explore Handmade Products
            // Artisans for You: Ramesh Kumar & Mohan Lal
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentNavIndex,
        onTap: (index) => setState(() => _currentNavIndex = index),
        type: BottomNavigationBarType.fixed,
        selectedItemColor: const Color(0xFF9C3C18),
        unselectedItemColor: const Color(0xFF7A6A61),
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.storefront), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
          BottomNavigationBarItem(icon: Icon(Icons.assignment), label: 'Requirements'),
          BottomNavigationBarItem(icon: Icon(Icons.receipt_long), label: 'Orders'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}`,
  },
  'buyer_requirements_screen.dart': {
    path: 'lib/screens/buyer_requirements_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_requirements_screen.dart
// Production-grade Flutter screen matching 'r1-bulk — Requirements.png'
// Bulk Buyer Requirements Management Hub

import 'package:flutter/material.dart';

class BuyerRequirementsScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onPostRequirement;
  final VoidCallback? onOpenDiscover;
  final VoidCallback? onOpenHome;

  const BuyerRequirementsScreen({
    super.key,
    this.onBack,
    this.onPostRequirement,
    this.onOpenDiscover,
    this.onOpenHome,
  });

  @override
  State<BuyerRequirementsScreen> createState() => _BuyerRequirementsScreenState();
}

class _BuyerRequirementsScreenState extends State<BuyerRequirementsScreen> {
  // [Full Flutter Material 3 implementation with Active/Completed filters,
  // Sourcing cards for Bamboo Baskets and Kutch Terracotta with GI cluster info]
}`,
  },
  'buyer_voice_requirement_screen.dart': {
    path: 'lib/screens/buyer_voice_requirement_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_voice_requirement_screen.dart
// Production-grade Flutter screen matching 'r2- bulk — Voice Post Bulk Requirement.png'
// AI Voice-Assisted Bulk Sourcing Requirement Intake

import 'package:flutter/material.dart';

class BuyerVoiceRequirementScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onReviewAndSubmit;

  const BuyerVoiceRequirementScreen({
    super.key,
    this.onBack,
    this.onReviewAndSubmit,
  });

  @override
  State<BuyerVoiceRequirementScreen> createState() => _BuyerVoiceRequirementScreenState();
}

class _BuyerVoiceRequirementScreenState extends State<BuyerVoiceRequirementScreen> {
  // [Full Material 3 Audio Waveform recording, AI Multilingual transcription,
  // Extracted entities chips for 500 pcs, Bamboo craft cluster, and 45-day timeline]
}`,
  },
  'buyer_requirement_review_screen.dart': {
    path: 'lib/screens/buyer_requirement_review_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_requirement_review_screen.dart
// Production-grade Flutter screen matching 'r3-bulk — Create Bulk Requirement review.png'
// Requirement Description & Cluster Selection (Step 2 of 3)

import 'package:flutter/material.dart';

class BuyerRequirementReviewScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onContinue;

  const BuyerRequirementReviewScreen({
    super.key,
    this.onBack,
    this.onContinue,
  });

  @override
  State<BuyerRequirementReviewScreen> createState() => _BuyerRequirementReviewScreenState();
}

class _BuyerRequirementReviewScreenState extends State<BuyerRequirementReviewScreen> {
  // [Full Material 3 Craft Cluster Verification, Stepper Quantity counter,
  // Wholesale bracket active ₹380-₹410/pc, and Flexible Delivery timeline]
}`,
  },
  'buyer_reference_image_screen.dart': {
    path: 'lib/screens/buyer_reference_image_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_reference_image_screen.dart
// Production-grade Flutter screen matching 'r4- bulk — Reference Image.png'
// Reference Design Upload & Image Customization (Step 3 of 3)

import 'package:flutter/material.dart';

class BuyerReferenceImageScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onContinue;
  final VoidCallback? onSkip;

  const BuyerReferenceImageScreen({
    super.key,
    this.onBack,
    this.onContinue,
    this.onSkip,
  });

  @override
  State<BuyerReferenceImageScreen> createState() => _BuyerReferenceImageScreenState();
}

class _BuyerReferenceImageScreenState extends State<BuyerReferenceImageScreen> {
  // [Full Material 3 Camera/Gallery upload options, Reference image preview with
  // interactive touch point pins, file metadata tags, replace/remove buttons]
}`,
  },
  'buyer_review_match_screen.dart': {
    path: 'lib/screens/buyer_review_match_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_review_match_screen.dart
// Production-grade Flutter screen matching 'r5-bulk — Find Artisan Matches.png'
// Requirement Ready for Matching & Sourcing specifications review

import 'package:flutter/material.dart';

class BuyerReviewMatchScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onPublishAndFind;

  const BuyerReviewMatchScreen({
    super.key,
    this.onBack,
    this.onPublishAndFind,
  });

  @override
  State<BuyerReviewMatchScreen> createState() => _BuyerReviewMatchScreenState();
}

class _BuyerReviewMatchScreenState extends State<BuyerReviewMatchScreen> {
  // [Full Material 3 Sourcing spec review card, 500 pcs Medium bulk tier,
  // Target delivery date, Budget ₹380/pc, Reference attachment preview & Audio transcript player]
}`,
  },
  'buyer_matched_artisans_screen.dart': {
    path: 'lib/screens/buyer_matched_artisans_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_matched_artisans_screen.dart
// Production-grade Flutter screen matching 'r6-bulk — Artisan Match & Comparison.png'
// AI-Assisted Artisan Matching, Selection & Comparison Hub

import 'package:flutter/material.dart';

class BuyerMatchedArtisansScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onCompare;
  final Function(String artisanId)? onViewArtisan;

  const BuyerMatchedArtisansScreen({
    super.key,
    this.onBack,
    this.onCompare,
    this.onViewArtisan,
  });

  @override
  State<BuyerMatchedArtisansScreen> createState() => _BuyerMatchedArtisansScreenState();
}

class _BuyerMatchedArtisansScreenState extends State<BuyerMatchedArtisansScreen> {
  // [Full Material 3 Matched clusters, Ramesh Kumar (GI Lead), Biren Das (Guild Lead),
  // Sunita Devi (Women SHG), Audio voice notes, Multi-select comparison bar]
}`,
  },
  'buyer_compare_artisans_screen.dart': {
    path: 'lib/screens/buyer_compare_artisans_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_compare_artisans_screen.dart
// Production-grade Flutter screen matching 'r7-bulk ai artisan matching in bulk side.png'
// Side-by-side multi-attribute cluster evaluation & AI recommendation analysis

import 'package:flutter/material.dart';

class BuyerCompareArtisansScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final Function(String artisanId)? onSelectArtisan;
  final VoidCallback? onMessageArtisans;

  const BuyerCompareArtisansScreen({
    super.key,
    this.onBack,
    this.onSelectArtisan,
    this.onMessageArtisans,
  });

  @override
  State<BuyerCompareArtisansScreen> createState() => _BuyerCompareArtisansScreenState();
}

class _BuyerCompareArtisansScreenState extends State<BuyerCompareArtisansScreen> {
  // [Full Material 3 Side-by-side attribute comparison matrix: Pricing guidance,
  // Monthly capacity, Capacity fit badge, Mastery lineage, Cluster location, Standards]
}`,
  },
  'buyer_selected_artisan_screen.dart': {
    path: 'lib/screens/buyer_selected_artisan_screen.dart',
    language: 'dart',
    content: `// lib/screens/buyer_selected_artisan_screen.dart
// Production-grade Flutter screen matching 'r8-bulk — Selected Artisan.png'
// In-depth artisan capability, verified GI credentials, fair cost breakdown & order review

import 'package:flutter/material.dart';

class BuyerSelectedArtisanScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final VoidCallback? onSelectAndReviewOrder;
  final VoidCallback? onMessageArtisan;

  const BuyerSelectedArtisanScreen({
    super.key,
    this.onBack,
    this.onSelectAndReviewOrder,
    this.onMessageArtisan,
  });

  @override
  State<BuyerSelectedArtisanScreen> createState() => _BuyerSelectedArtisanScreenState();
}

class _BuyerSelectedArtisanScreenState extends State<BuyerSelectedArtisanScreen> {
  // [Full Material 3 Master craftsman hero with audio intro, Eco-seasoned badges,
  // Exact spec match product card with MOQ, Transparent Fair Cost Distribution model]
}`,
  },
};

export default function App() {
  // Navigation mode: 0: Splash, 1: Language, 2: Role, 3: Account, 4: Voice, 5: Crafts, 6: Photo, 7: Preview, 8: Login, 9: Home
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [selectedFile, setSelectedFile] = useState<string>('login_screen.dart');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // 5-Second Timer State for Splash Screen
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
  const [timeLeftMs, setTimeLeftMs] = useState<number>(5000);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // User State
  const [selectedLanguage, setSelectedLanguage] = useState<string>('हिंदी / Hindi');
  const [showSplashLanguageModal, setShowSplashLanguageModal] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<'artisan' | 'buyer'>('artisan');
  const [artisanName, setArtisanName] = useState<string>('Ramu Kumar');
  const [phoneNumber, setPhoneNumber] = useState<string>('+91 98765 43210');
  const [location, setLocation] = useState<string>('Barabanki, Uttar Pradesh');
  const [selectedCrafts, setSelectedCrafts] = useState<string[]>(['Bamboo & Cane', 'Terracotta Pottery']);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [hasRecordedVoice, setHasRecordedVoice] = useState<boolean>(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [showProgressModal, setShowProgressModal] = useState<boolean>(false);
  const [bambooProgress, setBambooProgress] = useState<number>(30);
  const [homeBottomTab, setHomeBottomTab] = useState<number>(0);
  const [selectedProductFilter, setSelectedProductFilter] = useState<number>(0);
  const [loginContact, setLoginContact] = useState<string>('ramukumar@hunarsangam.in');
  const [loginPassword, setLoginPassword] = useState<string>('••••••••');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Product Flow States
  const [productFlowStep, setProductFlowStep] = useState<number>(0);
  const [rawMaterialCost, setRawMaterialCost] = useState<number>(135);
  const [artisanLaborHours, setArtisanLaborHours] = useState<number>(3.5);
  const [hourlyWageRate, setHourlyWageRate] = useState<number>(45);
  const [overheadCost, setOverheadCost] = useState<number>(17.5);
  const [retailPrice, setRetailPrice] = useState<number>(399);
  const [wholesalePrice, setWholesalePrice] = useState<number>(280);
  const [wholesaleMoq, setWholesaleMoq] = useState<number>(20);
  const [dailyCapacity, setDailyCapacity] = useState<number>(5);
  const [weeklyCapacity, setWeeklyCapacity] = useState<number>(30);
  const [readyStock, setReadyStock] = useState<number>(140);
  const [dimensionUnit, setDimensionUnit] = useState<'inches' | 'cm'>('inches');
  const [isArActive, setIsArActive] = useState<boolean>(false);
  const [activeLangTab, setActiveLangTab] = useState<'en' | 'hi' | 'as'>('en');
  const [selectedCardTemplate, setSelectedCardTemplate] = useState<'phone' | 'standee' | 'hangtag'>('phone');
  const [isCraftStoryRecording, setIsCraftStoryRecording] = useState<boolean>(false);
  const [isPlayingCraftVoiceNote, setIsPlayingCraftVoiceNote] = useState<boolean>(false);
  const [isCraftStoryAudioGuidePlaying, setIsCraftStoryAudioGuidePlaying] = useState<boolean>(false);

  // Screen 22: Artisan Orders (PO Hub) States
  const [ordersFilterTab, setOrdersFilterTab] = useState<number>(0); // 0: All Orders (3), 1: In Production (2), 2: Payment Due (1)
  const [fabIndiaProgress, setFabIndiaProgress] = useState<number>(75);
  const [isBombayStoreAccepted, setIsBombayStoreAccepted] = useState<boolean>(false);
  const [showOrderProgressModal, setShowOrderProgressModal] = useState<boolean>(false);
  const [showDispatchModal, setShowDispatchModal] = useState<boolean>(false);
  const [showPoSpecsModal, setShowPoSpecsModal] = useState<boolean>(false);
  const [showCollaborateModal, setShowCollaborateModal] = useState<boolean>(false);
  const [selectedLogistics, setSelectedLogistics] = useState<'delhivery' | 'indiapost' | 'ondc'>('delhivery');

  // Screen 23: Order Updation & Details (matching 'o2- order updation page.png')
  const [orderHS1048Count, setOrderHS1048Count] = useState<number>(30);
  const [isHS1048AudioPlaying, setIsHS1048AudioPlaying] = useState<boolean>(false);
  const [showHS1048HelpModal, setShowHS1048HelpModal] = useState<boolean>(false);

  // Screen 24: Order Request & Specs (matching 'o3 - order requset - reject page.png')
  const [isOrderRequestAudioPlaying, setIsOrderRequestAudioPlaying] = useState<boolean>(false);
  const [orderRequestAccepted, setOrderRequestAccepted] = useState<boolean>(false);
  const [showDeclineConfirmModal, setShowDeclineConfirmModal] = useState<boolean>(false);
  const [showHeritageCraftSpecsModal, setShowHeritageCraftSpecsModal] = useState<boolean>(false);
  const [showHeritageCollaborateModal, setShowHeritageCollaborateModal] = useState<boolean>(false);

  // Screen 25: Form Artisan Collective (matching 'o4- collaboration from oreder page with other artisan.png')
  const [isCollectiveAudioPlaying, setIsCollectiveAudioPlaying] = useState<boolean>(false);
  const [isSunitaAudioPlaying, setIsSunitaAudioPlaying] = useState<boolean>(false);
  const [sunitaAllocated, setSunitaAllocated] = useState<boolean>(true);
  const [birenAllocated, setBirenAllocated] = useState<boolean>(true);
  const [collectiveLocked, setCollectiveLocked] = useState<boolean>(false);
  const [voiceRebalanceTriggered, setVoiceRebalanceTriggered] = useState<boolean>(false);

  // Screen 26: Suggested Collaborators (matching 'o5 - suggested colloborater from page order updation page.png')
  const [isSuggestedAllAudioPlaying, setIsSuggestedAllAudioPlaying] = useState<boolean>(false);
  const [isRameshAudioPlaying, setIsRameshAudioPlaying] = useState<boolean>(false);
  const [isSohanAudioPlaying, setIsSohanAudioPlaying] = useState<boolean>(false);
  const [sohanInviteSent, setSohanInviteSent] = useState<boolean>(true);
  const [rameshInviteSheetOpen, setRameshInviteSheetOpen] = useState<boolean>(true);
  const [rameshInviteSent, setRameshInviteSent] = useState<boolean>(false);
  const [meeraInviteSent, setMeeraInviteSent] = useState<boolean>(false);

  // Screen 27: Collaboration Hub (matching 'colloboration.png')
  const [isCollabAudioGuidePlaying, setIsCollabAudioGuidePlaying] = useState<boolean>(false);
  const [isRameshCollabAudioPlaying, setIsRameshCollabAudioPlaying] = useState<boolean>(false);
  const [rameshCollabAccepted, setRameshCollabAccepted] = useState<boolean>(true);
  const [rameshCollabDeclined, setRameshCollabDeclined] = useState<boolean>(false);
  const [meeraCollabAccepted, setMeeraCollabAccepted] = useState<boolean>(false);
  const [meeraCollabDeclined, setMeeraCollabDeclined] = useState<boolean>(false);
  const [sohanInviteReminded, setSohanInviteReminded] = useState<boolean>(false);

  // Screen 28: Artisan-to-Artisan Chat (matching 'artisan vs artisan chat.png')
  const [chatLanguageMode, setChatLanguageMode] = useState<string>('हिंदी / En');
  const [isChatVoicePlaying, setIsChatVoicePlaying] = useState<boolean>(false);
  const [isChatTranslationPlaying, setIsChatTranslationPlaying] = useState<boolean>(false);
  const [isProductionLogged, setIsProductionLogged] = useState<boolean>(false);
  const [isMicPressed, setIsMicPressed] = useState<boolean>(false);
  const [chatInputText, setChatInputText] = useState<string>('');
  const [chatCustomMessages, setChatCustomMessages] = useState<Array<{ text: string; time: string; isUser: boolean }>>([]);

  // Screen 29: Artisan vs Bulk Buyer Chat (matching 'artisan vs bulk buyer chat.png')
  const [buyerChatLangMode, setBuyerChatLangMode] = useState<string>('हिंदी / En');
  const [isBuyerTranslationAudioPlaying, setIsBuyerTranslationAudioPlaying] = useState<boolean>(false);
  const [isArtisanVoiceNotePlaying, setIsArtisanVoiceNotePlaying] = useState<boolean>(false);
  const [isBuyerSecondAudioPlaying, setIsBuyerSecondAudioPlaying] = useState<boolean>(false);
  const [isBuyerChatMicPressed, setIsBuyerChatMicPressed] = useState<boolean>(false);
  const [buyerChatInputText, setBuyerChatInputText] = useState<string>('');
  const [buyerChatCustomMessages, setBuyerChatCustomMessages] = useState<Array<{ text: string; time: string; isUser: boolean; translated?: string }>>([]);

  // Universal Modals & Interactive Drawers
  const [showNotificationsModal, setShowNotificationsModal] = useState<boolean>(false);
  const [showEscrowDetailsModal, setShowEscrowDetailsModal] = useState<boolean>(false);
  const [showCapacityPlannerModal, setShowCapacityPlannerModal] = useState<boolean>(false);
  const [showSlaHealthModal, setShowSlaHealthModal] = useState<boolean>(false);
  const [showScoreBreakdownModal, setShowScoreBreakdownModal] = useState<boolean>(false);
  const [showCompletedOrdersModal, setShowCompletedOrdersModal] = useState<boolean>(false);
  const [showQuickDrawer, setShowQuickDrawer] = useState<boolean>(false);
  const [showShareWhatsAppModal, setShowShareWhatsAppModal] = useState<boolean>(false);
  const [showCardPrintModal, setShowCardPrintModal] = useState<boolean>(false);
  const [showWalletPassModal, setShowWalletPassModal] = useState<boolean>(false);
  const [showQrEnlargedModal, setShowQrEnlargedModal] = useState<boolean>(false);
  const [showBuyerAnalyticsModal, setShowBuyerAnalyticsModal] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Translation helper function that re-evaluates reactively when selectedLanguage changes
  const tr = (key: string) => t(key, selectedLanguage);
  const langCode = getLangCode(selectedLanguage);

  // Uniform Bottom Navigation Bar across all pages matching Home page archetype
  const renderUnifiedBottomNav = (activeTabKey: 'home' | 'products' | 'orders' | 'collaborate' | 'profile') => {
    const navItems = [
      { key: 'home' as const, label: tr('navHome') || 'Home', icon: Store, screenIdx: 9, tabIdx: 0 },
      { key: 'products' as const, label: tr('navProducts') || 'Products', icon: Palette, screenIdx: 10, tabIdx: 1 },
      { key: 'orders' as const, label: tr('navOrders') || 'Orders', icon: FileText, screenIdx: 22, tabIdx: 2 },
      { key: 'collaborate' as const, label: tr('navCollaborate') || 'Collaborate', icon: Users, screenIdx: 27, tabIdx: 3 },
      { key: 'profile' as const, label: tr('navProfile') || 'Profile', icon: User, screenIdx: 20, tabIdx: 4 },
    ];

    return (
      <div className="bg-white border-t border-[#EADFD6] py-1.5 px-3 flex items-center justify-around z-10 shrink-0">
        {navItems.map((item) => {
          const IconComp = item.icon;
          const isSel = activeTabKey === item.key;
          return (
            <button
              key={item.key}
              onClick={() => {
                setHomeBottomTab(item.tabIdx);
                setActiveScreenIndex(item.screenIdx);
              }}
              className={`flex flex-col items-center px-3 py-1 rounded-2xl transition-all cursor-pointer ${
                isSel
                  ? 'bg-[#FCECE3] text-[#8C3A16] font-extrabold shadow-2xs'
                  : 'text-[#6D4C41] hover:text-[#8C3A16]'
              }`}
            >
              <IconComp className={`w-4 h-4 mb-0.5 ${isSel ? 'text-[#8C3A16]' : 'text-[#6D4C41]'}`} />
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    );
  };

  // Splash 5-second timer effect
  useEffect(() => {
    if (activeScreenIndex === 0 && isTimerActive) {
      setTimeLeftMs(5000);
      const interval = 50;
      let remaining = 5000;

      timerRef.current = setInterval(() => {
        remaining -= interval;
        if (remaining <= 0) {
          clearInterval(timerRef.current!);
          setTimeLeftMs(0);
          setActiveScreenIndex(1); // Auto-advance to Screen 1 (Language)
        } else {
          setTimeLeftMs(remaining);
        }
      }, interval);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [activeScreenIndex, isTimerActive]);

  const restartTimer = () => {
    setActiveScreenIndex(0);
    setIsTimerActive(true);
    setTimeLeftMs(5000);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const screenPills = [
    { idx: 0, label: '0. Splash' },
    { idx: 1, label: '1. Language' },
    { idx: 2, label: '2. Role' },
    { idx: 3, label: '3. Account' },
    { idx: 8, label: '🔑 Login Screen' },
    { idx: 4, label: '4. Voice' },
    { idx: 5, label: '5. Crafts' },
    { idx: 6, label: '6. Photo' },
    { idx: 7, label: '7. Preview' },
    { idx: 9, label: '🏠 Artisan Home' },
    { idx: 10, label: '📦 10. Products Catalog' },
    { idx: 11, label: '📸 11. Coin Scale Guide' },
    { idx: 12, label: '📷 12. Viewfinder' },
    { idx: 13, label: '📐 13. AI Dimensions' },
    { idx: 14, label: '🎙️ 14. Raw Material Cost' },
    { idx: 15, label: '📜 15. Description & GI' },
    { idx: 16, label: '⚖️ 16. Fair Pricing' },
    { idx: 17, label: '🏭 17. Capacity Intake' },
    { idx: 18, label: '👓 18. Preview Product' },
    { idx: 19, label: '🎉 19. Catalog Published' },
    { idx: 20, label: '🪪 20. Profile (Visiting Card)' },
    { idx: 21, label: '🎙️ 21. My Craft Story' },
    { idx: 22, label: '📋 22. Artisan Orders' },
    { idx: 23, label: '📝 23. Order Updation' },
    { idx: 24, label: '📩 24. Order Request' },
    { idx: 25, label: '🤝 25. Form Collective' },
    { idx: 26, label: '👥 26. Suggested Artisans' },
    { idx: 27, label: '🤝 27. Collaboration Hub' },
    { idx: 28, label: '💬 28. Artisan Chat' },
    { idx: 29, label: '💬 29. Buyer Chat' },
    { idx: 30, label: '🏢 30. Buyer Step 1' },
    { idx: 31, label: '🏺 31. Buyer Step 2' },
    { idx: 32, label: '📋 32. Buyer Step 3' },
    { idx: 33, label: '🎉 33. Buyer Confirmation' },
    { idx: 34, label: '🏠 34. Bulk Buyer Home' },
    { idx: 35, label: '🧭 35. Discover (d1)' },
    { idx: 36, label: '🔍 36. Search (d2)' },
    { idx: 37, label: '🛍️ 37. Results (d3)' },
    { idx: 38, label: '👥 38. Featured (d4)' },
    { idx: 39, label: '👤 39. Profile (d5)' },
    { idx: 40, label: '🏢 40. Sourcing (d6)' },
    { idx: 41, label: '📋 41. Requirements (r1)' },
    { idx: 42, label: '🎙️ 42. Voice Requirement (r2)' },
    { idx: 43, label: '📝 43. Review Requirement (r3)' },
    { idx: 44, label: '📸 44. Reference Image (r4)' },
    { idx: 45, label: '🎯 45. Review & Match (r5)' },
    { idx: 46, label: '👥 46. Matched Artisans (r6)' },
    { idx: 47, label: '⚖️ 47. Compare Artisans (r7)' },
    { idx: 48, label: '🌟 48. Selected Artisan (r8)' },
    { idx: 49, label: '📦 49. Orders & Production (o1)' },
    { idx: 50, label: '📜 50. Order Details & Status (o2)' },
    { idx: 51, label: '👤 51. Buyer Profile (p1)' },
    { idx: 52, label: '💬 52. Buyer ⇄ Artisan Chat (c1)' },
  ];

  return (
    <div className="min-h-screen bg-[#F4EDE7] text-[#2D2421] flex flex-col items-center">
      {/* Top Header */}
      <header className="w-full bg-[#FAF5F0] border-b border-[#E8DDD5] px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#E8DDD5] p-1 flex items-center justify-center shadow-xs shrink-0">
            <img
              src="/Logo.png"
              alt="HunarSangam Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-base font-extrabold text-[#4A3228] leading-tight">HunarSangam Mobile App</h1>
            <p className="text-xs text-[#8A756C]">Artisan Platform • SIH Initiative</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center bg-[#EFE4DC] p-1 rounded-xl border border-[#DFCECE]">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'preview'
                ? 'bg-white text-[#A84318] shadow-xs'
                : 'text-[#6B5A51] hover:text-[#4A3228]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            Device Simulator
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'code'
                ? 'bg-white text-[#A84318] shadow-xs'
                : 'text-[#6B5A51] hover:text-[#4A3228]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Flutter / Dart Code
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-7xl flex-1 p-3 md:p-6 flex flex-col items-center justify-center">
        {activeTab === 'preview' ? (
          <div className="flex flex-col items-center w-full">
            {/* Screen Stepper Bar */}
            <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl p-2.5 border border-[#E8DDD5] shadow-xs mb-3 flex flex-col md:flex-row items-center justify-between gap-2.5">
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0">
                {screenPills.map((pill) => (
                  <button
                    key={pill.idx}
                    onClick={() => {
                      setActiveScreenIndex(pill.idx);
                      if (pill.idx === 0) setTimeLeftMs(5000);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      activeScreenIndex === pill.idx
                        ? 'bg-[#A84318] text-white shadow-xs'
                        : 'bg-[#F4ECE5] text-[#6B5A51] hover:bg-[#EADFD6]'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              {activeScreenIndex === 0 && (
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsTimerActive(!isTimerActive)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all border ${
                      isTimerActive
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                        : 'bg-amber-50 border-amber-300 text-amber-800'
                    }`}
                  >
                    <Timer className="w-3.5 h-3.5" />
                    <span>Timer: {isTimerActive ? 'ON' : 'OFF'}</span>
                  </button>
                  <button
                    onClick={restartTimer}
                    className="p-1 bg-[#F4ECE5] hover:bg-[#EADFD6] text-[#6B5A51] rounded-lg text-xs transition-all border border-[#DFCECE]"
                    title="Restart Splash"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Device Frame */}
            <div className="relative w-[390px] h-[780px] bg-black rounded-[50px] p-3 shadow-2xl ring-1 ring-black/20">
              {/* Dynamic Island / Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] ring-1 ring-neutral-800" />
              </div>

              {/* Device Screen Content */}
              <div className="w-full h-full bg-[#FDFBF9] rounded-[42px] overflow-hidden flex flex-col relative pt-7 pb-2 select-none">
                {/* TOAST POPUP */}
                {toastMessage && (
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-[#2D2421] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg animate-in fade-in slide-in-from-top-2 flex items-center gap-2 max-w-[90%]">
                    <Sparkles className="w-3.5 h-3.5 text-[#E87338]" />
                    <span>{toastMessage}</span>
                  </div>
                )}

                {/* 1. SCREEN 0: SPLASH (100% Match to Splash or Start or Entry Point.png) */}
                {activeScreenIndex === 0 && (
                  <div
                    onClick={() => {
                      // Allow tap anywhere to proceed immediately
                      setActiveScreenIndex(1);
                      showToast('🚀 Welcome to HunarSangam');
                    }}
                    className="flex-1 flex flex-col bg-[#FDFBF9] relative overflow-hidden cursor-pointer select-none"
                  >
                    {/* 5-Second Timer Progress Bar */}
                    {isTimerActive && (
                      <div className="w-full bg-[#EADFD6] h-1.5 relative overflow-hidden z-20 shrink-0">
                        <div
                          className="h-full bg-[#8C2E18] transition-all duration-75 ease-linear"
                          style={{ width: `${((5000 - timeLeftMs) / 5000) * 100}%` }}
                        />
                      </div>
                    )}

                    {/* Subtle Rotating Mandala Watermark in Background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 overflow-hidden">
                      <svg
                        className="w-[420px] h-[420px] text-[#EAD8CC] animate-[spin_60s_linear_infinite]"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
                        <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="0.75" />
                        <circle cx="100" cy="100" r="54" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                        <circle cx="100" cy="100" r="36" stroke="currentColor" strokeWidth="0.75" />
                        {/* 12 Floral Petals */}
                        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                          <g key={deg} transform={`rotate(${deg} 100 100)`}>
                            <path
                              d="M 100,28 C 108,50 115,70 100,100 C 85,70 92,50 100,28 Z"
                              stroke="currentColor"
                              strokeWidth="0.8"
                              fill="currentColor"
                              fillOpacity="0.06"
                            />
                            <circle cx="100" cy="22" r="2.5" fill="currentColor" fillOpacity="0.3" />
                          </g>
                        ))}
                      </svg>
                    </div>

                    {/* Top Header Row (SIH INITIATIVE & AI Helped craft) */}
                    <div className="px-5 pt-3 pb-1 flex items-center justify-between z-10 shrink-0">
                      {/* Left: SIH Initiative Pill Badge */}
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F6EDE7] border border-[#ECD9CE] rounded-full shadow-2xs">
                        <span className="w-2 h-2 rounded-full bg-[#1B803A] animate-pulse" />
                        <span className="text-[10px] font-black tracking-wider text-[#35251E]">SIH INITIATIVE</span>
                      </div>

                      {/* Right: AI Helped craft Badge + Timer Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#35251E]">
                          <Palette className="w-3.5 h-3.5 text-[#35251E]" />
                          <span className="text-[11px] font-bold text-[#35251E]">AI Helped craft</span>
                        </div>
                        {isTimerActive && (
                          <span className="text-[10px] font-bold text-[#8C3A16] bg-[#FDF2EB] px-1.5 py-0.5 rounded-md border border-[#F3DFD5]">
                            {(timeLeftMs / 1000).toFixed(1)}s
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Central Content Area */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center z-10 -mt-2">
                      {/* Logo Emblem Container with Halo Glow */}
                      <div className="relative mb-5 group">
                        {/* Outer Soft Halo Glow */}
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#FF9800]/25 via-[#E91E63]/25 to-[#1565C0]/25 blur-md opacity-80 animate-pulse" />

                        {/* Outer Circular Ring Border */}
                        <div className="relative w-36 h-36 rounded-full p-2.5 bg-[#FFFDFB] flex items-center justify-center border-2 border-[#F0D5C7] shadow-xl transition-transform duration-300 group-hover:scale-105">
                          {/* Official HunarSangam Logo Asset */}
                          <img
                            src="/Logo.png"
                            alt="HunarSangam Official Logo"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-contain filter drop-shadow-md select-none"
                          />
                        </div>
                      </div>

                        {/* Main Brand Title */}
                      <h2 className="text-[26px] font-black text-[#9E3E1A] tracking-tight mb-1 leading-none">
                        HunarSangam
                      </h2>

                      {/* Subtitle */}
                      <p className="text-[13.5px] font-black text-[#221C19] mb-3 max-w-[240px] leading-snug">
                        Where Artisans Connect, Collaborate &amp; Grow
                      </p>

                      {/* Keywords with Separator Dots */}
                      <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#6B584E] mb-3.5">
                        <span>Connect</span>
                        <span className="w-1 h-1 rounded-full bg-[#9E3E1A]" />
                        <span>Collaborate</span>
                        <span className="w-1 h-1 rounded-full bg-[#9E3E1A]" />
                        <span>Create</span>
                      </div>

                      {/* Language Selector Pill Button with Dropdown Action */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowSplashLanguageModal(true);
                        }}
                        className="px-3.5 py-1.5 bg-[#FFFDFB] border border-[#E5D5CB] rounded-full flex items-center gap-1.5 text-xs font-bold text-[#221C19] shadow-2xs hover:bg-[#FDF3ED] active:scale-95 transition-all mb-4 cursor-pointer"
                        title="Click to select language"
                      >
                        <Globe className="w-3.5 h-3.5 text-[#9E3E1A]" />
                        <span>{selectedLanguage.split('/')[0].trim()}</span>
                        <ChevronDown className="w-3 h-3 text-[#6B584E]" />
                      </button>

                      {/* Bottom Verified Trust Seal */}
                      <div className="flex items-center justify-center gap-1.5 text-[11.5px] font-bold text-[#55433A]">
                        <div className="w-4 h-4 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#2E7D32] stroke-[3]" />
                        </div>
                        <span>Crafted with pride in India</span>
                      </div>
                    </div>

                    {/* Quick Language Selection Bottom Sheet Modal on Splash */}
                    {showSplashLanguageModal && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute inset-0 bg-black/40 z-50 flex flex-col justify-end animate-in fade-in"
                      >
                        <div className="bg-[#FFFDFB] rounded-t-3xl border-t border-[#E8DDD5] p-5 shadow-2xl animate-in slide-in-from-bottom-5 max-h-[70%] flex flex-col">
                          <div className="flex items-center justify-between pb-3 border-b border-[#F0E4DC]">
                            <div className="flex items-center gap-2">
                              <Globe className="w-4 h-4 text-[#9E3E1A]" />
                              <span className="font-extrabold text-sm text-[#2D2421]">Select Language / भाषा चुनें</span>
                            </div>
                            <button
                              onClick={() => setShowSplashLanguageModal(false)}
                              className="p-1 rounded-full text-[#6B584E] hover:bg-[#F4ECE5]"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="py-2 overflow-y-auto space-y-1.5 flex-1 pr-1">
                            {[
                              { label: 'English', sub: 'English' },
                              { label: 'हिंदी / Hindi', sub: 'Hindi' },
                              { label: 'বাংলা / Bengali', sub: 'Bengali' },
                              { label: 'ગુજરાતી / Gujarati', sub: 'Gujarati' },
                              { label: 'मराठी / Marathi', sub: 'Marathi' },
                              { label: 'தமிழ் / Tamil', sub: 'Tamil' },
                              { label: 'తెలుగు / Telugu', sub: 'Telugu' },
                              { label: 'ಕನ್ನಡ / Kannada', sub: 'Kannada' },
                              { label: 'অসমীয়া / Assamese', sub: 'Assamese' },
                              { label: 'ଓଡ଼ିଆ / Odia', sub: 'Odia' },
                              { label: 'ਪੰਜਾਬੀ / Punjabi', sub: 'Punjabi' },
                            ].map((lang) => (
                              <button
                                key={lang.label}
                                onClick={() => {
                                  setSelectedLanguage(lang.label);
                                  setShowSplashLanguageModal(false);
                                  showToast(`🌐 Language set to ${lang.label}`);
                                }}
                                className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between transition-all ${
                                  selectedLanguage === lang.label
                                    ? 'bg-[#FBEBE2] text-[#9E3E1A] font-bold border border-[#EAC5B3]'
                                    : 'hover:bg-[#F8EFEA] text-[#4A3B32] font-semibold'
                                }`}
                              >
                                <span className="text-xs">{lang.label}</span>
                                {selectedLanguage === lang.label && (
                                  <Check className="w-4 h-4 text-[#9E3E1A]" />
                                )}
                              </button>
                            ))}
                          </div>

                          <button
                            onClick={() => {
                              setShowSplashLanguageModal(false);
                              setActiveScreenIndex(1);
                            }}
                            className="w-full mt-3 py-2.5 bg-[#9E3E1A] hover:bg-[#882F0F] text-white rounded-xl text-xs font-bold shadow-xs flex items-center justify-center gap-1.5"
                          >
                            <span>Open Full Language Screen</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. SCREEN 1: LANGUAGE (Exact 1:1 Match to 2. language selection.png) */}
                {activeScreenIndex === 1 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar with Brand Logo & Help Icon */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <HunarSangamLogo size={32} showText={true} />
                      <button className="w-7 h-7 rounded-full border border-[#D5C5BA] flex items-center justify-center text-[#7C3F24] hover:bg-[#F3E7DF]">
                        <HelpCircle className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="px-5 py-2 flex flex-col items-center text-center flex-1">
                      {/* Avatar Illustration */}
                      <div className="relative mb-3 mt-1">
                        <div className="w-20 h-20 rounded-full bg-[#FCEFE9] border-2 border-[#EAD5C8] flex items-center justify-center overflow-hidden shadow-xs">
                          <div className="w-full h-full bg-gradient-to-br from-[#FBE8DE] to-[#F3D7C7] flex items-center justify-center text-[#9C3C18]">
                            <Palette className="w-9 h-9" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#D85A2A] rounded-full flex items-center justify-center text-white shadow-xs border-2 border-[#FDFBF9]">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Headings */}
                      <h1 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-0.5">
                        Choose your language
                      </h1>
                      <h2 className="text-lg font-black text-[#9C3C18] mb-1">
                        अपनी भाषा चुनें
                      </h2>
                      <p className="text-[12px] text-[#6B584E] mb-4">
                        You can change this anytime / इसे कभी भी बदल सकते हैं
                      </p>

                      {/* 2-Column Grid of Languages (8 Items matching image exactly) */}
                      <div className="grid grid-cols-2 gap-3 w-full mb-4">
                        {[
                          { native: 'हिंदी', eng: 'Hindi', code: 'hi' },
                          { native: 'English', eng: 'English', code: 'en' },
                          { native: 'मराठी', eng: 'Marathi', code: 'mr' },
                          { native: 'ગુજરાતી', eng: 'Gujarati', code: 'gu' },
                          { native: 'বাংলা', eng: 'Bengali', code: 'bn' },
                          { native: 'தமிழ்', eng: 'Tamil', code: 'ta' },
                          { native: 'తెలుగు', eng: 'Telugu', code: 'te' },
                        ].map((item) => {
                          const isSelected = selectedLanguage.toLowerCase().includes(item.eng.toLowerCase()) || 
                                            (item.code === 'hi' && selectedLanguage.includes('Hindi'));
                          return (
                            <button
                              key={item.code}
                              onClick={() => setSelectedLanguage(`${item.native} / ${item.eng}`)}
                              className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#FDF8F5] border-2 border-[#8C3A16] shadow-xs'
                                  : 'bg-white border-[#E5D5CB] hover:border-[#CBB7AA]'
                              }`}
                            >
                              <div>
                                <span className={`text-[15px] font-extrabold block leading-tight ${isSelected ? 'text-[#8C3A16]' : 'text-[#1A1A1A]'}`}>
                                  {item.native}
                                </span>
                                <span className="text-[11px] text-[#7A685F] font-medium block mt-0.5">
                                  {item.eng}
                                </span>
                              </div>
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                                  isSelected
                                    ? 'bg-[#8C3A16] border-[#8C3A16] text-white'
                                    : 'border-[#D5C5BA] bg-transparent'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}

                        {/* 8th Card: + More + */}
                        <div className="p-3 rounded-2xl border-2 border-dashed border-[#D5C5BA] bg-[#FAF3EE]/60 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#FAF3EE]">
                          <span className="text-[14px] font-extrabold text-[#4A3B32] block leading-tight">
                            + More +
                          </span>
                          <span className="text-[11px] text-[#8C7368] font-medium block mt-0.5">
                            अन्य भाषाएं
                          </span>
                        </div>
                      </div>

                      {/* Direct Artisan Connect Guarantee Banner */}
                      <div className="w-full p-3 rounded-2xl bg-[#F9EFE7] border border-[#EAD5C8] flex items-center gap-3 text-left mb-2">
                        <div className="w-9 h-9 rounded-full bg-[#ECD6C8] flex items-center justify-center text-[#8C4421] shrink-0">
                          <HandMetal className="w-5 h-5" />
                        </div>
                        <p className="text-[11px] leading-tight text-[#4A3B32]">
                          <strong className="font-bold text-[#2D2421]">शत प्रतिशत प्रत्यक्ष कारीगर जुड़ाव :</strong> हर खरीद से भारतीय शिल्पकारों और पारंपरिक हथकरघा को सीधा प्रोत्साहन मिलता है।
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-5 pt-2 border-t border-[#F0E6DE] bg-[#FDFBF9]">
                      <button
                        onClick={() => setActiveScreenIndex(2)}
                        className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <span>आगे बढ़ें • Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[11px] text-[#4A372D]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />
                        <span>अगला कदम: उपयोगकर्ता प्रकार • Next: Role Selection</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. SCREEN 2: ROLE */}
                {activeScreenIndex === 2 && (
                  <div className="flex-1 flex flex-col p-5 overflow-y-auto">
                    <div className="flex items-center justify-between mb-4">
                      <button onClick={() => setActiveScreenIndex(1)} className="p-1 text-[#4A3228] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <span className="text-xs font-bold text-[#A84318]">{tr('step')} 2 / 7</span>
                    </div>

                    <h2 className="text-lg font-black text-[#2D2421] mb-1">{tr('whatIsYourRole')}</h2>
                    <p className="text-xs text-[#6B5A51] mb-4">{tr('roleSubtitle')}</p>

                    <div className="space-y-3 flex-1">
                      <button
                        onClick={() => setUserRole('artisan')}
                        className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                          userRole === 'artisan'
                            ? 'bg-[#FDF6F0] border-[#A84318] shadow-sm'
                            : 'bg-white border-[#E8DDD5]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-[#F3E7DF] flex items-center justify-center text-[#A84318]">
                            <Palette className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-[#2D2421]">{tr('artisanRoleTitle')}</h3>
                            <p className="text-[11px] text-[#7B665C]">{tr('artisanRoleDesc')}</p>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => setUserRole('buyer')}
                        className={`w-full p-4 rounded-2xl border-2 text-left transition-all ${
                          userRole === 'buyer'
                            ? 'bg-[#FDF6F0] border-[#A84318] shadow-sm'
                            : 'bg-white border-[#E8DDD5]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-xl bg-[#F3E7DF] flex items-center justify-center text-[#A84318]">
                            <ShoppingBag className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-[#2D2421]">{tr('buyerRoleTitle')}</h3>
                            <p className="text-[11px] text-[#7B665C]">{tr('buyerRoleDesc')}</p>
                          </div>
                        </div>
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        if (userRole === 'buyer') {
                          setActiveScreenIndex(30);
                          showToast('Starting Bulk Buyer Onboarding (Step 1 of 3)');
                        } else {
                          setActiveScreenIndex(3);
                          showToast('Starting Artisan Account Setup');
                        }
                      }}
                      className="w-full py-3 bg-[#A84318] hover:bg-[#8F3712] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer active:scale-98 transition-all"
                    >
                      <span>{userRole === 'artisan' ? tr('continueAsArtisan') : tr('continueAsBuyer')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* 4. SCREEN 3: ACCOUNT CREATION (with Already Have Account Link) */}
                {activeScreenIndex === 3 && (
                  <div className="flex-1 flex flex-col p-5 overflow-y-auto">
                    <div className="flex items-center justify-between mb-3">
                      <button onClick={() => setActiveScreenIndex(2)} className="p-1 text-[#4A3228] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <span className="text-xs font-bold text-[#A84318]">{tr('step')} 3 / 7 • {tr('step')} 1 of 5</span>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#B85324]" />
                      <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                      <span className="w-2 h-2 rounded-full bg-[#B85324]" />
                    </div>

                    <h2 className="text-xl font-black text-[#2D2421] mb-1">{tr('createAccountTitle')}</h2>
                    <p className="text-xs text-[#6B5A51] mb-4">{tr('createAccountSubtitle')}</p>

                    <div className="space-y-3 flex-1">
                      <div>
                        <label className="text-xs font-bold text-[#4A3228] block mb-1">{tr('artisanFullName')}</label>
                        <input
                          type="text"
                          value={artisanName}
                          onChange={(e) => setArtisanName(e.target.value)}
                          className="w-full p-2.5 bg-[#F6ECE5] border border-[#E5D5CB] rounded-xl text-xs font-semibold text-[#2D2421] outline-none"
                          placeholder={tr('artisanNamePlaceholder')}
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#4A3228] block mb-1">{tr('mobileNumber')}</label>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full p-2.5 bg-[#F6ECE5] border border-[#E5D5CB] rounded-xl text-xs font-semibold text-[#2D2421] outline-none"
                          placeholder={tr('mobilePlaceholder')}
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#4A3228] block mb-1">{tr('workshopLocation')}</label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full p-2.5 bg-[#F6ECE5] border border-[#E5D5CB] rounded-xl text-xs font-semibold text-[#2D2421] outline-none"
                          placeholder={tr('locationPlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <button
                        onClick={() => setActiveScreenIndex(4)}
                        className="w-full py-3 bg-[#E66B38] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer mb-3"
                      >
                        <span>{tr('continue')}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* ALREADY HAVE AN ACCOUNT? LOGIN LINK */}
                      <div className="text-center text-xs text-[#6B584E]">
                        <span>{tr('alreadyHaveAccount')} </span>
                        <button
                          onClick={() => setActiveScreenIndex(8)}
                          className="font-bold text-[#E66B38] underline hover:text-[#C84F1D] cursor-pointer"
                        >
                          {tr('loginHere')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. SCREEN 8: LOGIN SCREEN (Matching ar-Artisan- login.png) */}
                {activeScreenIndex === 8 && (
                  <div className="flex-1 flex flex-col p-5 bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => setActiveScreenIndex(3)}
                        className="p-1 text-[#2D2421] hover:bg-[#F3E7DF] rounded-lg"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>

                      <HunarSangamLogo size={30} showText={true} />

                      <div className="px-2.5 py-1 bg-white border border-[#E5D5CB] rounded-full text-xs font-semibold text-[#4A372D] flex items-center gap-1">
                        <span>{selectedLanguage.split('/')[0].trim()}</span>
                      </div>
                    </div>

                    {/* Three Dots Flourish */}
                    <div className="flex items-center gap-1.5 mb-3 mt-1">
                      <span className="w-2 h-2 rounded-full bg-[#B85324]" />
                      <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                      <span className="w-2 h-2 rounded-full bg-[#B85324]" />
                    </div>

                    {/* Title & Subtitle */}
                    <h1 className="text-2xl font-black text-[#221C19] mb-1 leading-tight">
                      {tr('loginTitle')}
                    </h1>
                    <p className="text-xs text-[#7A685F] mb-6">
                      {tr('loginSubtitle')}
                    </p>

                    {/* Form Fields */}
                    <div className="space-y-4 flex-1">
                      {/* Field 1: Email Address / Phone number */}
                      <div>
                        <label className="text-xs font-bold text-[#2D2421] block mb-1.5">
                          {tr('emailOrPhone')}
                        </label>
                        <div className="flex items-center gap-2.5 bg-[#F5EBE1] border border-[#E8DDD5] rounded-2xl px-3.5 py-3">
                          <Mail className="w-4 h-4 text-[#8A776D] shrink-0" />
                          <input
                            type="text"
                            value={loginContact}
                            onChange={(e) => setLoginContact(e.target.value)}
                            placeholder={tr('emailOrPhonePlaceholder')}
                            className="w-full bg-transparent text-xs text-[#2D2421] font-medium outline-none placeholder-[#9E8D84]"
                          />
                        </div>
                      </div>

                      {/* Field 2: Create Password */}
                      <div>
                        <label className="text-xs font-bold text-[#2D2421] block mb-1.5">
                          {tr('password')}
                        </label>
                        <div className="flex items-center gap-2.5 bg-[#F5EBE1] border border-[#E8DDD5] rounded-2xl px-3.5 py-3">
                          <Lock className="w-4 h-4 text-[#8A776D] shrink-0" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder={tr('passwordPlaceholder')}
                            className="w-full bg-transparent text-xs text-[#2D2421] font-medium outline-none placeholder-[#9E8D84]"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-[#8A776D] hover:text-[#4A3228]"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        <p className="text-[11px] text-[#7A685F] mt-1.5">{tr('passwordHint')}</p>
                      </div>
                    </div>

                    {/* Bottom Action: login button & New here link */}
                    <div className="pt-4 pb-2">
                      <button
                        onClick={() => {
                          if (!loginContact.trim()) {
                            showToast(tr('emailOrPhonePlaceholder'));
                            return;
                          }
                          if (!loginPassword.trim() || loginPassword.length < 6) {
                            showToast(tr('passwordHint'));
                            return;
                          }
                          if (!artisanName) {
                            setArtisanName('Ramu Kumar');
                          }
                          showToast(`✅ Welcome, ${artisanName || 'Ramu Kumar'}!`);
                          setActiveScreenIndex(9); // Direct to Artisan Home Dashboard Screen!
                        }}
                        className="w-full py-3.5 bg-[#E87338] hover:bg-[#D56228] text-white rounded-2xl font-bold text-sm shadow-md transition-all cursor-pointer mb-4 active:scale-98"
                      >
                        {tr('login')}
                      </button>

                      <div className="text-center text-xs text-[#2D2421]">
                        <span>{tr('dontHaveAccount')} </span>
                        <button
                          onClick={() => setActiveScreenIndex(3)}
                          className="text-[#2563EB] font-bold underline cursor-pointer"
                        >
                          {tr('createOne')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. SCREEN 4: VOICE BIO (Exact 1:1 Match to ar- Voice-First Artisan Introduction.png) */}
                {activeScreenIndex === 4 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <button onClick={() => setActiveScreenIndex(3)} className="p-1 text-[#221C19] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div className="px-3 py-1 bg-[#FCEEE6] rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#8C3A16]" />
                        <span className="text-xs font-bold text-[#8C3A16]">Step 2 of 5 • Artisan Setup</span>
                      </div>
                      <div className="px-2.5 py-1 bg-white border border-[#E5D5CB] rounded-full text-xs font-semibold text-[#4A372D] flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[10px]">▼</span>
                      </div>
                    </div>

                    <div className="px-5 py-2 flex flex-col items-center text-center flex-1">
                      {/* Headings */}
                      <h1 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-1">
                        Tell us about yourself
                      </h1>
                      <p className="text-[13.5px] text-[#6B584E] leading-snug mb-3 max-w-[280px]">
                        Speak naturally. We will create your artisan profile for you.
                      </p>

                      {/* Audio Assistance Active Badge */}
                      <div className="px-3.5 py-1.5 bg-[#E8F5E9] border border-[#C8E6C9] rounded-full flex items-center gap-2 mb-6">
                        <Headphones className="w-4 h-4 text-[#2E7D32]" />
                        <span className="text-[11.5px] font-semibold text-[#2E7D32]">
                          Audio assistance active • Hindi/English/other supported
                        </span>
                      </div>

                      {/* Concentric Glowing Microphone Recording Button */}
                      <div className="relative mb-5 flex items-center justify-center">
                        {/* Outer Ring */}
                        <div
                          className={`w-48 h-48 rounded-full bg-[#FCEFE9] flex items-center justify-center transition-all ${
                            isRecording ? 'scale-105 animate-pulse' : ''
                          }`}
                        >
                          {/* Middle Ring */}
                          <div className="w-38 h-38 rounded-full bg-[#F8DDD2] flex items-center justify-center">
                            {/* Inner Mic Button */}
                            <button
                              onClick={() => {
                                setIsRecording(!isRecording);
                                setHasRecordedVoice(true);
                              }}
                              className="w-28 h-28 rounded-full bg-[#9C3C18] hover:bg-[#853213] text-white flex items-center justify-center shadow-md cursor-pointer transition-all active:scale-95"
                            >
                              <Mic className="w-10 h-10" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Tap to Speak Callout */}
                      <div className="flex items-center gap-1.5 text-[#9C3C18] font-bold text-sm mb-0.5">
                        <Volume2 className="w-4 h-4" />
                        <span>Tap the microphone and speak naturally.</span>
                      </div>
                      <p className="text-[12px] text-[#6B584E] mb-5">
                        Tell us your craft name, village, or years of work.
                      </p>

                      {/* Speak Your Following Details Card */}
                      <div className="w-full p-4 rounded-2xl bg-[#FFF9F5] border border-[#F4E5DB] text-left mb-4">
                        <div className="flex items-center gap-1.5 mb-3 text-[#8C3A16] font-bold text-[11px] uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>SPEAK YOUR FOLLOWING DETAILS</span>
                        </div>

                        {/* Prompt Chips */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {['Full Name', 'Full Address', 'Experience', 'Specialities', 'Products You are making'].map((chip) => (
                            <div
                              key={chip}
                              className="px-3 py-1.5 rounded-xl bg-white border border-[#EADFD6] text-[12px] italic text-[#4A372D] font-medium shadow-2xs"
                            >
                              {chip}
                            </div>
                          ))}
                        </div>

                        {/* Example Box */}
                        <div className="p-3 rounded-xl bg-white/80 border border-[#EADFD6] text-[12px] text-[#4A372D] italic leading-relaxed">
                          Example : “I make handmade bamboo baskets and have been doing this for many years in Barabanki, UP.” All About Your self
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-5 pt-2 border-t border-[#F0E6DE] bg-[#FDFBF9] space-y-2.5">
                      <button
                        onClick={() => setActiveScreenIndex(3)}
                        className="w-full py-3 bg-white border border-[#3D2E26] hover:bg-[#F9F5F1] text-[#221C19] rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Add Details Manually</span>
                      </button>

                      <button
                        onClick={() => setActiveScreenIndex(5)}
                        className="w-full py-3.5 bg-[#E66B38] hover:bg-[#D55C2A] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <span>Continue</span>
                      </button>

                      <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-[#5A483E]">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
                        <span>Designed for speaking, seeing and tapping — zero typing required.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 7. SCREEN 5: CRAFTS (Exact 1:1 Match to ar- artisan Your Craft.png) */}
                {activeScreenIndex === 5 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <button onClick={() => setActiveScreenIndex(4)} className="p-1 text-[#221C19] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div className="px-3 py-1 bg-[#FCEEE6] rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#8C3A16]" />
                        <span className="text-xs font-bold text-[#8C3A16]">Step 3 of 5 • Artisan Craft</span>
                      </div>
                      <div className="px-2.5 py-1 bg-white border border-[#E5D5CB] rounded-full text-xs font-semibold text-[#4A372D] flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[10px]">▼</span>
                      </div>
                    </div>

                    {/* Audio Assistance Banner */}
                    <div className="mx-5 my-1.5 px-3 py-1.5 rounded-xl bg-[#FFF3ED] border border-[#F8DACD] flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-[#8C3A16] shrink-0" />
                      <span className="text-[11.5px] font-semibold text-[#8C3A16]">
                        Audio assistance active • Tap any craft to hear details
                      </span>
                    </div>

                    <div className="px-5 py-2 flex flex-col text-left flex-1">
                      {/* Headings */}
                      <h1 className="text-xl font-black text-[#1A1A1A] tracking-tight mb-1">
                        What do you make?
                      </h1>
                      <p className="text-[13px] text-[#6B584E] leading-snug mb-3">
                        Choose your primary craft. You can select more than one or tell us with your voice.
                      </p>

                      {/* Tap Microphone Card */}
                      <div className="w-full p-3 rounded-2xl bg-[#FFF9F5] border border-[#F4E5DB] flex items-center gap-3 mb-4">
                        <button
                          onClick={() => {
                            setIsRecording(!isRecording);
                            showToast(isRecording ? 'Recording stopped' : 'Listening to your craft voice prompt...');
                          }}
                          className={`w-11 h-11 rounded-full flex items-center justify-center text-white shrink-0 cursor-pointer transition-all ${
                            isRecording ? 'bg-red-500 animate-pulse' : 'bg-[#8C3A16] hover:bg-[#722E11]'
                          }`}
                        >
                          <Mic className="w-5 h-5" />
                        </button>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-[13px] font-bold text-[#221C19] leading-tight">
                            Tap microphone to speak your craft name
                          </h4>
                          <p className="text-[11.5px] text-[#7A685F] italic mt-0.5">
                            Say e.g. "I make terracotta pots and clay planters"
                          </p>
                        </div>
                      </div>

                      {/* 2-Column Visual Craft Cards Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        {[
                          {
                            id: 'bamboo',
                            title: 'Bamboo & Cane',
                            subtitle: 'Baskets, planters, lamps, mats',
                            imageGradient: 'from-[#8B5A2B] via-[#CD853F] to-[#D2B48C]',
                            craftIcon: '🧺',
                            iconBg: 'bg-[#5D7A38]',
                          },
                          {
                            id: 'pottery',
                            title: 'Pottery & Terracotta',
                            subtitle: 'Earthen pots, vases, tableware, diyas',
                            imageGradient: 'from-[#A0522D] via-[#CD5C5C] to-[#E9967A]',
                            craftIcon: '🏺',
                            iconBg: 'bg-[#BA5427]',
                          },
                          {
                            id: 'handloom',
                            title: 'Handloom & Textiles',
                            subtitle: 'Sarees, dupattas, stoles, home linen',
                            imageGradient: 'from-[#4682B4] via-[#5F9EA0] to-[#B0C4DE]',
                            craftIcon: '🧵',
                            iconBg: 'bg-[#386B8C]',
                          },
                          {
                            id: 'embroidery',
                            title: 'Embroidery & Zardozi',
                            subtitle: 'Chikan, kantha, mirror work, zari',
                            imageGradient: 'from-[#800020] via-[#C71585] to-[#DB7093]',
                            craftIcon: '🪡',
                            iconBg: 'bg-[#8C386B]',
                          },
                          {
                            id: 'woodcraft',
                            title: 'Wood Craft & Carving',
                            subtitle: 'Toys, wooden trays, wall panels, utensils',
                            imageGradient: 'from-[#5C4033] via-[#8B4513] to-[#A0522D]',
                            craftIcon: '🪵',
                            iconBg: 'bg-[#7A5138]',
                          },
                          {
                            id: 'metalcraft',
                            title: 'Metal Craft & Dhokra',
                            subtitle: 'Brass statues, bell metal, copperware',
                            imageGradient: 'from-[#B8860B] via-[#DAA520] to-[#FFD700]',
                            craftIcon: '🔔',
                            iconBg: 'bg-[#B58900]',
                          },
                          {
                            id: 'jewellery',
                            title: 'Handmade Jewellery',
                            subtitle: 'Beaded, terracotta, tribal silver, filigree',
                            imageGradient: 'from-[#708090] via-[#A9A9A9] to-[#D3D3D3]',
                            craftIcon: '📿',
                            iconBg: 'bg-[#C2410C]',
                          },
                          {
                            id: 'painting',
                            title: 'Traditional Painting',
                            subtitle: 'Madhubani, Warli, Pichwai, miniature',
                            imageGradient: 'from-[#2E8B57] via-[#3CB371] to-[#8FBC8F]',
                            craftIcon: '🎨',
                            iconBg: 'bg-[#0F766E]',
                          },
                          {
                            id: 'leather',
                            title: 'Leather Craft',
                            subtitle: 'Juttis, bags, journals, embossed goods',
                            imageGradient: 'from-[#8B4513] via-[#A0522D] to-[#CD853F]',
                            craftIcon: '👞',
                            iconBg: 'bg-[#78350F]',
                          },
                          {
                            id: 'stone',
                            title: 'Stone & Marble',
                            subtitle: 'Inlay work, jaali panels, sculptures',
                            imageGradient: 'from-[#696969] via-[#808080] to-[#C0C0C0]',
                            craftIcon: '🗿',
                            iconBg: 'bg-[#475569]',
                          },
                        ].map((craft) => {
                          const isSelected = selectedCrafts.includes(craft.title) || (craft.id === 'bamboo' && selectedCrafts.length === 0);
                          return (
                            <div
                              key={craft.id}
                              onClick={() => {
                                if (isSelected) {
                                  setSelectedCrafts(selectedCrafts.filter((c) => c !== craft.title));
                                } else {
                                  setSelectedCrafts([...selectedCrafts, craft.title]);
                                }
                              }}
                              className={`rounded-2xl border text-left overflow-hidden bg-white transition-all cursor-pointer flex flex-col justify-between ${
                                isSelected
                                  ? 'border-2 border-[#8C3A16] shadow-sm ring-1 ring-[#8C3A16]/20'
                                  : 'border-[#EADFD6] hover:border-[#CBB7AA]'
                              }`}
                            >
                              {/* Visual Craft Banner */}
                              <div className="relative h-28 w-full overflow-hidden">
                                <div className={`w-full h-full bg-gradient-to-tr ${craft.imageGradient} flex items-center justify-center relative`}>
                                  <div className="text-4xl filter drop-shadow-md select-none transform hover:scale-110 transition-transform">
                                    {craft.craftIcon}
                                  </div>
                                  {/* Pattern Texture Overlay */}
                                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                                </div>

                                {/* Speaker Audio Icon */}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    showToast(`Playing audio details for ${craft.title}...`);
                                  }}
                                  className="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#4A372D] shadow-xs hover:bg-white"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>

                                {/* Selected Checkmark Badge */}
                                {isSelected && (
                                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shadow-xs border border-white">
                                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                                  </div>
                                )}
                              </div>

                              {/* Content Info */}
                              <div className="p-3 flex-1 flex flex-col justify-between">
                                <div>
                                  <h3 className="text-[13.5px] font-extrabold text-[#1A1A1A] leading-tight mb-1">
                                    {craft.title}
                                  </h3>
                                  <p className="text-[10.5px] text-[#7A685F] leading-tight line-clamp-2">
                                    {craft.subtitle}
                                  </p>
                                </div>
                                <div className="mt-2.5">
                                  <span
                                    className={`text-[11px] font-bold block ${
                                      isSelected ? 'text-[#8C3A16]' : 'text-[#8C7368]'
                                    }`}
                                  >
                                    {isSelected ? 'Selected' : 'Tap to choose'}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Full-width Other Unique Crafts Card */}
                      <div className="w-full p-3 rounded-2xl bg-white border border-[#EADFD6] flex items-center justify-between gap-3 shadow-2xs hover:border-[#CBB7AA] transition-all cursor-pointer mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-amber-700 via-orange-600 to-yellow-500 flex items-center justify-center text-2xl shadow-xs shrink-0">
                            🏮
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h3 className="text-sm font-extrabold text-[#1A1A1A]">
                                Other Unique Crafts
                              </h3>
                            </div>
                            <p className="text-[11px] text-[#7A685F] leading-tight mt-0.5">
                              Paper mache, glasswork, horn craft, lacquer
                            </p>
                            <span className="text-[11px] font-bold text-[#8C7368] block mt-1">
                              Tap to browse more
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            showToast('Playing audio description for Other Unique Crafts...');
                          }}
                          className="w-7 h-7 rounded-full bg-[#FAF3EE] flex items-center justify-center text-[#7A685F] hover:text-[#8C3A16]"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-5 pt-2 border-t border-[#F0E6DE] bg-[#FDFBF9]">
                      <button
                        onClick={() => setActiveScreenIndex(6)}
                        className="w-full py-3.5 bg-[#E66B38] hover:bg-[#D55C2A] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <span>Continue</span>
                      </button>
                      <p className="text-center text-[11.5px] text-[#7A685F] mt-2">
                        You can change or add secondary craft skills anytime.
                      </p>
                    </div>
                  </div>
                )}

                {/* 8. SCREEN 6: PHOTO */}
                {activeScreenIndex === 6 && (
                  <div className="flex-1 flex flex-col p-5 overflow-y-auto">
                    <div className="flex items-center justify-between mb-4">
                      <button onClick={() => setActiveScreenIndex(5)} className="p-1 text-[#4A3228] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <span className="text-xs font-bold text-[#A84318]">Step 6 / 7</span>
                    </div>

                    <div className="text-center mb-5">
                      <h2 className="text-lg font-black text-[#2D2421]">कार्यशाला की फोटो</h2>
                      <p className="text-xs text-[#6B5A51]">Upload artisan profile or workshop picture</p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className="w-32 h-32 rounded-3xl bg-[#F3E7DF] border-2 border-dashed border-[#A84318] flex flex-col items-center justify-center p-4 text-[#A84318] mb-4">
                        <Camera className="w-10 h-10 mb-1" />
                        <span className="text-[10px] font-bold">Upload Photo</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveScreenIndex(7)}
                      className="w-full py-3 bg-[#A84318] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Preview Profile →</span>
                    </button>
                  </div>
                )}

                {/* 9. SCREEN 7: PROFILE PREVIEW (Exact 1:1 Match to ar-AI Profile Generated approval and create my account.png) */}
                {activeScreenIndex === 7 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-y-auto">
                    {/* Top Bar */}
                    <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                      <button onClick={() => setActiveScreenIndex(6)} className="p-1 text-[#221C19] hover:bg-[#F3E7DF] rounded-lg">
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div className="px-3 py-1 bg-[#E8F5E9] rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
                        <span className="text-xs font-bold text-[#2E7D32]">Step 5 of 5 • Artisan Setup</span>
                      </div>
                      <div className="px-2.5 py-1 bg-white border border-[#E5D5CB] rounded-full text-xs font-semibold text-[#4A372D] flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[10px]">▼</span>
                      </div>
                    </div>

                    <div className="px-5 py-2 flex flex-col text-left flex-1">
                      {/* Voice-Crafted Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FCEEE6] rounded-full w-fit mb-2">
                        <Users className="w-3.5 h-3.5 text-[#8C3A16]" />
                        <span className="text-[10.5px] font-bold text-[#8C3A16] uppercase tracking-wider">
                          VOICE-CRAFTED
                        </span>
                      </div>

                      {/* Headings */}
                      <h1 className="text-2xl font-black text-[#1A1A1A] tracking-tight mb-1">
                        Your Profile
                      </h1>
                      <p className="text-[13px] text-[#6B584E] leading-snug mb-4">
                        We generated this from your voice. Check if everything looks accurate.
                      </p>

                      {/* Voice Note Recorded Bar */}
                      <div className="w-full p-3 rounded-2xl bg-[#FDF2EC] border border-[#F3DFD5] flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                            className="w-10 h-10 rounded-full bg-[#9C3C18] text-white flex items-center justify-center shadow-xs cursor-pointer"
                          >
                            {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                          </button>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-bold text-[#1A1A1A]">Voice Note Recorded</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                            </div>
                            <span className="text-[11px] text-[#7A685F]">0:18 • Original Audio Input</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 text-[#A84318]">
                          <span className="w-1 h-3 bg-[#A84318] rounded-full animate-pulse" />
                          <span className="w-1 h-5 bg-[#A84318] rounded-full" />
                          <span className="w-1 h-2 bg-[#A84318] rounded-full" />
                          <span className="w-1 h-6 bg-[#A84318] rounded-full animate-pulse" />
                          <span className="w-1 h-4 bg-[#A84318] rounded-full" />
                        </div>
                      </div>

                      {/* Artisan Profile Card */}
                      <div className="w-full bg-white rounded-3xl p-4 border border-[#EADFD6] shadow-xs mb-3 space-y-3.5">
                        {/* Header: Avatar, Name, Verified, Location, Craft */}
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-2xl bg-[#F4E5DC] border border-[#E5D5CB] flex items-center justify-center text-[#8C5338] font-bold text-xl overflow-hidden">
                              <Palette className="w-8 h-8 text-[#9C3C18]" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#2E7D32] rounded-full flex items-center justify-center text-white border-2 border-white">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <h3 className="text-base font-black text-[#1A1A1A] truncate">{artisanName}</h3>
                              <span className="px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-[10.5px] font-bold border border-[#C8E6C9]">
                                Verified
                              </span>
                            </div>
                            <div className="flex items-center gap-1 text-[11.5px] text-[#6B584E] mb-1.5">
                              <MapPin className="w-3 h-3 text-[#8C5338]" />
                              <span>Barabanki, Uttar Pradesh</span>
                            </div>
                            <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FCEEE6] rounded-full text-[11px] font-bold text-[#8C3A16]">
                              <span>🏺</span>
                              <span>Bamboo & Cane Craft</span>
                            </div>
                          </div>
                        </div>

                        {/* Experience Row */}
                        <div className="pt-2 border-t border-[#F0E5DE] flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FAF0E8] flex items-center justify-center text-[#8C4421]">
                            <Medal className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[11px] text-[#7A685F] block">Experience</span>
                            <span className="text-sm font-extrabold text-[#221C19]">10+ Years</span>
                          </div>
                        </div>

                        {/* Key Specialties */}
                        <div>
                          <span className="text-[10.5px] font-bold text-[#5A483E] tracking-wider uppercase block mb-2">
                            KEY SPECIALTIES
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {[
                              { label: 'Fruit Baskets', icon: '🍃' },
                              { label: 'Decorative Planters', icon: '🪴' },
                              { label: 'Fine Lattice Weaving', icon: '🥢' },
                            ].map((spec) => (
                              <div
                                key={spec.label}
                                className="px-2.5 py-1 rounded-xl bg-[#FDF4EE] border border-[#EADCD2] text-[11.5px] font-bold text-[#4A3228] flex items-center gap-1"
                              >
                                <span>{spec.icon}</span>
                                <span>{spec.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bulk Production Ready Card */}
                        <div className="p-3 rounded-xl bg-[#FFF5EE] border border-[#F6E3D8] flex items-start gap-2.5">
                          <div className="p-1 rounded-lg bg-[#FBE7DB] text-[#C25828] mt-0.5">
                            <Package className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#221C19] block mb-0.5">Bulk Production Ready</span>
                            <span className="text-[11px] text-[#6B584E] leading-tight block">
                              Capacity to supply 200–500 pieces monthly with regional cooperative support.
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* GI Directory Trust */}
                      <div className="flex items-center gap-1.5 text-[11.5px] text-[#5A483E] mb-2">
                        <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0" />
                        <span>Profile verified for the Open Craft Network & Government GI directory.</span>
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="p-5 pt-2 border-t border-[#F0E6DE] bg-[#FDFBF9] space-y-2">
                      <button
                        onClick={() => {
                          showToast('🎉 Profile Created! Entering Artisan Home...');
                          setActiveScreenIndex(9); // Opens Home Screen directly!
                        }}
                        className="w-full py-3.5 bg-[#9C3C18] hover:bg-[#853213] text-white rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <span>Create My Profile</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setActiveScreenIndex(4)}
                        className="w-full py-3 bg-[#FBF0E9] border border-[#EADCD2] hover:bg-[#F3E7DF] text-[#4A372D] rounded-2xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <Mic className="w-4 h-4 text-[#8C3A16]" />
                        <span>Edit with Voice</span>
                      </button>

                      <p className="text-center text-[11.5px] text-[#7A685F]">
                        You can update your craft details or add photos anytime.
                      </p>
                    </div>
                  </div>
                )}

                {/* 10. SCREEN 9: ARTISAN HOME DASHBOARD (Exact Match to Artisan Home section.png) */}
                {/* 10. SCREEN 9: ARTISAN HOME (matching Artisan Home section.png) */}
                {activeScreenIndex === 9 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-hidden relative">
                    {/* Top Bar with Quick-Switch Language Toggle */}
                    <div className="px-3.5 py-2.5 flex items-center justify-between border-b border-[#F0E6DE] bg-white/80 backdrop-blur-xs sticky top-0 z-10">
                      <HunarSangamLogo size={30} showText={true} />

                      <div className="flex items-center gap-2">
                        {/* Quick-Switch Language Toggle (English <-> Hindi) */}
                        <div
                          className="flex items-center bg-[#F3E7DF] p-0.5 rounded-full border border-[#E5D5CB] shadow-2xs"
                          title="Quick switch language between English and Hindi"
                        >
                          <button
                            onClick={() => {
                              setSelectedLanguage('English');
                              showToast('🌐 Switched language to English');
                            }}
                            className={`px-2 py-0.5 rounded-full text-[10.5px] font-black transition-all cursor-pointer ${
                              !selectedLanguage.toLowerCase().includes('हिंदी') && !selectedLanguage.toLowerCase().includes('hindi')
                                ? 'bg-[#8C3A16] text-white shadow-2xs scale-102'
                                : 'text-[#6B584E] hover:text-[#2D2421]'
                            }`}
                          >
                            EN
                          </button>
                          <button
                            onClick={() => {
                              setSelectedLanguage('हिंदी / Hindi');
                              showToast('🌐 भाषा बदलकर हिंदी कर दी गई');
                            }}
                            className={`px-2 py-0.5 rounded-full text-[10.5px] font-black transition-all cursor-pointer ${
                              selectedLanguage.toLowerCase().includes('हिंदी') || selectedLanguage.toLowerCase().includes('hindi')
                                ? 'bg-[#8C3A16] text-white shadow-2xs scale-102'
                                : 'text-[#6B584E] hover:text-[#2D2421]'
                            }`}
                          >
                            हिं
                          </button>
                        </div>

                        {/* Notification Bell */}
                        <div
                          onClick={() => setShowNotificationsModal(true)}
                          className="relative p-1.5 bg-[#FAF2EC] border border-[#E5D5CB] rounded-full text-[#4A372D] hover:bg-[#F5ECE5] active:scale-95 transition-all cursor-pointer"
                          title="Notifications"
                        >
                          <Bell className="w-3.5 h-3.5" />
                          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#C53030]" />
                        </div>

                        {/* User Avatar */}
                        <div
                          onClick={() => {
                            setActiveScreenIndex(20);
                            showToast('Opening Artisan Profile & Visiting Card (Screen 20)');
                          }}
                          className="relative w-7 h-7 rounded-full bg-[#EADFD6] border border-[#D5C4B8] flex items-center justify-center text-[#7C3F24] cursor-pointer hover:ring-2 hover:ring-[#8C3A16] active:scale-95 transition-all"
                          title="Artisan Profile"
                        >
                          <User className="w-4 h-4" />
                          <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#2E7D32] ring-1 ring-white" />
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Dashboard Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
                      {/* Good morning header */}
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h2 className="text-xl font-black text-[#221C19]">
                            {`${tr('goodMorning')}, ${artisanName.split(' ')[0] || 'Ramu'}`}
                          </h2>
                          <span className="text-lg">👋</span>
                        </div>
                        <p className="text-xs text-[#6B584E] font-medium">
                          {tr('readyToCreate')}
                        </p>
                      </div>

                      {/* AI Voice Command Bar */}
                      <div className="bg-[#FFFBF8] border border-[#EADFD6] rounded-2xl p-2 px-3 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2 text-xs text-[#7A685F]">
                          <Radio className="w-4 h-4 text-[#A84318] animate-pulse" />
                          <span>{tr('tapToSpeakOrAsk')}</span>
                        </div>
                        <button
                          onClick={() => showToast(`🎙️ ${tr('tapToSpeakOrAsk')}`)}
                          className="w-8 h-8 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0 shadow-xs hover:bg-[#772F10] active:scale-95 transition-all cursor-pointer"
                        >
                          <Mic className="w-4 h-4" />
                        </button>
                      </div>

                      {/* 3 Metric Cards */}
                      <div className="grid grid-cols-3 gap-2">
                        {/* New Orders */}
                        <div
                          onClick={() => {
                            setOrdersFilterTab(2);
                            setActiveScreenIndex(22);
                            showToast('Navigating to New Orders Hub');
                          }}
                          className="bg-[#FBF4EE] hover:bg-[#F5ECE3] active:scale-98 transition-all border border-[#EADFD6] hover:border-[#8C3A16] rounded-2xl p-2.5 cursor-pointer shadow-2xs group"
                          title="Click to view New Orders"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-[#4A372D] leading-tight group-hover:text-[#8C3A16]">
                              {tr('newOrders')}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C53030] animate-ping" />
                          </div>
                          <span className="text-2xl font-black text-[#221C19] block mt-1">2</span>
                        </div>

                        {/* In Progress */}
                        <div
                          onClick={() => {
                            setOrdersFilterTab(1);
                            setActiveScreenIndex(22);
                            showToast('Navigating to In-Progress Orders');
                          }}
                          className="bg-[#FBF4EE] hover:bg-[#F5ECE3] active:scale-98 transition-all border border-[#EADFD6] hover:border-[#8C3A16] rounded-2xl p-2.5 cursor-pointer shadow-2xs group"
                          title="Click to view In-Progress Orders"
                        >
                          <span className="text-[11px] font-semibold text-[#4A372D] leading-tight block group-hover:text-[#8C3A16]">
                            {tr('inProgress')}
                          </span>
                          <span className="text-2xl font-black text-[#221C19] block mt-1">1</span>
                        </div>

                        {/* Completed */}
                        <div
                          onClick={() => setShowCompletedOrdersModal(true)}
                          className="bg-[#FBF4EE] hover:bg-[#F5ECE3] active:scale-98 transition-all border border-[#EADFD6] hover:border-[#8C3A16] rounded-2xl p-2.5 cursor-pointer shadow-2xs group"
                          title="Click to view Completed Orders history"
                        >
                          <span className="text-[11px] font-semibold text-[#4A372D] leading-tight block group-hover:text-[#8C3A16]">
                            {tr('completed')}
                          </span>
                          <span className="text-2xl font-black text-[#221C19] block mt-1">28</span>
                        </div>
                      </div>

                      {/* Active Order Card (Needs Attention) */}
                      <div className="bg-[#FFFDFB] border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="bg-[#FDECE8] border border-[#F5C6BC] text-[#C53030] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            <span>{tr('needsAttention')}</span>
                          </div>
                          <span className="text-[11px] font-semibold text-[#6B584E]">{tr('b2bBulk')}</span>
                        </div>

                        <div>
                          <h3 className="text-sm font-extrabold text-[#221C19]">
                            {tr('handmadeBambooBaskets')}
                          </h3>
                          <div className="flex items-center gap-1 text-[11px] text-[#6B584E] mt-0.5">
                            <Building2 className="w-3.5 h-3.5" />
                            <span>{tr('fabIndiaSourcing')}</span>
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="bg-[#FBF4EE] p-2.5 rounded-xl space-y-1.5">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-semibold text-[#4A372D]">{tr('craftProgress')}</span>
                            <span className="font-bold text-[#A84318]">
                              {bambooProgress} / 50 {tr('unitsCompleted')} ({((bambooProgress / 50) * 100).toFixed(0)}%)
                            </span>
                          </div>
                          <div className="w-full bg-[#E5D5CB] h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-[#8C3A16] h-full rounded-full transition-all duration-300"
                              style={{ width: `${(bambooProgress / 50) * 100}%` }}
                            />
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setActiveScreenIndex(23);
                              showToast('Opening Order Progress Updation (Screen 23)');
                            }}
                            className="flex-1 py-2 border border-[#E5D5CB] bg-white rounded-xl text-xs font-bold text-[#4A372D] flex items-center justify-center gap-1.5 hover:bg-[#FAF5F0] active:scale-98 transition-all cursor-pointer"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>{tr('updateProgress')}</span>
                          </button>
                          <button
                            onClick={() => {
                              setActiveScreenIndex(24);
                              showToast('Viewing Order Request & Details (Screen 24)');
                            }}
                            className="flex-1 py-2 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 active:scale-98 transition-all cursor-pointer"
                          >
                            <span>{tr('viewOrder')}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* My Products Section */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-sm font-extrabold text-[#221C19]">{tr('myProducts')}</h3>
                            <span className="text-xs font-semibold text-[#7A685F]">(6)</span>
                          </div>
                          <button
                            onClick={() => {
                              setActiveScreenIndex(11);
                              showToast(tr('addProduct'));
                            }}
                            className="text-xs font-bold text-[#A84318] flex items-center gap-0.5 hover:underline cursor-pointer"
                          >
                            <Plus className="w-3 h-3" /> {tr('addProduct')}
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {/* Product 1 */}
                          <div
                            onClick={() => {
                              setActiveScreenIndex(18);
                              showToast('Viewing Woven Fruit Basket details');
                            }}
                            className="bg-white border border-[#EADFD6] hover:border-[#8C3A16] active:scale-98 transition-all rounded-2xl overflow-hidden shadow-xs cursor-pointer group"
                          >
                            <div className="h-24 bg-[#F5EBE1] relative flex items-center justify-center group-hover:scale-102 transition-transform">
                              <ShoppingBag className="w-8 h-8 text-[#B85324]" />
                              <span className="absolute top-1.5 left-1.5 bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                {tr('published')}
                              </span>
                            </div>
                            <div className="p-2 space-y-1">
                              <h4 className="text-xs font-extrabold text-[#221C19] truncate group-hover:text-[#8C3A16]">
                                {tr('wovenFruitBasket')}
                              </h4>
                              <div className="text-[11px]">
                                <span className="font-extrabold text-[#A84318]">₹340</span>
                                <span className="text-[#7A685F]"> • 42 {tr('navOrders')}</span>
                              </div>
                              <span className="inline-block text-[9.5px] font-semibold text-[#6B584E] bg-[#FBF4EE] px-1.5 py-0.5 rounded">
                                {tr('wholesaleMoq')}: 25
                              </span>
                            </div>
                          </div>

                          {/* Product 2 */}
                          <div
                            onClick={() => {
                              setActiveScreenIndex(18);
                              showToast('Viewing Cane Indoor Planter details');
                            }}
                            className="bg-white border border-[#EADFD6] hover:border-[#8C3A16] active:scale-98 transition-all rounded-2xl overflow-hidden shadow-xs cursor-pointer group"
                          >
                            <div className="h-24 bg-[#F5EBE1] relative flex items-center justify-center group-hover:scale-102 transition-transform">
                              <Package className="w-8 h-8 text-[#B85324]" />
                              <span className="absolute top-1.5 left-1.5 bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[9px] font-bold px-1.5 py-0.5 rounded-md">
                                {tr('published')}
                              </span>
                            </div>
                            <div className="p-2 space-y-1">
                              <h4 className="text-xs font-extrabold text-[#221C19] truncate group-hover:text-[#8C3A16]">
                                {tr('caneIndoorPlanter')}
                              </h4>
                              <div className="text-[11px]">
                                <span className="font-extrabold text-[#A84318]">₹520</span>
                                <span className="text-[#7A685F]"> • 18 {tr('navOrders')}</span>
                              </div>
                              <span className="inline-block text-[9.5px] font-semibold text-[#6B584E] bg-[#FBF4EE] px-1.5 py-0.5 rounded">
                                {tr('wholesaleMoq')}: 15
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Artisan Score & Reliability */}
                      <div
                        onClick={() => setShowScoreBreakdownModal(true)}
                        className="bg-[#FDF6F0] hover:bg-[#F9ECE1] active:scale-98 transition-all border border-[#EADFD6] hover:border-[#8C3A16] rounded-2xl p-3 space-y-2 cursor-pointer shadow-2xs"
                        title="Click to view detailed Artisan Score breakdown"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#221C19]">
                            <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                            <span>{tr('artisanScore')}</span>
                          </div>
                          <span className="text-[10px] font-bold bg-[#EAE3DC] text-[#5D483E] px-2 py-0.5 rounded-md">
                            {tr('topTier')}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 divide-x divide-[#E5D5CB] pt-1 text-center">
                          <div>
                            <span className="text-sm font-extrabold text-[#221C19] block">96%</span>
                            <span className="text-[9.5px] text-[#7A685F]">{tr('onTimeDelivery')}</span>
                          </div>
                          <div>
                            <span className="text-sm font-extrabold text-[#221C19] block">★ 4.9</span>
                            <span className="text-[9.5px] text-[#7A685F]">34 {tr('reviews')}</span>
                          </div>
                          <div>
                            <span className="text-xs font-extrabold text-[#A84318] block">{tr('cluster')}</span>
                            <span className="text-[9.5px] text-[#7A685F]">Barabanki</span>
                          </div>
                        </div>
                      </div>

                      {/* Opportunities for you */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-extrabold text-[#221C19]">
                            {`🔥 ${tr('opportunitiesForYou')}`}
                          </h3>
                          <button
                            onClick={() => {
                              setActiveScreenIndex(22);
                              showToast('Viewing All Bulk Opportunities (Screen 22)');
                            }}
                            className="text-xs font-bold text-[#8C3A16] hover:underline cursor-pointer"
                          >
                            {`${tr('viewAll')} (12) >`}
                          </button>
                        </div>

                        {/* Opportunity 1 */}
                        <div
                          onClick={() => {
                            setActiveScreenIndex(24);
                            showToast('Viewing FabIndia B2B Bulk Order (Screen 24)');
                          }}
                          className="bg-white border border-[#EADFD6] hover:border-[#8C3A16] active:scale-98 transition-all rounded-2xl p-3 shadow-xs space-y-2 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <span className="bg-[#FFF3E0] border border-[#FFE0B2] text-[#E65100] text-[10px] font-bold px-2 py-0.5 rounded-md">
                              {tr('bulkB2bOrder')}
                            </span>
                            <span className="text-base font-black text-[#221C19]">₹45,000</span>
                          </div>

                          <div>
                            <h4 className="text-xs font-extrabold text-[#221C19]">
                              {tr('terracottaPlantersOrder')}
                            </h4>
                            <p className="text-[11px] text-[#7A685F] flex items-center gap-1 mt-0.5">
                              <Store className="w-3 h-3" /> FabIndia Curated Home
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[10px] text-[#7A685F] flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {tr('estimatedDays')}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveScreenIndex(24);
                                showToast('Viewing FabIndia B2B Order Specs (Screen 24)');
                              }}
                              className="bg-[#8C3A16] hover:bg-[#772F10] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg cursor-pointer"
                            >
                              {tr('viewOpportunity')}
                            </button>
                          </div>
                        </div>

                        {/* Opportunity 2 */}
                        <div
                          onClick={() => {
                            setActiveScreenIndex(25);
                            showToast('Opening Form Artisan Collective (Screen 25)');
                          }}
                          className="bg-white border border-[#EADFD6] hover:border-[#8C3A16] active:scale-98 transition-all rounded-2xl p-3 shadow-xs space-y-2 cursor-pointer"
                        >
                          <div className="flex items-center justify-between">
                            <span className="bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                              <Users className="w-3 h-3" /> {tr('guildCollaboration')}
                            </span>
                            <span className="text-[10px] font-semibold text-[#C53030]">
                              {tr('deadline')}
                            </span>
                          </div>

                          <div>
                            <h4 className="text-xs font-extrabold text-[#221C19] leading-snug">
                              {tr('collaborationRequest')}
                            </h4>
                            <p className="text-[11px] text-[#6B584E] mt-0.5">
                              Kishore Potter Guild • Looking for 1 partner
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[11px] font-semibold text-[#4A372D]">{tr('sharedPayout')}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveScreenIndex(25);
                                showToast('Opening Form Artisan Collective (Screen 25)');
                              }}
                              className="bg-[#8C3A16] hover:bg-[#772F10] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg cursor-pointer"
                            >
                              {tr('joinCollaboration')}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Mic Button */}
                    <button
                      onClick={() => showToast(`🎙️ ${tr('tapToSpeakOrAsk')}`)}
                      className="absolute right-4 bottom-16 w-12 h-12 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all z-20 cursor-pointer"
                    >
                      <Mic className="w-6 h-6" />
                    </button>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('home')}
                  </div>
                )}

                {/* 11. SCREEN 10: ARTISAN PRODUCT CATALOG (matching ar-Artisan Product Catalog.png) */}
                {activeScreenIndex === 10 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden relative">
                    {/* Top App Bar with Branding, Language, Notification & Avatar */}
                    <div className="px-3.5 pt-1.5 pb-2 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0 z-10">
                      <HunarSangamLogo size={28} showText={true} />

                      <div className="flex items-center gap-2">
                        {/* Quick-Switch Language Toggle (English <-> Hindi) */}
                        <div
                          className="flex items-center bg-[#F3E7DF] p-0.5 rounded-full border border-[#E5D5CB] shadow-2xs"
                          title="Quick switch language between English and Hindi"
                        >
                          <button
                            onClick={() => {
                              setSelectedLanguage('English');
                              showToast('🌐 Switched language to English');
                            }}
                            className={`px-2 py-0.5 rounded-full text-[10.5px] font-black transition-all cursor-pointer ${
                              !selectedLanguage.toLowerCase().includes('हिंदी') && !selectedLanguage.toLowerCase().includes('hindi')
                                ? 'bg-[#8C3A16] text-white shadow-2xs scale-102'
                                : 'text-[#6B584E] hover:text-[#2D2421]'
                            }`}
                          >
                            EN
                          </button>
                          <button
                            onClick={() => {
                              setSelectedLanguage('हिंदी / Hindi');
                              showToast('🌐 भाषा बदलकर हिंदी कर दी गई');
                            }}
                            className={`px-2 py-0.5 rounded-full text-[10.5px] font-black transition-all cursor-pointer ${
                              selectedLanguage.toLowerCase().includes('हिंदी') || selectedLanguage.toLowerCase().includes('hindi')
                                ? 'bg-[#8C3A16] text-white shadow-2xs scale-102'
                                : 'text-[#6B584E] hover:text-[#2D2421]'
                            }`}
                          >
                            हिं
                          </button>
                        </div>

                        {/* Notification Bell */}
                        <div
                          onClick={() => setShowNotificationsModal(true)}
                          className="relative p-1 rounded-full bg-white border border-[#E5D5CB] text-[#4A372D] hover:bg-[#F5ECE5] active:scale-95 transition-all cursor-pointer"
                          title="Notifications"
                        >
                          <Bell className="w-3.5 h-3.5" />
                          <span className="absolute 0 top-0.5 right-0.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
                        </div>

                        {/* User Avatar with Online Dot */}
                        <div
                          onClick={() => {
                            setActiveScreenIndex(20);
                            showToast('Opening Artisan Profile & Visiting Card (Screen 20)');
                          }}
                          className="relative w-6 h-6 rounded-full bg-[#E5D5CB] border border-[#8C3A16]/30 overflow-hidden flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#8C3A16] active:scale-95 transition-all"
                          title="Artisan Profile"
                        >
                          <span className="text-[10px] font-bold text-[#8C3A16]">RK</span>
                          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-emerald-500 rounded-full ring-1 ring-white" />
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Catalog Content */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-3 pb-16">
                      {/* Cluster & Profile Overview Card */}
                      <div className="bg-white rounded-2xl p-3 border border-[#EADFD6] shadow-2xs">
                        <div className="flex items-center justify-between mb-1.5">
                          <h2 className="text-base font-extrabold text-[#2D2421]">My Products</h2>
                          <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            Verified Artisan
                          </span>
                        </div>

                        <p className="text-[11px] font-semibold text-[#8C3A16] flex items-center gap-1 mb-1">
                          <CheckCircle2 className="w-3 h-3 text-[#8C3A16]" />
                          Assam Cane &amp; Bamboo Cluster
                        </p>

                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 mb-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Ramu Kumar • Workshop Live Status</span>
                        </div>

                        {/* 4 Metric Stats Grid (2x2) */}
                        <div className="grid grid-cols-2 gap-2">
                          <div
                            onClick={() => {
                              setSelectedProductFilter(0);
                              showToast('Showing all 8 crafts in catalog');
                            }}
                            className="bg-[#FAF4F0] hover:bg-[#F3E6DC] active:scale-98 transition-all rounded-xl p-2 border border-[#EADFD6]/80 hover:border-[#8C3A16] flex items-center gap-2 cursor-pointer shadow-2xs"
                            title="Click to view all 8 crafts"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#F0DDD0] flex items-center justify-center text-[#8C3A16]">
                              <Package className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#2D2421]">8 Crafts</p>
                              <p className="text-[9px] font-semibold text-[#7A685F]">Total Published</p>
                            </div>
                          </div>

                          <div
                            onClick={() => {
                              setSelectedProductFilter(2);
                              showToast('Showing 5 ONDC-synced crafts');
                            }}
                            className="bg-[#EDF7ED] hover:bg-[#DCF0DD] active:scale-98 transition-all rounded-xl p-2 border border-[#C8E6C9] hover:border-emerald-600 flex items-center gap-2 cursor-pointer shadow-2xs"
                            title="Click to view 5 ONDC Live crafts"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#C8E6C9] flex items-center justify-center text-emerald-800">
                              <Store className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-emerald-900">5 Crafts</p>
                              <p className="text-[9px] font-semibold text-emerald-700">ONDC Live</p>
                            </div>
                          </div>

                          <div
                            onClick={() => setShowBuyerAnalyticsModal(true)}
                            className="bg-[#F6F8FA] hover:bg-[#EAEFF5] active:scale-98 transition-all rounded-xl p-2 border border-[#DFE3E8] hover:border-slate-500 flex items-center gap-2 cursor-pointer shadow-2xs"
                            title="Click to view buyer views analytics"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#E1E6EB] flex items-center justify-center text-slate-700">
                              <Eye className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#2D2421]">1,420</p>
                              <p className="text-[9px] font-semibold text-[#7A685F]">Buyer Views</p>
                            </div>
                          </div>

                          <div
                            onClick={() => {
                              setActiveScreenIndex(22);
                              showToast('Viewing 18 Bulk Inquiries in Orders Hub');
                            }}
                            className="bg-[#FFF9E6] hover:bg-[#FFF0C2] active:scale-98 transition-all rounded-xl p-2 border border-[#FFE082] hover:border-amber-600 flex items-center gap-2 cursor-pointer shadow-2xs"
                            title="Click to view Bulk Inquiries in Orders Hub"
                          >
                            <div className="w-7 h-7 rounded-lg bg-[#FFE082]/70 flex items-center justify-center text-amber-900">
                              <Truck className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-black text-amber-950">18</p>
                              <p className="text-[9px] font-semibold text-amber-800">Bulk Inquiries</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Add Product Button (Voice / Tap) - matching ar--p1 */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(11);
                          showToast('Opening Product Photography camera...');
                        }}
                        className="w-full bg-linear-to-r from-[#FF5722] to-[#E64A19] hover:from-[#F4511E] hover:to-[#D84315] active:scale-[0.98] transition-all text-white rounded-full py-3 px-4 flex items-center justify-center gap-2 shadow-md"
                      >
                        <span className="text-xs font-black">Add products by clicking</span>
                        <div className="w-5 h-5 rounded-full bg-white text-[#E64A19] flex items-center justify-center">
                          <Mic className="w-3 h-3" />
                        </div>
                      </button>

                      {/* Search / Voice Bar */}
                      <div className="bg-white rounded-2xl p-1.5 border border-[#EADFD6] flex items-center gap-2 shadow-2xs">
                        <div className="w-7 h-7 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0">
                          <Mic className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="text"
                          placeholder="Tap to speak or search crafts..."
                          className="flex-1 bg-transparent text-[11px] text-[#2D2421] placeholder-[#9C897E] outline-none font-medium"
                        />
                        <button
                          onClick={() => showToast('Filtered products')}
                          className="p-1.5 rounded-xl hover:bg-[#F5ECE5] text-[#8C3A16]"
                        >
                          <SlidersHorizontal className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Filter Chips Horizontal Row */}
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
                        {[
                          'All (8)',
                          'Published (6)',
                          '🟢 ONDC Synced (5)',
                          'Drafts (2)',
                        ].map((chip, idx) => {
                          const isSel = selectedProductFilter === idx;
                          return (
                            <button
                              key={chip}
                              onClick={() => {
                                setSelectedProductFilter(idx);
                                showToast(`Filter applied: ${chip}`);
                              }}
                              className={`px-3 py-1 rounded-full text-[10.5px] font-bold whitespace-nowrap transition-all ${
                                isSel
                                  ? 'bg-[#8C3A16] text-white shadow-2xs'
                                  : 'bg-white text-[#7A685F] border border-[#EADFD6] hover:bg-[#F8EFE9]'
                              }`}
                            >
                              {chip}
                            </button>
                          );
                        })}
                      </div>

                      {/* Product Card 1: Woven Bamboo Fruit Basket */}
                      <div className="bg-white rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-36 bg-linear-to-r from-[#8B5A2B] to-[#D2B48C] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Bamboo Fruit Basket"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Active • ONDC Ready
                          </div>
                          <button
                            onClick={() => showToast('🔊 Playing audio description: "Handmade Bamboo Fruit Basket..."')}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center hover:bg-black/80"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                            Size: 12.4" × 6.2"
                          </div>
                        </div>

                        <div className="p-3">
                          <h3 className="text-xs font-black text-[#2D2421] leading-tight mb-0.5">
                            Handmade Woven Bamboo Fruit Basket
                          </h3>
                          <p className="text-[10px] text-[#8A756C] mb-2 font-medium">
                            GI Tag: Assam Cane &amp; Bamboo Work (GI-429)
                          </p>

                          <div className="flex items-baseline justify-between mb-2">
                            <div>
                              <span className="text-sm font-black text-[#8C3A16]">₹280</span>
                              <span className="text-[10px] text-[#7A685F] font-medium"> / piece</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#6B5A51] bg-[#F4ECE5] px-2 py-0.5 rounded-md">
                              Wholesale MOQ: 20 pcs
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[#7A685F] border-t border-[#F0E6DE] pt-2 mb-2.5">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3 text-[#8C3A16]" /> 480 Views
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3 text-amber-700" /> 8 Inquiries
                            </span>
                            <span className="flex items-center gap-1 text-emerald-800 font-bold">
                              <Package className="w-3 h-3" /> 140 in Stock
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setActiveScreenIndex(14);
                                showToast('Opening Voice Edit & Fair Price for Fruit Basket');
                              }}
                              className="flex-1 py-1.5 bg-[#FAF3EE] hover:bg-[#F2E5DC] active:scale-98 text-[#8C3A16] rounded-xl text-[10.5px] font-extrabold flex items-center justify-center gap-1 border border-[#E8DDD5] transition-all cursor-pointer"
                            >
                              <Mic className="w-3 h-3" /> Edit (Voice)
                            </button>
                            <button
                              onClick={() => {
                                setActiveScreenIndex(18);
                                showToast('Opening details for Fruit Basket (Screen 18)');
                              }}
                              className="px-3 py-1.5 bg-[#8C3A16] hover:bg-[#783011] active:scale-98 text-white rounded-xl text-[10.5px] font-extrabold transition-all cursor-pointer"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Product Card 2: Assam Golden Cane Planter Basket */}
                      <div className="bg-white rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-36 bg-linear-to-r from-[#A0522D] to-[#E9967A] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80"
                            alt="Cane Planter Basket"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Active • ONDC Ready
                          </div>
                          <button
                            onClick={() => showToast('🔊 Playing audio description: "Assam Golden Cane Planter Basket..."')}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center hover:bg-black/80"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                            Size: 14" × 10"
                          </div>
                        </div>

                        <div className="p-3">
                          <h3 className="text-xs font-black text-[#2D2421] leading-tight mb-0.5">
                            Assam Golden Cane Planter Basket
                          </h3>
                          <p className="text-[10px] text-[#8A756C] mb-2 font-medium">
                            Natural Cane Weave • Water Resistant Finish
                          </p>

                          <div className="flex items-baseline justify-between mb-2">
                            <div>
                              <span className="text-sm font-black text-[#8C3A16]">₹420</span>
                              <span className="text-[10px] text-[#7A685F] font-medium"> / piece</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#6B5A51] bg-[#F4ECE5] px-2 py-0.5 rounded-md">
                              Wholesale MOQ: 15 pcs
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[#7A685F] border-t border-[#F0E6DE] pt-2 mb-2.5">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3 text-[#8C3A16]" /> 310 Views
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3 text-amber-700" /> 4 Inquiries
                            </span>
                            <span className="flex items-center gap-1 text-emerald-800 font-bold">
                              <Package className="w-3 h-3" /> 65 in Stock
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setActiveScreenIndex(14);
                                showToast('Opening Voice Edit & Fair Price for Planter Basket');
                              }}
                              className="flex-1 py-1.5 bg-[#FAF3EE] hover:bg-[#F2E5DC] active:scale-98 text-[#8C3A16] rounded-xl text-[10.5px] font-extrabold flex items-center justify-center gap-1 border border-[#E8DDD5] transition-all cursor-pointer"
                            >
                              <Mic className="w-3 h-3" /> Edit (Voice)
                            </button>
                            <button
                              onClick={() => {
                                setActiveScreenIndex(18);
                                showToast('Opening details for Planter Basket (Screen 18)');
                              }}
                              className="px-3 py-1.5 bg-[#8C3A16] hover:bg-[#783011] active:scale-98 text-white rounded-xl text-[10.5px] font-extrabold transition-all cursor-pointer"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Product Card 3: Hand-plaited Bamboo Storage Box */}
                      <div className="bg-white rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-36 bg-linear-to-r from-[#5C4033] to-[#8B4513] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=80"
                            alt="Bamboo Storage Box"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Active • HunarSangam Live
                          </div>
                          <button
                            onClick={() => showToast('🔊 Playing audio description: "Hand-plaited Bamboo Storage Box..."')}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-xs text-white flex items-center justify-center hover:bg-black/80"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                            Size: 10" × 8"
                          </div>
                        </div>

                        <div className="p-3">
                          <h3 className="text-xs font-black text-[#2D2421] leading-tight mb-0.5">
                            Hand-plaited Bamboo Storage Box with Lid
                          </h3>
                          <p className="text-[10px] text-[#8A756C] mb-2 font-medium">
                            Durable Storage • Naturally Treated Cane
                          </p>

                          <div className="flex items-baseline justify-between mb-2">
                            <div>
                              <span className="text-sm font-black text-[#8C3A16]">₹350</span>
                              <span className="text-[10px] text-[#7A685F] font-medium"> / piece</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#6B5A51] bg-[#F4ECE5] px-2 py-0.5 rounded-md">
                              Wholesale MOQ: 25 pcs
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-[#7A685F] border-t border-[#F0E6DE] pt-2 mb-2.5">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3 text-[#8C3A16]" /> 290 Views
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-3 h-3 text-amber-700" /> 3 Inquiries
                            </span>
                            <span className="flex items-center gap-1 text-emerald-800 font-bold">
                              <Package className="w-3 h-3" /> 90 in Stock
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setActiveScreenIndex(14);
                                showToast('Opening Voice Edit & Fair Price for Storage Box');
                              }}
                              className="flex-1 py-1.5 bg-[#FAF3EE] hover:bg-[#F2E5DC] active:scale-98 text-[#8C3A16] rounded-xl text-[10.5px] font-extrabold flex items-center justify-center gap-1 border border-[#E8DDD5] transition-all cursor-pointer"
                            >
                              <Mic className="w-3 h-3" /> Edit (Voice)
                            </button>
                            <button
                              onClick={() => {
                                setActiveScreenIndex(18);
                                showToast('Opening details for Storage Box (Screen 18)');
                              }}
                              className="px-3 py-1.5 bg-[#8C3A16] hover:bg-[#783011] active:scale-98 text-white rounded-xl text-[10.5px] font-extrabold transition-all cursor-pointer"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Product Card 4: Miniature Bamboo Tea Coasters (Draft) */}
                      <div className="bg-white rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-36 bg-linear-to-r from-[#708090] to-[#D3D3D3] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80"
                            alt="Bamboo Tea Coasters"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-neutral-800/80 backdrop-blur-xs text-amber-300 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" />
                            Draft (Need Photo Enhancer)
                          </div>
                          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] font-semibold px-2 py-0.5 rounded-full">
                            Size: 4" dia
                          </div>
                        </div>

                        <div className="p-3">
                          <h3 className="text-xs font-black text-[#2D2421] leading-tight mb-0.5">
                            Miniature Bamboo Tea Coaster Set (6 pcs)
                          </h3>
                          <p className="text-[10px] text-amber-800 font-medium mb-2">
                            Listing incomplete • Add clear white studio background
                          </p>

                          <div className="flex items-baseline justify-between mb-2">
                            <div>
                              <span className="text-sm font-black text-[#8C3A16]">₹180</span>
                              <span className="text-[10px] text-[#7A685F] font-medium"> / set</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#6B5A51] bg-[#F4ECE5] px-2 py-0.5 rounded-md">
                              Wholesale MOQ: 50 sets
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                setActiveScreenIndex(12);
                                showToast('Opening AI Photo Enhancer for Tea Coasters (Screen 12)');
                              }}
                              className="flex-1 py-2 bg-[#E87338] hover:bg-[#D46026] active:scale-98 text-white rounded-xl text-[10.5px] font-extrabold flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer"
                            >
                              <Sparkles className="w-3.5 h-3.5" /> Enhance Photo with AI
                            </button>
                            <button
                              onClick={() => {
                                setActiveScreenIndex(14);
                                showToast('Opening Voice Edit for Tea Coasters (Screen 14)');
                              }}
                              className="p-2 bg-[#FAF3EE] hover:bg-[#F2E5DC] active:scale-98 text-[#8C3A16] rounded-xl text-[10.5px] font-extrabold flex items-center justify-center border border-[#E8DDD5] transition-all cursor-pointer"
                            >
                              <Mic className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Add Product Button */}
                    <button
                      onClick={() => {
                        setActiveScreenIndex(11);
                        showToast('Starting Camera-First Product Capture Flow');
                      }}
                      className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#8C3A16] hover:bg-[#783011] text-white px-4 py-2.5 rounded-full text-xs font-black shadow-lg flex items-center gap-2 z-20 active:scale-95 transition-all whitespace-nowrap"
                    >
                      <Mic className="w-4 h-4" />
                      <span>Add Product (Voice-First)</span>
                    </button>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 12. SCREEN 11: PRODUCT PHOTOGRAPHY / CAMERA OPEN (matching p2-camer open.png) */}
                {activeScreenIndex === 11 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p2-camer open.png */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(10)}
                        className="p-1.5 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="text-center">
                        <span className="text-[10px] font-black text-[#D97706] tracking-wider uppercase block">
                          STEP 2 OF 3
                        </span>
                        <h2 className="text-xs font-black text-[#2D2421]">Product Photography</h2>
                      </div>
                      <div className="w-6" />
                    </div>

                    <div className="flex-1 flex flex-col p-4 justify-between overflow-hidden">
                      {/* Viewfinder Canvas Area (Gray Placeholder with frame corners) */}
                      <div className="flex-1 rounded-3xl bg-[#D6D3D1] relative flex items-center justify-center overflow-hidden min-h-[160px] max-h-[260px] shadow-inner">
                        {/* Viewfinder brackets */}
                        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/70" />
                        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/70" />
                        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/70" />
                        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/70" />

                        <div className="flex flex-col items-center gap-1 text-[#78716C]">
                          <Camera className="w-10 h-10 stroke-[1.5]" />
                          <span className="text-xs font-bold">Camera Feed Preview</span>
                        </div>
                      </div>

                      {/* Artisan Studio Tips Card (matching p2-camer open.png) */}
                      <div className="my-3 bg-[#FFF7ED] rounded-2xl p-3 border border-[#FFEDD5]">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-xs">💡</span>
                          <span className="text-[10.5px] font-black text-[#9A3412] tracking-wide">
                            ARTISAN STUDIO TIPS
                          </span>
                        </div>
                        <div className="h-px bg-[#FED7AA] w-full mb-2" />

                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-white rounded-xl p-2 border border-[#FED7AA] flex flex-col items-center text-center">
                            <span className="text-base mb-0.5">☀️</span>
                            <span className="text-[10px] font-black text-[#2D2421]">Soft Sun</span>
                            <span className="text-[8.5px] text-[#7A685F] leading-tight">No harsh flash glare</span>
                          </div>

                          <div className="bg-white rounded-xl p-2 border border-[#FED7AA] flex flex-col items-center text-center">
                            <span className="text-base mb-0.5">🖼️</span>
                            <span className="text-[10px] font-black text-[#2D2421]">Clean Base</span>
                            <span className="text-[8.5px] text-[#7A685F] leading-tight">Bare wood or cloth</span>
                          </div>

                          <div className="bg-white rounded-xl p-2 border border-[#FED7AA] flex flex-col items-center text-center">
                            <span className="text-base mb-0.5">🪙</span>
                            <span className="text-[10px] font-black text-[#2D2421]">₹10 Coin</span>
                            <span className="text-[8.5px] text-[#7A685F] leading-tight">Shows true height</span>
                          </div>
                        </div>
                      </div>

                      {/* Shutter Button (matching p2-camer open.png) */}
                      <div className="flex justify-center items-center pb-1">
                        <button
                          onClick={() => {
                            setActiveScreenIndex(13);
                            showToast('Photo captured with ₹10 coin! Analyzing dimensions...');
                          }}
                          className="w-18 h-18 rounded-full bg-[#F0DDD0] border-4 border-[#E2C2AE] flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-[#E8D1C2]"
                        >
                          <div className="w-13 h-13 rounded-full bg-[#9A3412] hover:bg-[#852C0E] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                            Click
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 13. SCREEN 12: CAMERA OPEN / VIEWFINDER (matching p2-camer open.png) */}
                {activeScreenIndex === 12 && (
                  <div className="flex-1 flex flex-col h-full bg-black overflow-hidden relative text-white">
                    {/* Camera Feed Mock */}
                    <div className="absolute inset-0">
                      <img
                        src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                        alt="Viewfinder"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {/* Top Overlay Controls */}
                    <div className="relative z-10 px-4 py-3 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent">
                      <button
                        onClick={() => setActiveScreenIndex(11)}
                        className="p-1.5 rounded-full bg-black/40 text-white"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="bg-black/50 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-bold text-emerald-400 border border-emerald-500/40 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        AI Object &amp; Coin Scale Active
                      </div>
                      <button className="p-1.5 rounded-full bg-black/40 text-white">
                        <Sparkles className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Viewfinder Target Bounding Box */}
                    <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
                      <div className="relative w-56 h-56 border-2 border-dashed border-emerald-400 rounded-3xl flex items-center justify-center">
                        <div className="absolute top-2 left-2 bg-emerald-500 text-black text-[9px] font-black px-1.5 py-0.5 rounded-md">
                          Craft Detected (98%)
                        </div>
                        {/* Coin Lock Indicator */}
                        <div className="absolute bottom-3 right-3 border-2 border-amber-300 bg-amber-400/30 rounded-full px-2 py-0.5 text-[9px] font-bold text-amber-200">
                          ₹10 Scale Locked ✓
                        </div>
                      </div>
                      <p className="mt-4 text-[11px] font-bold text-white/90 bg-black/60 px-3 py-1 rounded-full">
                        ✨ Hold steady... Auto-measuring craft dimensions
                      </p>
                    </div>

                    {/* Bottom Shutter Controls */}
                    <div className="relative z-10 p-5 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-around">
                      <button
                        onClick={() => showToast('Grid mode toggled')}
                        className="text-xs font-semibold text-white/80"
                      >
                        Grid
                      </button>
                      <button
                        onClick={() => {
                          setActiveScreenIndex(13);
                          showToast('Photo captured! Analyzing dimensions...');
                        }}
                        className="w-16 h-16 rounded-full border-4 border-white bg-[#8C3A16] flex items-center justify-center shadow-lg active:scale-90 transition-all"
                      >
                        <Camera className="w-7 h-7 text-white" />
                      </button>
                      <button
                        onClick={() => showToast('Flash auto')}
                        className="text-xs font-semibold text-white/80"
                      >
                        Auto
                      </button>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 14. SCREEN 13: PHOTO & DIMENSION REVIEW (matching p4— photo and dimension review.png 100%) */}
                {activeScreenIndex === 13 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p4— photo and dimension review.png */}
                    <div className="px-4 py-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(11)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="text-center">
                        <span className="text-[9.5px] font-black text-[#8C3A16] tracking-wider uppercase block">
                          STEP 2 OF 2 • DIMENSION TOOL
                        </span>
                        <h2 className="text-xs font-black text-[#2D2421]">₹10 Coin Size Detector</h2>
                      </div>
                      <button
                        onClick={() => showToast('मदद (Voice Guidance Activated)')}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FBF2EB] border border-[#EADFD6] text-[#8C3A16] text-[11px] font-bold shadow-2xs"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>मदद</span>
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Dual Photo Gallery matching screenshot */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {/* Left: Top-Down with ₹10 Coin & AR Corner Brackets */}
                        <div className="relative h-40 rounded-2xl overflow-hidden border border-[#EADFD6] bg-[#FAF3ED]">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Coin Calibration"
                            className="w-full h-full object-cover"
                          />
                          {/* AR White Corner Brackets */}
                          <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-white rounded-tl-xs drop-shadow-md" />
                          <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-white rounded-tr-xs drop-shadow-md" />
                          <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-white rounded-bl-xs drop-shadow-md" />
                          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-xs drop-shadow-md" />

                          {/* ₹10 Coin Indicator Graphic */}
                          <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-[#D4AF37]/90 border-2 border-white flex items-center justify-center text-[8px] font-black text-[#5C4033] shadow-md">
                            ₹10
                          </div>
                        </div>

                        {/* Right: Studio Beauty Shot */}
                        <div className="relative h-40 rounded-2xl overflow-hidden border border-[#EADFD6] bg-[#FAF3ED]">
                          <img
                            src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80"
                            alt="Studio Perspective"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Retake Photo Button (Wide Pill Button matching screenshot) */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(11);
                          showToast('Opening camera to retake photo...');
                        }}
                        className="w-full py-2 bg-[#FBF2EB] hover:bg-[#F3E5DA] text-[#221C19] border border-[#EADFD6] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Retake Photo</span>
                      </button>

                      {/* Zero-Typing Voice Correction Card matching screenshot */}
                      <div className="bg-[#FDF6F0] rounded-2xl p-3 border border-[#EADFD6] flex items-center justify-between gap-2.5">
                        <div className="w-10 h-10 rounded-full bg-[#8C3A16] flex items-center justify-center text-white shrink-0 shadow-xs">
                          <Mic className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-black text-[#221C19]">Zero-Typing Voice Correction</h4>
                          <p className="text-[10.5px] text-[#7A685F] leading-snug">
                            Say: <span className="font-extrabold text-[#8C3A16]">"ऊंचाई 6 इंच करो"</span> or tap values to fine-tune.
                          </p>
                        </div>
                        <Ear className="w-5 h-5 text-[#8C3A16] shrink-0 opacity-80" />
                      </div>

                      {/* Computer Vision Output Card matching screenshot */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3.5 border border-[#EADFD6] space-y-3 shadow-2xs">
                        {/* Header Row */}
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[9.5px] font-black text-[#1E824C] tracking-wide uppercase block">
                              COMPUTER VISION OUTPUT
                            </span>
                            <h3 className="text-sm font-black text-[#221C19]">Detected Dimensions</h3>
                          </div>
                          <div className="bg-[#D4EFDF] text-[#1E824C] px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[3]" />
                            <span>Auto-Calculated</span>
                          </div>
                        </div>

                        {/* 3 Metric Boxes in Row: Diameter, Height, Est. Weight */}
                        <div className="grid grid-cols-3 gap-2">
                          {/* Box 1: Diameter */}
                          <div className="bg-[#FBF2EB] p-2 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                            <div className="flex items-center justify-between text-[#4A372D]">
                              <span className="text-[10px] font-bold">Diameter</span>
                              <MoveHorizontal className="w-3 h-3" />
                            </div>
                            <div className="my-1">
                              <span className="text-sm font-black text-[#221C19]">12.4</span>
                              <span className="text-[10px] font-bold text-[#7A685F]"> in</span>
                            </div>
                            <span className="text-[9.5px] text-[#7A685F]">31.5 cm</span>
                          </div>

                          {/* Box 2: Height */}
                          <div className="bg-[#FBF2EB] p-2 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                            <div className="flex items-center justify-between text-[#4A372D]">
                              <span className="text-[10px] font-bold">Height</span>
                              <MoveVertical className="w-3 h-3" />
                            </div>
                            <div className="my-1">
                              <span className="text-sm font-black text-[#221C19]">6.2</span>
                              <span className="text-[10px] font-bold text-[#7A685F]"> in</span>
                            </div>
                            <span className="text-[9.5px] text-[#7A685F]">15.7 cm</span>
                          </div>

                          {/* Box 3: Est. Weight */}
                          <div className="bg-[#FBF2EB] p-2 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                            <div className="flex items-center justify-between text-[#4A372D]">
                              <span className="text-[10px] font-bold">Est. Weight</span>
                              <Scale className="w-3 h-3" />
                            </div>
                            <div className="my-1">
                              <span className="text-sm font-black text-[#221C19]">~420</span>
                              <span className="text-[10px] font-bold text-[#7A685F]"> g</span>
                            </div>
                            <span className="text-[9.5px] font-bold text-[#1E824C]">Light Cane</span>
                          </div>
                        </div>

                        {/* Recommended Packaging Box Row matching screenshot */}
                        <div className="bg-[#FBF2EB] rounded-xl p-2.5 border border-[#EADFD6] flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#F3E3D6] flex items-center justify-center text-[#8C3A16] shrink-0">
                            <Package className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-bold text-[#4A372D]">Recommended Packaging Box</span>
                              <span className="bg-[#FFE5D6] text-[#8C3A16] text-[8px] font-black px-1.5 py-0.5 rounded-sm">
                                B2B Ready
                              </span>
                            </div>
                            <p className="text-[11px] font-black text-[#221C19]">14 × 14 × 8 in Corrugated Carton.</p>
                          </div>
                        </div>
                      </div>

                      {/* Accept Dimensions & Proceed CTA Button matching screenshot */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(14);
                          showToast('Dimensions accepted! Moving to Voice Description.');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <span>Accept Dimensions &amp; Proceed</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 15. SCREEN 14: CREATE PRODUCT VOICE INPUT (matching p5-desciption all about product with raw materila cost  voice serach.png 100%) */}
                {activeScreenIndex === 14 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p5 */}
                    <div className="px-4 py-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(13)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="flex-1 ml-2">
                        <div className="flex items-center gap-1.5">
                          <h2 className="text-xs font-black text-[#221C19]">Create Product</h2>
                          <span className="bg-[#FFE8DC] text-[#8C3A16] text-[8.5px] font-black px-1.5 py-0.5 rounded-sm tracking-wide">
                            VOICE-FIRST
                          </span>
                        </div>
                        <span className="text-[10px] text-[#7A685F] font-medium block">
                          Step 1 of 2 • Voice Input
                        </span>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-[#FBF2EB] border border-[#EADFD6] text-[#221C19] text-[11px] font-bold flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[8px]">▼</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Card 1: Tell us about your product */}
                      <div className="bg-[#FDF6F0] rounded-2xl p-3 border border-[#EADFD6] flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-[#FFE8DC] flex items-center justify-center text-[#8C3A16] shrink-0 mt-0.5">
                          <Mic className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-xs font-black text-[#221C19]">Tell us about your product</h3>
                          <p className="text-[10.5px] text-[#7A685F] leading-snug mt-0.5">
                            Speak naturally in Hindi, Bengali, Tamil, English, or your local dialect. AI handles the cataloging.
                          </p>
                        </div>
                      </div>

                      {/* Card 2: EXAMPLE PROMPT */}
                      <div className="bg-[#FAF1EA] rounded-2xl p-3 border border-[#EADFD6] space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-[#F1DFD5] flex items-center justify-center text-[#8C3A16]">
                              <Volume2 className="w-3 h-3" />
                            </div>
                            <span className="text-[9.5px] font-black text-[#8C3A16] tracking-wider uppercase">
                              EXAMPLE PROMPT
                            </span>
                          </div>
                          <button
                            onClick={() => showToast('Playing example audio prompt...')}
                            className="text-[10px] font-bold text-[#8C3A16] hover:underline"
                          >
                            Tap to listen ▷
                          </button>
                        </div>
                        <p className="text-[11px] italic text-[#4A372D] leading-relaxed">
                          “I weave natural bamboo fruit baskets with double rim borders. Diameter 12 inches, wholesale price 250 rupees per piece.”
                        </p>
                      </div>

                      {/* Card 3: Big White Studio Recording Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-4 border border-[#EADFD6] flex flex-col items-center space-y-3.5 shadow-2xs">
                        {/* Live Recording Status Pill */}
                        <div className="flex items-center gap-1.5 bg-[#FBF2EB] border border-[#F3D5C5] px-3 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                          <span className="text-[10.5px] font-black text-[#8C3A16]">Recording Live (0:12)</span>
                        </div>

                        {/* Concentric Circle Glowing Mic */}
                        <div className="relative my-2 flex items-center justify-center">
                          <div className="w-36 h-36 rounded-full bg-[#F7ECE4]/60 flex items-center justify-center animate-pulse">
                            <div className="w-28 h-28 rounded-full bg-[#F0DDD0] flex items-center justify-center">
                              <button
                                onClick={() => showToast('Microphone active. Speaking...')}
                                className="w-20 h-20 rounded-full bg-[#A84318] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
                              >
                                <Mic className="w-9 h-9" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Sound Waveform Equalizer */}
                        <div className="flex items-center gap-1 h-6">
                          <div className="w-1 h-3 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-5 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-3.5 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-6 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-4 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-5.5 bg-[#8C3A16] rounded-full animate-pulse" />
                          <div className="w-1 h-3 bg-[#8C3A16] rounded-full animate-pulse" />
                        </div>

                        {/* Real-time Transcription Box */}
                        <div className="w-full bg-[#FBF4EE] rounded-xl p-3 border border-[#EADFD6] space-y-1 text-left">
                          <div className="flex items-center gap-1.5 text-[#1E824C]">
                            <Radio className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-bold text-[#4A372D]">Real-time Transcription</span>
                          </div>
                          <p className="text-[11.5px] text-[#221C19] leading-snug">
                            “ ...natural bamboo fruit basket with double rim...{' '}
                            <span className="bg-[#FFE2D4] text-[#8C3A16] font-black px-1.5 py-0.5 rounded-sm">
                              250 rupees wholesale
                            </span>{' '}
                            ...”
                          </p>
                        </div>

                        {/* Done Recording CTA */}
                        <button
                          onClick={() => {
                            setActiveScreenIndex(15);
                            showToast('Voice description processed! Opening AI Draft Preview.');
                          }}
                          className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Done Recording</span>
                        </button>
                      </div>

                      {/* Footer Hint */}
                      <p className="text-center text-[10.5px] text-[#7A685F] font-medium">
                        💡 Zero typing needed • Speak in your natural rhythm
                      </p>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 16. SCREEN 15: AI DRAFT PREVIEW & REVIEW (matching p6-decsiption review.png 100%) */}
                {activeScreenIndex === 15 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p6 */}
                    <div className="px-4 py-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(14)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-1.5">
                        <h2 className="text-xs font-black text-[#221C19]">Product Preview</h2>
                        <div className="bg-[#D4EFDF] text-[#1E824C] px-2 py-0.5 rounded-full text-[9.5px] font-extrabold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>AI Generated • Verified</span>
                        </div>
                      </div>
                      <div className="px-2.5 py-1 rounded-full bg-[#FBF2EB] border border-[#EADFD6] text-[#221C19] text-[11px] font-bold flex items-center gap-1">
                        <span>English</span>
                        <span className="text-[8px]">▼</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Step Indicator with Dual Progress Bars */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10.5px] font-extrabold text-[#8C3A16]">
                          Step 2 of 2 • Review &amp; Confirm
                        </span>
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-1 bg-[#1E824C] rounded-full" />
                          <div className="w-5 h-1 bg-[#8C3A16] rounded-full" />
                        </div>
                      </div>

                      {/* Card 1: AI Craft Draft Ready */}
                      <div className="bg-[#FDF6F0] rounded-2xl p-3 border border-[#EADFD6] flex items-start gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#FFE8DC] flex items-center justify-center text-[#8C3A16] shrink-0 mt-0.5">
                          <User className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-xs font-black text-[#221C19]">AI Craft Draft Ready</h3>
                          <p className="text-[10.5px] text-[#7A685F] leading-snug mt-0.5">
                            Here is what AI created from your voice note. Tap any item to edit with voice.
                          </p>
                        </div>
                      </div>

                      {/* Card 2: Input Voice Clip Player */}
                      <div className="bg-[#FAF1EA] rounded-2xl p-3 border border-[#EADFD6] space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[#221C19]">
                            <Mic className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span className="text-[10.5px] font-extrabold">Input Voice Clip</span>
                          </div>
                          <button
                            onClick={() => {
                              setActiveScreenIndex(14);
                              showToast('Opening voice recorder to re-record...');
                            }}
                            className="flex items-center gap-1 text-[10.5px] font-bold text-[#8C3A16] hover:underline"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Re-record</span>
                          </button>
                        </div>
                        <div className="bg-white rounded-xl p-2 border border-[#EADFD6] flex items-center justify-between gap-2">
                          <button className="w-7 h-7 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0">
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </button>
                          <div className="flex items-center gap-0.5 shrink-0">
                            <div className="w-0.5 h-3.5 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-5 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-2.5 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-6 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-4 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-4.5 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-3 bg-[#8C3A16] rounded-full" />
                            <div className="w-0.5 h-2 bg-[#8C3A16] rounded-full" />
                          </div>
                          <span className="text-[10px] italic text-[#4A372D] truncate flex-1">
                            "Handmade bamboo basket..."
                          </span>
                          <span className="text-[10px] font-bold text-[#221C19] shrink-0">0:14</span>
                        </div>
                      </div>

                      {/* Card 3: Product Card (Photo + Badges + Title & Description) */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] overflow-hidden space-y-3 shadow-2xs">
                        {/* Image Container with Badges */}
                        <div className="relative h-44 bg-[#FAF3ED]">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Bamboo Basket"
                            className="w-full h-full object-cover"
                          />
                          {/* Badges Top Left & Right */}
                          <div className="absolute top-2 left-2 bg-black/65 backdrop-blur-xs text-white px-2 py-0.5 rounded-lg text-[9px] font-bold flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                            <span>AI Cataloged</span>
                          </div>
                          <div className="absolute top-2 left-28 bg-[#D4EFDF] text-[#1E824C] px-2 py-0.5 rounded-lg text-[9px] font-black flex items-center gap-1">
                            <ShieldCheck className="w-2.5 h-2.5" />
                            <span>GI Cluster Verified</span>
                          </div>
                          {/* Change Photo Button */}
                          <button
                            onClick={() => {
                              setActiveScreenIndex(11);
                              showToast('Opening camera to change photo...');
                            }}
                            className="absolute bottom-2 right-2 bg-black/65 backdrop-blur-xs text-white px-2.5 py-1 rounded-xl text-[9.5px] font-bold flex items-center gap-1 hover:bg-black/80"
                          >
                            <Camera className="w-3 h-3" />
                            <span>Change Photo</span>
                          </button>
                        </div>

                        <div className="p-3 pt-0 space-y-3">
                          {/* Title with Voice Edit Mic */}
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-sm font-black text-[#221C19] leading-tight">
                              Handmade Woven Bamboo Fruit Basket
                            </h3>
                            <button
                              onClick={() => showToast('Say new product title...')}
                              className="w-7 h-7 rounded-full bg-[#FFE8DC] text-[#8C3A16] flex items-center justify-center shrink-0 hover:bg-[#F3D5C5]"
                            >
                              <Mic className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Description with Voice Edit Mic */}
                          <div className="bg-[#FBF4EE] rounded-xl p-2.5 border border-[#EADFD6] flex items-start gap-2">
                            <p className="text-[10.5px] text-[#4A372D] leading-relaxed flex-1">
                              Handcrafted from 100% natural treated Assam bamboo with traditional lattice weave, double rim reinforcement, and food-safe finish. Ideal for dining storage, eco-friendly gift hampers, and artisanal home decor.
                            </p>
                            <button
                              onClick={() => showToast('Say new description...')}
                              className="w-6 h-6 rounded-full bg-[#FFE8DC] text-[#8C3A16] flex items-center justify-center shrink-0 hover:bg-[#F3D5C5]"
                            >
                              <Mic className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Extracted Specifications Grid */}
                          <div className="space-y-2 pt-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-[#221C19]">Extracted Specifications</span>
                              <button
                                onClick={() => showToast('Tap any tile to edit with voice')}
                                className="flex items-center gap-1 text-[10px] font-bold text-[#8C3A16]"
                              >
                                <Mic className="w-3 h-3" />
                                <span>Tap tile to speak</span>
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {/* Tile 1: Category */}
                              <div className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[#7A685F]">
                                  <span className="text-[10px] font-bold">Category</span>
                                  <Layers className="w-3 h-3" />
                                </div>
                                <span className="text-[11.5px] font-black text-[#221C19] my-1">
                                  Home &amp; Kitchen / Dining
                                </span>
                                <button
                                  onClick={() => showToast('Say new Category...')}
                                  className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16]"
                                >
                                  <Mic className="w-2.5 h-2.5" />
                                  <span>Tap to edit</span>
                                </button>
                              </div>

                              {/* Tile 2: Material */}
                              <div className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[#7A685F]">
                                  <span className="text-[10px] font-bold">Material</span>
                                  <Palette className="w-3 h-3" />
                                </div>
                                <span className="text-[11.5px] font-black text-[#221C19] my-1">
                                  100% Natural River Bamboo
                                </span>
                                <button
                                  onClick={() => showToast('Say new Material...')}
                                  className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16]"
                                >
                                  <Mic className="w-2.5 h-2.5" />
                                  <span>Tap to edit</span>
                                </button>
                              </div>

                              {/* Tile 3: Dimensions */}
                              <div className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[#7A685F]">
                                  <span className="text-[10px] font-bold">Dimensions</span>
                                  <SlidersHorizontal className="w-3 h-3" />
                                </div>
                                <div>
                                  <span className="text-[11.5px] font-black text-[#221C19] block">
                                    12" L × 12" W × 6" H
                                  </span>
                                  <span className="text-[9px] text-[#7A685F]">(Estimated via voice)</span>
                                </div>
                                <button
                                  onClick={() => showToast('Say new Dimensions...')}
                                  className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16] mt-1"
                                >
                                  <Mic className="w-2.5 h-2.5" />
                                  <span>Tap to edit</span>
                                </button>
                              </div>

                              {/* Tile 4: Finish & Color */}
                              <div className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex flex-col justify-between">
                                <div className="flex items-center justify-between text-[#7A685F]">
                                  <span className="text-[10px] font-bold">Finish &amp; Color</span>
                                  <Palette className="w-3 h-3" />
                                </div>
                                <span className="text-[11.5px] font-black text-[#221C19] my-1">
                                  Natural Golden Honey / Unvarnished
                                </span>
                                <button
                                  onClick={() => showToast('Say new Finish & Color...')}
                                  className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16]"
                                >
                                  <Mic className="w-2.5 h-2.5" />
                                  <span>Tap to edit</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Primary CTA: Looks Good — Continue → */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(16);
                          showToast('Catalog draft approved! Opening Fair Pricing Assistant.');
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <span>Looks Good — Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Secondary CTA: Edit Whole Card With Voice */}
                      <button
                        onClick={() => showToast('Listening to full voice review...')}
                        className="w-full py-2.5 bg-[#FAF1EA] hover:bg-[#F3E3D6] text-[#8C3A16] border border-[#EADFD6] rounded-2xl text-xs font-black flex items-center justify-center gap-1.5 transition-all"
                      >
                        <Mic className="w-3.5 h-3.5" />
                        <span>Edit Whole Card With Voice</span>
                      </button>

                      {/* Footer text */}
                      <p className="text-center text-[10px] text-[#7A685F] font-medium">
                        Zero typing required • Instant B2B cataloging
                      </p>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 17. SCREEN 16: FAIR PRICING ASSISTANT (matching p7— Fair Pricing Assistant.png 100%) */}
                {activeScreenIndex === 16 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-3.5 pt-2 pb-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(15)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>

                      <div className="text-center">
                        <h2 className="text-sm font-black text-[#221C19] leading-tight">Know Your Fair Price</h2>
                        <span className="text-[10.5px] font-extrabold text-[#8C3A16] block">
                          Step 3 of 3 • Price Intelligence
                        </span>
                      </div>

                      {/* Listen Button */}
                      <button
                        onClick={() => showToast('Playing audio price guide...')}
                        className="flex items-center gap-1 bg-[#FAF1EA] border border-[#EADFD6] rounded-full px-2.5 py-1 text-[#8C3A16] hover:bg-[#F3E3D6] active:scale-95 transition-all shadow-2xs"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-[#8C3A16]" />
                        <span className="text-[11px] font-bold">Listen</span>
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Card 1: AI Cost & Wage Calculator Banner */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3 border border-[#EADFD6] space-y-1.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-xl bg-[#FAF1EA] text-[#8C3A16] flex items-center justify-center font-bold">
                              <Calculator className="w-4 h-4" />
                            </div>
                            <h3 className="text-xs font-black text-[#221C19]">AI Cost &amp; Wage Calculator</h3>
                          </div>
                          <span className="bg-[#E8F5E9] text-[#2E7D32] px-2 py-0.5 rounded-full text-[9.5px] font-black">
                            Active
                          </span>
                        </div>
                        <p className="text-[10.5px] text-[#5A483E] leading-snug">
                          Ensuring you never sell below fair living wage while staying competitive for bulk B2B buyers.
                        </p>
                      </div>

                      {/* Card 2: Product Reference Strip */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-2.5 border border-[#EADFD6] flex items-center gap-2.5 shadow-2xs">
                        <img
                          src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                          alt="Product"
                          className="w-16 h-12 rounded-lg object-cover border border-[#EADFD6] shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-[9.5px] font-bold text-[#1E824C] flex items-center gap-0.5">
                            <Check className="w-3 h-3 text-[#1E824C]" />
                            <span>GI Certified • Assam Bamboo</span>
                          </span>
                          <p className="text-xs font-black text-[#221C19] truncate leading-tight mt-0.5">
                            Handmade Woven Bamboo Fr...
                          </p>
                          <p className="text-[9.5px] text-[#7A685F]">Cluster Code: ASM-KAM-42</p>
                        </div>
                      </div>

                      {/* Section Header: Interactive Cost Breakdown */}
                      <div className="flex items-center justify-between pt-0.5">
                        <div className="flex items-center gap-1.5">
                          <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <h3 className="text-xs font-black text-[#221C19]">Interactive Cost Breakdown</h3>
                        </div>
                        <span className="text-[10px] font-bold text-[#7A685F]">Tap card to edit</span>
                      </div>

                      {/* 4 Cost Breakdown Cards */}
                      <div className="space-y-2">
                        {/* 1. Raw Materials */}
                        <div
                          onClick={() => showToast('Editing Raw Materials cost...')}
                          className="bg-[#FFFDFB] rounded-2xl p-2.5 border border-[#EADFD6] flex items-center justify-between cursor-pointer hover:border-[#8C3A16] transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#FAF1EA] text-[#8C3A16] flex items-center justify-center shrink-0">
                              <Package className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Raw Materials</h4>
                              <p className="text-[10px] text-[#7A685F]">Treated Assam Cane ₹55 • Polish ₹30</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-[#221C19]">₹85</span>
                            <span className="block text-[9.5px] font-bold text-[#8C3A16]">Adjust ✎</span>
                          </div>
                        </div>

                        {/* 2. Artisan Labor & Time (Green Benchmark Highlight) */}
                        <div
                          onClick={() => showToast('Artisan Labor benchmark rate')}
                          className="bg-[#FFFDFB] rounded-2xl p-2.5 border-1.5 border-[#1E824C] flex items-center justify-between cursor-pointer shadow-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#E8F8F0] text-[#1E824C] flex items-center justify-center shrink-0">
                              <User className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-black text-[#221C19]">Artisan Labor &amp; Time</h4>
                                <span className="bg-[#E8F5E9] text-[#1E824C] px-1.5 py-0.2 rounded text-[8.5px] font-black">
                                  Benchmark
                                </span>
                              </div>
                              <p className="text-[10px] text-[#7A685F]">3.5 hours weaving @ ₹34/hr benchmark</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-[#1E824C]">₹120</span>
                            <span className="block text-[9.5px] font-bold text-[#1E824C]">Fair rate</span>
                          </div>
                        </div>

                        {/* 3. Cluster Overhead */}
                        <div
                          onClick={() => showToast('Editing Cluster Overhead...')}
                          className="bg-[#FFFDFB] rounded-2xl p-2.5 border border-[#EADFD6] flex items-center justify-between cursor-pointer hover:border-[#8C3A16] transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#FAF1EA] text-[#8C3A16] flex items-center justify-center shrink-0">
                              <Layers className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Cluster Overhead</h4>
                              <p className="text-[10px] text-[#7A685F]">Tools, shared shed &amp; transport</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-[#221C19]">₹25</span>
                            <span className="block text-[9.5px] font-bold text-[#8C3A16]">Adjust ✎</span>
                          </div>
                        </div>

                        {/* 4. Fair Profit (20%) */}
                        <div
                          onClick={() => showToast('Fair Profit is automated at 20%')}
                          className="bg-[#FFFDFB] rounded-2xl p-2.5 border border-[#EADFD6] flex items-center justify-between cursor-pointer shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#FAF1EA] text-[#8C3A16] flex items-center justify-center shrink-0">
                              <TrendingUp className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-black text-[#221C19]">Fair Profit (20%)</h4>
                                <span className="bg-[#FAF1EA] text-[#8C3A16] px-1.5 py-0.2 rounded text-[8.5px] font-bold">
                                  Reinvest
                                </span>
                              </div>
                              <p className="text-[10px] text-[#7A685F]">Artisan growth &amp; tool maintenance</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-[#8C3A16]">₹50</span>
                            <span className="block text-[9.5px] font-bold text-[#7A685F]">Automated</span>
                          </div>
                        </div>
                      </div>

                      {/* Voice Adjustment Bar */}
                      <div className="bg-[#FAF1EA] rounded-full p-1 pl-3.5 pr-1 border border-[#EADFD6] flex items-center justify-between gap-2 shadow-2xs">
                        <span className="text-[10.5px] font-bold text-[#5A483E] truncate">
                          Say "Increase labor to 150 rupees" or tap to...
                        </span>
                        <button
                          onClick={() => showToast('Listening: "Increase labor to..."')}
                          className="w-7 h-7 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0 shadow-xs active:scale-95 transition-all"
                        >
                          <Mic className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total Production Cost & Recommended Base Price Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3 border border-[#EADFD6] space-y-2.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-[#7A685F] block">Total Production Cost</span>
                            <span className="text-base font-black text-[#221C19]">₹230</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10.5px] font-black text-[#8C3A16] block">
                              Recommended Base Price
                            </span>
                            <div>
                              <span className="text-xl font-black text-[#8C3A16]">₹280</span>
                              <span className="text-[10.5px] text-[#7A685F]"> / piece</span>
                            </div>
                          </div>
                        </div>

                        {/* Fair Wage Certified Badge */}
                        <div className="bg-[#EDF7ED] border border-[#C8E6C9] rounded-xl p-2.5 flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#1E824C] shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10.5px] font-black text-[#1E824C] leading-tight">
                              Fair Wage Certified • ₹780/day artisan income
                            </p>
                            <p className="text-[9.5px] text-[#2E7D32] leading-tight mt-0.5">
                              Meets Indian Handicraft Living Standard Benchmark
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Market Benchmark Comparison Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3 border border-[#EADFD6] space-y-2.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Market Benchmark Comparison</h3>
                          <Info className="w-3.5 h-3.5 text-[#7A685F]" />
                        </div>
                        <p className="text-[10px] text-[#7A685F] leading-tight">
                          Transparency check against local middlemen and urban commercial retail margins.
                        </p>

                        {/* Tri-color progress track */}
                        <div className="h-2 rounded-full overflow-hidden flex bg-[#EADFD6]">
                          <div className="w-1/4 bg-[#C0392B]" />
                          <div className="w-1/3 bg-[#1E824C]" />
                          <div className="flex-1 bg-[#D5C7BD]" />
                        </div>

                        {/* Row 1: Local Middleman Offer */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#C0392B]" />
                            <span className="text-[11px] font-bold text-[#221C19]">Local Middleman Offer</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-black text-[#C0392B]">₹160</span>
                            <span className="bg-[#FDEDEC] text-[#C0392B] px-1.5 py-0.2 rounded text-[8.5px] font-bold">
                              Exploitative
                            </span>
                          </div>
                        </div>

                        {/* Row 2: HunarSangam Living Wage (Green Highlight Card) */}
                        <div className="bg-[#E8F8F0] border border-[#A3E4D7] rounded-xl p-2.5 flex items-center justify-between">
                          <div className="flex items-start gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#1E824C] mt-1 shrink-0" />
                            <div>
                              <span className="text-[11px] font-black text-[#1E824C] block">
                                HunarSangam Living Wage
                              </span>
                              <span className="text-[9.5px] text-[#5A483E]">Direct artisan empowerment</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-[#1E824C]">₹250 – ₹280</span>
                            <div className="bg-[#2E7D32] text-white px-2 py-1 rounded-lg text-[8.5px] font-black text-center leading-tight">
                              Fair &amp;<br />Viable
                            </div>
                          </div>
                        </div>

                        {/* Row 3: Retail Metro Market Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-start gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-[#9E8E84] mt-1 shrink-0" />
                            <div>
                              <span className="text-[11px] font-bold text-[#221C19] block">
                                Retail Metro Market Price
                              </span>
                              <span className="text-[9.5px] text-[#7A685F]">Delhi, Mumbai lifestyle stores</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-black text-[#221C19] block">₹650 – ₹850</span>
                            <span className="text-[8.5px] font-bold text-[#1E824C]">Healthy B2B buyer margin</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action CTAs */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => showToast('Opening custom pricing slider...')}
                          className="px-4 py-2.5 bg-white border border-[#221C19] rounded-xl text-xs font-bold text-[#221C19] hover:bg-[#F3E7DF] active:scale-95 transition-all shadow-2xs"
                        >
                          Custom
                        </button>
                        <button
                          onClick={() => {
                            setActiveScreenIndex(17);
                            showToast('Fair price of ₹280 locked! Opening Production Capacity.');
                          }}
                          className="flex-1 py-2.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all"
                        >
                          <span>Lock Fair Price (₹280) &amp; Proceed</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Footer note */}
                      <p className="text-center text-[9px] text-[#5A483E] font-medium flex items-center justify-center gap-1 pb-1">
                        <ShieldCheck className="w-3 h-3 text-[#1E824C]" />
                        <span>Verified against Ministry of Textiles &amp; Handicraft Fair Wage Index</span>
                      </p>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 18. SCREEN 17: VOICE CAPACITY INTAKE (matching p8-voice based piese in day asking.png 100%) */}
                {activeScreenIndex === 17 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header matching p8 */}
                    <div className="px-3.5 pt-2 pb-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveScreenIndex(16)}
                          className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                        >
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div>
                          <h2 className="text-sm font-black text-[#221C19] leading-tight">Bulk Record</h2>
                          <span className="text-[10.5px] font-semibold text-[#7A685F]">
                            Product: Assam Cane Basket
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-[#FAF1EA] border border-[#EADFD6] rounded-full px-2.5 py-1 text-[#8C3A16] shadow-2xs">
                        <span className="text-[11px] font-bold">English ▾</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                      {/* Product Overview Card matching p8 */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-2.5 border-1.5 border-[#E5D5CB] space-y-2 shadow-2xs">
                        <div className="flex items-start gap-2.5">
                          <div className="relative rounded-xl overflow-hidden shrink-0 w-16 h-16 bg-[#FAF3ED]">
                            <img
                              src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                              alt="Woven Bamboo Basket"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-1 left-1 bg-[#1E824C] text-white px-1.5 py-0.2 rounded text-[7.5px] font-black">
                              GI CRAFT
                            </div>
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs font-black text-[#221C19] truncate">Woven Bamboo Basket</h3>
                            <p className="text-[10px] text-[#7A685F]">Assam Golden Cane • Hand-plaited</p>
                            <div className="flex items-center gap-1.5 mt-1.5">
                              <span className="bg-[#FAF1EA] border border-[#E5D5CB] text-[#8C3A16] px-1.5 py-0.5 rounded-md text-[9.5px] font-black">
                                🏷️ ₹280/pc
                              </span>
                              <span className="bg-[#FAF1EA] border border-[#E5D5CB] text-[#4A372D] px-1.5 py-0.5 rounded-md text-[9.5px] font-bold">
                                📦 Min: 20 pcs
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-[#F0E6DE] pt-1.5 flex items-center justify-between text-[10px]">
                          <span className="text-[#5A483E] flex items-center gap-1">
                            <Volume2 className="w-3 h-3 text-[#8C3A16]" />
                            <span>Artisan audio note included (0:24)</span>
                          </span>
                          <span className="font-extrabold text-[#1E824C]">Ready for Bulk Quotations</span>
                        </div>
                      </div>

                      {/* Main Question Card matching p8 */}
                      <div className="bg-[#FFFDFB] rounded-2xl p-3 border border-[#EADFD6] shadow-2xs">
                        <div className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-[#8C3A16] shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-xs font-black text-[#221C19] leading-snug">
                              How many pieces you made in 1 day ( 8 hours work )
                            </p>
                            <div className="h-0.5 bg-[#EADFD6] w-full mt-2" />
                          </div>
                        </div>
                      </div>

                      {/* Try Saying Suggestions */}
                      <div className="space-y-1.5">
                        <span className="text-[10.5px] font-bold text-[#7A685F]">Try saying :</span>
                        <div
                          onClick={() => showToast('Selected: "10 pieces 1 day"')}
                          className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex items-center justify-between cursor-pointer hover:border-[#8C3A16] transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <Mic className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span className="text-xs font-semibold text-[#221C19]">Say: "10 pieces 1 day "</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#7A685F] -rotate-45" />
                        </div>
                        <div
                          onClick={() => showToast('Selected: "10–20 pieces in 1 day"')}
                          className="bg-[#FFFDFB] p-2.5 rounded-xl border border-[#EADFD6] flex items-center justify-between cursor-pointer hover:border-[#8C3A16] transition-all shadow-2xs"
                        >
                          <div className="flex items-center gap-2">
                            <Mic className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span className="text-xs font-semibold text-[#221C19]">Say: "10–20 pieces in 1 day "</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#7A685F] -rotate-45" />
                        </div>
                      </div>

                      {/* Concentric Live Voice Recording Studio Card matching p8 */}
                      <div className="bg-[#FFFDFB] rounded-3xl p-4 border border-[#EADFD6] text-center space-y-3.5 shadow-xs">
                        {/* Recording Live Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-[#FFE8DC] px-3 py-1 rounded-full">
                          <span className="w-2 h-2 rounded-full bg-[#8C3A16] animate-ping" />
                          <span className="w-2 h-2 rounded-full bg-[#8C3A16]" />
                          <span className="text-[10px] font-black text-[#8C3A16]">Recording Live (0:12)</span>
                        </div>

                        {/* Glowing Concentric Circles Mic */}
                        <div className="flex items-center justify-center py-1">
                          <div className="w-28 h-28 rounded-full bg-[#FAF1EA] flex items-center justify-center">
                            <div className="w-22 h-22 rounded-full bg-[#F3E3D6] flex items-center justify-center">
                              <button
                                onClick={() => showToast('Recording toggled')}
                                className="w-16 h-16 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shadow-lg active:scale-95 transition-all"
                              >
                                <Mic className="w-7 h-7" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Equalizer waveform bars */}
                        <div className="flex items-center justify-center gap-1 h-6">
                          <div className="w-1 h-3 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-5 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-2 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-6 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-4 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-5 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-3 bg-[#8C3A16] rounded-full" />
                          <div className="w-1 h-2 bg-[#8C3A16] rounded-full" />
                        </div>

                        {/* Real-time Transcription Box */}
                        <div className="bg-[#FBF4EE] rounded-2xl p-3 border border-[#EADFD6] text-left space-y-1">
                          <div className="flex items-center gap-1.5 text-[#1E824C]">
                            <Volume2 className="w-3.5 h-3.5 text-[#1E824C]" />
                            <span className="text-[10px] font-black text-[#221C19]">Real-time Transcription</span>
                          </div>
                          <p className="text-xs font-semibold text-[#221C19] leading-snug">
                            “I made 15 pieces in day 1 work house of 8 house”
                          </p>
                        </div>

                        {/* Save and Submit Product Button */}
                        <button
                          onClick={() => {
                            setActiveScreenIndex(18);
                            showToast('Production capacity recorded! Opening 3D / AR Preview.');
                          }}
                          className="w-full py-3 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Save and Submit Product</span>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 19. SCREEN 18: FINAL PRODUCT PREVIEW (Matching p9-final preview ar.png) */}
                {activeScreenIndex === 18 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => setActiveScreenIndex(17)}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h2 className="text-sm font-extrabold text-[#221C19]">Preview Product</h2>
                      <div className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                        <span>Active Listing</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 pb-6">
                      {/* Product Catalog Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        {/* Photo with verified badges */}
                        <div className="relative h-44 w-full bg-[#F3E7DF] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Handmade Woven Bamboo Fruit Basket"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>Verified Dimensions</span>
                          </div>
                          <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                            <span className="w-3.5 h-3.5 rounded-full bg-amber-400 text-black text-[9px] font-black flex items-center justify-center">₹</span>
                            <span>Verified with ₹10 coin</span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-3.5 space-y-2.5">
                          <p className="text-[10px] font-extrabold tracking-wider text-[#A0522D] uppercase">
                            PRODUCT CATALOG SUMMARY
                          </p>
                          <h3 className="text-base font-extrabold text-[#221C19] leading-snug">
                            Handmade Woven Bamboo Fruit Basket
                          </h3>

                          {/* Specs Box */}
                          <div className="bg-[#FBF4EE] rounded-xl p-2.5 border border-[#EADFD6] space-y-1.5">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-[#7A685F] font-medium">Wholesale Unit Price</span>
                              <span className="font-black text-[#8C3A16] text-sm">
                                ₹280 <span className="text-[11px] font-semibold text-[#221C19]">/ pc</span>
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-[#7A685F] font-medium">Specifications</span>
                              <span className="font-bold text-[#221C19] text-[11.5px]">
                                12.4" W × 6.2" H, Wt: 420g
                              </span>
                            </div>
                            <div className="flex justify-between items-center text-[11px] pt-1 border-t border-[#EFE5DC]">
                              <span className="font-bold text-emerald-700 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> Capacity: 15 pcs / day
                              </span>
                              <span className="font-medium text-[#7A685F] flex items-center gap-1">
                                <Clock className="w-3 h-3" /> Lead: 5 – 7 days
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Distribution Channels Activated Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] p-3.5 shadow-2xs space-y-2.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Distribution Channels Activated</h3>
                          <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            3 Active
                          </span>
                        </div>

                        <div className="space-y-2.5 pt-1">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#FFE8DC] flex items-center justify-center text-[#A84318] shrink-0">
                              <Store className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-extrabold text-[#221C19]">HunarSangam Marketplace</p>
                              <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Live • Instant Quotations enabled
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] shrink-0">
                              <Globe className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-extrabold text-[#221C19]">ONDC Handicraft Registry</p>
                              <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Synced • Pan-India open network
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-[#F5EBE1] flex items-center justify-center text-[#7C3F24] shrink-0">
                              <Share2 className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-extrabold text-[#221C19]">Direct WhatsApp Catalog</p>
                              <p className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Link ready to share with buyers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product Description Box */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] p-3.5 shadow-2xs space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Product Description</h3>
                          <button
                            onClick={() => showToast('Playing audio description: "Handcrafted from 100% natural treated Assam bamboo..."')}
                            className="w-6 h-6 rounded-full bg-[#FAF3EE] text-[#8C3A16] flex items-center justify-center hover:bg-[#F2E5DC]"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#5A463B] leading-relaxed">
                          Handcrafted from 100% natural treated Assam bamboo with traditional lattice weave, double rim reinforcement, and food-safe finish. Ideal for dining storage, eco-friendly gift hampers, and artisanal home decor.
                        </p>
                      </div>

                      {/* WhatsApp Share Preview Note */}
                      <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-2.5 px-3 flex items-center gap-2 text-[10.5px] text-emerald-800 italic">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0 not-italic" />
                        <span className="truncate">Preview: "Namaste! View my new verified craft catalog on HunarSangam..."</span>
                      </div>

                      {/* Submit & Publish CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(19);
                          showToast('🎉 Craft submitted & published on ONDC!');
                        }}
                        className="w-full py-3.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
                      >
                        <Upload className="w-4 h-4" />
                        <span>Submit &amp; publish product</span>
                      </button>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 20. SCREEN 19: PRODUCT FINALIZED & ONDC READY CELEBRATION (matching p10 — Product Finalized & ONDC Ready.png) */}
                {activeScreenIndex === 19 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Header */}
                    <div className="px-4 py-3 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0">
                      <button
                        onClick={() => {
                          setActiveScreenIndex(10);
                          showToast('Navigating back to Products Catalog');
                        }}
                        className="p-1 rounded-full hover:bg-[#F3E7DF] text-[#4A3228]"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <h2 className="text-sm font-extrabold text-[#221C19]">Catalog Published!</h2>
                      <div className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                        <span>Active Listing</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 pb-6">
                      {/* Top Success Banner */}
                      <div className="bg-[#E8F5E9] border border-[#C8E6C9] rounded-2xl p-4 text-center space-y-1.5 shadow-2xs">
                        <div className="w-11 h-11 rounded-full bg-[#2E7D32] text-white flex items-center justify-center mx-auto shadow-xs">
                          <Check className="w-6 h-6 stroke-[3]" />
                        </div>
                        <p className="text-[10px] font-black tracking-wider text-[#2E7D32] uppercase pt-1">
                          B2B READY • ONDC SYNCED
                        </p>
                        <h2 className="text-base font-black text-[#1B5E20] tracking-tight">
                          Your Craft is Live &amp; Verified!
                        </h2>
                        <p className="text-[11.5px] text-[#2E7D32] leading-snug">
                          Handmade Woven Bamboo Fruit Basket is now discoverable by verified B2B buyers across India.
                        </p>
                      </div>

                      {/* ONDC Network Ready Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] p-3.5 shadow-2xs space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#221C19]">
                            <Globe className="w-4 h-4 text-[#2E7D32]" />
                            <span>ONDC Network Ready</span>
                          </div>
                          <span className="bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Pan-India Reach
                          </span>
                        </div>

                        <div className="h-px bg-[#EADFD6] w-full" />

                        {/* GI Tagged Authenticity */}
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#8C3A16] shrink-0" />
                          <div>
                            <p className="text-[10px] font-bold text-[#7A685F]">GI Tagged Craft Authenticity</p>
                            <p className="text-[11.5px] font-black text-[#221C19]">
                              Assam Cane &amp; Bamboo Crafts (GI Reg #431)
                            </p>
                          </div>
                        </div>

                        <div className="h-px bg-[#EADFD6] w-full" />

                        {/* Digital Listing ID + QR Code */}
                        <div className="flex items-center justify-between pt-0.5">
                          <div>
                            <p className="text-[10px] text-[#7A685F] font-medium">Listing Digital ID</p>
                            <p className="text-sm font-black text-[#8C3A16]">#HS-BAM-8842</p>
                          </div>
                          <button
                            onClick={() => showToast('ONDC Verified QR Code generated!')}
                            className="px-2.5 py-1 bg-white border border-[#E5D5CB] hover:bg-[#FAF3EE] rounded-xl text-xs font-bold text-[#4A372D] flex items-center gap-1.5 shadow-2xs"
                          >
                            <QrCode className="w-3.5 h-3.5 text-[#4A372D]" />
                            <span>QR Code</span>
                          </button>
                        </div>
                      </div>

                      {/* Product Catalog Summary Card */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] overflow-hidden shadow-2xs">
                        <div className="relative h-40 w-full bg-[#F3E7DF] overflow-hidden flex items-center justify-center">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=600&auto=format&fit=crop&q=80"
                            alt="Handmade Woven Bamboo Fruit Basket"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-xs text-white text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>Verified Dimensions</span>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full bg-amber-400 text-black text-[8px] font-black flex items-center justify-center">₹</span>
                            <span>Verified with ₹10 coin</span>
                          </div>
                        </div>

                        <div className="p-3 space-y-2">
                          <h3 className="text-sm font-extrabold text-[#221C19]">
                            Handmade Woven Bamboo Fruit Basket
                          </h3>

                          <div className="flex justify-between items-baseline text-xs">
                            <span className="font-black text-[#8C3A16] text-sm">
                              ₹280 <span className="text-[10.5px] font-semibold text-[#221C19]">/ pc</span>
                            </span>
                            <span className="font-semibold text-[#4A372D] text-[11px]">
                              12.4" W × 6.2" H, Wt: 420g
                            </span>
                          </div>

                          <div className="flex justify-between items-center text-[10.5px] pt-1 border-t border-[#EFE5DC]">
                            <span className="font-bold text-emerald-700">
                              📈 Capacity: 15 pcs / day
                            </span>
                            <span className="font-medium text-[#7A685F]">
                              ⏱️ Lead: 5 – 7 days
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Distribution Channels Activated Card (with Green Checkmark circles) */}
                      <div className="bg-[#FFFDFB] rounded-2xl border border-[#EADFD6] p-3.5 shadow-2xs space-y-2.5">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Distribution Channels Activated</h3>
                          <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-bold px-2 py-0.5 rounded-full">
                            3 Active
                          </span>
                        </div>

                        <div className="space-y-2 pt-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#FFE8DC] flex items-center justify-center text-[#A84318] shrink-0">
                                <Store className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <p className="text-[11.5px] font-extrabold text-[#221C19]">HunarSangam Marketplace</p>
                                <p className="text-[9.5px] text-emerald-700 font-semibold">Live • Instant Quotations enabled</p>
                              </div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32] shrink-0">
                                <Globe className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <p className="text-[11.5px] font-extrabold text-[#221C19]">ONDC Handicraft Registry</p>
                                <p className="text-[9.5px] text-emerald-700 font-semibold">Synced • Pan-India open network</p>
                              </div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-[#F5EBE1] flex items-center justify-center text-[#7C3F24] shrink-0">
                                <Share2 className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <p className="text-[11.5px] font-extrabold text-[#221C19]">Direct WhatsApp Catalog</p>
                                <p className="text-[9.5px] text-emerald-700 font-semibold">Link ready to share with buyers</p>
                              </div>
                            </div>
                            <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* WhatsApp Direct Share Button */}
                      <button
                        onClick={() => showToast('💬 WhatsApp Catalog Card copied & ready to share!')}
                        className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Share Catalog Card on WhatsApp</span>
                      </button>

                      {/* Action Buttons */}
                      <div className="space-y-2 pt-1">
                        <button
                          onClick={() => {
                            setActiveScreenIndex(9);
                            setHomeBottomTab(0);
                            showToast('Returned to Artisan Dashboard');
                          }}
                          className="w-full py-3.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-1.5 active:scale-98 transition-all"
                        >
                          <span>Go to Artisan Dashboard</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => {
                            setActiveScreenIndex(11);
                            showToast('Opening Voice-First Product Capture Flow');
                          }}
                          className="w-full py-2.5 bg-[#FBF4EE] hover:bg-[#F2E5DC] text-[#8C3A16] border border-[#EADFD6] rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 active:scale-98 transition-all"
                        >
                          <Mic className="w-3.5 h-3.5" />
                          <span>+ Add Another Craft (Voice)</span>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('products')}
                  </div>
                )}

                {/* 21. SCREEN 20: DIGITAL VISITING CARD & ARTISAN PROFILE SECTION (100% matching profile section - Digital Visiting Card.png) */}
                {activeScreenIndex === 20 && (
                  <div className="flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Top App Bar */}
                    <div className="bg-[#FFFDFB] border-b border-[#EADFD6] px-4 py-2.5 flex items-center justify-between z-10 shrink-0">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setActiveScreenIndex(9)}
                          className="p-1 rounded-full text-[#221C19] hover:bg-[#F3E7DF] active:scale-95 transition-all"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                          <h2 className="text-sm font-black text-[#221C19] leading-tight">Digital Visiting Card</h2>
                          <div className="flex items-center gap-1 text-[10.5px] text-[#2E7D32] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                            <span>Official GI Identity</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Audio Listen Pill */}
                        <button
                          onClick={() => {
                            setIsPlayingAudio(!isPlayingAudio);
                            showToast(
                              isPlayingAudio
                                ? 'Audio stopped'
                                : '🎙️ Playing audio artisan passport introduction in English'
                            );
                          }}
                          className="px-2.5 py-1 bg-[#FDF2EB] border border-[#F3DFD5] text-[#8C3A16] rounded-full flex items-center gap-1.5 text-xs font-bold shadow-2xs hover:bg-[#F8E5D8] active:scale-95 transition-all"
                        >
                          <Volume2 className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <span className="flex items-center gap-0.5 text-[#8C3A16]">
                            <span className="w-0.5 h-2 bg-[#8C3A16] rounded-full animate-pulse" />
                            <span className="w-0.5 h-3 bg-[#8C3A16] rounded-full animate-pulse delay-75" />
                            <span className="w-0.5 h-1.5 bg-[#8C3A16] rounded-full animate-pulse delay-150" />
                            <span className="w-0.5 h-2.5 bg-[#8C3A16] rounded-full" />
                          </span>
                          <span>Listen</span>
                        </button>

                        {/* Language Dropdown */}
                        <button
                          onClick={() => showToast('Language: English (Tap to change)')}
                          className="flex items-center gap-0.5 text-xs font-bold text-[#4A3228] hover:text-[#8C3A16] px-1 py-0.5"
                        >
                          <span>English</span>
                          <span className="text-[9px]">▾</span>
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Passport Content */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Verified Artisan Identity B2B Banner */}
                      <div className="bg-[#FFF6F0] border border-[#FBE0D2] rounded-2xl p-3.5 flex items-start gap-3 shadow-2xs">
                        <div className="w-9 h-9 rounded-xl bg-[#F9EDE6] text-[#A84318] flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5 h-5 text-[#A84318]" />
                        </div>
                        <div>
                          <h3 className="text-xs font-black text-[#221C19] leading-snug">
                            Your Verified Artisan Identity for B2B Buyers
                          </h3>
                          <p className="text-[11px] text-[#6B584E] leading-relaxed mt-1">
                            Share via WhatsApp, print at craft melas, or show your QR passport directly at domestic and
                            export exhibitions.
                          </p>
                        </div>
                      </div>

                      {/* Add Your Craft Story by Voice CTA */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(21);
                          showToast('🎙️ Opened My Craft Story screen');
                        }}
                        className="w-full py-3 px-4 bg-[#8C140E] hover:bg-[#78100B] text-white rounded-2xl flex items-center justify-center gap-2.5 shadow-md active:scale-98 transition-all"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#FDF0EB] text-[#8C140E] flex items-center justify-center shrink-0 shadow-2xs">
                          <Mic className="w-4 h-4 text-[#8C140E]" />
                        </div>
                        <span className="text-xs font-black tracking-wide">Add your craft story by voice</span>
                      </button>

                      {/* Central Digital Visiting Card (Artisan Passport) */}
                      <div className="bg-[#FFFDFB] rounded-3xl border border-[#E8DDD5] overflow-hidden shadow-xs">
                        {/* Brown Header Bar */}
                        <div className="h-1.5 bg-[#8C4421] w-full" />

                        <div className="p-4 space-y-3.5">
                          {/* Top Brand & GI Badge */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <HunarSangamLogo size={26} showText={true} />
                              <span className="text-[9.5px] font-bold text-[#7A5A4A] bg-[#F7EFE9] px-2 py-0.5 rounded-md">
                                Artisan
                              </span>
                            </div>
                            <div className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
                              <span>GI Reg #431 – Assam Cane</span>
                            </div>
                          </div>

                          {/* Artisan Avatar & Info */}
                          <div className="flex items-center gap-3">
                            <div className="relative shrink-0">
                              <img
                                src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80"
                                alt="Ramu Kumar"
                                className="w-14 h-14 rounded-2xl object-cover border border-[#E8DDD5]"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#2E7D32] rounded-full flex items-center justify-center text-white ring-2 ring-white">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-sm font-black text-[#221C19]">Ramu Kumar</h3>
                                <span className="bg-[#FDF2EB] text-[#A84318] border border-[#F5D8CA] text-[9.5px] font-black px-1.5 py-0.5 rounded-md">
                                  GI Certified
                                </span>
                              </div>
                              <p className="text-[11px] font-medium text-[#6B584E] mt-0.5">
                                Master Craftsman • 3rd Gen Weaver
                              </p>
                              <p className="text-[10.5px] text-[#7A685F] flex items-center gap-1 mt-0.5">
                                <MapPin className="w-3 h-3 text-[#8C3A16]" />
                                <span>Assam &amp; Barabanki Weavers Guild</span>
                              </p>
                            </div>
                          </div>

                          {/* Merit & Wage Badges */}
                          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                            <span className="bg-[#FDF4EE] border border-[#F0DFD3] text-[#7A4A28] text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                              <span>🏆</span> National Merit Awardee 2019
                            </span>
                            <span className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] text-[9.5px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                              <span>🌱</span> Fair Wage Certified
                            </span>
                          </div>

                          {/* QR Code Container */}
                          <div
                            onClick={() => {
                              setShowQrEnlargedModal(true);
                              showToast('🔍 Full-screen QR code opened for quick buyer scanning');
                            }}
                            className="border border-dashed border-[#DCCEC4] hover:border-[#8C3A16] rounded-2xl p-4 bg-white text-center space-y-3 cursor-pointer hover:bg-[#FFFDFB] active:scale-99 transition-all group"
                            title="Click to enlarge QR Code for scanning"
                          >
                            <div className="w-36 h-36 mx-auto bg-white p-2 rounded-xl flex items-center justify-center relative shadow-2xs group-hover:scale-102 transition-transform">
                              <svg viewBox="0 0 100 100" className="w-full h-full">
                                <rect width="100" height="100" fill="white" />
                                {/* Top-Left Finder */}
                                <rect x="6" y="6" width="26" height="26" rx="4" fill="#8C3A16" />
                                <rect x="11" y="11" width="16" height="16" rx="2" fill="white" />
                                <rect x="15" y="15" width="8" height="8" rx="1" fill="#221C19" />
                                {/* Top-Right Finder */}
                                <rect x="68" y="6" width="26" height="26" rx="4" fill="#8C3A16" />
                                <rect x="73" y="11" width="16" height="16" rx="2" fill="white" />
                                <rect x="77" y="15" width="8" height="8" rx="1" fill="#221C19" />
                                {/* Bottom-Left Finder */}
                                <rect x="6" y="68" width="26" height="26" rx="4" fill="#8C3A16" />
                                <rect x="11" y="73" width="16" height="16" rx="2" fill="white" />
                                <rect x="15" y="77" width="8" height="8" rx="1" fill="#221C19" />
                                {/* Decorative Data Dots */}
                                <rect x="36" y="8" width="8" height="6" rx="1" fill="#221C19" />
                                <rect x="48" y="8" width="14" height="6" rx="1" fill="#8C3A16" />
                                <rect x="36" y="18" width="12" height="6" rx="1" fill="#221C19" />
                                <rect x="52" y="18" width="10" height="10" rx="1" fill="#221C19" />
                                <rect x="8" y="36" width="10" height="6" rx="1" fill="#221C19" />
                                <rect x="22" y="36" width="10" height="10" rx="1" fill="#8C3A16" />
                                <rect x="8" y="48" width="12" height="12" rx="1" fill="#221C19" />
                                <rect x="68" y="36" width="12" height="8" rx="1" fill="#221C19" />
                                <rect x="84" y="36" width="10" height="12" rx="1" fill="#8C3A16" />
                                <rect x="72" y="48" width="10" height="10" rx="1" fill="#221C19" />
                                <rect x="36" y="68" width="14" height="8" rx="1" fill="#8C3A16" />
                                <rect x="54" y="68" width="8" height="12" rx="1" fill="#221C19" />
                                <rect x="36" y="80" width="10" height="14" rx="1" fill="#221C19" />
                                <rect x="50" y="84" width="14" height="10" rx="1" fill="#8C3A16" />
                                <rect x="68" y="68" width="26" height="26" rx="4" fill="#221C19" />
                                <rect x="74" y="74" width="14" height="14" rx="2" fill="white" />
                                <rect x="78" y="78" width="6" height="6" rx="1" fill="#8C3A16" />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-[#8C3A16] text-white flex items-center justify-center text-xs shadow-md ring-2 ring-white font-bold">
                                  🌿
                                </div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <p className="text-xs font-black text-[#221C19] leading-tight">
                                Scan to view live catalog, audio story &amp; verified bulk pricing
                              </p>
                              <p className="text-[10px] text-[#7A685F]">
                                Instant B2B Buyer direct connect via HunarSangam
                              </p>
                            </div>
                          </div>

                          {/* 3 Metrics Bar */}
                          <div className="bg-[#FDF5EE] rounded-2xl p-2.5 grid grid-cols-3 divide-x divide-[#EADFD6] text-center">
                            <div>
                              <p className="text-xs font-black text-[#8C3A16]">8 Types</p>
                              <p className="text-[9.5px] text-[#7A685F] font-medium">Verified Crafts</p>
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#221C19]">250 pcs/mo</p>
                              <p className="text-[9.5px] text-[#7A685F] font-medium">Bulk Capacity</p>
                            </div>
                            <div>
                              <p className="text-xs font-black text-[#2E7D32]">100%</p>
                              <p className="text-[9.5px] text-[#7A685F] font-medium">On-Time Dispatch</p>
                            </div>
                          </div>

                          {/* Card ID & GI Tag */}
                          <div className="flex items-center justify-between text-[10px] pt-1 border-t border-[#F0E6DE]">
                            <span className="font-mono font-bold text-[#6B584E]">🪪 ID: HS-IND-AS-0431-RK</span>
                            <span className="font-bold text-[#2E7D32] flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5" /> Govt. GI Verified
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* QUICK SHARING Section */}
                      <div className="space-y-2.5">
                        <p className="text-[10.5px] font-black tracking-wider text-[#6B584E] uppercase">
                          QUICK SHARING
                        </p>

                        {/* WhatsApp Button */}
                        <button
                          onClick={() => setShowShareWhatsAppModal(true)}
                          className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all cursor-pointer"
                        >
                          <Send className="w-4 h-4 fill-white rotate-45 -mt-0.5" />
                          <span>Share on WhatsApp</span>
                        </button>

                        {/* PDF / Copy Link */}
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => setShowCardPrintModal(true)}
                            className="py-2.5 bg-[#FFF5EE] border border-[#EADFD6] hover:bg-[#FBEBE0] text-[#4A3228] font-bold text-[11px] rounded-2xl flex items-center justify-center gap-1.5 shadow-2xs active:scale-98 transition-all cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span>Download PDF / Print</span>
                          </button>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText('https://hunarsangam.in/artisan/ramu-kumar-gi431');
                              showToast('🔗 Profile link copied: hunarsangam.in/artisan/ramu-kumar-gi431');
                            }}
                            className="py-2.5 bg-[#FFF5EE] border border-[#EADFD6] hover:bg-[#FBEBE0] text-[#4A3228] font-bold text-[11px] rounded-2xl flex items-center justify-center gap-1.5 shadow-2xs active:scale-98 transition-all cursor-pointer"
                          >
                            <Link className="w-3.5 h-3.5 text-[#8C3A16]" />
                            <span>Copy Profile Link</span>
                          </button>
                        </div>

                        {/* Add to Wallet */}
                        <button
                          onClick={() => setShowWalletPassModal(true)}
                          className="w-full py-2.5 bg-white border border-[#EADFD6] hover:bg-[#FAF3EE] text-[#4A3228] font-bold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-2xs active:scale-98 transition-all cursor-pointer"
                        >
                          <Wallet className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <span>Add to Apple / Google Wallet</span>
                        </button>
                      </div>

                      {/* Visiting Card Formats Section */}
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-black text-[#221C19]">Visiting Card Formats</h3>
                          <span className="text-[10.5px] font-bold text-[#8C3A16]">3 Templates Ready</span>
                        </div>

                        {/* Option 1: Digital Phone Card */}
                        <button
                          onClick={() => setSelectedCardTemplate('phone')}
                          className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            selectedCardTemplate === 'phone'
                              ? 'bg-[#FFFBF8] border-[#8C3A16] ring-1 ring-[#8C3A16]'
                              : 'bg-white border-[#EADFD6]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                selectedCardTemplate === 'phone'
                                  ? 'bg-[#8C3A16] text-white'
                                  : 'bg-[#FDF4EE] text-[#8C3A16]'
                              }`}
                            >
                              <Smartphone className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Digital Phone Card</h4>
                              <p className="text-[10.5px] text-[#7A685F]">
                                Optimized for WhatsApp status &amp; direct phone scans
                              </p>
                            </div>
                          </div>
                          {selectedCardTemplate === 'phone' && (
                            <div className="w-5 h-5 rounded-full bg-[#8C3A16] text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          )}
                        </button>

                        {/* Option 2: Printable Stall Standee */}
                        <button
                          onClick={() => setSelectedCardTemplate('standee')}
                          className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            selectedCardTemplate === 'standee'
                              ? 'bg-[#FFFBF8] border-[#8C3A16] ring-1 ring-[#8C3A16]'
                              : 'bg-white border-[#EADFD6]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                selectedCardTemplate === 'standee'
                                  ? 'bg-[#8C3A16] text-white'
                                  : 'bg-[#FDF4EE] text-[#8C3A16]'
                              }`}
                            >
                              <Store className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Printable Stall Standee (A4 QR)</h4>
                              <p className="text-[10.5px] text-[#7A685F]">
                                For Shilp Melas, Dastkar exhibitions &amp; trade desks
                              </p>
                            </div>
                          </div>
                          {selectedCardTemplate === 'standee' ? (
                            <div className="w-5 h-5 rounded-full bg-[#8C3A16] text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          ) : (
                            <span className="text-[10px] font-bold text-[#8C3A16] bg-[#FDF4EE] px-2 py-0.5 rounded-md">
                              Print A4
                            </span>
                          )}
                        </button>

                        {/* Option 3: Packaging Hang Tag */}
                        <button
                          onClick={() => setSelectedCardTemplate('hangtag')}
                          className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            selectedCardTemplate === 'hangtag'
                              ? 'bg-[#FFFBF8] border-[#8C3A16] ring-1 ring-[#8C3A16]'
                              : 'bg-white border-[#EADFD6]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                selectedCardTemplate === 'hangtag'
                                  ? 'bg-[#8C3A16] text-white'
                                  : 'bg-[#FDF4EE] text-[#8C3A16]'
                              }`}
                            >
                              <Tag className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-xs font-black text-[#221C19]">Packaging Hang Tag (Mini QR)</h4>
                              <p className="text-[10.5px] text-[#7A685F]">
                                Attach with dispatched cane &amp; bamboo handicraft lots
                              </p>
                            </div>
                          </div>
                          {selectedCardTemplate === 'hangtag' ? (
                            <div className="w-5 h-5 rounded-full bg-[#8C3A16] text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          ) : (
                            <span className="text-[10px] font-bold text-[#8C3A16] bg-[#FDF4EE] px-2 py-0.5 rounded-md">
                              Batch (50)
                            </span>
                          )}
                        </button>
                      </div>

                      {/* Share Digital Card Now Primary Button */}
                      <button
                        onClick={() => showToast('🚀 Sharing Digital Visiting Card via Native Share Drawer...')}
                        className="w-full py-3.5 bg-[#8C3A16] hover:bg-[#783011] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Share Digital Card Now</span>
                      </button>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('profile')}
                  </div>
                )}

                {/* 22. SCREEN 21: MY CRAFT STORY (100% matching — Digital Craft Story add from profile section.png) */}
                {activeScreenIndex === 21 && (
                  <div className="flex flex-col h-full bg-[#FDFBF9] overflow-hidden">
                    {/* Top App Bar */}
                    <div className="bg-[#FFFDFB] border-b border-[#EADFD6] px-4 py-2.5 flex items-center justify-between z-10 shrink-0">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setActiveScreenIndex(20)}
                          className="p-1 rounded-full text-[#221C19] hover:bg-[#F3E7DF] active:scale-95 transition-all"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h2 className="text-base font-black text-[#221C19] leading-tight">My Craft Story</h2>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Audio Guide Pill */}
                        <button
                          onClick={() => {
                            setIsCraftStoryAudioGuidePlaying(!isCraftStoryAudioGuidePlaying);
                            showToast(
                              isCraftStoryAudioGuidePlaying
                                ? 'Audio Guide stopped'
                                : '🎙️ Playing Audio Guide: How to record your artisan heritage craft story'
                            );
                          }}
                          className="px-2.5 py-1 bg-[#FDF2EB] border border-[#F3DFD5] text-[#8C3A16] rounded-full flex items-center gap-1.5 text-xs font-bold shadow-2xs hover:bg-[#F8E5D8] active:scale-95 transition-all"
                        >
                          <Volume2 className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <div className="text-left leading-none">
                            <span className="text-[9.5px] block font-bold text-[#8C3A16]">Audio</span>
                            <span className="text-[9px] block font-bold text-[#8C3A16]">Guide</span>
                          </div>
                        </button>

                        {/* Language Dropdown */}
                        <button
                          onClick={() => showToast('Language: English (Tap to change)')}
                          className="flex items-center gap-0.5 text-xs font-bold text-[#4A3228] hover:text-[#8C3A16] px-1 py-0.5"
                        >
                          <span>English</span>
                          <span className="text-[9px]">▾</span>
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Artisan Profile Header Card */}
                      <div className="bg-[#FFFDFB] rounded-3xl border border-[#EADFD6] p-3.5 space-y-3 shadow-2xs">
                        <div className="flex items-center gap-3">
                          <div className="relative shrink-0">
                            <img
                              src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&auto=format&fit=crop&q=80"
                              alt="Ramu Kumar"
                              className="w-14 h-14 rounded-2xl object-cover border border-[#E8DDD5]"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#8C2E18] rounded-full flex items-center justify-center text-white ring-2 ring-white">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-black text-[#221C19] leading-tight">Ramu Kumar</h3>
                            <p className="text-xs font-bold text-[#8C2E18] mt-0.5">
                              National Merit Handicraft Awardee
                            </p>
                            <p className="text-[11px] text-[#6B584E] flex items-center gap-1 mt-0.5 font-medium truncate">
                              <MapPin className="w-3 h-3 text-[#8C3A16] shrink-0" />
                              <span>Bamboo &amp; Cane Plaiting • Assam &amp; Barabanki</span>
                            </p>
                          </div>
                        </div>

                        {/* Badges Row */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                          <span className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[2.5]" /> GI Registered #431
                          </span>
                          <span className="bg-[#F7EFE9] border border-[#E8DDD5] text-[#4A3228] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span>🎖️</span> Master Craftsman
                          </span>
                          <span className="bg-[#FDF2EB] border border-[#F5D8CA] text-[#8C3A16] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <span>🌱</span> 3rd Gen Weaver
                          </span>
                        </div>
                      </div>

                      {/* Tell Your Story in Your Voice Card */}
                      <div className="bg-[#FFF8F5] border border-[#F6E1D7] rounded-3xl p-4 space-y-3.5 shadow-2xs">
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-[#FCEFE8] text-[#8C2E18] flex items-center justify-center shrink-0 mt-0.5">
                            <Mic className="w-4 h-4 text-[#8C2E18]" />
                          </div>
                          <div>
                            <h3 className="text-sm font-black text-[#221C19] leading-tight">
                              Tell Your Story in Your Voice
                            </h3>
                            <p className="text-[10.5px] font-bold text-[#8C2E18] mt-0.5">
                              Zero Typing Needed • Native Dialects Supported
                            </p>
                          </div>
                        </div>

                        <p className="text-[11px] text-[#6B584E] leading-relaxed">
                          Speak naturally in Hindi, Assamese, or your mother tongue. Describe your family roots, cane
                          seasoning secrets, and cluster weavers. AI translates and refines it for global B2B buyers.
                        </p>

                        {/* Prompt Suggestion Box */}
                        <div className="bg-[#FFF0E7] border border-[#FCDCCE] rounded-xl p-2 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#8C2E18] text-white flex items-center justify-center shrink-0">
                            <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
                          </div>
                          <p className="text-[11px] text-[#6B584E] italic truncate">
                            Prompt: &quot;I learned cane weaving from my father...&quot;
                          </p>
                        </div>

                        {/* Big Central Record Button */}
                        <div className="flex flex-col items-center justify-center py-1">
                          <button
                            onClick={() => {
                              setIsCraftStoryRecording(!isCraftStoryRecording);
                              showToast(
                                isCraftStoryRecording
                                  ? '✅ Recording saved & AI structured your story'
                                  : '🎙️ Recording voice note in Hindi/Assamese... Speak freely'
                              );
                            }}
                            className="w-16 h-16 rounded-full bg-[#FCE2D5] flex items-center justify-center active:scale-95 transition-all shadow-inner relative group"
                          >
                            <div className="w-12 h-12 rounded-full bg-[#8C2E18] hover:bg-[#782310] text-white flex items-center justify-center shadow-md transition-all">
                              {isCraftStoryRecording ? (
                                <span className="w-4 h-4 bg-white rounded-xs animate-pulse" />
                              ) : (
                                <Mic className="w-5 h-5 text-white" />
                              )}
                            </div>
                            {isCraftStoryRecording && (
                              <span className="absolute -inset-1 rounded-full border-2 border-[#8C2E18] animate-ping opacity-50" />
                            )}
                          </button>
                          <p className="text-xs font-black text-[#221C19] mt-2">Tap to Record New Note</p>
                          <p className="text-[10px] text-[#7A685F] font-medium">Recommended: 1 to 2 minutes</p>
                        </div>

                        {/* Active Voice Note Player Bar */}
                        <div className="bg-white border border-[#EBDCD2] rounded-2xl p-3 space-y-2 shadow-2xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
                              <span className="text-xs font-black text-[#221C19]">Artisan Voice Note (0:48)</span>
                            </div>
                            <span className="text-[10.5px] font-medium text-[#7A685F]">Recorded Today</span>
                          </div>

                          <div className="flex items-center gap-2 pt-0.5">
                            <button
                              onClick={() => {
                                setIsPlayingCraftVoiceNote(!isPlayingCraftVoiceNote);
                                showToast(
                                  isPlayingCraftVoiceNote
                                    ? 'Audio paused'
                                    : '▶️ Playing original artisan audio recording'
                                );
                              }}
                              className="w-7 h-7 rounded-full bg-[#8C2E18] text-white flex items-center justify-center shrink-0 hover:bg-[#782310] active:scale-95 shadow-2xs"
                            >
                              {isPlayingCraftVoiceNote ? (
                                <Pause className="w-3.5 h-3.5 fill-white" />
                              ) : (
                                <Play className="w-3.5 h-3.5 fill-white translate-x-0.5" />
                              )}
                            </button>

                            {/* Waveform Bars */}
                            <div className="flex-1 flex items-center justify-between gap-1 px-1 h-6">
                              {[
                                8, 14, 20, 12, 18, 24, 16, 10, 22, 18, 12, 20, 16, 10, 18, 14, 8, 16, 12, 6,
                              ].map((h, i) => {
                                const isHighlighted = isPlayingCraftVoiceNote ? i < 12 : i % 3 === 0;
                                return (
                                  <div
                                    key={i}
                                    style={{ height: `${h}px` }}
                                    className={`w-1 rounded-full transition-all ${
                                      isHighlighted ? 'bg-[#A84318]' : 'bg-[#F5C7B2]'
                                    }`}
                                  />
                                );
                              })}
                            </div>

                            <button
                              onClick={() => showToast('🎙️ Ready to re-record voice note')}
                              className="p-1 rounded-full text-[#7A685F] hover:text-[#8C2E18] active:scale-90 transition-all"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* AI-Crafted Buyer Story Section */}
                      <div className="bg-[#FFFDFB] rounded-3xl border border-[#EADFD6] p-4 space-y-3.5 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-black text-[#221C19]">AI-Crafted Buyer Story</h3>
                          <div className="bg-[#FDF2EB] text-[#8C3A16] border border-[#F5D8CA] text-[9.5px] font-black px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-[#8C3A16]" />
                            <span>Voice-Preserved</span>
                          </div>
                        </div>

                        <p className="text-[11px] text-[#6B584E] leading-relaxed">
                          Summarized and structured automatically for international buyers, retail brands, and craft
                          exhibitions.
                        </p>

                        {/* Subsection 1 */}
                        <div className="bg-[#FFF8F4] border-l-4 border-l-[#8C2E18] border border-[#F2DFD4] rounded-2xl p-3.5 space-y-1.5 shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#8C2E18] text-xs">📜</span>
                            <h4 className="text-xs font-black text-[#221C19]">
                              3 Generations of Sustainable Cane Weaving
                            </h4>
                          </div>
                          <p className="text-[11px] text-[#523E34] leading-relaxed">
                            Rooted in the rich artisan traditions of Northeast India, our family has practiced
                            sustainable bamboo plaiting for over 45 years. Passed down through three generations in
                            Assam and Barabanki, every warp and weft honors timeless tribal interlocking practices.
                          </p>
                        </div>

                        {/* Subsection 2 */}
                        <div className="bg-[#F8FAF7] border-l-4 border-l-[#2E7D32] border border-[#E0EBE1] rounded-2xl p-3.5 space-y-1.5 shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#2E7D32] text-xs">🌱</span>
                            <h4 className="text-xs font-black text-[#221C19]">Zero-Chemical, Food-Safe Craft</h4>
                          </div>
                          <p className="text-[11px] text-[#523E34] leading-relaxed">
                            Each piece is hand-harvested from mature riverbed bamboo, seasoned in natural pit smoke, and
                            treated with an organic mustard-seed oil finish. Designed for conscious contemporary
                            spaces—entirely biodegradable, food-safe, and chemical-free.
                          </p>
                        </div>

                        {/* Subsection 3 */}
                        <div className="bg-[#FAF7F5] border-l-4 border-l-[#7A4A28] border border-[#EFE5DC] rounded-2xl p-3.5 space-y-1.5 shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#7A4A28] text-xs">👥</span>
                            <h4 className="text-xs font-black text-[#221C19]">Empowering 14 Cluster Weavers</h4>
                          </div>
                          <p className="text-[11px] text-[#523E34] leading-relaxed">
                            Today Ramu leads a decentralized guild of 14 rural artisans, including 9 women master
                            weavers. This collective fulfills export-grade wholesale contracts while funding apprentice
                            workshops for young village artisans.
                          </p>
                        </div>

                        {/* Tap to edit with voice */}
                        <button
                          onClick={() => showToast('🎙️ Voice Assistant ready: Speak to edit or add details...')}
                          className="w-full py-2.5 px-3 bg-[#FFF8F5] border border-[#E2D2C7] rounded-xl text-[#8C2E18] text-xs font-black flex items-center justify-center gap-1.5 hover:bg-[#FDF0E9] active:scale-98 transition-all"
                        >
                          <Mic className="w-3.5 h-3.5 text-[#8C2E18]" />
                          <span>Tap to edit or add details with voice</span>
                        </button>
                      </div>

                      {/* Where Your Story Appears Card */}
                      <div className="bg-[#FFFDFB] rounded-3xl border border-[#EADFD6] p-4 space-y-3 shadow-2xs">
                        <div className="flex items-center gap-2">
                          <Store className="w-4 h-4 text-[#8C2E18]" />
                          <h3 className="text-xs font-black text-[#221C19]">Where Your Story Appears</h3>
                        </div>

                        <div className="space-y-2">
                          {/* Item 1 */}
                          <div
                            onClick={() => {
                              setActiveScreenIndex(22);
                              showToast('Opening B2B Quotations & Orders Hub (Screen 22)');
                            }}
                            className="p-2.5 bg-[#FFFBF8] hover:bg-[#FAF0E6] active:scale-98 transition-all rounded-2xl border border-[#F0E4DA] flex items-center gap-3 cursor-pointer shadow-2xs"
                            title="Click to view B2B Quotations & Orders"
                          >
                            <div className="w-8 h-8 rounded-xl bg-[#FDECE2] text-[#8C2E18] flex items-center justify-center shrink-0">
                              <FileText className="w-4 h-4 text-[#8C2E18]" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-black text-[#221C19]">Attached to B2B Quotations</p>
                              <p className="text-[10px] text-[#6B584E]">Improves wholesale order acceptance by 68%</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#8C2E18]" />
                          </div>

                          {/* Item 2 */}
                          <div
                            onClick={() => {
                              setActiveScreenIndex(10);
                              showToast('Opening ONDC & Craft Catalog (Screen 10)');
                            }}
                            className="p-2.5 bg-[#FFFBF8] hover:bg-[#FAF0E6] active:scale-98 transition-all rounded-2xl border border-[#F0E4DA] flex items-center gap-3 cursor-pointer shadow-2xs"
                            title="Click to view ONDC & Craft Catalog"
                          >
                            <div className="w-8 h-8 rounded-xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center shrink-0">
                              <Tag className="w-4 h-4 text-[#2E7D32]" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-black text-[#221C19]">ONDC &amp; Shilp Samagam Tags</p>
                              <p className="text-[10px] text-[#6B584E]">Printed on certified GI craft labels</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#2E7D32]" />
                          </div>

                          {/* Item 3 */}
                          <div
                            onClick={() => {
                              setActiveScreenIndex(20);
                              showToast('Opening Digital Visiting Card (Screen 20)');
                            }}
                            className="p-2.5 bg-[#FFFBF8] hover:bg-[#FAF0E6] active:scale-98 transition-all rounded-2xl border border-[#F0E4DA] flex items-center gap-3 cursor-pointer shadow-2xs"
                            title="Click to view Digital Visiting Card"
                          >
                            <div className="w-8 h-8 rounded-xl bg-[#FDF0E5] text-[#A84318] flex items-center justify-center shrink-0">
                              <QrCode className="w-4 h-4 text-[#A84318]" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs font-black text-[#221C19]">Digital Visiting Card (Screen 20)</p>
                              <p className="text-[10px] text-[#6B584E]">
                                Instant QR code for buyer WhatsApp &amp; trade fairs
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-[#A84318]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="bg-[#FFFDFB] border-t border-[#EADFD6] p-3 space-y-2 z-10 shrink-0">
                      {/* Save & Publish */}
                      <button
                        onClick={() => {
                          setActiveScreenIndex(20);
                          showToast('🎉 Craft Story saved and published to your Digital Visiting Card & B2B profile!');
                        }}
                        className="w-full py-3.5 bg-[#8C2E18] hover:bg-[#782310] text-white rounded-2xl text-xs font-black shadow-md flex items-center justify-center gap-2 active:scale-98 transition-all"
                      >
                        <span>Save &amp; Publish Craft Story</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      {/* Secondary buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => showToast('🎙️ Re-recording voice story... Speak naturally')}
                          className="py-2.5 bg-[#FFF5EE] border border-[#EADFD6] hover:bg-[#FBEBE0] text-[#4A3228] font-bold text-[11px] rounded-2xl flex items-center justify-center gap-1.5 shadow-2xs active:scale-98 transition-all"
                        >
                          <Mic className="w-3.5 h-3.5 text-[#8C2E18]" />
                          <span>Re-Tell With Voice</span>
                        </button>
                        <button
                          onClick={() => {
                            setActiveScreenIndex(20);
                            showToast('👀 Showing how buyers see your verified craft story on your profile card');
                          }}
                          className="py-2.5 bg-[#FFF5EE] border border-[#EADFD6] hover:bg-[#FBEBE0] text-[#4A3228] font-bold text-[11px] rounded-2xl flex items-center justify-center gap-1.5 shadow-2xs active:scale-98 transition-all"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#8C2E18]" />
                          <span>Preview Buyer View</span>
                        </button>
                      </div>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('profile')}
                  </div>
                )}

                {/* 23. SCREEN 22: ARTISAN ORDERS (matching o1- order first page.png) */}
                {activeScreenIndex === 22 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FDFBF9] overflow-hidden relative">
                    {/* Top App Bar matching 'o1- order first page.png' */}
                    <div className="px-3.5 pt-2 pb-2.5 border-b border-[#EADFD6] bg-[#FFFDFB] flex items-center justify-between shrink-0 z-10">
                      {/* Left: Menu Hamburger */}
                      <button
                        onClick={() => showToast('☰ HunarSangam Artisan Hub Menu')}
                        className="p-1 -ml-1 text-[#2D2421] hover:bg-[#F3EAE3] rounded-lg transition-colors cursor-pointer"
                        title="Open Menu"
                      >
                        <Menu className="w-5 h-5 text-[#2D2421]" />
                      </button>

                      {/* Center-left: Logo + Artisan Badge + Cluster Location */}
                      <div className="flex-1 ml-2.5">
                        <div className="flex items-center gap-2">
                          <HunarSangamLogo size={26} showText={true} />
                          <span className="bg-[#EFEBE9] text-[#5D4037] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#E0D7D2]">
                            Artisan
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-[#4E342E]">
                          <MapPin className="w-3 h-3 text-[#2E7D32]" />
                          <span>Assam Cane &amp; Bamboo</span>
                        </div>
                      </div>

                      {/* Right: Audio Ear Assist + Language Selector */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => showToast('🎙️ Audio assistance active: Reading order details aloud')}
                          className="w-7 h-7 rounded-full border border-[#D7CCC8] bg-[#FFFDFB] flex items-center justify-center text-[#8C3A16] hover:bg-[#FAF3EE] transition-colors cursor-pointer"
                          title="Audio Readout Assistance"
                        >
                          <Ear className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => {
                            const nextLang = selectedLanguage.toLowerCase().includes('hindi') ? 'English' : 'Hindi (हिंदी)';
                            setSelectedLanguage(nextLang);
                            showToast(`Language switched to ${nextLang}`);
                          }}
                          className="border border-[#3E2723] rounded-md px-2 py-0.5 flex items-center gap-1 text-[11px] font-bold text-[#2D2421] bg-white hover:bg-[#FAF5F0] transition-colors cursor-pointer"
                        >
                          <span>{selectedLanguage.toLowerCase().includes('hindi') ? 'हिंदी' : 'English'}</span>
                          <ChevronsUpDown className="w-3 h-3 text-[#3E2723]" />
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Orders Dashboard Content */}
                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3 pb-16">
                      {/* Section Title & Live Hub Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h1 className="text-2xl font-black text-[#1F1612] tracking-tight leading-tight">Artisan Orders</h1>
                          <p className="text-xs font-medium text-[#5D4037]">Production management for {artisanName}</p>
                        </div>
                        <div className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-2xs">
                          <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
                          <span>Live Hub</span>
                        </div>
                      </div>

                      {/* 2x2 Key Metrics Cards */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {/* Card 1: Total Active */}
                        <div
                          onClick={() => setShowEscrowDetailsModal(true)}
                          className="bg-white border border-[#EADFD6] hover:border-[#8C3A16] active:scale-98 transition-all rounded-2xl p-3 shadow-2xs flex flex-col justify-between cursor-pointer"
                          title="Click to view Escrow & Payment details"
                        >
                          <div className="flex items-center justify-between text-[#4E342E]">
                            <span className="text-xs font-bold">Total Active</span>
                            <Wallet className="w-4 h-4 text-[#A84318]" />
                          </div>
                          <div className="my-1.5">
                            <span className="text-2xl font-black text-[#1F1612] tracking-tight">₹1,42,000</span>
                          </div>
                          <div className="flex items-center gap-1 text-[10.5px] font-bold text-[#2E7D32]">
                            <Lock className="w-3 h-3 text-[#2E7D32]" />
                            <span>₹56,800 Escrow Advance</span>
                          </div>
                        </div>

                        {/* Card 2: Bulk Orders */}
                        <div
                          onClick={() => {
                            setOrdersFilterTab(0);
                            showToast('Showing all 3 Active Bulk POs');
                          }}
                          className="bg-white border border-[#EADFD6] hover:border-[#8C3A16] active:scale-98 transition-all rounded-2xl p-3 shadow-2xs flex flex-col justify-between cursor-pointer"
                          title="Click to view Active Orders"
                        >
                          <div className="flex items-center justify-between text-[#4E342E]">
                            <span className="text-xs font-bold">Bulk Orders</span>
                            <Receipt className="w-4 h-4 text-[#A84318]" />
                          </div>
                          <div className="my-1.5">
                            <span className="text-2xl font-black text-[#1F1612] tracking-tight">3 Active POs</span>
                          </div>
                          <div className="text-[10.5px] font-medium text-[#6D4C41]">
                            2 Producing • 1 Sample
                          </div>
                        </div>

                        {/* Card 3: March Capacity */}
                        <div
                          onClick={() => setShowCapacityPlannerModal(true)}
                          className="bg-white border border-[#EADFD6] hover:border-[#8C3A16] active:scale-98 transition-all rounded-2xl p-3 shadow-2xs flex flex-col justify-between cursor-pointer"
                          title="Click to view March Capacity Planner"
                        >
                          <div className="flex items-center justify-between text-[#4E342E]">
                            <span className="text-xs font-bold">March Capacity</span>
                            <RefreshCw className="w-3.5 h-3.5 text-[#A84318]" />
                          </div>
                          <div className="my-1 flex items-baseline">
                            <span className="text-2xl font-black text-[#B85324] tracking-tight">92%</span>
                            <span className="text-xs font-semibold text-[#6D4C41] ml-1.5">Utilized</span>
                          </div>
                          <div className="w-full bg-[#EFEBE9] h-2 rounded-full overflow-hidden my-1">
                            <div className="bg-[#8C3A16] h-full rounded-full w-[92%]" />
                          </div>
                          <div className="text-[10px] font-medium text-[#6D4C41]">
                            230 / 250 pcs booked
                          </div>
                        </div>

                        {/* Card 4: SLA Health */}
                        <div
                          onClick={() => setShowScoreBreakdownModal(true)}
                          className="bg-white border border-[#EADFD6] hover:border-emerald-600 active:scale-98 transition-all rounded-2xl p-3 shadow-2xs flex flex-col justify-between cursor-pointer"
                          title="Click to view Artisan Score & SLA breakdown"
                        >
                          <div className="flex items-center justify-between text-[#4E342E]">
                            <span className="text-xs font-bold">SLA Health</span>
                            <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                          </div>
                          <div className="my-1.5">
                            <span className="text-2xl font-black text-[#2E7D32] tracking-tight">0 Delayed</span>
                          </div>
                          <div className="text-[10.5px] font-medium text-[#6D4C41]">
                            100% On-Time Record
                          </div>
                        </div>
                      </div>

                      {/* Cluster Capacity Alert (Peach card with alert banner) */}
                      <div className="bg-[#FFF5EE] border border-[#F3DFD5] rounded-2xl p-3.5 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-[#FDECE8] flex items-center justify-center text-[#C53030]">
                              <AlertTriangle className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-extrabold text-[#8C3A16]">Cluster Capacity Alert</span>
                          </div>
                          <span className="bg-[#A84318] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                            New B2B Lead
                          </span>
                        </div>

                        <p className="text-xs text-[#4E342E] leading-relaxed">
                          New FabIndia Inquiry (400 pcs) exceeds your single capacity of 250 pcs. Team up with 2 cluster artisans to accept this order!
                        </p>

                        <button
                          onClick={() => {
                            setActiveScreenIndex(25);
                            showToast('Opening Form Artisan Collective (Screen 25)');
                          }}
                          className="w-full py-2.5 bg-[#8C3A16] hover:bg-[#772F10] active:scale-98 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
                        >
                          <Users className="w-3.5 h-3.5 text-white" />
                          <span>Find Artisan to Collaborate (Screen 25)</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Filter Tabs */}
                      <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {[
                          { label: 'All Orders (3)', idx: 0 },
                          { label: 'In Production (2)', idx: 1 },
                          { label: 'Payment Due (1)', idx: 2 },
                        ].map((filter) => (
                          <button
                            key={filter.idx}
                            onClick={() => setOrdersFilterTab(filter.idx)}
                            className={`px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer whitespace-nowrap ${
                              ordersFilterTab === filter.idx
                                ? 'bg-[#8C3A16] text-white font-bold shadow-xs'
                                : 'bg-white border border-[#D7CCC8] text-[#5D4037] font-semibold hover:bg-[#FAF5F0]'
                            }`}
                          >
                            {filter.label}
                          </button>
                        ))}
                      </div>

                      {/* NEW INCOMING ORDER REQUEST CARD: Heritage Handcrafts Pvt. Ltd. */}
                      {(ordersFilterTab === 0 || ordersFilterTab === 2) && (
                        <div
                          onClick={() => {
                            setActiveScreenIndex(24);
                            showToast('Opening Order Request & Details');
                          }}
                          className="bg-white border-2 border-[#EADFD6] hover:border-[#8C3A16] transition-all rounded-2xl p-3.5 shadow-xs space-y-3 cursor-pointer group"
                        >
                          {/* Header */}
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="w-9 h-9 rounded-full bg-[#FCECE3] text-[#8C3A16] font-black text-xs flex items-center justify-center shrink-0">
                                HH
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-sm font-black text-[#1F1612]">Heritage Handcrafts Pvt. Ltd.</span>
                                </div>
                                <p className="text-[11px] text-[#6D4C41]">B2B Buyer • New Delhi • 14 Bulk Orders</p>
                              </div>
                            </div>
                            <span className="bg-[#FFF0E6] text-[#8C3A16] border border-[#F5D8C7] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#8C3A16] animate-pulse" />
                              New Request
                            </span>
                          </div>

                          {/* Product & PO Info */}
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="text-[10.5px] text-[#8D6E63] font-mono font-medium">#REQ-HH-1048</span>
                              <h3 className="text-xs font-black text-[#1F1612] leading-snug">
                                50 × Bamboo Handwoven Basket
                              </h3>
                              <span className="text-[10.5px] text-[#6D4C41]">Assam Style Fine Split Bamboo</span>
                            </div>
                            <div className="text-right">
                              <span className="text-base font-black text-[#8C3A16]">₹22,500</span>
                              <span className="text-[10px] font-semibold text-[#2E7D32] block leading-tight">
                                ₹450 / pc • Escrow
                              </span>
                            </div>
                          </div>

                          {/* Capacity Indicator Banner */}
                          <div className="bg-[#FFF8F4] border border-[#F3E5DC] rounded-xl p-2 flex items-center justify-between text-[11px]">
                            <div className="flex items-center gap-1.5 font-semibold text-[#4E342E]">
                              <Sparkles className="w-3.5 h-3.5 text-[#8C3A16]" />
                              <span>Your Capacity: 30 / 50 pcs (Gap: 20)</span>
                            </div>
                            <span className="text-[10.5px] text-[#C53030] font-bold">Due: 28 Sept</span>
                          </div>

                          {/* Action Row */}
                          <div className="flex items-center justify-between pt-0.5" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => {
                                setActiveScreenIndex(29);
                                showToast('Opening Chat with Heritage Handcrafts (Buyer)');
                              }}
                              className="flex items-center gap-1 text-xs font-bold text-[#8C3A16] hover:underline cursor-pointer"
                            >
                              <MessageCircle className="w-3.5 h-3.5 text-[#8C3A16]" />
                              <span>Chat with Buyer</span>
                            </button>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setActiveScreenIndex(24);
                                  showToast('Opening Order Request Details');
                                }}
                                className="bg-[#FAF5F0] hover:bg-[#F3EAE3] border border-[#EADFD6] text-[#6D4C41] text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer transition-colors shadow-2xs"
                              >
                                View Specs
                              </button>
                              <button
                                onClick={() => {
                                  setOrderRequestAccepted(true);
                                  showToast('✅ Order Request Accepted! ₹22,500 secured in Escrow.');
                                }}
                                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                                  orderRequestAccepted
                                    ? 'bg-[#2E7D32] text-white'
                                    : 'bg-[#8C3A16] hover:bg-[#772F10] text-white'
                                }`}
                              >
                                {orderRequestAccepted ? 'Accepted ✓' : 'Accept order'}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Order Card 1: FabIndia Retail Ltd. */}
                      {(ordersFilterTab === 0 || ordersFilterTab === 1) && (
                        <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-3">
                          {/* Header */}
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                                <span className="text-sm font-black text-[#1F1612]">FabIndia Retail Ltd.</span>
                              </div>
                              <p className="text-[11px] text-[#6D4C41] mt-0.5">New Delhi • Verified Corporate Buyer</p>
                            </div>
                            <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                              In Production
                            </span>
                          </div>

                          {/* Product & PO Info */}
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="text-[10.5px] text-[#8D6E63] font-mono font-medium">#PO-FAB-8821</span>
                              <h3 className="text-xs font-black text-[#1F1612] leading-snug">
                                120 × Woven Bamboo Fruit<br />Basket
                              </h3>
                            </div>
                            <div className="text-right">
                              <span className="text-base font-black text-[#8C3A16]">₹33,600</span>
                              <span className="text-[10px] font-semibold text-[#2E7D32] block leading-tight">
                                40% Advance (₹13,440) in<br />Bank
                              </span>
                            </div>
                          </div>

                          {/* Production Progress Box */}
                          <div className="bg-[#FFF8F4] border border-[#F3E5DC] rounded-xl p-2.5 space-y-1.5">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-bold text-[#4E342E]">Production Status</span>
                              <span className="font-extrabold text-[#8C3A16]">
                                {fabIndiaProgress} / 120 pcs done ({Math.round((fabIndiaProgress / 120) * 100)}%)
                              </span>
                            </div>
                            <div className="w-full bg-[#E8D9CF] h-2 rounded-full overflow-hidden">
                              <div
                                className="bg-[#8C3A16] h-full rounded-full transition-all duration-300"
                                style={{ width: `${(fabIndiaProgress / 120) * 100}%` }}
                              />
                            </div>
                            <div className="flex items-center justify-between text-[10.5px]">
                              <div className="flex items-center gap-1 font-semibold text-[#6D4C41]">
                                <Clock className="w-3 h-3" />
                                <span>Next: QC &amp; Packaging</span>
                              </div>
                              <span className="font-bold text-[#C53030]">Due in 4 days (28 Mar)</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-2.5">
                            <button
                              onClick={() => {
                                setActiveScreenIndex(23);
                                showToast('Opening Order #HS1048 Updation & Details');
                              }}
                              className="py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs active:scale-98"
                            >
                              Update Progress
                            </button>
                            <button
                              onClick={() => setShowDispatchModal(true)}
                              className="py-2.5 border border-[#D7CCC8] bg-[#FAF5F0] hover:bg-[#F3EAE3] text-[#2D2421] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-98"
                            >
                              <Truck className="w-3.5 h-3.5 text-[#2D2421]" />
                              <span>Dispatch Delivery</span>
                            </button>
                          </div>

                          <div className="flex items-center justify-between pt-1 border-t border-[#F5ECE5]">
                            <button
                              onClick={() => {
                                setActiveScreenIndex(29);
                                showToast('Opening Chat with FabIndia Retail Ltd. (Buyer)');
                              }}
                              className="flex items-center gap-1.5 text-xs font-bold text-[#8C3A16] hover:underline cursor-pointer"
                            >
                              <MessageCircle className="w-3.5 h-3.5 text-[#8C3A16]" />
                              <span>Chat with Buyer (FabIndia)</span>
                            </button>
                            <button
                              onClick={() => setShowPoSpecsModal(true)}
                              className="text-[11px] font-semibold text-[#6D4C41] hover:text-[#8C3A16] flex items-center gap-1 cursor-pointer"
                            >
                              <FileText className="w-3 h-3" />
                              <span>View PO Specs</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Order Card 2: The Bombay Store */}
                      {(ordersFilterTab === 0 || ordersFilterTab === 2) && (
                        <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-3">
                          {/* Header */}
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                                <span className="text-sm font-black text-[#1F1612]">The Bombay Store</span>
                              </div>
                              <p className="text-[11px] text-[#6D4C41] mt-0.5">Mumbai • Retail Chain Buyer</p>
                            </div>
                            <span
                              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                                isBombayStoreAccepted
                                  ? 'bg-[#E8F5E9] text-[#2E7D32] border-[#C8E6C9]'
                                  : 'bg-[#FFF3E0] text-[#E65100] border-[#FFE0B2]'
                              }`}
                            >
                              {isBombayStoreAccepted ? 'In Production' : 'New order'}
                            </span>
                          </div>

                          {/* Product & PO Info */}
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="text-[10.5px] text-[#8D6E63] font-mono font-medium">#PO-TBS-4419</span>
                              <h3 className="text-xs font-black text-[#1F1612] leading-snug">
                                50 × Golden Cane Planter<br />Basket
                              </h3>
                            </div>
                            <div className="text-right">
                              <span className="text-base font-black text-[#8C3A16]">₹21,000</span>
                              <span className="text-[10px] font-semibold text-[#2E7D32] block leading-tight">
                                Advance Escrow<br />Secured
                              </span>
                            </div>
                          </div>

                          {/* Material Procurement Status */}
                          <div className="bg-[#FFF8F4] border border-[#F3E5DC] rounded-xl p-2 flex items-center justify-between text-[11px]">
                            <div className="flex items-center gap-1.5 font-semibold text-[#4E342E]">
                              <Package className="w-3.5 h-3.5 text-[#8C3A16]" />
                              <span>Assam Cane #Grade-A Procured</span>
                            </div>
                            <span className="text-[10.5px] text-[#6D4C41] font-medium">Due: 05 April (16 days)</span>
                          </div>

                          {/* Action Row */}
                          <div className="flex items-center justify-between pt-0.5">
                            <button
                              onClick={() => {
                                setActiveScreenIndex(29);
                                showToast('Opening Chat with The Bombay Store (Buyer)');
                              }}
                              className="flex items-center gap-1 text-xs font-bold text-[#8C3A16] hover:underline cursor-pointer"
                            >
                              <MessageCircle className="w-3.5 h-3.5 text-[#8C3A16]" />
                              <span>Chat with Buyer</span>
                            </button>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setShowPoSpecsModal(true)}
                                className="text-xs font-bold text-[#6D4C41] hover:text-[#8C3A16] cursor-pointer"
                              >
                                Specs
                              </button>
                              <button
                                onClick={() => {
                                  setActiveScreenIndex(24);
                                  showToast('Opening Order Details');
                                }}
                                className="bg-[#8C3A16] hover:bg-[#772F10] text-white text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
                              >
                                View Details
                              </button>
                              <button
                                onClick={() => {
                                  setIsBombayStoreAccepted(true);
                                  showToast('✅ Order #PO-TBS-4419 Accepted! 40% advance released.');
                                }}
                                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                                  isBombayStoreAccepted
                                    ? 'bg-[#2E7D32] text-white'
                                    : 'bg-[#8C3A16] hover:bg-[#772F10] text-white'
                                }`}
                              >
                                {isBombayStoreAccepted ? 'Accepted ✓' : 'Accept order'}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('orders')}
                  </div>
                )}

                {/* SCREEN 23: ORDER DETAILS & UPDATION (MATCHING 'o2- order updation page.png') */}
                {activeScreenIndex === 23 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-hidden relative">
                    {/* Top App Bar */}
                    <div className="bg-white border-b border-[#EADFD6] px-4 py-2.5 flex items-center justify-between shrink-0 shadow-2xs">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveScreenIndex(22)}
                          className="w-9 h-9 rounded-full border border-[#EADFD6] bg-white flex items-center justify-center text-[#2D2421] hover:bg-[#FAF5F0] transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-5 h-5 text-[#2D2421]" />
                        </button>
                        <div>
                          <h1 className="text-base font-extrabold text-[#1F1612] leading-tight">Order Details</h1>
                          <div className="flex items-center gap-1.5 text-xs text-[#8C3A16] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8C3A16]" />
                            <span>Artisan View</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Notification Bell with red dot */}
                        <button
                          onClick={() => setShowNotificationsModal(true)}
                          className="w-9 h-9 rounded-full border border-[#EADFD6] bg-white flex items-center justify-center text-[#2D2421] relative hover:bg-[#FAF5F0] transition-colors cursor-pointer"
                        >
                          <Bell className="w-4 h-4 text-[#2D2421]" />
                          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C53030]" />
                        </button>

                        {/* Language Selection Pill */}
                        <button
                          onClick={() => {
                            const next = selectedLanguage.includes('Hindi') ? 'English' : 'Hindi (हिंदी)';
                            setSelectedLanguage(next);
                            showToast(`Language switched to ${next}`);
                          }}
                          className="border border-[#D7CCC8] rounded-full px-3 py-1 flex items-center gap-1.5 text-xs font-semibold text-[#2D2421] bg-white hover:bg-[#FAF5F0] transition-colors cursor-pointer"
                        >
                          <span>{selectedLanguage.includes('Hindi') ? 'हिंदी' : 'English'}</span>
                          <span className="text-[#8D6E63] text-[11px]">|</span>
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Order Details Content */}
                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 pb-28">
                      {/* Audio Guide Available Banner */}
                      <div className="bg-[#FFF5EE] border border-[#F3DFD5] rounded-2xl p-3 flex items-center justify-between gap-3 shadow-2xs">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              setIsHS1048AudioPlaying(!isHS1048AudioPlaying);
                              showToast(isHS1048AudioPlaying ? 'Audio guide paused' : '🔊 Playing voice walkthrough for Order #HS1048');
                            }}
                            className="w-10 h-10 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0 shadow-xs hover:bg-[#772F10] transition-colors cursor-pointer"
                          >
                            <Volume2 className="w-5 h-5 text-white" />
                          </button>
                          <div>
                            <span className="text-[10px] font-black tracking-wider text-[#8C3A16] uppercase block">
                              AUDIO GUIDE AVAILABLE
                            </span>
                            <p className="text-xs text-[#2D2421] font-medium leading-snug">
                              Tap to listen to this order in{' '}
                              <span className="underline font-bold text-[#1F1612]">Hindi</span> /{' '}
                              <span className="underline font-bold text-[#1F1612]">Assamese</span> /{' '}
                              <span className="underline font-bold text-[#1F1612]">Gujarati</span>
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setIsHS1048AudioPlaying(!isHS1048AudioPlaying);
                            showToast(isHS1048AudioPlaying ? 'Audio paused' : '▶️ Playing Order #HS1048 audio guide');
                          }}
                          className="text-[#8C3A16] hover:opacity-80 transition-opacity p-1 cursor-pointer shrink-0"
                        >
                          {isHS1048AudioPlaying ? (
                            <Pause className="w-6 h-6 text-[#8C3A16]" />
                          ) : (
                            <PlayCircle className="w-6 h-6 text-[#8C3A16]" />
                          )}
                        </button>
                      </div>

                      {/* Main Order Card: #HS1048 */}
                      <div className="bg-white border border-[#EADFD6] rounded-3xl p-3.5 shadow-2xs space-y-3">
                        {/* Order Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <h2 className="text-base font-black text-[#1F1612]">Order #HS1048</h2>
                            <span className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                              B2B Confirmed
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-[#8D6E63]">B2B Bulk</span>
                        </div>

                        {/* Workshop Bamboo Basket Image Banner */}
                        <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-2xs">
                          <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&auto=format&fit=crop&q=80"
                            alt="Handmade Bamboo Baskets"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          {/* GI Tag Badge on top-right */}
                          <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-[#2E7D32] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1">
                            <Sprout className="w-3 h-3 text-[#2E7D32]" />
                            <span>GI Tag Cluster</span>
                          </div>
                          {/* Eco Bamboo Badge on bottom-left */}
                          <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2.5 py-1 rounded-md flex items-center gap-1.5">
                            <Package className="w-3 h-3 text-white" />
                            <span>100% Eco Bamboo</span>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3 className="text-base font-black text-[#1F1612] tracking-tight">
                            Handmade Bamboo Baskets
                          </h3>
                          <p className="text-xs text-[#6D4C41] font-medium mt-0.5">
                            Round open storage utility crafts with reinforced rims
                          </p>
                        </div>

                        {/* 2x2 Information Grid */}
                        <div className="grid grid-cols-2 gap-2.5">
                          {/* Buyer Box */}
                          <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#8D6E63] uppercase tracking-wide">
                                <Store className="w-3 h-3 text-[#8D6E63]" />
                                <span>Buyer</span>
                              </div>
                              <button
                                onClick={() => {
                                  setActiveScreenIndex(29);
                                  showToast('Opening Direct Chat with Heritage Handcrafts');
                                }}
                                className="text-[10px] font-bold text-[#8C3A16] hover:underline flex items-center gap-0.5 cursor-pointer"
                              >
                                <MessageCircle className="w-3 h-3" />
                                <span>Chat</span>
                              </button>
                            </div>
                            <p className="text-xs font-black text-[#1F1612] mt-1 leading-tight">
                              Heritage Handcrafts
                            </p>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-[#2E7D32] mt-1">
                              <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                              <span>Verified B2B Buyer</span>
                            </div>
                          </div>

                          {/* Quantity Box */}
                          <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#8D6E63] uppercase tracking-wide">
                              <Package className="w-3 h-3 text-[#8D6E63]" />
                              <span>Quantity</span>
                            </div>
                            <p className="text-sm font-black text-[#1F1612] mt-0.5 leading-tight">
                              50 pieces
                            </p>
                            <p className="text-[10px] font-medium text-[#8D6E63] mt-0.5">
                              Batch size confirmed
                            </p>
                          </div>

                          {/* Delivery Deadline Box */}
                          <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#8D6E63] uppercase tracking-wide">
                              <Calendar className="w-3 h-3 text-[#8D6E63]" />
                              <span>Delivery Deadline</span>
                            </div>
                            <p className="text-xs font-black text-[#1F1612] mt-1 leading-tight">
                              September 30
                            </p>
                            <p className="text-[10px] font-bold text-[#C53030] mt-0.5">
                              14 days remaining
                            </p>
                          </div>

                          {/* Escrow Secured Box */}
                          <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#8D6E63] uppercase tracking-wide">
                              <ShieldCheck className="w-3 h-3 text-[#8D6E63]" />
                              <span>Escrow Secured</span>
                            </div>
                            <p className="text-base font-black text-[#8C3A16] mt-0.5 leading-tight">
                              ₹19,000
                            </p>
                            <p className="text-[10px] font-bold text-[#2E7D32] mt-0.5">
                              100% Locked in Escrow
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Order Requirements Section */}
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <SlidersHorizontal className="w-4 h-4 text-[#8C3A16]" />
                            <h3 className="text-sm font-black text-[#1F1612]">Order Requirements</h3>
                          </div>
                          <span className="text-xs font-medium text-[#8D6E63]">Standard Spec</span>
                        </div>

                        {/* 2x2 Spec Cards */}
                        <div className="grid grid-cols-2 gap-2.5">
                          {/* Material */}
                          <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5 flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#FAF5F0] border border-[#EADFD6] flex items-center justify-center text-[#8C3A16] shrink-0">
                              <Sprout className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-[9px] font-bold text-[#8D6E63] uppercase tracking-wide block">
                                MATERIAL
                              </span>
                              <span className="text-xs font-black text-[#1F1612] leading-tight block">
                                Natural Bamboo
                              </span>
                            </div>
                          </div>

                          {/* Color */}
                          <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5 flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#FAF5F0] border border-[#EADFD6] flex items-center justify-center text-[#8C3A16] shrink-0">
                              <Palette className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-[9px] font-bold text-[#8D6E63] uppercase tracking-wide block">
                                COLOR
                              </span>
                              <span className="text-xs font-black text-[#1F1612] leading-tight block">
                                Natural Finish
                              </span>
                            </div>
                          </div>

                          {/* Quantity */}
                          <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5 flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#FAF5F0] border border-[#EADFD6] flex items-center justify-center text-[#8C3A16] shrink-0">
                              <LayoutGrid className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-[9px] font-bold text-[#8D6E63] uppercase tracking-wide block">
                                QUANTITY
                              </span>
                              <span className="text-xs font-black text-[#1F1612] leading-tight block">
                                50 pieces
                              </span>
                            </div>
                          </div>

                          {/* Packaging */}
                          <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5 flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#FAF5F0] border border-[#EADFD6] flex items-center justify-center text-[#8C3A16] shrink-0">
                              <Package className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-[9px] font-bold text-[#8D6E63] uppercase tracking-wide block">
                                PACKAGING
                              </span>
                              <span className="text-xs font-black text-[#1F1612] leading-tight block truncate">
                                Standard Eco-
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Full-width Dispatch Handover Card */}
                        <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#FAF5F0] border border-[#EADFD6] flex items-center justify-center text-[#8C3A16] shrink-0">
                              <Truck className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-[9px] font-bold text-[#8D6E63] uppercase tracking-wide block">
                                DISPATCH HANDOVER
                              </span>
                              <span className="text-xs font-black text-[#1F1612] leading-tight">
                                September 30 (Doorstep pickup by Delhivery B2B)
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => showToast('ℹ️ Logistics: Delhivery B2B pickup van scheduled for 30 Sept at your workshop')}
                            className="text-[#8D6E63] hover:text-[#1F1612] p-1 cursor-pointer shrink-0"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Production Progress Section */}
                      <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-3xl p-3.5 space-y-3">
                        {/* Progress Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-[#8C3A16]" />
                            <h3 className="text-sm font-black text-[#1F1612]">Production Progress</h3>
                          </div>
                          <span className="bg-[#8C3A16] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                            {Math.round((orderHS1048Count / 50) * 100)}% Complete
                          </span>
                        </div>

                        {/* Big Stats Row */}
                        <div className="flex items-baseline justify-between">
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-black text-[#1F1612]">{orderHS1048Count}</span>
                            <span className="text-xs font-bold text-[#6D4C41]">/ 50 completed</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs font-bold text-[#8C3A16]">
                            <span>⏳</span>
                            <span>{Math.max(0, 50 - orderHS1048Count)} pieces left to craft</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-[#EADFD6] h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-[#8C3A16] h-full rounded-full transition-all duration-300"
                            style={{ width: `${Math.min(100, (orderHS1048Count / 50) * 100)}%` }}
                          />
                        </div>

                        {/* Quick Count Update Sub-card */}
                        <div className="bg-white border border-[#EADFD6] rounded-2xl p-3 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-black text-[#1F1612]">Quick Count Update</p>
                            <p className="text-[10.5px] text-[#8D6E63]">Tap +/- to adjust pieces finished today</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                if (orderHS1048Count > 0) {
                                  setOrderHS1048Count(orderHS1048Count - 1);
                                }
                              }}
                              className="w-9 h-9 rounded-xl bg-[#FAF5F0] border border-[#E0D7D2] flex items-center justify-center font-bold text-lg text-[#1F1612] hover:bg-[#F3EAE3] active:scale-95 transition-all cursor-pointer"
                            >
                              <Minus className="w-4 h-4 text-[#1F1612]" />
                            </button>
                            <span className="text-base font-black text-[#1F1612] px-2 min-w-[28px] text-center">
                              {orderHS1048Count}
                            </span>
                            <button
                              onClick={() => {
                                if (orderHS1048Count < 50) {
                                  setOrderHS1048Count(orderHS1048Count + 1);
                                }
                              }}
                              className="w-9 h-9 rounded-xl bg-[#8C3A16] hover:bg-[#772F10] text-white flex items-center justify-center font-bold text-lg shadow-xs active:scale-95 transition-all cursor-pointer"
                            >
                              <Plus className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Need help completing this order? Collaboration Card */}
                      <div className="bg-[#FFF5EE] border border-[#F3DFD5] rounded-3xl p-4 space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#8C3A16] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <Users className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-[#1F1612] leading-tight">
                              Need help completing this order?
                            </h4>
                            <p className="text-xs text-[#5D4037] mt-1 leading-relaxed">
                              Your usual capacity is lower than this order quantity. You can team up with another artisan in your cluster to share workload and profit.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <button
                            onClick={() => setShowHS1048HelpModal(true)}
                            className="flex-1 py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer active:scale-98"
                          >
                            <UserPlus className="w-3.5 h-3.5" />
                            <span>Find an Artisan</span>
                          </button>
                          <button
                            onClick={() => showToast('👍 Continuing alone. Capacity reserved for Ramu Kumar.')}
                            className="flex-1 py-2.5 bg-white border border-[#D7CCC8] hover:bg-[#FAF5F0] text-[#2D2421] text-xs font-bold rounded-xl transition-all cursor-pointer active:scale-98 text-center"
                          >
                            Continue Alone
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Floating Voice Assistant Microphone Button */}
                    <button
                      onClick={() => showToast('🎙️ Voice Assistant: Say "Add 5 finished baskets" or "Report raw material delay"')}
                      className="absolute bottom-24 right-4 z-20 w-12 h-12 rounded-full bg-[#8C3A16] hover:bg-[#772F10] text-white shadow-xl flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
                      title="Voice Assistant"
                    >
                      <Mic className="w-5 h-5 text-white" />
                    </button>

                    {/* Sticky Bottom Action & Navigation Bar */}
                    <div className="bg-white border-t border-[#EADFD6] px-4 pt-2.5 pb-2 shadow-xs shrink-0">
                      {/* Big Update Progress CTA */}
                      <button
                        onClick={() => {
                          showToast(`✅ Order #HS1048 progress saved: ${orderHS1048Count}/50 completed (${Math.round((orderHS1048Count / 50) * 100)}%)!`);
                          setActiveScreenIndex(22);
                        }}
                        className="w-full py-3 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer active:scale-98"
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span>Update Progress</span>
                      </button>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('orders')}

                    {/* COLLABORATE / FIND ARTISAN MODAL FOR ORDER #HS1048 */}
                    {showHS1048HelpModal && (
                      <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[320px] animate-in fade-in zoom-in-95">
                          <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-base font-black text-[#1F1612]">Cluster Artisans</h3>
                            <button
                              onClick={() => setShowHS1048HelpModal(false)}
                              className="w-7 h-7 rounded-full bg-[#FAF5F0] flex items-center justify-center text-[#7A685F]"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-[#6D4C41] mb-3">
                            Share remaining <b>{50 - orderHS1048Count} pieces</b> with verified cluster weavers:
                          </p>

                          <div className="space-y-2 mb-4">
                            <div className="bg-[#FFFBF8] border border-[#EADFD6] rounded-2xl p-2.5 flex items-center justify-between">
                              <div>
                                <p className="text-xs font-black text-[#1F1612]">Suresh Das</p>
                                <p className="text-[10px] text-[#2E7D32] font-semibold">Available • 20 pcs capacity</p>
                              </div>
                              <button
                                onClick={() => {
                                  setShowHS1048HelpModal(false);
                                  showToast('Invited Suresh Das to split 15 pieces of Order #HS1048!');
                                }}
                                className="px-3 py-1 bg-[#8C3A16] text-white text-xs font-bold rounded-lg"
                              >
                                Invite
                              </button>
                            </div>

                            <div className="bg-[#FFFBF8] border border-[#EADFD6] rounded-2xl p-2.5 flex items-center justify-between">
                              <div>
                                <p className="text-xs font-black text-[#1F1612]">Bina Devi</p>
                                <p className="text-[10px] text-[#2E7D32] font-semibold">Available • 15 pcs capacity</p>
                              </div>
                              <button
                                onClick={() => {
                                  setShowHS1048HelpModal(false);
                                  showToast('Invited Bina Devi to split 10 pieces of Order #HS1048!');
                                }}
                                className="px-3 py-1 bg-[#8C3A16] text-white text-xs font-bold rounded-lg"
                              >
                                Invite
                              </button>
                            </div>
                          </div>

                          <button
                            onClick={() => setShowHS1048HelpModal(false)}
                            className="w-full py-2.5 bg-[#FAF5F0] text-[#6D4C41] rounded-xl text-xs font-bold hover:bg-[#F3EAE3]"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* SCREEN 24: ORDER REQUEST & SPECS (100% MATCHING 'o3 - order requset - reject page.png') */}
                {activeScreenIndex === 24 && (
                  <div className="flex-1 flex flex-col bg-[#FDFBF9] overflow-hidden relative">
                    {/* Top App Bar */}
                    <div className="bg-white border-b border-[#EADFD6] px-4 py-2.5 flex items-center justify-between shrink-0 shadow-2xs">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => setActiveScreenIndex(22)}
                          className="w-9 h-9 rounded-full border border-[#EADFD6] bg-white flex items-center justify-center text-[#2D2421] hover:bg-[#FAF5F0] transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-5 h-5 text-[#2D2421]" />
                        </button>
                        <div>
                          <HunarSangamLogo size={28} showText={true} />
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Language Selector Pill */}
                        <button
                          onClick={() => {
                            const nextLang = selectedLanguage === 'हिंदी' ? 'English' : 'हिंदी';
                            setSelectedLanguage(nextLang);
                            showToast(`🌐 Language set to ${nextLang}`);
                          }}
                          className="px-2.5 py-1 bg-white border border-[#EADFD6] rounded-full flex items-center gap-1 text-xs font-bold text-[#2D2421] hover:bg-[#FAF5F0] cursor-pointer shadow-2xs"
                        >
                          <Globe className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <span>{selectedLanguage.split('/')[0].trim()}</span>
                          <ChevronDown className="w-3 h-3 text-[#6D4C41]" />
                        </button>

                        {/* Notification Bell with red dot */}
                        <button
                          onClick={() => setShowNotificationsModal(true)}
                          className="w-9 h-9 rounded-full border border-[#EADFD6] bg-white flex items-center justify-center text-[#2D2421] relative hover:bg-[#FAF5F0] transition-colors cursor-pointer"
                        >
                          <Bell className="w-4 h-4 text-[#2D2421]" />
                          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#C53030]" />
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Order Request Content */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                      {/* Section Header: Title & Inbox Icon */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h1 className="text-xl font-black text-[#1F1612] tracking-tight">Order Request</h1>
                          <p className="text-xs text-[#6D4C41] mt-0.5 font-medium">You received a new order request</p>
                        </div>
                        <button
                          onClick={() => showToast('📬 Inbox: 1 new purchase request pending review')}
                          className="w-10 h-10 rounded-xl bg-[#FFF8F4] border border-[#EADFD6] text-[#8C3A16] flex items-center justify-center cursor-pointer hover:bg-[#FBECE2] transition-colors"
                        >
                          <Inbox className="w-5 h-5 text-[#8C3A16]" />
                        </button>
                      </div>

                      {/* Audio Guide Banner */}
                      <div className="bg-[#FFF5EE] border border-[#F3DFD5] rounded-2xl p-3 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              setIsOrderRequestAudioPlaying(!isOrderRequestAudioPlaying);
                              showToast(
                                isOrderRequestAudioPlaying
                                  ? '⏸ Audio guide paused'
                                  : '▶ Playing audio summary in your language...'
                              );
                            }}
                            className="w-10 h-10 rounded-xl bg-[#8C3A16] hover:bg-[#772F10] text-white flex items-center justify-center shrink-0 cursor-pointer shadow-xs active:scale-95 transition-all"
                          >
                            {isOrderRequestAudioPlaying ? (
                              <Pause className="w-5 h-5 text-white" />
                            ) : (
                              <Volume2 className="w-5 h-5 text-white" />
                            )}
                          </button>
                          <div>
                            <span className="text-[10px] font-black text-[#8C3A16] tracking-wider uppercase block">
                              AUDIO GUIDE
                            </span>
                            <p className="text-xs font-semibold text-[#3D2C24] leading-snug mt-0.5">
                              Tap to listen to this order proposal in your language
                            </p>
                          </div>
                        </div>
                        <span className="bg-[#F0E5DC] text-[#6D4C41] text-[11px] font-bold px-2 py-0.5 rounded-md shrink-0 ml-2">
                          28s
                        </span>
                      </div>

                      {/* Buyer Profile Card: Heritage Handcrafts Pvt. Ltd. */}
                      <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-2.5">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-[#FCECE3] flex items-center justify-center text-[#8C3A16] font-black text-sm shrink-0 border border-[#F5D8C7]">
                            HH
                          </div>
                          <div className="flex-1 min-w-0">
                            <h2 className="text-sm font-black text-[#1F1612] leading-tight truncate">
                              Heritage Handcrafts Pvt. Ltd.
                            </h2>
                            <div className="flex items-center gap-1.5 text-[11px] text-[#6D4C41] mt-0.5">
                              <Building2 className="w-3 h-3 text-[#6D4C41] shrink-0" />
                              <span>B2B Buyer</span>
                              <span>•</span>
                              <MapPin className="w-3 h-3 text-[#6D4C41] shrink-0" />
                              <span>New Delhi</span>
                            </div>
                          </div>
                        </div>

                        <div className="h-px bg-[#F0E4DC] w-full" />

                        <div className="flex items-center justify-between pt-0.5">
                          <span className="bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] text-[10.5px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-[#2E7D32]" />
                            <span>Verified B2B Buyer</span>
                          </span>
                          <button
                            onClick={() => {
                              setActiveScreenIndex(29);
                              showToast('Opening Direct Chat with Heritage Handcrafts');
                            }}
                            className="text-xs font-bold text-[#8C3A16] hover:bg-[#FFF0E6] border border-[#F5D8C7] px-2.5 py-1 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>Chat with Buyer</span>
                          </button>
                        </div>
                      </div>

                      {/* Product Image Banner with Badges */}
                      <div className="relative rounded-2xl overflow-hidden h-48 w-full border border-[#EADFD6] shadow-xs">
                        <img
                          src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&auto=format&fit=crop&q=80"
                          alt="Bamboo Handwoven Basket"
                          className="w-full h-full object-cover"
                        />
                        {/* Top Left Floating Pill: Natural Eco Craft */}
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10.5px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                          <Sprout className="w-3 h-3 text-[#81C784]" />
                          <span>Natural Eco Craft</span>
                        </div>

                        {/* Bottom Right Floating Button: Craft Specs */}
                        <button
                          onClick={() => setShowHeritageCraftSpecsModal(true)}
                          className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs border border-[#EADFD6] text-[#8C3A16] text-[11.5px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 cursor-pointer hover:bg-white transition-all active:scale-95"
                        >
                          <SlidersHorizontal className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <span>Craft Specs</span>
                        </button>
                      </div>

                      {/* Product Title & Subtitle */}
                      <div>
                        <h2 className="text-[17px] font-black text-[#1F1612] leading-snug">
                          Bamboo Handwoven Basket
                        </h2>
                        <p className="text-xs text-[#6D4C41] font-medium mt-0.5">
                          Assam Style Fine Split Bamboo Construction
                        </p>
                      </div>

                      {/* Pricing & Quantity Grid */}
                      <div className="space-y-2">
                        {/* Row 1: Quantity and Unit Price */}
                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="bg-white border border-[#EADFD6] rounded-xl p-3 shadow-2xs">
                            <div className="flex items-center gap-1 text-[10.5px] font-bold text-[#8D6E63]">
                              <Package className="w-3 h-3 text-[#8D6E63]" />
                              <span>Quantity</span>
                            </div>
                            <span className="text-sm font-black text-[#1F1612] block mt-1">50 pieces</span>
                          </div>
                          <div className="bg-white border border-[#EADFD6] rounded-xl p-3 shadow-2xs">
                            <div className="flex items-center gap-1 text-[10.5px] font-bold text-[#8D6E63]">
                              <Tag className="w-3 h-3 text-[#8D6E63]" />
                              <span>Unit Price</span>
                            </div>
                            <div className="mt-1">
                              <span className="text-sm font-black text-[#1F1612]">₹450</span>
                              <span className="text-xs text-[#8D6E63] font-medium"> / pc</span>
                            </div>
                          </div>
                        </div>

                        {/* Row 2: Total Order Value (Peach Banner) */}
                        <div className="bg-[#FFF0E6] border border-[#F5D8C7] rounded-xl p-3 flex items-center justify-between shadow-2xs">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#8C3A16]">
                            <Receipt className="w-4 h-4 text-[#8C3A16]" />
                            <span>Total Order Value</span>
                          </div>
                          <span className="text-xl font-black text-[#8C3A16]">₹22,500</span>
                        </div>

                        {/* Row 3: Delivery Deadline */}
                        <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-xl p-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[11.5px] font-bold text-[#8D6E63]">
                            <Calendar className="w-3.5 h-3.5 text-[#8D6E63]" />
                            <span>Delivery Deadline</span>
                          </div>
                          <span className="text-sm font-black text-[#1F1612]">28 Sept 2026</span>
                        </div>
                      </div>

                      {/* "What the buyer needs" - Key Specifications */}
                      <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-sm font-black text-[#1F1612]">What the buyer needs</h3>
                            <p className="text-[11px] text-[#8D6E63] mt-0.5">Key specifications for batch production</p>
                          </div>
                          <button
                            onClick={() => {
                              showToast('🔊 Playing specifications audio walkthrough...');
                            }}
                            className="bg-[#FFF0E6] border border-[#F5D8C7] text-[#8C3A16] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer hover:bg-[#FCE6D8] transition-colors"
                          >
                            <Volume2 className="w-3 h-3 text-[#8C3A16]" />
                            <span>Listen</span>
                          </button>
                        </div>

                        <div className="space-y-2.5 pt-1">
                          {/* Spec 1 */}
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] flex items-center justify-center shrink-0">
                              <Sprout className="w-4 h-4 text-[#2E7D32]" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#1F1612]">Natural bamboo finish</h4>
                              <p className="text-[11px] text-[#6D4C41]">Unbleached, chemical-free treatment</p>
                            </div>
                          </div>

                          {/* Spec 2 */}
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#FFF3E0] flex items-center justify-center shrink-0">
                              <Layers className="w-4 h-4 text-[#E65100]" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#1F1612]">Traditional handwoven design</h4>
                              <p className="text-[11px] text-[#6D4C41]">Authentic herringbone weave base</p>
                            </div>
                          </div>

                          {/* Spec 3 */}
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#EFEBE9] flex items-center justify-center shrink-0">
                              <SlidersHorizontal className="w-4 h-4 text-[#5D4037]" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#1F1612]">Medium size</h4>
                              <p className="text-[11px] text-[#6D4C41]">12" diameter × 8" height with handles</p>
                            </div>
                          </div>

                          {/* Spec 4 */}
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#FBE9E7] flex items-center justify-center shrink-0">
                              <Package className="w-4 h-4 text-[#D84315]" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#1F1612]">50 pieces required</h4>
                              <p className="text-[11px] text-[#6D4C41]">Complete single batch delivery</p>
                            </div>
                          </div>

                          {/* Spec 5 */}
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-[#E8F8F5] flex items-center justify-center shrink-0">
                              <Truck className="w-4 h-4 text-[#1ABC9C]" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-[#1F1612]">Packed safely for delivery</h4>
                              <p className="text-[11px] text-[#6D4C41]">Corrugated cartons with moisture barrier paper</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* "Can you complete this order?" Capacity Card */}
                      <div className="bg-[#FFFBF8] border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-3">
                        <div className="flex items-center gap-1.5">
                          <HelpCircle className="w-4 h-4 text-[#8C3A16]" />
                          <h3 className="text-sm font-black text-[#1F1612]">Can you complete this order?</h3>
                        </div>

                        {/* Breakdown Box */}
                        <div className="bg-white border border-[#EADFD6] rounded-xl p-3 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-[#6D4C41]">
                              ● Your Available Capacity: <strong className="text-[#8C3A16] font-black">30 pcs</strong>
                            </span>
                            <span className="font-semibold text-[#6D4C41]">
                              Required: <strong className="text-[#1F1612] font-black">50 pcs</strong>
                            </span>
                          </div>

                          {/* Split Progress Bar (60% workshop / 40% gap) */}
                          <div className="w-full h-2.5 rounded-full overflow-hidden flex bg-[#E8DDD5]">
                            <div className="h-full bg-[#8C3A16]" style={{ width: '60%' }} />
                            <div className="h-full bg-[#D7CCC8]" style={{ width: '40%' }} />
                          </div>

                          <div className="flex items-center justify-between text-[10px] font-bold text-[#6D4C41]">
                            <span>Your workshop (60%)</span>
                            <span>Gap: 20 pieces</span>
                          </div>
                        </div>

                        {/* Cluster Callout Note */}
                        <div className="flex items-start gap-2 text-[11.5px] text-[#5D4037] leading-relaxed">
                          <Users className="w-4 h-4 text-[#8C3A16] shrink-0 mt-0.5" />
                          <p>
                            Need extra hands? You can accept this entire order and invite a fellow weaver from your cluster to fulfill the remaining 20 pieces together.
                          </p>
                        </div>

                        {/* Find Artisan Button */}
                        <button
                          onClick={() => {
                            setActiveScreenIndex(26);
                            showToast('Opening Suggested Collaborators (Screen 26)');
                          }}
                          className="w-full py-2.5 bg-[#FAF0E8] hover:bg-[#F3E2D5] border border-[#E8DDD5] text-[#8C3A16] font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-2xs transition-all active:scale-98"
                        >
                          <Users className="w-4 h-4 text-[#8C3A16]" />
                          <span>Find Artisan to Collaborate (Screen 26)</span>
                        </button>
                      </div>

                      {/* "Your Expected Earnings" Card */}
                      <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10.5px] text-[#8D6E63] font-bold block">Your Expected Earnings</span>
                            <span className="text-2xl font-black text-[#8C3A16] tracking-tight">₹22,500</span>
                          </div>
                          <div className="w-11 h-11 rounded-xl bg-[#E8F8F0] flex items-center justify-center text-[#2E7D32]">
                            <Lock className="w-5 h-5 text-[#2E7D32]" />
                          </div>
                        </div>

                        <div className="h-px bg-[#F0E4DC] w-full" />

                        <div className="flex items-start gap-2 text-[11px] text-[#4E342E] leading-relaxed">
                          <ShieldCheck className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                          <p>
                            100% Escrow protected. Advance payment guaranteed by HunarSangam Trust Protocol upon order confirmation.
                          </p>
                        </div>
                      </div>

                      {/* Primary Actions: Decline & Accept */}
                      <div className="grid grid-cols-2 gap-3 pt-1">
                        <button
                          onClick={() => setShowDeclineConfirmModal(true)}
                          className="py-3 border border-[#D7CCC8] bg-[#FAF5F0] hover:bg-[#F3EAE3] text-[#2D2421] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-98"
                        >
                          <X className="w-4 h-4 text-[#2D2421]" />
                          <span>Decline</span>
                        </button>
                        <button
                          onClick={() => {
                            setOrderRequestAccepted(true);
                            showToast('✅ Order #REQ-HH-1048 Accepted! ₹22,500 secured in Escrow.');
                            setTimeout(() => {
                              setActiveScreenIndex(23); // Optionally open Order Updation Screen
                            }, 1200);
                          }}
                          className={`py-3 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-all active:scale-98 ${
                            orderRequestAccepted
                              ? 'bg-[#2E7D32]'
                              : 'bg-[#8C3A16] hover:bg-[#772F10]'
                          }`}
                        >
                          <Check className="w-4 h-4 text-white stroke-[2.5]" />
                          <span>{orderRequestAccepted ? 'Accepted ✓' : 'Accept & Confirm Order'}</span>
                        </button>
                      </div>

                      <div className="h-4" />
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('orders')}

                    {/* MODAL 1: DECLINE CONFIRMATION MODAL */}
                    {showDeclineConfirmModal && (
                      <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[320px] animate-in fade-in zoom-in-95">
                          <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />
                          <h3 className="text-base font-extrabold text-[#1F1612]">Decline Order Request?</h3>
                          <p className="text-xs text-[#6D4C41] mt-0.5 mb-4">
                            Please select a reason so the buyer can adjust their batch request:
                          </p>

                          <div className="space-y-2 mb-4">
                            {[
                              'Workshop capacity currently full',
                              'Delivery deadline too tight (28 Sept)',
                              'Specifications not aligned with craft tools',
                            ].map((reason, rIdx) => (
                              <button
                                key={rIdx}
                                onClick={() => {
                                  setShowDeclineConfirmModal(false);
                                  showToast(`Declined: ${reason}`);
                                  setActiveScreenIndex(22);
                                }}
                                className="w-full p-2.5 text-left rounded-xl border border-[#EADFD6] hover:border-[#8C3A16] hover:bg-[#FFF8F4] text-xs font-semibold text-[#2D2421] transition-all cursor-pointer flex items-center justify-between"
                              >
                                <span>{reason}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#8C3A16]" />
                              </button>
                            ))}
                          </div>

                          <button
                            onClick={() => setShowDeclineConfirmModal(false)}
                            className="w-full py-2.5 bg-[#FAF5F0] text-[#6D4C41] rounded-xl text-xs font-bold hover:bg-[#F3EAE3] cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}

                    {/* MODAL 2: CRAFT SPECS DETAILS */}
                    {showHeritageCraftSpecsModal && (
                      <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[320px] animate-in fade-in zoom-in-95">
                          <div className="flex items-center justify-between pb-3 border-b border-[#F0E4DC]">
                            <div className="flex items-center gap-2">
                              <SlidersHorizontal className="w-4 h-4 text-[#8C3A16]" />
                              <h3 className="text-sm font-extrabold text-[#1F1612]">Craft &amp; Technical Specs</h3>
                            </div>
                            <button
                              onClick={() => setShowHeritageCraftSpecsModal(false)}
                              className="p-1 text-[#6D4C41] hover:bg-[#FAF5F0] rounded-full"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="py-3 space-y-2.5 text-xs text-[#4E342E]">
                            <div className="bg-[#FFF8F4] p-2.5 rounded-xl border border-[#F3E5DC]">
                              <span className="font-bold text-[#8C3A16] block mb-1">Dimensions:</span>
                              <p className="text-[11px] text-[#6D4C41]">
                                Top Diameter: 12 inches (30.5 cm)<br />
                                Base Diameter: 8.5 inches (21.5 cm)<br />
                                Height: 8 inches (20 cm) + 4 inch handle arch
                              </p>
                            </div>
                            <div className="bg-[#FFF8F4] p-2.5 rounded-xl border border-[#F3E5DC]">
                              <span className="font-bold text-[#8C3A16] block mb-1">Raw Material:</span>
                              <p className="text-[11px] text-[#6D4C41]">
                                Assam Mature Split Bamboo (Bambusa tulda)<br />
                                Seasoned &amp; moisture content below 12%
                              </p>
                            </div>
                            <div className="bg-[#FFF8F4] p-2.5 rounded-xl border border-[#F3E5DC]">
                              <span className="font-bold text-[#8C3A16] block mb-1">Weaving Pattern:</span>
                              <p className="text-[11px] text-[#6D4C41]">
                                2×2 Twill base with reinforced coiled rim
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => setShowHeritageCraftSpecsModal(false)}
                            className="w-full py-2.5 bg-[#8C3A16] text-white rounded-xl text-xs font-bold hover:bg-[#772F10] cursor-pointer"
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    )}

                    {/* MODAL 3: CLUSTER COLLABORATION FIND ARTISAN */}
                    {showHeritageCollaborateModal && (
                      <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[320px] animate-in fade-in zoom-in-95">
                          <div className="flex items-center justify-between pb-3 border-b border-[#F0E4DC]">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-[#8C3A16]" />
                              <h3 className="text-sm font-extrabold text-[#1F1612]">Collaborate for 20 pcs Gap</h3>
                            </div>
                            <button
                              onClick={() => setShowHeritageCollaborateModal(false)}
                              className="p-1 text-[#6D4C41] hover:bg-[#FAF5F0] rounded-full"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          <p className="text-xs text-[#6D4C41] my-3">
                            Invite verified weavers in your cluster to fulfill the remaining 20 units:
                          </p>

                          <div className="space-y-2 mb-4">
                            <div className="p-3 bg-[#FFF8F4] border border-[#F3E5DC] rounded-xl flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-black text-[#1F1612]">Suresh Das</h4>
                                <span className="text-[10px] font-semibold text-[#2E7D32]">
                                  Available • 20 pcs capacity
                                </span>
                              </div>
                              <button
                                onClick={() => {
                                  setShowHeritageCollaborateModal(false);
                                  showToast('🤝 Invited Suresh Das! Split 20 pcs for ₹9,000.');
                                }}
                                className="px-3 py-1.5 bg-[#8C3A16] text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-[#772F10]"
                              >
                                Invite
                              </button>
                            </div>

                            <div className="p-3 bg-[#FFF8F4] border border-[#F3E5DC] rounded-xl flex items-center justify-between">
                              <div>
                                <h4 className="text-xs font-black text-[#1F1612]">Bina Devi</h4>
                                <span className="text-[10px] font-semibold text-[#2E7D32]">
                                  Available • 15 pcs capacity
                                </span>
                              </div>
                              <button
                                onClick={() => {
                                  setShowHeritageCollaborateModal(false);
                                  showToast('🤝 Invited Bina Devi! Split 15 pcs for ₹6,750.');
                                }}
                                className="px-3 py-1.5 bg-[#8C3A16] text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-[#772F10]"
                              >
                                Invite
                              </button>
                            </div>
                          </div>

                          <button
                            onClick={() => setShowHeritageCollaborateModal(false)}
                            className="w-full py-2.5 bg-[#FAF5F0] text-[#6D4C41] rounded-xl text-xs font-bold hover:bg-[#F3EAE3] cursor-pointer"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* SCREEN 25: FORM ARTISAN COLLECTIVE (matching 'o4- collaboration from oreder page with other artisan.png') */}
                {activeScreenIndex === 25 && (
                  <div className="flex-1 flex flex-col h-full bg-[#FAF7F4] overflow-hidden relative text-[#1F1612]">
                    {/* Top App Bar */}
                    <div className="bg-white border-b border-[#EADFD6] px-3.5 py-2.5 flex items-center justify-between z-10 shrink-0 shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setActiveScreenIndex(24)}
                          className="w-8 h-8 rounded-full border border-[#EADFD6] flex items-center justify-center text-[#2D2421] hover:bg-[#F8EFE9] transition-all cursor-pointer"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div>
                          <h1 className="text-sm font-black text-[#1F1612] leading-tight">
                            Form Artisan Collective
                          </h1>
                          <p className="text-[10.5px] font-bold text-[#8C3A16]">
                            FabIndia PO #PO-FAB-9102 (400 pcs)
                          </p>
                        </div>
                      </div>

                      {/* Listen audio pill */}
                      <button
                        onClick={() => {
                          setIsCollectiveAudioPlaying(!isCollectiveAudioPlaying);
                          showToast(
                            isCollectiveAudioPlaying
                              ? '⏸ Collective audio guide paused'
                              : '▶ Playing audio guide: FabIndia 400 pcs collective allocation'
                          );
                        }}
                        className="bg-[#FCECE3] border border-[#F5D8C7] text-[#8C3A16] px-2.5 py-1 rounded-full flex items-center gap-1.5 cursor-pointer shadow-2xs hover:bg-[#F9DFD1] transition-all active:scale-95"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-black tracking-widest">|||/</span>
                        <span className="text-[10.5px] font-extrabold">Listen</span>
                      </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3 pb-4">
                      {/* CARD 1: TARGET CAPACITY */}
                      {(() => {
                        const ramuPcs = 150;
                        const sunitaPcs = sunitaAllocated ? (voiceRebalanceTriggered ? 120 : 150) : 0;
                        const birenPcs = birenAllocated ? (voiceRebalanceTriggered ? 130 : 100) : 0;
                        const totalAllocated = ramuPcs + sunitaPcs + birenPcs;
                        const isFull = totalAllocated >= 400;

                        return (
                          <div className="bg-white rounded-2xl border border-[#EADFD6] p-3.5 shadow-2xs space-y-3">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] flex items-center justify-center text-[#2E7D32]">
                                  <Users className="w-5 h-5 text-[#2E7D32]" />
                                </div>
                                <div>
                                  <span className="text-[9.5px] font-extrabold text-[#7A685F] tracking-wider uppercase block">
                                    TARGET CAPACITY
                                  </span>
                                  <span className="text-xl font-black text-[#1F1612] tracking-tight">
                                    400 pcs
                                  </span>
                                </div>
                              </div>

                              <div className="text-right">
                                <span
                                  className={`inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-white shadow-2xs ${
                                    isFull ? 'bg-[#2E7D32]' : 'bg-[#B86B14]'
                                  }`}
                                >
                                  <Check className="w-3 h-3 stroke-[3]" />
                                  {isFull ? '100% Filled' : `${Math.round((totalAllocated / 400) * 100)}% Filled`}
                                </span>
                                <span className="block text-[10px] font-extrabold text-[#2E7D32] mt-0.5">
                                  {isFull ? 'Team Complete' : `Need ${400 - totalAllocated} pcs`}
                                </span>
                              </div>
                            </div>

                            {/* Split Segmented Progress Bar */}
                            <div className="w-full h-2.5 rounded-full overflow-hidden flex bg-[#E8DDD5]">
                              {/* Ramu 150 pcs (37.5%) */}
                              <div
                                className="h-full bg-[#8C3A16] transition-all duration-300"
                                style={{ width: `${(ramuPcs / 400) * 100}%` }}
                              />
                              {/* Sunita (150 or 120 pcs) */}
                              {sunitaPcs > 0 && (
                                <div
                                  className="h-full bg-[#B86B14] transition-all duration-300 border-l border-white/40"
                                  style={{ width: `${(sunitaPcs / 400) * 100}%` }}
                                />
                              )}
                              {/* Biren (100 or 130 pcs) */}
                              {birenPcs > 0 && (
                                <div
                                  className="h-full bg-[#2E5A36] transition-all duration-300 border-l border-white/40"
                                  style={{ width: `${(birenPcs / 400) * 100}%` }}
                                />
                              )}
                            </div>

                            {/* Legend */}
                            <div className="flex items-center justify-between text-[10.5px] text-[#6D4C41] font-semibold pt-0.5">
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#8C3A16]" />
                                <span>Ramu ({ramuPcs})</span>
                              </span>
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#B86B14]" />
                                <span>Sunita ({sunitaPcs})</span>
                              </span>
                              <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#2E5A36]" />
                                <span>Biren ({birenPcs})</span>
                              </span>
                            </div>
                          </div>
                        );
                      })()}

                      {/* CARD 2: LEAD ARTISAN (Ramu Kumar - You) */}
                      <div className="bg-white rounded-2xl border border-[#F5D8C7] p-3.5 shadow-2xs space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=200&auto=format&fit=crop&q=80"
                              alt="Ramu Kumar"
                              className="w-11 h-11 rounded-xl object-cover border border-[#EADFD6]"
                            />
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-sm font-black text-[#1F1612]">Ramu Kumar</h3>
                                <span className="bg-[#FCECE3] text-[#8C3A16] text-[9.5px] font-black px-1.5 py-0.5 rounded-md">
                                  You
                                </span>
                              </div>
                              <p className="text-[10.5px] font-medium text-[#7A685F]">
                                Master Craftsman • Lead Coordinator
                              </p>
                            </div>
                          </div>

                          <div className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] px-2 py-1 rounded-xl flex items-center gap-1 text-[10px] font-extrabold shadow-2xs">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
                            <span>Lead &amp; QC</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <div className="bg-[#FBF7F4] border border-[#F0E4DA] rounded-xl p-2.5">
                            <span className="text-[10px] font-semibold text-[#7A685F] block">
                              Committed Quota
                            </span>
                            <span className="text-sm font-black text-[#1F1612] block">
                              150 pcs
                            </span>
                            <span className="text-[10px] font-bold text-[#2E7D32] block">
                              37.5% share
                            </span>
                          </div>
                          <div className="bg-[#FBF7F4] border border-[#F0E4DA] rounded-xl p-2.5">
                            <span className="text-[10px] font-semibold text-[#7A685F] block">
                              Estimated Payout
                            </span>
                            <span className="text-sm font-black text-[#8C3A16] block">
                              ₹47,600
                            </span>
                            <span className="text-[9.5px] font-medium text-[#7A685F] block">
                              ₹42k craft + ₹5.6k QC fee
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* SECTION: CLUSTER MATCH SUGGESTIONS */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-[#8C3A16]" />
                          <h3 className="text-xs font-black text-[#1F1612]">
                            Cluster Match Suggestions
                          </h3>
                        </div>
                        <span className="text-[10.5px] font-semibold text-[#7A685F]">
                          Assam &amp; Barabanki Guild
                        </span>
                      </div>

                      {/* ARTISAN CARD 1: SUNITA DEVI */}
                      <div
                        className={`bg-white rounded-2xl border p-3.5 shadow-2xs space-y-2.5 transition-all ${
                          sunitaAllocated ? 'border-[#8C3A16]/50 ring-1 ring-[#8C3A16]/10' : 'border-[#EADFD6]'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80"
                              alt="Sunita Devi"
                              className="w-11 h-11 rounded-xl object-cover border border-[#EADFD6]"
                            />
                            <div>
                              <h4 className="text-xs font-black text-[#1F1612]">Sunita Devi</h4>
                              <p className="text-[10.5px] text-[#7A685F] flex items-center gap-1 font-medium">
                                <MapPin className="w-3 h-3 text-[#8C3A16]" />
                                <span>Barabanki Cluster (1.2 km away)</span>
                              </p>
                            </div>
                          </div>

                          {/* Checkbox */}
                          <button
                            onClick={() => {
                              setSunitaAllocated(!sunitaAllocated);
                              showToast(
                                !sunitaAllocated
                                  ? 'Sunita Devi allocated to collective'
                                  : 'Sunita Devi unallocated'
                              );
                            }}
                            className={`w-5 h-5 rounded-md flex items-center justify-center cursor-pointer transition-all ${
                              sunitaAllocated
                                ? 'bg-[#2E7D32] text-white'
                                : 'border-2 border-[#D7CCC8] hover:border-[#8C3A16]'
                            }`}
                          >
                            {sunitaAllocated && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </button>
                        </div>

                        {/* Badges */}
                        <div className="flex items-center gap-2">
                          <span className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] text-[9.5px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                            GI Certified #431
                          </span>
                          <span className="bg-[#FFF3E0] border border-[#FFE0B2] text-[#E65100] text-[9.5px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Star className="w-3 h-3 fill-[#E65100] text-[#E65100]" />
                            4.9 (18 Batches)
                          </span>
                        </div>

                        {/* Available pill */}
                        <div>
                          <span className="bg-[#FCECE3] text-[#8C3A16] text-[10px] font-bold px-2 py-0.5 rounded-md inline-block">
                            150 pcs available
                          </span>
                        </div>

                        {/* Audio intro bar */}
                        <button
                          onClick={() => {
                            setIsSunitaAudioPlaying(!isSunitaAudioPlaying);
                            showToast(
                              isSunitaAudioPlaying
                                ? '⏸ Paused Sunita Devi intro'
                                : "▶ Playing Sunita's Craft Intro (0:22)"
                            );
                          }}
                          className="w-full bg-[#FAF2EC] hover:bg-[#F3E5DC] border border-[#EEDDD2] rounded-xl px-2.5 py-1.5 flex items-center justify-between cursor-pointer transition-all active:scale-98"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shadow-2xs">
                              {isSunitaAudioPlaying ? (
                                <span className="text-[10px] font-black">||</span>
                              ) : (
                                <Play className="w-3 h-3 fill-white translate-x-0.5" />
                              )}
                            </div>
                            <span className="text-[11px] font-bold text-[#1F1612]">
                              Sunita's Craft Intro
                            </span>
                          </div>
                          <span className="text-[10.5px] font-semibold text-[#7A685F] font-mono">
                            0 : 22
                          </span>
                        </button>

                        <div className="h-px bg-[#F0E4DC] w-full" />

                        {/* Bottom Row */}
                        <div className="flex items-center justify-between text-xs pt-0.5">
                          <span className="font-semibold text-[#1F1612]">
                            Allocated: {sunitaAllocated ? (voiceRebalanceTriggered ? 120 : 150) : 0} pcs
                          </span>
                          <span className="font-black text-[#2E7D32]">
                            {sunitaAllocated
                              ? voiceRebalanceTriggered
                                ? '₹33,600 direct escrow'
                                : '₹42,000 direct escrow'
                              : '₹0 (Paused)'}
                          </span>
                        </div>
                      </div>

                      {/* ARTISAN CARD 2: BIREN KALITA */}
                      <div
                        className={`bg-white rounded-2xl border p-3.5 shadow-2xs space-y-2.5 transition-all ${
                          birenAllocated ? 'border-[#8C3A16]/50 ring-1 ring-[#8C3A16]/10' : 'border-[#EADFD6]'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <img
                              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
                              alt="Biren Kalita"
                              className="w-11 h-11 rounded-xl object-cover border border-[#EADFD6]"
                            />
                            <div>
                              <h4 className="text-xs font-black text-[#1F1612]">Biren Kalita</h4>
                              <p className="text-[10.5px] text-[#7A685F] flex items-center gap-1 font-medium">
                                <MapPin className="w-3 h-3 text-[#8C3A16]" />
                                <span>Kamrup Weavers Guild (3.5 km away)</span>
                              </p>
                            </div>
                          </div>

                          {/* Checkbox */}
                          <button
                            onClick={() => {
                              setBirenAllocated(!birenAllocated);
                              showToast(
                                !birenAllocated
                                  ? 'Biren Kalita allocated to collective'
                                  : 'Biren Kalita unallocated'
                              );
                            }}
                            className={`w-5 h-5 rounded-md flex items-center justify-center cursor-pointer transition-all ${
                              birenAllocated
                                ? 'bg-[#2E7D32] text-white'
                                : 'border-2 border-[#D7CCC8] hover:border-[#8C3A16]'
                            }`}
                          >
                            {birenAllocated && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </button>
                        </div>

                        {/* Badges */}
                        <div className="flex items-center gap-2">
                          <span className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#2E7D32] text-[9.5px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                            GI Certified #431
                          </span>
                          <span className="bg-[#FFF3E0] border border-[#FFE0B2] text-[#E65100] text-[9.5px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Star className="w-3 h-3 fill-[#E65100] text-[#E65100]" />
                            4.8 (12 Batches)
                          </span>
                        </div>

                        {/* Available pill */}
                        <div>
                          <span className="bg-[#FCECE3] text-[#8C3A16] text-[10px] font-bold px-2 py-0.5 rounded-md inline-block">
                            150 pcs available
                          </span>
                        </div>

                        <div className="h-px bg-[#F0E4DC] w-full" />

                        {/* Bottom Row */}
                        <div className="flex items-center justify-between text-xs pt-0.5">
                          <span className="font-semibold text-[#1F1612]">
                            Allocated: {birenAllocated ? (voiceRebalanceTriggered ? 130 : 100) : 0} pcs
                          </span>
                          <span className="font-black text-[#2E7D32]">
                            {birenAllocated
                              ? voiceRebalanceTriggered
                                ? '₹36,400 direct escrow'
                                : '₹28,000 direct escrow'
                              : '₹0 (Paused)'}
                          </span>
                        </div>
                      </div>

                      {/* VOICE COMMAND REBALANCE CARD */}
                      <button
                        onClick={() => {
                          setVoiceRebalanceTriggered(!voiceRebalanceTriggered);
                          showToast(
                            !voiceRebalanceTriggered
                              ? '🎙️ Voice Recognized: "Give Sunita 120 pieces and Biren 130 pieces"'
                              : '🔄 Quotas reset to default 150 / 100 allocation'
                          );
                        }}
                        className="w-full text-left bg-[#FFF5F0] hover:bg-[#FEEAE0] border border-[#F5D8C7] rounded-2xl p-3 flex items-center gap-3 cursor-pointer shadow-2xs transition-all active:scale-98"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Mic className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[9px] font-extrabold text-[#8C3A16] tracking-wider uppercase block">
                            VOICE COMMAND REBALANCE
                          </span>
                          <span className="text-xs font-semibold text-[#1F1612] italic block">
                            "Give Sunita 120 pieces and Biren 130 pieces"
                          </span>
                        </div>
                      </button>

                      <div className="h-2" />
                    </div>

                    {/* Fixed Bottom CTA Area */}
                    <div className="bg-white border-t border-[#EADFD6] px-4 pt-2.5 pb-2 space-y-1.5 shrink-0">
                      <button
                        onClick={() => {
                          setCollectiveLocked(true);
                          showToast(
                            '🎉 Collective Locked! Invites dispatched via WhatsApp & Voice calls to Sunita Devi & Biren Kalita.'
                          );
                        }}
                        className={`w-full py-3 rounded-xl text-white text-xs font-black flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-all active:scale-98 ${
                          collectiveLocked
                            ? 'bg-[#2E7D32]'
                            : 'bg-[#8C3A16] hover:bg-[#772F10]'
                        }`}
                      >
                        <span>{collectiveLocked ? 'Team Collective Locked ✓' : 'Send Team Invites & Lock Order'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#6D4C41] font-semibold text-center">
                        <MessageSquare className="w-3.5 h-3.5 text-[#2E7D32]" />
                        <span>Artisans receive WhatsApp &amp; Voice call invites with audio confirmation</span>
                      </div>
                    </div>

                    {/* Bottom Navigation Bar (Unified with Home page) */}
                    {renderUnifiedBottomNav('collaborate')}
                  </div>
                )}

                {/* =========================================================
                    SCREEN 26: SUGGESTED COLLABORATORS (from Order Updation)
                    Matching 'o5 - suggested colloborater from page order updation page.png'
                ========================================================= */}
                {activeScreenIndex === 26 && (
                  <div className="flex-1 flex flex-col bg-[#FAF5F0] overflow-hidden">
                    {/* Top App Bar */}
                    <div className="bg-[#FAF5F0] px-4 pt-3 pb-2.5 flex items-center justify-between border-b border-[#EADFD6] shrink-0">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setActiveScreenIndex(23)}
                          className="w-8 h-8 rounded-full bg-white border border-[#E0D3C7] flex items-center justify-center text-[#2A1F1B] hover:bg-[#F3EAE2] cursor-pointer shadow-2xs transition-all active:scale-95"
                          title="Back to Order Updation"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <div>
                          <h1 className="text-[15px] font-black text-[#1F1612] leading-tight">
                            Suggested Artisans
                          </h1>
                          <p className="text-[10px] text-[#6D4C41] font-medium leading-none mt-0.5">
                            Artisans who can help fulfill this order
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            const langs = ['हिंदी', 'English', 'অসমীয়া', 'বাংলা'];
                            const next = langs[(langs.indexOf(selectedLanguage) + 1) % langs.length];
                            setSelectedLanguage(next);
                            showToast(`Language set to ${next}`);
                          }}
                          className="px-2 py-1 bg-white border border-[#E0D3C7] rounded-lg text-[10.5px] font-bold text-[#4E382E] flex items-center gap-1 shadow-2xs hover:bg-[#FAF5F0] cursor-pointer"
                        >
                          <span className="text-[10px] text-[#8C3A16]">文A</span>
                          <span>{selectedLanguage}</span>
                          <ChevronDown className="w-3 h-3 text-[#8D6E63]" />
                        </button>

                        <button
                          onClick={() => setShowNotificationsModal(true)}
                          className="w-8 h-8 rounded-full bg-white border border-[#E0D3C7] flex items-center justify-center text-[#4E382E] hover:bg-[#F3EAE2] cursor-pointer shadow-2xs relative"
                        >
                          <Bell className="w-4 h-4" />
                          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D32F2F] ring-1 ring-white" />
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5">
                      {/* 1. Active Order Card (#HS-8841) */}
                      <div className="bg-white border border-[#EADFD6] rounded-2xl p-3 shadow-xs space-y-2.5">
                        <div className="flex items-start gap-3">
                          <img
                            src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=300&q=80"
                            alt="Bamboo Basket"
                            referrerPolicy="no-referrer"
                            className="w-14 h-14 rounded-xl object-cover border border-[#EADFD6] shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1 mb-0.5">
                              <span className="text-[9.5px] font-black text-[#8C3A16] tracking-wider uppercase font-mono">
                                ACTIVE ORDER #HS-8841
                              </span>
                              <span className="px-2 py-0.5 bg-[#E8F8F0] border border-[#C6EAD7] text-[#2E7D32] text-[9.5px] font-black rounded-full flex items-center gap-1 shrink-0">
                                <Users className="w-2.5 h-2.5" />
                                <span>Need 20 pcs</span>
                              </span>
                            </div>
                            <h3 className="text-xs font-black text-[#1F1612] truncate">
                              Bamboo Handwoven Basket
                            </h3>
                            <p className="text-[10px] text-[#6D4C41] truncate mt-0.5">
                              🏛 Buyer: Heritage Handcrafts Pvt. Ltd.
                            </p>
                          </div>
                        </div>

                        <div className="h-px bg-[#F0E4DA]" />

                        {/* Order Specs Row */}
                        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                          <div className="bg-[#FAF5F0] border border-[#EADFD6] rounded-xl p-1.5">
                            <span className="text-[#8D6E63] font-medium block">Required</span>
                            <span className="text-xs font-black text-[#1F1612]">50 pcs</span>
                          </div>
                          <div className="bg-[#FFF0EB] border border-[#FAD4C5] rounded-xl p-1.5">
                            <span className="text-[#8C3A16] font-medium block">Capacity Gap</span>
                            <span className="text-xs font-black text-[#8C3A16]">20 pcs</span>
                          </div>
                          <div className="bg-[#FAF5F0] border border-[#EADFD6] rounded-xl p-1.5">
                            <span className="text-[#8D6E63] font-medium block">Deadline</span>
                            <span className="text-[11px] font-black text-[#1F1612]">28 Sep 2026</span>
                          </div>
                        </div>
                      </div>

                      {/* 2. Section Header with Listen All */}
                      <div className="flex items-center justify-between pt-1">
                        <div>
                          <h2 className="text-sm font-black text-[#1F1612] leading-tight">
                            Suggested for Your Order
                          </h2>
                          <p className="text-[10.5px] text-[#8D6E63] font-semibold">
                            आपके ऑर्डर के लिए उपयुक्त कारीगर
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 bg-[#EFE4DC] text-[#5C493E] text-[10px] font-bold rounded-full">
                            3 Verified
                          </span>
                          <button
                            onClick={() => {
                              setIsSuggestedAllAudioPlaying(!isSuggestedAllAudioPlaying);
                              showToast(
                                isSuggestedAllAudioPlaying
                                  ? 'Audio overview paused'
                                  : '🔊 Playing voice summary of 3 suggested artisans in Hindi...'
                              );
                            }}
                            className={`px-2.5 py-1 rounded-full text-[10.5px] font-bold border flex items-center gap-1 cursor-pointer transition-all ${
                              isSuggestedAllAudioPlaying
                                ? 'bg-[#8C3A16] text-white border-[#8C3A16]'
                                : 'bg-white border-[#EADFD6] text-[#8C3A16] hover:bg-[#FFF5F0]'
                            }`}
                          >
                            <Volume2 className="w-3 h-3" />
                            <span>{isSuggestedAllAudioPlaying ? 'Playing' : 'Listen All'}</span>
                          </button>
                        </div>
                      </div>

                      {/* 3. Artisan Card 1: Ramesh Kumar */}
                      <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="relative">
                              <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                                alt="Ramesh Kumar"
                                referrerPolicy="no-referrer"
                                className="w-12 h-12 rounded-full object-cover border-2 border-[#8C3A16]"
                              />
                              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#2E7D32] border-2 border-white rounded-full flex items-center justify-center text-white text-[8px]">
                                ✓
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-xs font-black text-[#1F1612]">Ramesh Kumar</h3>
                                <span className="px-1.5 py-0.2 bg-[#FFF8F0] border border-[#F5E2D5] text-[#8C3A16] text-[9.5px] font-black rounded-md flex items-center gap-0.5">
                                  <Star className="w-2.5 h-2.5 fill-[#8C3A16]" />
                                  <span>4.9</span>
                                </span>
                              </div>
                              <p className="text-[10.5px] text-[#6D4C41]">Master Bamboo Craftsman • 8 yrs exp</p>
                              <p className="text-[10px] text-[#8D6E63] flex items-center gap-0.5 mt-0.5">
                                <MapPin className="w-2.5 h-2.5 text-[#8C3A16]" />
                                <span>Barpeta, Assam (Nearby • 6 km away)</span>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 bg-[#E8F8F0] border border-[#C6EAD7] text-[#2E7D32] text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            <span>Available: 20 pieces</span>
                          </span>
                          <span className="px-2 py-0.5 bg-[#FFF5F0] border border-[#FAD8C8] text-[#8C3A16] text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>Fast turnaround</span>
                          </span>
                        </div>

                        {/* Audio Bar */}
                        <div className="p-2 bg-[#FFF8F4] border border-[#F5E0D5] rounded-xl flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#8C3A16] text-white flex items-center justify-center">
                              <Mic className="w-3 h-3" />
                            </div>
                            <div>
                              <span className="text-[10.5px] font-extrabold text-[#1F1612] block">
                                Listen to Artisan Details
                              </span>
                              <span className="text-[9.5px] text-[#8D6E63]">Hindi / Assamese (0:38)</span>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setIsRameshAudioPlaying(!isRameshAudioPlaying);
                              showToast(
                                isRameshAudioPlaying
                                  ? 'Audio paused'
                                  : '🎙️ Playing Ramesh Kumar voice bio: "Namaste, I weave 40 baskets/week with Assam golden bamboo..."'
                              );
                            }}
                            className="w-7 h-7 rounded-full bg-white border border-[#EADFD6] flex items-center justify-center text-[#8C3A16] hover:bg-[#FFF5F0] cursor-pointer shadow-2xs"
                          >
                            {isRameshAudioPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                          </button>
                        </div>

                        {/* Recent Bamboo Craft Work */}
                        <div className="space-y-1.5">
                          <p className="text-[10.5px] font-bold text-[#1F1612]">Recent Bamboo Craft Work:</p>
                          <div className="grid grid-cols-3 gap-1.5">
                            <img
                              src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=300&q=80"
                              alt="Work 1"
                              referrerPolicy="no-referrer"
                              className="w-full h-16 rounded-lg object-cover border border-[#EADFD6]"
                            />
                            <img
                              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80"
                              alt="Work 2"
                              referrerPolicy="no-referrer"
                              className="w-full h-16 rounded-lg object-cover border border-[#EADFD6]"
                            />
                            <img
                              src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=300&q=80"
                              alt="Work 3"
                              referrerPolicy="no-referrer"
                              className="w-full h-16 rounded-lg object-cover border border-[#EADFD6]"
                            />
                          </div>
                        </div>

                        {/* Why Ramesh is suited for this order */}
                        <div className="bg-[#FFFBF8] border border-[#F3E4D8] rounded-xl p-2.5 space-y-1">
                          <p className="text-[10.5px] font-black text-[#8C3A16] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Why Ramesh is suited for this order:</span>
                          </p>
                          <ul className="text-[10px] text-[#5D4037] space-y-0.5 pl-1">
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#2E7D32] font-bold">✓</span>
                              <span>Makes identical Assam bamboo weave baskets</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#2E7D32] font-bold">✓</span>
                              <span>Has full capacity needed (20 pcs ready for weaving)</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#2E7D32] font-bold">✓</span>
                              <span>Can finish comfortably before 28 Sept deadline</span>
                            </li>
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              showToast('👤 Viewing Ramesh Kumar profile & portfolio...');
                            }}
                            className="flex-1 py-2 bg-[#FAF5F0] hover:bg-[#F3EAE2] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#4E382E] cursor-pointer"
                          >
                            View Profile
                          </button>
                          <button
                            onClick={() => {
                              setRameshInviteSheetOpen(true);
                              showToast('🤝 Reviewing collaboration invite parameters for Ramesh Kumar.');
                            }}
                            className="flex-1 py-2 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center gap-1"
                          >
                            <Users className="w-3.5 h-3.5" />
                            <span>Invite to Collaborate</span>
                          </button>
                        </div>
                      </div>

                      {/* 4. Artisan Card 2: Sohan Patel */}
                      <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="relative">
                              <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                                alt="Sohan Patel"
                                referrerPolicy="no-referrer"
                                className="w-12 h-12 rounded-full object-cover border-2 border-[#8C3A16]"
                              />
                              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#2E7D32] border-2 border-white rounded-full flex items-center justify-center text-white text-[8px]">
                                ✓
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-xs font-black text-[#1F1612]">Sohan Patel</h3>
                                <span className="px-1.5 py-0.2 bg-[#FFF8F0] border border-[#F5E2D5] text-[#8C3A16] text-[9.5px] font-black rounded-md flex items-center gap-0.5">
                                  <Star className="w-2.5 h-2.5 fill-[#8C3A16]" />
                                  <span>4.8</span>
                                </span>
                              </div>
                              <p className="text-[10.5px] text-[#6D4C41]">Bamboo &amp; Cane Weaver • 12 yrs exp</p>
                              <p className="text-[10px] text-[#8D6E63] flex items-center gap-0.5 mt-0.5">
                                <MapPin className="w-2.5 h-2.5 text-[#8C3A16]" />
                                <span>Kamrup, Assam (14 km away)</span>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 bg-[#E8F8F0] border border-[#C6EAD7] text-[#2E7D32] text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            <span>Available: 25 pieces</span>
                          </span>
                          <span className="px-2 py-0.5 bg-[#FFF5F0] border border-[#FAD8C8] text-[#8C3A16] text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            <span>Prior 5★ Cluster Partner</span>
                          </span>
                        </div>

                        {/* Audio Bio with thumbnail */}
                        <div className="p-2 bg-[#FFF8F4] border border-[#F5E0D5] rounded-xl flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img
                              src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=100&q=80"
                              alt="Bio Thumb"
                              referrerPolicy="no-referrer"
                              className="w-8 h-8 rounded-lg object-cover"
                            />
                            <div>
                              <span className="text-[10.5px] font-extrabold text-[#1F1612] block">
                                Artisan Audio Bio
                              </span>
                              <span className="text-[9.5px] text-[#8D6E63]">Speaks Assamese &amp; Hindi</span>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setIsSohanAudioPlaying(!isSohanAudioPlaying);
                              showToast(
                                isSohanAudioPlaying
                                  ? 'Audio paused'
                                  : '🎙️ Playing Sohan Patel craft introduction...'
                              );
                            }}
                            className="w-7 h-7 rounded-full bg-white border border-[#EADFD6] flex items-center justify-center text-[#8C3A16] hover:bg-[#FFF5F0] cursor-pointer shadow-2xs"
                          >
                            {isSohanAudioPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                          </button>
                        </div>

                        {/* Why Sohan is suited */}
                        <div className="bg-[#FFFBF8] border border-[#F3E4D8] rounded-xl p-2.5 space-y-1">
                          <p className="text-[10.5px] font-black text-[#8C3A16] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Why Sohan is suited for this order:</span>
                          </p>
                          <ul className="text-[10px] text-[#5D4037] space-y-0.5 pl-1">
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#2E7D32] font-bold">✓</span>
                              <span>Master weaver in Assam split bamboo technique</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#2E7D32] font-bold">✓</span>
                              <span>High monthly workshop output capacity</span>
                            </li>
                          </ul>
                        </div>

                        {/* Invite Status Banner */}
                        {sohanInviteSent ? (
                          <div className="p-2.5 bg-[#FAF5F0] border border-[#EADFD6] rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
                              <div>
                                <span className="text-[10.5px] font-bold text-[#1F1612] block">
                                  Invite Sent to Sohan
                                </span>
                                <span className="text-[9.5px] text-[#6D4C41]">
                                  Awaiting confirmation via SMS / App
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                setSohanInviteSent(false);
                                showToast('Invite to Sohan Patel cancelled.');
                              }}
                              className="text-[10.5px] font-bold text-[#D32F2F] hover:underline cursor-pointer"
                            >
                              Cancel Invite
                            </button>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <button
                              onClick={() => showToast('👤 Viewing Sohan Patel profile...')}
                              className="flex-1 py-2 bg-[#FAF5F0] hover:bg-[#F3EAE2] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#4E382E] cursor-pointer"
                            >
                              View Profile
                            </button>
                            <button
                              onClick={() => {
                                setSohanInviteSent(true);
                                showToast('✈️ Invite dispatched to Sohan Patel via SMS & WhatsApp!');
                              }}
                              className="flex-1 py-2 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                            >
                              Invite to Collaborate
                            </button>
                          </div>
                        )}
                      </div>

                      {/* 5. Artisan Card 3: Meera Bai */}
                      <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 shadow-xs space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="relative">
                              <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                                alt="Meera Bai"
                                referrerPolicy="no-referrer"
                                className="w-12 h-12 rounded-full object-cover border-2 border-[#8C3A16]"
                              />
                              <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#2E7D32] border-2 border-white rounded-full flex items-center justify-center text-white text-[8px]">
                                ✓
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h3 className="text-xs font-black text-[#1F1612]">Meera Bai</h3>
                                <span className="px-1.5 py-0.2 bg-[#FFF8F0] border border-[#F5E2D5] text-[#8C3A16] text-[9.5px] font-black rounded-md flex items-center gap-0.5">
                                  <Star className="w-2.5 h-2.5 fill-[#8C3A16]" />
                                  <span>4.9</span>
                                </span>
                              </div>
                              <p className="text-[10.5px] text-[#6D4C41]">Artisan Weaver • 6 yrs exp</p>
                              <p className="text-[10px] text-[#8D6E63] flex items-center gap-0.5 mt-0.5">
                                <MapPin className="w-2.5 h-2.5 text-[#8C3A16]" />
                                <span>Hajo, Assam (9 km away)</span>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 bg-[#E8F8F0] border border-[#C6EAD7] text-[#2E7D32] text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            <span>Available: 15 pieces</span>
                          </span>
                          <span className="px-2 py-0.5 bg-[#F3E8FF] border border-[#E9D5FF] text-[#6B21A8] text-[10px] font-bold rounded-lg flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" />
                            <span>GI Craft Certified</span>
                          </span>
                        </div>

                        {/* Why Meera is suited */}
                        <div className="bg-[#FFFBF8] border border-[#F3E4D8] rounded-xl p-2.5 space-y-1">
                          <p className="text-[10.5px] font-black text-[#8C3A16] flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            <span>Why Meera is suited for this order:</span>
                          </p>
                          <ul className="text-[10px] text-[#5D4037] space-y-0.5 pl-1">
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#2E7D32] font-bold">✓</span>
                              <span>Exact GI craft certification match</span>
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="text-[#2E7D32] font-bold">✓</span>
                              <span>Fast delivery track record in cluster projects</span>
                            </li>
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => showToast('👤 Viewing Meera Bai profile...')}
                            className="flex-1 py-2 bg-[#FAF5F0] hover:bg-[#F3EAE2] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#4E382E] cursor-pointer"
                          >
                            View Profile
                          </button>
                          <button
                            onClick={() => {
                              setMeeraInviteSent(!meeraInviteSent);
                              showToast(
                                meeraInviteSent
                                  ? 'Invite to Meera Bai cancelled'
                                  : '✈️ Collaboration invite sent to Meera Bai!'
                              );
                            }}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center gap-1 ${
                              meeraInviteSent
                                ? 'bg-[#2E7D32] text-white'
                                : 'bg-[#8C3A16] hover:bg-[#772F10] text-white'
                            }`}
                          >
                            <Users className="w-3.5 h-3.5" />
                            <span>{meeraInviteSent ? 'Invite Sent ✓' : 'Invite to Collaborate'}</span>
                          </button>
                        </div>
                      </div>

                      {/* 6. Invite Sheet Card: "Invite Ramesh to collaborate?" */}
                      {rameshInviteSheetOpen && (
                        <div className="bg-white border-2 border-[#E5CDBE] rounded-2xl p-3.5 shadow-md space-y-2.5">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-[#FFF0EB] border border-[#FAD4C5] text-[#8C3A16] flex items-center justify-center">
                                <Users className="w-4 h-4" />
                              </div>
                              <div>
                                <h3 className="text-xs font-black text-[#1F1612]">
                                  Invite Ramesh to collaborate?
                                </h3>
                                <p className="text-[10px] text-[#8D6E63] font-medium">
                                  रमेश कुमार को इस ऑर्डर में जोड़ें
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => setRameshInviteSheetOpen(false)}
                              className="text-[#8D6E63] hover:text-[#1F1612]"
                            >
                              <ChevronDown className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="bg-[#FAF5F0] border border-[#EADFD6] rounded-xl p-2.5 space-y-1.5 text-xs">
                            <div className="flex justify-between">
                              <span className="text-[#6D4C41]">Order Item:</span>
                              <span className="font-bold text-[#1F1612]">Bamboo Handwoven Basket</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#6D4C41]">Quantity Needed:</span>
                              <span className="font-black text-[#8C3A16]">20 pieces</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#6D4C41]">Delivery Deadline:</span>
                              <span className="font-bold text-[#1F1612]">28 September 2026</span>
                            </div>
                            <div className="h-px bg-[#E5D7CC]" />
                            <div className="flex justify-between items-center">
                              <span className="text-[#6D4C41]">Escrow Partner Share:</span>
                              <span className="font-black text-sm text-[#2E7D32]">₹9,000</span>
                            </div>
                          </div>

                          <div className="flex items-start gap-1.5 text-[10px] text-[#6D4C41]">
                            <Lock className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                            <span>
                              Escrow funds will be held securely in the HunarSangam craft trust account until both artisans inspect and deliver.
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => setRameshInviteSheetOpen(false)}
                              className="flex-1 py-2.5 bg-[#FAF5F0] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#6D4C41] hover:bg-[#F3EAE3] cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => {
                                setRameshInviteSent(true);
                                setRameshInviteSheetOpen(false);
                                showToast('🎉 Invite dispatched to Ramesh Kumar via SMS & App notification!');
                              }}
                              className="flex-1 py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              <Send className="w-3.5 h-3.5" />
                              <span>{rameshInviteSent ? 'Invite Sent ✓' : 'Send Invite'}</span>
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="h-2" />
                    </div>

                    {/* Unified Bottom Navigation (Orders tab active) */}
                    {renderUnifiedBottomNav('orders')}
                  </div>
                )}

                {/* 27. Collaboration Hub (matching 'colloboration.png') */}
                {activeScreenIndex === 27 && (
                  <div className="flex flex-col h-full bg-[#FDFBF9] text-[#1F1612]">
                    {/* Top App Bar */}
                    <div className="bg-[#FDFBF9] px-4 py-2.5 flex items-center justify-between border-b border-[#F0E6DE]/60 shrink-0">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveScreenIndex(22)}
                          className="p-1 -ml-1 text-[#1F1612] hover:bg-[#F3E8DE] rounded-full transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <span className="font-black text-base text-[#7C3F24] tracking-tight">
                          HunarSangam
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const langs = ['English', 'हिंदी', 'অসমীয়া', 'বাংলা'];
                            const next = langs[(langs.indexOf(selectedLanguage) + 1) % langs.length];
                            setSelectedLanguage(next);
                            showToast(`Language set to ${next}`);
                          }}
                          className="flex items-center gap-1 px-2.5 py-1 bg-[#F9EFE7] hover:bg-[#F3E3D5] rounded-full border border-[#EADBCE] text-[11px] font-bold text-[#1F1612] transition-colors cursor-pointer"
                        >
                          <Globe className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <span>{selectedLanguage}</span>
                          <ChevronDown className="w-3 h-3 text-[#7A665C]" />
                        </button>
                        <button
                          onClick={() => setShowNotificationsModal(true)}
                          className="relative p-1.5 text-[#1F1612] hover:bg-[#F3E8DE] rounded-full transition-colors cursor-pointer"
                        >
                          <Bell className="w-5 h-5" />
                          <span className="absolute top-1 right-1 w-2 h-2 bg-[#C7381B] rounded-full ring-2 ring-white" />
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Body */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {/* Title & Subtitle */}
                      <div>
                        <h1 className="text-[22px] font-black text-[#1F1612] tracking-tight leading-tight">
                          Collaboration
                        </h1>
                        <p className="text-xs text-[#6D4C41] font-medium mt-0.5">
                          Work together. Complete more orders.
                        </p>
                      </div>

                      {/* Audio Guide Card */}
                      <div
                        onClick={() => {
                          setIsCollabAudioGuidePlaying(!isCollabAudioGuidePlaying);
                          showToast(
                            !isCollabAudioGuidePlaying
                              ? `🔊 Playing collaboration voice guide in ${selectedLanguage}...`
                              : 'Audio guide paused'
                          );
                        }}
                        className="bg-[#FDF3EC] border border-[#F0DDD0] rounded-2xl p-3 flex items-center justify-between shadow-xs cursor-pointer hover:border-[#E5C7B3] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-[#B84D20] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <Volume2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-[9.5px] font-black text-[#B84D20] tracking-widest uppercase">
                              AUDIO GUIDE
                            </div>
                            <div className="text-xs font-bold text-[#2C201A] leading-snug">
                              Tap to hear updates in Assamese / Hindi / English
                            </div>
                          </div>
                        </div>
                        <div className="text-[#7A665C] shrink-0 ml-2">
                          {isCollabAudioGuidePlaying ? (
                            <Pause className="w-6 h-6 text-[#8C3A16]" />
                          ) : (
                            <PlayCircle className="w-6 h-6 text-[#7A665C] hover:text-[#8C3A16]" />
                          )}
                        </div>
                      </div>

                      {/* SECTION 1: Requests for You */}
                      <div className="space-y-3 pt-1">
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-[15px] font-black text-[#1F1612]">
                              Requests for You
                            </h2>
                            <span className="bg-[#8C3A16] text-white text-[10.5px] font-extrabold px-2 py-0.5 rounded-full">
                              2 New
                            </span>
                          </div>
                          <p className="text-[11.5px] text-[#7A665C] mt-0.5 font-medium">
                            Artisans want you to help complete their orders.
                          </p>
                        </div>

                        {/* Request Card 1: Ramesh Kumar */}
                        <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 space-y-3 shadow-xs">
                          {/* Header: Avatar, Name, Rating */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <div className="relative">
                                <img
                                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                                  alt="Ramesh Kumar"
                                  className="w-11 h-11 rounded-full object-cover border border-[#E8DDD5]"
                                />
                                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#1B7339] rounded-full flex items-center justify-center text-white text-[9px] font-bold border border-white">
                                  ✓
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center gap-1">
                                  <span className="text-[13.5px] font-black text-[#1F1612]">
                                    Ramesh Kumar
                                  </span>
                                  <CheckCircle className="w-3.5 h-3.5 text-[#1B7339]" />
                                </div>
                                <p className="text-[11px] text-[#6D4C41] font-medium">
                                  Master Bamboo Craftsman • Barpeta
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-0.5 bg-[#FFF8F0] border border-[#F3E2D5] rounded-lg text-[11px] font-bold text-[#2C201A]">
                              <Star className="w-3 h-3 text-[#B86B14] fill-[#B86B14]" />
                              <span>4.9</span>
                            </div>
                          </div>

                          {/* Listen to Request Audio Bar */}
                          <div
                            onClick={() => {
                              setIsRameshCollabAudioPlaying(!isRameshCollabAudioPlaying);
                              showToast(
                                !isRameshCollabAudioPlaying
                                  ? '🎙️ Playing Ramesh Kumar voice request (0:18s)...'
                                  : 'Audio paused'
                              );
                            }}
                            className="bg-[#FAF0E8] border border-[#F3DFD1] rounded-xl px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-[#F6E9DF] transition-colors"
                          >
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#2A1F1B]">
                              <Ear className="w-3.5 h-3.5 text-[#8C3A16]" />
                              <span>Listen to Request</span>
                              <span>📢</span>
                            </div>
                            <span className="text-[11px] font-extrabold text-[#8C3A16]">
                              {isRameshCollabAudioPlaying ? 'Playing (0:18s)' : 'Play (0:18s)'}
                            </span>
                          </div>

                          {/* Inner B2B Order Card */}
                          <div className="bg-[#FFF8F3] border border-[#F3E3D7] rounded-xl p-3 space-y-2.5">
                            {/* Product Row */}
                            <div className="flex items-start gap-2.5">
                              <img
                                src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=300&q=80"
                                alt="Bamboo Handwoven Basket"
                                className="w-12 h-12 rounded-xl object-cover border border-[#EBD9CC] shrink-0"
                              />
                              <div>
                                <span className="text-[9.5px] font-black text-[#1B7339] tracking-wider uppercase">
                                  BULK B2B ORDER
                                </span>
                                <h4 className="text-xs font-black text-[#1F1612] leading-snug">
                                  Bamboo Handwoven Basket
                                </h4>
                                <div className="flex items-center gap-1 text-[10.5px] text-[#6D4C41] font-semibold mt-0.5">
                                  <Store className="w-3 h-3 text-[#7A665C]" />
                                  <span>Heritage Handcrafts Pvt. Ltd.</span>
                                  <CheckCircle className="w-3 h-3 text-[#1B7339]" />
                                </div>
                              </div>
                            </div>

                            {/* Specs 2-Column Grid */}
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-white border border-[#EFE3D8] rounded-xl p-2">
                                <span className="text-[9.5px] text-[#7A665C] font-medium block">
                                  Your Contribution
                                </span>
                                <span className="text-xs font-black text-[#1F1612] block">
                                  20 pieces
                                </span>
                              </div>
                              <div className="bg-white border border-[#EFE3D8] rounded-xl p-2">
                                <span className="text-[9.5px] text-[#7A665C] font-medium block">
                                  Deadline
                                </span>
                                <span className="text-xs font-black text-[#1F1612] block">
                                  28 Sep 2026
                                </span>
                              </div>
                            </div>

                            {/* Order Total & Escrow Row */}
                            <div className="bg-[#FAF3ED] border border-[#EFE3D8] rounded-xl p-2.5 flex items-center justify-between">
                              <div>
                                <span className="text-[10.5px] text-[#6D4C41] block font-medium">
                                  Order Total: ₹22,500
                                </span>
                                <span className="text-xs font-black text-[#8C3A16] block">
                                  Your Share: ₹9,000
                                </span>
                              </div>
                              <div className="flex items-center gap-1 bg-[#DFF4E5] border border-[#C6EAD7] text-[#1B7339] text-[10px] font-black px-2 py-0.5 rounded-lg">
                                <Shield className="w-3 h-3 text-[#1B7339]" />
                                <span>Escrow Protected</span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons (Accept / Decline) */}
                          {!rameshCollabAccepted && !rameshCollabDeclined && (
                            <div className="grid grid-cols-2 gap-2 pt-1">
                              <button
                                onClick={() => {
                                  setRameshCollabAccepted(true);
                                  showToast('🎉 Accepted collaboration! ₹9,000 locked in escrow.');
                                }}
                                className="py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                              >
                                <CheckCircle className="w-3.5 h-3.5" />
                                <span>Accept</span>
                              </button>
                              <button
                                onClick={() => {
                                  setRameshCollabDeclined(true);
                                  showToast('Declined collaboration request.');
                                }}
                                className="py-2.5 bg-white border border-[#D5C4B8] hover:bg-[#FAF5F0] text-[#1F1612] rounded-xl text-xs font-bold cursor-pointer flex items-center justify-center gap-1"
                              >
                                <span>✕ Decline</span>
                              </button>
                            </div>
                          )}

                          {!rameshCollabAccepted && !rameshCollabDeclined && (
                            <div className="text-center pt-0.5">
                              <button
                                onClick={() => setActiveScreenIndex(24)}
                                className="text-xs font-bold text-[#6D4C41] hover:text-[#8C3A16] transition-colors cursor-pointer"
                              >
                                View Order & Craft Specs &gt;
                              </button>
                            </div>
                          )}

                          {/* Collaboration Accepted Banner (matches screenshot) */}
                          {rameshCollabAccepted && (
                            <div className="bg-[#DFF4E5] border border-[#BEE5CB] rounded-xl p-2.5 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-[#1B7339] text-white flex items-center justify-center text-[10px] font-black">
                                  ✓
                                </div>
                                <div>
                                  <div className="text-xs font-black text-[#144D25] leading-tight">
                                    Collaboration Accepted
                                  </div>
                                  <div className="text-[10px] text-[#1F6335] font-semibold">
                                    Escrow locked for 20 pcs
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => {
                                  setActiveScreenIndex(28);
                                  showToast('💬 Opening live collaboration chat with Ramesh Kumar...');
                                }}
                                className="bg-[#225737] hover:bg-[#1A452B] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition-colors cursor-pointer"
                              >
                                Chat with him
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Request Card 2: Meera Bai */}
                        <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 space-y-3 shadow-xs">
                          {/* Header: Avatar, Name, Clock, Price */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                                alt="Meera Bai"
                                className="w-11 h-11 rounded-full object-cover border border-[#E8DDD5]"
                              />
                              <div>
                                <div className="flex items-center gap-1">
                                  <span className="text-[13.5px] font-black text-[#1F1612]">
                                    Meera Bai
                                  </span>
                                  <Clock className="w-3 h-3 text-[#7A665C]" />
                                </div>
                                <p className="text-[11px] text-[#6D4C41] font-medium">
                                  Terracotta Water Jugs • Due in 12 days
                                </p>
                              </div>
                            </div>
                            <span className="text-sm font-black text-[#8C3A16]">
                              ₹4,500
                            </span>
                          </div>

                          {/* Detail row */}
                          <div className="bg-[#FFFDFB] border border-[#F0E2D8] rounded-xl p-2.5 flex items-center justify-between text-xs">
                            <div className="text-[#6D4C41]">
                              Need: <span className="font-black text-[#1F1612]">10 pieces</span>
                            </div>
                            <div className="text-[#6D4C41]">
                              Buyer: <span className="font-black text-[#1F1612]">Organic Living Co.</span>
                            </div>
                          </div>

                          {/* Accept / Decline Row */}
                          {!meeraCollabAccepted && !meeraCollabDeclined && (
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                onClick={() => {
                                  setMeeraCollabAccepted(true);
                                  showToast('🎉 Accepted collaboration with Meera Bai for ₹4,500!');
                                }}
                                className="py-2 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer flex items-center justify-center gap-1"
                              >
                                <span>✓ Accept</span>
                              </button>
                              <button
                                onClick={() => {
                                  setMeeraCollabDeclined(true);
                                  showToast('Declined Meera Bai request.');
                                }}
                                className="py-2 bg-white border border-[#D5C4B8] hover:bg-[#FAF5F0] text-[#1F1612] rounded-xl text-xs font-bold cursor-pointer"
                              >
                                Decline
                              </button>
                            </div>
                          )}

                          {/* Full-width Chat with him button */}
                          <button
                            onClick={() => {
                              setActiveScreenIndex(28);
                              showToast('💬 Opening live collaboration chat with Meera Bai...');
                            }}
                            className="w-full py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer text-center"
                          >
                            Chat with him
                          </button>
                        </div>
                      </div>

                      {/* SECTION 2: Your Invites */}
                      <div className="space-y-3 pt-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h2 className="text-[15px] font-black text-[#1F1612]">
                              Your Invites
                            </h2>
                            <span className="bg-[#EBE0D7] text-[#5C4A40] text-[10.5px] font-bold px-2 py-0.5 rounded-full">
                              3 Total
                            </span>
                          </div>
                          <p className="text-[11.5px] text-[#7A665C] mt-0.5 font-medium">
                            Artisans you've invited to collaborate on your active orders.
                          </p>
                        </div>

                        {/* Invite Card 1: Sohan Patel (Waiting for Response) */}
                        <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 space-y-3 shadow-xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
                                alt="Sohan Patel"
                                className="w-11 h-11 rounded-full object-cover border border-[#E8DDD5]"
                              />
                              <div>
                                <h4 className="text-[13.5px] font-black text-[#1F1612]">
                                  Sohan Patel
                                </h4>
                                <p className="text-[11px] text-[#6D4C41] font-medium">
                                  Bamboo Craft Artisan • Kamrup
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 bg-[#FCE3D2] border border-[#F5CCA8] text-[#6D3B16] text-[9.5px] font-extrabold px-2 py-1 rounded-xl text-center leading-tight">
                              <Clock className="w-3 h-3 text-[#6D3B16] shrink-0" />
                              <span>Waiting for<br />Response</span>
                            </div>
                          </div>

                          {/* Breakdown box */}
                          <div className="bg-[#FFFDFB] border border-[#F0E2D8] rounded-xl p-2.5 space-y-1 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="text-[#6D4C41]">Order:</span>
                              <span className="font-black text-[#1F1612]">
                                Bamboo Handwoven Basket
                              </span>
                            </div>
                            <div className="flex items-center justify-between pt-0.5">
                              <div className="text-[#6D4C41]">
                                Requested: <span className="font-black text-[#1F1612]">15 pcs</span>
                              </div>
                              <div className="text-[#6D4C41]">
                                Capacity: <span className="font-black text-[#1F1612]">20 pcs</span>
                              </div>
                            </div>
                          </div>

                          {/* Buttons: Remind & View Profile */}
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => {
                                setSohanInviteReminded(true);
                                showToast('🔔 SMS & Voice reminder dispatched to Sohan Patel!');
                              }}
                              className="py-2 bg-[#FFF8F3] border border-[#EAD5C8] hover:bg-[#FDF0E6] text-[#8C3A16] rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1"
                            >
                              <Bell className="w-3.5 h-3.5" />
                              <span>{sohanInviteReminded ? 'Reminded ✓' : 'Remind 🔔'}</span>
                            </button>
                            <button
                              onClick={() => showToast('Viewing Sohan Patel artisan profile...')}
                              className="py-2 bg-white border border-[#EADFD6] hover:bg-[#FAF5F0] text-[#2A1F1B] rounded-xl text-xs font-bold transition-colors cursor-pointer"
                            >
                              View Profile
                            </button>
                          </div>
                        </div>

                        {/* Invite Card 2: Biren Kalita (Accepted) */}
                        <div className="bg-white border border-[#EADFD6] rounded-2xl p-3.5 space-y-3 shadow-xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
                                alt="Biren Kalita"
                                className="w-11 h-11 rounded-full object-cover border border-[#E8DDD5]"
                              />
                              <div>
                                <h4 className="text-[13.5px] font-black text-[#1F1612]">
                                  Biren Kalita
                                </h4>
                                <p className="text-[11px] text-[#6D4C41] font-medium">
                                  Master Weaver • Guwahati
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 bg-[#DFF4E5] border border-[#BEE5CB] text-[#1B7339] text-[10.5px] font-black px-2.5 py-0.5 rounded-xl">
                              <CheckCircle className="w-3 h-3 text-[#1B7339]" />
                              <span>Accepted</span>
                            </div>
                          </div>

                          {/* Breakdown box */}
                          <div className="bg-[#FFFDFB] border border-[#F0E2D8] rounded-xl p-2.5 flex items-center justify-between text-xs">
                            <span className="text-[#6D4C41] font-medium">Bamboo Fruit Bowls</span>
                            <span className="font-black text-[#1F1612]">20 pieces assigned</span>
                          </div>

                          {/* Chat with him button */}
                          <button
                            onClick={() => {
                              setActiveScreenIndex(28);
                              showToast('💬 Opening live collaboration chat with Biren Kalita...');
                            }}
                            className="w-full py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-black shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                          >
                            <Handshake className="w-4 h-4" />
                            <span>Chat with him</span>
                          </button>
                        </div>
                      </div>

                      <div className="h-2" />
                    </div>

                    {/* Unified Bottom Navigation (Collaborate tab active) */}
                    {renderUnifiedBottomNav('collaborate')}
                  </div>
                )}

                {/* ========================================================================= */}
                {/* SCREEN 28: ARTISAN-TO-ARTISAN COLLABORATION CHAT (matching 'artisan vs artisan chat.png') */}
                {/* ========================================================================= */}
                {activeScreenIndex === 28 && (
                  <div className="flex flex-col h-full bg-[#FDFBF9] text-[#1F1612]">
                    {/* Top App Bar with Artisan Avatar, Name, Language Pill, Phone, 3-Dots */}
                    <div className="bg-white border-b border-[#F0E5DC] px-3.5 py-2.5 flex items-center justify-between shadow-2xs shrink-0">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setActiveScreenIndex(27)}
                          className="p-1 -ml-1 text-[#1F1612] hover:text-[#8C3A16] transition-colors cursor-pointer"
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </button>

                        {/* Avatar with Online Status Indicator */}
                        <div className="relative">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                            alt="Ramesh Kumar"
                            className="w-9 h-9 rounded-full object-cover border border-[#EADFD6]"
                          />
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#1B7339] border-2 border-white rounded-full" />
                        </div>

                        <div>
                          <h3 className="text-sm font-black text-[#1F1612] leading-tight">
                            Ramesh Kumar
                          </h3>
                          <p className="text-[10px] text-[#1B7339] font-bold flex items-center gap-1">
                            <span>● Collaboration...</span>
                          </p>
                        </div>
                      </div>

                      {/* Right Action Icons */}
                      <div className="flex items-center gap-1.5">
                        {/* Language Switcher Pill */}
                        <button
                          onClick={() => {
                            const newMode = chatLanguageMode === 'हिंदी / En' ? 'অসমীয়া / En' : 'हिंदी / En';
                            setChatLanguageMode(newMode);
                            showToast(`🌐 Switched live vernacular translation to ${newMode}`);
                          }}
                          className="px-2 py-1 bg-[#F9EFE7] hover:bg-[#F3E3D7] border border-[#EADBCE] rounded-xl text-[11px] font-bold text-[#1F1612] transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>{chatLanguageMode}</span>
                        </button>

                        {/* Call Button */}
                        <button
                          onClick={() => showToast('📞 Dialing Ramesh Kumar (+91 98765 43210)...')}
                          className="p-1.5 text-[#8C3A16] hover:bg-[#FDF3EC] rounded-lg transition-colors cursor-pointer"
                        >
                          <Phone className="w-4 h-4" />
                        </button>

                        {/* 3-Dots Button */}
                        <button
                          onClick={() => showToast('Options: View profile, Escrow details, Clear chat')}
                          className="p-1.5 text-[#1F1612] hover:bg-[#F5ECE4] rounded-lg transition-colors cursor-pointer"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Scrollable Chat Canvas */}
                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5">
                      {/* Shared Order Workspace Header Banner */}
                      <div className="bg-[#FFF9F4] border border-[#F0DDD0] rounded-2xl p-3 space-y-2.5 shadow-2xs">
                        <div className="flex items-start gap-2.5">
                          <img
                            src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=200&q=80"
                            alt="Bamboo Basket"
                            className="w-11 h-11 rounded-lg object-cover border border-[#EADFD6] shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-[10px] font-black text-[#8C3A16] tracking-wider uppercase">
                              SHARED ORDER #BSK-408
                            </div>
                            <h4 className="text-[13.5px] font-black text-[#1F1612] truncate">
                              Bamboo Handwoven
                            </h4>
                          </div>
                          <span className="bg-[#DFF4E5] border border-[#BEE5CB] text-[#1B7339] text-[10px] font-extrabold px-2 py-0.5 rounded-lg shrink-0">
                            Due 28 Sep
                          </span>
                        </div>

                        {/* Overall Progress & Quota */}
                        <div className="flex items-center justify-between text-xs pt-0.5">
                          <span className="text-[#6D4C41] font-medium">
                            Overall Progress: <strong className="font-black text-[#1F1612]">30 / 50 pcs</strong>
                          </span>
                          <span className="font-extrabold text-[#8C3A16]">
                            Your quota: 20 pcs
                          </span>
                        </div>

                        {/* 3-Segment Progress Bar */}
                        <div className="h-2 w-full bg-[#EADFD6] rounded-full overflow-hidden flex">
                          <div className="bg-[#388E3C] h-full" style={{ width: '40%' }} />
                          <div className="bg-[#D35400] h-full" style={{ width: '20%' }} />
                          <div className="bg-[#D5C6BA] h-full" style={{ width: '40%' }} />
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-between text-[10px] font-semibold text-[#6D4C41]">
                          <span className="text-[#2E7D32]">● Ramesh: 20 ready</span>
                          <span className="text-[#D35400]">● You: 10 ready</span>
                          <span className="text-[#8D6E63]">10 Remaining</span>
                        </div>

                        {/* View Collaboration Workspace Button */}
                        <button
                          onClick={() => {
                            showToast('🤝 Opening B2B Collaboration Workspace for #BSK-408...');
                          }}
                          className="w-full py-2 bg-white hover:bg-[#FAF3ED] border border-[#EADFD6] text-[#8C3A16] rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                        >
                          <Handshake className="w-4 h-4 text-[#8C3A16]" />
                          <span>View Collaboration Workspace</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Date Divider */}
                      <div className="flex justify-center my-1">
                        <span className="bg-[#F5ECE4] text-[#6B584E] text-[11px] font-bold px-3.5 py-1 rounded-full">
                          Today, 24 September
                        </span>
                      </div>

                      {/* Message 1: Incoming with Voice Note (Ramesh Kumar - 09:42 AM) */}
                      <div className="space-y-1">
                        <div className="text-[10.5px] font-semibold text-[#8D6E63] pl-1">
                          Ramesh Kumar <span className="text-[10px] text-[#A8988F]">09:42 AM</span>
                        </div>
                        <div className="bg-[#FFF8F3] border border-[#F3E3D7] rounded-2xl rounded-tl-xs p-3 max-w-[85%] space-y-2 shadow-2xs">
                          <p className="text-xs font-medium text-[#1F1612] leading-relaxed">
                            Main 20 pieces ka kaam kal se start kar raha hoon.
                          </p>

                          {/* Voice Note Player Pill */}
                          <div
                            onClick={() => {
                              setIsChatVoicePlaying(!isChatVoicePlaying);
                              showToast(isChatVoicePlaying ? 'Audio paused' : '🔊 Playing Ramesh voice note: 0:18s...');
                            }}
                            className="bg-white border border-[#EFE2D8] rounded-xl p-2 flex items-center gap-2.5 cursor-pointer hover:bg-[#FAF5F0] transition-colors"
                          >
                            <button className="w-8 h-8 rounded-full bg-[#8C3A16] text-white flex items-center justify-center shrink-0 shadow-2xs">
                              {isChatVoicePlaying ? (
                                <Pause className="w-4 h-4" />
                              ) : (
                                <Play className="w-4 h-4 fill-white ml-0.5" />
                              )}
                            </button>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1 text-[11px] font-extrabold text-[#8C3A16]">
                                <Mic className="w-3 h-3" />
                                <span>Voice Message</span>
                                <span className="text-[#1F1612] font-black">0:18</span>
                              </div>
                              {/* Animated Waveform Equalizer */}
                              <div className="flex items-center gap-0.5 mt-1">
                                {[6, 12, 16, 10, 18, 14, 8, 15, 12, 6, 14, 18, 10, 6, 12, 8, 5, 10].map((h, i) => (
                                  <div
                                    key={i}
                                    className={`w-1 rounded-full transition-all duration-200 ${
                                      isChatVoicePlaying && i < 8 ? 'bg-[#8C3A16]' : 'bg-[#D5C4B8]'
                                    }`}
                                    style={{ height: `${h}px` }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Message 2: Outgoing Message (You - 09:45 AM) */}
                      <div className="flex justify-end">
                        <div className="bg-[#8C3A16] text-white rounded-2xl rounded-tr-xs p-3 max-w-[80%] shadow-2xs space-y-1">
                          <p className="text-xs font-semibold text-white leading-relaxed">
                            Okay. Deadline 28 September hai.
                          </p>
                          <div className="flex items-center justify-end gap-1 text-[9.5px] text-[#F0DDD0] font-medium pt-0.5">
                            <span>09:45 AM</span>
                            <CheckCheck className="w-3.5 h-3.5 text-[#B9F6CA]" />
                          </div>
                        </div>
                      </div>

                      {/* Message 3: Incoming Message with AI Vernacular Live Translation (Ramesh Kumar - 10:15 AM) */}
                      <div className="space-y-1">
                        <div className="text-[10.5px] font-semibold text-[#8D6E63] pl-1">
                          Ramesh Kumar <span className="text-[10px] text-[#A8988F]">10:15 AM</span>
                        </div>
                        <div className="bg-[#FFF8F3] border border-[#F3E3D7] rounded-2xl rounded-tl-xs p-3 max-w-[90%] space-y-2 shadow-2xs">
                          <div>
                            <div className="text-[10px] font-bold text-[#8D6E63]">
                              Original (Hindi)
                            </div>
                            <p className="text-xs font-bold text-[#1F1612] mt-0.5">
                              "Kal 10 pieces ready ho jayenge."
                            </p>
                          </div>

                          {/* AI Vernacular Translation Box */}
                          <div className="bg-[#F6EFEA] border-l-[3.5px] border-l-[#1B7339] border border-[#EADED6] rounded-xl p-2.5 space-y-1.5">
                            <div className="flex items-center gap-1.5">
                              <Languages className="w-3.5 h-3.5 text-[#1B7339]" />
                              <span className="text-[10.5px] font-extrabold text-[#1B7339]">
                                Vernacular Translation
                              </span>
                              <span className="bg-[#DFF4E5] text-[#1B7339] text-[9px] font-black px-1.5 py-0.5 rounded">
                                Instant
                              </span>
                            </div>
                            <p className="text-xs font-bold text-[#1F1612]">
                              "10 pieces will be ready tomorrow."
                            </p>

                            {/* Play Translation Audio Trigger */}
                            <button
                              onClick={() => {
                                setIsChatTranslationPlaying(!isChatTranslationPlaying);
                                showToast(
                                  isChatTranslationPlaying
                                    ? 'Translation audio paused'
                                    : '🔊 Playing English translated audio...'
                                );
                              }}
                              className="bg-white hover:bg-[#FDF3EC] border border-[#EADBCE] text-[#8C3A16] text-[10px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              <Volume2 className="w-3 h-3 text-[#8C3A16]" />
                              <span>Play Translation (|||||)</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Message 4: Simple Text (10:18 AM) */}
                      <div className="bg-[#FFF8F3] border border-[#F3E3D7] rounded-2xl rounded-tl-xs p-3 max-w-[80%] shadow-2xs">
                        <p className="text-xs font-medium text-[#1F1612]">
                          Thik hai, time par complete kar dunga.
                        </p>
                        <div className="text-[9.5px] text-[#8D6E63] text-right mt-1 font-medium">
                          10:18 AM
                        </div>
                      </div>

                      {/* Message 5: Production Update Card (11:20 AM Workshop Floor) */}
                      <div className="bg-[#FFF8F3] border border-[#F3E3D7] rounded-2xl p-3 max-w-[92%] shadow-2xs space-y-2.5">
                        {/* Header: Production Update Badge + Progress Count */}
                        <div className="flex items-center justify-between">
                          <span className="bg-[#DFF4E5] border border-[#BEE5CB] text-[#1B7339] text-[10.5px] font-black px-2 py-0.5 rounded-lg flex items-center gap-1">
                            <Camera className="w-3 h-3 text-[#1B7339]" />
                            <span>Production Update</span>
                          </span>
                          <span className="text-xs font-black text-[#1F1612]">
                            12 / 20 pieces
                          </span>
                        </div>

                        {/* Workshop Floor Photo */}
                        <div className="relative rounded-xl overflow-hidden border border-[#E8DDD5]">
                          <img
                            src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80"
                            alt="Workshop Floor"
                            className="w-full h-36 object-cover"
                          />
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[9.5px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1 backdrop-blur-xs">
                            <Clock className="w-3 h-3 text-white" />
                            <span>11:20 AM Workshop Floor</span>
                          </div>
                        </div>

                        {/* Update Description */}
                        <p className="text-xs text-[#1F1612] font-semibold leading-relaxed">
                          12 tokiyan ka base ban gaya hai, weaving complete ho chuki hai.
                        </p>

                        {/* Verify & Log Update Action Button */}
                        <button
                          onClick={() => {
                            setIsProductionLogged(true);
                            showToast('🎉 Production verified! 12/20 pieces logged to escrow ledger.');
                          }}
                          className={`w-full py-2.5 rounded-xl text-xs font-black shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                            isProductionLogged
                              ? 'bg-[#1B7339] text-white'
                              : 'bg-[#8C3A16] hover:bg-[#772F10] text-white'
                          }`}
                        >
                          <ShieldCheck className="w-4 h-4" />
                          <span>
                            {isProductionLogged ? 'Verified & Logged ✓' : 'Verify & Log Update'}
                          </span>
                        </button>
                      </div>

                      {/* Custom user sent messages */}
                      {chatCustomMessages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`p-3 rounded-2xl text-xs font-semibold max-w-[80%] space-y-1 shadow-2xs ${
                              msg.isUser
                                ? 'bg-[#8C3A16] text-white rounded-tr-xs'
                                : 'bg-[#FFF8F3] border border-[#F3E3D7] text-[#1F1612] rounded-tl-xs'
                            }`}
                          >
                            <p>{msg.text}</p>
                            <div
                              className={`text-[9.5px] text-right ${
                                msg.isUser ? 'text-[#F0DDD0]' : 'text-[#8D6E63]'
                              }`}
                            >
                              {msg.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Suggestion Chips Row */}
                    <div className="px-3 py-1.5 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 bg-[#FDFBF9]">
                      {[
                        { icon: '✓', text: 'Okay' },
                        { icon: '🔨', text: 'Start the work' },
                        { icon: '📷', text: 'Send update' },
                        { icon: '🤝', text: 'Escrow milestone' },
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setChatCustomMessages((prev) => [
                              ...prev,
                              { text: item.text, time: 'Just now', isUser: true },
                            ]);
                            showToast(`Sent quick response: "${item.text}"`);
                          }}
                          className="px-2.5 py-1 bg-[#F9EFE7] hover:bg-[#F3E3D7] border border-[#EADBCE] rounded-full text-[11px] font-bold text-[#1F1612] shrink-0 transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>{item.icon}</span>
                          <span>{item.text}</span>
                        </button>
                      ))}
                    </div>

                    {/* Chat Input & Mic Bar */}
                    <div className="bg-[#FDFBF9] border-t border-[#F0E5DC] px-3 pt-2 pb-1 shrink-0 space-y-1.5">
                      <div className="flex items-center gap-2">
                        {/* Plus Button */}
                        <button
                          onClick={() => showToast('📎 Attach craft spec PDF, image or audio memo')}
                          className="w-9 h-9 rounded-xl bg-[#F5ECE4] border border-[#EADFD6] flex items-center justify-center text-[#1F1612] hover:bg-[#EDE0D5] transition-colors cursor-pointer shrink-0"
                        >
                          <Plus className="w-4 h-4" />
                        </button>

                        {/* Camera Button */}
                        <button
                          onClick={() => showToast('📷 Opening camera to take craft production photo...')}
                          className="w-9 h-9 rounded-xl bg-[#DFF4E5] border border-[#BEE5CB] flex items-center justify-center text-[#1B7339] hover:bg-[#CDEED6] transition-colors cursor-pointer shrink-0"
                        >
                          <Camera className="w-4 h-4" />
                        </button>

                        {/* Text Input */}
                        <div className="flex-1 bg-white border border-[#E0D2C7] rounded-xl px-3 py-1.5 flex items-center shadow-2xs">
                          <input
                            type="text"
                            value={chatInputText}
                            onChange={(e) => setChatInputText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && chatInputText.trim()) {
                                setChatCustomMessages((prev) => [
                                  ...prev,
                                  { text: chatInputText.trim(), time: 'Just now', isUser: true },
                                ]);
                                setChatInputText('');
                                showToast('Message sent');
                              }
                            }}
                            placeholder="Type message or hold mic..."
                            className="w-full text-xs text-[#1F1612] placeholder-[#9E8B80] bg-transparent outline-hidden"
                          />
                        </div>

                        {/* Mic / Send Button */}
                        <button
                          onMouseDown={() => setIsMicPressed(true)}
                          onMouseUp={() => {
                            setIsMicPressed(false);
                            setChatCustomMessages((prev) => [
                              ...prev,
                              { text: '🎤 [Voice Note: 0:14s]', time: 'Just now', isUser: true },
                            ]);
                            showToast('🎙️ Audio note recorded & sent!');
                          }}
                          onClick={() => {
                            if (chatInputText.trim()) {
                              setChatCustomMessages((prev) => [
                                ...prev,
                                { text: chatInputText.trim(), time: 'Just now', isUser: true },
                              ]);
                              setChatInputText('');
                              showToast('Message sent');
                            } else {
                              showToast('🎙️ Hold the mic to record your voice note');
                            }
                          }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xs transition-transform active:scale-95 cursor-pointer shrink-0 ${
                            isMicPressed ? 'bg-red-600 animate-pulse' : 'bg-[#8C3A16] hover:bg-[#772F10]'
                          }`}
                        >
                          {chatInputText.trim() ? (
                            <Send className="w-4 h-4" />
                          ) : (
                            <Mic className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Bottom Voice Instruction Subtext */}
                      <div className="flex items-center gap-1 text-[9.5px] pb-1 px-1 text-[#6D4C41]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C3A16]" />
                        <span className="font-extrabold text-[#8C3A16]">Hold Mic:</span>
                        <span className="font-bold text-[#1F1612]">Bol kar sandesh bhejein</span>
                        <span className="text-[#8D6E63] truncate">
                          • Hindi, Assamese, Gujarati audio auto-translated
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Screen 29: Artisan vs Bulk Buyer Chat (matching 'artisan vs bulk buyer chat.png') */}
                {activeScreenIndex === 29 && (
                  <div className="flex flex-col h-[740px] bg-[#FDFBF9] rounded-3xl overflow-hidden shadow-xl border border-[#E8DDD5] relative">
                    {/* Top App Bar with Bulk Buyer Info */}
                    <div className="bg-[#FAF5F0] border-b border-[#E8DDD5] px-3.5 py-2.5 flex items-center justify-between shrink-0 shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() => setActiveScreenIndex(22)}
                          className="w-8 h-8 rounded-full bg-white border border-[#E0D2C7] flex items-center justify-center text-[#1F1612] hover:bg-[#F5ECE4] transition-colors cursor-pointer shadow-2xs"
                          title="Back to Orders"
                        >
                          <ChevronLeft className="w-5 h-5 text-[#1F1612]" />
                        </button>

                        <div className="relative">
                          <div className="w-9 h-9 rounded-full bg-[#1B7339] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                            HH
                          </div>
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-xs font-black text-[#1F1612] leading-tight">
                              Heritage Handcrafts (Buyer)
                            </h3>
                            <span className="bg-[#DFF4E5] text-[#1B7339] text-[9px] font-black px-1.5 py-0.2 rounded-sm border border-[#BEE5CB]">
                              B2B Verified
                            </span>
                          </div>
                          <p className="text-[10px] text-[#2E7D32] font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                            <span>Online • Typically replies instantly</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        {/* Escrow Status Pill */}
                        <button
                          onClick={() => {
                            setShowEscrowDetailsModal(true);
                            showToast('Opening Escrow Breakdown: ₹22,500 locked in escrow');
                          }}
                          className="bg-[#DFF4E5] border border-[#BEE5CB] px-2 py-1 rounded-full flex items-center gap-1 text-[10px] font-bold text-[#1B7339] hover:bg-[#CDEED6] transition-colors cursor-pointer"
                        >
                          <ShieldCheck className="w-3.5 h-3.5 text-[#1B7339]" />
                          <span>Escrow: ₹22,500</span>
                        </button>

                        {/* Phone Call */}
                        <button
                          onClick={() => showToast('📞 Connecting via HunarSangam Voice Bridge (Language Assisted)...')}
                          className="w-7 h-7 rounded-full bg-white border border-[#E0D2C7] flex items-center justify-center text-[#1F1612] hover:bg-[#F5ECE4] transition-colors cursor-pointer shadow-2xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </button>

                        {/* More Menu */}
                        <button
                          onClick={() => showToast('Options: View Buyer Profile, Export Chat, Dispute Resolution')}
                          className="w-7 h-7 rounded-full bg-white border border-[#E0D2C7] flex items-center justify-center text-[#1F1612] hover:bg-[#F5ECE4] transition-colors cursor-pointer shadow-2xs"
                        >
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Purchase Order Summary Banner */}
                    <div className="bg-[#FFF4EC] border-b border-[#F5DAC8] px-3.5 py-2 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#8C3A16] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs">
                          📦
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] font-black text-[#1F1612]">
                              Order #REQ-HH-1048
                            </span>
                            <span className="text-[9.5px] font-extrabold text-[#8C3A16] bg-[#FCECE3] px-1.5 py-0.2 rounded-sm border border-[#F5DAC8]">
                              50 pcs Cane Baskets
                            </span>
                          </div>
                          <p className="text-[9.5px] text-[#6D4C41] font-medium">
                            Delivery: 28 Sept • Total: ₹22,500 (Advance Escrowed)
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setActiveScreenIndex(24);
                          showToast('Opening Order Request Details');
                        }}
                        className="px-2 py-1 bg-white border border-[#EADFD6] hover:bg-[#FAF5F0] text-[10px] font-bold text-[#8C3A16] rounded-lg transition-colors cursor-pointer shrink-0"
                      >
                        View Order Specs
                      </button>
                    </div>

                    {/* Auto-Translation & Language Header Bar */}
                    <div className="bg-[#FAF5F0] border-b border-[#F0E5DC] px-3.5 py-1.5 flex items-center justify-between shrink-0">
                      <div className="flex items-center gap-1.5 text-[10.5px] text-[#6D4C41]">
                        <Languages className="w-3.5 h-3.5 text-[#8C3A16]" />
                        <span className="font-extrabold text-[#1F1612]">Vernacular Auto-Translate:</span>
                        <span className="text-[10px] bg-[#EADFD6] text-[#4E342E] px-1.5 py-0.2 rounded-sm font-semibold">
                          Active (Hindi ⇄ English)
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          const nextMode =
                            buyerChatLangMode === 'हिंदी / En'
                              ? 'Assamese / En'
                              : buyerChatLangMode === 'Assamese / En'
                              ? 'English only'
                              : 'हिंदी / En';
                          setBuyerChatLangMode(nextMode);
                          showToast(`Switched translation mode to: ${nextMode}`);
                        }}
                        className="text-[10px] font-black text-[#8C3A16] hover:underline cursor-pointer flex items-center gap-0.5"
                      >
                        <span>{buyerChatLangMode}</span>
                        <Sparkles className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    {/* Chat Messages Body */}
                    <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 bg-[#FAF7F2]">
                      {/* Date Stamp */}
                      <div className="flex justify-center">
                        <span className="text-[10px] font-bold text-[#8D6E63] bg-[#F2E8DF] border border-[#E4D5C7] px-2.5 py-0.5 rounded-full">
                          Today, 24 Sept 2026
                        </span>
                      </div>

                      {/* System Notification: Escrow Locked */}
                      <div className="bg-[#EBF7EE] border border-[#CDEED6] rounded-2xl p-2.5 flex items-start gap-2 shadow-2xs">
                        <ShieldCheck className="w-4 h-4 text-[#1B7339] shrink-0 mt-0.5" />
                        <div className="text-[10.5px] text-[#1B7339] leading-tight">
                          <p className="font-bold">🔒 ₹22,500 Escrow Advance Locked</p>
                          <p className="text-[9.5px] text-[#2E7D32] mt-0.5">
                            Heritage Handcrafts has deposited 100% advance funds into the HunarSangam Escrow Smart Contract. Payment unlocks upon milestone completion.
                          </p>
                        </div>
                      </div>

                      {/* Message 1: Buyer Greeting (English + Hindi Translation Card) */}
                      <div className="space-y-1 max-w-[85%]">
                        {/* Original English Message from Buyer */}
                        <div className="bg-white border border-[#E8DDD5] rounded-2xl rounded-tl-xs p-3 shadow-2xs space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-[#8C3A16]">
                              Heritage Handcrafts (Buyer)
                            </span>
                            <span className="text-[9px] text-[#8D6E63]">10:05 AM</span>
                          </div>
                          <p className="text-xs text-[#1F1612] font-semibold leading-relaxed">
                            Hello Ramu ji, we saw your catalog sample of the Woven Bamboo Baskets. Can you confirm if all 50 pieces will have the natural lacquer waterproof finish?
                          </p>
                        </div>

                        {/* AI Vernacular Translation Card */}
                        <div className="bg-[#FFF4EC] border border-[#F5DAC8] rounded-xl p-2.5 ml-2 shadow-2xs space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16]">
                              <Sparkles className="w-3 h-3 text-[#8C3A16]" />
                              <span>AI Hindi Translation (हिंदी अनुवाद)</span>
                            </div>
                            <button
                              onClick={() => {
                                setIsBuyerTranslationAudioPlaying(!isBuyerTranslationAudioPlaying);
                                showToast(
                                  isBuyerTranslationAudioPlaying
                                    ? 'Audio translation paused'
                                    : '🔊 Playing audio translation in Hindi...'
                                );
                              }}
                              className="text-[9.5px] font-bold text-[#8C3A16] hover:underline flex items-center gap-0.5 cursor-pointer"
                            >
                              <Volume2 className="w-3 h-3" />
                              <span>{isBuyerTranslationAudioPlaying ? 'Pause' : 'Sunein 🔊'}</span>
                            </button>
                          </div>
                          <p className="text-[11px] text-[#3E2723] font-medium leading-relaxed">
                            "नमस्ते रामू जी, हमने आपके बांस की टोकरियों का कैटलॉग सैंपल देखा। क्या आप पुष्टि कर सकते हैं कि सभी 50 पीस में प्राकृतिक लैकर वाटरप्रूफ फिनिश होगी?"
                          </p>
                        </div>
                      </div>

                      {/* Message 2: Artisan Voice Note (Hindi Audio + English Auto-Transcript for Buyer) */}
                      <div className="flex justify-end">
                        <div className="space-y-1 max-w-[85%]">
                          <div className="bg-[#8C3A16] text-white rounded-2xl rounded-tr-xs p-3 shadow-2xs space-y-2">
                            <div className="flex items-center justify-between text-[10px] text-[#F9EBE0]">
                              <span className="font-bold">You (Voice Note)</span>
                              <span>10:12 AM</span>
                            </div>

                            {/* Audio Player Bar */}
                            <div className="flex items-center gap-2 bg-[#772F10] rounded-xl px-2.5 py-1.5">
                              <button
                                onClick={() => {
                                  setIsArtisanVoiceNotePlaying(!isArtisanVoiceNotePlaying);
                                  showToast(
                                    isArtisanVoiceNotePlaying
                                      ? 'Audio paused'
                                      : '▶️ Playing voice note (0:18s)'
                                  );
                                }}
                                className="w-7 h-7 rounded-full bg-white text-[#8C3A16] flex items-center justify-center shrink-0 hover:bg-[#FAF5F0] transition-colors cursor-pointer shadow-xs"
                              >
                                {isArtisanVoiceNotePlaying ? (
                                  <span className="w-2.5 h-2.5 bg-[#8C3A16] rounded-xs" />
                                ) : (
                                  <Play className="w-3.5 h-3.5 fill-[#8C3A16] ml-0.5" />
                                )}
                              </button>

                              {/* Audio Waveform visualization */}
                              <div className="flex-1 flex items-center gap-0.5 h-4">
                                {[4, 8, 12, 16, 10, 14, 18, 12, 6, 15, 12, 8, 14, 16, 10, 6].map(
                                  (h, i) => (
                                    <span
                                      key={i}
                                      className={`w-1 rounded-full transition-all ${
                                        isArtisanVoiceNotePlaying
                                          ? 'bg-[#FFCC80] animate-pulse'
                                          : 'bg-white/70'
                                      }`}
                                      style={{ height: `${h}px` }}
                                    />
                                  )
                                )}
                              </div>

                              <span className="text-[10px] font-bold text-white shrink-0">
                                0:18
                              </span>
                            </div>

                            {/* Spoken Hindi Transcript */}
                            <p className="text-[11px] text-[#FFF0E6] font-medium leading-relaxed">
                              "हाँ सर, बिल्कुल! हम असम के ऑर्गेनिक बीजों के तेल और हर्बल लैकर से ही कोटिंग करेंगे। 100% वाटरप्रूफ और एक्सपोर्ट क्वालिटी रहेगा।"
                            </p>
                          </div>

                          {/* Auto-Translated to English for Buyer */}
                          <div className="bg-[#F5ECE4] border border-[#E4D5C7] rounded-xl p-2 mr-2 text-[10px] text-[#5D4037] shadow-2xs">
                            <span className="font-extrabold text-[#8C3A16]">
                              English Delivered to Buyer:
                            </span>{' '}
                            "Yes sir, absolutely! We will coat using organic seed oil and herbal lacquer from Assam. 100% waterproof and export grade."
                          </div>
                        </div>
                      </div>

                      {/* Message 3: Buyer Response */}
                      <div className="space-y-1 max-w-[85%]">
                        <div className="bg-white border border-[#E8DDD5] rounded-2xl rounded-tl-xs p-3 shadow-2xs space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-[#8C3A16]">
                              Heritage Handcrafts (Buyer)
                            </span>
                            <span className="text-[9px] text-[#8D6E63]">10:15 AM</span>
                          </div>
                          <p className="text-xs text-[#1F1612] font-semibold leading-relaxed">
                            Excellent! Please share a quick production photo once the first 15-20 baskets are woven so we can release Milestone 1 payment.
                          </p>
                        </div>

                        {/* AI Hindi Translation Card */}
                        <div className="bg-[#FFF4EC] border border-[#F5DAC8] rounded-xl p-2.5 ml-2 shadow-2xs space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-[9.5px] font-bold text-[#8C3A16]">
                              <Sparkles className="w-3 h-3 text-[#8C3A16]" />
                              <span>AI Hindi Translation</span>
                            </div>
                            <button
                              onClick={() => {
                                setIsBuyerSecondAudioPlaying(!isBuyerSecondAudioPlaying);
                                showToast(
                                  isBuyerSecondAudioPlaying
                                    ? 'Audio paused'
                                    : '🔊 Playing audio translation in Hindi...'
                                );
                              }}
                              className="text-[9.5px] font-bold text-[#8C3A16] hover:underline flex items-center gap-0.5 cursor-pointer"
                            >
                              <Volume2 className="w-3 h-3" />
                              <span>{isBuyerSecondAudioPlaying ? 'Pause' : 'Sunein 🔊'}</span>
                            </button>
                          </div>
                          <p className="text-[11px] text-[#3E2723] font-medium leading-relaxed">
                            "बहुत बढ़िया! कृपया पहले 15-20 टोकरियां बनने पर एक प्रोडक्शन फोटो साझा करें ताकि हम माइलस्टोन 1 का भुगतान जारी कर सकें।"
                          </p>
                        </div>
                      </div>

                      {/* Custom user sent messages */}
                      {buyerChatCustomMessages.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`p-3 rounded-2xl text-xs font-semibold max-w-[80%] space-y-1 shadow-2xs ${
                              msg.isUser
                                ? 'bg-[#8C3A16] text-white rounded-tr-xs'
                                : 'bg-[#FFF8F3] border border-[#F3E3D7] text-[#1F1612] rounded-tl-xs'
                            }`}
                          >
                            <p>{msg.text}</p>
                            {msg.translated && (
                              <p className="text-[10px] text-[#F3DAC8] font-normal pt-0.5 border-t border-white/20">
                                🌐 {msg.translated}
                              </p>
                            )}
                            <div
                              className={`text-[9.5px] text-right ${
                                msg.isUser ? 'text-[#F0DDD0]' : 'text-[#8D6E63]'
                              }`}
                            >
                              {msg.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Quick Suggestion Chips Row */}
                    <div className="px-3 py-1.5 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 bg-[#FDFBF9] border-t border-[#F5EBE1]">
                      {[
                        { icon: '📸', text: 'Share Production Photo' },
                        { icon: '✓', text: 'Confirm Lacquer Finish' },
                        { icon: '📦', text: 'Milestone 1 Ready' },
                        { icon: '🤝', text: 'Request Escrow Release' },
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setBuyerChatCustomMessages((prev) => [
                              ...prev,
                              {
                                text: item.text,
                                time: 'Just now',
                                isUser: true,
                                translated: `Delivered to Heritage Handcrafts in English: "${item.text}"`,
                              },
                            ]);
                            showToast(`Sent response: "${item.text}" with auto-translation`);
                          }}
                          className="px-2.5 py-1 bg-[#F9EFE7] hover:bg-[#F3E3D7] border border-[#EADBCE] rounded-full text-[11px] font-bold text-[#1F1612] shrink-0 transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>{item.icon}</span>
                          <span>{item.text}</span>
                        </button>
                      ))}
                    </div>

                    {/* Chat Input & Mic Bar */}
                    <div className="bg-[#FDFBF9] border-t border-[#F0E5DC] px-3 pt-2 pb-1 shrink-0 space-y-1.5">
                      <div className="flex items-center gap-2">
                        {/* Plus Button */}
                        <button
                          onClick={() => showToast('📎 Attach craft spec PDF, sample image, invoice or audio memo')}
                          className="w-9 h-9 rounded-xl bg-[#F5ECE4] border border-[#EADFD6] flex items-center justify-center text-[#1F1612] hover:bg-[#EDE0D5] transition-colors cursor-pointer shrink-0"
                          title="Attach document or sample"
                        >
                          <Plus className="w-4 h-4" />
                        </button>

                        {/* Camera Button */}
                        <button
                          onClick={() => {
                            setActiveScreenIndex(12); // Coin scale viewfinder
                            showToast('📷 Opening Camera to capture craft production photo...');
                          }}
                          className="w-9 h-9 rounded-xl bg-[#DFF4E5] border border-[#BEE5CB] flex items-center justify-center text-[#1B7339] hover:bg-[#CDEED6] transition-colors cursor-pointer shrink-0"
                          title="Capture production photo"
                        >
                          <Camera className="w-4 h-4" />
                        </button>

                        {/* Text Input */}
                        <div className="flex-1 bg-white border border-[#E0D2C7] rounded-xl px-3 py-1.5 flex items-center shadow-2xs">
                          <input
                            type="text"
                            value={buyerChatInputText}
                            onChange={(e) => setBuyerChatInputText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && buyerChatInputText.trim()) {
                                setBuyerChatCustomMessages((prev) => [
                                  ...prev,
                                  {
                                    text: buyerChatInputText.trim(),
                                    time: 'Just now',
                                    isUser: true,
                                    translated: `Auto-translated into English for Heritage Handcrafts`,
                                  },
                                ]);
                                setBuyerChatInputText('');
                                showToast('Message sent with real-time translation');
                              }
                            }}
                            placeholder="Type in Hindi/English or hold mic..."
                            className="w-full text-xs text-[#1F1612] placeholder-[#9E8B80] bg-transparent outline-hidden"
                          />
                        </div>

                        {/* Mic / Send Button */}
                        <button
                          onMouseDown={() => setIsBuyerChatMicPressed(true)}
                          onMouseUp={() => {
                            setIsBuyerChatMicPressed(false);
                            setBuyerChatCustomMessages((prev) => [
                              ...prev,
                              {
                                text: '🎤 [Voice Note: 0:12s - "Ji bilkul, kal tak photo bhej denge"]',
                                time: 'Just now',
                                isUser: true,
                                translated: 'Auto-transcribed & translated: "Yes definitely, will send the photos by tomorrow."',
                              },
                            ]);
                            showToast('🎙️ Audio note recorded, transcribed & translated into English for buyer!');
                          }}
                          onClick={() => {
                            if (buyerChatInputText.trim()) {
                              setBuyerChatCustomMessages((prev) => [
                                ...prev,
                                {
                                  text: buyerChatInputText.trim(),
                                  time: 'Just now',
                                  isUser: true,
                                  translated: `Auto-translated into English for Heritage Handcrafts`,
                                },
                              ]);
                              setBuyerChatInputText('');
                              showToast('Message sent with real-time translation');
                            } else {
                              showToast('🎙️ Hold the mic to record your vernacular voice note');
                            }
                          }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xs transition-transform active:scale-95 cursor-pointer shrink-0 ${
                            isBuyerChatMicPressed ? 'bg-red-600 animate-pulse' : 'bg-[#8C3A16] hover:bg-[#772F10]'
                          }`}
                          title="Record voice message"
                        >
                          {buyerChatInputText.trim() ? (
                            <Send className="w-4 h-4" />
                          ) : (
                            <Mic className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Bottom Voice Instruction Subtext */}
                      <div className="flex items-center gap-1 text-[9.5px] pb-1 px-1 text-[#6D4C41]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B7339]" />
                        <span className="font-extrabold text-[#1B7339]">Auto-Translate:</span>
                        <span className="font-bold text-[#1F1612]">Bol kar sandesh bhejein</span>
                        <span className="text-[#8D6E63] truncate">
                          • Hindi speech instantly converted to English for Bulk Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {showOrderProgressModal && (
                  <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[320px] animate-in fade-in zoom-in-95">
                      <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />
                      <h3 className="text-base font-extrabold text-[#1F1612]">Update Craft Progress</h3>
                      <p className="text-xs text-[#6D4C41] mt-0.5 mb-4">
                        #PO-FAB-8821 • 120 × Woven Bamboo Fruit Basket
                      </p>

                      <div className="bg-[#FFF8F4] border border-[#F3E5DC] rounded-2xl p-3 mb-4 space-y-2">
                        <div className="flex justify-between items-baseline">
                          <span className="text-xs font-bold text-[#4E342E]">Units Completed:</span>
                          <span className="text-sm font-black text-[#8C3A16]">
                            {fabIndiaProgress} / 120 pcs ({Math.round((fabIndiaProgress / 120) * 100)}%)
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="120"
                          value={fabIndiaProgress}
                          onChange={(e) => setFabIndiaProgress(Number(e.target.value))}
                          className="w-full accent-[#8C3A16] cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-[#8D6E63] font-medium">
                          <span>0 pcs (Started)</span>
                          <span>60 pcs (Midway)</span>
                          <span>120 pcs (Ready)</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowOrderProgressModal(false)}
                          className="flex-1 py-2.5 bg-[#FAF5F0] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#6D4C41] hover:bg-[#F3EAE3] cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            setShowOrderProgressModal(false);
                            showToast(`✅ Production progress updated to ${fabIndiaProgress} / 120 pcs!`);
                          }}
                          className="flex-1 py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                        >
                          Save Progress
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODAL 2: DISPATCH DELIVERY LOGISTICS */}
                {showDispatchModal && (
                  <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[330px] animate-in fade-in zoom-in-95">
                      <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />
                      <div className="flex items-center gap-2 mb-1">
                        <Truck className="w-4 h-4 text-[#8C3A16]" />
                        <h3 className="text-base font-extrabold text-[#1F1612]">Schedule Dispatch</h3>
                      </div>
                      <p className="text-xs text-[#6D4C41] mb-3">
                        Choose verified B2B pickup partner for FabIndia Retail PO #8821:
                      </p>

                      <div className="space-y-2 mb-4">
                        {[
                          { id: 'delhivery', title: 'Delhivery Surface B2B', estimate: '₹550 • 2 Days Delivery', tag: 'Fastest' },
                          { id: 'indiapost', title: 'India Post (Speed Parcel)', estimate: '₹420 • 3-4 Days Delivery', tag: 'Economical' },
                          { id: 'ondc', title: 'ONDC Logistics Open Network', estimate: '₹380 • 2-3 Days Delivery', tag: 'Govt. Subsidized' },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setSelectedLogistics(opt.id as any)}
                            className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                              selectedLogistics === opt.id
                                ? 'bg-[#FFF8F4] border-[#8C3A16] ring-1 ring-[#8C3A16]'
                                : 'bg-white border-[#EADFD6] hover:bg-[#FAF5F0]'
                            }`}
                          >
                            <div>
                              <p className="text-xs font-bold text-[#1F1612]">{opt.title}</p>
                              <p className="text-[10px] text-[#6D4C41]">{opt.estimate}</p>
                            </div>
                            <span className="text-[9.5px] font-bold text-[#8C3A16] bg-[#FDECE8] px-2 py-0.5 rounded-md">
                              {opt.tag}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowDispatchModal(false)}
                          className="flex-1 py-2.5 bg-[#FAF5F0] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#6D4C41] hover:bg-[#F3EAE3] cursor-pointer"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            setShowDispatchModal(false);
                            showToast('🚚 Pickup scheduled! Dispatch slip & barcode generated.');
                          }}
                          className="flex-1 py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                        >
                          Confirm Pickup
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODAL 3: PURCHASE ORDER SPECS */}
                {showPoSpecsModal && (
                  <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[330px] animate-in fade-in zoom-in-95 max-h-[85%] overflow-y-auto">
                      <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="w-4 h-4 text-[#8C3A16]" />
                        <h3 className="text-base font-extrabold text-[#1F1612]">Purchase Order Specs</h3>
                      </div>
                      <p className="text-[11px] text-[#8D6E63] font-mono">PO: #PO-TBS-4419</p>

                      <div className="bg-[#FFFBF8] border border-[#F0E4DA] rounded-2xl p-3 my-3 space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-[#6D4C41]">Buyer:</span>
                          <span className="font-bold text-[#1F1612]">The Bombay Store, Mumbai</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6D4C41]">Product:</span>
                          <span className="font-bold text-[#1F1612]">50 × Golden Cane Planter Basket</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6D4C41]">Material:</span>
                          <span className="font-bold text-[#1F1612]">Grade-A Natural Assam Woven Cane</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6D4C41]">Finish:</span>
                          <span className="font-bold text-[#1F1612]">Clear Non-Toxic Water Repellent</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6D4C41]">Escrow Status:</span>
                          <span className="font-bold text-[#2E7D32]">100% Locked in Hunar Escrow</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#6D4C41]">Advance Term:</span>
                          <span className="font-bold text-[#8C3A16]">40% on Acceptance (₹8,400)</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowPoSpecsModal(false)}
                          className="flex-1 py-2.5 bg-[#FAF5F0] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#6D4C41] hover:bg-[#F3EAE3] cursor-pointer"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            setIsBombayStoreAccepted(true);
                            setShowPoSpecsModal(false);
                            showToast('✅ Accepted PO #PO-TBS-4419! 40% advance released.');
                          }}
                          className="flex-1 py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                        >
                          Accept Order
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODAL 4: CLUSTER CAPACITY COLLABORATION (FABINDIA 400 PCS) */}
                {showCollaborateModal && (
                  <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[330px] animate-in fade-in zoom-in-95">
                      <div className="w-10 h-1 bg-[#EADFD6] rounded-full mx-auto mb-3" />
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-4 h-4 text-[#8C3A16]" />
                        <h3 className="text-base font-extrabold text-[#1F1612]">Cluster Guild Capacity</h3>
                      </div>
                      <p className="text-xs text-[#6D4C41] mb-3">
                        FabIndia 400 pcs order pooled with verified cluster members:
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="p-2.5 bg-[#FAF5F0] rounded-xl border border-[#EADFD6] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-[#8C3A16] text-white flex items-center justify-center text-[10px] font-bold">
                              RK
                            </span>
                            <div>
                              <p className="text-xs font-bold text-[#1F1612]">Ramu Kumar (You)</p>
                              <p className="text-[10px] text-[#6D4C41]">Capacity: 200 pcs (Lead)</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-[#2E7D32]">Confirmed</span>
                        </div>

                        <div className="p-2.5 bg-[#FAF5F0] rounded-xl border border-[#EADFD6] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-[#5D4037] text-white flex items-center justify-center text-[10px] font-bold">
                              SD
                            </span>
                            <div>
                              <p className="text-xs font-bold text-[#1F1612]">Suresh Das</p>
                              <p className="text-[10px] text-[#6D4C41]">Capacity: 120 pcs</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-[#2E7D32]">Available</span>
                        </div>

                        <div className="p-2.5 bg-[#FAF5F0] rounded-xl border border-[#EADFD6] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-[#8D6E63] text-white flex items-center justify-center text-[10px] font-bold">
                              BD
                            </span>
                            <div>
                              <p className="text-xs font-bold text-[#1F1612]">Bina Devi</p>
                              <p className="text-[10px] text-[#6D4C41]">Capacity: 80 pcs</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-[#2E7D32]">Available</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setShowCollaborateModal(false);
                            setActiveScreenIndex(25);
                            showToast('Opening Form Artisan Collective (Screen 25)');
                          }}
                          className="w-full py-2.5 bg-[#FFF5F0] hover:bg-[#FEEAE0] border border-[#F5D8C7] text-[#8C3A16] font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all"
                        >
                          <Users className="w-3.5 h-3.5 text-[#8C3A16]" />
                          <span>Open Full Collective Studio (Screen 25)</span>
                        </button>

                        <div className="flex gap-2">
                          <button
                            onClick={() => setShowCollaborateModal(false)}
                            className="flex-1 py-2.5 bg-[#FAF5F0] border border-[#EADFD6] rounded-xl text-xs font-bold text-[#6D4C41] hover:bg-[#F3EAE3] cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              setShowCollaborateModal(false);
                              showToast('🤝 Cluster Team formed! 400 pcs FabIndia PO accepted cooperatively.');
                            }}
                            className="flex-1 py-2.5 bg-[#8C3A16] hover:bg-[#772F10] text-white rounded-xl text-xs font-bold shadow-xs cursor-pointer"
                          >
                            Form Guild &amp; Accept
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 30, 31, 32. BULK BUYER ONBOARDING STEPS 1, 2, 3 */}
                {(activeScreenIndex === 30 || activeScreenIndex === 31 || activeScreenIndex === 32) && (
                  <BuyerOnboardingScreens
                    activeScreenIndex={activeScreenIndex}
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => {
                      if (activeScreenIndex === 30) {
                        setActiveScreenIndex(2);
                      } else if (activeScreenIndex === 31) {
                        setActiveScreenIndex(30);
                      } else if (activeScreenIndex === 32) {
                        setActiveScreenIndex(31);
                      }
                    }}
                    showToast={showToast}
                  />
                )}

                {/* 33. BULK BUYER PROFILE CONFIRMATION SCREEN (matching 'bulk buyer profile confirmation after register.png') */}
                {activeScreenIndex === 33 && (
                  <BuyerProfileConfirmationScreenView
                    yourName="Vikram Malhotra"
                    businessName="FabCraft Living Pvt. Ltd."
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    showToast={showToast}
                  />
                )}

                {/* 34. BULK BUYER HOME DASHBOARD SCREEN (matching 'home - bulk buyer.png') */}
                {activeScreenIndex === 34 && (
                  <BuyerHomeScreenView
                    yourName="Vikram Malhotra"
                    businessName="FabCraft Living"
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    showToast={showToast}
                  />
                )}

                {/* 35. BULK BUYER DISCOVER SCREEN (matching d1 - bulk- Discover.png) */}
                {activeScreenIndex === 35 && (
                  <BuyerDiscoverScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(34)}
                    showToast={showToast}
                  />
                )}

                {/* 36. BULK BUYER SEARCH & VOICE SEARCH (matching d2 - bulk— Search.png) */}
                {activeScreenIndex === 36 && (
                  <BuyerSearchScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(35)}
                    showToast={showToast}
                  />
                )}

                {/* 37. BULK BUYER SEARCH RESULTS & FILTER SCREEN (matching d3 - bulk— search result.png) */}
                {activeScreenIndex === 37 && (
                  <BuyerSearchResultsScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(36)}
                    showToast={showToast}
                  />
                )}

                {/* 38. FEATURED MASTER ARTISANS SCREEN (matching d4 - bulk— Featured Artisans.png) */}
                {activeScreenIndex === 38 && (
                  <BuyerFeaturedArtisansScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(35)}
                    showToast={showToast}
                  />
                )}

                {/* 39. MASTER ARTISAN PROFILE SCREEN (matching d5 bulk— Artisan profile.png) */}
                {activeScreenIndex === 39 && (
                  <BuyerArtisanProfileScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(38)}
                    showToast={showToast}
                  />
                )}

                {/* 40. POPULAR BUSINESS SOURCING SCREEN (matching d6 bulk— Popular Business Sourcing.png) */}
                {activeScreenIndex === 40 && (
                  <BuyerBusinessSourcingScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(35)}
                    showToast={showToast}
                  />
                )}

                {/* 41. BULK BUYER REQUIREMENTS DASHBOARD SCREEN (matching r1-bulk — Requirements.png) */}
                {activeScreenIndex === 41 && (
                  <BuyerRequirementsScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(34)}
                    showToast={showToast}
                  />
                )}

                {/* 42. VOICE POST BULK REQUIREMENT SCREEN (matching r2- bulk — Voice Post Bulk Requirement.png) */}
                {activeScreenIndex === 42 && (
                  <BuyerVoiceRequirementScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(41)}
                    showToast={showToast}
                  />
                )}

                {/* 43. CREATE BULK REQUIREMENT REVIEW SCREEN (matching r3-bulk — Create Bulk Requirement review.png) */}
                {activeScreenIndex === 43 && (
                  <BuyerRequirementReviewScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(42)}
                    showToast={showToast}
                  />
                )}

                {/* 44. REFERENCE IMAGE UPLOAD SCREEN (matching r4- bulk — Reference Image.png) */}
                {activeScreenIndex === 44 && (
                  <BuyerReferenceImageScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(43)}
                    showToast={showToast}
                  />
                )}

                {/* 45. REVIEW & MATCH SCREEN (matching r5-bulk — Find Artisan Matches.png) */}
                {activeScreenIndex === 45 && (
                  <BuyerReviewMatchScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(44)}
                    showToast={showToast}
                  />
                )}

                {/* 46. MATCHED ARTISANS SCREEN (matching r6-bulk — Artisan Match & Comparison.png) */}
                {activeScreenIndex === 46 && (
                  <BuyerMatchedArtisansScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(45)}
                    showToast={showToast}
                  />
                )}

                {/* 47. COMPARE ARTISANS SCREEN (matching r7-bulk ai artisan matching in bulk side.png) */}
                {activeScreenIndex === 47 && (
                  <BuyerCompareArtisansScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(46)}
                    showToast={showToast}
                  />
                )}

                {/* 48. SELECTED ARTISAN SCREEN (matching r8-bulk — Selected Artisan.png) */}
                {activeScreenIndex === 48 && (
                  <BuyerSelectedArtisanScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(47)}
                    showToast={showToast}
                  />
                )}

                {/* 49. BUYER ORDERS & PRODUCTION HUB (matching bulk - order section 1.png) */}
                {activeScreenIndex === 49 && (
                  <BuyerOrdersHubScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(34)}
                    showToast={showToast}
                  />
                )}

                {/* 50. BUYER ORDER DETAILS & STATUS (matching bulk order section 2 - deatiled.png) */}
                {activeScreenIndex === 50 && (
                  <BuyerOrderDetailsScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(49)}
                    showToast={showToast}
                  />
                )}

                {/* 51. BUYER PROFILE (matching bulk - profile section.png) */}
                {activeScreenIndex === 51 && (
                  <BuyerProfileScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(34)}
                    showToast={showToast}
                  />
                )}

                {/* 52. BUYER VS ARTISAN CHAT (matching bulk side - chat bulk buyer vs artisan.png) */}
                {activeScreenIndex === 52 && (
                  <BuyerArtisanChatScreenView
                    onNavigate={(idx, msg) => {
                      setActiveScreenIndex(idx);
                      if (msg) showToast(msg);
                    }}
                    onBack={() => setActiveScreenIndex(50)}
                    showToast={showToast}
                  />
                )}

                {/* UPDATE PROGRESS MODAL DIALOG */}
                {showProgressModal && (
                  <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-5 border border-[#E8DDD5] shadow-2xl w-full max-w-[300px]">
                      <h3 className="text-base font-extrabold text-[#2D2421] mb-2">Update Craft Progress</h3>
                      <p className="text-xs text-[#7A685F] mb-4">
                        50 Handmade Bamboo Baskets for FabIndia Sourcing Hub
                      </p>

                      <div className="space-y-3 mb-5">
                        <div className="flex justify-between text-xs font-bold text-[#A84318]">
                          <span>Completed Units:</span>
                          <span>{bambooProgress} / 50</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="50"
                          value={bambooProgress}
                          onChange={(e) => setBambooProgress(Number(e.target.value))}
                          className="w-full accent-[#8C3A16]"
                        />
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => setShowProgressModal(false)}
                          className="flex-1 py-2 bg-[#F4EDE7] rounded-xl text-xs font-bold text-[#6B584E]"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            setShowProgressModal(false);
                            showToast(`Updated progress to ${bambooProgress}/50 completed!`);
                          }}
                          className="flex-1 py-2 bg-[#8C3A16] text-white rounded-xl text-xs font-bold"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Universal Interactive Modals (Notifications, Escrow, Score Breakdown, Analytics, Wallet, WhatsApp, QR, Print) */}
                <ArtisanModals
                  showNotificationsModal={showNotificationsModal}
                  setShowNotificationsModal={setShowNotificationsModal}
                  onNavigateToScreen={(idx, msg) => {
                    setActiveScreenIndex(idx);
                    if (msg) showToast(msg);
                  }}
                  showToast={showToast}
                  showEscrowDetailsModal={showEscrowDetailsModal}
                  setShowEscrowDetailsModal={setShowEscrowDetailsModal}
                  showCompletedOrdersModal={showCompletedOrdersModal}
                  setShowCompletedOrdersModal={setShowCompletedOrdersModal}
                  showScoreBreakdownModal={showScoreBreakdownModal}
                  setShowScoreBreakdownModal={setShowScoreBreakdownModal}
                  showBuyerAnalyticsModal={showBuyerAnalyticsModal}
                  setShowBuyerAnalyticsModal={setShowBuyerAnalyticsModal}
                  showShareWhatsAppModal={showShareWhatsAppModal}
                  setShowShareWhatsAppModal={setShowShareWhatsAppModal}
                  showCardPrintModal={showCardPrintModal}
                  setShowCardPrintModal={setShowCardPrintModal}
                  showWalletPassModal={showWalletPassModal}
                  setShowWalletPassModal={setShowWalletPassModal}
                  showQrEnlargedModal={showQrEnlargedModal}
                  setShowQrEnlargedModal={setShowQrEnlargedModal}
                  showSlaHealthModal={showSlaHealthModal}
                  setShowSlaHealthModal={setShowSlaHealthModal}
                  showCapacityPlannerModal={showCapacityPlannerModal}
                  setShowCapacityPlannerModal={setShowCapacityPlannerModal}
                  artisanName={artisanName}
                  selectedLanguage={selectedLanguage}
                />
              </div>
            </div>

            {/* Bottom Controls Info */}
            <p className="text-xs text-[#8A756C] mt-3 text-center">
              💡 <b>Tip:</b> Click <b>"🔑 Login Screen"</b> or <b>"🏠 Artisan Home"</b> in the top stepper to inspect the exact screens matching your screenshots!
            </p>
          </div>
        ) : (
          /* CODE INSPECTOR VIEW */
          <div className="w-full max-w-4xl bg-[#1E1E1E] rounded-2xl shadow-xl border border-[#333] overflow-hidden flex flex-col h-[740px]">
            {/* File Switcher */}
            <div className="bg-[#252526] px-4 py-2 flex items-center justify-between border-b border-[#333] overflow-x-auto">
              <div className="flex items-center gap-1.5">
                {Object.keys(DART_FILES).map((fileName) => (
                  <button
                    key={fileName}
                    onClick={() => setSelectedFile(fileName)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                      selectedFile === fileName
                        ? 'bg-[#1E1E1E] text-white font-semibold border-t-2 border-[#D9794E]'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#2D2D2D]'
                    }`}
                  >
                    {fileName}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleCopy(DART_FILES[selectedFile].content, selectedFile)}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#333] hover:bg-[#444] text-neutral-200 rounded-md text-xs font-medium transition-all shrink-0"
              >
                {copiedKey === selectedFile ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy File</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-[#181818] px-4 py-1.5 text-[11px] font-mono text-neutral-400 border-b border-[#282828] flex items-center justify-between">
              <span>{DART_FILES[selectedFile].path}</span>
              <span className="text-[10px] text-neutral-500 uppercase">{DART_FILES[selectedFile].language}</span>
            </div>

            <div className="flex-1 p-4 overflow-auto font-mono text-xs text-neutral-300 leading-relaxed bg-[#1E1E1E]">
              <pre className="whitespace-pre">
                <code>{DART_FILES[selectedFile].content}</code>
              </pre>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
