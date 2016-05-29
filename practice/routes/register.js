console.log('Coming here');
const express = require('express');
const router = express.Router();
router.post('/', function(req, res){
	// console.log(req.body);
	console.log('Hi I am here');
	console.log(req.body.name);
	console.log('>>>>>>>>>>>>>>>>>');
	console.log(req.body.job);
	res.send(req.body.name);
});

module.exports = router;