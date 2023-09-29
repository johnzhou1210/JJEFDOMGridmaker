/* Cell class. Each Cell object will represent one square on the grid. */
class Cell {
  constructor(color) {
    this.color = (color == undefined) ? "white" : color;
  }
}

//////////////////* VARIABLES AND REFERENCES */////////////////////////
let [numRows, numColumns] = [0, 0]; // variables to keep track of number of rows and number of columns.
let grid = []; // Grid data is stored in here.

/* Getting references to html elements with query selector (by finding id) */
let [addRowButton, removeRowButton] = [document.querySelector("#add-row-button"), document.querySelector("#remove-row-button")];
let [addColumnButton, removeColumnButton] = [document.querySelector("add-column-button"), document.querySelector("remove-column-button")];


//////////////////* FUNCTIONS */////////////////////////
// once you add a row or column at the beginning, numRows and numCols will be both equal to 1.
/* Function to add 1 row to grid. */
function addRow() {
    if (numRows == 0 && numColumns == 0) {
        numRows = 1; numColumns = 1;
        grid = [[new Cell()]];
    } else {
        // create a new row
        newRow = [];
        // fill row with numColumns
        for (i = 0; i < numColumns; i++) {
            newRow.push(new Cell());
        }
        numRows++;
    }
}

/* Function to add 1 column to grid. */
function addColumn() {
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
}

/* Function to remove 1 row from the grid. */
function removeRow() {
   // Farhana will implement this
}

/* Function to remove 1 column from the grid. */
function removeColumn() {
    // Farhana will implement this
} 

//////////////////* EVENTS */////////////////////////
window.onload = () => {
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