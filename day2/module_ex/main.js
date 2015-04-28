console.log('main starting');
var a = require('./a.js');
var b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);


/*
We have a simple module. So, for this class, let us add a simple gruntfile and package.json for it.
-The gruntfile should have two tasks, test which runs the simple-mocha task,
and the default should run the jshint and simple-mocha task.
-Running grunt should run jshint and simple-mocha
-Running grunt test should just run the tests.
-Bonus: Add a watch on the source js files (not package.json) that reruns the
tests and jshint when any of them changes.
*/
