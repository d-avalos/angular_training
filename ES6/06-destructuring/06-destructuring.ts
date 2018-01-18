// const notAJedi = {first: 'Anakin', last: 'Skywalker', age: 20 };

// // Old way
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


// // Destructuring an object same name is so common, so let's avoid duplicate code
// const {first, last} = notAJedi;
// console.log(first); 
// console.log(last); 


// // Array destructuring
// const jediCouncilMembers = ['Yoda', 'Mace Windu'];
// const [x, y] = jediCouncilMembers;
// console.log(x); 
// console.log(y); 

// // String destructuring
// let [a, b, c] = 'abc';
// console.log(a);
// console.log(b);
// console.log(c);

// // Function Parameter object old way
// function f(jediCouncilMembers) {
//   console.log(jediCouncilMembers.grandJediMaster);
// }
// f({grandJediMaster:"Yoda", seniorJediMaster:"Mace Windu"});

// // Function Parameter Destructuring
// function f({grandJediMaster, seniorJediMaster}) {
//   console.log(grandJediMaster); // Refer to grandJediMaster directly
// }
// f({grandJediMaster:"Yoda", seniorJediMaster:"Mace Windu"});

// // Function Parameter Destructuring with default value
// function f({grandJediMaster="None", seniorJediMaster="None"}) {
//   console.log(grandJediMaster);
// }
// f({seniorJediMaster:"Mace Windu"});