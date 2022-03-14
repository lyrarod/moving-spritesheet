export default class Gameloop {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);

    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.CANVAS_WIDTH = this.canvas.width = 600;
    this.CANVAS_HEIGHT = this.canvas.height = 400;

    this.animate = null;
  }

  update = () => {
    console.log("gameloop Update...");
  };

  render = () => {
    console.log("gameloop rendeR...");
  };

  loop = () => {
    this.backgroundCanvas();
    this.update();
    this.render();
    this.animate = requestAnimationFrame(this.loop);
  };

  start = () => {
    this.init();
    this.loop();
  };

  init = () => {};

  backgroundCanvas = () => {
    let imgBackground = new Image();
    imgBackground.src = "./assets/background.png";
    imgBackground.addEventListener("load", () => {
      ctx.drawImage(imgBackground, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    });
  };
}

export const gameloop = new Gameloop();

export const { canvas, ctx, CANVAS_WIDTH, CANVAS_HEIGHT, animate } = gameloop;
