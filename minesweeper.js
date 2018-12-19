document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = {
   cells:
      [
      {row: 0, col: 0, hidden: true, isMine: Math.floor(Math.random()*2), surroundingMines: 0, isMarked: false},
      { row: 0, col: 1, hidden: true, isMine: Math.floor(Math.random()*2), surroundingMines: 0, isMarked: false},
      { row: 0, col: 2, hidden: true, isMine: Math.floor(Math.random()*2), surroundingMines: 0, isMarked: false },
      {row: 1, col: 0, hidden: true, isMine: Math.floor(Math.random()*2), surroundingMines: 0, isMarked: false },
      {row: 1, col: 1, hidden: true, isMine: Math.floor(Math.random()*2), surroundingMines: 0, isMarked: false },
      {row: 1, col: 2, hidden: true, isMine: Math.floor(Math.random()*2), surroundingMines: 0, isMarked: false },
      {row: 2, col: 0, hidden: true, isMine: Math.floor(Math.random()*2), surroundingMines: 0, isMarked: false },
      {row: 2, col: 1, hidden: true, isMine: Math.floor(Math.random()*2), surroundingMines: 0, isMarked: false },
      {row: 2, col: 2, hidden: true, isMine: Math.floor(Math.random()*2), surroundingMines: 0, isMarked: false } 
    ]
 };

function startGame () {
  for (a = 0; a < board.cells.length; a++) {
      board.cells[a].surroundingMines = countSurroundingMines(board.cells[a])
  }
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine == 0 && board.cells[i].isMarked ) {
      return;
    }
    else if (board.cells[i].isMine == 0 && board.cells[i].hidden) {
      return;
    }
  };

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
     lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let surrounding =  lib.getSurroundingCells(cell.row, cell.col);
  let countMines = 0 ;
  for(j = 0; j <surrounding.length; j ++) {
    if(surrounding[j].isMine) {
      countMines ++;
    }
  }
  return countMines;
  
}

