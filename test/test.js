var assert = require('assert');
var sorter = require('../index');
describe('sorter', function() {
  //test for selectionSort
  describe('#selectionSort', function() {
    it('should output a sorted array', function() {
      var sorted = sorter.selectionSort([3,2,1]);
      assert.deepEqual([1,2,3], sorted);
    });
  });
  
  //test for minOfArrayIndex
  describe('#minOfArrayIndex', function() {
    it('should output index of first smallest number', function() {
      var minIndex = sorter.minOfArrayIndex([3,2,1,4,1]);
      assert.equal(2, minIndex);
    });
  });
  
});