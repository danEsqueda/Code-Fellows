var MongoClient = require('mongodb').MongoClient
var mongoose = require('mongoose');
var assert = require('assert');

mongoose.connect('mongodb://localhost:27017/myproject');

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collectionSchema = mongoose.Schema({
    a: number
  });

  var collection = mongoose.model('documents', collectionSchema);
  // Insert some documents
  collection.insert([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Connected correctly to server");
  insertDocuments(db, function () {
    db.close();
  });
});

