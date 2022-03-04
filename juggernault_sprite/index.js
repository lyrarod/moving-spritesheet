let img = new Image();
img.src = "./jug.png";
img.onload = () => requestAnimationFrame(gameLoop);

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

const SCALE = 1;
const WIDTH = 47.75;
const HEIGHT = 64.5;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;

function drawFrame(framex, framey, canvasx, canvasy) {
  ctx.drawImage(
    img,
    framex * WIDTH,
    framey * HEIGHT,
    WIDTH,
    HEIGHT,
    canvasx,
    canvasy,
    SCALED_WIDTH,
    SCALED_HEIGHT
  );
}

let keyPress = {};

addEventListener("keydown", (e) => (keyPress[e.key] = true));
addEventListener("keyup", (e) => (keyPress[e.key] = false));

const MOVEMENT_SPEED = 1.4;
let posx = 0;
let posy = 0;

const FACE_DOWN = 0;
const FACE_LEFT = 1;
const FACE_RIGHT = 2;
const FACE_UP = 3;
let currentDirection = FACE_DOWN;

const CYCLE_LOOP = [0, 1, 2, 3];
const FRAME_LIMIT = 14; // Sprite velocity
let currentLoopIndex = 0;
let frameCount = 0;

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let hasMoved = false;

  if (keyPress.w) {
    hasMoved = true;
    moveCharacter(0, -MOVEMENT_SPEED, FACE_UP);
  } else if (keyPress.s) {
    hasMoved = true;
    moveCharacter(0, MOVEMENT_SPEED, FACE_DOWN);
  }

  if (keyPress.a) {
    hasMoved = true;
    moveCharacter(-MOVEMENT_SPEED, 0, FACE_LEFT);
  } else if (keyPress.d) {
    hasMoved = true;
    moveCharacter(MOVEMENT_SPEED, 0, FACE_RIGHT);
  }

  if (hasMoved) {
    frameCount++;
    if (frameCount >= FRAME_LIMIT) {
      frameCount = 0;
      currentLoopIndex++;
      if (currentLoopIndex >= CYCLE_LOOP.length) {
        currentLoopIndex = 0;
      }
    }
  }

  if (!hasMoved) {
    currentLoopIndex = 0;
  }

  drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, posx, posy);

  requestAnimationFrame(gameLoop);
}

function moveCharacter(deltaX, deltaY, direction) {
  posx += deltaX;
  posy += deltaY;

  if (posx + SCALED_WIDTH < 0) {
    posx = canvas.width;
  }
  if (posx > canvas.width) {
    posx = -SCALED_WIDTH;
  }

  if (posy + SCALED_HEIGHT < 0) {
    posy = canvas.height;
  }
  if (posy > canvas.height) {
    posy = -SCALED_HEIGHT;
  }

  //Limite do Canvas
  // if (posx + deltaX > 0 && posx + deltaX + SCALED_WIDTH < canvas.width) {
  //   posx += deltaX;
  // }
  // if (posy + deltaY > 0 && posy + deltaY + SCALED_HEIGHT < canvas.height) {
  //   posy += deltaY;
  // }

  currentDirection = direction;
}
