var math      = require('mathjs');
var algebrite = require('algebrite');

module.exports.derive = function(expression){
  return algebrite.derivative(expression).toString();
};

module.exports.integrate = function(expression){
  return algebrite.integral(expression).toString(); // + C?
};

module.exports.simplify = algebrite.run;
