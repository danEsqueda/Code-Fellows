var filePrint = require('./file_print');


filePrint(process.argv[2], process.argv[3], function(err, files) {
  if (err !== null) {
    console.log("There was an error: ", err);
  } else {
    files.forEach(function(file) {
      console.log(file);
    });
  }
});
