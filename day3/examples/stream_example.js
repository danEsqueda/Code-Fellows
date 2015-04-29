var stream = require('stream');
var fs = require('fs');

var fileStream = fs.createWriteStream('./hello.txt');

var rs = new stream.Readable();

rs.pipe(fileStream);

rs.push('Hello');
rs.push(' ');
rs.push('World');
rs.push(null);

// this will add the text: Hello World into the hello.txt file.
