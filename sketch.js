var trex
var trex_running
var ground, groundImage
var trex_collider
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png",)
trex_collider = loadImage("trex_collided.png")
groundImage = loadImage("ground2.png")
}
function setup() {
  createCanvas(600,200)
trex = createSprite(50,160,20,50)
ground = createSprite(200,200)
ground.addImage("ground" , groundImage )
trex.addAnimation("running", trex_running);

trex.x = 0.5;
ground.x = ground.width /2
}
function draw(){
background("skyblue")
ground.velocityx = -2

if (ground.x<0){
  ground.x = ground.width/2;
}

if(keyDown("space"))
{
  trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.8;

trex.collide(ground);
drawSprites();
}
