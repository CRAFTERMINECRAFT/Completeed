// global variables
var spiderman, spiderman_img, backgrnd_img, buildings, buildings_img;
var ground;
var bkgrnd;
var ob1, ob2, ob3;
var ob1_img, ob2_img, ob3_img;
var score = 0;
var gameState = 0;
var restart, restart_img;
//var startup, startup_img;
var gameoverSound1;






//function preload
function preload(){
  spiderman_img = loadImage("spiderman.png");
  backgrnd_img = loadImage("back1.jpg");
  buildings = loadImage("back2.jpg");
  ob1_img = loadImage("b2.png");
  ob2_img = loadImage("b3.png");
  ob3_img = loadImage("b1.png");
  restart_img = loadImage("restart2.png");
  gameoverSound1 = loadSound("gameove.mp3");
  //startup_img = loadImage("startupppp.png");
  
}
//fuction setup
function setup() {
  createCanvas(600, 400);
  //creating creating Canvas
  obstaclesGroup = new Group();
  //ext("ERROR", 00,350)
  // bkgrnd = createSprite(300,250,600,400);
  //  bkgrnd.addImage(backgrnd_img);
  //  bkgrnd.scale = 5
  //  bkgrnd.velocityX = -6
   
  
  // bkgrnd.x = bkgrnd.width/2
  text(score, 500,20)
  // startup

  // startup = createSprite(310,200,600,400);
  // startup.addImage(startup_img);
  // startup.scale = 0.5
  //spiderman
  spiderman = createSprite(50,100,50,50);
  spiderman.addImage(spiderman_img);
  spiderman.scale = 0.2

  // restart srpite creation
  restart = createSprite(300,250,50,50);
  restart.addImage(restart_img);
  restart.visible = false;
  restart.scale = 0.3;
  
  //spiderman.velocityX = 6
  ground = createSprite(300,380,600,10);
  ground.visible = false;
 
}
//Draw function which is repitive function of our programme
function draw() {
  background("blue");
  //text("score " + score, 200,200)
  // IF GAME STATE IS 0 Then what could possibly be go wrong....?
  // if(keyDown(space)){
  //   //startup.visible = false
  //   //gameState = 0;
  // }
  
  text(score, 500,20)
  if(gameState === 0){
    
    if(keyDown("space")){
      spiderman.velocityY = -6;
      //console.log("hello")
    }
    if(keyIsDown(LEFT_ARROW)){
      spiderman.velocityX = -6
    }
    if(keyIsDown(RIGHT_ARROW)){
      spiderman.velocityX = 6;
    }
    //giving velocity to the spiderman
    spiderman.velocityY = spiderman.velocityY+0.7;

  
    // if(bkgrnd.x<0){
    //   bkgrnd.x = bkgrnd.width/2
    // }
    // TEXT
    //text(score + "SCORE" , 500,20)
    // IF FOR SPIDER'S SCORE
    if(spiderman.isTouching(obstaclesGroup)){
      score = score+20;
      console.log(score)
  }
  // Spawn obstacles
  spawnObstacles();
  
  //spiderman to collide
  spiderman.collide(obstaclesGroup);
  // game changer
  if(spiderman.y>400){
   gameState = 1;
  }
}
else if(gameState === 1){
  gameoverSound1.play()
  text(score, 500,20)
  restart.visible = true;
  spiderman.velocityY = 0;
  obstaclesGroup.setVelocityXEach(0);
  text("GAME OVER", 200,200);
  //if mouse pressend on restart `
  if(keyDown("space")){
    reset()
    //cosnsole logging
    console.log("done")
  }
}

//drawing sprites on canavas
  drawSprites();
  
  }
// spawn obstacles
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,350,20,30);
    obstaclesGroup.add(obstacle);
    obstacle.scale = 0.5
    obstacle.setCollider('circle',0,0,45)
    obstacle.liftime = 100;
    // obstacle.debug = true
  
    obstacle.velocityX = -6
    
    //generate random obstacles
    var rand = Math.round(random(1,2));
    //generating random obstacles as per show in the outout
    switch(rand) {
      case 1: obstacle.addImage(ob1_img);
              break;
      case 2: obstacle.addImage(ob2_img);
              break;
      default: break;
    }
  }
}
// function reset
function reset(){
  spiderman.x = 50
    spiderman.y = 100
  restart.visible = false;
  gameState = 0;
  obstaclesGroup.destroyEach()
  score = 0;
}