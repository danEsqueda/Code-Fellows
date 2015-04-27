var greet = require('../greet.js');
var expect = require('chai').expect;

describe('greet', function() {
  it('should greet when called', function() {
    expect(greet('Hello World', 'Goodbye World').sayHello()).to.eql('Hello World');
  });

  it('should greet when called', function() {
    expect(greet('Hello World', 'Goodbye World').sayGoodbye()).to.eql('Goodbye World');
  })

})
