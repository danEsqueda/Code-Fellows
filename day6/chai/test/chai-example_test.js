var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

describe('chai-http', function() {
  var theResopnse;
  it('should return ok for www.google.com', function() {
    chai.request('http://www.google.com', function(err, request) {
      console.log(request);
      expect.request.to.not.be.ok;
    })
  });
});
