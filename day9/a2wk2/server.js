'use strict';

var express = require('express'),
    http = require('http'),
    app = express(),
    mongoose = require('mongoose'),
    Note = require('./notes'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    router = express.Router();



mongoose.connect('mongodb://localhost:27017/notes');
app.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

router.get('/', function(req, res) {
  res.json({message: "welcome"});
});

router.route('/notes')

  .post(function(req, res) {
    var note = new Note({name: req.body.name});
    console.log(req.body);


    note.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({message: 'Note name: ' + note.name});
      }
    });
  })
  .get(function(req, res) {
    Note.find(function(err, notes) {
      if (err) {
        res.send(err);
      } else {
        res.json(notes);
      }
    });
  });

router.route('/notes/:name')

  .get(function(req, res) {
    var noteName = req.params.name;
    Note.find({name: noteName}, function(err, note) {
      if (err) {
        res.send(err);
      } else {
        res.json(note);
      }
    });
  });

router.route('/notes/:note_id')

  .get(function(req, res) {

    Note.findById(req.params.note_id, function(err, note) {
      if (err) {
        res.send(err);
      } else {
        res.json(note);
      }
    });
  })

  .put(function(req, res) {
    Note.findById(req.params.note_id, function(err, note) {
      if (err) {
        res.send(err);
      } else {
        note.name = req.body.name;
      }

      note.save(function(err) {
        if (err) {
          res.send(err);
        } else {
          res.json({message: "Note name updated to: " + note.name});
        }
      });
    });
  })

  .patch(function(req, res) {
    Note.findById(req.params.note_id, function(err, note) {
      if (err) {
        res.send(err);
      } else {
        note.name = req.body.name;
      }

      note.save(function(err) {
        if (err) {
          res.send(err);
        } else {
          res.json({message: "Note name updated to: " + note.name});
        }
      });
    });
  })

  .delete(function(req, res) {
    Note.remove({_id: req.params.note_id}, function(err, note) {
      if (err) {
        res.send(err);
      } else {
        res.json({message: "Note deleted!"});
      }
    });
  });



app.use(router);

app.get('/*', function(req, res) {
  res.status(404).send('page note found');
});

app.listen(port, function() {
  console.log('server started on port: ' + port);
});
