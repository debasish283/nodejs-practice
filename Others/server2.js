var connect = require('connect');
var http = require ('http');

var app = connect();

function profile(request,response){
	console.log('User requested profile');
	//next();
}

function forum(request,response){
	console.log('User requested forum');
	//next();
}

app.use('/profile',profile);
app.use('/forum',forum);


http.createServer(app).listen(3000);
console.log('server running')