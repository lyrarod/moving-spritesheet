export default class Gameloop {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  init = () => console.log("init");
  update = () => console.log("update");
  render = () => console.log("render");

  loop = () => {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.update();
    this.render();
    requestAnimationFrame(this.loop);
  };

  start = () => {
    this.init();
    this.loop();
  };
}

export const gameloop = new Gameloop();
export const { canvas, ctx } = gameloop;
