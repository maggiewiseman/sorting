module.exports = {
  selectionSort: function(unsorted) {
    console.log("in sort funtion of sorter object");
    //write a min function for an array
    // 3 2 1 4 2 
    // remove the min and put it in a new array
    
    return [1,2,3];
  },
  
  minOfArrayIndex: function(myArray) {
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
  }
};

