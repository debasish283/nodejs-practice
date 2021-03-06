var express = require('express')
var bodyParser = require('body-Parser')
var post = require('./models/post')

var app = express()
app.use(bodyParser.json)

app.get('/api/posts', function(req,res,next){
	Post.find(function(err,posts){
		if(err){return next(err)}
			res.json(posts)
	})
})

app.get('/api/posts', function(req,res,next){
	var post = new Post({
		username : req.body.username,
		body : req.body.body
	})
	post.save(function(err,post){
		if(err){return next(err)}
			res.json(201,post)
	})
})
app.listen(3000, function(){
	console.log('Server listening on port 3000');
})