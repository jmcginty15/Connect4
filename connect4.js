/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  const row = [];
  for (let i = 0; i < WIDTH; i++) {
    row.push(null);
  }
  for (let i = 0; i < HEIGHT; i++) {
    board.push(row);
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.querySelector('#board');

  // TODO: add comment for this code
  // this code creates a top row of the board and adds an event listener to it to listen for clicks
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  // top.addEventListener("click", handleClick);

  for (let x = 0; x < WIDTH; x++) {
    const headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // TODO: add comment for this code
  // this code builds the rows and columns of the html table that comprises the board
  // and gives each <td> element an id of the form 'row-col'
  // clickable column header cells have column ids 0 thr (WIDTH-1)
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  let y = HEIGHT - 1;
  let currCell = document.getElementById(`${y}-${x}`);
  while (y >= 0 && currCell.innerHTML !== '') {
    y--;
    currCell = document.getElementById(`${y}-${x}`);
  }
  if (y === -1) {
    return null;
  } else {
    return y;
  }
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  const cell = document.getElementById(`${y}-${x}`);
  console.log(cell);
  const newPiece = document.createElement('div');
  const player = `player-${currPlayer}`;
  newPiece.classList.add('piece', player);
  cell.appendChild(newPiece);
}

/** endGame: announce game end */

// function endGame(msg) {
//   // TODO: pop up alert message
// }

// /** handleClick: handle click of column top to play piece */

// function handleClick(evt) {
//   // get x from ID of clicked cell
//   let x = +evt.target.id;

//   // get next spot in column (if none, ignore click)
//   let y = findSpotForCol(x);
//   if (y === null) {
//     return;
//   }

//   // place piece in board and add to HTML table
//   // TODO: add line to update in-memory board
//   placeInTable(y, x);

//   // check for win
//   if (checkForWin()) {
//     return endGame(`Player ${currPlayer} won!`);
//   }

//   // check for tie
//   // TODO: check if all cells in board are filled; if so call, call endGame

//   // switch players
//   // TODO: switch currPlayer 1 <-> 2
// }

// /** checkForWin: check board cell-by-cell for "does a win start here?" */
// // a winning series of 4 will always include the last piece that was played, so I don't need to check every cell
// // I only need to check rows, columns, and diagonals that include the last played piece
// function checkForWin() {
//   function _win(cells) {
//     // Check four cells to see if they're all color of current player
//     //  - cells: list of four (y, x) cells
//     //  - returns true if all are legal coordinates & all match currPlayer

//     return cells.every(
//       ([y, x]) =>
//         y >= 0 &&
//         y < HEIGHT &&
//         x >= 0 &&
//         x < WIDTH &&
//         board[y][x] === currPlayer
//     );
//   }

//   // TODO: read and understand this code. Add comments to help you.

//   for (let y = 0; y < HEIGHT; y++) {
//     for (let x = 0; x < WIDTH; x++) {
//       const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
//       const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
//       const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
//       const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

//       if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
//         return true;
//       }
//     }
//   }
// }

// makeBoard();
// makeHtmlBoard();
