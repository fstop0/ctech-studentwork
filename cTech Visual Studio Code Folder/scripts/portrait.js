function setup(){
    //create a canvas with an 800px width, and 600px height
    //createCanvas(width, height)
    createCanvas(600,600);
    capture = createCapture(VIDEO);
    capture.size(50,50);
    //Default canvas is about 100x100 px
    //rgb (rrr,ggg,bbb)
    //rgb (rgb)
    background(175,230,100);
    noStroke();
    //strokeWeight(1);
    // Setup() function runs once, contains code that defines initial state of the sketch. Such as: bg color, canvas size, initial values and global variables.

    console.log(width);
    console.log(height);

}

function draw(){
    // loop infinitely after setup() is run
    
    //point (0,0);

//     //head shape
// fill ("#FFFFFF");
// beginShape();
// vertex(200, 200);
// vertex(300, 150)
// vertex(400,200);
// vertex(400, 400);
// vertex(300,500);
// vertex(200,400);
// endShape(CLOSE);
fill('white');


rect(225,300,25,150);
rect(350,300,25,150);

fill('lightgrey');
rect(250,300,100,150);
rect(225,300,150,25);
fill('navy');
rect(250,425,100,25);
rect(250,425,25,125);
rect(325,425,25,125);

fill('tan');
rect(225, 400, 25,50)
rect(350, 400, 25,50)

image(capture, 225, 150, 150, 150);


// //left hair shape
// fill('#4e453d');
// beginShape();
// vertex(300,150);
// vertex(300,200);
// vertex(200,350);
// vertex(200,200);
// endShape(CLOSE);

// //right hair shape
// fill('#4e453d');
// beginShape();
// vertex(300,150);
// vertex(300,200);
// vertex(400,350);
// vertex(400,200);
// endShape(CLOSE);




   // quad(2000,100,350,100,400,150,100,150);
    //quad(x1,y1,x2,y2,x3,y3,x4,y4);


}