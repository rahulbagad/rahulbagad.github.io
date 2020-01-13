class SpeedBreaker {
  constructor(flying) {
    this.r = 200;
    this.x = width;
    if(flying)
      this.y = height - this.r + 100;
    else
      this.y = height - this.r;
  }

  move() {
    this.x -= 16;
  }

  show() {
    image(currentObstacle, this.x, this.y, this.r, this.r);
  }
}
