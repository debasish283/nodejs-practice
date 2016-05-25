var express = require('express');
var app = express();

app.set('view engine', 'jade');

//app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public'));
app.use(express.static( __dirname + '/views'));

// app.get('/', function(req, res){
// 	res.render( __dirname + '/index.jade');
// });

app.listen(3000, function(){
	console.log('port 3000 is on!');
});