let posX, posY, escala = 1.0, angulo = 0, sesgo = 0;
let p1y = 80; 
let niveles = 4;

function setup() {
  createCanvas(800, 600);
  posX = width / 2;
  posY = height / 2;
  rectMode(CENTER);
}

function draw() {
  background(240);
  
  textAlign(LEFT);
  textSize(16);
  fill(50);
  text("Autor: Sarabia Medina Nicolas Alexander", 20, 30);
  text("Instrucciones: Flechas (Mover), Q/E (Rotar), +/- (Escala), S/D (Shear), 1-6 (Niveles Fractal)", 20, 55);

  dibujarCurva();

  push();
  aplicarTransformaciones();
  dibujarPersonaje();
  pop();

  push();
  translate(100, height - 50);
  dibujarFractal(60, niveles);
  pop();

  procesarEntradas();
}

function aplicarTransformaciones() {
  translate(posX, posY); 
  rotate(angulo);        
  scale(escala);         
  shearX(sesgo);         
}

function dibujarPersonaje() {
  fill(100, 150, 250);
  rect(0, 0, 100, 100); 
  fill(255);
  circle(-20, -20, 20); 
  circle(20, -20, 20);  
  fill(0);
  text("Objeto", -25, 40);
}

function dibujarCurva() {
  noFill();
  stroke(200, 0, 0);
  p1y = mouseY;
  bezier(200, 500, 300, p1y, 500, p1y, 600, 500); 
  fill(255, 0, 0);
  circle(300, p1y, 8);
  circle(500, p1y, 8);
}

function dibujarFractal(len, n) {
  stroke(34, 139, 34);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (n > 0) { 
    push();
    rotate(PI / 6);
    dibujarFractal(len * 0.7, n - 1);
    pop();
    push();
    rotate(-PI / 6);
    dibujarFractal(len * 0.7, n - 1);
    pop();
  }
}

function procesarEntradas() {
  // Movimiento (Flechas)
  if (keyIsDown(LEFT_ARROW)) posX -= 5;
  if (keyIsDown(RIGHT_ARROW)) posX += 5;
  if (keyIsDown(UP_ARROW)) posY -= 5;
  if (keyIsDown(DOWN_ARROW)) posY += 5;
  if (keyIsDown(81)) angulo -= 0.03; 
  if (keyIsDown(69)) angulo += 0.03;

  if (keyIsPressed) {
    if (key === '+' || key === '=') escala += 0.02; 
    if (key === '-' || key === '_') escala -= 0.02; 
    if (key === 's' || key === 'S') sesgo += 0.01; 
    if (key === 'd' || key === 'D') sesgo -= 0.01; 
  }
  
  escala = constrain(escala, 0.1, 3.0); 
}

function keyPressed() {
  if (key >= '1' && key <= '6') niveles = int(key); 
}



