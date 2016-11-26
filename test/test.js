var assert = require('assert');
var sorter = require('../index');
describe('sorter', function() {
  describe('#selectionSort', function() {
    it('should output a sorted array', function() {
      var sorted = sorter.sort([3,2,1]);
      assert.deepEqual([1,2,3], sorted);
    });
  });
});