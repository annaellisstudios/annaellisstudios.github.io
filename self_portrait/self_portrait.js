function setup() {
  createCanvas(600, 600);
}
function draw() {
  background("#94b0f7");
  
  //background bunny 4
   fill("#57666e");
   triangle(520, 200, 560, 123, 550, 309);
   triangle(500, 194, 525, 119, 540, 309);   
   ellipse(530, 160, 25, 90);
   ellipse(565, 170, 30, 100);
   ellipse(510, 350, 200, 250);
   ellipse(510, 220, 100, 105);
   ellipse(500, 230, 150, 80);
   
   //background bunny 3
   fill(0);
   ellipse(550, 560, 300, 305);
   ellipse(526, 400, 40, 100);
   ellipse(565, 400, 40, 100);
  
   //background bunny 2
   fill("#8187a6");
   triangle(0, 450, 35, 285, 200, 409);
   triangle(35, 230, 38, 285, 200, 409);
   triangle(35, 330, 102, 167, 120, 330);
   ellipse(110, 200, 30, 77);
   ellipse(60, 220, 50, 105);
   ellipse(100, 480, 200, 405);
   ellipse(110, 290, 150, 75);
   ellipse(100, 260, 100, 65);
  
  //background bunny 1
   fill("#e3d2c1");
   ellipse(150, 480, 200, 205);
  
   //hair background
   fill("#806639");
   quad(217, 290, 382, 290, 450, 400, 150, 400)
   circle(195, 420, 100);
   circle(405, 420, 100);
   
  //head
  noStroke();
  fill("#E4B1AB")
  circle(300, 250, 180);
  
  //eyebrows
  fill("#806639")
  rect(250, 220, 33, 6);
  rect(320, 220, 33, 6);

  //hair 
  noFill();
  stroke("#c4a164")
  strokeWeight(2);
  
  //left hair
  fill("#c4a164");
  bezier(300, 160, 100, 180, 280, 300, 150, 400);
 
  //right hair
  fill("#c4a164");
  bezier(300, 160, 500, 180, 320, 300, 450, 400);
  noStroke();
  
  //neck
  fill("#E4B1AB");
  quad(280, 310, 320, 310, 330, 370, 270, 370);
  
  //body
  fill("#E4B1AB");
  quad(270, 370, 330, 370, 460, 430, 140, 430);
  rect(140, 430, 320, 70);
  
  //eyes
  fill(0); // black color for eyes
  ellipse(270, 250, 10, 10); // Left eye
  ellipse(330, 250, 10, 10); // Right eye 
  
  //mouth
  fill("#DB7093");
  noStroke();
  arc(300,270,40,20,0,PI);
  pop();

  //green shirt
  fill("#7BB661")
  rect(138, 430, 325, 330);
  rect(200, 400, 20, 50);
  rect(380, 400, 20, 50);
  triangle(380, 400, 400, 400, 380, 389);
  triangle(200, 400, 220, 400, 220, 389);
  
  //bunny 1
  fill("#cccfe8");
  ellipse(500, 550, 190, 165); 
  ellipse(410, 600, 40, 20);
  ellipse(410, 540, 70, 100);
  ellipse(410, 540, 70, 100);
  ellipse(400, 530, 100, 70);
  ellipse(410, 520, 70, 80);
  ellipse(410, 520, 70, 80);
  ellipse(420, 500, 35, 120);
  ellipse(450, 500, 39, 140);
  ellipse(585, 595, 39, 55);
  
  //bunny 2
  fill("#242430");
  ellipse(150, 580, 330, 105);
  ellipse(210, 552, 120, 100);
  ellipse(255, 550, 100, 60);
  ellipse(215, 500, 40, 100);
  ellipse(170, 500, 40, 100);
  ellipse(75, 580, 200, 200);
  
  //bunny 1 face 
  // fill(0)
 // quad(430, 540, 430, 535, 545, 440, 440, 440);
  
  
  }
  
