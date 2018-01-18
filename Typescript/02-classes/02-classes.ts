// Define a class and create an object
class Galaxy { 
	planets: Array<string>;

	constructor(planet_list: Array<string>){
		this.planets = planet_list;
	}

	show_planets():void {
		console.log("The planets are:");
		for(var i=0; i<this.planets.length; i++) {
			console.log(this.planets[i]);
		}
	}
}

var galaxyFarFarAway = new Galaxy(["Naboo", "Tatooine", "Endor"]);
galaxyFarFarAway.show_planets();



// // Inheritance
// class Jedi {
// 	constructor(public firstName, public lastName, private age){}
// 	name() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }

// class Padawan extends Jedi {
// 	master;
// 	constructor(firstName, lastName, age, master) {
// 		super(firstName, lastName, age);
// 		this.master = master;
// 	}

// 	name() {
// 		return `${super.name()} and my master is ${this.master.name()}`;	
// 	}

// 	// // If you try to uncomment this method you will see an error because age is a private member of Jedi.
// 	// myAge() {
// 	// 	return `I'm ${this.age} years old`;
// 	// }


// }

// let obiWan = new Jedi("Obi-Wan", "Kenobi", 35);
// let anakin = new Padawan("Anakin", "Skywalker", 20, obiWan);
// console.log(anakin.name());