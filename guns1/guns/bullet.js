class Bullet {
    constructor(x,y) {
      this.x = x;
      this.y = y;
      this.velocity = 15;
      
    }
    
draw() {
  image(ch1bullet,this.x + 40, this.y + 50, 15, 15)
}

update() {//shoot
  this.x += this.velocity;
}

reset() {
  this.x = - 100;
  this.y = - 100;
  }
}
  