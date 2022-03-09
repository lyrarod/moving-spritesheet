import Sprite from "./sprite.js";

class Player extends Sprite {
  constructor(x, y, size, color) {
    super(x, y, size, color);
  }

  update(keypress, c) {
    this.move(keypress, c);
  }

  move(keypress, c) {
    if (keypress.a) {
      this.posX -= this.velocity;
      if (this.posX + this.size < 0) this.posX = c.width;
    }
    if (keypress.d) {
      this.posX += this.velocity;
      if (this.posX > c.width) this.posX = -this.size;
    }

    if (keypress.w) {
      this.posY -= this.velocity;
      if (this.posY + this.size < 0) this.posY = c.height;
    }
    if (keypress.s) {
      this.posY += this.velocity;
      if (this.posY > c.height) this.posY = -this.size;
    }
  }

  init = (canvas) => {
    this.posX = canvas.width / 2 - this.size / 2;
    this.posY = canvas.height - this.size - 10;
  };
}

export const player = new Player(null, null, 40, "steelblue");
