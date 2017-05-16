module.exports = function ({ types: t, transform: trans }) {
    return {
        visitor: {
            FunctionDeclaration(path) {
                var comment = 'FunctionDeclaration';
                var body = path.get('body.body');
                body[0].addComment('leading', comment);
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
