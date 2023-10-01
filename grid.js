/* Cell class. Each Cell object will represent one square on the grid. */
class Cell {
  constructor(color) {
    this.color = (color == undefined) ? "white" : color;
  }
}

//////////////////* VARIABLES AND REFERENCES */////////////////////////
let [numRows, numColumns] = [0, 0]; // variables to keep track of number of rows and number of columns.
let grid = []; // Grid data is stored in here.

let selectedColor = "white";

/* Getting references to html elements with query selector (by finding id) */
const [addRowButton, removeRowButton] = [document.querySelector("#add-row-button"), document.querySelector("#remove-row-button")];
const [addColumnButton, removeColumnButton] = [document.querySelector("#add-column-button"), document.querySelector("#remove-column-button")];
const resetGridButton = document.querySelector("#reset-grid-button");
const canvas = document.querySelector("#canvas");

const selectColor = document.body.querySelector("#select-color-menu");
const fillGridButton = document.body.querySelector("#fill-grid-button");

//////////////////* FUNCTIONS */////////////////////////
/* Renders the grid visually on a canvas. */
function renderGrid() {
    // first clear canvas before rendering
    clearCanvas();
    let counter = 0;
    for (let row of grid) {
        let rowDiv = canvas.appendChild(document.createElement("div"));
        for (let i = 0; i < numColumns; i++) {
            let square = document.createElement("div");
            square.className = "cell";
            square.id = counter + "" + i;
            square.style.backgroundColor = row[i].color;
            square.onclick = colorCell;
            rowDiv.appendChild(square);
        }
        counter++;
    }
}

/* Clears the rendered canvas. Does not clear the grid. */
function clearCanvas() {
    for (let elem of canvas.querySelectorAll("*")) {
        elem.remove();
    }
}

/* Function to add 1 row to grid. */
function addRow() {
    // once you add a row or column at the beginning, numRows and numCols will be both equal to 1.
    if (numRows == 0 && numColumns == 0) {
        numRows = 1; numColumns = 1;
        grid = [[new Cell()]];
    } else {
        // create a new row
        newRow = [];
        // fill row with numColumns
        for (let i = 0; i < numColumns; i++) {
            newRow.push(new Cell());
        }
        // add the row to the grid
        grid.push(newRow);
        numRows++;
    }
    // render grid after making changes
    renderGrid();
}

/* Function to add 1 column to grid. */
function addColumn() {
    // once you add a row or column at the beginning, numRows and numCols will be both equal to 1.
    if (numRows == 0 && numColumns == 0) {
        numRows = 1; numColumns = 1;
        grid = [[new Cell()]];
    } else {
        // create a new column on each row
        for (let row of grid) {
            row.push(new Cell());
        }
        numColumns++;
    }
    // render grid after making changes
    renderGrid();
}

/* Function to remove 1 row from the grid. */
function removeRow() {
   // Farhana will implement this
   if (numRows > 0) {
    grid.pop();
    numRows--;
    renderGrid();
}
if(numRows === 0){
    numColumns = 0;
}

}

/* Function to remove 1 column from the grid. */
function removeColumn() {
    // Farhana will implement this
    if (numColumns > 0) {
        
        for (let row=0; row<grid.length;row++) {
            grid[row].pop();
        }
        numColumns--;
        renderGrid();
    }
    if(numColumns === 0){
        numRows = 0;
    }
} 

/* Clears the grid. Also clears the canvas as well. */
function resetGrid() {
    numRows = 0; numColumns = 0;
    grid = [];
    clearCanvas();
}

/* Fill the entire grid with the selected color. */
function fillGrid() {
    for (let row of grid) {
        for (let cell of row) {
            cell.color = selectedColor;
        }
    }
    renderGrid();
}

/* Color one cell in the grid with the selected color. */
function colorCell() {
    grid[this.id[0]][this.id[1]].color = selectedColor;

    renderGrid();
}

/* Set the color in selectedColor variable */
function setColor(chosenColor) {
    selectedColor = chosenColor;
}

//////////////////* EVENTS */////////////////////////
window.onload = () => {
    resetGridButton.addEventListener("click", () => {
        resetGrid();
    });
    addRowButton.addEventListener("click", () => {
        addRow();
    });
    addColumnButton.addEventListener("click", () => {
        addColumn();
    });
    removeRowButton.addEventListener("click", () => {
        removeRow();
    });
    removeColumnButton.addEventListener("click", () => {
        removeColumn();
    });
    fillGridButton.addEventListener("click", () => {
        fillGrid();
    });
    selectColor.addEventListener("change", (event) => {
        setColor(event.target.value);
    });
};
