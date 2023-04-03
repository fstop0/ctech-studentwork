let greyValue = 0;
let posx, posy;
let gVal = 255;
function setup(){
    createCanvas(800,600);
    //background('blue');
    posx= 100;
    posy= 75;

}

function draw(){
    //mouseX, mouseY
   // ellipse(mouseX, mouseY, 100, 100);
    // mouseIsPressed
    // if (mouseIsPressed){
    //      ellipse(mouseX,mouseY,180,180);

    // // }
    background(greyValue);
    //distance
    //calculate the distance between a point at (10,50) and another at (mouseX, mouseY)
    //let distance = dist(10,50,mouseX, mouseY);
    //key var
    // stores the val of the most recently pressed key
    // if (key=== 'a'){
    //     fill('red');
    // }else{
    //     fill('green');
    // }
    // ellipse(width/2,height/2, 100, 100);
    //keyCode
    //detect a special key such as BACKSPACE, RETURN, RIGHT_ARROW...
    // keyCode deals with ASCII
    //if
    
    background('white');
    fill(120, gVal, 100);
    ellipse(width/2, height/2, 200,200);

    //check if keyCode of spacebar is pressed spacebar keyCode = 32
   
    if(keyCode=== 32){
        ellipse(width/2, height/2, 100,100);
    }
    square(posx,posy,200,200);

    //key events
    //keyPressed(), keyReleased(), keyTyped(), 
    //rect(posx,posy, 100,75);
}
function mousePressed(){
    greyValue = getRandomInt(10,255);
    return greyValue;
}
function keyRelease(){
    if (key === 'm'){
        posx= random(100);
        posy = random(400);

    }
}
// function keyTyped(){
//     posx = random(width);
//     posy = random(height);
//     size = random(250);
// }
function keyPressed(){
if(gVal >= 11){
    gVal -= 10;
}else{
    gVal = 255;
}

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }