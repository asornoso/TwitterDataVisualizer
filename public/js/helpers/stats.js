
//----------------------------------------------DATA STATISTICS---------------------------------------------------
function getMedian(values) {

    var half = Math.floor(values.length/2);

    if(values.length % 2)
        return values[half];
    else
        return (values[half-1] + values[half]) / 2.0;
}

function getMean(total, length){
  return total/length;
}


function getTotal(values){
  var i = 0;
  var total = 0;
  while ( i < values.length)
  {
    total += values[i];
    i++;
  }
  return total;

}

function getBelow(values, threshold){
  var x = 0;
  var belows = [];
  while (x <values.length)
  {
    if(values[x]<threshold)
    {
      belows.push(values[x]);
    }
    x++;
  }
  return belows;
}
