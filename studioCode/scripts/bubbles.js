let i;
 function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(50);
    background('#177AE0');
    noStroke();
    i=50;
 

}
function draw(){
    console.log(frameCount % 50 ===0);
    let randomX = random(100,windowWidth - 100);
    let randomY = random(100,windowHeight- 100);
    // fill('#ADD8E6');
    // stroke('#0000FF');
    // //circle(randomX, randomY, 50);
    if (frameCount%i === 0){
        fill('#3388E0');
       // stroke('#7C9EF6');
        circle(randomX, randomY, 50);
        fill('#59A3F0');
       // stroke('#99E3FB');
        circle(randomX + 5, randomY -5, 30);
        fill('#2779CE');
        //stroke('#D5F5FF');
        circle(randomX + 10, randomY -10, 10);
        if(i>=2){
            i--;
    }

    }
}
