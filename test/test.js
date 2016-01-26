var should = require('should');
var mocha = require('mocha');
var superagent = require('superagent');

describe('website', function() {
	describe('startup', function(){
		it('should navigate successfully to the main page', function(done){
			superagent
      				.get('http://localhost:3001')
      				.end(function(error, res){
					try {
						should.exist(res);
						res.should.have.property('status');
						res.status.should.eql(200);
						done();
					} catch(e) {
						done(e);
					}
    				});	
		});
	});
});

