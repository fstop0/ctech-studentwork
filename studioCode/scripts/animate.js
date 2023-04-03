let monoSynth;
let xPos, yPos; 
let randH;
let min;
let max;
let h;
    function setup(){
        createCanvas(windowWidth, windowHeight);
        background('white');
        frameRate(60);
        noStroke();
        monoSynth = new p5.MonoSynth();
    
    }
    
    function draw(){
        //y = a(x-h)2+ k

        // ellipse(frameCount * 2, height / 2, 100, 100);  
    
        // INCREMENT X POSITION BY 5 EVERY DRAW LOOP
        // ellipse(xPos, 100, 100, 100);
        // xPos += 5;
    
        // Decrement Y Position by 5 Every draw loop
        // ellipse (100, yPos, 100, 100);
        // yPos -= 5;
    
        // ellipse (100, yPos, 100, 100);
        // yPos += 5;
    
        // generate random values
            // random() returns a random decimal between 0 and 1 
            // when used in an argument, the random() function returns a decimal value between 0 and the value of the given argument
            // when two numeric values are given as arugments, the random() function returns a radom decimal between first and second values in the argument
    
            let randomX = random(width);
           
            let randomHueR = getRandomInt(2,75);
            let randomHueR2 = getRandomInt(2,40);
            // let randomHueG = getRandomInt(0,255);
            // let randomHueB = getRandomInt(0,255);
            let randomHue0 = getRandomInt(50,160);
            let randomHuey = getRandomInt(135,230);
            let randomHueg = getRandomInt(2,230);
            let randomSize = random(15, 100);
            let y=parabola(randomX);
            // let randomEllipsex = random (15, 100);
            // let randomEllipsey = random (15, 100);
            // let strokeStrength = random (1, 5) ;
    
            fill(242,2,randomHueR);
            circle(randomX, y, randomSize);
            fill(242,randomHueR2,2);
            circle(randomX, y, randomSize);
            fill(242,randomHue0,2);
            circle(randomX, y+50, randomSize);
            fill(242,randomHuey,2);
            circle(randomX, y+100, randomSize);
            fill(randomHueg,242,2);
            circle(randomX, y+150, randomSize);
            fill(2,242,randomHueg);
            circle(randomX, y+200, randomSize);
            playSynth();

            // fill(0,0, randomHueG,.25);
            // circle(randomX, y+100, randomSize);

            // fill(0,randomHueB, 0,.25);
            // circle(randomX, y+150, randomSize);

        

            // strokeWeight(strokeStrength);
            // stroke('blue');
    
            // circle(randomX, height / 2, randomSize);
            // ellipse (randomX, height /3, randomEllipsex, randomEllipsey);

        
        }
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
          }
        function parabola(randomX){
            h = (windowWidth/2);
            let square = (randomX-h) * (randomX-h);
            return ((square/400))+100;


        
        function playSynth() {
        userStartAudio();

        let note = random(['Fb4', 'G4']);
         // note velocity (volume, from 0 to 1)
        let velocity = random();
         // time from now (in seconds)
         let time = 0;
         // note duration (in seconds)
        let dur = 100;

        monoSynth.play(note, velocity, time, dur);
        }
    }


