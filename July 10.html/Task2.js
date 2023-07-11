/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
 let x=10; 
 let y=20; 
 if (y>x){
    console.log(y)
 }
let Z = (y>x) ? y:x;


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let num1=3;
let num2=-7;
let num3=2;
if(num1==3){
    let sign1 = Math.sign(num1);
    alert("This sign is"+" "+sign1);
}
if(num2==-7){
    let sign2 = Math.sign(num2);
    alert("This sign is"+" "+sign2);
}
if(num3==2){
    let sign3 = Math.sign(num3);
    alert("This sign is"+" "+sign3);
}
 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
const Thenum=[0,-1,4];
let r=0;
 if (r==0) {alert(Thenum.sort(function(a, b){return b - a}))
    
 }
 /******* End Your Code ********* */



/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  const Thenum1=[-5, -2, -6, 0, -1 ]
  let S=0;

  if (S==0) { let W = Math.max.apply(null, [-5, -2, -6, 0, -1])
    alert(W);    
  }
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
x=14;
y=12;
  if (x<y) {
    alert("Hello World")
  } else {
    alert("Goodbye")
  }
 /******* End Your Code ********* */
/* 6. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
/******* Start Your Code *********/


let numberspec = 95;
let text;

if (numberspec < 50) {
  text = "Fail";
} else if (numberspec >= 50 && numberspec <= 59) {
  text = "E";
} else if (numberspec >= 60 && numberspec <= 69) {
  text = "D";
} else if (numberspec >= 70 && numberspec <= 79) {
  text = "C";
} else if (numberspec >= 80 && numberspec <= 89) {
  text = "B";
} else if (numberspec >= 90 && numberspec <= 100) {
  text = "A";
} else {
  text = "Invalid rate";
}

console.log(text);



 /******* End Your Code ********* */
 // 7. Write a JS code to print numbers from 1 to 10

for (let f = 1; f <= 10; f++) {
let num5 =f;
console.log(num5);
  
}


/*8. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
var arr = [13,23,12,45,22,48,66,100];
for (var a = 0; a < arr.length; a++) {
  if (arr[a] % 2 == 0) {
    console.log(arr[a]);
  }
}


/* 
9. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/



 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/
 x = "don’t know why"; 
if (x.includes("y")) {
  console.log("yes")

}
else{
  console.log("No")
}

