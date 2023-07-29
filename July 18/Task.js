fetch('https://fakestoreapi.com/products')
            .then((x)=>x.json())
            .then(shatha=>  {
                
                let button = document.getElementById('button');
                button.addEventListener("click",function(){
                for (let i = 0; i < 4; i++) {   
                let y=`<div><br><br><img src=${shatha[i].image} width="200px"; hieght="50px"; style="margin-left:100px;"><br><br>  Name: ${shatha[i].id}<br><br>   Title: ${shatha[i].title}<br><br>   Price: ${shatha[i].price}<br><br> Category: ${shatha[i].category}</div>`
               let x= document.createElement(`div`)
               x.style.cssText= "background-color:rgb(244,245,244);font-size:18px;border:2px dashed green;  border-radius: 20px; color:black; width:400px; height:550px; margin-top:20px; font-style: italic; display: flex; flex-direction:row; flex-wrap: wrap; "
               
               x.innerHTML=y;
               document.body.appendChild(x);






          }  })})