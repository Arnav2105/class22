const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object1, object2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground = {
    isStatic:true
  }
 object1 = Bodies.rectangle(200,390,400,20,ground);
 World.add(world,object1);
 var ball = {
  restitution:2.0
}
object2 = Bodies.circle(200,100,20,ball);
World.add(world,object2);
 console.log(object1);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS); 
  ellipse(object2.position.x, object2.position.y, 20, 20);
  rect(object1.position.x,object1.position.y,400,20);
}