let x = 100;
let y = 100;
const speed = 10;

const startScale = 1.0;
const rocketScale = 1.0;
const fireScale = 1.0;
const moonScale = 1.0;

let startText = "START";

background(40, 40, 40);
noStroke();

// ROCKET   ROCKET   ROCKET   ROCKET
function rocket(x, y, rocketScale) {
  push();
  fill(150, 150, 150);

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
    y + 81 * rocketScale,
    50 * rocketScale,
    70 * rocketScale
  );
  pop();
}

// FIRE FIRE FIRE FIRE FIRE FIRE FIRE FIRE FIRE FIRE

function fire(x, y, fireScale) {
  push();
  fill(150, 150, 150);

  rect(x + 100 * fireScale, y + 400 * fireScale, 30 * fireScale);
  rect(x + 130 * fireScale, y + 430 * fireScale, 30 * fireScale);
  rect(x + 160 * fireScale, y + 400 * fireScale, 30 * fireScale);
  rect(x + 190 * fireScale, y + 430 * fireScale, 30 * fireScale);
  rect(x + 220 * fireScale, y + 400 * fireScale, 30 * fireScale);
  rect(x + 160 * fireScale, y + 460 * fireScale, 30 * fireScale);

  pop();
}

//  START BUTTON    START BUTTON    START BUTTON
function startButton(x, y, startScale) {
  push();

  fill(150, 150, 150);

  // START TEXT
  push();
  fill(0, 100, 50);
  textSize(30 * startScale);
  text(startText, x + 150 * startScale, y + 145 * startScale);
  pop();

  // LONG BARS
  rect(
    x + 100 * startScale,
    y + 100 * startScale,
    200 * startScale,
    10 * startScale
  );
  rect(
    x + 100 * startScale,
    y + 160 * startScale,
    200 * startScale,
    10 * startScale
  );

  // SQUARES LEFT
  rect(
    x + 90 * startScale,
    y + 110 * startScale,
    10 * startScale,
    10 * startScale
  );
  rect(
    x + 80 * startScale,
    y + 120 * startScale,
    10 * startScale,
    10 * startScale
  );
  rect(
    x + 70 * startScale,
    y + 130 * startScale,
    10 * startScale,
    10 * startScale
  );
  rect(
    x + 80 * startScale,
    y + 140 * startScale,
    10 * startScale,
    10 * startScale
  );
  rect(
    x + 90 * startScale,
    y + 150 * startScale,
    10 * startScale,
    10 * startScale
  );

  // SQUARES RIGHT
  rect(
    x + 300 * startScale,
    y + 110 * startScale,
    10 * startScale,
    10 * startScale
  );
  rect(
    x + 310 * startScale,
    y + 120 * startScale,
    10 * startScale,
    10 * startScale
  );
  rect(
    x + 320 * startScale,
    y + 130 * startScale,
    10 * startScale,
    10 * startScale
  );
  rect(
    x + 310 * startScale,
    y + 140 * startScale,
    10 * startScale,
    10 * startScale
  );
  rect(
    x + 300 * startScale,
    y + 150 * startScale,
    10 * startScale,
    10 * startScale
  );
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

// ROCKET MOVEMENT
// function draw() {
//   if (keyIsDown(65)) {
//     x = x - speed;
//   } else if (keyIsDown(68)) {
//     x = x + speed;
//   }
//   if (keyIsDown(83)) {
//     y = y + speed;
//   } else if (keyIsDown(87)) {
//     y = y - speed;
//   }
//   clear();
//   background(40, 40, 40);
//   rocket(x, y, 0.6);
// }

// startButton(50, 50, 1);
// rocket(x, 200, 1);
// fire(100, 100, 1);
moonPlanet(10, 50, 1);

// Add sound effects
// Add glow to drawings
// Add noise to the graphics
