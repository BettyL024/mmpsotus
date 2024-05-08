//The setup function only happens once

var steve=0;
var rover=50;


function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(85,159,87); //an RGB color for the canvas' background
  //circle
  rover=rover+1;
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(3);
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,60,65); // center of canvas, 20px dia
  fill(37,131,172);
  stroke(84,44,247);
  strokeWeight(5);
  rect(steve,250,steve,steve);
  line(random(75,200),random(50,400),random(200,300),random(50,400));
  textSize(14);
}

function mousePressed(){
  if (steve>=100){
    steve=0;
  }else{
    steve=steve+2;
}
}