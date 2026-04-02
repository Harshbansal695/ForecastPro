const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// @route   GET /api/dashboard/stats
// @desc    Get dashboard statistics
// @access  Private
router.get('/stats', auth, async (req, res) => {
  try {
    // Mock data - in production, this would come from database
    const stats = {
      totalSales: 1250000,
      totalOrders: 15000,
      averageOrderValue: 83.33,
      growthRate: 12.5,
      topCategories: [
        { name: 'Electronics', sales: 450000, orders: 5000 },
        { name: 'Furniture', sales: 320000, orders: 3500 },
        { name: 'Home & Garden', sales: 280000, orders: 4000 },
        { name: 'Sports & Leisure', sales: 200000, orders: 2500 }
      ],
      regionalSales: [
        { region: 'Southeast', sales: 600000, percentage: 48 },
        { region: 'South', sales: 350000, percentage: 28 },
        { region: 'Northeast', sales: 200000, percentage: 16 },
        { region: 'North', sales: 100000, percentage: 8 }
      ],
      seasonalTrends: [
        { month: 'Jan', sales: 95000 },
        { month: 'Feb', sales: 88000 },
        { month: 'Mar', sales: 102000 },
        { month: 'Apr', sales: 110000 },
        { month: 'May', sales: 125000 },
        { month: 'Jun', sales: 135000 }
      ]
    };

    res.json(stats);
  } catch (error) {
    console.error('Dashboard stats error:', error);
    res.status(500).json({ message: 'Error fetching dashboard statistics' });
  }
});

module.exports = router;

