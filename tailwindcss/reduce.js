
module.exports = function reduce(values, prefix = null) {
    return Object.entries(values).reduce((carry, [key, value]) => {
        if(typeof value === 'object') {
            return Object.assign(carry, reduce(value, key + '-'));
        }
        else {
            return Object.assign(carry, {
                [`${prefix || ''}${key}`]: value
            });
        }
    }, {});
};