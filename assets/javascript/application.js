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

function animate () {
  document.getElementById("orb").style.left = currentX + "px";
  document.getElementById("orb").style.top = currentY + "px";
  currentX += 5;
  currentY += 5;
  if (currentX > 800 || currentY > 600) {
    return;
  }
  setTimeout(animate, 10);
}
 
window.addEventListener("load", animate);










  // Add your Javascript Here
})