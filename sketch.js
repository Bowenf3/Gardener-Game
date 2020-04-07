new p5();

let circle = {
  r: 250,
  b: 0,
  g: 0,
  t: 100,
  x: 0,
  y: 200,
  w: 25,
  h: 25,
};

class Square {
  constructor(name, r, b, g, x, y, h, w) {
    this.name = name;
    this.r = red();
    this.b = blue();
    this.g = green();
    this.x = x;
    this.y = y;
    this.h = height;
    this.w = width;
  }
}

let square = {
  r: random(0, 255),
  b: random(0, 255),
  g: random(0, 255),
  x: random(0, 400),
  y: 800,
  w: random(15, 50),
  h: 800,
};

let score = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);

    
  text("Score = " +score, 330, 20);
  
  fill(150,75,0);
  rect(0, 400, 800, 50);

  rectMode(CENTER);
  fill(square.r, square.b, square.g, square.t);
  rect(square.x, square.y, square.w, square.h);

  square.y = square.y - 3;

  fill(circle.r, circle.b, circle.g, circle.t);
  ellipse(mouseX, mouseY, circle.w, circle.h);

function outScreenY() {
    if(square.y < 380) {
      square.y = 850;
      square.x = random(0,400);
      score = 0;
    }
}
     
  //newPlant();   
  outScreenY();
  
  for (var xs = 0; xs == score; xs += 10) {
  function newPlant() {
  rectMode(CENTER);
  fill(square.r, square.b, square.g, square.t);
  rect(square.x, square.y, square.w, square.h);
  square.y = square.y - 1;
  }; 
  }
}

function mouseClicked() {
  if ((mouseX <= square.x + (square.w / 2)) && (mouseX >= square.x - (square.w / 2)) && (mouseY <= square.y + (square.h / 2)) && (mouseY >= square.y - (square.h / 2))) {
    //if(dist(mouseX, mouseY, square.x, square.y) < (square.w/2)) {
    square.y = 850;
    square.x = random(0, 400);
    score++;
    //if(score%10 == 0) {
          //} 
  }}
