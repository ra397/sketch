let grid_size = 16; // the length of one side of the box grid
let color = 'black';

// create a reference for grid_container div
const grid_container = document.querySelector('.grid_container');
grid_container.style.display = 'flex';
grid_container.style.flexFlow = "column";


draw_grid(grid_size); // draw a 16x16 grid inside grid_container

// Add a range input that resizes grid container based on user input
const grid_sizer = document.getElementById('grid_sizer');
const sizer_label = document.getElementById('range_label');
grid_sizer.addEventListener('change', (event) => {
    let new_label = grid_sizer.value + ' x ' + grid_sizer.value;
    sizer_label.textContent = new_label;
    draw_grid(grid_sizer.value);
    grid_size = grid_sizer.value;
})

// Add a clear button that clears the grid
const clear_button = document.getElementById('clear');
clear_button.addEventListener('click', () => {
    draw_grid(grid_size)
})

// Add an erase button that changes color to white
const eraser_button = document.getElementById('eraser');
eraser_button.addEventListener('click', () => {
    console.log('clicked');
    color = 'white';
});


 /*FUNCTIONS*/

// helper function that generates a random color
function get_color() {
    console.log(color)
    return color;
}


// create a grid and place in grid container
function draw_grid(size) {
    // delete all leftover divs from previous window
    while (grid_container.firstChild) grid_container.removeChild( grid_container.firstChild );

    // draw grid with specified dimensions
    for (let i = 0; i < size; i++) {
        const grid_row = document.createElement('div');
        grid_row.style.flex = 1;
        grid_row.style.display = 'flex';
        grid_row.style.flexFlow = "row";
        grid_container.appendChild(grid_row)
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            div.style.flex = 1;
            div.classList.add('grid_item');
            grid_row.appendChild(div);
        }
    }
    // add hovering effect over each grid item
    const grid_items = document.querySelectorAll('.grid_item');

    grid_items.forEach((grid_item) => {

        // and for each one we add a 'mouseover' listener
        grid_item.addEventListener('mouseover', function (e) {
            e.target.style.background = get_color();
        });
    });
}