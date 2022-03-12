import { canvas } from "./gameloop.js";
import Sprite from "./sprite.js";
import { keypress } from "./keypress.js";

export default class Player extends Sprite {
  constructor(options) {
    super(options);

    this.arrayOfPlayers = [];
  }

  add = (p) => this.arrayOfPlayers.push(p);

  move = () => {
    let hasMoved = false;

    if (this.options.keypress) {
      if (keypress.key.a && !keypress.key.d) {
        hasMoved = true;
        this.options.x -= this.options.speed;
        this.options.currentDirection = this.options.face_left;

        if (this.options.x + this.options.width < 0)
          this.options.x = canvas.width;
      }
      if (keypress.key.d && !keypress.key.a) {
        hasMoved = true;
        this.options.x += this.options.speed;
        this.options.currentDirection = this.options.face_right;

        if (this.options.x > canvas.width) this.options.x = -this.options.width;
      }

      if (keypress.key.w && !keypress.key.s) {
        hasMoved = true;
        this.options.y -= this.options.speed;
        this.options.currentDirection = this.options.face_up;

        if (this.options.y + this.options.height < 0)
          this.options.y = canvas.height;
      }
      if (keypress.key.s && !keypress.key.w) {
        hasMoved = true;
        this.options.y += this.options.speed;
        this.options.currentDirection = this.options.face_down;

        if (this.options.y > canvas.height)
          this.options.y = -this.options.height;
      }
    }

    if (hasMoved) {
      this.options.frame_count++;
      if (this.options.frame_count >= this.options.frame_limit) {
        this.options.frame_count = 0;
        this.options.currentLoopIndex++;

        if (this.options.currentLoopIndex >= this.options.cycle_loop.length) {
          this.options.currentLoopIndex = 0;
        }
      }
    }

    if (!hasMoved) this.options.currentLoopIndex = 0;
  };

  init = () => {
    this.options.x =
      canvas.width / 2 - (this.options.width * this.options.scale) / 2;
    this.options.y =
      canvas.height - this.options.height * this.options.scale - 10;
  };
}

export const player = new Player();

const imgJug = new Image();
imgJug.src = "jug.png";
imgJug.onload = () => player;

player.add(
  new Player({
    x: null,
    y: 100,
    width: 47.75,
    height: 64.5,
    sprite: imgJug,
    scale: 1,
    speed: 1.4,
    cycle_loop: [0, 1, 2, 3],
    column: 0,
    face_down: 0,
    face_left: 1,
    face_right: 2,
    face_up: 3,
    frame_limit: 14,
    currentDirection: null,
    currentLoopIndex: 0,
    frame_count: 0,
    // keypress,
  })
);

const imgGreenCap = new Image();
imgGreenCap.src = "./green_cap_16x18.png";
imgGreenCap.onload = () => player;

player.add(
  new Player({
    x: 100,
    y: 100,
    width: 16,
    height: 18,
    color: "cyan",
    sprite: imgGreenCap,
    scale: 2,
    speed: 1,
    cycle_loop: [0, 1, 0, 2],
    column: 0,
    face_down: 0,
    face_left: 2,
    face_right: 3,
    face_up: 1,
    frame_limit: 10,
    currentDirection: null,
    currentLoopIndex: 0,
    frame_count: 0,
    // keypress,
  })
);

const imgBonus = new Image();
imgBonus.src = "./bonus.png";
imgBonus.onload = () => player;

player.add(
  new Player({
    x: 150,
    y: 150,
    width: 52,
    height: 72,
    color: "cyan",
    sprite: imgBonus,
    scale: 1,
    speed: 1,
    cycle_loop: [7, 6, 7, 8],
    column: 4,
    face_down: 0,
    face_left: 1,
    face_right: 2,
    face_up: 3,
    frame_limit: 12,
    currentDirection: null,
    currentLoopIndex: 0,
    frame_count: 0,
    keypress,
  })
);
