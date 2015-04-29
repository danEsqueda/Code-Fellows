var inherits = require('util').inherits;

var EventEmitter = require('events').EventEmitter;
var MyCustomEventEmitter = function() {};

util.inherits(MyCustomEventEmitter, EventEmitter);

var emitter = new MyCustomEventEmitter();
emitter.on('myCustomEvent', function(data) {
  console.log(data);
});

emitter.on('myCustomEvent', function(data) {
  console.log("More of this " + data);
});
emitter.emit('myCustomEvent', 'here is some data');
