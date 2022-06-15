let ch1stand,ch1standleft,ch1bullet,ch1rightrun, ch1leftrun,ch1dead1
let backgroundForest, thumbnail,thumbnail2,gif_explosion, howtoplay
let elf,elf2;

let player = [];
let bullet = [];
let bulletcheck = [];
let bulletNum = 3;

let mob1 = [];
let mob2 = [];
let mob1check = [];
let mob2check = [];

let mob1Num = 25;
let mob2Num = 25;

let USERHP = 100;
let SCORE = 0;
let playcheck = 0;

let button1; //start game
let button2; //how to play

function setup() {
  button1 = createButton('Start Game');
  button2 = createButton('How to play');

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
    for(let i = 0; i < mob2Num; i++)
      { 
        mob2[i] = new Enemy1();
        mob1check[i] = 0;
      }
  
}

function preload() {
    ch1stand = loadImage('assets/ch1stand.png');
    ch1standleft = loadImage('assets/ch1standleft.png');
    ch1dead1 = loadImage('assets/ch1dead1.png');
    ch1shoot1 = loadImage('assets/ch1shoot1.png');
    ch1shoot2 = loadImage('assets/ch1shoot2.png');
    ch1rightrun = loadImage('assets/ch1rightrun.gif');
    ch1leftrun = loadImage('assets/ch1leftrun.gif');
    ch1bullet = loadImage('assets/ch1bullet.png');

//============================================================== 
    backgroundForest = loadImage('assets/backgroundForest.png')
    howtoplay = loadImage('assets/howtoplay.png')

    thumbnail = loadImage('assets/thumbnail.png')
    thumbnail2 = loadImage('assets/thumbnail2.png')
    gif_explosion= loadImage('assets/explosion.gif');

//============================================================== 
    elf = loadImage('assets/elf.png')
    elf2 = loadImage('assets/elf2.png')
//==============================================================
    fontBolic = loadFont('assets/bolicfont.ttf');
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
   
  //  HPBOX();

for(let m of mob1) {
  m.move();
  m.show(); 
}

for(let m1 of mob2) {
  m1.move();
  m1.show(); 
}
  
    Finish();
}

function bulletCheck()
{
  for(let i = 0; i<bulletNum; i++)
  { 
    bullet[i].draw();
    bullet[i].update();
    
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
    
    //====================================================
    
    if(keyCode == '37') //left
    {
     player.direction = 1; 
     player.sight = 1;
    }
    if(keyCode == '39' ) //right
    {
      player.direction = 0;
      player.sight = 0;
    }
    //====================================================    
    
    if (keyCode == '16') { // shift
   
      for(let i = 0; i<bulletNum; i++)
      {
        
        if(bulletcheck[i] == 0)
        { 

          print(player.direction);
          bullet[i].x = player.x; 
          bullet[i].y = player.y;
          //====================================================
          if(player.direction==1) 
          {
            bullet[i].velocity = -10;
          }
          else{
            bullet[i].velocity = 10;
          }
          //====================================================
          
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
      USERHP -= 2;
    }
  }
}

function MeMob2Check() {
  for(let i = 0; i < mob1Num; i ++) {
    let dis = 100;
    dis = dist(player.x, player.y, mob2[i].x, mob2[i].y);
    if(dis < player.r-50) {
      fill(255,255,0);
      USERHP -= 2;
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
        image(gif_explosion,mob1[i].x, mob1[i].y-70, 200,200)
        print(dis);
        mob1[i].y=-200;
        SCORE += 179;
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
        image(gif_explosion,mob2[i].x, mob2[i].y-70, 200,200)
        print(dis);
        mob2[i].y=-200;
        SCORE += 181;
        bulletcheck[j]=0;
        bullet[j].reset();
      }
    }
  }
}

function reset()
{
  playcheck = 1;
  button1.hide();
  button2.hide(); 
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
    fill(255);
    strokeWeight(5);
    textFont(fontBolic);
    textAlign(CENTER);

    push();
    imageMode(CENTER);
    image(thumbnail2,width/2,height/2,width,height);
    pop();

    push();
    textSize(50);
    text("SCORE :" + SCORE, width/2, height/2 - 100)
    pop();

    push();
    textSize(100);
    text("GAME OVER", width/2, height/2);
    pop();

    push();
    textSize(30);
    fill(255,255,0)
    text("Do you want to play again? Press 'F5 or R' ", width/2, height/2+35);
    pop();

  }  
  if(playcheck==0)
  {
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
   
    button1.center();
    button1.position(width/2-40, height/2+30);
    button1.mousePressed(reset);

    button2.center();
    button2.position(width/2-40, height/2+55);
    button2.mousePressed(tutorial);
  }

  if(playcheck == 2) {
    push();
    imageMode(CENTER);
    image(howtoplay, width/2, height/2, width, height);
    pop();
    
    push();
    fill(0);
    textAlign(CENTER);
    textSize(30);
    text("Press 'F5' to go to the main screen",width/2, height/2-20);
    pop();
   
  }  
} 

function tutorial() {
  playcheck = 2;
  button1.hide();
  button2.hide();
}





