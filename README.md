# Etch-a-Sketch

A small browser-based drawing project inspired by the classic Etch-A-Sketch. The page creates a grid of square cells, lets the user draw by moving the mouse over them, and allows a new grid size to be generated through a prompt.

## Current Structure

This project is organized into separate files:

- index.html — page markup and the app container
- style.css — board sizing and square styling
- script.js — grid generation, button behavior, and hover interactions

## Current Implementation

- Loads a default 16x16 grid when the page opens
- Creates the squares dynamically with JavaScript
- Uses a fixed 960px container width for the board
- Calculates square size as 960 divided by the selected value
- Adds a button labeled Create New Grid
- Prompts the user to enter a new grid size value
- Clears the old grid and rebuilds a new one
- Applies random RGB colors to each square on hover
- Adds a progressive darkening effect with up to 10 interactions per square

## Features

- Dynamic grid generation
- Flexbox-based layout
- Hover interaction for drawing
- User-driven grid resizing through a prompt
- Consistent total board width across different grid sizes
- Randomized square colors and darkening effect

## How to Run

1. Open the project in a browser.
2. Load the HTML file directly.
3. Hover over the grid squares to draw.
4. Click the Create New Grid button.
5. Enter a value between 1 and 100 to generate a new grid size.

## Notes

- The project currently uses a 960px board width.
- Square size is calculated using the formula 960 divided by the number of squares per side.
- The hover effect uses random RGB values and darkens the square by 10% for each interaction up to 10 times.

## Files

- index.html — page structure
- style.css — layout and styling
- script.js — dynamic grid logic and interactions
- README.md — project overview and instructions

## License

This project is intended for educational use as part of the Odin Project curriculum.
