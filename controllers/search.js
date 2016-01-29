var search = require('../models/search'),
    Promise = require('bluebird');

var lupus = require('lupus');


var limit = 200;

var exports = module.exports = function(app) {

    //example url: localhost:3001/search/hashtag/#taytay
    app.get('/search/hashtag/:query', function(req, res) {
        var query = req.params.query;

       	search.getAllHashInstances(query).then(function (results){
			     res.send(results);
       	}) 
    });






    app.get('/search/user/:query/:amount', function(req, res) {
      
      var query = req.params.query;
      var userLimit = req.params.amount;
      if(userLimit)
      {
        limit = userLimit;
        console.log('LIMIT: '+limit);
      }

      search.getAllUserInstances(query).then(function (results){
      

         var data = JSON.parse(results);



            if(data.length == 200 && limit > 200)
            {
              recursiveDataGrabber(query, data[199].id_str, data, function(values){
              //recursivePromise(query, data[199].id_str, data, 0, function(values){
                //return values;
                console.log('done with recursion LENGTH:'+values.length);
               // return Promise.resolve(values);
                 var dps = [];
                 lupus(0, values.length-1, function(i) {

                         if(values[i].created_at)
                        {

                            var date = new Date(values[i].created_at);
                            date = new Date(date.toISOString());
                            iso = +date;
                            var ob={'id':values[i].id_str, 'date':iso, 'amount':parseFloat(i), 'text':values[i].text, 'favorite_count':values[i].favorite_count};
                            dps.push(ob);
                    
                         
                        }
                        else
                        {
                          console.log("ERROR NOT VALID DATA");
                        }

                    }, function() {
                      console.log('finished');
                      console.log(dps.length);
                         res.send(dps);
                         //return dps;
                    });

              });

   




            }
            else
            {

              var dps = [];

              lupus(0, data.length-1, function(i) {

                   if(data[i].created_at)
                  {

                      var date = new Date(data[i].created_at);
                      date = new Date(date.toISOString());
                      iso = +date;
                      var ob={'id':data[i].id_str, 'date':iso, 'amount':parseFloat(i), 'text':data[i].text, 'favorite_count':data[i].favorite_count};
                      dps.push(ob);
              
                   
                  }
                  else
                  {
                    console.log(data[i].created_at);
                    console.log("ERROR NOT VALID DATA");
                  }

              }, function() {
                console.log('finished');
                   res.send(dps);
                   //return dps;
              });

            }
            



         











      })


    });











        //example url: localhost:3001/search/random
    app.get('/search/random', function(req, res) {
        var query = 'taylorswift13';//req.params.query;
       	search.random(query).then(function (results){
			res.send(results);
       	})
    });
};

function firstCall(data){

     return recursiveDataGrabber(query, data[199].id_str, data, 0, function(values){
                //return values;
                console.log('done with recursion');
                return resolve(data);
    });


}


//var recursivePromise = Promise.promisify(
function recursiveDataGrabber(query, max, data, callback_0){

        console.log('Controller: Data with Max: '+data.length +' MAX: '+ max);
  search.getAllUserInstancesAgain(query,max).then(function (results){
      results = JSON.parse(results);
      data = data.concat(results);
      if (data.length >= limit || results.length < 200) {

          console.log('Controller: Recursion DONE LENGTH:'+data.length);
          callback_0(data);
          return;

      }
      else
      {
        recursiveDataGrabber(query, results[199].id_str, data, callback_0);
      }
  });
}
//);

function cleanDates(data){


        var dps = [];

        lupus(0, data.length-1, function(i) {

             if(data[i].created_at)
            {

                var date = new Date(data[i].created_at);
                date = new Date(date.toISOString());
                iso = +date;
                var ob={'id':data[i].id, 'date':iso, 'amount':parseFloat(i), 'text':data[i].text, 'favorite_count':data[i].favorite_count};
                dps.push(ob);
        
             
            }
            else
            {
              console.log(data[i].created_at);
              console.log("ERROR NOT VALID DATA");
            }

        }, function() {
          console.log('finished');
             //res.send(dps);
             return dps;
        });




}


