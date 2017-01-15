var metadelta = require('./metadelta.js');
var colors = require('colors');

function assert(expected, received, name){
  expected = JSON.stringify(expected);
  received = JSON.stringify(received);
  if(expected !== received){
    console.log(`Warning: ${name} did not pass test!`.yellow);
    console.log(`Expected: ${expected}\nReceived: ${received}`.red);
  } else {
    console.log(`Test: ${name} passed test`.green);
  }
}

// Assert that our functions give the proper output
// TODO: give functions more than one test case at a time
assert('2 x',      metadelta.simplify('x+x'),  'Simplify');
assert('(x - 1) (x + 1)', metadelta.factor('x^2-1'), 'Factor');
assert([1, -1],    metadelta.zeroes('x^2-1'),  'Zeroes');
assert('2 x',      metadelta.derive('x^2'),    'Derivative');
assert('1/3 x^3',  metadelta.integrate('x^2'), 'Integral');
assert('2 x + -1', metadelta.tangent('x^2', 1),'Tangent');
assert('8',        metadelta.areaUnder('x^2', {start: 1, finish: 3}), 'Area Under Curve');
