class Gameloop {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.init();
    });

    this.animate = null;
  }

  update = () => {};
  render = () => {};
  init = () => {};

  loop = () => {
    this.cleanCanvas();
    this.update();
    this.render();
    this.animate = requestAnimationFrame(this.loop);
  };

  start = () => {
    this.init();
    this.loop();
  };

  cleanCanvas = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
}

export const gameloop = new Gameloop();

export const { canvas, ctx } = gameloop;
