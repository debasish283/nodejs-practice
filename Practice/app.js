var express = require('express');
var app = express();

app.set('view engine','jade');

app.use('/', function(req, res){
	res.render(__dirname + '/views/index.jade');

})
app.use(express.static( __dirname + 'public'));

app.listen(3000, function(){
	console.log('Port 3000 is ON!')
});