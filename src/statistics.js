// Statistical Big Sigma:
// Sum up each of the elements in the given array
module.exports.bigSig = function(arr){
  return arr.reduce(function(a, b){
    return a + b;
  });
};

// Maximum value:
// Find the greatest value in the array
module.exports.max = function(arr){
  return arr.reduce(function(a, b){
    return Math.max(a, b);
  });
};

// Minimum value:
// Find the least value in the array
module.exports.min = function(arr){
  return arr.reduce(function(a, b){
    return Math.min(a, b);
  });
};

// Mean:
// Find the arithmetic average
// of the elements in the array
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
