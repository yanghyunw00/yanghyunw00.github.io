let ch1stand, ch1run,ch1run1, ch1bullet,backgroundForest, thumbnail,elf,elf2;
let player = [];
let bullet = [];
let bulletcheck = [];
let bulletNum = 4;

let mob1 = [];
let mob2 = [];
let mob1check = [];
let mob2check = [];

let mob1Num = 15;
let mob2Num = 15;

let USERHP = 100;
let SCORE = 0;
let playcheck = 0;

let button;

function setup() {
  button = createButton('Start Game');
   
    createCanvas(1400,700) 
    background(0);

    push();
    imageMode(CENTER);
    image(thumbnail,width/2,height/2,width,height);
    pop();

    player = new Player;

    for(let i = 0; i<bulletNum; i++)
    { 
      bullet[i] = new Bullet();
      bulletcheck[i] = 0;
    }

    for(let i = 0; i < mob1Num; i++)
      { 
        mob1[i] = new Enemy();
        mob1check[i] = 0;
      }
    for(let i = 0; i<mob2Num; i++)
      { 
        mob2[i] = new Enemy1();
        mob1check[i] = 0;
      }
  
}

function preload() {
    ch1stand = loadImage('assets/ch1stand.png');
    ch1run = loadImage('assets/ch1run.png');
    ch1run1 = loadImage('assets/ch1run1.png');
    ch1bullet = loadImage('assets/ch1bullet.png');
    backgroundForest = loadImage('assets/backgroundForest.png')
    thumbnail = loadImage('assets/thumbnail.png')

    elf = loadImage('assets/elf.png')
    elf2 = loadImage('assets/elf2.png')

    fontBolic = loadFont('assets/bolicfont.ttf');

    gunSound = loadSound('assets/gunsound.mp3');
}

function touchStarted() {
  getAudioContext().resume();
}

function draw() {
  
    background(0);
    push();
    imageMode(CENTER)
    image(backgroundForest,width/2,height/2,width,height);
    pop();
   
    player.show();
    player.move();
    textPrint();
    bulletCheck();
    mob1Check();
    mob2Check();
    MeMob1Check();
    MeMob2Check();
    BulletMob1();
    BulletMob2();
    Finish();

    for(let i=0; i <bullet.length; i++)
    {
      bullet[i].draw();
      bullet[i].move();
      //bullet[i].update();
    }

    for(let m of mob1) {
      m.move();
      m.show(); 
    }

    for(let m1 of mob2) {
      m1.move();
      m1.show(); 
    }
}

function bulletCheck()
{
  for(let i = 0; i<bulletNum; i++)
  { 
    bullet[i].draw();
    bullet[i].move();
   //bullet[i].update();
    
  }            
  for(let i = 0; i<bulletNum; i++)
  { 
    if((bullet[i].x > width) || (bullet[i].x < 0))
    {
      bulletcheck[i] = 0;
    }
  } 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        player.jump();
    }

    if (keyCode == '16') { // shift
     // gunSound.play();
      for(let i = 0; i<bulletNum; i++)
      {
        
        if(bulletcheck[i] == 0)
        { 
          bullet[i].moving == 0 
          bullet[i].x = player.x;
          bullet[i].y = player.y;
          bulletcheck[i] = 1;
          break;
        }
      }        
    }
    if ((keyCode == '16') && (keyCode === RIGHT_ARROW)) { 
      
       for(let i = 0; i<bulletNum; i++)
       {
         
         if(bulletcheck[i] == 0)
         {
          // bullet[i].x += bullet[i].velocity 
          bullet[i].moving == 1
           bullet[i].x = player.x;
           bullet[i].y = player.y;
           bulletcheck[i] = 1;
           break;
         }
       }        
     }

    if(key == 'r')
    {
      reset();
    }
}

function textPrint()
{
  push();
  fill(0);
  textFont(fontBolic);
  textSize(35);
  push();
  textAlign(RIGHT)
  text("SCORE : "+SCORE, width-40, 40);
  pop();
  text("HP : "+USERHP, 80, 40);
  pop();
}

function mob1Check() {
  let i = 0;
  while(i < mob1Num) {
    
    mob1[i].show();
    mob1[i].move();
    i++;
  } for(let i = 0; i < mob1Num; i ++) {
    if(mob1[i].x < 0) {
       mob1[i].reset();
    }
  }
}

function mob2Check() {
  let i = 0;
  while(i < mob2Num) {
    mob2[i].show();
    mob2[i].move();
    i++;
  } for(let i = 0; i < mob2Num; i ++) {
    if(mob2[i].x > width) {
       mob2[i].reset();
    }
  }
}

function MeMob1Check() {
  for(let i = 0; i < mob1Num; i ++) {
    let dis = 100;
    dis = dist(player.x, player.y, mob1[i].x, mob1[i].y);
    if(dis < player.r-50) {
      fill(255,255,0);
      USERHP -= 1;
    }
  }
}

function MeMob2Check() {
  for(let i = 0; i < mob1Num; i ++) {
    let dis = 100;
    dis = dist(player.x, player.y, mob2[i].x, mob2[i].y);
    if(dis < player.r-50) {
      fill(255,255,0);
      USERHP -= 1;
    }
  }
}

function BulletMob1()
{
  for(let i = 0; i < mob1Num; i++)
  { 
    for(let j = 0; j < mob1Num; j++)
    {
      let dis = 100;
      if(bulletcheck[j] == 1) 
      {
        dis = dist(bullet[j].x, bullet[j].y, mob1[i].x, mob1[i].y);
      }
      if(dis<mob1[i].r/2)
      {
        print(dis);
        mob1[i].y=-200;
        SCORE++;
        bulletcheck[j]=0;
        bullet[j].reset();
      }
    }
  }
}

function BulletMob2()
{
  for(let i = 0; i < mob2Num; i++)
  { 
    for(let j = 0; j < mob2Num; j++)
    {
      let dis = 100;
      if(bulletcheck[j] == 1) 
      {
        dis = dist(bullet[j].x, bullet[j].y, mob2[i].x, mob2[i].y);
      }
      if(dis<mob2[i].r/2)
      {
        print(dis);
        mob2[i].y=-200;
        SCORE++;
        bulletcheck[j]=0;
        bullet[j].reset();
      }
    }
  }
}

function reset()
{
  playcheck++;
  button.hide();
  USERHP = 100;
  SCORE = 0;
  player.x = 650
  player.y = 600
  
  bullet = [];
  bulletcheck = [];
  mob1 = [];
  mob2 = [];

  for(let i = 0; i<bulletNum; i++)
  { 
    bullet[i] = new Bullet();
    bulletcheck[i] = 0;
  }
  for(let i = 0; i<mob1Num; i++)
  { 
    mob1[i] = new Enemy();
  }
  for(let i = 0; i<mob2Num; i++)
  { 
    mob2[i] = new Enemy1();
  }
}

function Finish()
{
  if(USERHP<0)
  {
    background(0);

    push();
    imageMode(CENTER);
    image(thumbnail,width/2,height/2,width,height);
    fill(255);
    strokeWeight(5);
    textFont(fontBolic);
    textAlign(CENTER);
    push();
    textSize(100);
    text("GAME OVER", width/2, height/2);
    pop();
    push();
    textSize(30);
    text("Do you want to play again? Press 'F5 or R' ", width/2, height/2+35);
    pop();
    pop();
    gunSound.pause();
    

  }  
  if(playcheck==0)
  {
    background(0);
    push();
    imageMode(CENTER);
    image(thumbnail,width/2,height/2,width, height)
    pop();

    fill(255);
    textAlign(CENTER);
    push();
    strokeWeight(10);
    text("Kill the Elfs!", width/2, height/2+20);
    pop();
    
    push();
    fill(255)
    textSize(100)
    strokeWeight(5);
    textFont(fontBolic)
    text("Guns", width/2, height/2);
    pop();
   
    button.center();
    button.position(width/2-40, height/2+30);
    button.mousePressed(reset);
    gunSound.pause();
  }  
} 

// 게임 시작화면에서 몹들이 움직임
// 피가 마이너스로 줄어듦
// 첫 놈만 거리계산됨
// 총알이 오른쪽으로 안나감 
// 몹들 속도 조절
// 총알 맞아도 안 사라지고 점수가 그대로
