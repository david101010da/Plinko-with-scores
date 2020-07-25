var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

  var score = 0;

  

var particles = [];
var plinkos = [];
var divisions =[];

var gameState = "END";

var divisionHeight=300;
var particle;
var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
  
  
  




   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)


  noStroke();
  textSize(35)
  fill("white")
  text("50  ", 20, 650)


  noStroke();
  textSize(35)
  fill("white")
 text("150  ", 90, 650)

 noStroke();
  textSize(35)
  fill("white")
  text("300  ", 170, 650)

  noStroke();
  textSize(35)
  fill("white")
  text("100  ", 250, 650)

  noStroke();
  textSize(35)
  fill("white")
  text("50  ", 340, 650)

  noStroke();
  textSize(35)
  fill("white")
  text("500  ", 410, 650)

  noStroke();
  textSize(35)
  fill("white")
  text("300  ", 490, 650)

  noStroke();
  textSize(35)
  fill("white")
  text("150  ", 570, 650)

  noStroke();
  textSize(35)
  fill("white")
  text("50  ", 660, 650)
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}


function mousePressed(){
  if(gameState!=="END"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}