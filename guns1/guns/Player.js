class Player {
    constructor() {
      this.r = 100;
      this.x = 650 ;
      this.y = height - this.r;
      this.k = 0;
      this.fallingSpeed = 3;
      bullet = new Bullet(this.x, this.y);
      this.direction = 0;
      this.sight = 0;
  }

jump()
{
  if (this.y == height - this.r) 
  {
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
  image(ch1leftrun, this.x-30, this.y, 100,100 );

//limit the side
this.x = this.x -5;
  if(this.x < 0) {
     this.x = this.x + 5
  }
}

if(keyIsDown(RIGHT_ARROW))
{
  push();
  imageMode(CENTER);
  image(backgroundForest,width/2,height/2,width,height);
  pop();
  image(ch1rightrun, this.x-30, this.y, 100,100);

// limit the side
  this.x = this.x +5;
  if(this.x > 1300) {
     this.x = this.x -5;
    }
  }
}

show() {
  if(this.sight==1) 
  {
    image(ch1standleft, this.x-30, this.y, this.r, this.r);
  }
  else{
    image(ch1stand, this.x, this.y, this.r, this.r);
  }
// hit box
  // fill(255, 50);
  // ellipseMode(CORNER);
  // ellipse(this.x, this.y, this.r-50, this.r);
  }
}