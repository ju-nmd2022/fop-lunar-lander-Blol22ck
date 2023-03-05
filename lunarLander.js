function setup() {
  createCanvas(600, 400);
  frameRate(30);
}

let x = 100;
let y = 100;

// Rocket values for movement and position
let rocketY = 100;
let rocketX = 100;
let rocketVelocity = 0.8;
let acceleration = 0.2;

// Screen states
let isGameActive = false;
let winningScreenActive = false;
let gameoverScreenActive = false;
let startScreenActive = true;

// Scales for the different functions
const startScale = 1.0;
const rocketScale = 1.0;
const fireScale = 1.0;
const moonScale = 1.0;

// ROCKET   ROCKET   ROCKET   ROCKET
function rocket(x, y, rocketScale) {
  noStroke();
  push();
  fill(0, 200, 40);

  // FEET
  rect(x + 80 * rocketScale, y + 210 * rocketScale, 50 * rocketScale);
  rect(x + 220 * rocketScale, y + 210 * rocketScale, 50 * rocketScale);

  // BODY

  rect(
    x + 100 * rocketScale,
    y + 151 * rocketScale,
    149 * rocketScale,
    60 * rocketScale
  );
  rect(
    x + 150 * rocketScale,
    y + 82 * rocketScale,
    50 * rocketScale,
    70 * rocketScale
  );
  pop();
}

// STARTSCREEN STARTSCREEN STARTSCREEN
function startScreen() {
  push();
  textSize(32);
  fill(0, 200, 40);
  text("Press W To Start", x + 90, y + 100);
  pop();
}

// GAMEOVER SCREEN
function gameoverScreen() {
  push();
  textSize(32);
  fill(255, 50, 50);
  text("TOO FAST TRY AGAIN!", x + 20, y + 100);
  textSize(12);
  text("Press SPACEBAR To Try Again", x + 120, y + 120);
  pop();
}

//WINNING SCREEN
function winningScreen() {
  push();
  textSize(32);
  fill(0, 200, 40);
  text("YOU DID IT!", x + 120, y + 100);
  textSize(12);
  text("Press SPACEBAR To Continue", x + 130, y + 130);
  pop();
}

// MOON MOON MOON MOON MOON MOON MOON MOON

function moonPlanet(x, y, moonScale) {
  fill(70, 70, 70);

  //BIG ELLIPSE MIDDLE
  ellipse(
    x + 262 * moonScale,
    y + 291 * moonScale,
    361 * moonScale,
    361 * moonScale
  );

  // TOP BLOCK
  push();
  fill(180, 180, 180);
  rect(x + 250 * moonScale, y + 100 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 100 * moonScale, 10 * moonScale);
  rect(x + 240 * moonScale, y + 100 * moonScale, 10 * moonScale);
  rect(x + 260 * moonScale, y + 100 * moonScale, 10 * moonScale);
  rect(x + 270 * moonScale, y + 100 * moonScale, 10 * moonScale);
  pop();

  // BOTTOM BLOCK
  push();
  fill(180, 180, 180);
  rect(x + 250 * moonScale, y + 480 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 480 * moonScale, 10 * moonScale);
  rect(x + 240 * moonScale, y + 480 * moonScale, 10 * moonScale);
  pop();
  rect(x + 260 * moonScale, y + 480 * moonScale, 10 * moonScale);
  rect(x + 270 * moonScale, y + 480 * moonScale, 10 * moonScale);

  // RIGHT SIDE
  rect(x + 280 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 290 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 300 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 310 * moonScale, y + 110 * moonScale, 10 * moonScale);

  rect(x + 320 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 330 * moonScale, y + 120 * moonScale, 10 * moonScale);

  rect(x + 340 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 350 * moonScale, y + 130 * moonScale, 10 * moonScale);

  rect(x + 350 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 360 * moonScale, y + 140 * moonScale, 10 * moonScale);

  rect(x + 370 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 380 * moonScale, y + 160 * moonScale, 10 * moonScale);
  rect(x + 390 * moonScale, y + 170 * moonScale, 10 * moonScale);

  rect(x + 400 * moonScale, y + 180 * moonScale, 10 * moonScale);
  rect(x + 400 * moonScale, y + 190 * moonScale, 10 * moonScale);

  rect(x + 410 * moonScale, y + 190 * moonScale, 10 * moonScale);
  rect(x + 410 * moonScale, y + 200 * moonScale, 10 * moonScale);

  rect(x + 420 * moonScale, y + 220 * moonScale, 10 * moonScale);
  rect(x + 420 * moonScale, y + 210 * moonScale, 10 * moonScale);

  rect(x + 430 * moonScale, y + 230 * moonScale, 10 * moonScale);
  rect(x + 430 * moonScale, y + 240 * moonScale, 10 * moonScale);
  rect(x + 430 * moonScale, y + 250 * moonScale, 10 * moonScale);
  rect(x + 430 * moonScale, y + 260 * moonScale, 10 * moonScale);

  rect(x + 440 * moonScale, y + 270 * moonScale, 10 * moonScale);
  rect(x + 440 * moonScale, y + 280 * moonScale, 10 * moonScale);
  rect(x + 440 * moonScale, y + 290 * moonScale, 10 * moonScale);
  rect(x + 440 * moonScale, y + 300 * moonScale, 10 * moonScale);
  rect(x + 440 * moonScale, y + 310 * moonScale, 10 * moonScale);

  rect(x + 430 * moonScale, y + 320 * moonScale, 10 * moonScale);
  rect(x + 430 * moonScale, y + 330 * moonScale, 10 * moonScale);
  rect(x + 430 * moonScale, y + 340 * moonScale, 10 * moonScale);
  rect(x + 430 * moonScale, y + 350 * moonScale, 10 * moonScale);

  rect(x + 420 * moonScale, y + 360 * moonScale, 10 * moonScale);
  rect(x + 420 * moonScale, y + 370 * moonScale, 10 * moonScale);

  rect(x + 410 * moonScale, y + 380 * moonScale, 10 * moonScale);
  rect(x + 410 * moonScale, y + 390 * moonScale, 10 * moonScale);

  rect(x + 400 * moonScale, y + 390 * moonScale, 10 * moonScale);
  rect(x + 400 * moonScale, y + 400 * moonScale, 10 * moonScale);

  rect(x + 390 * moonScale, y + 410 * moonScale, 10 * moonScale);
  rect(x + 380 * moonScale, y + 420 * moonScale, 10 * moonScale);
  rect(x + 370 * moonScale, y + 430 * moonScale, 10 * moonScale);

  rect(x + 360 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 350 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 350 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 340 * moonScale, y + 450 * moonScale, 10 * moonScale);

  rect(x + 330 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 320 * moonScale, y + 460 * moonScale, 10 * moonScale);

  rect(x + 310 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 300 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 290 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 280 * moonScale, y + 470 * moonScale, 10 * moonScale);

  push();
  fill(180, 180, 180);
  // LEFT SIDE
  rect(x + 220 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 190 * moonScale, y + 110 * moonScale, 10 * moonScale);

  rect(x + 180 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 170 * moonScale, y + 120 * moonScale, 10 * moonScale);

  rect(x + 150 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 130 * moonScale, 10 * moonScale);

  rect(x + 140 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 140 * moonScale, 10 * moonScale);

  rect(x + 130 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 160 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 170 * moonScale, 10 * moonScale);

  rect(x + 100 * moonScale, y + 180 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 190 * moonScale, 10 * moonScale);

  rect(x + 90 * moonScale, y + 190 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 200 * moonScale, 10 * moonScale);

  rect(x + 80 * moonScale, y + 220 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 210 * moonScale, 10 * moonScale);

  rect(x + 70 * moonScale, y + 230 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 240 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 250 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 260 * moonScale, 10 * moonScale);

  rect(x + 60 * moonScale, y + 270 * moonScale, 10 * moonScale);
  rect(x + 60 * moonScale, y + 280 * moonScale, 10 * moonScale);
  rect(x + 60 * moonScale, y + 290 * moonScale, 10 * moonScale);
  rect(x + 60 * moonScale, y + 300 * moonScale, 10 * moonScale);
  rect(x + 60 * moonScale, y + 310 * moonScale, 10 * moonScale);

  rect(x + 70 * moonScale, y + 320 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 330 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 340 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 350 * moonScale, 10 * moonScale);

  rect(x + 80 * moonScale, y + 360 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 370 * moonScale, 10 * moonScale);

  rect(x + 90 * moonScale, y + 380 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 390 * moonScale, 10 * moonScale);

  rect(x + 100 * moonScale, y + 390 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 400 * moonScale, 10 * moonScale);

  rect(x + 110 * moonScale, y + 410 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 420 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 430 * moonScale, 10 * moonScale);

  rect(x + 140 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 450 * moonScale, 10 * moonScale);

  rect(x + 170 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 180 * moonScale, y + 460 * moonScale, 10 * moonScale);

  rect(x + 190 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 220 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 260 * moonScale, y + 480 * moonScale, 10 * moonScale);
  rect(x + 270 * moonScale, y + 480 * moonScale, 10 * moonScale);
  pop();
  //GRADIENT LAYER 1
  push();
  fill(150, 150, 150);

  rect(x + 260 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 270 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 250 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 240 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 110 * moonScale, 10 * moonScale);
  rect(x + 220 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 190 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 180 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 170 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 140 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 160 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 170 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 180 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 190 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 200 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 210 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 220 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 230 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 240 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 250 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 260 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 270 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 280 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 290 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 300 * moonScale, 10 * moonScale);
  rect(x + 70 * moonScale, y + 310 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 320 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 330 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 340 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 350 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 360 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 370 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 380 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 390 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 400 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 410 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 420 * moonScale, 10 * moonScale);
  rect(x + 140 * moonScale, y + 430 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 430 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 170 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 180 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 190 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 220 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 240 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 250 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 260 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 270 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 280 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 290 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 300 * moonScale, y + 470 * moonScale, 10 * moonScale);
  rect(x + 310 * moonScale, y + 470 * moonScale, 10 * moonScale);
  pop();

  //GRADIENT LAYER 2
  push();
  fill(130, 130, 130);

  rect(x + 260 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 250 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 240 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 120 * moonScale, 10 * moonScale);
  rect(x + 220 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 190 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 180 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 170 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 160 * moonScale, 10 * moonScale);
  rect(x + 140 * moonScale, y + 160 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 170 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 180 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 190 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 200 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 210 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 220 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 230 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 240 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 250 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 260 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 270 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 280 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 290 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 300 * moonScale, 10 * moonScale);
  rect(x + 80 * moonScale, y + 310 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 320 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 330 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 340 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 350 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 360 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 370 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 380 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 390 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 400 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 410 * moonScale, 10 * moonScale);
  rect(x + 140 * moonScale, y + 420 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 420 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 430 * moonScale, 10 * moonScale);
  rect(x + 170 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 180 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 190 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 220 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 240 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 250 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 260 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 270 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 280 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 290 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 300 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 310 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 320 * moonScale, y + 460 * moonScale, 10 * moonScale);
  rect(x + 330 * moonScale, y + 460 * moonScale, 10 * moonScale);

  pop();

  //GRADIENT LAYER 3
  push();
  fill(110, 110, 110);

  rect(x + 250 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 240 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 130 * moonScale, 10 * moonScale);
  rect(x + 220 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 190 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 180 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 170 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 160 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 170 * moonScale, 10 * moonScale);
  rect(x + 140 * moonScale, y + 170 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 180 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 190 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 200 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 210 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 220 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 240 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 250 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 260 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 230 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 270 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 280 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 290 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 300 * moonScale, 10 * moonScale);
  rect(x + 90 * moonScale, y + 310 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 320 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 330 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 340 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 350 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 360 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 370 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 380 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 390 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 400 * moonScale, 10 * moonScale);
  rect(x + 140 * moonScale, y + 410 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 410 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 420 * moonScale, 10 * moonScale);
  rect(x + 170 * moonScale, y + 430 * moonScale, 10 * moonScale);
  rect(x + 180 * moonScale, y + 430 * moonScale, 10 * moonScale);
  rect(x + 190 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 220 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 240 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 250 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 260 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 270 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 280 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 290 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 300 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 310 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 320 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 330 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 340 * moonScale, y + 450 * moonScale, 10 * moonScale);
  rect(x + 350 * moonScale, y + 450 * moonScale, 10 * moonScale);
  pop();

  //GRADIENT LAYER 4
  push();
  fill(90, 90, 90);

  rect(x + 240 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 140 * moonScale, 10 * moonScale);
  rect(x + 220 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 190 * moonScale, y + 150 * moonScale, 10 * moonScale);
  rect(x + 180 * moonScale, y + 160 * moonScale, 10 * moonScale);
  rect(x + 170 * moonScale, y + 160 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 170 * moonScale, 10 * moonScale);
  rect(x + 150 * moonScale, y + 180 * moonScale, 10 * moonScale);
  rect(x + 140 * moonScale, y + 180 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 200 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 210 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 220 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 230 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 240 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 250 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 260 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 270 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 280 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 290 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 300 * moonScale, 10 * moonScale);
  rect(x + 100 * moonScale, y + 310 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 320 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 330 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 340 * moonScale, 10 * moonScale);
  rect(x + 110 * moonScale, y + 350 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 360 * moonScale, 10 * moonScale);
  rect(x + 120 * moonScale, y + 370 * moonScale, 10 * moonScale);
  rect(x + 130 * moonScale, y + 380 * moonScale, 10 * moonScale);
  rect(x + 140 * moonScale, y + 390 * moonScale, 10 * moonScale);
  rect(x + 140 * moonScale, y + 400 * moonScale, 10 * moonScale);
  rect(x + 160 * moonScale, y + 410 * moonScale, 10 * moonScale);
  rect(x + 170 * moonScale, y + 420 * moonScale, 10 * moonScale);
  rect(x + 180 * moonScale, y + 420 * moonScale, 10 * moonScale);
  rect(x + 190 * moonScale, y + 430 * moonScale, 10 * moonScale);
  rect(x + 200 * moonScale, y + 430 * moonScale, 10 * moonScale);
  rect(x + 210 * moonScale, y + 430 * moonScale, 10 * moonScale);
  rect(x + 220 * moonScale, y + 430 * moonScale, 10 * moonScale);
  rect(x + 230 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 240 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 250 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 260 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 270 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 280 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 290 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 300 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 310 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 320 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 330 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 340 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 350 * moonScale, y + 440 * moonScale, 10 * moonScale);
  rect(x + 360 * moonScale, y + 440 * moonScale, 10 * moonScale);

  pop();
}

// THE DRAW FUNCTION FOR THE GAME TO OPERATE
function draw() {
  clear();
  background(40, 40, 40);
  moonPlanet(x - 310, y, 2);
  moonPlanet(x + 250, y - 100, 0.5);
  rocket(rocketX + 175, rocketY, 0.15);

  // Makes the rocket fall
  if (isGameActive) {
    rocketY = rocketY + rocketVelocity;
    rocketVelocity = rocketVelocity + acceleration;

    // Removing startscreen when game starts and the movement of the rocket
    if (keyIsDown(87)) {
      startScreenActive = false;
      isGameActive = true;
      rocketVelocity = rocketVelocity - 0.7;
    }

    // Switching between the screens if landing is completed or failed
    if (rocketY > 300) {
      // Landing correctly
      if (rocketVelocity < 2.5) {
        winningScreenActive = true;
        isGameActive = false;
      }
      // Landing inccorectly
      else {
        isGameActive = false;
        gameoverScreenActive = true;
      }
    }
  }

  // Showing startscreen when game is not started
  if (startScreenActive) {
    startScreen();
    if (keyIsDown(87)) {
      startScreenActive = false;
      isGameActive = true;
    }
  }

  // Switching to Start screen with spacebar and reseting values
  if (gameoverScreenActive) {
    gameoverScreen();
    if (keyIsDown(32)) {
      isGameActive = false;
      gameoverScreenActive = false;
      startScreenActive = true;
      rocketY = 100;
      rocketX = 100;
      rocketVelocity = 0.8;
    }
  }
  // Switching to Start screen with spacebar and reseting values
  if (winningScreenActive) {
    winningScreen();
    if (keyIsDown(32)) {
      isGameActive = false;
      winningScreenActive = false;
      startScreenActive = true;
      rocketY = 100;
      rocketX = 100;
      rocketVelocity = 0.8;
    }
  }

  // Game stops when rocket reaches Y 330
  if (rocketY > 330) {
    isGameActive = false;
  }
}
