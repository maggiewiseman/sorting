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

Sorter.prototype.makeRandomArray = function (size) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr.push(Math.round(Math.random()*100));
  }
  return arr;
};


module.exports = new Sorter();
