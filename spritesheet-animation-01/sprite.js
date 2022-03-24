import { ctx } from "./gameloop.js";

export default class Sprite {
  constructor({
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    sprite = "",
    frameX = [],
    rowFrameY = 0,
    frameSpeed = 12,
    scale = 1,
    speed = 1,
    faceDown = 0,
    faceLeft = 0,
    faceRight = 0,
    faceTop = 0,
    keyboard = false,
  }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
    this.frameX = frameX;
    this.rowFrameY = rowFrameY;
    this.frameSpeed = frameSpeed;
    this.scale = scale;
    this.speed = speed;
    this.faceDown = faceDown;
    this.faceLeft = faceLeft;
    this.faceRight = faceRight;
    this.faceTop = faceTop;
    this.keyboard = keyboard;

    this.frameY = 0;
    this.index = 0;
    this.frameCount = 0;

    this.imgSprite = new Image();
    if (this.sprite) this.imgSprite.src = this.sprite;
  }

  render = () => {
    this.imgSprite.addEventListener("load", this.drawSprite());
  };

  drawSprite = () => {
    ctx.drawImage(
      this.imgSprite,
      this.width * this.frameX[this.index],
      this.height * (this.frameY + this.rowFrameY),
      this.width,
      this.height,

      this.x,
      this.y,
      this.width * this.scale,
      this.height * this.scale
    );
  };
}
