var express = require('express');
var app = express();
//app.use(express.static('src/views'));


//app.set('view engine', 'jade');


// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/index.html');
// })
// app.get('/books', function(req, res){
// 	res.send('This is books page');
// })
app.set('view engine', 'jade');

app.set('views', __dirname + '/views');
app.use(express.static( __dirname + '/public'));

app.get('/', function(req, res){
	res.render( __dirname + '/views/index.jade');
})

app.listen(3000, function(){
	console.log('port 3000 is on!')
});