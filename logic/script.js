let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let hassnaa = document.querySelector(".hassnaa");
let main = document.querySelector(".main");

window.onscroll = function () {
  requestAnimationFrame(scrollEffect);
};

function scrollEffect() {
  let value = scrollY;
  stars.style.left = value * 0.5 + "px"; 
  moon.style.top = value * 2 + "px";    
  mountains3.style.top = value + "px";  
  mountains4.style.top = value * 0.75 + "px";
  river.style.top = value * 0.5 + "px"; 
  boat.style.top = value * 0.5 + "px";  
  boat.style.left = value * 1.5 + "px";
  hassnaa.style.fontSize = value * 0.5 + "px"; 
  
  if (scrollY >= 67) {
    hassnaa.style.fontSize = 67 + "px";
    hassnaa.style.position = "fixed";
    if (scrollY >= 478) {
      hassnaa.style.display = "none";
    } else {
      hassnaa.style.display = "block";
    }
    if (scrollY >= 127) {
      main.style.background = "linear-gradient(#376281,#10001f)";
    } else {
      main.style.background = "linear-gradient(#200016, #10001f)";
    }
  }
}
