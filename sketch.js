var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var ROOF;
var bobdiameter=160;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new BOB(300,500,80);
	bobObject2 = new BOB(700,500,80);
	bobObject3 = new BOB(600,500,80);
	bobObject4 = new BOB(300,500,80);
	bobObject5 = new BOB(100,500,80);
    ROOF = new roof(400,100,800,100);
	rope1 = new ROPE(bobObject1.body,ROOF.body,-80,0); 
	rope2 = new ROPE(bobObject3.body,ROOF.body,-80,0);
	rope3 = new ROPE(bobObject2.body,ROOF.body,-80,0);
	rope4 = new ROPE(bobObject5.body,ROOF.body,80,0);
	rope5 = new ROPE(bobObject4.body,ROOF.body,80,0);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  

bobObject1.display();

bobObject2.display();

bobObject3.display();

bobObject4.display();

bobObject5.display();
ROOF.display();
rope1.display();
rope1.display();
rope3.display();
rope4.display();
rope5.display();
  drawSprites();
 
}



