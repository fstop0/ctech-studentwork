
let fC;
let aw;
let ah;
let min;
let max;

 function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(50);
    background('white');
    noStroke();
    aw=windowWidth/3;
    ah=2*(windowHeight/3);
    min = 
    leavesX = [];

}

function draw(){
    // console.log(frameCount % 50 ===0);
    console.log(randX());
    fill('brown');
    triangle(aw, ah, windowWidth/2, windowHeight/4, (aw*2), ah);
//     let randomX = random(100,windowWidth - 100);
//     let randomY = random(100,windowHeight- 100);
//     // fill('#ADD8E6');
//     // stroke('#0000FF');
//     // //circle(randomX, randomY, 50);
//     if (frameCount%fC === 0){
//         fill('#3388E0');
//        // stroke('#7C9EF6');
//         circle(randomX, randomY, 50);
//         fill('#59A3F0');
//        // stroke('#99E3FB');
//         circle(randomX + 5, randomY -5, 30);
//         fill('#2779CE');
//         //stroke('#D5F5FF');
//         circle(randomX + 10, randomY -10, 10);
//         if(fC>=2){
//             fC--;
//     }

//     }
 }
 function fillArray(){
    for (let i =143; i >= 0; i--){
        leavesX.fillArray();
    }

}
function randX(){
    min = Math.ceil(aw);
    max = Math.floor(aw*2);
    return Math.floor(Math.random(min,max));

}
function randY(){
    min = Math.ceil(ah);
    max = Math.floor(windowHeight/3);
    return Math.floor(Math.random(min,max));

}
 