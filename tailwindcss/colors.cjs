const colors = require('tailwindcss/colors');

module.exports = Object.keys(colors).filter(key => {
    return [
        'lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray'
    ].indexOf(key) === -1;
}).reduce((carry, key) => {
    return Object.assign(carry, {
        [key]: colors[key]
    });
}, {});
