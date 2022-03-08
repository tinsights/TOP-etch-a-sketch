const DEFAULTBG = '#ffffff';

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

const flexContainer = document.querySelector('#flex-container');
const gridContainer = document.querySelector('#grid-container');
const clearBtn = document.querySelector('#clear-btn');
const sidebar = document.querySelector('#sidebar');
const colourSelector = document.querySelector('#colour-selector');

const main = () => {
  clearBtn.addEventListener('click', clearGrid);
  initGrid();
}
const initGrid = () => {
  for (let i = 0; i < 16; i +=1) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    for (let j = 0; j < 16; j += 1) {
      const square = document.createElement('div');
      square.classList.add("square");
      square.addEventListener("mouseover", changeColour);
      square.addEventListener("mousedown", changeColour);
      row.appendChild(square);
    }
    gridContainer.appendChild(row);
  }
}

const clearGrid = () => {
  const colouredSquares = Array.from(document.querySelectorAll('.coloured'));
  colouredSquares.forEach((sq) => {
    sq.style.background = DEFAULTBG;
  })
}

const changeColour = (e) => {
  if(!mouseDown && e.type === 'mouseover') return;
  const colour = colourSelector.value
  console.log(e.target);
  e.target.classList.add("coloured");
  e.target.style.background = colour;
};

main();