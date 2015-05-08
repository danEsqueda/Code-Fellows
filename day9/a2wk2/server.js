'use strict';

var express = require('express');
var http = require('http');
var app = express();



// app.get('', function(req, res) {
//   res.send('');
// });

// app.post('', function(req, res) {
//   res.send('');
// });

// app.put('', function(req, res){
//   res.send('');
// });

// app.patch('', function(req, res) {
//   res.send('');
// });

// app.delete('', function(req, res) {
//   res.send('');
// });

app.get('/*', function(req, res) {
  res.status(404).send('page note found');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});
