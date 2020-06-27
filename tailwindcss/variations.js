
module.exports = function variations(colors, prefix = null) {
    return Object.entries(colors).reduce((carry, [key, value]) => {
        if(typeof value === 'object') {
            return Object.assign(carry, variations(value, key + '-'));
        }
        else {
            return Object.assign(carry, {
                [`${prefix || ''}${key}`]: value
            });
        }
    }, {});
};