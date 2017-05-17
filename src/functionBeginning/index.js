/**
 * function-beginning-instrumentation-plugin
 * @param babel: { types: t, transform: trans }
 * @returns {{visitor: {FunctionDeclaration: (function(*)), FunctionExpression: (function(*)), ArrowFunctionExpression: (function(*))}}}
 */
module.exports = function (babel) {
    return {
        visitor: {
            FunctionDeclaration(path) {
                var comment = 'FunctionDeclaration';
                var body = path.get('body.body');
                body[0].addComment('leading', comment);
                body[body.length - 1].addComment('trailing', comment);
            },
            FunctionExpression(path) {
                var comment = 'FunctionExpression';
                var body = path.get('body.body');
                body[0].addComment('leading', comment);
            },
            ArrowFunctionExpression(path) {
                var comment = 'ArrowFunctionExpression';
                var body = path.get('body.body');
                body[0].addComment('leading', comment);
            }
        }
    };
}
