document.addEventListener("DOMContentLoaded", function() {

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



  // Add your Javascript Here
})