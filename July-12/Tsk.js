/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(x,y,z,a) {
console.log("You will be a " + a + " in " + z + " and married to "+ y +" with "+ x +" kids")
}
tellFortune(5,"Ahmad","Jordan","Doctor");
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion
// rate of 1 human year to 7 dog years.
// outputs the result to the screen like so:
// "Your doggie is NN years old in dog years!"

// Ex: calculateDogAge(1);
// => "Your doggie is 7 years old in dog years!"
function calculateDogAge(age){

let NN=7*age;

console.log("Your doggie is "+ NN +" years old in dog years!")
}
calculateDogAge(10);

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age 100).
// outputs the result to the screen like so:
// "You will need NN to last you until the ripe old age of X"

// Ex: calculateSupply(30, 3);
// => 'You will need 76650 cups of tea to last you until the ripe old age of 100;
function calculateSupply(age,amountperday) {
    var maxAge = 100;
    let NN= (amountperday * 365) * (maxAge - age);
    console.log("You will need "+NN+" to last you until the ripe old age of "+ age)
}
calculateSupply(22,3);

function greet (name) {
   return "Hello"+name
}
greet("Shatha")
// what is the error:
 function double(cat) {
   return 2 * cat;
 }

 function double(x=7) {
  return 2 * x;
}


function double1(x) {
  return 2 * x ;
}

function double2 (x="7"){
return 2 * x;
}

function  double3 (x){
  return 2 * x;}
//   Write a function called cube that:
//   accept 1 parameter and calculate the cube of this number
  
//   Ex: cube(4)
//   => 64
function cube(g) {
    let e =g**3;
    console.log(e)
}
cube(3);
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(s=3,d) {
   let e=s*d;
   console.log(e) ;
}
multiply();
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age) {
    if (age>=20) {
        return "yes you can";
    }
    else  {
        return "please come back after "+ age +" years to get one";  
      
    }
    
}
canIGetADrivingLicense(18);
console.log(canIGetADrivingLicense(18));
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(b,a) {
 if (b.length==a.length) {
    console.log(true)
 }   
 else{
    console.log(false)
 }
}
sameLength("tree","clue");
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(n,m) {
    if (n>m)
{
    console.log(n);
return n;
        
    }
    else{console.log(m);
        return m;
        
    }
   
}
largerNubmer(20,30)

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(d,f,h) {
    let smallest= d;
    if (h<smallest) {
        smallest=h; 
    }
    else if (f<smallest)
    {
        smallest=f; 
    }
   
    console.log(smallest)
}
smallerNubmer(5,12
    ,11)

// Write a function called shorterString
// that accept five string as an arguments,
// and return the first shorter string

// Ex: shorterString("air","school","car","by","github")
// => by

// Ex: shorterString("air","tr","car","by","github")
// => tr

// Ex: shorterString("by","tr","car","air","github")
// => by

// Ex: shorterString("air","by","car","school","github")
// => by

// Ex: shorterString("air","tr","by","car","github")
// => by

// Ex: shorterString("air","tr","car","github","by")
// => by

function shorterString(...args) {
  let shortest =args[2]
  for (let i =0; i < args.length ;i++) {
 if( args[2].length > args[i].length){
    shortest=args[i];}
    
  }
  console.log(shortest)
}

shorterString("air","school","car","by","github");
shorterString("air","by","car","github","tr");
/*
14
Write a function called longerString


that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(...string) {
    let longer=string[0];
    for (let i = 0; i < 4; i++){
        
        if (longer.length<string[i].length) {
           longer= string[i];
        }

    }
    console.log(longer)
}
longerString("air","school","car","github")
longerString("air","schoo","car","github")

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(c) {
   if(c%2==0) {
   console.log( "true")
   }
   else{
    console.log( "false")
   }
  
}
isEven(14)
isEven(15)

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isOdd(c) {
    if(c%2==0) {
    console.log( "false")
    }
    else{
     console.log( "true")
    }
   
 }
 isOdd(14)
 isOdd(15)
 /*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(c){
    if(Math.sign(c)==1){
        console.log(c)
    }
else {
let y=-1*c
console.log(y)
}
}
positive(-100);
positive(10)

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(firstName , lastName) {
    console.log(firstName +" "+ lastName)

}
fullName("Shatha" , "Rababah")
fullName("Sereen" , "Kamhiah")
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(1,2,3,4,5)
=> 5.8

*/
function average(...num) {
    let sum =0;
for (let i= 0; i < 5; i++) {
   sum += num[i];
    
}
let y= sum /num.length;
console.log(y) 
}
average(1,2,3,4,5);
average(1,2,3,4,5);



/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber() {
    let x=Math.random();
console.log(x)
    
}
randomNumber();
randomNumber()



/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(x,y) {
 let z=  Math.random() * y+x;
 console.log(z)
}
randomBetweenNumbers(1,8)
randomBetweenNumbers(3,100)


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(numberspec) {
    if (numberspec < 50) {
       console.log( "F");
      } else if ( numberspec <= 69) {
       console.log( "D");
      } else if ( numberspec <= 79) {
       console.log( "C");
      } else if ( numberspec <= 89) {
       console.log( "B");
      } else if ( numberspec <= 100) {
       console.log( "A");
      } 

}

scoreInUniversty(87);
scoreInUniversty(95);

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var x=0;
function counter() {
  return x++;
  
}
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
// console.log(x)
// console.log(x)
// console.log(x)


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetcounter() {
    let m=x;
    x=0;
    console.log(m +"and the counter reset now")
    
  }
  resetcounter()
console.log(counter())
console.log(counter())
console.log(counter())

