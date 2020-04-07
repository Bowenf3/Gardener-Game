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
    this.r = r;
    this.b = b;
    this.g = g;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
  }
}
 
// List of plans currently in the world
let plants = []
let score = 0
 
function addNewPlant(name) {
  // Add new plant
  const plant = new Square(`plant-${plants.length + 1}`, random(0, 255), random(0, 255), random(0, 255), random(0, 400), 800, 800, 30)
  plants = plants.concat([plant])
}
 
function setup() {
  createCanvas(400, 400)
}
 
function draw() {
  // Draw background
  background(250)
  fill(150, 75, 0)
  rect(0, 400, 800, 50)
  text("Score = " + score, 330, 20)
 
  // Add new plant if needed
  if (plants.length === 0) {
    addNewPlant()
  }
  // Draw all plants
  plants.forEach(plant => {
    rectMode(CENTER)
    fill(plant.r, plant.b, plant.g, plant.t)
    rect(plant.x, plant.y, plant.w, plant.h)
    plant.y = plant.y - 3
 
    // Reset game if a plant has reached the top
    if (plant.y < 380) {
      plants = []
      score = 0;
    }
  })
 
  // Draw mouse cursor
  // NOTE: This has to happen AFTER all the plants because the cursor would be drawn
  // under the plans otherwise - try putting this before drawing the plants and see what happens
  fill(circle.r, circle.b, circle.g, circle.t)
  ellipse(mouseX, mouseY, circle.w, circle.h)
}
 
function mouseClicked() {
  plants.forEach(plant => {
      if ((mouseX <= plant.x + (plant.w / 2)) &&
        (mouseX >= plant.x - (plant.w / 2)) &&
        (mouseY <= plant.y + (plant.h / 2)) &&
        (mouseY >= plant.y - (plant.h / 2))
      ) {
        // Remove plant from the array
        const plantIndex = plants.indexOf(plant)
        if (plantIndex > -1) {
          plants.splice(plantIndex, 1);
        }
        score++;
      }
    })
  }