module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });

     app.get('/about',function(req,res){
        res.render('about.html');
    });

	var serverData = "";
	app.get('/exchangeRate',function(req,res){
		const https = require('http');
		https.get('http://www.eyacoin.com/API/ExchangeRate.aspx?lang=eng', (resp) => {
			var data = '';

		// A chunk of data has been recieved.
		resp.on('data', (chunk) => {
		  serverData += chunk;
		});
		
		// The whole response has been received. Print out the result.
		//resp.on('end', () => {
			//console.log(JSON.parse(serverData).explanation);
		//});
		
		}).on("error", (err) => {
		  console.log("Error: " + err.message);
		});

        res.render('exchangeRate.html', {exchangeRate: serverData});
    });
}