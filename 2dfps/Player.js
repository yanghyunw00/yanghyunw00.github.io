class Player {
    constructor() {
      this.r = 100;
      this.x = 650 ;
      this.y = height - this.r;
      this.k = 0;
      this.fallingSpeed = 3;
  //  this.x1 = this.x
    
    }

jump()
   {
      if (this.y == height - this.r) {
          this.k =- 40;
      }
    }


move() {
      this.y += this.k;
      this.k += this.fallingSpeed;
      this.y = constrain(this.y, 0, height - this.r);
   

    if(keyIsDown(LEFT_ARROW))
  {
    push();
    imageMode(CENTER)
    image(backgroundForest,width/2,height/2,width,height);
    pop();
    this.x = this.x -5;
    if(this.x < 0) {
        this.x = this.x + 5
    }
    image(ch1run1, this.x, this.y, 100,100 );
    
   
  }

   if(keyIsDown(RIGHT_ARROW))
  {
    push();
    imageMode(CENTER)
    image(backgroundForest,width/2,height/2,width,height);
    pop();
    this.x = this.x +5;
    if(this.x > 1300) {
        this.x = this.x -5;
    }
    image(ch1run, this.x, this.y, 100,100);
  }
}

show() {
      image(ch1stand, this.x, this.y, this.r, this.r);
     // hit box
      fill(255, 50);
      ellipseMode(CORNER);
      ellipse(this.x, this.y, this.r-50, this.r);
    }
    
shoot(bullet) {
      bullet.push(new Bullet(this.x,this.y));
      
    }
 
  }