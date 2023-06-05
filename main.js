// Etch-a-Sketch

const container = document.querySelector('.container');
// const gridContainer = document.querySelectorAll('.grid');

// const myGrid = document.createElement('div');
// myGrid.classList.add('grid');
// container.appendChild(myGrid);

// Use for loop to make 16 x 16 grid

// Method 1: in a function
// while (n > 1 || n < 16)

function createGrid(n){
    // Rows
    for (let i = 0; i < n; i++) {
        // Columns
        for (let j = 0; j < n; j++) {
            const myGrid = document.createElement('div');
            myGrid.classList.add('grid');
            container.appendChild(myGrid);
        }

}} createGrid(16);

// Method 2: simple for loop with no function
// const squareCount = 16;

// for (let i = 0; i < squareCount * squareCount; i++) {

// }

// Method 3: ???
// for (let i = 0; i < 16; i++) {
//         const myColumns = document.createElement('div');
//         const myRows = document.createElement('div');
//         for (let j= 0; j < 16; j++) {
//                 myColumns.classList.add('column');
//                 container.appendChild(myColumns);
//         }
//         myRows.classList.add('row');
//         myColumns.appendChild(myRows);
// }
