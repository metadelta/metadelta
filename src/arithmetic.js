/*
  This is the file containing all of the arithmetic
  functionality of metadelta.

  Copyright (C) Gerald Nash 2016-2017
*/
var algebrite = require('algebrite');

// TODO: Adequately document this function's use
function convertString(f){
  return function(x){
    return f(x).toString();
  }
}

module.exports.abs       = convertString(algebrite.abs);
module.exports.sin       = convertString(algebrite.sin);
module.exports.cos       = convertString(algebrite.cos);
module.exports.tan       = convertString(algebrite.tan);
module.exports.arccos    = convertString(algebrite.arccos);
module.exports.arcsin    = convertString(algebrite.arcsin);
module.exports.arctan    = convertString(algebrite.arctan);
