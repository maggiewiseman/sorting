var Sorter = function () {
  
};

Sorter.prototype.minOfArrayIndex = function (myArray) {
  var smallest = myArray[0];
  var index = 0;
  //compare start value to each element in array
  //if smallest is larger than element, smallest = current element.  Index = indexOf current element
  //return index
  for (var i=1; i < myArray.length; i++) {
    if (smallest > myArray[i] ) {
      smallest = myArray[i];
      index = i;
    }
  }

  return index;
};

Sorter.prototype.selectionSort = function (unsorted){
  console.log("in sort funtion of sorter object");
    //for the length of the array
    //find the min
    //remove the min
    //add the min to the sorted array
    // 3 2 1 4 2 
    var indexOfSmallest = 0;
    var sorted = [];
    while (unsorted.length > 0) {
      indexOfSmallest = this.minOfArrayIndex(unsorted);
      sorted.push(unsorted.splice(indexOfSmallest,1)[0]); 
    }
        
    return sorted;
};

Sorter.prototype.bubbleSort = function (unsorted) {
  console.log("in bubble sort function");
  
  //for length of array
  //compare startIndex to each element
  //if startIndex > element[i], set element [i] = to temp, then set element[i] = element[startIndex] and element[startIndex] = temp.
  for (var j = 0; j < unsorted.length; j++){
    var startIndex = j;
    for (var i = startIndex + 1; i < unsorted.length; i++) {
      if(unsorted[startIndex] > unsorted[i]) {
        var tmp = unsorted[i];
        unsorted[i] = unsorted[startIndex];
        unsorted[startIndex] = tmp;
      }
    }
  }
  
  return unsorted;
}; 

Sorter.prototype.merge = function (arr, leftIndex, midIndex, rightIndex) {
  //merges arr[leftIndex..midIndex] with arr[midIndex+1..rightIndex]
  //make a new array B that we will copy our sorted jonks into
  //index on array B will be k
  //index on left array (left index to midIndex) will be i and the right array will be j
  var arrB = [], 
      i = leftIndex,
      k = leftIndex,
      j = midIndex+1;
  
  //while leftIndex is smaller than midIndex && midIndex+1 is smaller than right Index, meaning the array has mat least one element to compare, compare values in the arrays.
    //if arr[i] <= arr[j] then B[k] = arr[i] and increment i & k else B[k] = arr[j] and increment j & k
    //while i < midIndex, b[k] = arr[i] increment i and k
    //while j < rightIndex, b[k] = arr[j]
  while (i <= midIndex && j <= rightIndex) {
    if (arr[i] <= arr[j]) { 
      arrB[k] = arr[i];  
      i++;
      k++;
    } else {
      arrB[k] = arr[j];
      j++;
      k++;
    }
  }
  
  while (i <= midIndex) {
        arrB[k] = arr[i];
        i++; 
        k++;
      }

  while (j <= rightIndex) {
    arrB[k] = arr[j];
    j++;
    k++;
  }
    
  // copy arrB into arr
  // for i = leftIndex to rightIndex do A[i] = B[i]
  for (var m = leftIndex; m <= rightIndex; m++) {
    arr[m] = arrB[m];
  }
  return arr;
}; 

Sorter.prototype.mergeSort = function (unsorted, leftIndex, rightIndex) {
    
    //if leftIndex = rightIndex, array is broken into single values, start merging
    //else divide: 
    //call function to get middle based on indexes
    //call mergeSort (unsorted, leftIndex, middle)
    //call mergeSort(unsorted, middle, rightIndex);
    //when each subarray is only 2 values
    if (leftIndex < rightIndex) {
      console.log("array is longer than 1 element");
      var midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
      console.log("midIndex is: " + midIndex);
      this.mergeSort(unsorted, leftIndex, midIndex);
      this.mergeSort(unsorted, midIndex+1, rightIndex);
      this.merge(unsorted, leftIndex, midIndex, rightIndex);
    }

  return unsorted;
};

Sorter.prototype.makeRandomArray = function (size) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr.push(Math.round(Math.random()*100));
  }
  return arr;
};


module.exports = new Sorter();
