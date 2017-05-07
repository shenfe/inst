var babylon = require('babylon');

var astCache = {};

var codeLengthRecord = {};

var astify = function (code, fileName, forced) {
    var options = {
        sourceType: 'script'
    };
    if (fileName) {
        var prevCodeLen = codeLengthRecord[fileName];
        codeLengthRecord[fileName] = code.length;
        if (astCache[fileName] && !forced
            && !(typeof prevCodeLen === 'number'
                && prevCodeLen !== code.length)) {
            return astCache[fileName];
        }
        options.sourceFileName = fileName;
    }
    var ast = babylon.parse(code, options);
    if (fileName) {
        astCache[fileName] = ast;
    }
    return ast;
};

module.exports = {astify};
