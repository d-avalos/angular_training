// Simple decorator which adds a new property `population` to the class
@population
class Planet {
	name;

	constructor(name) {
		this.name = name;
	}
}

function population(target) {
    Object.defineProperty(target.prototype, 'population', {value: () => 2000000000})
}

let alderaan = new Planet("Alderaan");
console.log(alderaan["population"]());



// // Decorator with parameters
// @Population({
// 	howMany: 2000000000
// })
// class Planet {
// 	name;

// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// function Population(config) {
// 	return function(target){
// 	    Object.defineProperty(target.prototype, 'population', {value: () => config.howMany})
// 	}
// }

// let alderaan = new Planet("Alderaan");
// console.log(alderaan["population"]());