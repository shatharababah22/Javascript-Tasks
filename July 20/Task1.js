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



let r = persons.reduce(function(total, currentValue) {
  return total + currentValue.age / persons.length;
}, 0);

console.log(r); // Output: 41.2

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
let p =persons.reduce((total, currentValue, currentIndex)=>{
  let h=currentValue.name.first + " "+ currentValue.name.last
  if(total.length>h.length)
  {
    return total
  }
  else return h


},"")

console.log(p); 


/*
3
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
let arr10=[2,10,200,500]
let y=arr10.reduce((max,cu,arr)=>{
if(max>cu){
  return max
}
else{
  return cu}
},0)
// console.log(arr10)
console.log(y)


/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(str, char) {
  // if (typeof str !== 'string' || str.length === 0 || typeof char !== 'string' || char.length !== 1) {
  //   return 0;
  // }

const count = [...str].reduce((acc, currChar) => {
return currChar === char ? acc + 1 : acc;
  }, 0);

  return count;
}

const result = repeatChar("hello world", "w");
console.log(result);


/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

// function usAndNumberBeetweenUs(start, end) {
// let arr=[10,20,30,40]
// let x=arr.reduse((acc,current,i)=>{
// shift 



  
// },0)





// }

// console.log(usAndNumberBeetweenUs(2,5))


  




