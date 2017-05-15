function a(v) {
    var value = v;
    return value;
}

var b = function (v) {
    var value = v;
    return value;
};

var c = v => {
    var value = v;
    return value;
};

var d = (function (cb) {
    cb && cb();
})(() => {
    return 1;
});
