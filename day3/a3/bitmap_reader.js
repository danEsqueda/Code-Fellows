'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('test.bmp');

var bitmapObject = {};

bitmapObject.type = bitmap.toString('utf-8', 0, 2);
bitmapObject.size = bitmap.readInt32LE(2);
// Unused bits one and two
bitmapObject.startOfPixels = bitmap.readInt32LE(10);
bitmapObject.dibSize = bitmap.readInt32LE(14);
// Assume we have a WINDOWSBITMAPHEADER;
// how could we confirm this?
bitmapObject.width = bitmap.readInt32LE(18);
bitmapObject.height = bitmap.readInt32LE(22);
// Color planes. Should be one.
bitmapObject.colorDepth = bitmap.readInt16LE(28);
// Compression method.
// Image size.
// Horizontal resolution.
// Vertical resolution.
bitmapObject.paletteSize = bitmap.readInt32LE(46);
bitmapObject.palette = [];
var paletteStart = 14 + bitmapObject.dibSize;
var paletteEnd = paletteStart + bitmapObject.paletteSize * 4;


bitmapObject.readPalette = function() {

  for (var i = paletteStart; i < paletteEnd; i = i + 4) {
    bitmapObject.palette.push({
      red: bitmap.readUInt8(i),
      green: bitmap.readUInt8(i + 1),
      blue: bitmap.readUInt8(i + 2),
      alpha: bitmap.readUInt8(i + 3)
    });
  }
}

// To do: Read in color palette.
// Transform color palatte.
// Write palette changes to buffer and then to file.
//bitmapObject.paletteTest = bitmap.readInt32LE(55);
bitmapObject.readPalette();
console.log(bitmapObject.palette.length);
// console.log(bitmapObject.palette);
// console.dir(bitmapObject);



