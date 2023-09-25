# 2048 Game

This is a simple implementation of the classic game 2048 using HTML, CSS, and JavaScript. In this game, you combine tiles with the same number to reach the ultimate goal of 2048. Below, you'll find a brief overview of the game code and how to play.

![PhoneBook](/Images/main.png)

## How to Play

1. Open the `2048.html` file in a web browser.
2. The game board is a 4x4 grid where tiles with numbers appear.
3. Use the arrow keys (Up, Down, Left, Right) to slide the tiles in the respective direction.
4. Tiles with the same number will combine when they collide.
5. Your score increases as you combine tiles.
6. The game ends when there are no more empty spaces and no more moves can be made.

![PhoneBook](/Images/second.png)
## Code Overview

### HTML (`2048.html`)

- The game interface is defined using HTML, including the game title, score display, and the game board container.

### CSS (`2048.css`)

- The CSS file defines the styling for the game, including the background image, tile colors, fonts, and layout.

### JavaScript (`2048.js`)

- The JavaScript code initializes the game board and handles game logic. Here are some key functions and features:

   - `setGame()`: Initializes the game board and event listeners.
   - `updateTile(tile, num)`: Updates the visual appearance of a tile based on its number.
   - Arrow key event listeners (`document.addEventListener("keyup", (e) => {...}`): Detects arrow key presses to move tiles.
   - Slide functions (`slideLeft()`, `slideRight()`, `slideUp()`, `slideDown()`): Implement the sliding and merging of tiles in each direction.
   - `isThereEmptyTile()`: Checks if there are any empty spaces on the board.
   - `setTwo()`: Randomly adds a new tile with a value of 2 to an empty space.

## Game Styling

- The game is styled with a dark background, and each tile has a distinct color based on its value.
- The CSS classes `t2`, `t4`, `t8`, ..., `t1024` define the background colors for tiles with different values.
- The tiles are displayed as squares with bold numbers in the center.

## Additional Notes

- The game keeps track of your score, which is displayed at the top.
- The game ends when you can't make any more moves, and your final score is displayed.
- You can customize the game board's initial state by uncommenting the alternative board configuration and commenting the default one in the `setGame()` function.

Feel free to explore the code and modify it to suit your preferences or add additional features to the game. Have fun playing 2048!