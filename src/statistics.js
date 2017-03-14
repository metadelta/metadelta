// Insertion Sort Helper Function
// TODO: Add more functions and analytically calculate fastest sorting algorithm
//       depending on array length
function insertionSort(items){
  var len = items.length;  // number of items in the array
  var value;               // the value currently being compared
  var i;                   // index into unsorted section
  var j;                   // index into sorted section

  for (i=0; i < len; i++) {

    // store the current value because it may shift later
    value = items[i];

    /*
     * Whenever the value in the sorted section is greater than the value
     * in the unsorted section, shift all items in the sorted section over
     * by one. This creates space in which to insert the value.
     */
    for (j=i-1; j > -1 && items[j] > value; j--) {
      items[j+1] = items[j];
     }

    items[j+1] = value;
  }

  return items; 
}

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

// Median:
// Find the arithmetic median,
// or the middle value of the array
// TODO: Use the array length to analytically
//       calculate which sorting algorithm
//       would be fastest
module.exports.median = function(arr){
  var arr = insertionSort(arr);

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
