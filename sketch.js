var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
    createCanvas(400, 400);  
    btn_red=createButton("red");
    btn_red.position(100,150);
    btn_red.mousePressed(redBg);
    
    btn_green=createButton("green");
    btn_green.position(250,150);
    btn_green.mousePressed(greenBg);
}

function draw() {
  background(r,g,b);
}

function redBg()
{
  r=255;
  g=0;
  b=0;
}

function greenBg()
{
  r=0;
  g=255;
  b=0;
}
