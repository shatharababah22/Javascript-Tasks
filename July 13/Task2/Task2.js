// let x=document.getElementsByTagName("body")[0];
    let J = document.getElementsByTagName("p");

J[0].addEventListener("mouseover", hello);
J[0].addEventListener("mouseout", hello1);

function hello() {
    J[0].textContent = "Can I help you";
}

function hello1() {
    J[0].textContent = "Hello World!";}
    

//     let x = document.getElementsByTagName("p");

//  x.setAttribute("onmouseover", "hello()");
// x.setAttribute("onmouseout", "hello1()");


// function hello() {

 
//        x[0].textContent = "Can I help you";
// }

// function hello1() {
//     x[0].textContent = "Hello World!";}
    