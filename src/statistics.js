module.exports.bigSig = function(arr){
  return arr.reduce(function(a, b){
    return a + b;
  });
};

module.exports.max = function(arr){
  return arr.reduce(function(a, b){
    return Math.max(a, b);
  });
};

module.exports.min = function(arr){
  return arr.reduce(function(a, b){
    return Math.min(a, b);
  });
};

module.exports.mean = function(arr){
  var sum = arr.reduce(function(a, b){
    return a + b;
  }); 
  return sum / arr.length;
};

module.exports.median = function(arr){

};

module.exports.mode = function(arr){

};
