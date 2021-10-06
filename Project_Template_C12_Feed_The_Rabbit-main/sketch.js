var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var leaves, leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x=World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

createleaves()

createapples()

  drawSprites();
}

function createapples(){
  if (frameCount % 80 === 0){
    apple = createSprite(600,100,40,10);
    apple.x = random(50,350)
      apple.velocityY= 3;
    apple.addImage("apple_moving", appleImg);
    apple.scale = 0.1;
  }
}

function createleaves(){
  if (frameCount % 80 === 0){
    leaves = createSprite(600,100,40,10);
    leaves.x = random(10,310)
      leaves.velocityY= 3;
    leaves.addImage("leaf_moving", leafImg);
    leaves.scale = 0.1;
  }
}