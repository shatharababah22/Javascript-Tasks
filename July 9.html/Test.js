/*

let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 

*/
let x=250;
y=(x/100)*2.5
console.log(y)

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox', 'over' ,"lazy", 'dog',  ]

*/

const number=[ 1,7 , 9 , 45 ];

const Names= ["Str", "alex","moh",'the','fox', 'over' ,"lazy", 'dog' ]
console.log(number)
console.log(Names)
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Banana"))
console.log(fruits.indexOf("Tomato"))

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
const Myfavfood = ["Mansaf", "Makhshe","Dawale",'Maglobeh' ]
console.log(Myfavfood);
const Myfavsport = ["Swimming" ]
console.log(Myfavsport);
const MyfavMovie = ["The Searchers","Sharlok Holmez" ]
console.log(MyfavMovie);


/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
const Array1=[1,4,5]
console.log(Array1[0])
const Array2=["t","u","g","x"]
console.log(Array2[0])
/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
const lastOfArray=[1,4,5];
console.log(lastOfArray[2])
 const lastOfArray2=["t","u","g","x"]
 console.log(lastOfArray2[3])
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array3=[0,5,7,9];
array3.shift();
array3.shift();
array3.shift();
console.log(array3)
array3.unshift(1,3,4,6,8)
console.log(array3)
array3.push(10)
console.log(array3)
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array4 = [5,9,-7,3.5]
console.log(array4.push(16))
console.log(array4)
console.log(array4.pop())
console.log(array4)
console.log(array4.unshift( 12))
console.log(array4)
console.log(array4.shift())
console.log(array4)
/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
console.log(arr1.sort(function(a, b){return a - b}))