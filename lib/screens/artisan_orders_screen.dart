// lib/screens/artisan_orders_screen.dart
// Production-grade Flutter screen matching 'o1- order first page.png'
// Artisan Orders & Production Management Hub

import 'package:flutter/material.dart';
import '../services/order_service.dart';
import '../services/production_service.dart';
import '../services/collaboration_service.dart';
import 'artisan_buyer_chat_screen.dart';

/// Screen representing the Artisan Orders Hub (matching 'o1- order first page.png')
/// Includes 2x2 production metrics, cluster capacity alert, filter tabs,
/// active purchase orders with live progress bars, escrow details, and bottom navigation.
class ArtisanOrdersScreen extends StatefulWidget {
  final VoidCallback? onBack;
  final Function(int)? onNavigateTab;
  final VoidCallback? onCollaborateTap;
  final Function(String orderId, String buyerName, int totalQty, int completed)? onOrderTap;
  final VoidCallback? onOrderRequestTap;
  final String artisanName;
  final String clusterName;

  const ArtisanOrdersScreen({
    super.key,
    this.onBack,
    this.onNavigateTab,
    this.onCollaborateTap,
    this.onOrderTap,
    this.onOrderRequestTap,
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

  void _showUpdateProgressModal() {
    int currentProgress = _bambooPcsCompleted;
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => StatefulBuilder(
        builder: (context, setModalState) => Container(
          decoration: const BoxDecoration(
            color: Color(0xFFFFFDFB),
            borderRadius: BorderRadius.vertical(top: Radius.circular(28.0)),
          ),
          padding: EdgeInsets.only(
            left: 20.0,
            right: 20.0,
            top: 20.0,
            bottom: MediaQuery.of(context).viewInsets.bottom + 24.0,
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Container(
                  width: 44.0,
                  height: 4.0,
                  decoration: BoxDecoration(
                    color: const Color(0xFFE5D5CB),
                    borderRadius: BorderRadius.circular(2.0),
                  ),
                ),
              ),
              const SizedBox(height: 16.0),
              const Text(
                'Update Production Progress',
                style: TextStyle(
                  fontSize: 18.0,
                  fontWeight: FontWeight.w800,
                  color: Color(0xFF1F1612),
                ),
              ),
              const SizedBox(height: 4.0),
              const Text(
                '#PO-FAB-8821 • 120 × Woven Bamboo Fruit Basket',
                style: TextStyle(fontSize: 12.5, color: Color(0xFF6D4C41)),
              ),
              const SizedBox(height: 20.0),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    'Units Completed',
                    style: TextStyle(fontSize: 14.0, fontWeight: FontWeight.w700),
                  ),
                  Text(
                    '$currentProgress / $_bambooPcsTotal pcs (${((currentProgress / _bambooPcsTotal) * 100).toInt()}%)',
                    style: const TextStyle(
                      fontSize: 14.0,
                      fontWeight: FontWeight.w800,
                      color: Color(0xFF8C3A16),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10.0),
              Slider(
                value: currentProgress.toDouble(),
                min: 0,
                max: _bambooPcsTotal.toDouble(),
                divisions: _bambooPcsTotal,
                activeColor: const Color(0xFF8C3A16),
                inactiveColor: const Color(0xFFEADFD6),
                onChanged: (val) {
                  setModalState(() {
                    currentProgress = val.toInt();
                  });
                },
              ),
              const SizedBox(height: 16.0),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      style: OutlinedButton.styleFrom(
                        padding: const EdgeInsets.symmetric(vertical: 14.0),
                        side: const BorderSide(color: Color(0xFFD7CCC8)),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14.0)),
                      ),
                      onPressed: () => Navigator.pop(context),
                      child: const Text('Cancel', style: TextStyle(color: Color(0xFF5D4037))),
                    ),
                  ),
                  const SizedBox(width: 12.0),
                  Expanded(
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        backgroundColor: const Color(0xFF8C3A16),
                        foregroundColor: Colors.white,
                        padding: const EdgeInsets.symmetric(vertical: 14.0),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14.0)),
                      ),
                      onPressed: () {
                        setState(() {
                          _bambooPcsCompleted = currentProgress;
                        });
                        ProductionService().logMilestone(
                          orderId: '44444444-4444-4444-4444-444444444441',
                          milestone: 'Lattice Weaving & Progress Update',
                          description: 'Updated artisan workshop progress to $_bambooPcsCompleted/$_bambooPcsTotal units.',
                          unitsMilestone: _bambooPcsCompleted,
                        );
                        Navigator.pop(context);
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text('Updated progress to $_bambooPcsCompleted / $_bambooPcsTotal pcs!'),
                            backgroundColor: const Color(0xFF2E7D32),
                          ),
                        );
                      },
                      child: const Text('Save Progress', style: TextStyle(fontWeight: FontWeight.bold)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _showDispatchModal() {
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFFFFFDFB),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),
        title: Row(
          children: const [
            Icon(Icons.local_shipping_outlined, color: Color(0xFF8C3A16)),
            SizedBox(width: 8.0),
            Text('Dispatch Delivery', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 18.0)),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const [
            Text(
              'Select logistics partner for FabIndia Retail PO #8821:',
              style: TextStyle(fontSize: 13.0, color: Color(0xFF5D4037)),
            ),
            SizedBox(height: 12.0),
            _LogisticsOption(title: 'India Post (Speed Post Parcel)', estimate: '₹420 • 2-3 Days'),
            SizedBox(height: 8.0),
            _LogisticsOption(title: 'Delhivery Surface B2B', estimate: '₹550 • 2 Days', isBest: true),
            SizedBox(height: 8.0),
            _LogisticsOption(title: 'ONDC Logistics Network', estimate: '₹380 • 2-4 Days'),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx),
            child: const Text('Close', style: TextStyle(color: Color(0xFF7A685F))),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF8C3A16),
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
            ),
            onPressed: () {
              Navigator.pop(ctx);
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('🚚 Dispatch pickup request scheduled with Delhivery!'),
                  backgroundColor: Color(0xFF2E7D32),
                ),
              );
            },
            child: const Text('Schedule Pickup'),
          ),
        ],
      ),
    );
  }

  void _showPoSpecsModal() {
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFFFFFDFB),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),
        title: const Text(
          'Purchase Order Specifications',
          style: TextStyle(fontWeight: FontWeight.w800, fontSize: 17.0, color: Color(0xFF1F1612)),
        ),
        content: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: const [
              Text('PO: #PO-TBS-4419', style: TextStyle(fontWeight: FontWeight.w700, color: Color(0xFF8C3A16))),
              SizedBox(height: 4.0),
              Text('Bulk Buyer: The Bombay Store (Mumbai Retail Chain)'),
              SizedBox(height: 12.0),
              Text('Item: 50 × Golden Cane Planter Basket', style: TextStyle(fontWeight: FontWeight.w600)),
              Text('Dimensions: 10" Base Dia × 8" Height'),
              Text('Material: 100% Grade-A Assam Woven Cane'),
              Text('Lacquer: Non-toxic water-based clear finish'),
              SizedBox(height: 12.0),
              Text('Payment Terms:', style: TextStyle(fontWeight: FontWeight.w700)),
              Text('• 100% Escrow secured in ICICI Hunar Escrow'),
              Text('• 40% released on order acceptance'),
              Text('• 60% released upon delivery inspection'),
            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx),
            child: const Text('Close', style: TextStyle(color: Color(0xFF7A685F))),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF8C3A16),
              foregroundColor: Colors.white,
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
            ),
            onPressed: () {
              Navigator.pop(ctx);
              setState(() {
                _isBombayStoreAccepted = true;
              });
              OrderService().updateOrderStatus('44444444-4444-4444-4444-444444444442', 'accepted');
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('✅ Accepted PO #PO-TBS-4419! 40% advance released to escrow.'),
                  backgroundColor: Color(0xFF2E7D32),
                ),
              );
            },
            child: const Text('Accept Order'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFDFBF9),
      body: SafeArea(
        child: Column(
          children: [
            // Top App Bar
            _buildTopAppBar(),

            // Scrollable Content
            Expanded(
              child: SingleChildScrollView(
                physics: const BouncingScrollPhysics(),
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 10.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Title Header with "Live Hub" badge
                    _buildSectionHeader(),

                    const SizedBox(height: 14.0),

                    // 2x2 Metrics Cards
                    _buildMetricsGrid(),

                    const SizedBox(height: 16.0),

                    // Cluster Capacity Alert Card
                    _buildClusterAlertCard(),

                    const SizedBox(height: 16.0),

                    // Filter Tabs (All Orders, In Production, Payment Due)
                    _buildFilterTabs(),

                    const SizedBox(height: 16.0),

                    // Order Card 1 (FabIndia Retail Ltd.)
                    if (_selectedFilterIndex == 0 || _selectedFilterIndex == 1)
                      _buildFabIndiaOrderCard(),

                    if (_selectedFilterIndex == 0 || _selectedFilterIndex == 1)
                      const SizedBox(height: 14.0),

                    // Order Card 2 (The Bombay Store)
                    if (_selectedFilterIndex == 0 || _selectedFilterIndex == 2)
                      _buildBombayStoreOrderCard(),

                    const SizedBox(height: 24.0),
                  ],
                ),
              ),
            ),

            // Bottom Navigation Bar (Orders tab active)
            _buildBottomNavigationBar(),
          ],
        ),
      ),
    );
  }

  Widget _buildTopAppBar() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      decoration: const BoxDecoration(
        color: Color(0xFFFFFDFB),
        border: Border(bottom: BorderSide(color: Color(0xFFEADFD6))),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Left: Menu Hamburger
          IconButton(
            icon: const Icon(Icons.menu, color: Color(0xFF2D2421)),
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('HunarSangam Craft Maker Menu opened')),
              );
            },
          ),

          // Center-left: Logo + Artisan Pill + Cluster Location
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  children: [
                    const Text(
                      'HunarSangam',
                      style: TextStyle(
                        fontSize: 18.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF7C3F24),
                        letterSpacing: -0.3,
                      ),
                    ),
                    const SizedBox(width: 6.0),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6.0, vertical: 1.5),
                      decoration: BoxDecoration(
                        color: const Color(0xFFEFEBE9),
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                      child: const Text(
                        'Craft Maker',
                        style: TextStyle(
                          fontSize: 10.0,
                          fontWeight: FontWeight.w600,
                          color: Color(0xFF5D4037),
                        ),
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    const Icon(Icons.location_on, size: 12.0, color: Color(0xFF2E7D32)),
                    const SizedBox(width: 2.0),
                    Text(
                      widget.clusterName,
                      style: const TextStyle(
                        fontSize: 11.0,
                        fontWeight: FontWeight.w600,
                        color: Color(0xFF4E342E),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),

          // Right: Audio Assistance Icon + Language Pill
          Row(
            children: [
              Container(
                width: 32.0,
                height: 32.0,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  border: Border.all(color: const Color(0xFFD7CCC8)),
                  color: Colors.white,
                ),
                child: IconButton(
                  padding: EdgeInsets.zero,
                  icon: const Icon(Icons.hearing, size: 17.0, color: Color(0xFF8C3A16)),
                  onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('🎙️ Audio readout of orders active')),
                    );
                  },
                ),
              ),
              const SizedBox(width: 8.0),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
                decoration: BoxDecoration(
                  border: Border.all(color: const Color(0xFF3E2723), width: 1.0),
                  borderRadius: BorderRadius.circular(6.0),
                ),
                child: Row(
                  children: const [
                    Text(
                      'English',
                      style: TextStyle(
                        fontSize: 11.5,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2D2421),
                      ),
                    ),
                    SizedBox(width: 3.0),
                    Icon(Icons.unfold_more, size: 14.0, color: Color(0xFF2D2421)),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildSectionHeader() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Craft Maker Orders',
              style: TextStyle(
                fontSize: 24.0,
                fontWeight: FontWeight.w900,
                color: Color(0xFF1F1612),
                letterSpacing: -0.5,
              ),
            ),
            const SizedBox(height: 2.0),
            Text(
              'Production management for ${widget.artisanName}',
              style: const TextStyle(
                fontSize: 12.0,
                fontWeight: FontWeight.w500,
                color: Color(0xFF5D4037),
              ),
            ),
          ],
        ),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 4.0),
          decoration: BoxDecoration(
            color: const Color(0xFFE8F5E9),
            borderRadius: BorderRadius.circular(20.0),
            border: Border.all(color: const Color(0xFFC8E6C9)),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: const [
              Icon(Icons.circle, size: 8.0, color: Color(0xFF2E7D32)),
              SizedBox(width: 5.0),
              Text(
                'Live Hub',
                style: TextStyle(
                  fontSize: 11.5,
                  fontWeight: FontWeight.w700,
                  color: Color(0xFF2E7D32),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildMetricsGrid() {
    return Column(
      children: [
        // Row 1: Total Active & Bulk Orders
        Row(
          children: [
            Expanded(
              child: _MetricCard(
                title: 'Total Active',
                icon: Icons.account_balance_wallet_outlined,
                value: '₹1,42,000',
                subtextWidget: Row(
                  children: const [
                    Icon(Icons.lock_outline, size: 12.0, color: Color(0xFF2E7D32)),
                    SizedBox(width: 3.0),
                    Text(
                      '₹56,800 Escrow Advance',
                      style: TextStyle(
                        fontSize: 10.5,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF2E7D32),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(width: 10.0),
            Expanded(
              child: _MetricCard(
                title: 'Bulk Orders',
                icon: Icons.receipt_long_outlined,
                value: '3 Active POs',
                subtextWidget: const Text(
                  '2 Producing • 1 Sample',
                  style: TextStyle(
                    fontSize: 11.0,
                    fontWeight: FontWeight.w500,
                    color: Color(0xFF6D4C41),
                  ),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 10.0),
        // Row 2: March Capacity & SLA Health
        Row(
          children: [
            Expanded(
              child: _CapacityMetricCard(
                title: 'March Capacity',
                icon: Icons.donut_large_outlined,
                percentage: '92%',
                progress: 0.92,
                subtext: '230 / 250 pcs booked',
              ),
            ),
            const SizedBox(width: 10.0),
            Expanded(
              child: _MetricCard(
                title: 'SLA Health',
                icon: Icons.verified_outlined,
                value: '0 Delayed',
                valueColor: const Color(0xFF2E7D32),
                subtextWidget: const Text(
                  '100% On-Time Record',
                  style: TextStyle(
                    fontSize: 11.0,
                    fontWeight: FontWeight.w500,
                    color: Color(0xFF6D4C41),
                  ),
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildClusterAlertCard() {
    return Container(
      padding: const EdgeInsets.all(14.0),
      decoration: BoxDecoration(
        color: const Color(0xFFFFF5EE),
        borderRadius: BorderRadius.circular(18.0),
        border: Border.all(color: const Color(0xFFF3DFD5)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.all(5.0),
                    decoration: BoxDecoration(
                      color: const Color(0xFFFDECE8),
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    child: const Icon(Icons.warning_amber_rounded, size: 16.0, color: Color(0xFFC53030)),
                  ),
                  const SizedBox(width: 8.0),
                  const Text(
                    'Cluster Capacity Alert',
                    style: TextStyle(
                      fontSize: 13.0,
                      fontWeight: FontWeight.w800,
                      color: Color(0xFF8C3A16),
                    ),
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 2.5),
                decoration: BoxDecoration(
                  color: const Color(0xFFA84318),
                  borderRadius: BorderRadius.circular(6.0),
                ),
                child: const Text(
                  'New B2B Lead',
                  style: TextStyle(
                    fontSize: 10.0,
                    fontWeight: FontWeight.w700,
                    color: Colors.white,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 8.0),
          const Text(
            'New FabIndia Inquiry (400 pcs) exceeds your single capacity of 250 pcs. Team up with 2 cluster artisans to accept this order!',
            style: TextStyle(
              fontSize: 12.0,
              fontWeight: FontWeight.w500,
              color: Color(0xFF4E342E),
              height: 1.35,
            ),
          ),
          const SizedBox(height: 12.0),
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF8C3A16),
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(vertical: 12.0),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
                elevation: 0,
              ),
              onPressed: () {
                widget.onCollaborateTap?.call();
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('🤝 Opening Cluster Collaboration Screen...')),
                );
              },
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text(
                    'Collaborate to Accept (Screen 22)',
                    style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.w800),
                  ),
                  SizedBox(width: 6.0),
                  Icon(Icons.arrow_forward, size: 15.0),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFilterTabs() {
    final filters = ['All Orders (3)', 'In Production (2)', 'Payment Due (1)'];
    return Row(
      children: List.generate(filters.length, (index) {
        final isSelected = _selectedFilterIndex == index;
        return Padding(
          padding: const EdgeInsets.only(right: 8.0),
          child: GestureDetector(
            onTap: () {
              setState(() {
                _selectedFilterIndex = index;
              });
            },
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 8.0),
              decoration: BoxDecoration(
                color: isSelected ? const Color(0xFF8C3A16) : Colors.white,
                borderRadius: BorderRadius.circular(20.0),
                border: Border.all(
                  color: isSelected ? const Color(0xFF8C3A16) : const Color(0xFFD7CCC8),
                ),
              ),
              child: Text(
                filters[index],
                style: TextStyle(
                  fontSize: 11.5,
                  fontWeight: isSelected ? FontWeight.w800 : FontWeight.w600,
                  color: isSelected ? Colors.white : const Color(0xFF5D4037),
                ),
              ),
            ),
          ),
        );
      }),
    );
  }

  Widget _buildFabIndiaOrderCard() {
    final progressPercent = (_bambooPcsCompleted / _bambooPcsTotal);
    return InkWell(
      onTap: () => widget.onOrderTap?.call('PO-FB-89412', 'FabIndia Retail Ltd.', 120, _bambooPcsCompleted),
      borderRadius: BorderRadius.circular(18.0),
      child: Container(
        padding: const EdgeInsets.all(14.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18.0),
        border: Border.all(color: const Color(0xFFEADFD6)),
        boxShadow: const [
          BoxShadow(
            color: Color(0x0A000000),
            blurRadius: 4.0,
            offset: Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Buyer Name & In Production Badge
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: const [
                      Icon(Icons.check_circle, size: 14.0, color: Color(0xFF2E7D32)),
                      SizedBox(width: 4.0),
                      Text(
                        'FabIndia Retail Ltd.',
                        style: TextStyle(
                          fontSize: 14.0,
                          fontWeight: FontWeight.w800,
                          color: Color(0xFF1F1612),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 1.0),
                  const Text(
                    'New Delhi • Verified Corporate Bulk Buyer',
                    style: TextStyle(fontSize: 11.0, color: Color(0xFF6D4C41)),
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 9.0, vertical: 3.0),
                decoration: BoxDecoration(
                  color: const Color(0xFFE8F5E9),
                  borderRadius: BorderRadius.circular(14.0),
                  border: Border.all(color: const Color(0xFFC8E6C9)),
                ),
                child: const Text(
                  'In Production',
                  style: TextStyle(
                    fontSize: 10.5,
                    fontWeight: FontWeight.w700,
                    color: Color(0xFF2E7D32),
                  ),
                ),
              ),
            ],
          ),

          const SizedBox(height: 12.0),

          // PO Number, Product Name & Value
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  Text(
                    '#PO-FAB-8821',
                    style: TextStyle(
                      fontSize: 10.5,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF8D6E63),
                      fontFamily: 'monospace',
                    ),
                  ),
                  SizedBox(height: 2.0),
                  Text(
                    '120 × Woven Bamboo Fruit\nBasket',
                    style: TextStyle(
                      fontSize: 13.0,
                      fontWeight: FontWeight.w800,
                      color: Color(0xFF1F1612),
                      height: 1.25,
                    ),
                  ),
                ],
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: const [
                  Text(
                    '₹33,600',
                    style: TextStyle(
                      fontSize: 16.0,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFF8C3A16),
                    ),
                  ),
                  SizedBox(height: 2.0),
                  Text(
                    '40% Advance (₹13,440) in\nBank',
                    textAlign: TextAlign.right,
                    style: TextStyle(
                      fontSize: 10.0,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF2E7D32),
                      height: 1.2,
                    ),
                  ),
                ],
              ),
            ],
          ),

          const SizedBox(height: 12.0),

          // Status & Progress Box
          Container(
            padding: const EdgeInsets.all(10.0),
            decoration: BoxDecoration(
              color: const Color(0xFFFFF8F4),
              borderRadius: BorderRadius.circular(12.0),
              border: Border.all(color: const Color(0xFFF3E5DC)),
            ),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text(
                      'Production Status',
                      style: TextStyle(fontSize: 11.0, fontWeight: FontWeight.w700, color: Color(0xFF4E342E)),
                    ),
                    Text(
                      '$_bambooPcsCompleted / $_bambooPcsTotal pcs done (${(progressPercent * 100).toInt()}%)',
                      style: const TextStyle(
                        fontSize: 11.0,
                        fontWeight: FontWeight.w800,
                        color: Color(0xFF8C3A16),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 6.0),
                ClipRRect(
                  borderRadius: BorderRadius.circular(4.0),
                  child: LinearProgressIndicator(
                    value: progressPercent,
                    backgroundColor: const Color(0xFFE8D9CF),
                    valueColor: const AlwaysStoppedAnimation<Color>(Color(0xFF8C3A16)),
                    minHeight: 6.0,
                  ),
                ),
                const SizedBox(height: 8.0),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: const [
                    Row(
                      children: [
                        Icon(Icons.schedule, size: 12.0, color: Color(0xFF6D4C41)),
                        SizedBox(width: 4.0),
                        Text(
                          'Next: QC & Packaging',
                          style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w600, color: Color(0xFF6D4C41)),
                        ),
                      ],
                    ),
                    Text(
                      'Due in 4 days (28 Mar)',
                      style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w700, color: Color(0xFFC53030)),
                    ),
                  ],
                ),
              ],
            ),
          ),

          const SizedBox(height: 12.0),

          // Action Buttons: Update Progress & Dispatch Delivery
          Row(
            children: [
              Expanded(
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFF8C3A16),
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 11.0),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
                    elevation: 0,
                  ),
                  onPressed: _showUpdateProgressModal,
                  child: const Text(
                    'Update Progress',
                    style: TextStyle(fontSize: 12.0, fontWeight: FontWeight.w800),
                  ),
                ),
              ),
              const SizedBox(width: 10.0),
              Expanded(
                child: OutlinedButton(
                  style: OutlinedButton.styleFrom(
                    backgroundColor: const Color(0xFFFAF5F0),
                    padding: const EdgeInsets.symmetric(vertical: 11.0),
                    side: const BorderSide(color: Color(0xFFD7CCC8)),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
                  ),
                  onPressed: _showDispatchModal,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: const [
                      Icon(Icons.local_shipping_outlined, size: 15.0, color: Color(0xFF2D2421)),
                      SizedBox(width: 4.0),
                      Text(
                        'Dispatch Delivery',
                        style: TextStyle(fontSize: 12.0, fontWeight: FontWeight.w700, color: Color(0xFF2D2421)),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 8.0),
          SizedBox(
            width: double.infinity,
            child: OutlinedButton.icon(
              style: OutlinedButton.styleFrom(
                backgroundColor: const Color(0xFFEFEBE9),
                foregroundColor: const Color(0xFF4E342E),
                side: const BorderSide(color: Color(0xFFD7CCC8)),
                padding: const EdgeInsets.symmetric(vertical: 10.0),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
              ),
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const ArtisanBuyerChatScreen(
                      buyerName: 'FabIndia Retail Ltd. (Bulk Buyer)',
                      orderId: 'PO-FAB-8821',
                      orderTitle: '120 × Woven Bamboo Fruit Basket',
                      escrowAmount: '₹54,000',
                      deliveryDate: '28 Mar',
                    ),
                  ),
                );
              },
              icon: const Icon(Icons.chat_bubble_outline, size: 16.0, color: Color(0xFF8C3A16)),
              label: const Text(
                '💬 Chat with Bulk Buyer (FabIndia)',
                style: TextStyle(fontSize: 12.0, fontWeight: FontWeight.w800, color: Color(0xFF4E342E)),
              ),
            ),
          ),
        ],
      ),
    ),
  );
}

  Widget _buildBombayStoreOrderCard() {
    return InkWell(
      onTap: () {
        if (widget.onOrderRequestTap != null) {
          widget.onOrderRequestTap!();
        } else {
          widget.onOrderTap?.call('PO-TBS-4419', 'The Bombay Store', 50, 0);
        }
      },
      borderRadius: BorderRadius.circular(18.0),
      child: Container(
        padding: const EdgeInsets.all(14.0),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18.0),
          border: Border.all(color: const Color(0xFFEADFD6)),
          boxShadow: const [
            BoxShadow(
              color: Color(0x0A000000),
              blurRadius: 4.0,
              offset: Offset(0, 2),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Buyer Name & New Order Badge
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: const [
                      Icon(Icons.check_circle, size: 14.0, color: Color(0xFF2E7D32)),
                      SizedBox(width: 4.0),
                      Text(
                        'The Bombay Store',
                        style: TextStyle(
                          fontSize: 14.0,
                          fontWeight: FontWeight.w800,
                          color: Color(0xFF1F1612),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 1.0),
                  const Text(
                    'Mumbai • Retail Chain Bulk Buyer',
                    style: TextStyle(fontSize: 11.0, color: Color(0xFF6D4C41)),
                  ),
                ],
              ),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 9.0, vertical: 3.0),
                decoration: BoxDecoration(
                  color: _isBombayStoreAccepted ? const Color(0xFFE8F5E9) : const Color(0xFFFFF3E0),
                  borderRadius: BorderRadius.circular(14.0),
                  border: Border.all(
                    color: _isBombayStoreAccepted ? const Color(0xFFC8E6C9) : const Color(0xFFFFE0B2),
                  ),
                ),
                child: Text(
                  _isBombayStoreAccepted ? 'In Production' : 'New order',
                  style: TextStyle(
                    fontSize: 10.5,
                    fontWeight: FontWeight.w700,
                    color: _isBombayStoreAccepted ? const Color(0xFF2E7D32) : const Color(0xFFE65100),
                  ),
                ),
              ),
            ],
          ),

          const SizedBox(height: 12.0),

          // PO Number, Product Name & Value
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: const [
                  Text(
                    '#PO-TBS-4419',
                    style: TextStyle(
                      fontSize: 10.5,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF8D6E63),
                      fontFamily: 'monospace',
                    ),
                  ),
                  SizedBox(height: 2.0),
                  Text(
                    '50 × Golden Cane Planter\nBasket',
                    style: TextStyle(
                      fontSize: 13.0,
                      fontWeight: FontWeight.w800,
                      color: Color(0xFF1F1612),
                      height: 1.25,
                    ),
                  ),
                ],
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: const [
                  Text(
                    '₹21,000',
                    style: TextStyle(
                      fontSize: 16.0,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFF8C3A16),
                    ),
                  ),
                  SizedBox(height: 2.0),
                  Text(
                    'Advance Escrow\nSecured',
                    textAlign: TextAlign.right,
                    style: TextStyle(
                      fontSize: 10.0,
                      fontWeight: FontWeight.w600,
                      color: Color(0xFF2E7D32),
                      height: 1.2,
                    ),
                  ),
                ],
              ),
            ],
          ),

          const SizedBox(height: 12.0),

          // Material Procurement Status
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10.0, vertical: 8.0),
            decoration: BoxDecoration(
              color: const Color(0xFFFFF8F4),
              borderRadius: BorderRadius.circular(10.0),
              border: Border.all(color: const Color(0xFFF3E5DC)),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: const [
                Row(
                  children: [
                    Icon(Icons.inventory_2_outlined, size: 14.0, color: Color(0xFF8C3A16)),
                    SizedBox(width: 5.0),
                    Text(
                      'Assam Cane #Grade-A Procured',
                      style: TextStyle(fontSize: 11.0, fontWeight: FontWeight.w600, color: Color(0xFF4E342E)),
                    ),
                  ],
                ),
                Text(
                  'Due: 05 April (16 days)',
                  style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w500, color: Color(0xFF6D4C41)),
                ),
              ],
            ),
          ),

          const SizedBox(height: 12.0),

          // Action Row: View PO & Specs, View Details, Accept Order
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              GestureDetector(
                onTap: _showPoSpecsModal,
                child: Row(
                  children: const [
                    Icon(Icons.description_outlined, size: 14.0, color: Color(0xFF8C3A16)),
                    SizedBox(width: 4.0),
                    Text(
                      'View PO & Specs',
                      style: TextStyle(
                        fontSize: 11.5,
                        fontWeight: FontWeight.w700,
                        color: Color(0xFF8C3A16),
                        decoration: TextDecoration.underline,
                      ),
                    ),
                  ],
                ),
              ),
              Row(
                children: [
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF8C3A16),
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 8.0),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
                      elevation: 0,
                    ),
                    onPressed: _showPoSpecsModal,
                    child: const Text(
                      'View Details',
                      style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700),
                    ),
                  ),
                  const SizedBox(width: 8.0),
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: _isBombayStoreAccepted ? const Color(0xFF2E7D32) : const Color(0xFF8C3A16),
                      foregroundColor: Colors.white,
                      padding: const EdgeInsets.symmetric(horizontal: 12.0, vertical: 8.0),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
                      elevation: 0,
                    ),
                    onPressed: () {
                      setState(() {
                        _isBombayStoreAccepted = true;
                      });
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text('✅ PO #PO-TBS-4419 Accepted! Escrow 40% released.'),
                          backgroundColor: Color(0xFF2E7D32),
                        ),
                      );
                    },
                    child: Text(
                      _isBombayStoreAccepted ? 'Accepted ✓' : 'Accept order',
                      style: const TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    ),
  );
}

  Widget _buildBottomNavigationBar() {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: Color(0xFFEADFD6))),
      ),
      padding: const EdgeInsets.symmetric(vertical: 6.0, horizontal: 12.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _NavBarItem(
            icon: Icons.storefront_outlined,
            label: 'Home',
            isSelected: false,
            onTap: () => widget.onNavigateTab?.call(0),
          ),
          _NavBarItem(
            icon: Icons.palette_outlined,
            label: 'Products',
            isSelected: false,
            onTap: () => widget.onNavigateTab?.call(1),
          ),
          _NavBarItem(
            icon: Icons.receipt_long,
            label: 'Orders',
            isSelected: true, // Currently on Orders screen
            onTap: () {},
          ),
          _NavBarItem(
            icon: Icons.group_outlined,
            label: 'Collaborate',
            isSelected: false,
            onTap: () => widget.onNavigateTab?.call(3),
          ),
          _NavBarItem(
            icon: Icons.person_outline,
            label: 'Profile',
            isSelected: false,
            onTap: () => widget.onNavigateTab?.call(4),
          ),
        ],
      ),
    );
  }
}

class _MetricCard extends StatelessWidget {
  final String title;
  final IconData icon;
  final String value;
  final Color? valueColor;
  final Widget subtextWidget;

  const _MetricCard({
    required this.title,
    required this.icon,
    required this.value,
    this.valueColor,
    required this.subtextWidget,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16.0),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                title,
                style: const TextStyle(
                  fontSize: 12.0,
                  fontWeight: FontWeight.w700,
                  color: Color(0xFF4E342E),
                ),
              ),
              Icon(icon, size: 18.0, color: const Color(0xFFA84318)),
            ],
          ),
          const SizedBox(height: 6.0),
          Text(
            value,
            style: TextStyle(
              fontSize: 20.0,
              fontWeight: FontWeight.w900,
              color: valueColor ?? const Color(0xFF1F1612),
              letterSpacing: -0.3,
            ),
          ),
          const SizedBox(height: 4.0),
          subtextWidget,
        ],
      ),
    );
  }
}

class _CapacityMetricCard extends StatelessWidget {
  final String title;
  final IconData icon;
  final String percentage;
  final double progress;
  final String subtext;

  const _CapacityMetricCard({
    required this.title,
    required this.icon,
    required this.percentage,
    required this.progress,
    required this.subtext,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16.0),
        border: Border.all(color: const Color(0xFFEADFD6)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                title,
                style: const TextStyle(
                  fontSize: 12.0,
                  fontWeight: FontWeight.w700,
                  color: Color(0xFF4E342E),
                ),
              ),
              Icon(icon, size: 18.0, color: const Color(0xFFA84318)),
            ],
          ),
          const SizedBox(height: 6.0),
          Row(
            children: [
              Text(
                percentage,
                style: const TextStyle(
                  fontSize: 20.0,
                  fontWeight: FontWeight.w900,
                  color: Color(0xFFB85324),
                ),
              ),
              const SizedBox(width: 4.0),
              const Text(
                'Utilized',
                style: TextStyle(
                  fontSize: 12.0,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF6D4C41),
                ),
              ),
            ],
          ),
          const SizedBox(height: 6.0),
          ClipRRect(
            borderRadius: BorderRadius.circular(4.0),
            child: LinearProgressIndicator(
              value: progress,
              backgroundColor: const Color(0xFFEFEBE9),
              valueColor: const AlwaysStoppedAnimation<Color>(Color(0xFF8C3A16)),
              minHeight: 5.0,
            ),
          ),
          const SizedBox(height: 6.0),
          Text(
            subtext,
            style: const TextStyle(
              fontSize: 10.5,
              fontWeight: FontWeight.w500,
              color: Color(0xFF6D4C41),
            ),
          ),
        ],
      ),
    );
  }
}

class _NavBarItem extends StatelessWidget {
  final IconData icon;
  final String label;
  final bool isSelected;
  final VoidCallback onTap;

  const _NavBarItem({
    required this.icon,
    required this.label,
    required this.isSelected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    if (isSelected) {
      return Container(
        padding: const EdgeInsets.symmetric(horizontal: 14.0, vertical: 4.0),
        decoration: BoxDecoration(
          color: const Color(0xFFFCEEE6),
          borderRadius: BorderRadius.circular(16.0),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 20.0, color: const Color(0xFF8C3A16)),
            const SizedBox(height: 2.0),
            Text(
              label,
              style: const TextStyle(
                fontSize: 10.0,
                fontWeight: FontWeight.w800,
                color: Color(0xFF8C3A16),
              ),
            ),
          ],
        ),
      );
    }
    return InkWell(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8.0, vertical: 4.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 20.0, color: const Color(0xFF7A685F)),
            const SizedBox(height: 2.0),
            Text(
              label,
              style: const TextStyle(
                fontSize: 10.0,
                fontWeight: FontWeight.w500,
                color: Color(0xFF7A685F),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _LogisticsOption extends StatelessWidget {
  final String title;
  final String estimate;
  final bool isBest;

  const _LogisticsOption({
    required this.title,
    required this.estimate,
    this.isBest = false,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(10.0),
      decoration: BoxDecoration(
        color: isBest ? const Color(0xFFFFF8F4) : const Color(0xFFFAF5F0),
        borderRadius: BorderRadius.circular(10.0),
        border: Border.all(
          color: isBest ? const Color(0xFFA84318) : const Color(0xFFE5D5CB),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(title, style: const TextStyle(fontSize: 12.0, fontWeight: FontWeight.w600)),
          Text(estimate, style: const TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700, color: Color(0xFF8C3A16))),
        ],
      ),
    );
  }
}
