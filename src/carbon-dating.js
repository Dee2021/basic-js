const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // Check if the input is a valid number
  if (typeof sampleActivity !== 'string' || !/^\d+(\.\d+)?$/.test(sampleActivity)) {
    return false;
  }

  // Convert the sample activity to a floating-point number
  const activity = parseFloat(sampleActivity);

  // Check if the activity is within a valid range
  if (activity <= 0 || activity >= MODERN_ACTIVITY) {
    return false;
  }

  // Calculate the age using the formula: age = ln(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / 0.693
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / 0.693);

  return age;
}

module.exports = {
  dateSample
};
