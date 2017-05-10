var base = require('./ast');

const fs = require('fs');
const path = require('path');

function getDirs(srcpath) {
    srcpath = srcpath || './';
    srcpath = path.resolve(__dirname, srcpath);
    return fs.readdirSync(srcpath)
        .filter(file => fs.lstatSync(path.resolve(srcpath, file)).isDirectory());
}

GENERATE_PLUGIN_TABLE: {
    var pluginDirs = getDirs().forEach(name => console.log(name))
        .filter(name => name !== 'ast');
    fs.writeFileSync('./plugins.js', 'module.exports={'
        + pluginDirs.map(name => name + ':require(\'./' + name + '\')').join(',') + '};');
}

const plugins = require('./plugins.js');

var runner = function (pluginNames, code, fileName) {
    var ast = base.astify(code, fileName);

    //TODO

    return base.traverse(ast);
};

module.exports = runner;
