/* Cell class. Each Cell object will represent one square on the grid. */
class Cell {
  constructor(color) {
    this.color = (color == undefined) ? "white" : color;
  }
}

//////////////////* VARIABLES AND REFERENCES */////////////////////////
let [numRows, numColumns] = [0, 0]; // variables to keep track of number of rows and number of columns.
let grid = []; // Grid data is stored in here.

let selectedColor = "";

/* Getting references to html elements with query selector (by finding id) */
const [addRowButton, removeRowButton] = [document.querySelector("#add-row-button"), document.querySelector("#remove-row-button")];
const [addColumnButton, removeColumnButton] = [document.querySelector("#add-column-button"), document.querySelector("#remove-column-button")];
const resetGridButton = document.querySelector("#reset-grid-button");
const canvas = document.querySelector("#canvas");

const selectColor = document.body.querySelector("#select-color-menu");

//////////////////* FUNCTIONS */////////////////////////
/* Renders the grid visually on a canvas. */
function renderGrid() {
    // first clear canvas before rendering
    clearCanvas();
    for (let row of grid) {
        let rowDiv = canvas.appendChild(document.createElement("div"));
        for (let i = 0; i < numColumns; i++) {
            let square = document.createElement("div");
            square.className = "cell";
            rowDiv.appendChild(square);
        }
        
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
}

/* Function to remove 1 column from the grid. */
function removeColumn() {
    // Farhana will implement this
} 

/* Clears the grid. Also clears the canvas as well. */
function resetGrid() {
    numRows = 0; numColumns = 0;
    grid = [];
    clearCanvas();
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
};

selectColor.addEventListener("click", () => {
    selectedColor = selectColor.value;
});