const variationShades = require('./variationShades.cjs');

module.exports = function(color) {
    if(typeof color === 'object') {
        return color
    }

    return Object.entries(variationShades).reduce((carry, [weight, fn]) =>{
        return Object.assign(carry, {
            [weight]: fn(color)
        })
    }, {
        DEFAULT: color
    });
}