const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;
	
  ball1 = new bobObject(440,400,25);
  
  ball3 = new bobObject(470,400,25);
  
  ball2 = new bobObject(370,400,25);
  
  

  ball4 = new bobObject(570,400,25);
  
  ball5 = new bobObject(520,400,25);
   
  roof = new Roof(470,100,270,20);
  
  rope1 = new Rope(ball1.body,roof.body,-50,0);
  
  rope2 = new Rope(ball2.body,roof.body,-100,0);

  rope3 = new Rope(ball3.body,roof.body,0,0);
  

  rope4 = new Rope(ball4.body,roof.body,+100,0);
  
  rope5 = new Rope(ball5.body,roof.body,+50,0);
  
  Engine.run(engine);

}
function draw() {
  rectMode(CENTER);
 background(0,255,0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
}
function keyPressed(){
  if(keyCode === 32)
  {
    Matter.Body.applyForce(ball2.body,ball2.body.position,{x:-130,y:20});
    //Matter.Body.applyForce(ball4.body,ball4.body.position,{x:130,y:20});
    
  }
}


