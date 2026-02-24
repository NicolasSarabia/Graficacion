function setup() {
 createCanvas(600, 400);
}
function draw() {
 background(220);
 // Base
 fill(200, 150, 100);
 rect(200, 200, 200, 150);
 // Techo
 fill(150, 50, 50);
 triangle(200, 200, 300, 120, 400, 200);
 // Puerta
 fill(100, 50, 20);
 rect(280, 270, 40, 80);
 // Sol
 fill(255, 200, 0);
 circle(500, 80, 80);

 //Los 3 circulos 
 fill(100, 150, 255);
 circle(60, 100, 60);
 circle(120, 100, 60);
 circle(180, 100, 60);

 //el triangulo
 fill(255, 150, 100);
 triangle(250, 250, 350, 250, 300, 163);

 //Arco semicircular
 fill(150, 255, 150);
 arc(300, 350, 200, 200, PI, TWO_PI);
}
