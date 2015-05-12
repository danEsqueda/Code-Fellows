'use strict';


var express = require('express');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var app = express();


var middleWare = function(req, res, next) {
  console.log('In middleware function');
  console.log('middleware' + req.session);
  if (req.session !== undefuned && req.session.counter !== undefined) {
    console.log('Visit count: ' + req.session.counter);
  }
  console.log(req.cookies);
  next();
}


app.use(cookieParser());
app.use(cookieSession({secret: 'Code Fellows'}));
app.use(middleWare);

app.get('/', function(req, res) {
  if (req.session.counter === undefined) {
    req.session.counter = 1;
  } else {
    req.session.counter += 1;
  }
  console.log(req.cookies);
  res.cookie("codefellows-cookie", "Yum... cookies");
  res.send("Hello World");
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});
