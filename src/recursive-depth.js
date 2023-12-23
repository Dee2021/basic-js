const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let depth = 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const currentDepth = this.calculateDepth(arr[i]) + 1;
        depth = Math.max(depth, currentDepth);
      }
    }

    return depth;
  }
}

module.exports = { DepthCalculator };

