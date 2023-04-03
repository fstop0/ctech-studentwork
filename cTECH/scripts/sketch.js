function setup(){
    // set text charaterstics 
    textSize(18);
}
function draw(){
    //set BG to white
    backround(255);
    //set tracking framrate to 12FPS
    frameRate(12);
    //label function output
    text("X: "+mouseX, 0, height/4);
    text("Y: "+mouseY, 0, height/2);
} 