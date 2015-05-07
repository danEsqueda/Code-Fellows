var path = require('path');
var fs = require('fs');


module.exports = function(directory, extension, callback) {

    fs.readdir(directory, function(err, files) {
      var fullExtension = '.' + extension;
      if (err) {
        return callback(err, null);
      } else {
      var sortedFiles = [];
      files.forEach(function(file) {
        if (path.extname(file) === fullExtension) {
          sortedFiles.push(file);
        }
      });
      callback(null, sortedFiles);
      }
    });
}
