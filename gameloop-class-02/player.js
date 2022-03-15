import Sprite from "./sprite.js";
import { keypress } from "./keypress.js";
import { gameloop, CANVAS_HEIGHT, CANVAS_WIDTH } from "./gameloop.js";

export default class Player extends Sprite {
  constructor(x, y, width, height, sprite) {
    super(x, y, width, height, sprite);

    this.speed = 1.4;
    this.sprite = sprite;
  }

  update = () => {
    this.controller();
  };

  controller = () => {
    let hasMoved = false;

    // x-axis controller
    if (keypress.key.KeyD && !keypress.key.KeyA) {
      this.x += this.speed;
      this.frameY = 2; // face right
      hasMoved = true;
      // if (this.x >= CANVAS_WIDTH) this.x = -this.width;
      if (this.x + this.width >= CANVAS_WIDTH) {
        this.x = CANVAS_WIDTH - this.width;
        hasMoved = false;
      }
    }
    if (keypress.key.KeyA && !keypress.key.KeyD) {
      this.x -= this.speed;
      this.frameY = 1; // face left
      hasMoved = true;
      // if (this.x + this.width <= 0) this.x = CANVAS_WIDTH;
      if (this.x <= 0) {
        this.x = 0;
        hasMoved = false;
      }
    }

    // y-axis controller
    if (keypress.key.KeyW && !keypress.key.KeyS) {
      this.y -= this.speed;
      this.frameY = 3; // face up
      hasMoved = true;
      // if (this.y + this.height <= 0) this.y = CANVAS_HEIGHT;
      if (this.y <= 50) {
        this.y = 50;
        hasMoved = false;

        if (keypress.key.KeyA) {
          this.frameY = 1; // face left
          hasMoved = true;
        } else if (keypress.key.KeyD) {
          this.frameY = 2; // face right
          hasMoved = true;
        }
      }
    }
    if (keypress.key.KeyS && !keypress.key.KeyW) {
      this.y += this.speed;
      this.frameY = 0; // face down
      hasMoved = true;
      // if (this.y >= CANVAS_HEIGHT) this.y = -this.height;
      if (this.y + this.height >= CANVAS_HEIGHT) {
        this.y = CANVAS_HEIGHT - this.height;
        hasMoved = false;

        if (keypress.key.KeyA) {
          this.frameY = 1; // face left
          hasMoved = true;
        } else if (keypress.key.KeyD) {
          this.frameY = 2; // face right
          hasMoved = true;
        }
      }
    }

    if (hasMoved) {
      this.frameCount++;
      console.log("frameCount", this.frameCount);
      if (this.frameCount >= this.frameLimit) {
        this.frameCount = 0;
        this.currentLoopIndex++;
        console.log("currentLoopIndex", this.currentLoopIndex);
        if (this.currentLoopIndex >= this.cycle_loop.length) {
          this.currentLoopIndex = 0;
        }
      }
    }

    if (!hasMoved) this.currentLoopIndex = 0;
  };

  init = () => {
    this.x = CANVAS_WIDTH / 2 - this.width / 2;
    this.y = CANVAS_HEIGHT / 2 - this.height / 2;
  };
}

const imgPlayer = new Image();
imgPlayer.src = "./assets/chewie.png";

export const player = new Player(null, null, 40, 72, imgPlayer);
