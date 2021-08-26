var garden,rabbit,apple,orangeleaves,redleaves,greenleaves;
var gardenImg,rabbitImg,appleImg,orangeleavesImg,redleavesImg;

function preload(){
  gardenImg=loadImage("garden.png");
  rabbitImg=loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  orangeleavesImg=loadImage("orangeLeaf.png");
  redleavesImg=loadImage("redimage.png");
}

function setup(){
  
  createCanvas(400,400);
  
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit=createSprite(180,340,30,30);
  rabbit.scale=0.09;
  rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges=createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  rabbit.x=World.mouseX;

  var select_sprites=Math.round(random(1,3));

  if (frameCount%80==0){
    if (select_sprites==1){
     createApples();
    }
    else {
      createOrangeLeaves();
      createRedLeaves();
    }
  }

  drawSprites();
}

function createApples(){
  
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY=7;
  apple.scale=0.07;
  apple.y=Math.round(random(10,60));
  apple.lifetime=300
  apple.depth = rabbit.depth

}

function  createOrangeLeaves(){
  orangeleaves=createSprite(random(50,350),80,10,10);
  orangeleaves.addImage(orangeleavesImg);
  orangeleaves.velocityY=7;
  orangeleaves.scale=0.08;
  orangeleaves.y=Math.round(random(10,60));
  orangeleaves.lifetime=320
  orangeleaves.depth = rabbit.depth
}

function  createRedLeaves(){
  redleaves=createSprite(random(50,350),80,10,10);
  redleaves.addImage(redleavesImg);
  redleaves.velocityY=7;
  redleaves.scale=0.06;
  redleaves.y=Math.round(random(10,60));
  redleaves.lifetime=320
  redleaves.depth = rabbit.depth
}


