const fs = require('fs');
const path = require('path');

var getDirs = function (srcpath) {
    srcpath = path.resolve(__dirname, srcpath || './');
    return fs.readdirSync(srcpath)
        .filter(file => fs.lstatSync(path.resolve(srcpath, file)).isDirectory());
};

module.exports = {
    getDirs
};
