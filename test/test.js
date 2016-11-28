/*jslint devel: true, sloppy: true*/
var assert = require('assert');
var sorter = require('../index');
describe('sorter', function () {
  //test for selectionSort
  describe('#selectionSort', function () {
    it('should output a sorted array', function () {
      var sorted = sorter.selectionSort([3, 2, 1]);
      assert.deepEqual([1, 2, 3], sorted);
    });
  });
  
  //test for minOfArrayIndex
  describe('#minOfArrayIndex', function () {
    it('should output index of first smallest number', function () {
      var minIndex = sorter.minOfArrayIndex([3, 2, 1, 4, 1]);
      assert.equal(2, minIndex);
    });
  });
  
  //performance test for selection sort
//  describe('#selection sort performance', function () {
//    this.timeout(120000);
//    it('should suck pretty bad', function () {
//      var start = new Date().getTime();   sorter.selectionSort(sorter.makeRandomArray(100000));
//      var end = new Date().getTime();
//      console.log("seconds: " + (end - start) / 1000);
//    });
//  });
  
  //test for bubble sort
  describe('#bubble sort test', function () {
      it('should return a sorted array using bubble sort', function () {
      var sorted = sorter.bubbleSort([3, 2, 1]);
      assert.deepEqual([1, 2, 3], sorted);
    });
  });
  
    //test for merge sort
  describe('#merge sort test', function () {
      it('should return a sorted array using merge sort', function () {
      var sorted = sorter.mergeSort([5, 3, 2, 1, 23], 0, 4);
      assert.deepEqual([1, 2, 3, 5, 23], sorted);       
    });
  });
});