const babylon = require('babylon');
const t = require('babel-types');

module.exports = {
    FunctionDeclaration: function (path) {
        var comment = '// FunctionDeclaration';
        console.log(comment);
        comment = babylon.parse(comment);
        // path.unshiftContainer('body', comment);
        path.node.body.body.unshift(comment);
    },
    FunctionExpression: function (path) {
        var comment = '// FunctionExpression';
        console.log(comment);
        comment = babylon.parse(comment);
        // comment = babylon.parse(comment);
        path.node.body.body.unshift(comment);
    },
    ArrowFunctionExpression: function (path) {
        var comment = '// ArrowFunctionExpression';
        console.log(comment);
        comment = babylon.parse(comment);
        // comment = babylon.parse(comment);
        path.node.body.body.unshift(comment);
    }
};