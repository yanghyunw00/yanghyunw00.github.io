
let myNum = 30
console.log(myNum);
console.log(myNum+50);
console.log(myNum);
myNum = myNum+30; //재 선언
console.log(myNum);

//let myNum = 20 error

const yourNum = 20;
console.log(yourNum);
console.log(yourNum-1);
console.log(yourNum-2);
const PI = 3.14;
console.log(PI*4);

let HP = 100;
console.log(HP);
HP = HP-10;
console.log(HP);
const enemy = 10;

//yourNum = 40; error 
//console.log(yourNum);

function setup() {
  console.log("Hello, world!");
  createCanvas(300, 300);
  console.log("3");
  console.log(4);
  console.log("hello");
  console.log("hel)lo");
  //console.log("hel")lo"); error
  console.log('helloooo');
  console.log("hello"+5);
  console.log("score : " + myNum);
  console.log("score : " + "30");
  console.log("score : " + myNum+50);
  console.log(myNum+50);

}

function draw() {
  background(0);
  ellipse(50,50,100,100);
  //console.log("1")
  //console.log("hello")
}

