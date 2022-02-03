const plugin = require('tailwindcss/plugin');
const reduce = require('./reduce');
const variations = require('./variations');

module.exports = plugin(function({ config, addUtilities }) {
    function addUtility(prefix, attr) {
        if(config(`corePlugins.${attr}`) !== false) {
            Object.entries(reduce(variations, `.${prefix}`))
                .forEach(([ key, value ]) => {
                    addUtilities({ [key]: { [attr]: value } });
                });
        }
    }

    // Add these as components so core CSS classes are not tied to `@tailwind utilities`.
    addUtility('bg', 'backgroundColor');
    addUtility('text', 'color');
    addUtility('border', 'borderColor');
}, {
    theme: {
        variations
    }
});
