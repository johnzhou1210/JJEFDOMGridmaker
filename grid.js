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
const [addRowButton, removeRowButton] = [document.querySelector("#add-row-button"), document.querySelector("#remove-row-button")];
const [addColumnButton, removeColumnButton] = [document.querySelector("#add-column-button"), document.querySelector("#remove-column-button")];
const resetGridButton = document.querySelector("#reset-grid-button");
const canvas = document.querySelector("#canvas");
const filluncoloredButton = document.querySelector("#fill-uncolored-button");
const emptyColorButton = document.querySelector("#empty-color-button");

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

            //Eric:
            //when rendering it wasnt using cell class in js so it didn't have color attribute
            //it was using only the styles.css
            let cell = new Cell(); // temp fix, problem when rerendering
            square.cell = cell; // temporary fix for color
            //color will be lost when renderGrid is called as cells are recreated everytime
            

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

/* Fills in uncolored cells with selected color in dropdown menu */
function fillUncolored() {
    //Eric
    var elements = document.querySelectorAll(".cell");
    //Get the selected color from the dropdown
    var colorDropdown = document.getElementById("colorDropdown");
    var selectedColor = colorDropdown.value;
    elements.forEach(function (element) {
        var cellcolor = element.cell.color; //gets color variable
        if (cellcolor === "white") { //if no color then gives color
            element.style.backgroundColor = selectedColor;
            element.cell.color = selectedColor;
        }
    });

    //renderGrid();
}

function emptyColor() {
    //Eric
    var elements = document.querySelectorAll(".cell");
    elements.forEach(function (element) {
        var cellcolor = element.cell.color; //gets color variable
        if (cellcolor !== "white") { //if not white then sets to white
            element.style.backgroundColor = "white";
            element.cell.color = "white";
        }
    });
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
    filluncoloredButton.addEventListener("click", () => {
        fillUncolored();
    });
    emptyColorButton.addEventListener("click", () => {
        emptyColor();
    });
};
