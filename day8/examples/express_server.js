'use strict';

var express = require('express');
// var http = require('http');
var app = express();

var awesome = function(req, res, next) {
  req.awesome = 'In awesome function';
  next();
};

var middleWare = function(req, res, next) {
  console.log('In middleware function');
  req.message = 'hello from middleware\n';
  if (req.awesome) {
    return next(new Error('request did not have expected property'));
  }

  next()
};

app.use(middleWare);

var router = new express.Router();
router.get('/', function(req, res) { //when you do a get to '/' return the function
  res.send('in router for /');
});

router.get('/bar', function(req, res) {
  res.send('in rounter for /bar');
});



app.use('/useRoute', router);



app.get('/', awesome, function(req, res) {
  res.send(req.awesome + ': ' +  req.message + ' (done).');
});

app.get('/greet/:name/:title', function(req, res) {
  res.send('hello ' + req.params.title + '. ' +  req.params.name);
});

app.get('/*', function(req, res) {
  res.status(404).send('page note found');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});
