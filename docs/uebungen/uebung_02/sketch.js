let c = 30;


function setup() {
  createCanvas(400, 400);
  strokeCap(PROJECT);
}

function draw() {
  background(240, 235, 235);
  stroke(130, 150, 30);
  fill(255,140);
  let a = 20;
  let side = 100;

  strokeWeight(2);
  square(a, a, side);
  strokeWeight(2);
  line(a+side,a,a+side,a+side);
  line(a,a+side,a+side,a+side);

  a += a; a=a+a;
  side += c
  strokeWeight(3);
  square(a, a, side);
  strokeWeight(2);
  line(a+side,a,a+side,a+side);
  line(a,a+side,a+side,a+side);

  a += a
  side += c
  strokeWeight(4);
  square(a, a, side);
  strokeWeight(2);
  line(a+side,a,a+side,a+side);
  line(a,a+side,a+side,a+side);

  a += a
  side += c
  strokeWeight(5);
  square(a, a, side);
  strokeWeight(2);
  line(a+side,a,a+side,a+side);
  line(a,a+side,a+side,a+side);


  stroke(230, 150, 30);
  strokeWeight(8);

  a += a;
    side += c
    strokeWeight(1);
    circle(50,50,side);
    strokeWeight(10);
    line(a+side,a,a+side,a+side);
    line(a,a+side,a+side,a+side);

    a += a
    side += c
    strokeWeight(1);
    circle(50,50,side);
    strokeWeight(10);
    line(a+side,a,a+side,a+side);
    line(a,a+side,a+side,a+side);

    a += a
    side += c
    strokeWeight(1);
    circle(50,50,side);
    strokeWeight(10);
    line(a+side,a,a+side,a+side);
    line(a,a+side,a+side,a+side);

    a += a
    side += c
   strokeWeight(1);
    circle(50,50,side);
    strokeWeight(10);
    line(a+side,a,a+side,a+side);
    line(a,a+side,a+side,a+side);



}
