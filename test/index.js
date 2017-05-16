'use strict';

var jainsRunner = require('../src/index');

var result = jainsRunner(['location', 'functionBeginning'], null, './function1.js');

console.log('\n\n\n\n\n\n\n\n');
console.log(result.code);
// console.log(result.map);
