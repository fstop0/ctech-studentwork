function setup() {
  cnv=createCanvas(windowWidth, windowHeight);
  cnv.mousePressed();
  frameRate(60);
  textSize(100);
  //background(240);
}

function draw() {
  background(255);
  fill(150, 200, 0);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  noFill();
  //circle(mo395useX, mouseY, 25);
}
function mousePressed(){
    background(255);
    fill(220, 160, 170);
    frameRate(0);
    text("(｡◕‿◕｡)", mouseX, mouseY);
}

function mouseReleased(){
    frameRate(60);
}