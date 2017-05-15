module.exports = {
    FunctionDeclaration: function (path) {
        var p = path;
        console.log(Object.keys(p));
        var node = p.node;
        console.log(Object.keys(node));
    }
};
