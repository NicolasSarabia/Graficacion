// Variables Globales [cite: 1681]
let posX, posY, escala = 1.0, angulo = 0, sesgo = 0;
let p1y = 80; // Punto de control para la curva
let niveles = 4; // Profundidad del fractal

function setup() {
  createCanvas(800, 600);
  posX = width / 2;
  posY = height / 2;
  rectMode(CENTER);
}

function draw() {
  background(240);
  
  // 1. Texto Informativo [cite: 1672, 1700]
  textAlign(LEFT);
  textSize(16);
  fill(50);
  text("Autor: Estudiante de Medicina e Ing. en Sistemas", 20, 30);
  text("Instrucciones: Flechas (Mover), Q/E (Rotar), +/- (Escala), S/D (Shear), 1-6 (Niveles Fractal)", 20, 55);

  // 2. Curva Bézier Interactiva [cite: 1642, 1651]
  dibujarCurva();

  // 3. Objeto Principal con Transformaciones [cite: 1619, 1689]
  push();
  aplicarTransformaciones();
  dibujarPersonaje();
  pop();

  // 4. Fractal Recursivo [cite: 1653, 1699]
  push();
  translate(100, height - 50);
  dibujarFractal(60, niveles);
  pop();

  procesarEntradas();
}

function aplicarTransformaciones() {
  translate(posX, posY); // Traslación [cite: 1621]
  rotate(angulo);        // Rotación [cite: 1629]
  scale(escala);         // Escalamiento [cite: 1625]
  shearX(sesgo);         // Shear/Sesgado [cite: 1633]
}

function dibujarPersonaje() {
  fill(100, 150, 250);
  rect(0, 0, 100, 100); // Cuerpo
  fill(255);
  circle(-20, -20, 20); // Ojo izq
  circle(20, -20, 20);  // Ojo der
  fill(0);
  text("Objeto", -25, 40); // Texto en el objeto [cite: 1678]
}

function dibujarCurva() {
  noFill();
  stroke(200, 0, 0);
  // El punto de control P1 se mueve con el mouse [cite: 1652]
  p1y = mouseY;
  bezier(200, 500, 300, p1y, 500, p1y, 600, 500); 
  // Puntos de control [cite: 1646]
  fill(255, 0, 0);
  circle(300, p1y, 8);
  circle(500, p1y, 8);
}

function dibujarFractal(len, n) {
  stroke(34, 139, 34);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (n > 0) { // Condición de parada 
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
  if (keyIsDown(LEFT_ARROW)) posX -= 5;
  if (keyIsDown(RIGHT_ARROW)) posX += 5;
  if (keyIsDown(UP_ARROW)) posY -= 5;
  if (keyIsDown(DOWN_ARROW)) posY += 5;
  if (keyIsDown(81)) angulo -= 0.05; // Q
  if (keyIsDown(69)) angulo += 0.05; // E
  if (keyIsDown(107)) escala += 0.01; // +
  if (keyIsDown(109)) escala -= 0.01; // -
  if (keyIsDown(83)) sesgo += 0.01; // S
  if (keyIsDown(68)) sesgo -= 0.01; // D
}

function keyPressed() {
  if (key >= '1' && key <= '6') niveles = int(key); // Control de niveles [cite: 1667]
}



