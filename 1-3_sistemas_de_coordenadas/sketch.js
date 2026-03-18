function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220); 
  strokeWeight(10); 
  point(width / 2, height / 2);

  strokeWeight(1); 
  circle(0, 0, 50);          
  circle(width, 0, 50);      
  circle(0, height, 50);     
  circle(width, height, 50); 

  rectMode(CENTER); 
  rect(width / 2, height / 2, 100, 50);
}