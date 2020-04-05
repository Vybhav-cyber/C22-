const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground, ball;
function setup() {  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  object = Bodies.rectangle(200,100,50,50);
  World.add(world, object);
   
  var ground_options = { 
    isStatic: true
  }
  ground = Bodies.rectangle(200, 350, 400, 10, ground_options);
  World.add(world, ground);
  
  var ball_options = {
    restitution: 1.0
  }
  
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world, ball);
  //createSprite(200, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rect(object.position.x, object.position.y, 50, 50);
  rectMode(CENTER);
 //rect(200,200, 50, 50);
 rect(ground.position.x, object.position.y, 400, 20);
 circle(ball.position.x, ball.position.y, 20);
  drawSprites();
}