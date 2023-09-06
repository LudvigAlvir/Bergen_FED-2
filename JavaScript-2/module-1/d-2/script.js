let computer = {
	power: false,
	owner: "Erik",
	powerButton: function () {
		this.power = !this.power;
		console.log("power", this.power);
	},
	setOwner: function (newOwner) {
		this.owner = newOwner;
		console.log(this.owner);
	},
	getOwner: function () {
		return this.owner;
	},
};
/* metode som bytter eieren av pcen*/
/* og metode som logger hvem som eier pcen  */
computer.powerButton();
computer.setOwner("ludvig");
console.log(computer.getOwner());
