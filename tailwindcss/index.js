const plugin = require('tailwindcss/plugin');
const reduce = require('./reduce');
const defaultVariations = require('./defaultVariations');

module.exports = plugin(function({ config, addComponents, variants }) {
    function addComponent(prefix, attr) {
        if(config(`corePlugins.${attr}`) === false) {
            return;
        }

        Object.entries(reduce(defaultVariations, `.${prefix}-`))
            .forEach(([ key, value ]) => {
                addComponents({ [key]: { [attr]: value } }, variants(attr));
            });
    }

    // Add these as components so core CSS classes are not tied to `@tailwind utilities`.
    addComponent('bg', 'backgroundColor');
    addComponent('text', 'color');
    addComponent('border', 'borderColor');
}, {
    theme: {
        variations: defaultVariations
    }
});
