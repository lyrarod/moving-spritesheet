class Gameloop {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;

    this.canvas.width = 600;
    this.canvas.height = 400;
    this.canvas.style.backgroundColor = "whitesmoke";

    this.gameloop = this;
  }

  update = () => {
    console.log("update");
  };

  render = () => {
    console.log("render");
  };

  loop = () => {
    this.cleanCanvas();
    this.update();
    this.render();
    requestAnimationFrame(this.loop);
  };

  init = () => {
    console.log("init");
  };

  start = () => {
    this.init();
    requestAnimationFrame(this.loop);
  };

  cleanCanvas = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
}

export const { gameloop, canvas, ctx } = new Gameloop();
