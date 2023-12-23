const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return its domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For "prettyandsimple@example.com", the output should be "example.com"
 *
 */
function getEmailDomain(email) {
  const regex = /@([a-zA-Z0-9.-]+)$/;
  const match = email.match(regex);
  if (match) {
    return match[1];
  }
  throw new Error('Invalid email address');
}

module.exports = {
  getEmailDomain
};
