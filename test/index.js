'use strict';

var fs = require('fs');
var jainsRunner = require('../src/index');

var result = jainsRunner(['../src/functionBeginning'], null, './function1.js');
fs.writeFileSync('./function1.out.js', result);
console.log(result);
