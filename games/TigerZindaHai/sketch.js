let tiger;
let tigerImg;
let obstacleImg;
let backgroundImg;
let obstacles = [];
let startGame = false
let landingImg;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  tigerImg = loadImage('tiger.png');
  obstacleImg = loadImage('obstacle.png');
  backgroundImg = loadImage('road.gif');
  landingImg =  loadImage("home.jpeg");
}

function mousePressed() {
  obstacles.push(new SpeedBreaker());
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
    if (random(1) < 0.005) {
      obstacles.push(new SpeedBreaker());
    }

    background(backgroundImg);
    for (let t of obstacles) {
      t.move();
      t.show();
      if (tiger.hits(t)) {
        console.log('game over');
        noLoop();
      }
    }

    tiger.show();
    tiger.move();
  }
  else{
    background(landingImg);
  }
}
