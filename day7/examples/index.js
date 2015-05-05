'use strict';

var fs = require('fs');
    readFilePromise = require('./read-file-promise.js');
    qRedFilePromise = require('./q-read-file-promise.js');

    p1 = readFilePromise.readFile('hello.txt');
    p2 = qRedFilePromise.readFile('does_not_exist.txt');

p1.then(function(data) {  // this is done third
  console.log('data: ' + data);
}, undefined);

p2.then(undefined, function(err) { // this is done second
  console.log('error: ' + err);
});

console.log('p1/p2 then called.'); // this is done first
// there is no guaranteed order
