interface Planet {
	name: string;
	population: number;
}

function blowPlanet(planet: Planet): void {
	console.log(`
		Planet name: ${planet.name} 
		Population: ${planet.population}
		Charging....
		Fire...
		Population: 0
		`)
}

let alderaan = {name: "Alderaan", population: 2000000000}
blowPlanet(alderaan);



// interface Character {
//     firstName: string;
//     lastName: string;
//     whoAreYou?: Function;
// }

// class Jedi implements Character {
// 	constructor(public firstName, public lastName){}
// 	name() {
// 		return `My name is: ${this.firstName} ${this.lastName}`;
// 	}
// }

// let obiWan = new Jedi("Obi-Wan", "Kenobi");
// console.log(obiWan.name());