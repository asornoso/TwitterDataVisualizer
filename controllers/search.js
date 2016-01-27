
var search = require('../models/search'),
    Promise = require('bluebird');


var exports = module.exports = function(app) {


    //example url: localhost:3001/search/hashtag/#taytay
    app.get('/search/hashtag/:query', function(req, res) {
        var query = req.params.query;

       	search.getAllHashInstances(query).then(function (results){
			res.send(results);
       	})

        
    });


    //example url: localhost:3001/search/user/@taylorSwift
    app.get('/search/user/:query', function(req, res) {
        var query = req.params.query;

       	search.getAllUserInstances(query).then(function (results){
			res.send(results);
       	})


    });

        //example url: localhost:3001/search/random
    app.get('/search/random', function(req, res) {
        var query = req.params.query;

       	search.random(query).then(function (results){
			res.send(results);
       	})


    });




};