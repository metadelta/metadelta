var math      = require('mathjs');
var algebrite = require('algebrite');

/* ALGEBRA */
module.exports.simplify = algebrite.run;

module.exports.factor = function(expression){
  return algebrite.factor(expression).toString();
};

module.exports.zeroes = function(oExpression){
  oExpression = algebrite.factor(oExpression).toString();
  var _zeroes = [];
  // x(x+1)(x+2) -> [ x, x+1), x+2) ]
  expression = oExpression.split(' ').join('').split('(');
  expression.forEach(function(item){
    var xIdx = item.indexOf('x');
    // ax+b=0, so x=-b/a
    var a = item.substring(xIdx-1, xIdx);
    var b = item.substring(xIdx+1, xIdx+3);

    if(a === '')
      a = 1;
    if(b === '')
      b = 0;
    _zeroes.push(-b/a);
  });
  if(oExpression.charAt(0) === '(')
    _zeroes = _zeroes.slice(1);
  return _zeroes;
};

/* CALCULUS */
module.exports.derive = function(expression){
  return algebrite.derivative(expression).toString();
};

module.exports.integrate = function(expression){
  return algebrite.integral(expression).toString(); // + C?
};

module.exports.tangent = function(expression, at){
    // f(x) - xf'(x) = b
    var fx = parseInt(algebrite.run(expression.split('x').join(''+at)));
    var fp = algebrite.derivative(expression).toString();
    var fpx = algebrite.run(fp.split('x').join(''+at));
    var b = fx - at * parseInt(fpx);

    return fpx + ' x + ' + b;
};

module.exports.areaUnder = function(expression, data){
  var startX = data.start;
  var endX   = data.finish;
  var F = algebrite.integral(expression).toString();
  var Fx1 = parseInt(algebrite.simplify(F.split('x').join(''+startX)));
  var Fx2 = parseInt(algebrite.simplify(F.split('x').join(''+endX)));

  return ''+(Fx2 - Fx1);
};
