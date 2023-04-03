function setup(){
    createCanvas( windowWidth, windowHeight)
    backround('#E0FBCE')
}



// const particleSystem = viewer.scene.primitives.add(
//     new Cesium.ParticleSystem({
//       image: "../../SampleData/smoke.png",
//       imageSize: new Cesium.Cartesian2(20, 20),
//       startScale: 1.0,
//       endScale: 4.0,
//       particleLife: 1.0,
//       speed: 5.0,
//       emitter: new Cesium.CircleEmitter(0.5),
//       emissionRate: 5.0,
//       modelMatrix: entity.computeModelMatrix(
//         viewer.clock.startTime,
//         new Cesium.Matrix4()
//       ),
//       lifetime: 16.0,
//     })
//   );


function draw() { 
    setCenter(width/2, height/2);
    stroke('#666');
    noFill();
    polarEllipses(30, 40+sin(frameCount/10)*20, 80, 80);
}