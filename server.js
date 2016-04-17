var http = require("http");
http.createServer(function(request, response){
	
	response.writeHead(200, {"content-Type":"text/plain"});
	response.write('Hello Debasish, Welcome to Node JS');
	console.log(server running now);
	response.end();
}).listen(8080);