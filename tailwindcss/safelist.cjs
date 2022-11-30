const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');
const variations = require('./variations.cjs');
const variationShades = require('./variationShades.cjs');

module.exports = function safelist(colors, filter) {
    const shades = Object.keys(variationShades);

    function mapShades(color) {
        return [color].concat(
            shades.map(shade => `${color}-${shade}`)
        );
    }
    
    return Object.keys(variations)
        .map(mapShades)
        .concat([].concat(colors).map(color => {
            if(typeof color === 'string') {
                return mapShades(color);
            }
    
            return Object.keys(flattenColorPalette(color));
        }))
        .flat()
        .reduce((carry, key) => {
            return [...carry, ...[
                `bg-${key}`,
                `border-${key}`,
                `text-${key}`
            ]];
        }, [])
        .filter((value, i) => {
            if(!filter) {
                return true;
            }

            if(typeof filter === 'function') {
                return filter(value, i);
            }

            for(let match of [].concat(filter)) {
                if(!!value.match(match)) {
                    return false;
                }
            }

            return true;
        });
};