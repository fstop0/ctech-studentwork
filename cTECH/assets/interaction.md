// Interaction in p5.js


// 01
// mouseX and mouseY

    // these *variables* always store the current x and y coordinates of the mouse relative to the origin of the canvas

    // remember the canvas starts at (0,0) at the top left of the webpage ... x values increase as the canvas extends right across the webpage. y values increase as the canvas extends down the webpage.


// mouseX and mouseY example
// make this code active by selecting the code block and removing one set of comments with the keyboard shortcut Command+/ on Mac and Control+/ on PC

            // function setup(){
            //     createCanvas(800, 800);
            //     background(127);
            // }

            // function draw(){
            //     // the ellipse will follow the mouse
            //         // ellipse(x, y, width, height)
            //     ellipse (mouseX, mouseY, 100, 100);
            // }

// 02
// mouseIsPressed variable
    
    // this variable is a built-in boolean that is either *true* when the mouse button is pressed or *false* when the mosue butten is not pressed

    // mouseIsPressed is commonly used in 'if' statements to preform actions dpeendent on whether or not the mouse button has been pressed

//mouseIsPressed example
    // make this code active by selecting the code block and removing one set of comments with the keyboard shortcut Command+/ on Mac and Control+/ on PC


            // function setup(){
            //     createCanvas(800, 800);
            //     background(127);
            // }

            // function draw(){
            //     // draws an ellipse at (200, 200)  if the mouse is pressed
            //     if (mouseIsPressed) {
            //         ellipse(200, 200, 100, 100)
            //     }

            //     // draws an ellipse at the cursors coordinates when mouse is pressed

            //     if (mouseIsPressed) {
            //         ellipse(mouseX, mouseY, 100, 100);
            //     }
            // }

// 03
// mousePressed() function

    // this function is called once after each mouse press
    // the code block within the function will not loop if the mouse button is held down

    // mousePressed() function is used to set a new random value for the grayValue variable once after each mouse press

    // the mousePressed function is its own function - put it after your function setup () and function draw ()

    // mousePressed example

            // let grayValue = 0;

            // function setup(){
            //     createCanvas(windowWidth, windowHeight);
            // }

            // function draw(){
            //     background(grayValue);
            // }

            // function mousePressed(){
            //     grayValue = random(255);
            // }
            

// 03 
// dist() function

    // the dist() function returns the distance between two points given four arguments: x and y coordinates for two endpoints

    //  this versatile function is often used to calculate the distance between stationary and moving parts in a sketch

    // dist() example

            // function setup(){
            //     createCanvas(windowWidth, windowHeight);
            // }

            // function draw(){
            //     background(127);

            //     // set the middle of the canvas as the first coordinate
            //     let x1 = width / 2;
            //     let y1 = height / 2;

            //     // set the mouse position as the second coordinate
            //     let x2 = mouseX;
            //     let y2 = mouseY;

            //     // draw a line between the two points
            //     line(x1, y1, x2, y2);

            //     // add small circles to each coordinate
            //     ellipse(x1, y1, 7, 7);
            //     ellipse(x2, y2, 7, 7);

            //     // d is the length of the line
            //     // the distance from point 1 to point 2.
            //     let d = dist(x1, y1, x2, y2);

            //     // Let's write d along the line we are drawing!
            //     push();
            //     translate((x1 + x2) / 2, (y1 + y2) / 2);
            //     text(nfc(d, 1), 0, -5);
            //     pop();
            //     // Fancy!

            //     describe(`2 ellipses joined by line. 1 ellipse moves with
            //         mouse X&Y. Distance displayed.`);
            // }

// 05 
// key Variable

    // 'key' stores the value of the most recently pressed key. most commonly used to check if a specific alphanumeric key has been pressed

    // there is a difference between alphanumeric keys and special keys like backspace, space, arrow, etc

        // key variable example

            // function setup(){
            //     createCanvas(windowWidth, windowHeight);
            // }

            // function draw (){
            //     if (key === 'a') {
            //         // if the 'a' key is pressed fill the color to 'red'
            //     fill ('red');
            //     } else {
            //         // if a key other than 'a' is pressed, fill color to 'green'
            //     fill ('green');
            //     }

            //     ellipse (width / 2, height / 2, 200, 100);
            // }

// 06 
// keyCode variable

    // similar to 'key' => 'keyCode' is a built-in variable that can be used to detect special keys like BACKSPACE, LEFT ARROW, RIGHT ARROW, RETURN (ENTER), ETC.

    // keyCode variable returns the decimal ASCII value to the most recently pressed key

    // keyCode is commonly used in 'if' statements to check if a specific key has been pressed

        // keyCode example

            // function setup(){
            //     createCanvas (windowWidth, windowHeight);

            // }

            // function draw(){
            //     background (255);
            //     fill (255, 0, 255);

            //     // check if keyCode of the most recently pressed key is 32 (spacebar)

            //     if (keyCode === 32) {
            //         // if spacebar si pressed, draw ellipse
            //         ellipse (width / 2, height / 2, 100, 200);
            //     }
            // }

// 07 
// Key Events

    // Key events are registered through keyboard event functions such as: keyPressed(), keyReleased(), keyTyped(), keyIsDown().

    // Each of the functions runs when the corresponding key interaction occurs

    // Key Events can be combined with key and keyCode variables to perform actions when specific keys have been pressed

        // keyReleased example

            // let posX = 100;
            // let posY = 75;

            // function setup (){
            //     createCanvas (windowWidth, windowHeight);
            // }

            // function draw() {
            //     rect (posX, posY, 100, 75);
            // }

            // function keyReleased(){
            //     if (key === 'm') {
            //         posX = random(400);
            //         posY = random(400);
            //     }
            // }