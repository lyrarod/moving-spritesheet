import Sprite from "./sprite.js";
import { keypressed } from "./keyboard.js";
import { canvas } from "./gameloop.js";

export default class Player extends Sprite {
  arrayOfPlayers = [];

  add = (p) => this.arrayOfPlayers.push(p);

  update = () => {
    let isMoving = false;

    if (this.keyboard) {
      if (keypressed.KeyA) {
        isMoving = true;
        this.x -= this.speed;
        this.frameY = this.faceLeft;
      } else if (keypressed.KeyD) {
        isMoving = true;
        this.x += this.speed;
        this.frameY = this.faceRight;
      }

      if (keypressed.KeyW) {
        isMoving = true;
        this.y -= this.speed;
        this.frameY = this.faceTop;
      } else if (keypressed.KeyS) {
        isMoving = true;
        this.y += this.speed;
        this.frameY = this.faceDown;
      }
    }

    if (isMoving) {
      this.frameCount++;
      console.log("frameCount", this.frameCount);

      if (this.frameCount >= this.frameSpeed) {
        this.frameCount = 0;
        this.index++;
        console.log("index", this.index);

        if (this.index >= this.frameX.length) {
          this.index = 0;
        }
      }
    }

    if (!isMoving) {
      this.index = 0;
      // this.frameY = this.faceDown;
    }
  };

  initPosition = () => {
    this.x = canvas.width / 2 - (this.width * this.scale) / 2;
    this.y = canvas.height / 2 - (this.height * this.scale) / 2;
  };
}

export const player = new Player({});

player.add(
  new Player({
    x: 0,
    y: 0,
    width: 40,
    height: 72,
    sprite: "assets/chewie_40x72.png",
    frameX: [0, 1, 2, 3],
    rowFrameY: 0,
    frameSpeed: 8,
    faceDown: 0,
    faceLeft: 1,
    faceRight: 2,
    faceTop: 3,
    scale: 1,
    speed: 1,
    keyboard: false,
  })
);

player.add(
  new Player({
    x: 100,
    y: 100,
    width: 48,
    height: 48,
    sprite: "assets/batman_48x48.png",
    frameX: [1, 0, 1, 2], // batman preto
    // frameX: [4, 3, 4, 5], // batman azul
    rowFrameY: 0,
    frameSpeed: 8,
    faceDown: 0,
    faceLeft: 1,
    faceRight: 2,
    faceTop: 3,
    scale: 1,
    speed: 1,
    keyboard: true,
  })
);
