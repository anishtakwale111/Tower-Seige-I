const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var box1, ground1;
var gamestate = "Play";
function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    circle_plygn = new Polygon(100,350,20);

    slingshot = new SlingShot(circle_plygn.body,200,150);
    
    ground1 = new Ground(500,520,235,7);
    ground2 = new Ground(800,300,235,7);
//First Level

    box1 = new Box(500,519,30,40);
    box2 = new Box(505,519,30,40);
    box3 = new Box(510,519,30,40);
    box4 = new Box(515,519,30,40);
    box5 = new Box(520,519,30,40);
    box6 = new Box(525,519,30,40);
    box7 = new Box(510,490,30,40);
    box8 = new Box(515,490,30,40);
    box9 = new Box(520,490,30,40);
    box10 = new Box(525,490,30,40);
    box11 = new Box(510,459,30,40);
    box12 = new Box(515,459,30,40);
    box13 = new Box(514,429,30,40);

//Second Level
    box14 = new Box(800,299,30,40);
    box15 = new Box(805,299,30,40);
    box16 = new Box(810,299,30,40);
    box17 = new Box(815,299,30,40);
    box18 = new Box(810,268,30,40);
    box19 = new Box(815,268,30,40);
    box20 = new Box(820,268,30,40);
    box21 = new Box(820,238,30,40);
}

function draw(){
    background(240,180,240);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    circle_plygn.display();
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    
}
function mouseReleased(){
    slingshot.fly();
    gamestate = "launchState";
}
function mouseDragged(){
    if(gamestate === "launchState")
    {
    Matter.Body.setPosition(circle_plygn.body, {x: mouseX , y: mouseY});
    }
}


function keyPressed(){
    if(keyCode === 32){
      slingshot.attach(circle_plygn.body);
      gamestate = "launchState";
}
    
}
