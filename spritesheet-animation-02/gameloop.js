class Gameloop {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = 600;
    this.canvas.height = 400;
    this.canvas.style.boxShadow = "0 0 16px #0007";
    this.canvas.style.backgroundColor = "whitesmoke";

    this.gameloop = this;
  }

  loop() {
    this.cleanCanvas();
    this.update();
    this.render();
    requestAnimationFrame(() => this.loop());
  }
  start() {
    requestAnimationFrame(() => this.loop());
  }
  cleanCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export const { gameloop, canvas, ctx } = new Gameloop();
