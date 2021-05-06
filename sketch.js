const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1 ;
var stone1,stone2
var rubber1;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron1 = new iron(30,200,40,40);
  stone1 = new Stone(40,50,10,10);
  stone2 = new Stone(20,60,10,10);
rubber1 = new Rubber(600,300,80,80);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
iron1.display();
    stone1.display();
 stone2.display();
 rubber1.display();
}