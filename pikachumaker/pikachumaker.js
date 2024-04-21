var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool blue sky behind
   
    fill(98, 189, 216);
    stroke(0, 0)
    rect(mouseX, mouseY, 400, 200);
    
  } else if (toolChoice == '2') { // green grass

    fill(99,188,59)
    stroke(0, 0);
    rect(mouseX, mouseY, 600, 200);
    
   } else if (toolChoice == '3') { // white clouds
    
     strokeWeight(50);
    stroke(223,237,234);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    
  } else if (toolChoice == '4') { // yellow base

    stroke(255, 249, 61);
    strokeWeight(50);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
    } else if (toolChoice == '5') { // yellow base smaller brush

    stroke(255, 249, 61);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
     
    
  } else if (toolChoice == '6') { // red cheeks

    stroke(248,68,36);
    strokeWeight(40);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '7') { // lineart brown
  
    stroke(159,113,18);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '8') { // lineart black

     stroke(0);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '9') { //darker green line

    strokeWeight(10);
    stroke(99,213,107);
    line(mouseX, mouseY, pmouseX, pmouseY);
    

  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
