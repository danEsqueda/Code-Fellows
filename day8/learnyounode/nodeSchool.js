
// learnyounode 2

// var count = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   count = count + Number(process.argv[i]);
// }
// console.log(count);

// learnyounode 3

// var fs = require('fs');

// var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// console.log(lines);

// learnyounode 4

var fs = require('fs');
var lines = 0;

function readFile(callback) {
  fs.readFile(process.argv[2], 'utf8', function(err, fileContents) {
    lines = fileContents.split('\n').length - 1;
    callback();
  });
}

function logNumberOfLines() {
  console.log(lines);
}

readFile(logNumberOfLines);

// their solution

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
});

// learnyounode 5

var path = require('path');
var fs = require('fs');


fs.readdir(process.argv[2], function(err, files) {

});

