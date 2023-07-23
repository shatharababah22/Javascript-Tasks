
/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

let shatha={fname:"shatha",
lname:"Rababah",
age:22,
dob:14-12-2000,
favoritefood:"Mansaf",
favoritemovie:"Peaky Blinder"
}
console.log(shatha)



var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];
  
  /*
  2
  Using the varabile persons
  Create a function called firstName
  that accept an object
  and return all the first name of the person insides
  
  Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
  */
  function firstname(persons) {
    let x = [];
    for (let i = 0; i < persons.length; i++) {
      x.push(persons[i].name.first);
    }
    return x;
  }
  console.log(firstname(persons))

  /*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
let v=persons.reduce((acc,el,index)=>{
    acc+=el.age
    let y= acc/persons.length
 return y




},0)
console.log(v)




/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/



 
  
  