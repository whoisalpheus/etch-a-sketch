// Etch-a-Sketch

// Create webpage with a 16x16 grid of square divs
// const div = document.createElement('div');
// div.className = 'grid-divs';
// div.innerText = 'Grid';
// document.container.appendChild(div);

// Use for loop to make 16 x 16 grid
// while (n > 1 || n < 16)

// function createGrid(x){
//     for (i = 0; i < x; i++) {
//         for (j= 0; j < x; j++) {
//             return '#';
//         }
//         return '#';
// }} console.log(createGrid(17));

// This is practice adding divs and styling in js:

const body = document.querySelector('body');
const div = document.createElement('div');

// Styling
div.textContent = 'Hello, World!';
div.style.color = 'yellow';
div.style.backgroundColor = 'blue';

body.appendChild(div);