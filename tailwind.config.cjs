const colors = require('./tailwindcss/colors.cjs');
const safelist = require('./tailwindcss/safelist.cjs');

module.exports = {
    content: [
        "./index.html"
    ],
    theme: {
        extend: {
            variations: {
                future: colors.fuchsia['600']
            }
        },
    },
    plugins: [
        require('./tailwindcss/index.cjs')
    ],
    safelist: [
        ...safelist(['future', colors]),
    ]
};