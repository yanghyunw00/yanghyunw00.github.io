class Enemy1 { //left to right
    constructor() {
        this.r = 100;
        this.x = -50
        this.y = height - this.r;
        this.rand = int(random(3));
        if(this.rand == 0) { this.velocityX = -random(2,3); } 
        else if(this.rand == 1) { this.velocityX = random(2,3); } 
    }

    move() {
        this.x += this.velocityX
    
        if(this.x < -5) {
            this.x += this.velocityX = random(2,3)
        }
    }

    show() {
        image(elf,this.x, this.y, this.r, this.r)
//hit box        
        // fill(255, 50);
        // ellipseMode(CORNER);
        // ellipse(this.x+10, this.y+10, this.r-40, this.r);
    }

    reset() {
        this.r = 100;
        this.x = -50
        this.y = height - this.r;
        this.rand = int(random(3));
        if(this.rand == 0) { this.velocityX = -random(2,3); } 
        else if(this.rand == 1) { this.velocityX = random(2,3); } 
    }
}