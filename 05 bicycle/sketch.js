// let x = 75;
// let y = 50;
// let d1 = 80;
// let d; //line x1
// let x2 = 10; //line2 = 80;
// let x1 = 10;
// let d = 10; // height of line
// let c = 0;
// let r = 0;
// let g = 0;
// let b =0;
//  function setup() {
//  createCanvas(300, 300);

//  }

//  function draw() {
 
//  background(220);
 
//  c=c+20;

// fill(c,g,b);
// ellipse(x1,x2,d);
// d++;
// c = c+5;
// c %= 255;
// d %= 300;

// x1++;
// x2++;

// x1 %= 300;
// x2 %= 300;


let x = 300, y = 200, c = 0, d = 100;

function setup() {
  createCanvas(700, 400);
}
 


function draw() {
  background(0);

  stroke(255);
  fill(255);
  textSize(30);
text("distance"+x, 100,50);
text("color :" + c, 400, 50);


push();
  stroke( 255, 255, 0);
     strokeWeight(5);
   line(0, y+d/2, 700, y+d/2);

  fill(c, c+30,c+100);
  ellipse(x,y,d,d);
  ellipse(x+d,y,d,d);

  noFill();
  triangle(x,y,x+d/2,y-d,x+d,y);
  pop();
x +=5;
  x %= 700;

  c +=15;
   c %=255;
   
  //  print("distance\"영희야 안녕\"\n\"메롱\" ")

 
  }




//   line(x1, y, x2, y);
//   line(x1, y*2, x2, y*2);
//   line(x1, y*3, x2, y*3);
//   line(x1, y*4, x2, y*4);
 
// y = y+5;
// print(y);
// y %= 300;
// console.log();
// print("\n"+y)

//   ellipse(x, y, d1, d2);
//   x = x+100
//   ellipse(x, y, d1, d2);
//   x = x+200
//   ellipse(x, y, d1, d2);






