var buffer = new Buffer(11); // the number is the amount of spaces
buffer.write("Hello");
buffer.write(" ",5);
buffer.write("World",6);
console.log(buffer.toString());
