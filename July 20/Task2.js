/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
function doubleNumbers(arr) {
    let res = new Map(); 
    for (let [key, value] of arr) {
      let y = value * value;
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
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]



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
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]


*/


function capitalizeNames(k){
  let n = new Map();
  for(let [key,value] of k){
 
    n.set(key, value.toUpperCase())

  }
  return n;
 }

  let k= new Map([["fname","john"],
["name2","JACOB"],
["n3","jinGleHeimer"],
["na4","schmidt"]
])

console.log(capitalizeNames(k));


  


