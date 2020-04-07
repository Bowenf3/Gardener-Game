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
  constructor(iName, colour, postitionAndSize) {
    this.name = iName;
    this.r = colour.r;
    this.b = colour.b;
    this.g = colour.g;
    this.x = postitionAndSize.xPos;
    this.y = postitionAndSize.yPos;
    this.h = postitionAndSize.hSize;
    this.w = postitionAndSize.wSize;
  }
}
 
// List of plans currently in the world
let plants = []
let score = 0

const plantWidth = 30
 
function addNewPlant(name) {
  // Add new plant
  const plant = new Square(
    `plant-${plants.length + 1}`,
    { r: random(0, 255), g: random(0, 255), b: random(0, 255) },
    { xPos: random(0, windowWidth - plantWidth), yPos: windowHeight + 10, hSize: windowHeight * 1.1, wSize: plantWidth },
  )
  plants = plants.concat([plant])
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

const scoreThreshold = 10

function draw() {
  // Draw background
  background(250)
  fill(150, 75, 0)
  rectMode(CORNER)
  rect(0, windowHeight * 7/8, windowWidth, windowHeight/8)
  text(`Score = ${score}`, windowWidth * 1/8, windowHeight * 1/10)
  
  
  // Determine the required plans based on the current score, the threshold and how many plans are currently alive
  const requiredPlants = Math.floor(score / scoreThreshold) + 1

  // Add new plant if needed
  if (plants.length < requiredPlants) {
    const plantsToAdd = requiredPlants - plants.length
    for (let counter = 0; counter < plantsToAdd; counter++) {
      addNewPlant()
    }
  }

  // Draw all plants
  plants.forEach(plant => {
    fill(plant.r, plant.b, plant.g, plant.t)
    rect(plant.x, plant.y, plant.w, plant.h)
    plant.y = plant.y - random(0,3)
 
    // Reset game if a plant has reached the top
    if (plant.y < 0) {
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
  console.log('mouse clicked', plants)
  plants.forEach((plant, plantIndex) => {    
    if (
      // Below top left corner
      (mouseY >= plant.y) &&
      // On the right of the left corner
      (mouseX >= plant.x) &&
      // Inside the width of the plant
      (mouseX <= plant.x + plant.w)
    ) {
      console.log(plantIndex)
      // Remove plant from the array
      plants.splice(plantIndex, 1);
      score++;
    }
  })
}