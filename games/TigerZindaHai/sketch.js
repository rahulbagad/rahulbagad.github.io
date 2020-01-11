let tiger;
let uImg;
let tImg;
let bImg;
let obstacles = [];
let soundClassifier;

function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  soundClassifier = ml5.soundClassifier('SpeechCommands18w', options);
  uImg = loadImage('tiger.jpeg');
  tImg = loadImage('obstacle.png');
  bImg = loadImage('background.jpg');
}

function mousePressed() {
  obstacles.push(new Train());
}

function setup() {
  createCanvas(800, 450);
  tiger = new Tiger();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
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
    obstacles.push(new Train());
  }

  background(bImg);
  for (let t of trains) {
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
