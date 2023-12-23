const { NotImplementedError } = require('../extensions/index.js');

/**
 * Check if the given string is a valid MAC-48 address.
 *
 * @param {String} inputString
 * @return {Boolean}
 *
 * @example
 * For "00-1B-63-84-45-E6", the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const regex = /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/;
  return regex.test(inputString);
}

module.exports = {
  isMAC48Address
};
