const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var moltenValley, moltenValleyImage;

var zep8, zep8Image;
var zorg, zorgImage;

var zorgFriend1, zorgFriend1Image;
var zorgFriend2, zorgFriend2Image;

var zepian1, zepian1Image;
var zepian2, zepian2Image;

var andromedaRobot, andromedaRobotImage;

var robot1, robot1Image;
var robot2, robot2Image;

var acherage, acherageImage; 

var nothinglolImage;

var score = 0;

function preload(){
  // moltenValleyImage = loadImage("MoltenValleyBg.png");
  zorgImage = loadImage("Zorg.png");
  
  zep8Image = loadImage("Zep8S.png");
  
  zorgFriend1Image = loadImage("Zorg.png");
  zorgFriend2Image = loadImage("Zorg.png");
  
  zepian1Image = loadImage("Zorg.png");
  zepian2Image = loadImage("Zorg.png");
  
  andromedaRobotImage = loadImage("AndromedaRobot.png");
  
  robot1Image = loadImage("AndromedaRobot.png");
  
  robot2Image = loadImage("AndromedaRobot.png");

  acherageImage = loadImage("Acherage.png");

  nothinglolImage = loadImage("nothinglol.png");
}


function setup() {
  createCanvas(1000, 600);
  // moltenValley = createSprite(500,300,10,10);
  // moltenValley.addImage("MoltenValleyBg", moltenValleyImage);
  

  engine = Engine.create();
  world = engine.world;
  
  zep8 = createSprite(500,300,10,10);
  zep8.addImage("Zep8", zep8Image);
  zep8.scale = 2;
  
  zorg = createSprite(100,470,50,50);
  zorg.addImage("Zorg", zorgImage);
  zorg.scale = 0.2;
  
  zorgFriend1 = createSprite(150,520,50,50);
  zorgFriend1.addImage("ZorgFriend1", zorgImage);
  zorgFriend1.scale = 0.1;
  zorgFriend1.depth = zorg.depth - 1;
  
  zorgFriend2 = createSprite(50,520,50,50);
  zorgFriend2.addImage("ZorgFriend2", zorgImage);
  zorgFriend2.scale = 0.1;
  zorgFriend2.depth = zorg.depth - 1;
  
  zepian1 = createSprite(195,520,50,50);
  zepian1.addImage("Zepian1", zorgImage);
  zepian1.scale = 0.1;
  zepian1.depth = zorg.depth - 1;
  
  zepian2 = createSprite(240,520,50,50);
  zepian2.addImage("Zepian2", zorgImage);
  zepian2.scale = 0.1;
  zepian2.depth = zorg.depth - 1;
  
  
  
  
  zep8.velocityX = -1;
}

function draw() {
  background(220);
  
  if(zep8.x < 0) {
      zep8.x = zep8.width/2;
  }
  if(frameCount % 100 === 0){
    score = score + 1;
  }
    
  if(score === 3){
    acherage = createSprite(880,505,50,50);
    acherage.addImage("Acherage",acherageImage);
    acherage.scale = 0.2;
  }

  if(score > 4){
    acherage.addImage("nothinglol",nothinglolImage)
    acherage.changeImage("nothinglol",nothinglolImage);
  }

  if(score === 10){
    andromedaRobot = createSprite(880,495,50,50);
    andromedaRobot.addImage("Cirnas", andromedaRobotImage);
    andromedaRobot.scale = 0.15;
  
    robot1 = createSprite(810,520,50,50);
    robot1.addImage("Robot1", robot1Image);
    robot1.scale = 0.1;
    robot1.depth = andromedaRobot.depth - 1;
  
    robot2 = createSprite(960,520,50,50);
    robot2.addImage("Robot2", robot2Image);
    robot2.scale = 0.1;
    robot2.depth = andromedaRobot.depth - 1;
  }
  
  drawSprites();
  
  textSize(25);
  fill("chartreuse");
  text("Score: " + score,850,50);
  
  
  
}