# Etch-a-Sketch

A browser-based pixel drawing app inspired by the classic Etch-A-Sketch toy. This project lets users create a grid of squares, hover over cells to sketch, and generate a new grid with a custom size while keeping the same total canvas area.

## Features

- 16x16 default grid created dynamically with JavaScript
- Flexbox-based layout for the drawing board
- Hover effect that colors cells as the mouse passes over them
- Button to prompt for a new grid size up to 100 squares per side
- Rebuilds the grid without changing the overall canvas size
- Optional extra credit: random RGB color generation and progressive darkening

## How to Run

1. Open the project folder in your browser.
2. Load `index.html` in a browser.
3. Move your mouse over the grid to draw.
4. Click the button at the top to enter a new square count and create a fresh sketch pad.

## Project Requirements

This project follows the Odin Project Etch-a-Sketch assignment:

- Create a 16x16 grid of square divs using JavaScript
- Use Flexbox to display the grid
- Make each square change color on hover
- Add a button that asks for a new grid size and regenerates the board
- Keep the total canvas width constant while resizing the grid
- Limit the maximum grid size to 100

## Extra Credit

The app can be extended with:

- Random RGB coloring on every hover interaction
- Progressive darkening so each pass makes a square darker by 10% until it becomes fully black or fully colored

## Files

- `index.html` — page structure and JavaScript logic
- `README.md` — project overview and usage information

## License

This project is for educational purposes as part of The Odin Project curriculum.