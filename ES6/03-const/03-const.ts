// Declaring a const variable
const ruleOfTwo; // SyntaxError: Missing initializer in const declaration


// // Declaring a const variable
// const ruleOfTwo = "A master and an apprentice";
// moo = "A master and two apprentices"; // TypeError: `foo` is read-only

// // Block Scoping
// function func() {
//     if (true) {
//         const tmp = 123;
//     }
//     console.log(tmp); // Uncaught ReferenceError: tmp is not defined
// }
// func();

// // Mutable value
// const ruleOfTwo = {master: "Darth Sidious", apprentice: "Darth Maul"};
// ruleOfTwo.apprentice2 = "Darth Vader";
// console.log(ruleOfTwo.apprentice2);

// // Workaround
// 'use strict';
// const ruleOfTwo = Object.freeze({master: "Darth Sidious", apprentice: "Darth Maul"});
// ruleOfTwo.apprentice2 = "Darth Vader";
// console.log(ruleOfTwo.apprentice2);