export default class Keypress {
  constructor() {
    this.key = {};

    window.addEventListener("keydown", ({ code }) => {
      this.key[code] = true;
      // console.log(this.key);
    });
    window.addEventListener("keyup", ({ code }) => {
      delete this.key[code];
      // console.log(this.key);
    });
  }
}

export const keypress = new Keypress();
