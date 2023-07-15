let x = document.getElementsByClassName("Sa");
let y= document.querySelector(".text p");
let v = document.getElementsByClassName("S2");
let e =document.getElementById("Italic")
let l=document.getElementById("Underline")
let f=document.getElementById("Bold")

for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("change", function () {
    let z=x[i].value
    y.style.fontFamily = z;
  });
}
for (let j = 0; j < x.length; j++) {
  v[j].addEventListener("change", function () {
    let z=v[j].value
    y.style.fontSize = z;
  });
}

e.addEventListener("change", function () {
  let k=e.value
  y.style.fontStyle = k;
});
l.addEventListener("change", function () {
  let U=l.value
  y.style.textDecoration = U;
});
f.addEventListener("change", function () {
  let u=f.value
  y.style.fontWeight = u;
});





