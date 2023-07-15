
    let x = document.getElementById("Country");
  
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    img1.setAttribute("src", "https://www.almrsal.com/wp-content/uploads/2021/01/1-53.jpg");
    img2.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/280px-Flag_of_Palestine.svg.png");
    img1.style.cssText = "width: 200px; height: 200px";
    img2.style.cssText = "width: 200px; height: 200px";
  
    var body = document.getElementsByTagName('body')[0];
  
    function removeImages() {
      // Remove anyimages
      const images = document.querySelectorAll("img");
      images.forEach((image) => image.remove());
    }
  
    x.addEventListener("change", function () {
      removeImages(); // Remove previously appended images
      if (x.value === "Jordan") {
        body.appendChild(img1);
      } else if (x.value === "Palestine") {
        body.appendChild(img2);
      }
    });
  