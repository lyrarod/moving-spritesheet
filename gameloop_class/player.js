import { canvas } from "./gameloop.js";
import Sprite from "./sprite.js";
import { keypress } from "./keypress.js";

export default class Player extends Sprite {
  constructor(x, y, width, height, sprite) {
    super(x, y, width, height, sprite);

    this.speed = 1.4;
    this.sprite = sprite;
  }

  move = () => {
    let hasMoved = false;

    if (keypress.key.a && !keypress.key.d) {
      this.x -= this.speed;
      hasMoved = true;
      this.currentDirection = this.face_left;
      if (this.x + this.width < 0) this.x = canvas.width;
    }
    if (keypress.key.d && !keypress.key.a) {
      this.x += this.speed;
      hasMoved = true;
      this.currentDirection = this.face_right;
      if (this.x > canvas.width) this.x = -this.width;
    }

    if (keypress.key.w && !keypress.key.s) {
      this.y -= this.speed;
      hasMoved = true;
      this.currentDirection = this.face_up;
      if (this.y + this.height < 0) this.y = canvas.height;
    }
    if (keypress.key.s && !keypress.key.w) {
      this.y += this.speed;
      hasMoved = true;
      this.currentDirection = this.face_down;
      if (this.y > canvas.height) this.y = -this.height;
    }

    if (hasMoved) {
      this.frame_count++;
      if (this.frame_count >= this.frame_limit) {
        this.frame_count = 0;
        this.currentLoopIndex++;

        if (this.currentLoopIndex >= this.cycle_loop.length) {
          this.currentLoopIndex = 0;
        }
      }
    }

    if (!hasMoved) this.currentLoopIndex = 0;
  };

  init = () => {
    this.x = canvas.width / 2 - this.width / 2;
    this.y = canvas.height - this.height - 10;
  };
}

let imgPlayer = new Image();
imgPlayer.src = "char.png";
// imgPlayer.onload = () => player;

export const player = new Player(null, null, 47.75, 64.5, imgPlayer);
