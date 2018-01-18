import { getPlanets, getPlanetNames } from "./galaxy-utils";
getPlanetNames().forEach(function(name){
	console.log(name);
})
for (let planet of getPlanets()) {
  console.log(planet.name, planet.population);
};


// // Import using an alias to avoid name conflicts
// import { getPlanets as planets, getPlanetNames } from "./galaxy-utils";
// getPlanetNames().forEach(function(name){
// 	console.log(name);
// })
// for (let planet of planets()) {
//   console.log(planet.name, planet.population);
// };


// // Import everything from module
// import * as galaxyUtils from "./galaxy-utils";
// galaxyUtils.getPlanetNames().forEach(function(name){
// 	console.log(name);
// })

// for (let planet of galaxyUtils.getPlanets()) {
//   console.log(planet.name, planet.population);
// };


// // Import default. Needs a default export in the module
// import getPlanetNames from "./galaxy-utils";
// getPlanetNames().forEach(function(name){
// 	console.log(name);
// })