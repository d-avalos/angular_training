// Block level does not exist in JS
{
    var universe = "Star Wars";
}
console.log(universe);


// // Function level. Error when trying to invoke variable out of its function scope
// function galaxy() {
//     var planet = "Naboo";
// }
// galaxy();
// console.log(planet);


// // Function level. Variable declared twice in scope will work as the same.
// function galaxy() {
//     var planet = "Naboo";
//     for (var i = 0; i < 10; i++) {
//         var planet = "Tatooine";
//     }
//     console.log(planet);
// }
// galaxy();


// // IIFE (immediately-invoked function expression)
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

// // Same as last example, but without IIFE.
// function galaxy() {
//     var planet = "Naboo";
//     for (var i=0; i<5; i++) {
//         function travelToAnotherPlanet() {
// 		  var planet = "Tatooine";
// 		}
// 		travelToAnotherPlanet();
//     }
//     console.log(planet);
// }
// galaxy();


// // LET. Block level.
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

