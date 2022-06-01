// create a 16x16 grid and place in grid container
const grid_container = document.querySelector('.grid_container');

for (let i = 0; i < 16; i++) {
    const grid_row = document.createElement('div');
    grid_row.style.display = 'flex';
    grid_container.appendChild(grid_row)
    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.textContent = "DIV";
        div.classList.add('grid_item');
        grid_row.appendChild(div);
    }
}

const grid_items = document.querySelectorAll('.grid_item');
grid_items.forEach((grid_item) => {

    // and for each one we add a 'click' listener
    grid_item.addEventListener('mouseover', function (e) {
      e.target.style.background = 'blue';
    });
});
