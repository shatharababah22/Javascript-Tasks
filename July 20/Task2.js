/*
 Exercise 1: 
 
 Make an array of numbers that are doubles of the first array

 Test Case: 

 console.log(doubleNumbers([2, 5, 100]));
 
 Result:
 [4, 10, 200]
*/
function doubleNumbers(arr) {
    let res = new Map(); 
    for (let [key, value] of arr) {
      let y = value *value;
      res.set(key, y);
    }
    return res;
  }
  
  let arr = new Map([
    [1, 2],
    [2, 5],
    [3, 100]
  ]);
  
  console.log(doubleNumbers(arr));


  /*
 Exercise 2 : 
 
 Take an array of numbers and make them strings

 Test Case: 

 console.log(stringItUp([2, 5, 100]));
 
 Result:
 ["2", "5", "100"]



*/
function stringItUp(arr2){
   let g = new Map();
   for(let [key,value] of arr2){
    g.set(key, value.toString())
     
   }
   return g;
  

  }
  let arr2 = new Map([[1,2], [2,5],[3,100]])
    console.log(stringItUp(arr2));


/*
 Exercise 3:  
 
 Capitalize each of an array of names

 Test Case: 

 console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 
 Result:
  ["John", "Jacob", "Jingleheimer", "Schmidt"]


*/


let arr3=["john", "JACOB", "jinGleHeimer", "schmidt"]

let x=arr3.map((el,index)=>{
 return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();




})
console.log(x)
console.log(arr3)




/*
 Exercise 4:  
 
 Make an array of strings of the names

 Test Case: 

 console.log(namesOnly([
   {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
   ])); 
 
 Result:
  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


function namesOnly(arr){
  // your code here
}
*/
let namesOnly=[
    {
  name: "Angelina Jolie",
        age: 80
    },
    {
       name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
    ]
    let v=namesOnly.map((el,index)=>{
return el.name;






    }
    )
    console.log(v)


    
/*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

// function makeStrings(arr){
//   // your code here
// }
let arrmakeStrings=[
      {
  name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
       age: 2
   },
   {
         name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
       age: 16
   },
    {
      name: "Bob Ziroll",
        age: 100
    }
  ]
 let k= arrmakeStrings.map((e,i)=>{

if (e.name=="Angelina Jolie" || e.name=="Bob Ziroll")
return `${e.name} can go to The Matrix`
else return `${e.name}is under age!!`

  }

  )
  console.log(k)

 



/*
 * Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]


function readyToPutInTheDOM(arr){
  // your code here
}

 */
let readyToPutInTheDOM=[
   {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
 ]

 let p =readyToPutInTheDOM.map((el,i)=>{


return `<h1>${el.name}</h1>`+`<h2>${el.age}</h2>`

 }


 )

console.log(p)




/*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]


function doubleValues(arr){
  // your code here
}
*/
  
let arr7=[2,10,300]
let b=arr7.map((el,i)=>{
return el*el


}
)
console.log(arr7)
console.log(b)



  /*
  * Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]

  
  function valTimesIndex(arr){
    // your code here   
   
 }
  */

 let arr6=[20,2,6]
 let j=arr6.map((el,index)=>{

return el*index


 }
 )
 console.log(arr6)
console.log(j)



 
  /*
  * Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
  
//   function extractKey(arr, key){
//     // your code here 
//  }
  
 let extractKey=[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, 'name']
let n=extractKey.map((el,index)=>{
return el.name
}
)
console.log(n)




 /*
 * Exercise 10:
 * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
 * 
 * Examples:
 * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']

 
 function extractFullName(){
  // your code here 
}
 */

let arr15=[{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]

let f=arr15.map((el,index)=>{
return el.first+""+el.last


}
)
console.log(f)