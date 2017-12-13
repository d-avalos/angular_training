// Block level?
{
    var a = "block";
}
console.log(a);


// // Function level error
// function hello() {
//     var a = "function";
// }
// hello();
// console.log(a);


// // Function level
// function hello() {
//     var a = "function";
//     for (var i = 0; i < 10; i++) {
//         var a = "block";
//     }
//     console.log(a);
// }
// hello();

// // IIFE
// function hello() {
//     var a = "function";
//     for (var i=0; i<5; i++) {
//         (function() {
//             var a = "block";
//         })();
//     }
//     console.log(a);
// }
// hello();

		// function something() {
		//   var a = "block";
		// }
		// something();


// // LET
// function hello() {
//     var a = "function";
//     for (var i = 0; i < 5; i++) {
//         let a = "block";
//     }
//     console.log(a);
// }
// hello();


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

