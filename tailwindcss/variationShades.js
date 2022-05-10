const Color = require("color");

module.exports = {
    '50': color => Color(color).lighten(.95).hex(),
    '100': color => Color(color).lighten(.80).hex(),
    '200': color => Color(color).lighten(.60).hex(),
    '300': color => Color(color).lighten(.40).hex(),
    '400': color => Color(color).lighten(.20).hex(),
    '500': color => Color(color).hex(),
    '600': color => Color(color).darken(.20).hex(),
    '700': color => Color(color).darken(.40).hex(),
    '800': color => Color(color).darken(.60).hex(),
    '900': color => Color(color).darken(.80).hex(),
};