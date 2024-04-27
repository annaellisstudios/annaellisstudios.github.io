var score =0;
var goalWidth = 200;
var goalLength = 200;
var userWidth = 10;
var userLength = 10;
var levelCounter = 0;
var level = 1;


function setup() {
  createCanvas(600, 600);
  background("#94b0f7");
  line(width/2, 45, width/2, 500);
  textAlign(CENTER);
  textSize(20);
} // end of setup


function draw() {
//if score < 5 then level
  if ( score < 10 && score > -1) {
      levelAll();  
  } else if ( score == 10) {
    youWin();
  } else if ( score == -1) {
    youLose(); 
  }
  if (mouseIsPressed) {
     userWidth = userWidth + 1;
     userLength = userLength + 1;
  } 
 //if score >= 5 then draw level 2 rectangle

} // end of draw
  
   function levelAll() {
    setup();
    text(("level " + level), width/2, height-20);
    text(("Score: " + score), width/2, 540);
    text(("Click to Set My Size"), width/4, 110);
    text(("These Two Objects Want to Match!"), width/2, 40);
    text(("Time Limit: " + levelCounter +"/500"), (3*width)/4, height-25);
  //if (levelCounter == 0) {
   //  userWidth = 10;
     //userLength = 10;
     //goalWidth = goalWidth/(level*2) + 10;
     //goalLength = goalLength/(level*2) + 10;
   //}
    rect(width/2+50, 150, goalWidth, goalLength);
    rect(width/14, 225, userWidth, userLength); 
    

    if( ((userWidth >= goalWidth - (11-level) ) && (userWidth <= goalWidth + (11-level))) && levelCounter == 500) {
 
     score = score + 1;
     level = level + 1;
     levelCounter = 0;
     userWidth = 10;
     userLength = 10;
     goalWidth = goalWidth/(level / 2) + (level * 3);
     goalLength = goalLength/(level / 2) + (level * 3);
  
   } else if ( userWidth > goalWidth + (11-level) || levelCounter > 500 ) {
     score = -1; 
   }
   levelCounter = levelCounter + 1;
   
  }
 
 function youLose() {
    setup();
    text("YOU LOSE",width/2, height-20);
    text(("Score: " + score), width/2, 540);
 }
 
  function youWin() {
    setup();
    text("YOU WIN",width/2, height-20);
    text(("Score: " + score), width/2, 540);
 }
 
 
