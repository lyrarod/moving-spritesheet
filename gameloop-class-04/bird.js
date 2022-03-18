import Sprite from "./sprite.js";
import { canvas } from "./gameloop.js";
import { keypressed } from "./keyboard.js";

class Bird extends Sprite {
  // arrayFrameX = [10, 9, 10, 11]; //DARK BIRD
  // arrayFrameX = [1, 0, 1, 2]; //BROWN BIRD
  // arrayFrameX = [4, 3, 4, 5]; //WHITE BIRD 2
  arrayFrameX = [7, 6, 7, 8]; //WHITE BIRD 1
  indexFrameX = 0;
  frameY = 6;

  frameCount = 0;
  frameLimit = 6;
  scale = 1;

  leftSide = 5;
  rightSide = 6;
  upSide = 7;
  downSide = 4;

  message = document.querySelector("#message");

  removeMessage = () => {
    if (this.message) {
      setTimeout(() => {
        this.message.remove();
      }, 1500);
    }
  };

  move = () => {
    let speed = 3;
    let isMoving = true;

    if (keypressed.KeyA) {
      this.removeMessage();
      this.frameY = this.leftSide;
      this.x -= speed;
      if (this.x + this.width * this.scale <= 0) this.x = canvas.width;
    }
    if (keypressed.KeyD) {
      this.removeMessage();
      this.frameY = this.rightSide;
      this.x += speed;
      if (this.x >= canvas.width) this.x = -this.width * this.scale;
    }
    if (keypressed.KeyW) {
      this.removeMessage();
      this.frameY = this.upSide;
      if (keypressed.KeyA || keypressed.KeyD) {
        speed = speed / 2;
        isMoving = false;
      }
      this.y -= speed;
      if (this.y + this.height * this.scale <= 0) this.y = canvas.height;
    }
    if (keypressed.KeyS) {
      this.removeMessage();
      this.frameY = this.downSide;
      if (keypressed.KeyA || keypressed.KeyD) {
        speed = speed / 2;
        isMoving = false;
      }
      this.y += speed;
      if (this.y >= canvas.height) this.y = -this.height * this.scale;
    }

    if (isMoving) {
      this.frameCount++;

      if (this.frameCount >= this.frameLimit) {
        this.frameCount = 0;
        this.indexFrameX++;

        if (this.indexFrameX >= this.arrayFrameX.length) {
          this.indexFrameX = 0;
        }
      }
    }

    if (!isMoving) this.indexFrameX = 0;
  };

  init = () => {
    this.x = canvas.width / 2 - (this.width * this.scale) / 2;
    this.y = canvas.height / 2 - (this.height * this.scale) / 2;
  };
}

export const bird = new Bird(84, 72, "assets/birds2.png");
// export const bird = new Bird(50, 50);
