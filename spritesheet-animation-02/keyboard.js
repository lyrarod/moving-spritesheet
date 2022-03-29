export const keypressed = {};

window.addEventListener("keydown", ({ code }) => (keypressed[code] = true));
window.addEventListener("keyup", ({ code }) => (keypressed[code] = false));
