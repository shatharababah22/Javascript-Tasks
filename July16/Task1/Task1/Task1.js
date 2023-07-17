const x = document.getElementById("color");


const h = window.sessionStorage.getItem("color");



x.addEventListener("click", function () {
    const y =x.value;
    document.body.style.background = y;
    window.sessionStorage.setItem("color",y);
});
if (h) {
    document.body.style.background = h;
}