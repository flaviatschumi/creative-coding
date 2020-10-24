function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill('#005AE1');
  noStroke();
  rect(10, 10, windowWidth - 20, windowHeight - 20);  //Rand
}

function draw() {
  let posx = 400;
  let posy = 380;




  //fill(c,10);
  fill('#005AE100');
  stroke(255)
  strokeWeight(10);
  for (i = 0; i < 2; i++) { //rotation kreis
    push();
    translate(width / 2, height / 2); //position kreis
    rotate(frameCount / 10); //geschwindigkeit
    ellipse(0, 0, (posx), (posy));  //position der rotation
    pop();
  }


  //Transparenz
  fill(0, 90, 225, 10); //Transparenz
  noStroke();
  rect(10, 10, windowWidth - 20, windowHeight - 20); //Rand
  // fill(0, 90, 225, 100);
  // rect((width / 2) - 50, (height / 2) - 50, 100, 100);


}
