function User(){
	this.name = "";
	this.points = 100;

	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.points += 1;

		console.log(this.name + " gave 1 life to " +targetPlayer.name);
	}
}

var ram = new User();
var shyam = new User();

ram.name = "Ram";
shyam.name = "Shyam";

ram.giveLife(shyam);

console.log("Ram now has " +(ram.points - 1));
console.log("Shyam now has " +shyam.points);

User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.points -= 3;
	console.log(this.name + " uppercutted to " +targetPlayer.name);
}
shyam.uppercut(ram);

console.log("Ram now has " +ram.points);
console.log("Shyam now has " +shyam.points);

User.prototype.magic = 60;
console.log(ram.magic);
console.log(shyam.magic);