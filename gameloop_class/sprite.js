import { ctx } from "./gameloop.js";

export default class Sprite {
  constructor(options) {
    this.options = options;
  }

  render = () => {
    if (!this.options.sprite) {
      this.drawRect();
      return;
    }

    this.drawFrame(
      this.options.cycle_loop[this.options.currentLoopIndex],
      this.options.column + this.options.currentDirection,
      this.options.x,
      this.options.y
    );
  };

  drawFrame = (frameX, frameY, canvasX, canvasY) => {
    if (this.options.sprite) {
      ctx.drawImage(
        this.options.sprite,
        frameX * this.options.width,
        frameY * this.options.height,
        this.options.width,
        this.options.height,
        canvasX,
        canvasY,
        this.options.width * this.options.scale,
        this.options.height * this.options.scale
      );
    }
  };

  drawRect = () => {
    if (this.options.color) {
      ctx.fillStyle = this.options.color;
      ctx.fillRect(
        this.options.x,
        this.options.y,
        this.options.width,
        this.options.height
      );
    }
  };
}
