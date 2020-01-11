class SpeedBreaker {
  constructor() {
    this.r = 200;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 16;
  }

  show() {
    image(obstacleImg, this.x, this.y, this.r, this.r);
  }
}
