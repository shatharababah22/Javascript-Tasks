// console.log('Here is : ', 'Reduce & Filter') 

// //Using Reduce 1 -5
// var persons = [
//   { name: { first: 'John', last: 'Hob' }, age: 35 },
//   { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
//   { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
//   { name: { first: 'Zues', last: 'Odin' }, age: 55 },
//   { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
// ];
// person[0].age 


/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

function avgAge(persons) { 
  let totalAge = persons.reduce((sum, person) => sum + person.age, 0);

  let averageAge = totalAge / persons.length;

  return averageAge;
}

console.log(avgAge(persons));

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/



  




