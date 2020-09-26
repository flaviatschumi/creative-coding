
function setup() {
  createCanvas(400, 400);
}

function draw() {
  let c1 = color('#625261')
  let c2 = color('#9776b0')
  let c3 = color('#56b1b8')
  let c4 = color('#ed972d')
  background(c2);
  strokeWeight(0);

  for (let x =20; x <= width; x = x + 60) {
    for (let y =0; y <= height; y = y + 130) {
      fill(c2);
      ellipse(x,y,50,50);
      fill(c3);
      rect(x,y,20,20);
      fill(c1);
      rect(x,y,10,200);
      fill(c3);
      rect(x,y,50,30);
      fill(c4);
      ellipse(x,y,30,30);
    }
  }

}
