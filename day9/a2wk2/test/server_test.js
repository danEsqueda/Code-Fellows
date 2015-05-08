var server = require('../server.js');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('greet', function() {
  it('should greet when called', function() {
    expect(greet('hello world').sayMessage()).to.eql('hello world');
  });
});

// idea: expect(response.text).to.eql('John');
