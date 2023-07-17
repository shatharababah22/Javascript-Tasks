const x = document.getElementById("color");


const h = window.sessionStorage.getItem("color");
if (h) {
    document.body.style.background = h;
}


x.addEventListener("click", function () {
    const y =x.value;
    document.body.style.background = y;
    window.sessionStorage.setItem("color",y);
});