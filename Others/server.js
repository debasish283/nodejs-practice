var http = require('http');
var fs = require('fs');

function send404Response(response){
	response.writeHead(404,{'Content-Type':'text/plain'});
	response.write("Error 404 : Page Not Found");
	response.end();

}

function onRequest(request, response){
	if(request.method == 'GET' && request.url == '/'){
		response.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream("./index.html").pipe(response);
	}
	else{
		send404Response(response);
	}

}

// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Hello World')
// }).listen(3000,'127.0.0.1');

http.createServer(onRequest).listen(3000);
console.log('Server running at 127.0.0.1');