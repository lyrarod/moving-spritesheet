class Keypress {
  constructor() {
    this.key = {};

    addEventListener("keydown", ({ key }) => (this.key[key] = true));
    addEventListener("keyup", ({ key }) => delete this.key[key]);
  }
}

export const keypress = new Keypress();
