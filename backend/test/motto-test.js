var expect  = require('chai').expect;
var request = require('request');

var test_motto = {
    motto: "Computer Science - We learn what we must, because we can",
    name:  "Philip Molares"
}

describe('Status and content', function() {
    describe ('POST /api/motto', function() {
        it('status', function(){
            request({
                url: "http://localhost:5000/motto",
                    method: "POST",
                    json: true,
                    body: test_motto
            }, function (error, response, body){
                expect(response.statusCode).to.equal(200);
            });
        });
    });

    describe ('[GET] /api/motto/list', function() {
        it('ohne Admin-Rechte', function(){
            request('http://localhost:8080/motto/list', function(error, response, body) {
                it('status', function() {
                    expect(response.statusCode).to.equal(200);
                });
                it('body', function () {
                    expect(body).to.equal(test_motto);
                });
            });
        });
        it('mit Admin-Rechte', function(){
            request('http://localhost:8080/motto/list', function(error, response, body) {
                it('status', function() {
                    expect(response.statusCode).to.equal(200);
                });
                it('body', function () {
                    expect(body).to.equal(test_motto);
                });
            });
        });
    });
});