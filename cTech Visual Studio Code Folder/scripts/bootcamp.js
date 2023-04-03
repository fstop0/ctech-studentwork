function setup(){
    //create a canvas with an 800px width, and 600px height
    //createCanvas(width, height)
    createCanvas(600,600);

    //Default canvas is about 100x100 px
    //rgb (rrr,ggg,bbb)
    //rgb (rgb)
    background(175,230,100);
    strokeWeight(1);
    // Setup() function runs once, contains code that defines initial state of the sketch. Such as: bg color, canvas size, initial values and global variables.

    console.log(width);
    console.log(height);

}

function draw(){
    // loop infinitely after setup() is run
    
    //point (0,0);
    fill ("#FFFFFF");
    circle (75,525,150);
    fill (175,230,100);
    rect (50,500,50,50);
    line (50,550,600,0);
    line (50,500,450,0);
    line (100,550,600,150);
    fill ("#FFFFFF");
    square (450,0,150);
    //triangle (0,0,150,0,0, 150);
    //quad(x1,y1,x2,y2,x3,y3,x4,y4);


}