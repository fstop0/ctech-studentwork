const images = new Array();

function preload() {
    // "Young man reading by candlelight", Matthias Stom, 1600-1650
    images[0]=loadImage('eyes.jpg');
  }

  function setup() {
    createCanvas(1500, 1500); // we need some space...
    //1233x419
    /*
      In this particular case the gfx helper should have dimensions the same as
      the target graphic.
    */
    gfx = createGraphics(asciiart_width, asciiart_height);
    gfx.pixelDensity(1);
    /*
      Here we create an object derived from the AsciiArt pseudo-class from the
      p5.asciiart library.
        new AsciiArt(_sketch);
        new AsciiArt(_sketch, _fontName);
        new AsciiArt(_sketch, _fontName, _fontSize);
        new AsciiArt(_sketch, _fontName, _fontSize, _textStyle);
    */
    myAsciiArt = new AsciiArt(this);
    /*
      After initializing the object, look at (in the console) the listing of the
      array containing the glyphs sorted according to the amount of space
      occupied. This table is the basis for the procedure that converts
      individual image pixels into glyphs.
    */
    myAsciiArt.printWeightTable();
    /*
      Here we set the font family, size and style. By default ASCII Art library
      is using 'monospace' font, so we want to apply the same setting to our
      sketch.
    */
    textAlign(CENTER, CENTER); textFont('monospace', 8); textStyle(NORMAL);
    noStroke(); fill(255);
    /*
      Finally we set the framerate.
    */
    frameRate(30);
  }
  
  function draw() {
      background(0);
      /*
        First, let's calculate which image from the images[] array should now be
        displayed. The floor part of the calculated value will indicate the index
        of the image to be displayed. The decimal part will be used to calculate
        the tint.
      */
      cyclic_t = millis() * 0.0002 % images.length;
      /*
        Let's prepare the image for conversion. Although the object derived from
        the AsciiArt pseudo-class has it's own mechanism of changing the size of
        the image, we will use the external one. Thanks to this we will be able -
        before transferring the image for conversion - to perform the posterize
        effect on it, which will make the final effect better.
      */
      gfx.image(images[floor(cyclic_t)], 0, 0, gfx.width, gfx.height);
      /*
        It is worth experimenting with the value of the parameter defining the
        level of posterization. Depending on the characteristics of the image,
        different values may have the best effect. And sometimes it is worth not
        to apply the effect of posterization on the image.
      */
      gfx.filter(POSTERIZE, 3);
      /*
        Here the processed image is converted to the ASCII art. The convert()
        function in this case is used with just one parameter (image we want to
        convert), so the resultant ASCII graphics will have the same resolution
        as the image. If necessary (especially if the resolution of the converted
        image is relatively high), it is possible to use the converter function
        in the version with three parameters: then the second and third
        parameters will be respectively the width and height of the generated
        glyph table. The convert() function returns a two-dimensional array of
        characters containing the representation of the converted graphics in the
        form of the ASCII art. If the conversion fails, the function returns
        null
      */
      ascii_arr = myAsciiArt.convert(gfx);
      /*
        Now it's time to show ASCII art on the screen. First, we set drawing
        parametrs. Next, we call the function typeArray2d() embedded in the
        ASCII Art library, that writes the contents of a two-dimensional array
        containing (implicitly) text characters (chars) on the screen. In this
        case, we call a function with 2 parameters: the first is the table
        whose contents we want to print, and the second is the destination (an
        object with "canvas" property). If you use the function with two
        parameters (as we do in this example), it will assume that you need to
        fill the entire surface of the target canvass with a drawing. However,
        the function can be called in 3 variants:
          [AsciiArt instance].typeArray2d(_arr2d, _dst);
          [AsciiArt instance].typeArray2d(_arr2d, _dst, _x, _y);
          [AsciiArt instance].typeArray2d(_arr2d, _dst, _x, _y, _w, _h);
        The parameters are as follows:
          _arr2d - 2-dimentional array containing glyphs (chars)
          _dst - destination (typically the sketch itself)
          _x, _y - coordinates of the upper left corner
          _w, _h - width and height
        It is relatively easy to write your own function that formats the contents
        of an array to ASCII graphics. At the end of this example, I glue the
        function code from a non-minimized version of the library - it can be
        used as a base for your own experiments.
      */
      myAsciiArt.typeArray2d(ascii_arr, this);
      /*
        Finally, let's display the source image, too.
      */
      tint(255, pow(1.0 - (cyclic_t % 1.0), 4) * 255);
      image(images[floor(cyclic_t)], 0, 0, width, height);
      noTint();
  }
  
//   function mouseReleased() {
//     /*
//       If you want to export the generated ASCII graphics, you can use the built-in
//       function convert2dArrayToString() to convert the array of glyphs to a string.
//     */
//     console.log(myAsciiArt.convert2dArrayToString(ascii_arr));
//   }
  
  
