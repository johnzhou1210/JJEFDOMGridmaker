class Cell {
  constructor(color) {
    this.color = (color == undefined) ? "white" : color;
  }
}

let [numRows, numCols] = [0, 0];
var grid = [];

// once you add a row or column at the beginning, numRows and numCols will be both equal to 1.

function addRow() {
    if (numRows == 0 && numCols == 0) {
        numRows = 1; numCols = 1;
        grid = [[new Cell()]];
    } else {
        // create a new row
        newRow = [];
        // fill row with numCols
        for (i = 0; i < numCols; i++) {
            newRow.push(new Cell());
        }
        numRows++;
    }
}




function addCol() {
    if (numRows == 0 && numCols == 0) {
        numRows = 1; numCols = 1;
        grid = [[new Cell()]];
    } else {
        // create a new column
        // fill row with numCols
        for (let row of grid) {
            row.push(new Cell());
        }
        numCols++;
    }
}
