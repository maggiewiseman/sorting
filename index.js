var Sorter = function () {
  
};

Sorter.prototype.minOfArrayIndex = function(myArray) {
  var smallest = myArray[0];
    var index = 0;
    //compare start value to each element in array
    //if smallest is larger than element, smallest = current element.  Index = indexOf current element
    //return index
    for(var i=1; i < myArray.length; i++) {
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
    var indexOfSmallest = 0;
    var sorted = [];
    while(unsorted.length > 0) {
      indexOfSmallest = this.minOfArrayIndex(unsorted);
      sorted.push(unsorted.splice(indexOfSmallest,1)[0]); 
    }
    //find the min
    //remove the min
    //add the min to the sorted array
    // 3 2 1 4 2 
    
    return sorted;
};

module.exports = new Sorter();
