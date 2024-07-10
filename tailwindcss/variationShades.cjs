const Color = require("color");

module.exports = {
    '50': color => Color(color).mix(Color('white'), .90).hex(),
    '100': color => Color(color).mix(Color('white'), .80).hex(),
    '200': color => Color(color).mix(Color('white'), .60).hex(),
    '300': color => Color(color).mix(Color('white'), .40).hex(),
    '400': color => Color(color).mix(Color('white'), .20).hex(),
    '500': color => Color(color).hex(),
    '600': color => Color(color).mix(Color('black'), .20).hex(),
    '700': color => Color(color).mix(Color('black'), .40).hex(),
    '800': color => Color(color).mix(Color('black'), .60).hex(),
    '900': color => Color(color).mix(Color('black'), .80).hex(),
};