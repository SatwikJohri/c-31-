const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16;

var ground;

 var score = 0;

function preload(){
  polygon_img = loadImage("hexa6.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,300,50,50);
  box2 = new Box(250,300,50,50);
  box3 = new Box(300,300,50,50);
  box4 = new Box(350,300,50,50);
  box5 = new Box(400,300,50,50);
  box6 = new Box(450,300,50,50);
  box7 = new Box(500,300,50,50);
  stroke("yellow");
  box8 = new Box(250,250,50,50);
  box9 = new Box(300,250,50,50);
  box10 = new Box(350,250,50,50);
  box11 = new Box(400,250,50,50);
  box12 = new Box(450,250,50,50);
  box13 = new Box(300,200,50,50);
  box14 = new Box(350,200,50,50);
  box15 = new Box(400,200,50,50);
  box16 = new Box(350,150,50,50);

  ground = new Ground(100,393,1400,10);

  var polygon_options = {
    'restitution':0.02,
     'friction':0.5,
      'density':1.2
  }

  polygon = Bodies.circle(50,200,20,polygon_options);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  
  fill("white");
  text(mouseX+","+mouseY,50,50);
  fill("white");
  text("SCORE : "+score,700,40);
  fill("red");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("orange");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("yellow");
  box13.display();
  box14.display();
  box15.display();
  fill("white");
  box16.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();



  ground.display(); 
  slingShot.display();

  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
      slingShot.attach(this.polygon);
  }
}




