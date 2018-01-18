class Jedi {
	constructor(public firstName, public lastName, public age){}
	name() {
		return `${this.firstName} ${this.lastName}`;
	}
}


function createList<T>(firstElement: T): T[] {
	let arrayOfT: T[] = []; //Create empty array of type T
	arrayOfT.push(firstElement);
	return arrayOfT;
}


let obiWan = new Jedi("Obi-Wan", "Kenobi", 35);
let listOfJediNames = createList<string>(obiWan.name());
console.log(listOfJediNames[0]);
console.log(typeof(listOfJediNames[0])); // Array of string

let listOfJediAges = createList(obiWan.age); // Didn't add the type, so Typescript deduce it.
console.log(listOfJediAges[0]);
console.log(typeof(listOfJediAges[0])); // Array of number