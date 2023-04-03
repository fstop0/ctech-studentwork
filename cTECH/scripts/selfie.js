
function setup(){
    createCanvas(windowWidth, windowHeight);
    background('#D30D56');
}

function draw(){
    // ellipse( x, y, width, height);
    fill('#FEDB98');
    ellipse( width / 2, height / 2, 300, 400);
// HEAD
    fill('#D1EAFA')
    ellipse(width / 2 + 65, height / 2 - 10, 40, 30)

    fill('#D1EAFA')
    ellipse(width / 2 - 65, height / 2 - 10, 40, 30)

    fill('#101B1E')
    ellipse(width / 2 + 65, height / 2 - 10, 15, 15)

    fill('#101B1E')
    ellipse(width / 2 - 65, height / 2 - 10, 15, 15)
// EYES
    fill('#D9567A')
    ellipse(width / 2, height / 2 + 125, 80 , 20)
// MOUTH
    fill('#DC966D');
    ellipse( width / 2, height / 2 + 40, 20, 50)
//  NOSE

    fill('#CE9F13')
    ellipse(width / 2 + 100, height / 2 - 150, 150, 150)

    fill('#CE9F13')
    ellipse(width / 2 - 100, height / 2 - 150, 150, 150)

    fill('#CE9F13')
    ellipse(width / 2, height / 2 - 165, 150, 150)

    fill('#CE9F13')
    ellipse(width / 2 - 175, height / 2 - 50, 150, 150)

    fill('#CE9F13')
    ellipse(width / 2 + 175, height / 2 - 50, 150, 150)

    fill('#CE9F13')
    ellipse(width / 2 + 200, height / 2 + 50, 150, 150)

    fill('#CE9F13')
    ellipse(width / 2 - 200, height / 2 + 50, 150, 150)

    fill('#CE9F13')
    ellipse(width / 2 + 200, height / 2 + 150, 150, 150)

    fill('#CE9F13')
    ellipse(width / 2 - 200, height / 2 + 150, 150, 150)
// HAIR

}
