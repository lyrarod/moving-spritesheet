export default class Keyboard {
  constructor() {
    this.keypress = {};

    window.addEventListener("keydown", (e) => {
      this.keypress[e.code] = true;
      // console.log(this.keypress);
    });

    window.addEventListener("keyup", (e) => {
      this.keypress[e.code] = false;
      // console.log(this.keypress);
      delete this.keypress[e.code];
    });
  }
}

const keyboard = new Keyboard();
export const { keypress } = keyboard;
