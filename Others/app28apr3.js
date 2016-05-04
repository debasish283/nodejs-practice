function User(){
	this.name = "";
	this.points = 100;
	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.points += 1;
		console.log(this.name + " gave 1 life to " + targetPlayer.name);
	}
}

var guddu = new User();
var pipi = new User();
guddu.name = "Guddu";
pipi.name = "Pipi";

guddu.giveLife(pipi);

console.log("Guddu has "+ guddu.points);
console.log("Pipi has "+ pipi.points);

User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.points -= 3;
	console.log(this.name + " just uppercutted " + targetPlayer.name);
}

pipi.uppercut(guddu);
console.log("Guddu has "+ guddu.points);
console.log("Pipi has "+ pipi.points);