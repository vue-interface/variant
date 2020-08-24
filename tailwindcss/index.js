const plugin = require('tailwindcss/plugin');
const reduce = require('./reduce');
const defaultVariations = require('./defaultVariations');

module.exports = plugin(function({ config, addUtilities, variants }) {
    function addUtility(prefix, attr) {
        if(config(`corePlugins.${attr}`) === false) {
            return;
        }

        Object.entries(reduce(defaultVariations, `.${prefix}-`))
            .forEach(([ key, value ]) => {
                addUtilities({ [key]: { [attr]: value } }, variants(attr));
            });
    }

    // Add these as components so core CSS classes are not tied to `@tailwind utilities`.
    addUtility('bg', 'backgroundColor');
    addUtility('text', 'color');
    addUtility('border', 'borderColor');
}, {
    theme: {
        variations: defaultVariations
    }
});
