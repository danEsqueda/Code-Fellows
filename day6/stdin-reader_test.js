var events = require('events');
var stdinReader = require('../lib/stdin_reader.js');
var expect = require('chai').expect;

describe('greet', function() {
  it('should echo on input', function(done) {


    process.openStdin() = function() {

    }
    console.log('starting');
    stdinReader.read();
    console.log('here');
  });
});
