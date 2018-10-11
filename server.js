var express = require('express');
var app = express();
var router = require("./router/main")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static('public'));

var server = app.listen(process.env.PORT || 5000, function(){
	console.log("server 5000");
});

