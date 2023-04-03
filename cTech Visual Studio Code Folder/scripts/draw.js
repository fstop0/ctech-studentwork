let sizeChange=25;
let button;
let close;
// let cnv, d, g;
// let locked=false;

function setup() {
createCanvas(800, 800);
  // cnv.mousePressed(draw);
   background('#ffffff');
  noStroke();
  // fill('#50A6D6');
 //  rect(0,0,800,400);
 button = createButton('controls');
  button.position(720, 20);
  button.mousePressed(controls);
  // d = 10;
  // g = 800;
  
}

function draw() {
  
   if (key=='c'){
      fill('white');
    rect(0,0,800,800);
  
  }
  // fill('white');
  // rect(0,0,800,800);
  
  // translate(width/2,height/2)
//    if (key=='') {
//     fill('#000000')
//       ellipse(mouseX,mouseY,50);
//    }
//   let a=mouseY;
//   if (a<400) {
//     fill('#5096C6')
// //    stroke(0,0,0)
//     ellipse(mouseX,mouseY,50);
//   } else {
//     fill('#96C650')
//  //   stroke(0,0,0)
//     ellipse(mouseX,mouseY,50);
//   }
  
   
  if (key=='-') {
    sizeChange=sizeChange-1;
  }

    if (key=='=') {
    sizeChange=sizeChange+1;
  }
  
    if (sizeChange<5) {
    sizeChange=5;
  }

  if (sizeChange>115) {
    sizeChange=115;
  }
  
  // if (key==9) {
  //   fill('black')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  //  if (key==0) {
  //   fill('white')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  //  if (key==1) {
  //   fill('red')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  //   if (key==2) {
  //   fill('orange')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  //   if (key==3) {
  //   fill('yellow')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  //   if (key==4) {
  //   fill('lime')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  //   if (key==5) {
  //   fill('cyan')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  //   if (key==6) {
  //   fill('blue')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  // if (key==7) {
  //   fill('magenta')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  // //brown
  // if (key==8) {
  //   fill('#65350f')
  //     ellipse(mouseX,mouseY,sizeChange,sizeChange);
  // }
  //   if (key=='c'){
  //     fill('white');
  //   rect(0,0,800,800);
  // }

  fill('lightgrey');
  rect(0,0,50,800);
  rect(0,700,800,100);
  rect(700,0,100,800);
  rect(0,0,800,50);
  ellipse(75,75,125);
  fill('#EEEEEE');
  ellipse(75,75,75);

  fill('lightgrey');
  ellipse(650,100,175);
  fill('#EEEEEE');
  ellipse(650,100,125);
  fill('black');
  ellipse(650,100,sizeChange);
  
  if (key==1) {
  fill('red');
  textSize(50);
  text(1, 61, 91); }
    if (key==2) {
  fill('orange');
  textSize(50);
  text(2, 61, 91); }
    if (key==3) {
  fill('yellow');
  textSize(50);
  text(3, 61, 91); }
    if (key==4) {
  fill('lime');
  textSize(50);
  text(4, 61, 91); }
    if (key==5) {
  fill('cyan');
  textSize(50);
  text(5, 61, 91); }
    if (key==6) {
  fill('blue');
  textSize(50);
  text(6, 61, 91); }
    if (key==7) {
  fill('magenta');
  textSize(50);
  text(7, 61, 91); }
    if (key==8) {
  fill('#65350f');
  textSize(50);
  text(8, 61, 91); }
    if (key==9) {
  fill('black');
  textSize(50);
  text(9, 61, 91); }
    if (key==0) {
  fill('white');
  textSize(50);
  text(0, 61, 91); }
  
  //color squares
  fill('red');
  rect(37.5,725,50,50,10);
  fill('orange');
  rect(112.5,725,50,50,10);
  fill('yellow');
  rect(187.5,725,50,50,10);
  fill('lime');
  rect(262.5,725,50,50,10);
  fill('cyan');
  rect(337.5,725,50,50,10);
  fill('blue');
  rect(412.5,725,50,50,10);
  fill('magenta');
  rect(487.5,725,50,50,10);
  fill('#65350f');
  rect(562.5,725,50,50,10);
  fill('black');
  rect(637.5,725,50,50,10);
  fill('white');
  rect(712.5,725,50,50,10);
  
  //color numbers
      fill('white');
  textSize(35);
  text(1,52.5,762.5);
      fill('white');
    textSize(35);
  text(2,127.5,762.5);
      fill('white');
    textSize(35);
  text(3,202.5,762.5);
      fill('white');
    textSize(35);
  text(4,277.5,762.5);
      fill('white');
    textSize(35);
  text(5,352.5,762.5);
      fill('white');
    textSize(35);
  text(6,427.5,762.5);
      fill('white');
    textSize(35);
  text(7,502.5,762.5);
      fill('white');
    textSize(35);
  text(8,577.5,762.5);
    fill('white');
    textSize(35);
  text(9,652.5,762.5);
      fill('black');
    textSize(35);
  text(0,727.5,762.5);
}


// function mousePressed(draw) {
  
// }
  function mouseDragged() {
    if (key==9) {
    fill('black')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
   if (key==0) {
    fill('white')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
   if (key==1) {
    fill('red')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
    if (key==2) {
    fill('orange')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
    if (key==3) {
    fill('yellow')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
    if (key==4) {
    fill('lime')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
    if (key==5) {
    fill('cyan')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
    if (key==6) {
    fill('blue')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
  if (key==7) {
    fill('magenta')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
  //brown
  if (key==8) {
    fill('#65350f')
      ellipse(mouseX,mouseY,sizeChange,sizeChange);
  }
 

// function draw() {
//   // g = random(0, 255);
// }
  }
function controls() {
  let ctrls='1-8=colors, 9=black, 0=white, C=clear_canvas, +=increase_pen_size, -=decrease_pen_size, P=stop_pen_size'
  fill('lightgrey');
  rect(200,200,400,400,50);
  fill('#EEEEEE');
  rect(225,225,350,350,25);
  fill('black');
  textSize(20);
  text(ctrls, 250, 250, 320, 320);
 close = createButton('CLOSE');
  close.position(400, 400);
  close.mousePressed(closing);
  
}

function closing() {
        fill('white');
    rect(0,0,800,800);
  close.hide();
}