
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,600,50);

	bobObject1 = new Bob(300,300,100);
	bobObject2 = new Bob(350,300,100);
	bobObject3 = new Bob(400,300,100);
	bobObject4 = new Bob(450,300,100);
	bobObject5 = new Bob(500,300,100);

	rope1 = new Rope(bobObject1.body,roof.body,-200,0);
	rope2 = new Rope(bobObject2.body,roof.body,-200,0);
	rope3 = new Rope(bobObject3.body,roof.body,-200,0);
	rope4 = new Rope(bobObject4.body,roof.body,-200,0);
	rope5 = new Rope(bobObject5.body,roof.body,-200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("darkGray");

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

