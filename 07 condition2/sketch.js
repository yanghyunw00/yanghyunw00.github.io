
// 왼쪽 마우스누르면 빨간색, 오른쪽 마우스 누르면 초록색 냅두면 파란색
// function setup() {
//     createCanvas(300,300);
// }
// function draw() {
//      background(0);
//      if ( mouseIsPressed && (mouseButton === LEFT))
//      {
//            fill(255,0,0);
//      }
//       else if ( mouseIsPressed && (mouseButton === RIGHT))
//     {
//         fill(0,255,0);
//     }
//     else 
//     {
//     fill(0,0,255);
//     }
//     ellipse(width/2,height/2,200,200)
// }



// 버튼 구현 원 안에서만 클릭되고 클릭되면 색상이 변함

// let d, r = 100;

// function setup() {
//     createCanvas(300,300);
// }


// function draw () {
//    background(0);


//    d = dist(width/2,height/2, mouseX,mouseY)

//     if ((d<r) && mouseIsPressed && (mouseButton === LEFT))
//     {
//         fill(255,0,0);
//     } 
//     else if (( d<r) && mouseIsPressed && (mouseButton === RIGHT))
//     {
//         fill(0,255,0);
//     }
//     else 
//     {
//         fill(0,0,255);
//     }
// ellipse(width/2,height/2,200,200)
// }






//키보드 누를때마다 색 변함
// function setup() {
//     createCanvas(300,300);
// }
// function draw() {
//     background(0);
//     if (keyIsPressed && ((key ==='1') || (key == '0'))) { //key ==1도 됨
//         fill(255,0,0);
//     } else if (keyIsPressed && (key === 'a')){
//         fill(0,255,0);
//     } else {
//         fill(0,0,255);
//     }
//     ellipse(width/2,height/2,200,200);
// }

//숫자 누를때마다 원 사라지고 생기고함
// let degree = 90;
// function setup() {
//     createCanvas(300,300)
// }

// function draw() {
//  background(0);
//  if (keyIsPressed) {
//      if((key >= '0') && (key <= '9')) {
//          degree = map(key, '0', '9', 0, 360);
//      }
//  }
//  arc(width/2, height/2, 200, 200, 0, radians(degree));
// }


// 키보드따라 원 움직임
//let x = 150, y = 150;
// function setup() {
//     createCanvas(300,300);
// }
// function draw() {
//     background(0);
//     if(keyIsPressed) {
//         if(key === 'a' || keyCode === LEFT_ARROW) {
//             x = x-5;
//         } else if ( key ==='d' || keyCode === RIGHT_ARROW) {
//             x = x+5;
//         } else if ( key ==='w' || keyCode === UP_ARROW) {
//             y = y-5;
//         } else if ( key ==='s' || keyCode === DOWN_ARROW) {
//             y = y+5;
//         }
//     }
//     ellipse(x,y,100,100);
// }


// a 누르면 화면에 a 뜨고 등등, 안 누르면 none
// function setup() {
//     createCanvas(300,300);
//     textSize(100);
//     textAlign(CENTER);
// }

// function draw() {
//     background(0);
//     fill(255);
//     if (key === 'a') {
//         text('a', width/2, height/2);
//     } else if (key === 'b') {
//         text('b', width/2, height/2);
//     } else if (key === 'c') {
//         text ('c', width/2, height/2);
//     } else {
//         text('None', width/2, height/2);
//     }
// }



//switch문, abc따라 올라옴
// function setup() {
//     createCanvas(300,300);
//     textSize(100);
//     textAlign(CENTER);
// }

// function draw() {
//     background(0);
//     fill(255);

    // switch(key) {
    //     case 'a' :
    //         text('a', width/2, height/2);   // case'a' :, 
        //                                     // case'b' : 이렇게 쓸 수 있음
        //      break;
        // case 'b' :
//             text('b', width/2, height/2);
//             break;
//          case 'c' :
//              text('c', width/2, height/2);
//              break;
//         default:
//             text('None', width/2, height/2);
//             break;
//     }
// }





// let x = 20, y = 80, w = 460, h = 50;
// let size = 100
// let slider = 20;
// function setup() {
//     createCanvas(500,500);
// }

// function draw() {
//     background(0);
//     if (mouseIsPressed) {
//         if ((x <= mouseX && mouseX <= x+w) && (y <= mouseY && mouseY <= y+h)) {
//             slider = mouseX;
//             size = map(slider,x, x+w,100,width);
//         }
//     }
//     fill(0,0,255);
//     ellipse(width/2, height/2, size,size);
//     fill(255);
//     textSize(30);
//     textAlign(CENTER);
//     text('Size:' + int(size), width/2, 50);
//     rect(x,y,w,h);
//     fill(255,0,0);
//     rect(slider,y,10,h);
// }