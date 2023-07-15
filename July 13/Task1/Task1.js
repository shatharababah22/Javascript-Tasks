let arr=[ { name: "Shatha", age: 22, image: "https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},
{ name: "Sereen", age: 22, image: "https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},
{ name: "Lama", age: 25, image: "https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"},
{ name: "Anfal", age: 25, image: "https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"}
]
var Div = document.createElement('div');
var body = document.getElementsByTagName('body')[0];
for (i=0; arr.length;i++){
    
    var card = document.createElement("div");
    card.classList.add("card");
    card.style.width="30%"
    card.style.border="1px solid green"
    
    var name1 = document.createElement("h2");
    name1.textContent = arr[i].name;
    
    var age1 = document.createElement("p");
    age1.textContent = "Age: " + arr[i].age;
    
    var image1 = document.createElement("img");
    image1.src = arr[i].image;
     image1.style.width="100%";
     image1.style.height="300px";
    
     

    card.appendChild(name1);
    card.appendChild(age1);
    card.appendChild(image1);
    Div.appendChild(card);
    body.appendChild(Div);
    
}