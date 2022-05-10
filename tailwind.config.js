const colors = require('./tailwindcss/colors');
const safelist = require('./tailwindcss/safelist');

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
        require('./tailwindcss')
    ],
    safelist: [
        ...safelist(['future', colors]),
    ]
};