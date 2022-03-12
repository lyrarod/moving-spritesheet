import { canvas } from "./gameloop.js";
import Sprite from "./sprite.js";
import { keypress } from "./keypress.js";

export default class Player extends Sprite {
  constructor(options) {
    super(options);

    this.arrayOfPlayers = [];
  }

  add = (player) => this.arrayOfPlayers.push(player);

  move = () => {
    let hasMoved = false;

    if (this.options.keypress) {
      if (keypress.key.a && !keypress.key.d) {
        hasMoved = true;
        this.options.x -= this.options.speed;
        this.currentDirection = this.options.face_left;

        if (this.options.x + this.options.width * this.options.scale <= 0)
          this.options.x = canvas.width;
      }
      if (keypress.key.d && !keypress.key.a) {
        hasMoved = true;
        this.options.x += this.options.speed;
        this.currentDirection = this.options.face_right;

        if (this.options.x >= canvas.width)
          this.options.x = -this.options.width * this.options.scale;
      }

      if (keypress.key.w && !keypress.key.s) {
        hasMoved = true;
        this.options.y -= this.options.speed;
        this.currentDirection = this.options.face_up;

        if (this.options.y + this.options.height * this.options.scale <= 0)
          this.options.y = canvas.height;
      }
      if (keypress.key.s && !keypress.key.w) {
        hasMoved = true;
        this.options.y += this.options.speed;
        this.currentDirection = this.options.face_down;

        if (this.options.y >= canvas.height)
          this.options.y = -this.options.height * this.options.scale;
      }
    }

    if (hasMoved) {
      this.frame_count++;
      if (this.frame_count >= this.options.frame_limit) {
        this.frame_count = 0;
        this.currentLoopIndex++;

        if (this.currentLoopIndex >= this.options.cycle_loop.length) {
          this.currentLoopIndex = 0;
        }
      }
    }

    if (!hasMoved) this.currentLoopIndex = 0;
  };

  init = () => {
    this.options.x =
      canvas.width / 2 - (this.options.width * this.options.scale) / 2;
    this.options.y =
      canvas.height / 2 - (this.options.height * this.options.scale) / 2;
  };
}

export const player = new Player();

const imgGreenCap = new Image();
imgGreenCap.src = "./assets/green_cap_16x18.png";
imgGreenCap.onload = () => player;

player.add(
  new Player({
    x: 100,
    y: 100,
    width: 16,
    height: 18,
    sprite: imgGreenCap,
    scale: 2,
    speed: 1,
    cycle_loop: [0, 1, 0, 2],
    rowFrame: 0,
    face_down: 0,
    face_left: 2,
    face_right: 3,
    face_up: 1,
    frame_limit: 10,
    // keypress,
  })
);

const imgBonus2 = new Image();
imgBonus2.src = "./assets/bonus.png";
imgBonus2.onload = () => player;

player.add(
  new Player({
    x: 180,
    y: 50,
    width: 52,
    height: 72.1,
    sprite: imgBonus2,
    scale: 1,
    speed: 1,
    cycle_loop: [10, 9, 10, 11],
    rowFrame: 4,
    face_down: 0,
    face_left: 1,
    face_right: 2,
    face_up: 3,
    frame_limit: 12,
    // keypress,
  })
);

const imgBonus = new Image();
imgBonus.src = "./assets/bonus.png";
imgBonus.onload = () => player;

player.add(
  new Player({
    x: 30,
    y: 100,
    width: 52,
    height: 72.1,
    sprite: imgBonus,
    scale: 1,
    speed: 1,
    cycle_loop: [7, 6, 7, 8],
    rowFrame: 4,
    face_down: 0,
    face_left: 1,
    face_right: 2,
    face_up: 3,
    frame_limit: 12,
    // keypress,
  })
);

const imgJug = new Image();
imgJug.src = "./assets/jug.png";
imgJug.onload = () => player;

player.add(
  new Player({
    x: null,
    y: null,
    width: 47.75,
    height: 64.5,
    sprite: imgJug,
    scale: 1,
    speed: 1.5,
    cycle_loop: [0, 1, 2, 3],
    rowFrame: 0,
    face_down: 0,
    face_left: 1,
    face_right: 2,
    face_up: 3,
    frame_limit: 14,
    keypress,
  })
);
