// 마우스 눌렸을때 색 채워짐 
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
// strokeWeight(0);
//   if (mouseIsPressed)
// {
//   fill(0);
// }

// else
// {
//   fill(255);
// }
// ellipse(mouseX,mouseY,80,80);
// }


//벽튕겨서 공 움직임
// let x = 0, y = 0, velocityA = 3, velocityB = 3;
// function setup() {
//   createCanvas(400,500);
//   background(0);
// }

// function draw () {

//   ellipse(x, y, 30,30); 

//   x += velocityA;
//   y += velocityB;

//   if( x < 0 || x > width)
//   {
//     velocityA *= -1;
//   }

//   if( y < 0 || y > height)
//   {
//     velocityB *= -1;
//   }
// }
  // if (x> width)
  // {
  //   velocity += -9;
  // }
  // if (x < 0)
  // {
  //   velocity += 9;
  // }



//라인 움직이다 100<x<200 에 닿으면 원 안그려짐, 저 부분 제외 원 그려짐
  // let x = 0, velocity = 1;
  // function setup() {
  //   createCanvas(300,300)
  // }

  // function draw() {
  //   background(0);
  //   stroke(255);
  //   line(x,0,x,height)
  //   x += velocity
  //   if ( x< 0 || x > width) {
  //     velocity *= -1;
  //   }

  //   if (x < 100 || x > 200) {
  //     ellipse(width/2, height/2,100,100);

  //   }
  // }



  //원 랜덤, 마우스 위치 보고 닿으면 색 바뀜
  // let x, y, d, r = 50.0, tx = 0.0, ty = 0.5;
  // function setup() {
  //   createCanvas(300,300);
  // }
  // function draw() {
  //   background(0);
  //   x = mouseX
  //   y = mouseY
  //   // x = noise(tx) * width
  //   // y = noise(ty) * height
  //   d = dist(width/2, height/2,x,y); //distance
  //   if(d < r) {
  //     fill(random(255), random(255), random(255),200);
  //   }
  //   ellipse(x,y,r,r);
  //   ellipse(width/2,height/2,r,r);
  //   tx += 0.01;
  //   ty += 0.01;
  // }

//   let interval = 0, current_time = 0, previous_time = 0;
//   function setup() {
//     createCanvas(300,300);
//   }



// 시간 맞춰서 원 색 바뀜
// function draw() {
//   background(0);
//   current_time = millis();
//   interval = current_time - previous_time;
//   if ( interval > 1000) {
//     previous_time = millis();
// fill(random(255), random(255), random(255))
//   }
//   ellipse(width/2, height/2, 200, 200);
// }




// 마우스 선 따라 공 움직임
// let x = 150;
// function setup() {
//   createCanvas(400,400);
// }

// function draw() {
//   background(0);
//   stroke(255);
//   line(mouseX, 0, mouseX, height);
//   ellipse(x, height/2, 50, 50);
//   if (mouseX > x) {
//     x++;
//   }
//   else {
//     x--;
//   }
// }

// function setup() {
//   createCanvas(300,300);
// }

// function draw() {
//   background(0);

//   fill(255,255,0)

//   if (mouseY < height/2 && mouseX < width/2 ){
// rect(0,0,width/2,height/2)
// } 
// else if ( mouseY < height/2 && mouseX > width/2) {
//   rect(width/2,0,width/2,height/2);
// } 

// else if ( mouseY > height/2 && mouseX < width/2) {
//   rect(0, width/2, width/2,height/2);
// } 

//  else {
//   rect(width/2, height/2,width/2,height/2);
// }

//}


//   if( x < 0 || x > width)
//   {
//     velocityA *= -1;
//   }

//   if( y < 0 || y > height)
//   {
//     velocityB *= -1;
//   }
// }
  // if (x> width)
  // {
  //   velocity += -9;
  // }
  // if (x < 0)
  // {
  //   velocity += 9;
  // }



  //벽돌 튕구기 게임
// let z = 400

// let x = 0, y = 0, velocityA = 3, velocityB = 3;
// function setup() {
//   createCanvas(600,500);
  
// }

// function draw() {
//   background(0);  

 
//   rect(mouseX,z,50,10);

//   ellipse(x,y,30,30);

//   x += velocityA;
//   y += velocityB;

// if( x < 0 || x > width)
//   {
//     velocityA *= -1;
//   }

//   if( y < 0 || y > 399)
//   {
//     velocityB *= -1;
//   }

// }


let checkPrev = 0;
let check = 0;

 function setup() {
   createCanvas(300,300);
   fill(random(255),random(255), random(255));
 }

 function draw() {
   background(0);
   display(mouseX,mouseY);
   print(mul(6,8));

}
function mul(x,y)
{
  return x*y;
}

function display(x,y) {
  if (y< height/2 && x < width/2 ){
    rect(0,0,width/2,height/2)
  check = 1;
 } 
  else if ( y < height/2 && x > width/2) {
    rect(width/2,0,width/2,height/2);
    check = 2;
  } 
 
  else if ( y > height/2 && x < width/2) {
   rect(0, width/2, width/2,height/2);
   check = 3;
  } 
 
   else {
    rect(width/2, height/2,width/2,height/2);
    check = 4;
  }
 
   if ( checkPrev != check){
  print("YES")
 fill(random(255), random(255), random(255));
 checkPrev = check;
 }
 
}
