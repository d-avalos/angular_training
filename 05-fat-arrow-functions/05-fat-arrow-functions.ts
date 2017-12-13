// // Anonymous functions
// setTimeout(function() {
// 	console.log("You will be a Jedi, just not yet!");
// }, 1000);

// // One expression
// setTimeout(() => console.log("You will be a Jedi, just not yet!"), 1000);

// // Arguments (function expression)
// let jedis = function(master,padawan) {
// 	return `${master} is master of ${padawan}`;
// };
// console.log(jedis("Obi Wan", "Anakin"));

// // this
// let jedi = {
// 	name: "Obi Wan",
// 	sayLater: function() {
// 		console.log(`${this.name}`);
// 	}
// };
// jedi.sayLater();

let jedi = {
    name: "Obi Wan",
    sayLater: function () {
        setTimeout(function () {
            console.log(`${this.name}`);
        }, 1000);
    }
};
jedi.sayLater();