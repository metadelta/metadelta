var math      = require('mathjs');
var algebra   = require('./src/algebra.js');
var calculus  = require('./src/calculus.js');

/* ALGEBRA */
module.exports.simplify  = algebra.simplify;
module.exports.factor    = algebra.factor;
module.exports.zeroes    = algebra.zeroes;

/* CALCULUS */
module.exports.derive    = calculus.derive;
module.exports.tangent   = calculus.tangent;
module.exports.integrate = calculus.integrate;// indefinite integral
module.exports.areaUnder = calculus.areaUnder;// definite integral
