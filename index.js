var ts = require('typescript');

module.exports = function(source) {
    return ts.transpile(source);
};