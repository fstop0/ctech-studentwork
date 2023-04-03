function setup() {
    //set text characteristics
    textSize(18);

}
function draw(){
    //set BG to white
    background(255);
    //set tracking framerate to 12FPS
    frameRate(12);
    //label function
    text("X: "+mouseX, 0, height/4);
    text("Y; " + mouseY, 0, height/2);


}