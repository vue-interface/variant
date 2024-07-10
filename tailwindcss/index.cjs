const shades = require('./shades.cjs');

module.exports = {
    theme: {
        variations: require('./variations.cjs'),
        extend: {
            colors: function(theme) {
                return Object.entries(theme('variations')).reduce((carry, [color, value]) => {
                    return Object.assign(carry, {
                        [color]: shades(value)
                    })
                }, {});
            }
        }
    }
}