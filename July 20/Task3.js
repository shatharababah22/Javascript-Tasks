/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*

function doubleValues(arr){
   //Your Code Here
}
*/


let arr1=[1,2,3,4,2000]
function doubleValues(elemant,index,arr1){
  
    return elemant*elemant
  }
arr1.forEach(doubleValues);

 console.log(arr1)

 /*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]

function onlyEvenValues(arr){
    //Your Code Here
    
}
 */
let arr2=[1,2,3,20,40,50,90,21]

arr2.forEach((elemant,index) => {
    if (elemant % 2 !== 0) {
        arr2.splice(index, 1);
      }

   
});


function onlyEvenValues(arr2) {
   
    let evenValues = [];
    arr2.forEach(element => {
      if (element % 2 === 0) {
        evenValues.push(element);
      }
    });
  
    return evenValues;
  }
console.log(arr2)
console.log(onlyEvenValues(arr2))


/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*


 */

 let arr4=['colt','matt', 'tim', 'udemy']
 function showFirstAndLast(arr4){
    let c=[];
   arr4.forEach((elemant,index)=>{
      c.push(elemant.charAt(0)+elemant.charAt(elemant.length - 1))



   })
   return c
 }
console.log(showFirstAndLast(arr4))
console.log(arr4)



/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
let arr5=[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
function addKeyAndValue(arr5){
    let l=[];
   arr5.forEach((elemant)=>{
    l.push({...elemant, title: 'instructor'})





   })
  
return l
}
console.log(addKeyAndValue(arr5))





/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/
let str="I Am awesome and so are you"
function vowelCount(str) {
    const vowels = 'aeiou';
    const result = {};
  
    str.toLowerCase().split('').forEach((char) => {
      if (vowels.includes(char)) {
        result[char] = (result[char] || 0) + 1;
      }
    });
  
    return result;
  }
  console.log(vowelCount(str))