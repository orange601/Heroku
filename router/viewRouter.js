module.exports = function(app)
{
  var express = require('express');
	var router = express.Router();

	app.get('/', function(req, res){
		res.render('index.html');
	});

  app.get('/about', function(req, res){
		res.render('about.html');
	});

	return router;	//라우터를 리턴
}
