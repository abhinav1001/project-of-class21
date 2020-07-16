var bullet,wall;
var thikness,bulletweight,speed;
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1000,200,thikness,height/2);
  wall.shapeColor="black";
  bullet=createSprite(200,200,20,20);
  bullet.shapeColor="red";
}

function draw() {
  background("blue");  
   thikness=random(22,83);
   speed=random(7,13);
   bulletweight=random(30,52);
   bullet.velocityX=speed;
   bullet.bulletweight=bulletweight;

/*car.x-wall.x<car.width/2+wall.width/2
    && wall.x-car.x<wall.width/2+car.width/2
    && car.y-wall.y<car.height/2+car.height/2
    && wall.y-wall.y<car.height/2+car.height/2
 //bullet.velocityX=speed;
  
 /* if(bullet.x-wall.x<bullet.width/2+wall.width/2
    && wall.x-bullet.x<wall.width/2+bullet.width/2
    &&bullet.y-wall.y<bullet.height/2+bullet.height/2
    && wall.y-wall.y<bullet.height/2+bullet.height/2
     ){*/
   
  
  
  bounceoff(bullet,wall);
  collider();
  drawSprites();

}
function bounceoff(object1,object2){
  
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
    
  }
  }
function collider(){
  bullet.x-wall.x<bullet.width/2+wall.width/2
  && wall.x-bullet.x<wall.width/2+bullet.width/2
  && bullet.y-wall.y<bullet.height/2+bullet.height/2
  && wall.y-wall.y<bullet.height/2+bullet.height/2;
  bullet=fill("green")
//bullet.x>=bullet.y;

}