let x = 100;
let y = 100;
const startScale = 1.0;
const rocketScale = 1.0;

let startText = "START";

background(40, 40, 40);

// ROCKET   ROCKET   ROCKET   ROCKET
function rocket(x, y, rocketScale) {
  push();
  fill(150, 150, 150);

  // FEET
  rect(x + 80 * rocketScale, y + 210 * rocketScale, 50 * rocketScale);
  rect(x + 220 * rocketScale, y + 210 * rocketScale, 50 * rocketScale);

  // BODY
  noStroke();
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

//  START BUTTON    START BUTTON    START BUTTON
function startButton(x, y, startScale) {
  push();
  noStroke();
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

startButton(50, 50, 1);
rocket(x, 200, 1);
