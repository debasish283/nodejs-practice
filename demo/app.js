var express = require('express');
var app = express();

// app.get('/', function(req, res){
// 	res.sendFile( __dirname + '/index.html');
// 	console.log('This is the index page');
// });
// app.get('/', function(req, res){
// 	res.render( __dirname + '/index.jade','');
// 	console.log('This is the index page');
// });
// app.get('/about', function(req, res){
// 	res.sendFile( __dirname + '/about.html');
// 	console.log('This is the about page');
// });
app.get('/', function(req, res){
	res.render( __dirname + '/demo.jade');
	console.log('This is the about page');
});
app.listen(3000, function(){
	console.log('Server listening at port 3000');
})