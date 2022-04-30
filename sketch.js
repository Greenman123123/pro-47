var bg;
var turtle;
var level1
var level2
var gameState = "level1"

function preload() {
  bgImg = loadImage("assets/bg.png")
  turtleImg = loadImage("assets/turtle.png")
  can1Img = loadImage("assets/can1.png")
  can2Img = loadImage("assets/can2.png")
  can3Img = loadImage("assets/can3.png")
  can4Img = loadImage("assets/can4.png")
  can5Img = loadImage("assets/can5.png")
  can6Img = loadImage("assets/can6.png")
  endImg = loadImage("assets/portal.png")

  // bk_song = loadSound("assets/music.mp3")

}
function setup() {
  createCanvas(600, 600);
  bg = createSprite(300, 300)
  bg.addImage(bgImg)
  bg.scale = 1.5

  // bk_song.play();
  // bk_song.setVolume(0.5);

  level1 = new Level1();
  
  
}


function draw() {
  
  if(gameState === "start"){
    background(51);
  }

  if(gameState === "level1"){
    level1.display()

  }

  if(gameState === "level2"){
    level2.display()
  }
// level 2 error 
  
  
}


