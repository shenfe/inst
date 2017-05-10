const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const t = require('babel-types');

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

var visitors = {
    enter(path) {
        //TODO
    },
    FunctionDeclaration(path) {
        //TODO
    }
});

var signVisitor = function (type, handler) {
    visitors[type] = handler;
    return visitors;
};

var travel = function (ast) {
    return traverse(ast, visitors);
};

module.exports = {
    astify: astify,
    signVisitor: signVisitor,
    traverse: travel
};
