
function setup() {
  createCanvas(400, 400);
}

function draw() {
  let c1 = color('#625261')
  let c2 = color('#590404')
  let c3 = color('#d61313')
  let c4 = color('#ed972d')
  background(c2);
  strokeWeight(5);

  for (let x =50; x <= width; x = x + 60) {
    for (let y =0; y <= height; y = y + 130) {
      fill(c1);
      rect(x,y,10,100);
      fill(c3);
      rect(x,y,30,50);
      fill(c4);
      ellipse(x,y,70,70);
      fill(c2);
      ellipse(x,y,50,50);
      rect(x,y,70,120);
      fill(c3);
    }
  }

}
