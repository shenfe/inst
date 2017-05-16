const fs = require('fs');
const babel = require('babel-core');

module.exports = function (pluginNames, code, fileName) {
    if (fileName) code = fs.readFileSync(fileName, 'utf8');

    var result = babel.transform(code, {
        plugins: pluginNames,
        presets: [
            // 'es2015'
            // 'stage-2'
        ],
        sourceType: 'script'
    });

    return result.code;
};
