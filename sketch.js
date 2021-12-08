let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 200);
}

function draw() {
  background(220, 0, 120);
  mover.update();
  mover.show();
}