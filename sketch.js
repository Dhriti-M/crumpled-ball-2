
var packageBody,ground,ground1,ground2,ground3,paperObject,ground,dust,dust2,dust3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	paperObject=new Paper(150,600,50,50);
	 ground=new Ground(400,700,800,20);
	ground1=new Ground(429,570,20,200);
	 ground2=new Ground(590,570,20,200);
	 ground3=new Ground(510,670,180,20);
	 

	 dust=new Dustbin(510,570,180,200);
	 
	 
	 
	 //dust3=new Dustbin(730,650,20,100);
	 

	Engine.run(engine);
  
}


function draw() {
	
    Engine.update(engine);
	background("white");
	ground.display();
	ground1.display();
    ground2.display();
	ground3.display();

	paperObject.display();
	dust.display();
	
	
	
	
	//fill("white");
	//rect();
	//rect();
	//rect();
	
	
	
	
	
	
  //dust3.display();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-175});
	}
}



