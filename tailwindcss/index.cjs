const plugin = require('tailwindcss/plugin');
const shades = require('./shades.cjs');
const variations = require('./variations.cjs');
const variationShades = require('./variationShades.cjs');

module.exports = plugin(function({ config, theme, matchUtilities }) {
    matchUtilities({
        bg: value => ({
            backgroundColor: value
        }),
        text: value => ({
            color: value
        }),
        border: value => ({
            borderColor: value
        })
    }, {
        values: shades(theme('variations'), theme('variationShades'))
    });
}, {
    theme: {
        variations,
        variationShades
    }
});
