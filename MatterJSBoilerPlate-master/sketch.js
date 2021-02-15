
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roofObject
var Bob1Object
var Bob2Object
var Bob3Object
var Bob4Object
var Bob5Object
var constraint1
var constraint2
var constraint3
var constraint4
var constraint5

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Bob1Object = new Bob(300,350);
	Bob2Object = new Bob(350,350);
	Bob3Object = new Bob(400,350);
	Bob4Object = new Bob(450,350);
	Bob5Object = new Bob(500,350);
	roofObject = new Roof()

	constraint1= new Chain(Bob1Object.body,roofObject.body,-50*2,0);
	constraint2= new Chain(Bob2Object.body,roofObject.body,-25*2,0);
	constraint3= new Chain(Bob3Object.body,roofObject.body,-0*2,0);
	constraint4= new Chain(Bob4Object.body,roofObject.body,25*2,0);
	constraint5= new Chain(Bob5Object.body,roofObject.body,50*2,0);
	Engine.run(engine);  
}


function draw() {
  	rectMode(CENTER);
  	background(150);
	Bob1Object.display();
	Bob2Object.display();
	Bob3Object.display();
	Bob4Object.display();
	Bob5Object.display();
	roofObject.display();

	constraint1.display();
	constraint2.display();
	constraint3.display();
	constraint4.display();
	constraint5.display();
  	drawSprites();
 keyPressed();
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(Bob1Object.body,Bob1Object.body.position,{x:10,y:10}); } 
} 


