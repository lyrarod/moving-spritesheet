import Sprite from "./sprite.js";
import { canvas } from "./gameloop.js";
import { keypress } from "./keyboard.js";

export default class Player extends Sprite {
  speed = 2;

  move = () => {
    let isMoving = false;

    switch (true) {
      case keypress.KeyA:
        this.frameY = 1;

        if (this.opt.x > 0) {
          this.opt.x -= this.speed;
          isMoving = true;
        }
        break;

      case keypress.KeyD:
        this.frameY = 2;

        if (this.opt.x + this.opt.width < canvas.width) {
          this.opt.x += this.speed;
          isMoving = true;
        }
        break;

      case keypress.KeyW:
        this.frameY = 3;

        if (this.opt.y > 0) {
          this.opt.y -= this.speed;
          isMoving = true;
        }
        break;

      case keypress.KeyS:
        this.frameY = 0;

        if (this.opt.y + this.opt.height < canvas.height) {
          this.opt.y += this.speed;
          isMoving = true;
        }
        break;
    }

    if (isMoving) {
      this.frameCount++;
      console.log("frameCount", this.frameCount);

      if (this.frameCount >= this.opt.frameLimit) {
        this.frameCount = 0;
        this.currentLoopIndex++;
        console.log("currentLoopIndex", this.currentLoopIndex);

        if (this.currentLoopIndex >= this.opt.cycle_loop.length) {
          this.currentLoopIndex = 0;
        }
      }

      let h3 = document.querySelector("h3");
      setTimeout(() => {
        h3.style.visibility = "hidden";
      }, 3000);
    }

    if (!isMoving) {
      this.currentLoopIndex = 0;
    }
  };

  init = () => {
    const { opt } = this;
    opt.x = canvas.width / 2 - opt.width / 2;
    opt.y = canvas.height / 2 - opt.height / 2;
  };
}

export const player = new Player({
  x: null,
  y: null,
  width: 48,
  height: 48,
  sprite: "assets/batman.png",
  frameLimit: 8,
  cycle_loop: [1, 0, 1, 2], // walking dark batman
  // cycle_loop: [4, 3, 4, 5], // walking blue batman
  // cycle_loop: [7, 6, 7, 8], // bruce wayne
  // cycle_loop: [0, 2], // run black batman
});
