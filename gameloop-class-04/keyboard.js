class Keyboard {
  keypress = {};

  constructor() {
    window.addEventListener("keydown", ({ code }) => {
      keypress[code] = true;
      // console.log(keypress);
    });

    window.addEventListener("keyup", ({ code }) => {
      keypress[code] = false;
      // console.log(keypress);
      delete keypress[code];
    });
  }
}

const keyboard = new Keyboard();

export const { keypress } = keyboard;
