
const Name = document.getElementById("name");
const Age = document.getElementById("kara");
const G=document.getElementById("gender");
const Birth=document.getElementById("birthday");
const image=document.getElementById("image");
const descreption=document.getElementById("des")
const Major =document.getElementById("major")
let y =document.getElementById("HTML")
let b =document.getElementById("CSS")
let j =document.getElementById("JS")
let x=document.getElementById("number1")
let t=document.getElementById("desc")
let u = document.getElementById("div1");
let p = document.getElementById("div2");
let h= document.getElementById("div3");
y.addEventListener("click",function(){
    localStorage.setItem("choice1", y.value);
    p.textContent=y.value
})

b.addEventListener("click",function(){
    localStorage.setItem("choice2", b.value);
p.textContent=b.value
})
let U=j.addEventListener("click",function(){
    localStorage.setItem("choice3", j.value);
    p.textContent=j.value
})

function save() {
    localStorage.setItem("name", Name.value);
    localStorage.setItem("age",JSON.stringify(Age.value));
   localStorage.setItem("Gender",G.value);
   localStorage.setItem("Birthday",JSON.stringify(Birth.value));
   localStorage.setItem("Image",image.value );
   localStorage.setItem("Descrption",descreption.value);
   localStorage.setItem("Major",Major.value );
   localStorage.setItem("Sipling",x.value);
   localStorage.setItem("descr",t.value );
   u.innerHTML="Name:"+ localStorage.getItem("name")+"<br><br>Age:"+localStorage.getItem("age")+"<br><br>Gender:"+localStorage.getItem("Gender")
   +"<br><br>Birthday:"+localStorage.getItem("Birthday")+"<br><br>Image:"+localStorage.getItem("Image");
p.innerHTML="Description"+localStorage.getItem("Descrption")+"<br><br>Univercity && Major"+localStorage.getItem("Major")
h.innerHTML="Sipling:"+localStorage.getItem("Sipling")+"<br><br>description:"+localStorage.getItem("descr");

   
  }


  function load() {
      
    const savedValue = localStorage.getItem("name");
    const savedvalue2=localStorage.getItemJSON.parse("age");
    const savedvalue3=localStorage.getItem("Gender");
    const savedvalue4=localStorage.getItem("Birthday");
    const savedvalue5=localStorage.getItem("Descrption");
    const savedvalue6=localStorage.getItem("Major");
    const savedvalue7=localStorage.getItem("Sipling");
    const savedvalue8=localStorage.getItem("descr");

    if (savedValue&&savedvalue2&&savedvalue3&&savedvalue4&&
        savedvalue5&&savedvalue6&&savedvalue7&&savedvalue8) {
    Name.value = savedValue;
    Age.value = savedvalue2;
    G.value = savedvalue3;
    Birth.value = savedvalue4;
    descreption.value = savedvalue5;
    Major.value = savedvalue6;
    x.value = savedvalue7;
    t.value = savedvalue8;
     
    }

 
  }
  document.addEventListener("DOMContentLoaded", load);
