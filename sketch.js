
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var column_1, column_2, column_3; 
var plane;
var bird;

let pipeImage; 
let birdImage;


function preload() {
  pipeImage = loadImage("pipes.png");
  birdImage = loadImage("birdie.png");
}


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world; 
  column_1 = new Pipe(210, 80, 100, 200, pipeImage);
  column_2 = new Pipe(375, 320, 100, 200, pipeImage);
  column_3 = new Pipe(100, 350, 100, 200, pipeImage);
  bird = createSprite(40,200,60,60);
}


function draw() 
{
  background(255);
  Engine.update(engine);

  column_1.show();
  column_2.show();
  column_3.show();
  bird.show();

  if(keyIsDown(LEFT_ARROW)){
    bird.x = bird.x - 1;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    bird.x = bird.x + 1;
  }
  else if(keyIsDown(UP_ARROW)){
    bird.y = bird.y - 1;
  }
  else if(keyIsDown(DOWN_ARROW)){
    bird.y = bird.y + 1;
  }

  if(bird.isTouching(column_1 || column_2 || column_3)){
    column_1.remove();
    column_2.remove();
    column_3.remove();
    bird.remove();

    background(51);
  }

  drawSprites();
}

