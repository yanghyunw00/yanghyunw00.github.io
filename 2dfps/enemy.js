class Enemy {
    constructor() {
        this.r = 100;
        this.x = width+300;
        this.y = height - this.r;
        this.rand = int(random(2));
        if(this.rand == 0) { this.velocityX = random(0,2); } 
        else if(this.rand == 1) { this.velocityX = -random(0,2); } 
        
    }

    move() {
        this.x += this.velocityX;
     //   this.x -= 3;
     //   if (random(1) < 0.008) {
       //     mob1.push(new Enemy());
       //   }
    }

    show() {
        image(elf2,this.x, this.y, this.r, this.r)
        fill(255, 50);
        ellipseMode(CORNER);
        ellipse(this.x+10, this.y+10, this.r-40, this.r);
    }

    reset() {
        this.r = 100;
        this.x = width;
        this.y = height - this.r;
        this.rand = int(random(2));
        if(this.rand == 0) { this.velocityX = random(0,2); } 
        else if(this.rand == 1) { this.velocityX = -random(0,2); } 
    }
}