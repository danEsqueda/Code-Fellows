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

// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// });
