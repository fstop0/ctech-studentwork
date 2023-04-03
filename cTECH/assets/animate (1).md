
// Define xPos and yPos
    // let xPos, yPos;

function setup(){
    //runs at the start of program once
    createCanvas(800, 600);
    background(126);
    frameRate(24);

    // Set starting xPos
        // xPos = 0;

    // Set starting yPos
        // yPos = 600;

    // Call init() custome function inside setup()
        // init();
}

function draw (){
    // loop that runs infinitely after setup() is complete

    // ellipse(frameCount, height / 2, 100, 100)
    
    // increment x position by 5 every draw loop
        // ellipse(xPos, 100, 100, 100);
        // xPos += 5;
    
    // decrement y position by 5 every draw loop
        // ellipse (100, yPos, 100, 100);
        // yPos -= 5;

    // generate random values and shapes
        // let randomX = random(width);
        // let randomSize = random(15, 100);

        // circle(randomX, height / 2, randomSize);
    
    // call display() custom function inside draw()
        // display();
}

// Define custome functions outside of the setup() and draw() functions

        // function init(){
        //     xPos = width / 2;
        //     yPos = height / 2;
        // }

        // function display(){
        //     fill (255);
        //     stroke('black');
        //     ellipse(xPos, yPos, 50, 50);
        // }


// --------------- // 

// -- REFERENCE -- //

// INDEX of FUNCTIONS AND ATTRIBUTES
    // Frames per Second - FPS
        // default FPS is 60, running 60 times per second 

    // frameCount
        // used to keep track of the frames rendered, p5.js provides this built-in variable to store the number of frames that have been dispalyed since the program has started
        // the value of variable frameCount updates with every frame. the first time draw() is ran, the frameCount is one, the second time it runs, frameCount is two -- so on, so forth

    // frameRate
        // 60FPS is the default - you can manipluate the FPS by using frameRate() function which allows customization of of the FPS. 60FPS is the default and also the maximum.

    // Incrementing Values (by one)
        // a vlaue is incremented by writing
        // x = x + 1
        // which is the same as writing
        // x++;
        // or rewritten again as
        // x += 1;

    // Decrementing Values (by one)
        // a value is decremented by writing
        // x = x - 1
        // which is the same thign as writing
        // x--;
        // or rewritten again as
        // x -= 1;
    
    // The random() Function
        // random() returns a random decimal between 0 and 1 
        // when used in an argument, the random() function returns a decimal value between 0 and the value of the given argument
        // when two numeric values are given as arugments, the random() function returns a radom decimal between first and second values in the argument

    // User-defined Functions
        // user defined functions can be called inside the draw() and setup() function. If user-defined functions are called outside draw() or setup() - they might not work as intended
