var express = require('express');
var app = express();

app.get('/', function(req, res){
	//console.log(req.query);
	res.send(req.query.search);
});

app.listen(3000, function(){
	console.log('Server is listening at port 3000');
});	