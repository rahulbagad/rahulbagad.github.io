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
    if(obstacleCounter % 2 == 0)
      image(obstacleImg1, this.x, this.y, this.r, this.r);
    else
      image(obstacleImg2, this.x, this.y, this.r, this.r);
    obstacleCounter=obstacleCounter + 1;
  }
}
