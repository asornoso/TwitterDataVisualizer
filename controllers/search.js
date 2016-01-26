
var search = require('../models/search'),
    Promise = require('bluebird');


var exports = module.exports = function(app) {


    //example url: localhost:3001/hashtag/#taytay
    app.get('/hashtag/:query', function(req, res) {
        var query = req.params.query;

       	search.getAllHashInstances(query).then(function (results){

			res.send(results);
       	})

        
    });


    //example url: localhost:3001/user/@taylorSwift
    app.get('/user/:query', function(req, res) {
        var query = req.params.query;

       	search.User(query).then(function (results){

			res.send(results);
       	})


    });




};