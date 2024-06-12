let sprJ1;
let enemigo1;
let enemigo2;
let enemigo3;
let x = 400;
let puntos = 0;
let vidas = 3;

function setup() {

  createCanvas(800, 600);

  //Enemigo 1 se mueva
  enemigo1 = createSprite(random(800), -100, 65, 60);
  enemigo1.shapeColor = color(255,0,0);
  enemigo1.velocity.y = 4.5;
  
  //Enemigo 2 se mueva
  enemigo2 = createSprite(random(800), -100, 90, 80);
  enemigo2.shapeColor = color(255,0,0);
  enemigo2.velocity.y = 6.5;

  //Enemigo 3 se mueva
  enemigo3 = createSprite(random(800), -100, 100, 80);
  enemigo3.shapeColor = color(255,0,0);
  enemigo3.velocity.y = 3;

  //Crear jugador
  sprJ = createSprite(x, 450, 50,50);
  sprJ.shapeColor = color(0,255,0);
  sprJ.velocity.x = 3.5;
}

function draw() {
  
  background(150);
  drawSprites();
  textSize(25);
  
//Establezco que cuando el enemigo pasa el canvas vuelva arriba
  if(enemigo1.position.y > 600 ){
  enemigo1.position.y = -100 
  enemigo1.position.x = random(800);
  puntos++;
  }

  if(enemigo2.position.y > 600 ){
    enemigo2.position.y = -100 
    enemigo2.position.x = random(800);
    puntos++;
    }

    if(enemigo3.position.y > 600 ){
      enemigo3.position.y = -100 
      enemigo3.position.x = random(800);
      puntos++;
      }

  

  //Para que el jugador se mueva
  if (keyIsDown(65) === true){
    sprJ.velocity.x = -5; 
}
    
if (keyIsDown(68) === true){
    sprJ.velocity.x = +5; 
    }
    if (vidas === 0);
          

    //Si el enemigo toca al jugador pierde una vida
    if (enemigo1.overlap(sprJ)) {
      enemigo1.position.y = -100
      enemigo1.position.x = random(0 , 400);
      vidas--;
      }
      if (enemigo2.overlap(sprJ)) {
        enemigo2.position.y = -100
        enemigo2.position.x = random(0 , 400);
        vidas--;
        }

        if (enemigo3.overlap(sprJ)) {
          enemigo3.position.y = -100
          enemigo3.position.x = random(0 , 400);
          vidas--;
          }
          

      
    //Establezco el puntaje y las vidas
      textSize(40);
      text('Vidas:' + vidas, 0, 100);
  
      textSize(40);
      text('Puntos:' + puntos, 0, 200);
 }
  

  
  

  

  


