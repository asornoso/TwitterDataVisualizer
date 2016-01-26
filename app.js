var express = require('express'),
    app = express();
   // port = process.env.PORT || 3000; // Defaults to 3000 in our case
    port = 3001;
// Sets the db instance as a property of app. Will follow app wherever it goes


// sets our default directory to get static content
app.use(express.static('./public'));



// Loads our index.js inside our controllers folder where all out routes are held along with qll the controllers
// Also passes an instance of app
require('./controllers')(app);


// default landing page for now
app.get('*', function(req, res) {
	res.sendFile('/index.html', { root: __dirname });
});

 app.listen(port, function (err, res) {
            console.log('server started on port: %s', port);
        });

console.log('ran');
process.title = 'SimpleTwitterDataVisualizer';