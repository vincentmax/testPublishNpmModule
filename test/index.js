var should = require('chai').should(),
	testPNM=require('../index'),
	testMain=testPNM.testMain;
describe('#testMain',function(){
	it('aaaaaaaaaaaa',function(){
		testMain().should.equal('hello');	
	});
	
		
});