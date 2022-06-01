// create a 16x16 grid and place in grid container
const grid_container = document.querySelector('.grid_container');

for (let i = 0; i < (16); i++) {
    const div = document.createElement('div');
    grid_container.appendChild(div);
}
