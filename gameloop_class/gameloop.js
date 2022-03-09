class Gameloop {
  constructor() {
    this.canvasEl = document.createElement("canvas");
    document.body.append(this.canvasEl);

    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.CANVAS_WIDTH = this.canvas.width = 500;
    this.CANVAS_HEIGHT = this.canvas.height = 300;
  }

  render() {
    // console.log("gameloop render...");
  }
  update() {
    // console.log("gameloop update...");
  }
  init() {
    // console.log("gameloop init...");
  }

  loop() {
    this.render();
    this.update();
    requestAnimationFrame(() => this.loop());
  }

  start() {
    this.init();
    this.loop();
  }
}

export const gameloop = new Gameloop();
