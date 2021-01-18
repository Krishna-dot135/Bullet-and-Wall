var bullet, wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(200,200,50,10);  
  wall = createSprite(1200,200,thickness,height/2);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
}

function draw() {
  background(0); 

  bullet.velocityX = speed;
  
  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
  bullet.velocityX = 0;
  var Deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(Deformation < 10){
    bullet.shapeColor = color(0,255,0); 
    
  }
  if (Deformation > 10 && Deformation < 180) {
    bullet.shapeColor = color(230,230,0);
  }
  if (Deformation > 18) {
    bullet.shapeColor = color(255,0,0);
  }
}

  drawSprites();

}  
