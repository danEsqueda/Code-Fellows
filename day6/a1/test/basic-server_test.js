// TODO: add require calls here. file & chai.

var server = require('../basic_http_server.js');
var chai = require('chai');
var chaiHttp = require('chai-http');


  // TODO: add module name here
  // add additional tests here (one for date and one for hello)
  describe('time', function() {
  it('should return the current time', function() {
    expect(greet('hello world').sayMessage()).to.eql('hello world');
  });
});
