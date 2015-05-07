var server = require('../basic_http_server.js');
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('basic_http_server', function() {

  it('should return the current time', function(done) {
    chai.request(server)
    .get('/time')
    .end(function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });
    done();
  });

  it('should return the greet name', function(done) {
    chai.request(server)
    .get('/greet/')
    .end(function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
    });
    done();
  });
});

// idea: expect(response.text).to.eql('John');
