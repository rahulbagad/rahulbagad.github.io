let tiger;
let tigerImg;
let obstacleImg1;
let obstacleImg2;
let obstacleImg3;
let obstacleImg4;
let backgroundImg;
let obstacles = [];
let startGame = false
let landingImg;
let obstacleCounter;
let score = 0
let obstacleList = []
let currentObstacle;
function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  tigerImg = loadImage('tiger.png');
  obstacleImg1 = loadImage('obstacle1.gif');
  obstacleImg2 = loadImage('obstacle2.png');
  backgroundImg = loadImage('road.gif');
  landingImg =  loadImage("home.jpeg");
  obstacleImg3 = loadImage("obstacle3.png");
  obstacleImg4 = loadImage("obstacle4.png");
  obstacleList.push(obstacleImg1, obstacleImg2, obstacleImg3, obstacleImg4);
  obstacleCounter = 0;
}

function mousePressed() {
  obstacles.push(new SpeedBreaker(true));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Tiger();
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  if (results[0].label == 'up') {
    tiger.jump();
  }
}

function keyPressed() {
  if(startGame === false)
    startGame = true;
  else{
    if (key == ' ') {
        tiger.jump();
      }
  }
}

function draw() {

  if(startGame){
    if (random(1) < 0.008) {
      updateScore();
      currentObstacle = obstacleList[Math.floor(Math.random() * obstacleList.length)]
      obstacleCounter = obstacleCounter + 1;
      obstacles.push(new SpeedBreaker());
    }

    background(backgroundImg);
    for (let t of obstacles) {
      t.move();
      t.show();
      if (tiger.hits(t)) {
        console.log('game over');
        noLoop();
        alert("Khel Katam! Tiger Mar Gaya! Your score: " + score);
        location.reload();
      }
    }

    tiger.show();
    tiger.move();
  }
  else{
    background(landingImg);
  }
}

function updateScore(){
  score =score + 1;
}