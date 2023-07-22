fetch("https://64bc1e5f7b33a35a44470dcc.mockapi.io/task")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element, index) => {
      const key = `Task${index + 1}`;
      localStorage.setItem(key, JSON.stringify(element));
    });
  });
  let button = document.getElementById("button");
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
let text=document.getElementById("text")
text.addEventListener("keypress", () => 
{
if (localStorage.getItem(JSON.parse(element).name)==text.value &&   button.addEventListener("click", () => {
    console.log("Button clicked!");
  }))
{

    

}



})






 
