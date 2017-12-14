import { getPlanets, getPlanetNames } from "./galaxy-utils";
// import { getPlanets as planets, getPlanetNames } from "./galaxy-utils";
// import * as galaxyUtils from "./galaxy-utils";
// import getPlanets from "./galaxy-utils";

getPlanetNames().forEach(function(name){
	console.log(name);
})

for (let planet of getPlanets()) {
  console.log(planet.name, planet.population);
};