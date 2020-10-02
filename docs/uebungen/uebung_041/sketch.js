function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/* == GUI == */
var props = {
  columns: 8,
  rows: 8,
  size: 44,
  spacing: 22,
  backColor: "#FFFFFF",
  puckColor: "#FFFFFF",
}
window.onload = function() {
  var gui = new dat.GUI();

  gui.add(props, 'rad').min(0).max(3.1415*2).step(0.1);

  var style = gui.addFolder('Style');
  style.addColor(props, 'backColor');
  //style.open();
};

/* == Hauptteil == */
function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  frameRate(30);
  noStroke();
}

function draw() {
  background(color(props.backColor));

  // Grid Zentrum
  var cell = props.size + props.spacing;
  translate(width/2-(cell*props.columns)/2.0, height/2-(cell*props.rows)/2);

  // draw
  for (var col = 0; col < props.columns; col++) {
    for (var row = 0; row < props.rows; row++) {
      var x = col*cell + cell/2.0;
      var y = row*cell + cell/2.0;

      var tall = dist(width/2.0, height/2.0, x, y);
      tall = sin(radians(tall-frameCount*6.0)) * 18.0 + 16.0;

      drawLiftedCircle(x, y, props.size, tall);
    }
  }
}

function drawLiftedCircle(x, y, radius, tall) {
  //if (tall < 0) tall = 0;

  x = x-tall;
  y = y-tall;

  for (var i = tall; i > 0; i--) {
    fill(20+i*2.5, 40+i*4, 40+i*4, 255);
    ellipse(x+i, y+i, radius-0.5, radius-0.5);
  }
  fill(255);
  ellipse(x, y, radius, radius);
}
