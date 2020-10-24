function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill('#005AE1');
  noStroke();
  rect(10, 10, windowWidth - 20, windowHeight - 20);
}

function draw() {
  let posx = 400;
  let posy = 380;




  //fill(c,10);
  fill('#005AE100');
  stroke(255)
  strokeWeight(10);
  for (i = 0; i < 2; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(frameCount / 40);
    ellipse(0, 0, (posx), (posy));
    pop();
  }


  //Transparenz
  fill(0, 90, 225, 10);
  noStroke();
  rect(10, 10, windowWidth - 20, windowHeight - 20);
  fill(0, 90, 225, 100);
  rect((width / 2) - 50, (height / 2) - 50, 100, 100);


}
