const { NotImplementedError } = require('../extensions/index.js');

/**
 
Extract season from given date and expose the enemy scout!*
@param {Date | FakeDate} date real or fake date
@returns {String} time of the year
*
@example
*
getSeason(new Date(2020, 02, 31)) => 'spring'
**/
function getSeason(date) {
    if (arguments.length === 0) {
        return 'Unable to determine the time of year!';
    }

    if (!(date instanceof Date)) {
        throw new Error('Invalid date!');
    }
    try {
        date.getTime();
    } catch (err) {
        throw new Error('Invalid date!');
    }
    const month = date.getMonth() + 1;

    if ((month === 12 && date.getDate() >= 1) || (month >= 1 && month < 3)) {
        return 'winter';
    } else if (month >= 3 && month < 6) {
        return 'spring';
    } else if (month >= 6 && month < 9) {
        return 'summer';
    } else if (month >= 9 && month < 12) {
        return 'autumn';
    } else {
        throw new Error('Invalid date!');
    }
}

module.exports = {
    getSeason,
};