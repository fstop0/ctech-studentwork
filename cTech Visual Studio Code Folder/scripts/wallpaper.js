let rotvar=0

function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  background(180,230,100);
  
  // rotvar=rotvar+0.5;
  // rotvar=millis()/50-rotvar;
    rotvar=millis()/500+rotvar;
  
  translate(width/2,height/2);
  
  //WHITE CIRCLES
  fill("#FFFFFF");
  
  // MIDDLE CIRCLE
  circle(0,0,400);
  
  //SECOND CIRCLES
  rotate(PI+rotvar / 9.0);
    fill("#FFFFFF");
  circle(-210,-210,200);
  circle(210,-210,200);
  circle(-210,210,200);
  circle(210,210,200);
     fill("#D2A2D6");
    circle(-210,-210,100);
  circle(210,-210,100);
  circle(-210,210,100);
  circle(210,210,100);
  
  //THIRD CIRCLES
  rotate(PI-rotvar / 18.0);
    fill("#FFFFFF");
  circle(-315,-315,100);
  circle(315,-315,100);
  circle(-315,315,100);
  circle(315,315,100);
  
  //LAST CIRCLES
    rotate(PI+rotvar / 36.0);
    fill("#FFFFFF");
  circle(-367,-367,50);
  circle(367,-367,50);
  circle(-367,367,50);
  circle(367,367,50);
  
  //GREEN CIRCLE
  //fill(180,230,100);
  //circle(400,400,300);
  
  //PINK CIRCLE
  //fill("#D2A2D6");
  //circle(400,400,200);
  
  //cross

  rotate(-PI+rotvar / -5.0)
   fill("#D2A2D6");
//  fill(180,230,100);
  circle(0,-125,50);
  circle(-125,0,50);
  circle(0,125,50);
  circle(125,0,50);
  rect(-25,-125, 50, 250);
  rect(-125,-25,250,50);
  
// filter()
}
