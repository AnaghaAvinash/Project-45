var bI,b,shooterI,shooter,l1,l2,l3,l4,l5,l6,astroI,astro1,astro2;

function preload(){
  bI = loadImage("images/back.jpeg");
  shooterI = loadImage("images/shooter.png");
  astroI = loadImage("images/astro1.png");

}

function setup() {
  createCanvas(500,600);
  b = createSprite(250,300);
  shooter = createSprite(255,500);
 

  l1 = createSprite(180,105,5,100);
  l2 = createSprite(255,152,150,5);
  l3 = createSprite(330,105,5,100);

  astro1 = createSprite(255,150);

 

  l4 = createSprite(100,145,5,180);
  l5 = createSprite(255,232,310,5);
  l6 = createSprite(410,145,5,180);

  astro2 = createSprite(255,230);


  
}


function draw() {  
 background(255);
  b.addImage(bI);
  b.scale = 0.9;

  shooter.addImage(shooterI);
  shooter.scale = 0.5;

  if(keyDown(LEFT_ARROW)){
    shooter.x = shooter.x - 3;
  }

  if(keyDown(RIGHT_ARROW)){
    shooter.x = shooter.x + 3;
  }

  l4.shapeColor = "#F61717";
  l5.shapeColor = "#F61717";
  l6.shapeColor = "#F61717";

  l1.shapeColor = "#F7CAD5";
  l2.shapeColor = "#F7CAD5";
  l3.shapeColor = "#F7CAD5";

  astro1.addImage(astroI);
  astro1.scale = 0.3;

  astro2.addImage(astroI);
  astro2.scale = 0.3;
 
 

  
  drawSprites();
  

}



