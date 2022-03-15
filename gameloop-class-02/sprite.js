import { ctx } from "./gameloop.js";

export default class Sprite {
  constructor(x, y, width, height, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
    this.frameX = 0;
    this.frameY = 0;
    this.frameCount = 0;
    this.frameLimit = 8;
    this.cycle_loop = [0, 1, 2, 3];
    this.currentLoopIndex = 0;
  }

  render = () => {
    if (!this.sprite) {
      this.drawRect();
      return;
    }

    this.sprite.addEventListener("load", this.drawSprite());
  };

  drawSprite = () => {
    ctx.drawImage(
      this.sprite,
      this.cycle_loop[this.currentLoopIndex] * this.width, // this.frameX * this.width
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  drawRect = () => {
    ctx.fillStyle = "crimson";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
