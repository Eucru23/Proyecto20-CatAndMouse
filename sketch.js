var fondo, fondoAnima;
var gato, gatoAnimaA, gatoAnimaB, gatoAnimaC;
var raton, ratonAnimaA, ratonAnimaB, ratonAnimaC;
function preload() {
  fondoAnima = loadImage("garden.png");
  
  //animaciones gato
  gatoAnimaA = loadImage("cat1.png");
  gatoAnimaB = loadAnimation("cat2.png", "cat3.png");
  gatoAnimaC = loadAnimation("cat4.png");
  
  //animaciones ratón
  ratonAnimaA = loadImage("mouse1.png");
  ratonAnimaB = loadAnimation("mouse2.png", "mouse3.png");
  ratonAnimaC = loadAnimation("mouse4.png");
}

function setup() {
  createCanvas(1000, 800);
  fondo = createSprite(500, 400, 30, 30);
  fondo.addImage(fondoAnima);
  fondo.scale = 1.2;
  gato = createSprite(800, 650, 60, 60);
  gato.addImage(gatoAnimaA);
  gato.scale = 0.2;
  raton = createSprite(100, 650, 50, 50);
  raton.addImage(ratonAnimaA);
  raton.scale = 0.16;
}

function draw() {
  background(255);

  if(gato.x - raton.x < gato.width/2 - raton.width/2){
    //gato 
    gato.velocityX = 0;
    gato.addAnimation("cat1", gatoAnimaC);
    gato.changeAnimation("cat1");
    gato.x = 200;
    
    //raton
    raton.addAnimation("raton1", ratonAnimaC);
    raton.changeAnimation("raton1");
     }
  keyPressed23();

  drawSprites();
}

function keyPressed23() {
if (keyWentDown(LEFT_ARROW)) {
  //raton 
  raton.addAnimation("mouse", ratonAnimaB);
    raton.changeAnimation("mouse");
    raton.frameDelay = 5;
   //movimiento gato 
  gato.velocityX = -2;
    gato.addAnimation("cat", gatoAnimaB);
    gato.changeAnimation("cat");
    gato.frameDelay = 5;
  }
}
