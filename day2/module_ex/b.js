console.log('b starting');
exports.done = false;


//console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');
var a = require('./a.js');
a.sayHello();

/* use this format to make this work
I need to know under what circumstances the two methods are used
module.exports VS exports.functionName

var a = require('./b.js');
module.exports = function (...) {
  return {

  }

}
*/
