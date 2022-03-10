import Sprite from "./sprite.js";
import { keypress } from "./keypress.js";

class Player extends Sprite {
  constructor(x, y, size, color) {
    super(x, y, size, color);

    this.velocity = 2;
  }

  move = (canvas) => {
    if (keypress.key.a) {
      this.posX -= this.velocity;
      if (this.posX + this.size < 0) this.posX = canvas.width;
    }
    if (keypress.key.d) {
      this.posX += this.velocity;
      if (this.posX > canvas.width) this.posX = -this.size;
    }

    if (keypress.key.w) {
      this.posY -= this.velocity;
      if (this.posY + this.size < 0) this.posY = canvas.height;
    }
    if (keypress.key.s) {
      this.posY += this.velocity;
      if (this.posY > canvas.height) this.posY = -this.size;
    }
  };

  init = (canvas) => {
    this.posX = canvas.width / 2 - this.size / 2;
    this.posY = canvas.height - this.size - 10;
  };
}

export const player = new Player(null, null, 40, "steelblue");
