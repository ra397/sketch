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
function draw_grid(height, width) {
    // delete all leftover divs from previous window
    while (grid_container.firstChild) grid_container.removeChild( grid_container.firstChild );

    // draw grid with specified dimensions
    for (let i = 0; i < height; i++) {
        const grid_row = document.createElement('div');
        grid_row.style.flex = 1;
        grid_row.style.display = 'flex';
        grid_row.style.flexFlow = "row";
        grid_container.appendChild(grid_row)
        for (let j = 0; j < width; j++) {
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

draw_grid(16, 16);


// Add a button that resizes grid container based on user input
const grid_sizer = document.querySelector('#grid_sizer');
grid_sizer.addEventListener('click', () => {
    do {
        grid_height = prompt('Enter grid height: ');
    } while (grid_height < 1 || grid_height > 100);
    do {
        grid_width = prompt('Enter grid width: ');
    } while (grid_width < 1 || grid_width > 100);
    draw_grid(grid_height, grid_width);
})