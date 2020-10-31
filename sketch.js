
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 
}



function setup() {
  monkey=createSprite(100,350,10,40);
   monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,385,800,10);
  ground.x=ground.width/2;
  ground.velocityX=-3;
  
  foodGroup=new Group();
  obstacleGroup=new Group();
   
   score=0;
}

function draw() {
  background("pink");
  textSize(15);
  fill("red");
  score=Math.ceil(frameCount/frameRate());
  text("Survival time:"+score,250,100);
  //score=score+Math.round((getFrameRate()/60));
  
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.5;
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
 
  food();
  obstacles();
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(400,200,10,40);
    banana.velocityX=-3;
    banana.addImage(bananaImage);
    banana.scale=0.09;
    banana.y=Math.round(random(120,200));
    banana.lifetime=130;
  foodGroup.add(banana);
   
    
  }
}

function obstacles(){
  if(frameCount%300===0){
  obstacle=createSprite(350,360,40,40);
    obstacle.velocityX=-3;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
     obstacleGroup.add(obstacle);
  }
  
 
  
}


