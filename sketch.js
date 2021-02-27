
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone, rubber
var hammer
var plane 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone  = new Stone(600, 600, 100, 100)
rubber = new Rubber(400, 600, 30, 30)
plane = new Plane(400, height, 800, 20)
hammer = new Hammer(200, 200, 20, 100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Matter.Body.setPosition(hammer.body, {x: mouseX , y: mouseY});
  drawSprites();
  stone.display();
  plane.display();
  rubber.display();
  hammer.display();
 
}



