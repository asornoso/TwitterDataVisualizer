/*
* Our site model will interact with the database correctly and make the calls async-ly with promises
* */

var search = exports = module.exports;
var Promise = require('bluebird');

module.exports =  {

    // Get list of tweets with the hashtag
    getAllHashInstances: function(tag) {

        return new Promise(function (resolve, reject) {

          	//ajax call here
            

        });
    },




    getAllUserInstances: function(user){

    	 return new Promise(function (resolve, reject) {

          	//ajax call here
            

        });


    }

};

return module.exports;