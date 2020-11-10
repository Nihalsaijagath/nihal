
var fixedRect,movingRect,gameobj1,gameobj2,gameobj3,gameobj4;



function setup() {
  createCanvas(1200,600);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(500, 300, 50, 100);
  movingRect.shapeColor = "green";
  
gameobj1 = createSprite(200,150,50,100);
gameobj1.shapeColor = "green";

gameobj2 = createSprite(100,250,50,100);
gameobj2.shapeColor = "green";

gameobj3 = createSprite(100,150,50,100);
gameobj3.shapeColor = "green";

gameobj4 = createSprite(200,300,50,100);
gameobj4.shapeColor = "green";


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameobj1)){
    movingRect.shapeColor = "red";
    gameobj1.shapeColor = "red";
  }
  
  else{
    movingRect.shapeColor = "green";
    gameobj1.shapeColor = "green";
  }

  drawSprites();
}



























































