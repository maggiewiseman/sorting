var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('sorter', function() {
  describe('#selectionSort', function() {
    it('should return -1 when the value is not present', function() {
      var sorter = new Sorter();
      var sorted = sorter.sort([3,2,1]);
      assert.equal([1,2,3], sorted);
    });
  });
});