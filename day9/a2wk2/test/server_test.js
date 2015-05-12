var server = require('../server.js');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Notes RESTful api', function() {
  it('can successfully create a new note', function(done) {
    chai.request('http://localhost:3000/notes')
    .send({name: "dan"})
    .end(function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });
    done();
    });
  });
