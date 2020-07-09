var rect2, rect1;


function setup() {
  createCanvas(800,400);
  rect2 =  createSprite(400,200,11,55)
  rect1 = createSprite(11,200,11,11);
 rect1.velocityX = 11;

}

function draw() {
  background("black");  
  drawSprites();
  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 &&
    rect2.x-rect1.x<=rect1.width/2+rect2.width/2 )
 {
    rect1.velocityX = 0;
}
  if (rect1.velocityX === 0 ){
    rect1.shapeColor = "red";
  }
}


  