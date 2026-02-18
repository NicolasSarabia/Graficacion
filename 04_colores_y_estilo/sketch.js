function setup() {
 createCanvas(600, 300);
}
let x = 300;
function draw() {
 background(255);
 //noStroke();
 //noFill();
 fill(0, 128, 0);
 rect(0, 0, width, height/3);
 circle(x, 60, 40);
 fill(255);
 rect(0, height/3, width, height/3);
 circle(x, 130, 40);
 fill(255, 0, 0);
 rect(0, 2*height/3, width, height/3);
 circle(x, 250, 40);
}
