var calc = require('../calc.js');
var expect = require('chai').expect;

describe('calc', function() {
  var num1 = 12,
      num2 = 3;

  // tests add function
  it('should add two numbers', function() {
    var sum = calc.add(num1, num2);
    expect(sum).to.eql(15);
  });

  // tests subtract function
  it('should subtract two numbers', function() {
    var difference = calc.subtract(num1, num2);
    expect(difference).to.eql(9);
  });

  // tests multiply function
  it('should multiply two numbers', function() {
    var multiply = calc.multiply(num1, num2);
    expect(multiply).to.eql(36);
  });

  // tests divide function
  it('should divide two numbers', function() {
    var divide = calc.divide(num1, num2);
    expect(divide).to.eql(4);
  });
});
