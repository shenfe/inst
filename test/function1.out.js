function a(v) {
    /*FunctionDeclaration*/var value = v;
    return value; /*FunctionDeclaration*/
}

var b = function (v) {
    /*FunctionExpression*/var value = v;
    return value;
};

var c = v => {
    /*ArrowFunctionExpression*/var value = v;
    return value;
};

var d = function (cb) {
    /*FunctionExpression*/cb && cb();
}(() => {
    /*ArrowFunctionExpression*/return 1;
});