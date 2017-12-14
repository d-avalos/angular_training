// Block level?
{
    var universe = "Star Wars";
}
console.log(universe);


// // Function level error
// function galaxy() {
//     var planet = "Naboo";
// }
// galaxy();
// console.log(planet);


// // Function level
// function galaxy() {
//     var planet = "Naboo";
//     for (var i = 0; i < 10; i++) {
//         var planet = "Tatooine";
//     }
//     console.log(planet);
// }
// galaxy();

// // IIFE
// function galaxy() {
//     var planet = "Naboo";
//     for (var i=0; i<5; i++) {
//         (function() {
//             var planet = "Tatooine";
//         })();
//     }
//     console.log(planet);
// }
// galaxy();

		// function travelToAnotherPlanet() {
		//   var planet = "Tatooine";
		// }
		// travelToAnotherPlanet();


// // LET
// function galaxy() {
//     var planet = "Naboo";
//     for (var i = 0; i < 5; i++) {
//         let planet = "Tatooine";
//     }
//     console.log(planet);
// }
// galaxy();


// // Interview question
// var funcs = [];
// for (var i = 0; i < 5; i += 1) {
//     var y = i;
//     funcs.push(function () {
//         console.log(y);
//     })
// }
// funcs.forEach(function (func) {
//     func()
// });

