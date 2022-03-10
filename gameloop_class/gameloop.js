class Gameloop {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.animate = null;

    this.canvasEl = document.createElement("canvas");
    document.body.append(this.canvasEl);
  }

  loadCanvas = () => {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 500;
    this.canvas.height = 300;
  };
  clearCanvas = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

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
    this.update();
    this.render();
    this.animate = requestAnimationFrame(this.loop);
  };

  start = () => {
    this.loadCanvas();
    this.init();
    this.loop();
  };
}

export const gameloop = new Gameloop();
