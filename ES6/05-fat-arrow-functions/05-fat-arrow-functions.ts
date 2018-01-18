// Anonymous functions
setTimeout(function() {
	console.log("You will be a Jedi, just not yet!");
}, 1000);



// // One expression
// setTimeout(() => console.log("You will be a Jedi, just not yet!"), 1000);



// // Arguments (function expression)
// let jedis = function(master,padawan) {
// 	return `${master} is master of ${padawan}`;
// };
// console.log(jedis("Obi Wan", "Anakin"));

// // Arguments with arrow functions
// let jedis = (master,padawan) => `${master} is master of ${padawan}`;
// console.log(jedis("Obi Wan", "Anakin"));



// // this
// let jedi = {
// 	name: "Obi Wan",
// 	sayLater: function() {
// 		console.log(`${this.name}`); // `this` = this object
// 	}
// };
// jedi.sayLater();



// // this failed
// let jedi = {
//     name: "Obi Wan",
//     sayLater: function () {
//         setTimeout(function () {
//             console.log(`${this.name}`); // `this` = new scope
//         }, 1000);
//     }
// };
// jedi.sayLater();



// // this -> self workaround
// let jedi = {
//     name: "Obi Wan",
//     sayLater: function () {
// 		let self = this;
//         setTimeout(function () {
//             console.log(`${self.name}`);
//         }, 1000);
//     }
// };
// jedi.sayLater();



// // Fat arrow
// let jedi = {
//     name: "Obi Wan",
//     sayLater: function () {
//         setTimeout(() => console.log(`${this.name}`), 1000); // `this` = this object again!!!
//     }
// };
// jedi.sayLater();