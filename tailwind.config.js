const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: [
        //
    ],
    corePlugins: {
        container: false,
    },
    plugins: [
        require('./tailwindcss')
    ]
};