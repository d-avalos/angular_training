const notAJedi = {first: 'Anakin', last: 'Skywalker', age: 20 };

// Old way
// const f = notAJedi.first;
// const l = notAJedi.last;
// console.log(f); 
// console.log(l); 


// // Destructuring an object
// const {first: f, last: l} = notAJedi;
// console.log(f); 
// console.log(l); 


// // Destructuring an object same name
// const {first: first, last: last} = notAJedi;
// console.log(first); 
// console.log(last); 


// // Destructuring an object same name is so common
// const {first, last} = notAJedi;
// console.log(first); 
// console.log(last); 


// // Array destructuring
// const jediCouncilMembers = ['Yoda', 'Mace Windu'];
// const [x, y] = jediCouncilMembers;
// console.log(x); 
// console.log(y); 



// // Function Parameter Destructuring old
// function f(options) {
//   console.log(options.x);
// }
// f({x:1}); // 1

// function f({x}) {
//   console.log(x); // Refer to x directly
// }
// f({x:1});

// function f({x=0}) {
//   console.log(x);
// }
// f({}); // 0