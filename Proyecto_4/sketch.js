let angle = 0;

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(15);

  orbitControl();

  ambientLight(60); 

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 255, 255, locX, locY, 100);

  push(); 
    translate(-200, 0, 0);
    rotateX(angle); 
    specularMaterial(255, 0, 0); 
    shininess(20);
    box(100);
  pop();

  push();
    translate(0, 0, 0);
    normalMaterial(); 
    sphere(70);
  pop();

  push();
    translate(200, 0, 0);
    rotateY(angle);
    ambientMaterial(0, 200, 255); 
    torus(60, 20);
  pop();

  angle += 0.02;
}