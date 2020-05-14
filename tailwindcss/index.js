const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    // nothing to add...
}, {
    theme: {
        colors: require('./theme')
    }
});