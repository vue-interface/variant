module.exports = {
    dark: 'class',
    content: [
        "./index.html"
    ],
    theme: {
        extend: {
            variations: {
                future: '#c026d3'
            }
        },
    },
    presets: [
        require('./tailwindcss')
    ],
    safelist: [
        // ...safelist(['future', colors]),
    ]
};