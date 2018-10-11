module.exports = function()
{
  var express = require('express');
	var router = express.Router();
  var serverData = "";

	router.get('/exchangeRate', function(req, res){
    var url = {
      host: "www.eyacoin.com",
      port: "80",
      path:"/API/ExchangeRate.aspx?lang=eng",
    };

    const http = require('http');

    var request = http.request(url, function(response){
      response.on("data", function(data){
        serverData += data;
      });

      response.on("end", function(){
        console.log(serverData);
      });
    });

    request.end();

    res.setHeader('content-type', 'application/json');
    res.send(serverData);
	});

	return router;	//라우터를 리턴
}
