var path = require('path');
var fs = require('fs');


fs.readdir(process.argv[2], function(err, files) {
  var extension = '.' + process.argv[3];
  files.forEach(function(file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});
