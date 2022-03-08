const gridDimensions = 600;
let gridSize = 16;

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

const flexContainer = document.querySelector('#flex-container');
const gridContainer = document.querySelector('#grid-container');
const clearBtn = document.querySelector('#clear-btn');
const sidebar = document.querySelector('#sidebar');
const colourSelector = document.querySelector('#colour-selector');
const sizeSelector = document.querySelector('#size-selector');
const sizeDisplay = document.querySelector('label[for="size-selector"]');


const main = () => {
  clearBtn.addEventListener('click', clearGrid);
  sizeSelector.addEventListener('mousemove', updateSize);
  sizeSelector.addEventListener('mouseup', redrawGrid);
  initGrid();
}
const initGrid = () => {
  for (let i = 0; i < gridSize; i +=1) {
    const row = document.createElement("div");
    row.classList.toggle("row");
    for (let j = 0; j < gridSize; j += 1) {
      const square = document.createElement('div');
      square.classList.add("square");
      let size = gridDimensions / gridSize
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;
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
    sq.style.background = '#ffffff';
  })
}

const changeColour = (e) => {
  if(!mouseDown && e.type === 'mouseover') return;
  const colour = colourSelector.value
  e.target.classList.add("coloured");
  e.target.style.background = colour;
};

const updateSize = () => {
  let newSize = sizeSelector.value;
  sizeDisplay.textContent = newSize;
  gridSize = newSize;
}

const redrawGrid = () => {
  while (gridContainer.firstChild) {
    console.log(gridContainer.firstChild);
    gridContainer.removeChild(gridContainer.firstChild);
  }
  initGrid();
}

main();