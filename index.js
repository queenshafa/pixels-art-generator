let container = document.querySelector(".container");
let gridButton = document.querySelector("submit-grid");
let clearGridButton = document.querySelector(".clear-grid");
let gridWidth = document.querySelector("width-range");
let gridHeight = document.querySelector("height-range");
let colorButton = document.querySelector("color-input");
let eraseBtn = document.querySelector("erase-btn");
let paintBtn = document.querySelector("paint-btn");
let widthValue = document.querySelector("width-value");
let heightValue = document.querySelector("height-value");

let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
};
