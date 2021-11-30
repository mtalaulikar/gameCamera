/* -----------------------------------------------------------------------
Simple thing that I want to demo to student is.
First create a big (in width )canvas (7000,570)..
then create a sprite and on press of key d I want to move it horizontally.
So after some time it will move out of the screen.
Then I want to introduce the game camera and focus the camera on the sprite. 
so then student will see the actual use of game camera
--------------------------------------------------------------------------*/




function preload(){
  bg = loadImage("bg1.png");
  
}

function setup(){
  canvas = createCanvas(7000,570);
  s1 = createSprite(20,500, 20,50);
  s1.shapeColor = "red";
  
  
  
}

function draw(){
  background(bg);
  if(keyDown("d")){
    s1.x = s1.x + 10;
    camera.position.y = height/2;
    camera.position.x = s1.x
  }
  
  console.log(camera.position.x);
  console.log(camera.position.y);
  drawSprites();
}