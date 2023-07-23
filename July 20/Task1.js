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

function usAndNumberBeetweenUs(start, end) {

let arr2=[]
for (let i = start; i <= end; i++) {

arr2.push(i)

}
let y=arr2.reduce((acc,currentnum)=>{
 acc.push(currentnum);

return acc 
},[])

return y;
}


console.log(usAndNumberBeetweenUs(2,5))

//Filter 6 - 11
console.log("Now by using filter")

/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
let evenOnly1 =[1,8,6,4]
function evenOnly(evenOnly1) {
 let x= evenOnly1.filter((elemant,index)=>{

    return (elemant %2==0)
  
  })
  return x
}
console.log(evenOnly(evenOnly1))


/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]

*/
let arr=[1,8,6,4,10,20,40,50,];

function multiFour(arr) {
let y=arr.filter((el,ind)=>{
return el %4===0



})
return y

}
console.log(multiFour(arr))

/*
8
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
let arr1=["hello","world"]
function containChar(arr1, char) {
  let t= arr1.filter((elemant,index)=>{
return elemant.includes(char);




  })


return t
}
console.log(containChar(arr1, "l"))


/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

let arr2=["alex","mercer","madrasa","rashed2","emad","hala"]
function evenIndexOddLength(arr2) {
  let h=arr2.filter((elemant,index)=>{
return elemant.length % 2 !=0


  })

return h  
}
console.log(evenIndexOddLength(arr2))



// var persons = [
//   { name: { first: 'John', last: 'Hob' }, age: 35 },
//   { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
//   { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
//   { name: { first: 'Zues', last: 'Odin' }, age: 55 },
//   { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
// ];

/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

function olderThan(persons,num) {
  let k=persons.filter((el,index)=>{
    return el.age > num



  })
return k

}
console.log(olderThan(persons,56))





/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
let arr5=["alex","mercer","madrasa","rashed2","emad","hala"]
 function shorterthan(arr5,num) {
  let n=arr5.filter((elemant,index)=>{
return elemant.length < num

  })
  
  return n
 }
  
console.log(shorterthan(arr5,5))



