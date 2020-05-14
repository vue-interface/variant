module.exports = (theme, prefix = null) => {
    return Object.assign({
        [`${prefix ? prefix + '-' : ''}primary`]: theme('variations.primary', '#9E9E9E'),
        [`${prefix ? prefix + '-' : ''}secondary`]: theme('variations.secondary', '#718096'),
        [`${prefix ? prefix + '-' : ''}danger`]: theme('variations.danger', '#E53E3E'),
        [`${prefix ? prefix + '-' : ''}success`]: theme('variations.success', '#48BB78'),
        [`${prefix ? prefix + '-' : ''}warning`]: theme('variations.warning', '#ED8936'),
        [`${prefix ? prefix + '-' : ''}info`]: theme('variations.info', '#68D391'),
        [`${prefix ? prefix + '-' : ''}dark`]: theme('variations.dark', '#2D3748'),
        [`${prefix ? prefix + '-' : ''}light`]: theme('variations.light', '#F7FAFC'),
        [`${prefix ? prefix + '-' : ''}muted`]: theme('variations.muted', '#FFF')
    }, theme('variations', {}));
};