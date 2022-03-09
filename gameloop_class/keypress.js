const keyPress = {};

class Keypress {
  constructor() {
    window.addEventListener("keydown", ({ key }) => {
      keyPress[key] = true;
      // console.log(keyPress);
    });
    window.addEventListener("keyup", ({ key }) => {
      delete keyPress[key];
      // keyPress[key] = false;
      // console.log(keyPress);
    });
  }
}

new Keypress();

export { keyPress };
