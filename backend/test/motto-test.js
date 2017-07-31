var expect  = require('chai').expect;
var request = require('request');

var test_motto = {
    motto: "Computer Science - We learn what we must, because we can",
    name:  "Philip Molares"
};

describe ('[POST] /motto', function() {
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

describe ('[GET] /motto/list', function() {
    describe('ohne Admin-Rechte', function(){
        it('status', function() {
            request('http://localhost:8080/motto/list', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        });
        it('body', function () {
            request('http://localhost:8080/motto/list', function(error, response, body) {
                expect(body).to.equal(test_motto);
            });
        });
    });
    describe('mit Admin-Rechte', function(){
        it('status', function() {
            request('http://localhost:8080/motto/list', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        });
        it('body', function () {
            request('http://localhost:8080/motto/list', function(error, response, body) {
                expect(body).to.equal(test_motto);
            });
        });
    });
});