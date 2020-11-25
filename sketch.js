var car,wall;
var speed,height;


function setup() {
  createCanvas(1100,400);
speed = random(55,90);
weight = random(1500,400);

car = createSprite(50, 200, 40, 50);
car.velocityX = speed;
wall = createSprite(940,200,30,500)
}

function draw() {
  background("black");


if((car.x-wall.x<car.width/2+wall.width/2)&&wall.x-car.x<car.width/2+wall.width/2){
car.velocityX = 0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
  car.shapeColor = ("red")
 }
 if(deformation<180&&deformation>100){
   car.shapeColor = ("yellow")
 }
 if(deformation<100){
   car.shapeColor = ("green")
 }
}



  drawSprites();
}