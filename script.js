const FLEX_CONTAINER = document.createElement('div');
const GRID_CONTAINER = document.createElement('div');

FLEX_CONTAINER.setAttribute("id", "flex-container");
GRID_CONTAINER.setAttribute("id", "grid-container")

for (let i = 0; i < 16; i +=1) {
  const row = document.createElement("div");
  row.classList.toggle("row");
  for (let j = 0; j < 16; j += 1) {
    const square = document.createElement('div');
    square.classList.toggle("square");
    square.addEventListener("mouseover", () => {
      square.classList.toggle("coloured");
    })
    row.appendChild(square);
  }
  GRID_CONTAINER.appendChild(row);
}


FLEX_CONTAINER.appendChild(GRID_CONTAINER);
document.body.appendChild(FLEX_CONTAINER);