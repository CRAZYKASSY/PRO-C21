var wall1;
var wall2;
var wall3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	wall1 = new Walls (width/2,670,width,20);
	wall2 = new Walls (1100,600,20,120);
	wall3 = new Walls (850,600,20,120);

    var optionsball = {
		isStatic:false,
		restitution: 0.3,
		friction:0,
		density:1.2,
	}
	fill (255);
	ball = Bodies.circle (100,100,20,optionsball);
	World.add (world,ball);
	ellipseMode (RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  wall1.show ();
  wall2.show ();
  wall3.show ();
  ellipse (ball.position.x,ball.position.y,20);
  drawSprites();
 
}

function keyPressed (){
  if (keyCode===UP_ARROW){
	Matter.Body.applyForce (ball,{x:-0.01,y:-0.01},{x:70,y:9.5});
  }

}


