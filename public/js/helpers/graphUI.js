//------------------------------------------UPDATE GRAPH-------------------------------------------------------

function updateGraphData(data){

      create(data);
}

//----------------------CREATE NEW GRAPH HELPER----------------------------
function create(data){


  //REMOVE OLD GRAPH
  if(typeof graph !== 'undefined')
  {
    console.log("will remove old graph");
    $('svg.theChart').remove();

  }


  //GET TIME FOR X AXIS
    var count = 0;  
    var dates = [];
    var countPoints = [];


    //CONVERT TO NUMBERS
   while (count < data.length)
   {

    var ndate = new Date(data[count].date);
    var milis = ndate.getTime() * 1.00;
    if(milis)
    {data[count].date = milis;}
    else
    {data[count].date = 0;}
    
    countPoints.push(data[count].amount);

    dates.push(milis);

    count++;

   }



   dates.sort(function(a, b){return a-b});



    var end = new Date(data[data.length-1].date);
    var start = new Date(data[0].date);
    

//average
  var total = getTotal(countPoints);
  var mean = getMean(total, countPoints.length);
  var min;
  var max;
  if(countPoints.length > 100000)
  {
    min = 'N/A';
    max = 'N/A';
  }
  else
  {
    min = Math.min.apply(null, countPoints);
    max = Math.max.apply(null, countPoints);
  }

     graph = new SimpleGraph("chart1", {
              "xmax": end, "xmin": start,
              "ymax": max+2, "ymin": 0, 
              "title": "Tweets Over Time Graph",
              "xlabel": "Date",
              "ylabel": "Tweets" ,
              "dataPoints": data,
              "dates":dates
            });
  
}