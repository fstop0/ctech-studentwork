function setup(){
    // (width, height)
    createCanvas(1200,800);
    console.log(width);
    console.log(height);

    createCanvas(1200, 800, WEBGL);
    detailX = createSlider(3, 16, 3);
    detailX.position(600, height + 120);
    detailX.style('width', '300px');

   
}
function draw(){
   
    // draw a spinning cone
    background("#DCFBB9");
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    fill("#D7B9FB")
    cone(300, 500);

    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    fill("#B90F53")
    sphere(230);
      }



    