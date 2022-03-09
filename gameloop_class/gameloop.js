class Gameloop {
  constructor() {}

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
