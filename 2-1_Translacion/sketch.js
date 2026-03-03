//Ejemplo 1 — Traslación en X (animación)
/*
let tx = 0;
function setup() {
 createCanvas(600, 300);
}
function draw() {
 background(240);
 tx += 2; // tx crece 2 píxeles por frame
 rect(50 + tx, 120, 80, 50);
}
*/

//Ejemplo 2 — Traslación en X y Y (diagonal) con “vector velocidad”
/*
let x = 50, y = 120;
let vx = 2, vy = 1;
function setup() {
 createCanvas(600, 300);
}
function draw() {
 background(240);
 x += vx; // traslación acumulada
 y += vy;
 rect(x, y, 80, 50);
}
*/

//Ejemplo 3 — Traslación con translate() (para objetos compuestos)
/*
let sx = 1;
let sy = 1;
function setup() {
 createCanvas(600, 300);
 rectMode(CENTER);
}
function draw() {
 background(240);
 sx = 1 + 0.5 * sin(frameCount * 0.05);
 sy = 1 + 0.5 * cos(frameCount * 0.05);
 push();
 translate(width/2, height/2);
 scale(sx, sy);
 rect(0, 0, 150, 80);
 pop();
}
*/

//Ejemplo 3 — Traslación con translate() (para objetos compuestos)
let tx = 0;
function setup() {
 createCanvas(600, 300);
 rectMode(CENTER);
}
function draw() {
 background(240);
 tx += 2;
 push();
 translate(tx, 0); // mueve TODO lo que dibujes dentro del push/pop
 fill(200, 80, 80);
 rect(150, 150, 120, 60);
 fill(80, 120, 200);
 circle(150, 110, 40);
 pop();
}




