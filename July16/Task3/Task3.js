const v = document.getElementById("fname");
const date =document.getElementById("birth")
const email =document.getElementById("email")
const pass =document.getElementById("pass")
const confiremail =document.getElementById("confirmemail")



v.addEventListener("input", function() {
  const t =/^[^\d]+$/

  if (t.test(v.value)) {
    document.getElementsByClassName("parag")[0].textContent = "Your name is valid";
  } else {
    document.getElementsByClassName("parag")[0].textContent = "Numbers are not allowed";
  }
});
date.addEventListener("input",function(){
const date1 = /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[0-1])$/;
if (date1.test(date.value)){   
document.getElementsByClassName("parag")[1].textContent = "Your date  is valid";
} else {
  document.getElementsByClassName("parag")[1].textContent = "The format should be dd/MM/YY";
}

})
email.addEventListener("input",function(){
let f=/^[a-zA-Z0-9]{4,}@[gmail]{5,}[.][cC][oO][mM]$/;
if(f.test(email.value)){
document.getElementsByClassName("parag")[2].textContent = "You email  is valid";
} else {
  document.getElementsByClassName("parag")[2].textContent = "You email is invalid";
}

})
pass.addEventListener("input",function(){
    let passcheck = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#])[a-zA-Z0-9!@#&]{6,20}$/;
    if(passcheck.test(pass.value)){
    document.getElementsByClassName("parag")[4].textContent = "You pass  is valid";
    } else {
      document.getElementsByClassName("parag")[4].textContent = "You pass is invalid";
    } 
    })
    confiremail.addEventListener("input",function(){
    if (confiremail.value.match(email.value)){
      document.getElementsByClassName("parag")[3].textContent = "Email is confirmed.";
  } else {
    document.getElementsByClassName("parag")[3].textContent = "Email is not confirmed.";
  
  }})
  
    



