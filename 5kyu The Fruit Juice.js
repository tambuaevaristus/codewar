// 5kyu The fruit juice

// In this kata we mix some tasty fruit juice. We can add some components with certain amounts. Sometimes we pour out a bit of our juice. Then we want to find out, which concentrations our fruit juice has.

// Example:

// You take an empty jar for your juice
// Whenever the jar is empty, the concentrations are always 0
// Now you add 200 units of apple juice
// And then you add 200 units of banana juice
// Now the concentration of apple juice is 0.5 (50%)
// Then you pour out 200 units
// The concentration of apple juice is still 50%
// Then you add 200 units of apple juice again
// Now the concentration of apple juice is 0.75, while the concentration of banana juice is only 0.25 (300 units apple juice + 100 units banana juice)
// Complete the functions in order to provide this functionality. The test code for the example above can be found in the test fixture.

// Steps



// Solution

let 

function Jar() {
    // TODO
  }
  
  Jar.prototype.add = function(amount, type) {
    // TODO
  };
  
  Jar.prototype.pourOut = function(amount) {
    // TODO
  };
  
  Jar.prototype.getTotalAmount = function() {
    // TODO
  };
  
  Jar.prototype.getConcentration = function(type) {
    // TODO
  }


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('example tests', function() {
  let jar = new Jar();
  
  it('initialization', function() {
    assert.strictEqual(jar.getConcentration('apple'), 0, 'Nothing was added, concentration must be 0 for each component');
  });
  
  it('add juice', function() {
    jar.add(200, 'apple');
    assert.strictEqual(jar.getTotalAmount(), 200, 'Wrong total amount after adding juice');
    assert.strictEqual(jar.getConcentration('apple'), 1, 'Wrong concentration after adding same juice');
    
    jar.add(200, 'banana');
    assert.strictEqual(jar.getTotalAmount(), 400, 'Wrong total amount after adding more juice');
    assert.strictEqual(jar.getConcentration('apple'), 0.5, 'Wrong concentration after adding some other juice');
    assert.strictEqual(jar.getConcentration('banana'), 0.5, 'Wrong concentration after adding some other juice');
  });
  
  it('pour out juice', function() {
    jar.pourOut(200);
    assert.strictEqual(jar.getTotalAmount(), 200, 'Wrong total amount after pouring out some juice');
    assert.strictEqual(jar.getConcentration('apple'), 0.5, 'Pouring out juice must not change the concentrations');
    assert.strictEqual(jar.getConcentration('banana'), 0.5, 'Pouring out juice must not change the concentrations');
  });
  
  it('add more juice', function() {
    jar.add(200, 'apple');
    assert.strictEqual(jar.getTotalAmount(), 400, 'Wrong total amount after adding some juice again');
    assert.strictEqual(jar.getConcentration('apple'), 0.75, 'Wrong concentration after adding juice again');
    assert.strictEqual(jar.getConcentration('banana'), 0.25, 'Wrong concentration after adding juice again');
  });
});