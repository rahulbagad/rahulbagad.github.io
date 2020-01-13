class SpeedBreaker {
  constructor(flying) {
    this.r = 200;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 16;
  }

  show() {
    image(currentObstacle, this.x, this.y, this.r, this.r);
  }
}
