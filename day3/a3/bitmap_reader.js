var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');


var bitmapObject = {

}

console.log(bitmap.toString('utf-8', 0, 14));
