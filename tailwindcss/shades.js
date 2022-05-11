const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = (variations = null, shades = null) => {
    variations = variations || require('./variations');
    shades = shades || require('./variationShades');

    return flattenColorPalette(
        Object.fromEntries(
            Object.entries(variations).map(([key, value]) => [key, 
                Object.assign({
                    DEFAULT: value
                }, Object.fromEntries(
                    Object.entries(shades).map(([name, shader]) => {
                        return [name, shader(value)];
                    })
                ))
            ])
        )
    );
};