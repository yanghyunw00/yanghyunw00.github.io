//global variable

// let x = 0;
// function setup() {
//   createCanvas(400, 400);
//   background(220);
// }

// function draw() {
//   // local variable
//  let y = 150;
// let d = 30;
// ellipse(x, y, d, d);
// x++;
// print(x);

// }


// let x = 30, y = 30;
// let velocity_x = 1, velocity_y = 1;
// let accel_x = 0.2, accel_y = 0.2;
// let friction = 0.99;

// function setup() {
//     createCanvas(400,400);
//     frameRate(60);
// }

// function draw() {
//   background(200);
//   ellipse(x,y,30,30);

// // velocity_x += accel_x;
// // velocity_y += accel_y;

// velocity_x *= friction;
// velocity_y *= friction;

//   x += velocity_x;
//   y += velocity_y;
//   textSize(15);
//   text(frameCount + ' : ' + frameRate(),10,30);

// }

// let x = 150, y = 150;
// let d = 30;
// let theta = 0.0;
// let degree = 0.0;

// function setup() {
//   createCanvas( 400,400);
//   frameRate(60);
// }

// function draw() {
//   background(200);
//   let theta = radians(degree);
//   let y = height/2 + height/2 * sin(theta);
  
//   // let d = map(sin(theta), -1, 1, 0 ,height);
  
//   line(x, y-d, x, y+d);
//   ellipse(x, y, d, d);
//   theta += 0.1;
//   degree += 6;
// }


// function setup() {
//   createCanvas(500,500);
//   background(0);
// }

// function draw() {

   
//   //strokeWeight(random(50));
//   stroke(random(255), random(255), random(255));
//   //print(random(255));

//   line(pmouseX,pmouseY,mouseX,mouseY,30);

//   point(mouseX, mouseY);

//  //print(mouseX,mouseY);
// }



let theta = 0.0,  r = 0;
function setup() {
    createCanvas(400,400);
    background(0);
}

function draw() {   
    
    let x = width/2 + r * cos(theta);
    let y = height/4 + r * sin(theta);

    ellipse(x-y, y, 30,30);
    ellipse(x+y, y, 30,30);

    theta += 0.05;
    r += 0.1;
}