class Bullet {
    constructor(x,y,move) {
      this.x = x;
      this.y = y;
      this.velocity = 10;
      this.moving = move;
    }
    
   draw() {
        image(ch1bullet,this.x + 50, this.y + 50, 15, 15)
   }
        
    // update() {  // 왼쪽으로 슈팅
    //     this.x == this.velocity;
    //     print(this.x)
    // }

    // update1() { // 오른으로 슈팅
    //     this.x += this.velocity;
    //     print(this.x)
    // }

    move() {
      if(this.move == 0) {
        this.x += this.velocity
      } else if(this.move == 1) {
        this.x -= this.velocity
      }
    }

    reset() {
      this.x = - 10;
      this.y = - 10;
    }
}
  