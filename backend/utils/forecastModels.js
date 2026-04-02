// Simplified forecasting models
// In production, you would use proper libraries like statsmodels for ARIMA and TensorFlow.js for LSTM

/**
 * Generate ARIMA forecast (simplified version)
 * In production, use proper ARIMA implementation
 */
const generateARIMAForecast = async (data, periods = 12) => {
  // Simplified ARIMA-like forecast using moving average and trend
  const values = data.map(d => typeof d === 'object' ? d.value : d);
  const dates = data[0]?.date ? data.map(d => d.date) : null;

  // Calculate moving average
  const window = Math.min(3, Math.floor(values.length / 3));
  const recentValues = values.slice(-window);
  const avg = recentValues.reduce((a, b) => a + b, 0) / recentValues.length;

  // Calculate trend
  const trend = (values[values.length - 1] - values[0]) / values.length;

  // Generate forecast
  const forecast = [];
  const lastDate = dates ? new Date(dates[dates.length - 1]) : new Date();
  
  for (let i = 1; i <= periods; i++) {
    const forecastValue = avg + (trend * i) + (Math.random() * avg * 0.1 - avg * 0.05);
    const forecastDate = new Date(lastDate);
    forecastDate.setMonth(forecastDate.getMonth() + i);
    
    forecast.push({
      date: forecastDate.toISOString().split('T')[0],
      value: Math.max(0, Math.round(forecastValue * 100) / 100)
    });
  }

  return forecast;
};

/**
 * Generate LSTM forecast (simplified version)
 * In production, use TensorFlow.js or Python backend with TensorFlow
 */
const generateLSTMForecast = async (data, periods = 12) => {
  // Simplified LSTM-like forecast using exponential smoothing
  const values = data.map(d => typeof d === 'object' ? d.value : d);
  const dates = data[0]?.date ? data.map(d => d.date) : null;

  // Exponential smoothing parameters
  const alpha = 0.3; // Smoothing factor
  let smoothed = values[0];

  // Apply exponential smoothing
  for (let i = 1; i < values.length; i++) {
    smoothed = alpha * values[i] + (1 - alpha) * smoothed;
  }

  // Calculate seasonal component (simplified)
  const seasonalPattern = [];
  const seasonLength = Math.min(12, Math.floor(values.length / 2));
  for (let i = 0; i < seasonLength; i++) {
    const seasonalValues = [];
    for (let j = i; j < values.length; j += seasonLength) {
      seasonalValues.push(values[j]);
    }
    seasonalPattern.push(seasonalValues.reduce((a, b) => a + b, 0) / seasonalValues.length);
  }

  // Generate forecast
  const forecast = [];
  const lastDate = dates ? new Date(dates[dates.length - 1]) : new Date();
  
  for (let i = 1; i <= periods; i++) {
    const seasonalIndex = (i - 1) % seasonalPattern.length;
    const seasonalFactor = seasonalPattern[seasonalIndex] / (seasonalPattern.reduce((a, b) => a + b, 0) / seasonalPattern.length);
    const forecastValue = smoothed * seasonalFactor * (1 + 0.02 * i); // Slight growth
    const forecastDate = new Date(lastDate);
    forecastDate.setMonth(forecastDate.getMonth() + i);
    
    forecast.push({
      date: forecastDate.toISOString().split('T')[0],
      value: Math.max(0, Math.round(forecastValue * 100) / 100)
    });
  }

  return forecast;
};

module.exports = {
  generateARIMAForecast,
  generateLSTMForecast
};

