'use strict'

var base = require('./ast');

const fs = require('fs');
const path = require('path');

function getDirs(srcpath) {
    srcpath = path.resolve(__dirname, srcpath || './');
    return fs.readdirSync(srcpath)
        .filter(file => fs.lstatSync(path.resolve(srcpath, file)).isDirectory());
}

GENERATE_PLUGIN_TABLE: {
    var pluginDirs = getDirs().filter(name => name !== 'ast');
    fs.writeFileSync(path.resolve(__dirname, './plugins.js'), 'module.exports={'
        + pluginDirs.map(name => name + ':require(\'./' + name + '\')').join(',') + '};');
}

const plugins = require('./plugins.js');

var runner = function (pluginNames, code, fileName) {
    if (!code) code = fs.readFileSync(fileName, 'utf8');

    var ast = base.astify(code, fileName);

    for (let p of pluginNames) {
        if (!(p in plugins)) continue;
        var pv = plugins[p];
        for (var nodeName in pv) base.signVisitor(nodeName, pv[nodeName]);
    }

    return base.traverse(ast);
};

module.exports = runner;
