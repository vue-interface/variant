const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    // nothing to add 
}, {
    theme: {
        variations: theme => {
            return Object.assign(theme('colors', {}), {
                'primary': theme('colors.blue.500', '#9E9E9E'),
                'secondary': theme('colors.gray.600', '#718096'),
                'danger': theme('colors.red.600', '#E53E3E'),
                'success': theme('colors.green.500', '#48BB78'),
                'warning': theme('colors.orange.500', '#ED8936'),
                'info': theme('colors.teal.400', '#68D391'),
                'dark': theme('colors.gray.800', '#2D3748'),
                'light': theme('colors.gray.100', '#F7FAFC'),
                'muted': theme('colors.white', '#FFF')
            });
        }
    }
});