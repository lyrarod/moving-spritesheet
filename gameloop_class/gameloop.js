export default class Gameloop {
  constructor() {
    this.canvasEl = document.createElement("canvas");
    document.body.append(this.canvasEl);

    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.animate = null;

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  update = () => {
    // console.log("gameloop update...");
  };
  render = () => {
    // console.log("gameloop render...");
  };
  init = () => {
    // console.log("gameloop init...");
  };

  loop = () => {
    this.clearCanvas();
    this.update();
    this.render();
    this.animate = requestAnimationFrame(this.loop);
  };

  start = () => {
    this.init();
    this.loop();
  };

  clearCanvas = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
}

export const gameloop = new Gameloop();

export const { canvas, ctx, animate } = gameloop;
