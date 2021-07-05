const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper,dustbin;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    paper = new paper(600,height,1200,20)
    dustbin = new Hammer(10,100);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    paper.display();
    dustbin.display();

    
 
}