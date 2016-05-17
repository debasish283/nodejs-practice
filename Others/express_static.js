var express = require('express');
var app = express();
// app.get('/ab+cd', function(req, res){
// 	res.send('Hi');
// })	;

// app.get(/a/, function(req, res) {
//   res.send('Anything with a');
// });

// app.get(/.*fly$/, function(req, res) {
//   res.send('Anything with a fly');
//  });
// app.get('/about/xyz', function(req, res) {
//   res.send('It is about/xyz');
// });

// app.get('/about/example', function(req, res, next){
// 	console.log('the next function will send the details');
// 	next();
// },
// function(req, res){
// 	res.send('I am the next function');
// });

// var s1 = function(req, res, next){
// 	console.log('It is S1');
// 	next();
// } 
// var s2 = function(req, res, next){
// 	console.log('It is S2');
// 	next();
// } 
// var s3 = function(req, res){
// 	console.log('It is S3');
// 	res.send('It is printed from S3');
// }
// app.get('/about/example',[s1,s2,s3]);


// var s1 = function(req, res, next){
// 	console.log('This is S1');
// 	next();
// }
// var s2 = function(req, res, next){
// 	console.log('This is S2');
// 	next();
// }
// app.get('/about/example/', [s1,s2], function(req, res, next){
// 	console.log('This is get method');
// 	next();
// },
// function(req, res){
// 	res.send('This is the final response');
// 	console.log('Final response');
// });

// app.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });


var birds = require('./birds');

app.use('/birds', birds);

app.listen(3000, function(){
	console.log('Server is listening at port 3000');
});	