// Insertion Sort Helper Function
// TODO: Add more functions

var sorting = require('./sorting.js');

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
  return Math.max.apply(null, arr);
};

// Minimum value:
// Find the least value in the array
module.exports.min = function(arr){
  return Math.min.apply(null, arr);
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

// Median:
// Find the arithmetic median,
// or the middle value of the array
module.exports.median = function(arr){
  var arr = sorting.getPartiallySortedList(arr);

  if(arr.length % 2 === 0){
    var leftMidpoint = arr[Math.floor(arr.length / 2 - 1)];
    var rightMidpoint = arr[Math.floor(arr.length / 2)];
    return module.exports.mean([leftMidpoint, rightMidpoint]);
  }else{
    return arr[Math.floor(arr.length / 2)];
  }

};

// Mode:
// Find the value in the array that
// appears most often
module.exports.mode = function(arr){
  var commonVal  = 0;
  var longestRun = 0;
  var runCounter = 0;

  commonVal = arr[0];
  return arr.reduce(function(a, b){
    if(commonVal === a){
      runCounter++;
    } 
    if(runCounter > longestRun){
      longestRun = runCounter;
      commonVal = a;
    }
    return commonVal;
  });
};
