// Returns partially sorted list
module.exports.getPartiallySortedList = function(items) {
  // Only half of the list is enough
  var len = items.length / 2;
  return sort(items, 0, len);
}

/*
 * Combining the InsertionSort and the QuickSort algorithms to come up
 * with a very simple and effective method for sorting large lists
 */
function sort(items, start, end) {
  if (start < end) {

    // This is where we switch to InsertionSort
    if ((end - start) <= 9) {
      insertionSort(items, start, end);

    // Here we switch to QuickSort  
    } else {
      var part = partition(items, start, end);
      sort(items, start, part-1);
      sort(items, part+1, end); 
    }
  }

  return items;
}

function insertionSort(items, start, end) {
  var value;               // the value currently being compared
  var i;                   // index into unsorted section
  var j;                   // index into sorted section

  for (i = start; i <= end; i++) {

    // store the current value because it may shift later
    value = items[i];

    /*
     * Whenever the value in the sorted section is greater than the value
     * in the unsorted section, shift all items in the sorted section over
     * by one. This creates space in which to insert the value.
     */
    for (j = i-1; j > -1 && items[j] > value; j--) {
      items[j+1] = items[j];
     }

    items[j+1] = value;
  }

  return items; 
}

// QuickSort partition
function partition(items, leftIndex, rightIndex) {
  var left = leftIndex;
  var right = rightIndex;
  var pivot = items[Math.floor((leftIndex + rightIndex) / 2)];

  while (left <= right) {

    while (items[left] < pivot) {
      left++;
    }

    while (items[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(items, left, right);
      left++;
      right--;
    }
  }

  return left;
}

// Swap two values of array
function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}
