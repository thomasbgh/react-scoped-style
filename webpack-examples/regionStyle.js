var ScopedStyle = require('react-scoped-style');
var css = require('raw!./Region.css');
module.exports = ScopedStyle.createStyleSheet(css);
module.exports.raw = css;