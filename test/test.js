var may = require('../index.js');
var assert = require("assert");

describe('May the Force', function() {
   it('be with you', function() {
      assert.equal(may("the Force").beWith("you"), "May the Force be with you!");
   });
   it('be with us', function() {
      assert.equal(may("the Force").beWith("us"), "May the Force be with us!");
   });
});
describe('May something else', function() {
   it('be with you', function() {
      assert.equal(may("something else").beWith("you"), "Use the Force, Luke!");
   });
});
