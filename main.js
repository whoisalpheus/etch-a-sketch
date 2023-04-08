// Etch-a-Sketch

const div = document.createElement('div');
div.classList.add('container');
document.body.appendChild(div);

// Create webpage with a 16x16 grid of square divs
// Must go within container !!!
// !!!!!
const myGrid = document.createElement('div');
myGrid.classList.add('squares');
document.body.appendChild(myGrid);


// Use for loop to make 16 x 16 grid
// while (n > 1 || n < 16)

// function createGrid(x){
//     for (i = 0; i < x; i++) {
//         for (j= 0; j < x; j++) {
//             return '#';
//         }
//         return '#';
// }} console.log(createGrid(17));

