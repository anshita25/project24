
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ground1;
var ground2;
var ground3;
var ball;
function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	ground=new Ground(600,height,1200,20);
	ground1=new Paper(890,390,200,20);
	World.add(world,ground1);

	ground2=new Paper(1000,390,20,100);
	World.add(world,ground2);

	ground3=new Paper(800,390,20,100);
	World.add(world,ground);   
    ball=new Cball(150,220,25)
	
  Engine.run(engine);


  
}


function draw() {
  Engine.update(engine);

  background(0);
  ground.display()
  ground1.display()
  ground2.display()

  ground3.display()
  ball.display()
}


function keyPressed(){
	if(keyCode === UP_ARROW)
	{
	  Body.applyForce(ball.body,ball.body.position,{x:115,y:-115});
	}
  }

