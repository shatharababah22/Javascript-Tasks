let buttonstart = document.getElementById("start");
//  write in log in psge 
function login() {
    // Your login logic here
   
    return true;
}

buttonstart.addEventListener("click", () => {
    if (!login()) {
        alert("Please login to start the quiz");
    } else {
        
        buttonstart.innerHTML = `<a href="file:///c%3A/Javascript/ProjectJava/Welcom.html">Start Quiz</a>`;
    }
});