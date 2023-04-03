

function setup(){
    //create canvas 800px x 600px
    //createCanvas(w,h)
    createCanvas(800,600);
    //default canvas is 100x100 px
    //rgb (rrr, ggg, bbb)
    //rgb(rgb)
    //background(250, 167, 222);
    //noFill();
    // setup() only runs once p5js auto executes
    //code that defines intial sketch state
    //global vars, canvas size, background color, etc
    console.log(width);
    console.log(height);
    //console,log() is great for troubleshooting
    //check by going to developer tools in chrome

    
}
function draw(){
    //draw() loops infinitely after setup()
    //point(x,y)
    //line(x1, y1, x2, y2)
    //square(x, y, width)
    //rect(x, y, widrh, height)
    //ellipse(x,y.width height)
    //circle(x, y, width)
    //triangle(x1, y1, x2, y2, x3, y3)
    //quad(x1, y1, x2, y2, x3, y3, x4, y4)
    background(250, 167, 222);
    point(400,300);
    line(200, 20, 400, 100);
    line(230, 20, 450, 300);
    noFill();
    strokeWeight(3);
    square(30, 75, 30);
    rect(40, 300, 55, 33);
    ellipse(600,69.420, 25);
    circle(530, 425, 68);
    fill(0,0,255);
    triangle(22, 333, 44, 444, 99, 666);
    quad(333, 223, 222, 22, 333, 300, 404, 400); 
  

}