const grid_container = document.querySelector('.grid_container');
grid_container.style.display = 'flex';
grid_container.style.flexFlow = "column";


// helper function that generates a random color
function randome_color() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
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

        // and for each one we add a 'click' listener
        grid_item.addEventListener('mouseover', function (e) {
        e.target.style.background = randome_color();
        });
    });
}

draw_grid(16);


//Add a button that resizes grid container based on user input
const grid_sizer = document.getElementById('grid_sizer');
const sizer_label = document.getElementById('range_label');
grid_sizer.addEventListener('change', (event) => {
    let new_label = grid_sizer.value + ' x ' + grid_sizer.value;
    sizer_label.textContent = new_label;
    draw_grid(grid_sizer.value);
})