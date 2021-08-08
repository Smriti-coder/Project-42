
var spacecraft1img, spacecraft2img, spacecraft3img, spacecraft4img;
var space; 
var issimg; 
var iss;
var spacecraft;
var hasDocked = false;
var canvas;

function preload(){
  space = loadImage("Docking-undocking/spacebg.jpg");
  issimg = loadImage("Docking-undocking/iss.png");
  spacecraft1img = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2img = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3img = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4img = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(1000, 500); 
  spacecraft = createSprite(400, 390, 50 ,50);
  iss = createSprite(400, 200, 75, 75);
}

function draw() {
 background(space);
 iss.addImage(issimg);
 spacecraft.addImage(spacecraft1img);
 spacecraft.scale = 0.25;

 if(hasDocked){
  textSize(32);
  text("Docking Successful!", 480, 400);
 }

 if(!hasDocked){
    
    if (keyDown(LEFT_ARROW)){ 
      spacecraft.addImage(spacecraft3img);
      spacecraft.position.x = spacecraft.position.x - 5;
      text(spacecraft.position.x + "," +spacecraft.position.y,100,50);
    }

    if (keyIsDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4img);
      spacecraft.position.x = spacecraft.position.x + 5;
      text(spacecraft.position.x + "," +spacecraft.position.y,100,50);    
    }

    if (keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2img);
      text(spacecraft.position.x + "," +spacecraft.position.y,100,50)    
    }

    if (keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraft2img);  
      spacecraft.position.y = spacecraft.position.y - 5;
      text(spacecraft.position.x + "," +spacecraft.position.y,100,50)  
    } 
    
    if(spacecraft.position.x === 335 & spacecraft.position.y === 285){
      hasDocked = true;
    }
  }

  drawSprites();
}

