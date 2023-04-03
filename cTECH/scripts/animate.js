// let xPos, yPos

function setup(){
    createCanvas(windowWidth, windowHeight);
    background('#D30D56');
    frameRate(60);

    
    // xPos= 10;
    // yPos= 600;
// 
}
function draw(){

        let randomSize=(15, 300);
        let randomX = random(100, windowWidth - 100);
        let randomY = random(100, windowHeight- 100);
        // let randomyPos = random(0, 400);
        // let randomxPos = random(0, 600);

       // ellipse( x, y, width, height);
    //    CAED9E- light pea green
// MAIN PATTERN
        fill('#E56507');
        ellipse(frameCount, randomX, randomY, 20, 200);
        // xPos = x + 5;
        // EAA8E7- light pink/purple

        fill('#4DC1DE');
        ellipse (frameCount, randomX, windowHeight /3, randomSize);
        // yPos = y - 2;
        // D30D56- backround color
        
        fill('#0710E5');
        ellipse (frameCount, randomX, randomY, 30, 30);
        // yPos = y - 3;
// BIG CIRCLE ON BOTTOM
        // E56507- dark peachy orange
        fill('#E56507');
        ellipse (frameCount, 600, windowHeight * .75, 300, 80);
        // yPos = y - 5;
// MEDIUM TOP CIRCLE
        fill('#EAA8E7');
        ellipse(frameCount,randomX, randomY, 10, 10);
        // xPos = x + 3;

        fill('#D30D56');
        ellipse(frameCount, windowHeight /2 + 120, 120, 240);
        // xPos = x + 10;
        //  // rect (x, y, width, height);
        // fill('#FBAC14');
        // rect(framecount * 2, randomX, randomY, randomSize);
        // yPos -= 8;

        display();
}


function display(){

        fill('#ddff99');
            stroke('orange');
            ellipse(frameCount, height * .80, 50, 50);
        }


    
