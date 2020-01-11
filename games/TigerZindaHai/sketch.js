let tiger;
let uImg;
let tImg;
let bImg;
let obstacles = [];

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  uImg = loadImage('tiger.png');
  tImg = loadImage('obstacle.png');
  bImg = loadImage('background.jpg');
}

function mousePressed() {
  obstacles.push(new SpeedBreaker());
}

function setup() {
  createCanvas(800, 450);
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
  if (key == ' ') {
    tiger.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    obstacles.push(new SpeedBreaker());
  }

  background(bImg);
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
