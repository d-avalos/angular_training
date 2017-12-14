class Planet {
	name;
	population;

	constructor(name, population) {
		this.name = name;
		this.population = population;
	}
}

let planetList = [
	new Planet("Alderaan", 2000000000),
	new Planet("Tatooine", 200000),
	new Planet("Naboo", 600000)
]

function getPlanets() {
	return planetList;
}

function getPlanetNames() {
	let names = planetList.map(p => p.name);
	return names;
}

export { getPlanets, getPlanetNames };