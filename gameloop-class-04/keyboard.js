export const keypressed = {};

addEventListener("keydown", ({ code }) => (keypressed[code] = true));

addEventListener("keyup", ({ code }) => (keypressed[code] = false));
