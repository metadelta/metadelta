/*
  This is the file containing all of the calculus
  functionality of metadelta.

  Copyright (C) Gerald Nash 2016-2017
*/
var algebrite = require('algebrite');
var algebra   = require('./algebra.js');

module.exports.derive = function(expression){
  return algebrite.derivative(expression).toString();
};

module.exports.tangent = function(expression, at){
    // f(x) - xf'(x) = b
    var fx = parseInt(algebrite.run(expression.split('x').join(''+at)));
    var fp = algebrite.derivative(expression).toString();
    var fpx = algebrite.run(fp.split('x').join(''+at));
    var b = fx - at * parseInt(fpx);

    return fpx + ' x + ' + b;
};

module.exports.integrate = function(expression){
  return algebrite.integral(expression).toString();
};

module.exports.areaUnder = function(expression, data){
  var startX = data.start;
  var endX   = data.finish;
  var F = algebrite.integral(expression).toString();
  var Fx1 = parseInt(algebrite.simplify(F.split('x').join(''+startX)));
  var Fx2 = parseInt(algebrite.simplify(F.split('x').join(''+endX)));

  return ''+(Fx2 - Fx1);
};
