module.exports = function reduce(values, prefix = null) {
    return Object.entries(values).reduce((carry, [key, value]) => {
        if(Array.isArray(value)) {
            return Object.assign(carry, reduce(Object.fromEntries([value])));
        }
        else if(typeof value === 'object') {
            return Object.assign(carry, reduce(value, key));
        }
        else {
            return Object.assign(carry, {
                [prefix ? `${prefix}-${key}` : key]: value
            });
        }
    }, {});
};