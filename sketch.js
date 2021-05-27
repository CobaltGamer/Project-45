const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
function preload(){

}

function setup() {
  createCanvas(600, 1200);
  engine = Engine.create();
  world = engine.world;
  
  wall1 = new Ground(10,277,20,565)
  wall2 = new Ground(10,923,20,565)
  wall3 = new Ground(590,277,20,565)
  wall4 = new Ground(590,923,20,565)  
  wall5 = new Ground(300,10,600,20)
  wall6 = new Ground(300,1190,600,20)
  wall7 = new Ground(270,100,20,70)
  wall8 = new Ground(330,100,20,70)
  wall9 = new Ground(270,1100,20,70)
  wall10 = new Ground(330,1100,20,70)
  wall11 = new Ground(300,300,20,50)
  wall12 = new Ground(300,900,20,50)
  wall13 = new Ground(300,600,20,100)
  wall14 = new Ground(100,100,20,70)
  wall15 = new Ground(145,76,70,20)
  wall16 = new Ground(187,100,20,70)
  wall17 = new Ground(400,100,20,70)
  wall18 = new Ground(445,76,70,20)
  wall19 = new Ground(487,100,20,70)
  wall20 = new Ground(100,1100,20,70)
  wall21 = new Ground(145,1124,70,20)
  wall22 = new Ground(187,1100,20,70)
  wall23 = new Ground(400,1100,20,70)
  wall24 = new Ground(445,1124,70,20)
  wall25 = new Ground(487,1100,20,70)
  wall26 = new Ground(50,300,100,20)
  wall27 = new Ground(50,900,100,20)
  wall28 = new Ground(550,300,100,20)
  wall29 = new Ground(550,900,100,20)
  wall30 = new Ground(200,320,20,120)
  wall31 = new Ground(151,380,120,20)
  wall32 = new Ground(400,320,20,120)
  wall33 = new Ground(449,380,120,20)
  wall34 = new Ground(200,880,20,120)
  wall35 = new Ground(151,820,120,20)
  wall36 = new Ground(400,880,20,120)
  wall37 = new Ground(449,820,120,20)

}

function draw() {
  background(0);
  Engine.update(engine);
  
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();  
  wall25.display();
  wall26.display();
  wall27.display();
  wall28.display();
  wall29.display();
  wall30.display();
  wall31.display();
  wall32.display();
  wall33.display();
  wall34.display();
  wall35.display();
  wall36.display();
  wall37.display();
  
  
  
  
  drawSprites();
}




