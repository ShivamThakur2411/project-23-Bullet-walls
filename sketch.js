var wall,thickness;
var bullet,speed,weight;
var bulletRightEdge,wallLeftEdge;
var lbullet,lwall;

function setup() {
  createCanvas(1600,400);

   bullet = createSprite(60, 200, 100, 40);
    bullet.shapeColor = (255);

    thickness = random(22,83);

     wall = createSprite(1500,200,thickness,200);

    speed = random(223,321);
   weight = random(30,52);

}

function draw() {
  background(0);  

  bullet.velocityX = speed;
  
   if(hasCollided(bullet,wall)){

   	bullet.velocityX = 0;

   	var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

   	if(damage > 10){
   		wall.shapeColor =  color(255,0,0);
   	}
   	if(damage < 10){
   		wall.shapeColor = color(0,255,0);
   	}
   }

  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if(bulletRightEdge >= wallLeftEdge){

	return true;

}else{

  return false;
}
}