const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { generateARIMAForecast, generateLSTMForecast } = require('../utils/forecastModels');

// @route   POST /api/forecast/arima
// @desc    Generate ARIMA forecast
// @access  Private
router.post('/arima', auth, async (req, res) => {
  try {
    const { data, periods = 12, category, region } = req.body;

    if (!data || !Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ message: 'Valid time series data is required' });
    }

    const forecast = await generateARIMAForecast(data, periods);

    res.json({
      success: true,
      forecast,
      category: category || 'all',
      region: region || 'all',
      model: 'ARIMA',
      periods
    });
  } catch (error) {
    console.error('ARIMA forecast error:', error);
    res.status(500).json({ message: 'Error generating ARIMA forecast', error: error.message });
  }
});

// @route   POST /api/forecast/lstm
// @desc    Generate LSTM forecast
// @access  Private
router.post('/lstm', auth, async (req, res) => {
  try {
    const { data, periods = 12, category, region } = req.body;

    if (!data || !Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ message: 'Valid time series data is required' });
    }

    const forecast = await generateLSTMForecast(data, periods);

    res.json({
      success: true,
      forecast,
      category: category || 'all',
      region: region || 'all',
      model: 'LSTM',
      periods
    });
  } catch (error) {
    console.error('LSTM forecast error:', error);
    res.status(500).json({ message: 'Error generating LSTM forecast', error: error.message });
  }
});

// @route   POST /api/forecast/hybrid
// @desc    Generate hybrid ARIMA + LSTM forecast
// @access  Private
router.post('/hybrid', auth, async (req, res) => {
  try {
    const { data, periods = 12, category, region } = req.body;

    if (!data || !Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ message: 'Valid time series data is required' });
    }

    const [arimaForecast, lstmForecast] = await Promise.all([
      generateARIMAForecast(data, periods),
      generateLSTMForecast(data, periods)
    ]);

    // Combine forecasts (weighted average: 50% ARIMA, 50% LSTM)
    const hybridForecast = arimaForecast.map((arima, index) => ({
      date: arima.date,
      value: (arima.value + lstmForecast[index].value) / 2,
      arimaValue: arima.value,
      lstmValue: lstmForecast[index].value
    }));

    res.json({
      success: true,
      forecast: hybridForecast,
      arimaForecast,
      lstmForecast,
      category: category || 'all',
      region: region || 'all',
      model: 'Hybrid (ARIMA + LSTM)',
      periods
    });
  } catch (error) {
    console.error('Hybrid forecast error:', error);
    res.status(500).json({ message: 'Error generating hybrid forecast', error: error.message });
  }
});

module.exports = router;

