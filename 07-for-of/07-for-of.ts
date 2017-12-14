// // Iterate over array (ES5)
let jediCouncilMembers = ['Yoda', 'Mace Windu', 'Obi-Wan Kenobi'];
// for (let i = 0; i < jediCouncilMembers.length; i++) {
//   console.log(jediCouncilMembers[i]);
// }

// // Iterate over array (ES5). No break, continue or return.
// jediCouncilMembers.forEach(function (member) {
//   console.log(member);
// });

// // Iterate over object
// var jediCouncilMembersRoles = {grandJediMaster:"Yoda", seniorJediMaster:"Mace Windu", jedi:"Obi-Wan Kenobi"};
// for (let role in jediCouncilMembersRoles) {
//     console.log(role, jediCouncilMembersRoles[role]);
// }

// // Iterate over array indexes
// for (let index in jediCouncilMembers) {
//   console.log(index, jediCouncilMembers[index]);
//   // console.log(typeof(index));
// };

// Iterate over array indexes with for-of
for (let value of jediCouncilMembers) {
  console.log(value);
};