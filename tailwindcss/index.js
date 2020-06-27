const plugin = require('tailwindcss/plugin');
const variations = require('./defaultVariations');

module.exports = plugin(function() {
    // nothing to do...
}, {
    theme: {
        variations
    }
});

// Export the variations function
module.variations = require('./variations');
