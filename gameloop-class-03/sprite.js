import { ctx } from "./gameloop.js";

export default class Sprite {
  constructor(opt) {
    this.opt = opt;

    this.imgSprite = new Image();

    this.frameY = 0;
    this.frameCount = 0;
    this.currentLoopIndex = 0;
  }

  render = () => {
    const { opt } = this;

    if (!opt.sprite) {
      this.drawRect();
      return;
    }
    this.imgSprite.addEventListener("load", this.drawSprite());
  };

  drawSprite = () => {
    const { opt } = this;

    this.imgSprite.src = opt.sprite;

    ctx.drawImage(
      this.imgSprite,
      this.opt.cycle_loop[this.currentLoopIndex] * opt.width, // this.frameX * opt.width
      this.frameY * opt.height,
      opt.width,
      opt.height,
      opt.x,
      opt.y,
      opt.width,
      opt.height
    );
  };

  drawRect = () => {
    const { opt } = this;

    ctx.fillStyle = "crimson";
    ctx.fillRect(opt.x, opt.y, opt.width, opt.height);
  };
}
