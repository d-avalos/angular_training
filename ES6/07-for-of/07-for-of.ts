let jediCouncilMembers = ['Yoda', 'Mace Windu', 'Obi-Wan Kenobi'];

// Iterate over array (ES5) -> Good
for (let i = 0; i < jediCouncilMembers.length; i++) {
  console.log(jediCouncilMembers[i]);
}

// // Iterate over array (ES5). No break, continue or return. -> Good
// jediCouncilMembers.forEach(function (member) {
//   console.log(member);
// });

// // Iterate over object. -> Good
// var jediCouncilMembersRoles = {grandJediMaster:"Yoda", seniorJediMaster:"Mace Windu", jedi:"Obi-Wan Kenobi"};
// for (let role in jediCouncilMembersRoles) {
//     console.log(role, jediCouncilMembersRoles[role]);
// }

// // Iterate over array indexes. -> Bad, very bad practice. Avoid it.
// for (let index in jediCouncilMembers) {
//   console.log(index, jediCouncilMembers[index]);
//   // console.log(typeof(index));
// };

// // Iterate over array values with for-of
// for (let value of jediCouncilMembers) {
//   console.log(value);
// };

// // Map creates a new array. Use it if you want to transform an array.
// let anotherArray = jediCouncilMembers.map(function(element){
// 	return element + " another"; // Transforming array values.
// });
// for (let value of anotherArray) {
//   console.log(value);
// };