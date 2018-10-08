var http = require('http'); 
var server = http.createServer();
server.on('request', doRequest); 
server.listen(process.env.PORT || 5000);
server.timeout = 180000;
console.log('Server running!'); // 요청 처리 
function doRequest(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'}); 
	res.write('Hello Wddor222222222ld\n'); res.end(); 
}
