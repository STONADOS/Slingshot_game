const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var gamestate = "on sling";

var ground;
var pentagon;
var slingshot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var boxs1, boxs2, boxs3, boxs4, boxs5, boxs6, boxs7, boxs8, boxs9;
var platform, platform2;
var score = 0;

function preload(){
  backgroundimage = loadImage("sprites/back.png")
}

function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700, 680, 14000, 40)

    pentagon = new player(200, 350, 50, 50)

    slingshot = new SlingShot(pentagon.body, {x:200, y:350})

    box1 = new boxes(330+250, 235);
    box2 = new boxes(380+250, 235);

    box3 = new boxes(430+250, 285);
    box4 = new boxes(480+250, 235);
    box5 = new boxes(530+250, 235);
    //
    box6 = new boxes(380+250, 185);
    box7 = new boxes(430+250, 235);
    box8 = new boxes(480+250, 185);
    // 
    box9 = new boxes(430+250, 185);
    // 
    boxs1 = new boxes(330+650, 235);
    boxs2 = new boxes(380+650, 235);
    boxs3 = new boxes(430+650, 285);
    boxs4 = new boxes(480+650, 235);
    boxs5 = new boxes(530+650, 235);
    //
    boxs6 = new boxes(380+650, 185);
    boxs7 = new boxes(430+650, 235);
    boxs8 = new boxes(480+650, 185);
    //
    boxs9 = new boxes(430+650, 185);

    platform = new Ground(680, 580, 350, 40)

    platform2 = new Ground(1080, 380, 325, 40)

    

}

function draw(){
    background(backgroundimage);
    Engine.update(engine);

    ground.display();
    pentagon.display();
    box1.display();

    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    platform.display();
    boxs1.display();
    boxs2.display();
    boxs3.display();
    boxs4.display();
    boxs5.display();
    boxs6.display();
    boxs7.display();
    boxs8.display();
    boxs9.display();
    platform2.display();
    slingshot.display();

    textSize(30);
    strokeWeight(2);
    fill("purple")
    stroke("orange")
    text("DRAG THE PENTAGON TO SLING AND PRESS SPACE TO ATTACH IT BACK TO THE SLINGSHOT !!", 0, 80)
    text("PRESSSS 'R' TO PLAY AGAIN", 500, 120)

    fill("blue")
    text("PENTAGONS USED <" + score + ">" , 30, 190)
    
  }

function mouseDragged(){
    if (gamestate == "on sling"){
      Body.setPosition(pentagon.body, {x:mouseX, y:mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    if (gamestate == "on sling"){
      score += 1;
    }
    gamestate = "launched";
}

function keyPressed(){
  if(keyCode == 32 && gamestate == "launched"){
    Body.setPosition(pentagon.body, {x:200, y:350});
    slingshot.attach(pentagon.body);
    gamestate = "on sling";
  }
  if (keyCode == 82){

    World.remove(world, box1.body);
    World.remove(world, box2.body);
    World.remove(world, box3.body);
    World.remove(world, box4.body);
    World.remove(world, box5.body);
    
    // 
    // 
    World.remove(world, box6.body);
    World.remove(world, box7.body);
    World.remove(world, box8.body);
    
    World.remove(world, box9.body);

    World.remove(world, boxs1.body);
    World.remove(world, boxs2.body);
    World.remove(world, boxs3.body);
    World.remove(world, boxs4.body);
    World.remove(world, boxs5.body);
    
    // 
    // 
    World.remove(world, boxs6.body);
    World.remove(world, boxs7.body);
    World.remove(world, boxs8.body);
    
    World.remove(world, boxs9.body);

    // Body.setVelocity(box1.body, {x:0, y:5});
    // Body.setVelocity(box2.body, {x:0, y:5});
    // Body.setVelocity(box3.body, {x:0, y:5});
    // Body.setVelocity(box4.body, {x:0, y:5});
    // Body.setVelocity(box5.body, {x:0, y:5});
    // Body.setVelocity(box6.body, {x:0, y:5});
    // Body.setVelocity(box7.body, {x:0, y:5});
    // Body.setVelocity(box8.body, {x:0, y:5});
    // Body.setVelocity(box9.body, {x:0, y:5});
    box1 = new boxes(330+250, 235);
    box2 = new boxes(380+250, 235);

    box3 = new boxes(430+250, 285);
    box4 = new boxes(480+250, 235);
    box5 = new boxes(530+250, 235);
    //
    box6 = new boxes(380+250, 185);
    box7 = new boxes(430+250, 235);
    box8 = new boxes(480+250, 185);
    // 
    box9 = new boxes(430+250, 185);
    // 
    boxs1 = new boxes(330+650, 235);
    boxs2 = new boxes(380+650, 235);
    boxs3 = new boxes(430+650, 285);
    boxs4 = new boxes(480+650, 235);
    boxs5 = new boxes(530+650, 235);
    //
    boxs6 = new boxes(380+650, 185);
    boxs7 = new boxes(430+650, 235);
    boxs8 = new boxes(480+650, 185);
    //
    boxs9 = new boxes(430+650, 185);

    Body.setPosition(pentagon.body, {x:200, y:350});
    slingshot.attach(pentagon.body);
    gamestate = "on sling";

  }
}