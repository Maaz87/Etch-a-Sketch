# Etch-a-Sketch

A browser-based drawing app inspired by the classic Etch-A-Sketch toy. The project creates a flexible square grid, lets the user draw by hovering across cells, and supports generating a new sketch pad with a custom number of squares per side while keeping the total board area consistent.

## Features

- Default 16x16 grid created dynamically with JavaScript
- Flexbox-based layout for the drawing board
- Hover interaction that colors grid cells as the mouse passes over them
- Button to prompt for a new grid size up to 100 squares per side
- Rebuilds the grid while keeping the same overall canvas dimensions
- Responsive square sizing based on the chosen grid size

## How to Run

1. Open the project folder in a browser.
2. Load the `index.html` file.
3. Move the mouse over the grid to draw.
4. Click the button to enter a new size and generate a fresh sketch pad.

## Project Requirements Covered

This project follows the Odin Project Etch-a-Sketch assignment and includes:

- Creating a 16x16 grid using JavaScript
- Using Flexbox to arrange the squares in rows and columns
- Adding a hover effect to change square color
- Creating a button that asks for a new grid size
- Maintaining the same total canvas width while resizing the grid
- Limiting the maximum user input to 100

## Extra Credit

Potential enhancements include:

- Random RGB color generation for each hover interaction
- Progressive darkening so each pass makes a square 10% darker until it becomes fully black or fully colored

## Files

- `index.html` — HTML structure, styling, and JavaScript logic
- `README.md` — project overview and instructions

## License

This project is for educational purposes as part of The Odin Project curriculum.