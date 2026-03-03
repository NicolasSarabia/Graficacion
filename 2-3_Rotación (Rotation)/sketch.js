// 3.3 Rotación en p5.js (análisis del ejemplo)
/*
function setup() {
 createCanvas(600, 300);
}
function draw() {
 background(240);
 let ang = frameCount * 0.03;
 push();
 translate(300, 150);
 rotate(ang);
 rectMode(CENTER);
 rect(0, 0, 140, 60);
 pop();
}
*/

//3.5 Ejemplo 1 — Rotación sin translate (error común)
/*
function draw() {
 background(240);
 rotate(frameCount * 0.03);
 rect(200, 150, 140, 60);
}
*/

//3.6 Ejemplo 2 — Molino con 4 aspas
/*
function setup() {
 createCanvas(600, 400);
 rectMode(CENTER);
}
function draw() {
 background(240);
 let ang = frameCount * 0.05;
 translate(width/2, height/2);
 for (let i = 0; i < 4; i++) {
 push();
 rotate(ang + i * HALF_PI);
 rect(60, 0, 120, 30);
 pop();
 }
}
*/

//3.7 Ejemplo 3 — Rotación manual usando fórmulas
function setup() {
 createCanvas(600, 400);
}
function draw() {
 background(240);
 let theta = frameCount * 0.03;
  let x = 100;
 let y = 0;
 let xr = x * cos(theta) - y * sin(theta);
 let yr = x * sin(theta) + y * cos(theta);
 translate(width/2, height/2);
 circle(xr, yr, 20);
}
