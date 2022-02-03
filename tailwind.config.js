const safelist = require('./tailwindcss/safelist');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('./tailwindcss')
    ],
    safelist: safelist(Object.assign({},
        require('./tailwindcss/variations'),
        require('./tailwindcss/colors')
    ))
};