//THIS FILE HAS ALL FUNCTIONS TO CREATE THE TWEET INFO TABLE

function createTweetTable(data){

	parseData(data);


}


function parseData(data){
	//var tableData = [];
	var limit = 100;
	$.each( data, function( i ) {
		if(i >= limit)
		{
			return false;
		}
        if(data[i].date )
        {
            var date = new Date(data[i].date);

       		var sDate = (date.getMonth()+1).toString() + '-' + date.getDate().toString() + '-' + date.getFullYear().toString();

       		var text = data[i].text;
       		var favs = data[i].favorite_count;

       		//var rowData = {'date':sDate, 'text': text, 'favs':favs};
       		createRow(sDate, text, favs);
    		//tableData.push(rowData);
        }
        else
        {
          console.log("ERROR NOT VALID DATA");
        }

      });

}


function createRow(date, text, favs){
		$('#tweetTable > tbody:last-child').append('<tr><td>'+date+'</td><td>'+text+'</td><td>'+favs+'</td></tr>');
		console.log('added');
}