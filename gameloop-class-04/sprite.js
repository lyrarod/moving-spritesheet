import { ctx } from "./gameloop.js";

export default class Sprite {
  constructor(width, height, sprite) {
    this.width = width;
    this.height = height;
    this.sprite = sprite;
    this.image = new Image();
  }

  render = () => {
    if (!this.sprite) {
      ctx.fillStyle = "#112";
      ctx.fillRect(
        this.x,
        this.y,
        this.width * this.scale,
        this.height * this.scale
      );
      return;
    }

    this.image.src = this.sprite;
    this.image.onload = this.drawSprite();
  };

  drawSprite = () => {
    ctx.drawImage(
      this.image,
      this.width * this.arrayFrameX[this.indexFrameX],
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * this.scale,
      this.height * this.scale
    );
  };
}
