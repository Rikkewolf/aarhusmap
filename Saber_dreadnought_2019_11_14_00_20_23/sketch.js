var img;
var img50;
var imgall;
var imgf;
var imgm;

var button; //all
var button1; //50/50
var button2; //female
var button3; //male


function preload() {
  
  img50 = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/aarhusmap50.png");
  imgall = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/aarhusmapall.png");
  imgf = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/aarhusmapfemale.png");
  imgm = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/aarhusmapmale.png");
  
  img = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/aarhusmap.png");
  
  img1 = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/1_pic.png");
  img2 = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/2_pic.png");
  img3 = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/3_pic.png");
  img4 = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/4_pic.png");
  img5 = loadImage("https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/5_pic.png");
 
  sound = loadSound('https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/Lydfil_vesterbrotorv.mp3');

  sound1 = loadSound('https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/lydfil_dokk1.mp3');
  
  sound2 = loadSound('https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/lydfil_streetfood.mp3');
  
  sound3 = loadSound('https://raw.githubusercontent.com/Rikkewolf/aarhusmap/master/lydfil_bruuns.mp3');




}

function setup() {
createCanvas(1141, 810);
background(img, 0, 0, 1141, 810);
  
console.log(mouseX, mouseY);
  
button = createButton('All');
button.position(1050, 50);
button.mousePressed(all);

button1 = createButton('50/50');
button1.position(1050, 100);
button1.mousePressed(fifty);
  
button2 = createButton('Female');
button2.position(1050, 150);  
button2.mousePressed(female);

button3 = createButton('Male');
button3.position(1050, 200);
button3.mousePressed(male);
 
  
}

function fifty(){
   background(img50, 0, 0, 1141, 810); 

} 

function all(){
   background(imgall, 0, 0, 1141, 810); 

} 

function female(){
   background(imgf, 0, 0, 1141, 810); 

} 

function male(){
   background(imgm, 0, 0, 1141, 810); 

} 


function draw() {

  fill(250, 0, 0 );
ellipse(500, 520, 10, 10); //1 
ellipse(722, 635, 10, 10); //2
ellipse(642, 690, 10, 10);//3
ellipse(590, 750, 10, 10);//4
ellipse(568, 255, 10, 10);//6
ellipse(874, 121, 10, 10);//7
ellipse(577, 711, 10, 10);//8
ellipse(400, 422, 10, 10);//9
ellipse(818, 339, 10, 10);//10
ellipse(592, 620, 10, 10);//11
ellipse(350, 197, 10, 10); //12
ellipse(520, 201, 10, 10);//13
ellipse(456, 622, 10, 10);//14
ellipse(526, 577, 10, 10);//15
ellipse(675, 511, 10, 10);//16
ellipse(700, 486, 10, 10);//17
ellipse(397, 500, 10, 10);//18
ellipse(975, 46, 10, 10);//19
ellipse(660, 598, 10, 10);//20
ellipse(628, 562, 10, 10);//21
ellipse(607, 470, 10, 10);//22
  
console.log(mouseX,mouseY);
  
}

function mousePressed() {
  // Check if mouse is inside the circle
  var a = dist(mouseX, mouseY, 500, 520);//1
  var b = dist(mouseX, mouseY, 722, 635);//2
  var c = dist(mouseX, mouseY, 642, 690);//3
  var d = dist(mouseX, mouseY, 590, 750);//4
  var e = dist(mouseX, mouseY, 568, 255);//6
  var f = dist(mouseX, mouseY, 874, 121);//7
  var g = dist(mouseX, mouseY, 577, 711);//8
  var h = dist(mouseX, mouseY, 400, 422);//9
  var i = dist(mouseX, mouseY, 818, 339);//10
  var j = dist(mouseX, mouseY, 592, 620);//11
  var k = dist(mouseX, mouseY, 350, 197);//12
  var l = dist(mouseX, mouseY, 520, 201);//13
  var m = dist(mouseX, mouseY, 456, 622);//14
  var n = dist(mouseX, mouseY, 526, 577);//15
  var o = dist(mouseX, mouseY, 675, 511);//16
  var p = dist(mouseX, mouseY, 700, 486);//17
  var q = dist(mouseX, mouseY, 397, 500);//18
  var r = dist(mouseX, mouseY, 975, 46);//19
  var s = dist(mouseX, mouseY, 660, 598);//20
  var t = dist(mouseX, mouseY, 628, 562);//21
  var u = dist(mouseX, mouseY, 607, 470);//22
  
  
  if (a < 15) {
    background(img, 0, 0, 1141, 810);
    image(img5, 741, 410, 400, 400);
    sound.play();

  } else if (b < 15) {
    background(img, 0, 0, 1141, 810);
    image(img1, 741, 410, 400, 400);
    sound1.play();
    
  } else if (c < 15) {
    background(img, 0, 0, 1141, 810);
    image(img2, 741, 410, 400, 400);
    sound2.play();
    
  } else if (d < 15) {
    background(img, 0, 0, 1141, 810);
    image(img3, 741, 410, 400, 400);
    sound3.play();
}
   
}  

