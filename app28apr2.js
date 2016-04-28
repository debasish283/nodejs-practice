var demo = {
	printFirstName : function(){
		console.log('My Name is Guddu');
		console.log(this === demo);
	}
}
demo.printFirstName();

var doSomething = function(){
	console.log('I am ' + global);
	console.log(this === demo);
}

doSomething();
