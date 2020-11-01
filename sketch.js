const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
  box = new Box(100,250,50,70);
  box2 = new Box( 120,350,50,50)
  ground = new Ground();
    }

function draw(){
    background(0);
    Engine.update(engine);
  box.display();
  box2.display();
  ground.display();
    }