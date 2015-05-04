var events = require('events');
var stdinReader = require('../lib/stdin_reader.js');
var expect = require('chai').expect;

describe('greet', function() {
  it('should echo on input', function(done) {
    var fakeStdin = new events.EventEmitter();
    var logOutput = '';
    console.log = function(data) {

    }
  })
});
