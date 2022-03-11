import { ctx } from "./gameloop.js";

export default class Sprite {
  constructor(x, y, width, height, color, sprite) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.sprite = sprite;
    this.cycle_loop = [0, 1, 2, 3];
    this.face_down = 0;
    this.face_left = 1;
    this.face_right = 2;
    this.face_up = 3;
    this.frame_limit = 14;
    this.currentDirection = null;
    this.currentLoopIndex = 0;
    this.frame_count = 0;
  }

  render = () => {
    if (!this.sprite) {
      this.drawRect();
      return;
    }

    this.drawFrame(
      this.cycle_loop[this.currentLoopIndex],
      this.currentDirection,
      this.x,
      this.y
    );
  };

  drawFrame = (frameX, frameY, canvasX, canvasY) => {
    ctx.drawImage(
      this.sprite,
      frameX * this.width,
      frameY * this.height,
      this.width,
      this.height,
      canvasX,
      canvasY,
      this.width,
      this.height
    );
  };

  drawRect = () => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}
