var http = require('http'); 
var server = http.createServer();
server.on('request', doRequest); 
server.listen(3000); 
console.log('Server running!'); // ��û ó�� 
function doRequest(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'}); 
	res.write('Hello Wddorld\n'); res.end(); 
}
