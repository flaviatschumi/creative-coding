var gui;

var posy = 380;
var grosse = 400;
var stärke = 1;
var zeit = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);          //Canvas Bildschirmhöhe-Breite
  background(255);
  fill(109, 0, 225);
  noStroke();
  rect(10, 10, windowWidth - 20, windowHeight - 20); //Kreis

  noFill();
  sliderRange(0, 380, 1)
  gui = createGui('p5.gui');
  gui.addGlobals('grosse', 'stärke', 'zeit');
  // only call draw when then gui is changed

}


function draw() {
  // let grosse = 20;



  //fill(c,10);
  fill(109, 0, 225);           //Füllfarbe
  stroke(255)                 //Konturfarbe
  strokeWeight(10 + (zeit));  //Konturdicke
  for (i = 0; i < 2; i++) {
    push();
    translate(width / 2, height / 2);
    rotate(frameCount / 30 + radians(stärke));
    ellipse(0, 0, (grosse), (posy - stärke));     //Kreis 1
    pop();

    push();
    translate(width / 6, height / 3);
    rotate(frameCount / 30 + radians(stärke));
    ellipse(0, 0, (grosse), (posy - stärke));     //Kreis 2
    pop();

    push();
    translate(width / 1, height / 3);
    rotate(frameCount / 30 + radians(stärke));
    ellipse(0, 0, (grosse), (posy - stärke));     //Kreis 3
    pop();

    push();
    translate(width / 1.3, height / 1);
    rotate(frameCount / 30 + radians(stärke));
    ellipse(0, 0, (grosse), (posy - stärke));     //Kreis 4
    pop();
  }


  //Transparenz
  fill(109, 0, 225, 10);
  noStroke();
  rect(10, 10, windowWidth - 20, windowHeight - 20);
  fill(0, 90, 225, 100);
  // rect((width / 2) - 50, (height / 2) - 50, 100, 100);

  // rotation=rotation+stärke;

}
