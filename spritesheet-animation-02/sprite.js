import { canvas, ctx } from "./gameloop.js";
import { keypressed } from "./keyboard.js";

class Sprite {
  constructor(width = 0, height = 0, sprite = "", x = 0, y = 0) {
    this.width = width;
    this.height = height;
    this.sprite = sprite;
    this.x = x;
    this.y = y;

    this.frameX = [0, 1, 2, 3];
    this.indexFrameX = 0;
    this.frameY = 0;

    this.frameCount = 0;
    this.frameSpeed = 10;

    this.imgSprite = new Image();
    this.sprite ? (this.imgSprite.src = `./assets/${this.sprite}`) : null;

    this.faceLeft = 1;
    this.faceRight = 2;
    this.faceUp = 3;
    this.faceDown = 0;

    this.speed = 1.5;
  }

  update() {
    let isMoving = false;

    if (keypressed.KeyA) {
      if (this.x > 0) {
        isMoving = true;
        this.x -= this.speed;
        this.frameY = this.faceLeft;
      }
    } else if (keypressed.KeyD) {
      if (this.x + this.width < canvas.width) {
        isMoving = true;
        this.x += this.speed;
        this.frameY = this.faceRight;
      }
    }
    if (keypressed.KeyW) {
      if (this.y > 0) {
        isMoving = true;
        this.y -= this.speed;
        this.frameY = this.faceUp;
      }
    } else if (keypressed.KeyS) {
      if (this.y + this.height < canvas.height) {
        isMoving = true;
        this.y += this.speed;
        this.frameY = this.faceDown;
      }
    }

    if (isMoving) {
      this.frameCount++;

      if (this.frameCount >= this.frameSpeed) {
        this.frameCount = 0;
        this.indexFrameX++;

        if (this.indexFrameX >= this.frameX.length) {
          this.indexFrameX = 0;
        }
      }
    }

    if (!isMoving) this.indexFrameX = 0;
  }

  render() {
    if (!this.sprite) {
      this.drawRect();
      return;
    }

    this.imgSprite.onload = this.drawSprite();
  }

  drawSprite() {
    ctx.drawImage(
      this.imgSprite,
      this.width * this.frameX[this.indexFrameX],
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  drawRect() {
    ctx.fillStyle = "orange";
    ctx.fillRect(this.width, this.height, this.x, this.y);
  }
}

export const juggernault = new Sprite(
  47.75,
  64.5,
  "juggernault.png",
  canvas.width / 2 - 47.75 / 2,
  canvas.height / 2 - 64.5 / 2
);
