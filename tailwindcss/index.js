const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    // nothing to add...
}, {
    theme: {
        colors: theme => {
            return Object.assign({
                'primary': theme('variations.primary', '#9E9E9E'),
                'secondary': theme('variations.secondary', '#718096'),
                'danger': theme('variations.danger', '#E53E3E'),
                'success': theme('variations.success', '#48BB78'),
                'warning': theme('variations.warning', '#ED8936'),
                'info': theme('variations.info', '#68D391'),
                'dark': theme('variations.dark', '#2D3748'),
                'light': theme('variations.light', '#F7FAFC'),
                'muted': theme('variations.muted', '#FFF')
            }, theme('variations', {}));
        }
    }
});