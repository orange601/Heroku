var express = require('express');
var app = express();

var appRouter = require("./router/viewRouter")(app);
app.use("/", appRouter);

var router = require("./router/httpClientRouter")();
app.use("/public", router);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static('public'));

var server = app.listen(process.env.PORT || 5000, function(){
	console.log("server 5000");
});
