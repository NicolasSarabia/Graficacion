// 2.4 Análisis del Ejemplo Propuesto
/*
let s = 1;
function setup() {
 createCanvas(600, 300);
}
function draw() {
 background(240);
 s = 1 + 0.5 * sin(frameCount * 0.05);
 push();
 translate(300, 150);
 scale(s);
 rectMode(CENTER);
 rect(0, 0, 120, 60);
 pop();
}
*/

//2.5 Ejemplo 1 — Escalamiento no uniforme
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

//2.6 Ejemplo 2 — Escalamiento controlado por mouse
/*
function setup() {
 createCanvas(600, 300);
 rectMode(CENTER);
}
function draw() {
 background(240);
 let s = map(mouseX, 0, width, 0.2, 2);
 push();
 translate(width/2, height/2);
 scale(s);
 rect(0, 0, 120, 60);
 pop();
}
*/

//2.7 Ejemplo 3 — Escalamiento acumulativo (cuidado)
let s = 1;
function setup() {
 createCanvas(600, 300);
}
function draw() {
 background(240);
 s *= 1.01; // crecimiento exponencial
 push();
 translate(width/2, height/2);
  scale(s);
 rectMode(CENTER);
 rect(0, 0, 50, 30);
 pop();
}

