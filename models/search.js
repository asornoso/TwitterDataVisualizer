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


    /*
    var config = {
        "consumerKey": "",
        "consumerSecret": "",
        "accessToken": "",
        "accessTokenSecret": "",
        "callBackUrl": ""
    }
    */

    var twitter = new Twitter(config);

var limit = 3;

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




    getAllUserInstancesAgain: function(user, max){
        console.log('Model: Data with Max: '+max);
    	 return new Promise(function (resolve, reject) {

                     twitter.getUserTimeline({ screen_name: user, count: '200','max_id':max}, 
                        function(err){
                            return  resolve(err);
                        },function(data){
                            return resolve(data);
                        });
                

        });
    },



    getAllUserInstances: function(user){

        console.log('Model: Data');

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



function recursiveData(max, user, data, repeats){

    if(data.length < 200 || repeats >= limit)
    {
        return data;
    }
    else
    {
        twitter.getUserTimeline({ screen_name: user, count: '200','max_id':max}, 
            function(err){
                console.log(err);
                return  data;
            },function(data2){
                
                data = data.concat(data2);

                if(data2.length == 200)
                {
                    recursiveData(data2[199].id_str, user, data, ++repeats);
                }
                else
                {
                    return data;
                }

            });
    }
 

}
return module.exports;