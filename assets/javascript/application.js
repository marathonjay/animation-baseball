document.addEventListener("DOMContentLoaded", function() {
/*-------------SPINNING BASEBALL ANIMATION---------------*/

let imgArray = new Array();
for(i=0; i<24; i++) {
  imgArray[i] = new Image();
  imgArray[i].src = "assets/images/ball" + i + ".gif";
  console.log(imgArray)
}

let counter = 0;

function rotate() {
  if (counter > imgArray.length-1) 
    counter = 0;
    document.getElementById("ball").src = imgArray[counter].src;
    counter++;
    setTimeout(rotate, 30);
}
window.addEventListener("load", rotate);

  
/*-------------POINT TO POINT ORB ANIMATION---------------*/

let currentX = 100;
let currentY = 100;
let dx = 5;
let dy = 5;

function animate () {
  document.getElementById("orb").style.left = currentX + "px";
  document.getElementById("orb").style.top = currentY + "px";
  currentX += dx;
  currentY += dy;
  if ((currentX > 800 || currentX < 100) || (currentY > 600 || currentY < 100)) {
    dx *= -1;
    dy *= -1;
  }
  setTimeout(animate, 10);
}
 
window.addEventListener("load", animate);










  // Add your Javascript Here
})