var express = require('express');
var app = express();
var hostname = "";
var port = 5000;

var appRouter = require("./router/viewRouter")(app);
app.use("/", appRouter);

var router = require("./router/serviceRouter");
app.use("/public", router.publicService());
app.use("/private", router.privateService());

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.static('public'));

var server = app.listen(process.env.PORT || port, function(){
	console.log(`Server port : ${port} directory : ${__dirname} `);
});
