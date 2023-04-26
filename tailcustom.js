/* eslint-disable @typescript-eslint/no-require-imports */
const { format } = require("fgtw");

// get figma gradient
const gradient =
	"background: radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.33) 0px, rgba(0, 0, 0, 0) 50%), radial-gradient(at 98% 1%, rgba(212, 25, 118, 0.33) 0px, rgba(0, 0, 0, 0) 50%)";
console.log(format(gradient));
console.log("copied to clipboard");
