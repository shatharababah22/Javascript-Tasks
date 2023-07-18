let table1 = document.getElementById("table1");
let b = document.getElementById("button");
const h = new XMLHttpRequest();
h.open("GET", "Task.JSON");
h.onload = function() {
    const o = JSON.parse(this.responseText);
    console.log(o);
    b.addEventListener("click", function() {
        for (let i = 0; i < 5; i++) {
            let x = document.createElement("tr");
          
            table1.appendChild(x);

            let y1 = document.createElement("td");
            y1.textContent = o.ollobj[i].Name;
            x.appendChild(y1);
            

            let y2 = document.createElement("td");
            y2.textContent = o.ollobj[i].Age;
            x.appendChild(y2);

            let y3 = document.createElement("td");
            y3.textContent = o.ollobj[i].Major;
            x.appendChild(y3);

            let y4 = document.createElement("td");
            y4.textContent = o.ollobj[i].University;
            x.appendChild(y4);
            
            let y5 = document.createElement("td");
let img = document.createElement("img");
            img.src = o.ollobj[i].image;
            img.style.width="100px";
            img.style.hieght="100px";
            x.appendChild(img);
            x.appendChild(y5);
        }
    });
};
h.send();