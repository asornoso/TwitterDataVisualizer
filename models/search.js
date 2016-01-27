/*
* Our site model will interact with the database correctly and make the calls async-ly with promises
* */

var search = exports = module.exports;
var Promise = require('bluebird');


//TWITTER APP
    var Twitter = require('twitter-js-client').Twitter;

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "",
        "consumerSecret": "",
        "accessToken": "",
        "accessTokenSecret": "",
        "callBackUrl": ""
    }

    var twitter = new Twitter(config);

module.exports =  {

    // Get list of tweets with the hashtag
    getAllHashInstances: function(tag) {

        return new Promise(function (resolve, reject) {
          	//twitter.getCustomApiCall('/search/tweets.json',{'q':'%23'+tag, 'result_type':'recent', 'count':'100'}, 
			 twitter.getSearch({'q':'#'+tag,'count': 100},
				function(err){
					return resolve(err);
				}, 
				function(data){
					return resolve(data);
				});
        });
    },




    getAllUserInstances: function(user){

    	 return new Promise(function (resolve, reject) {
          	twitter.getUserTimeline({ screen_name: user, count: '200'}, 
				function(err){
					return resolve(err);
				}, 
				function(data){
					return resolve(data);
				});
        });
    },

    random: function(){

    	 return new Promise(function (resolve, reject) {
			twitter.getUserTimeline({ screen_name: 'latimes', count: '200'}, 
				function(err){
					return resolve(err);
				}, 
				function(data){
					return resolve(data);
				});
        });
    }

};

return module.exports;