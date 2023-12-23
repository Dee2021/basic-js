const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array<boolean>>} matrix
 * @return {Array<Array<number>>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  if (!matrix || matrix.length === 0) {
    throw new NotImplementedError('Matrix is not provided.');
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  const resultMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));

  const isValidCell = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols;

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col]) {
        for (const [dRow, dCol] of directions) {
          const newRow = row + dRow;
          const newCol = col + dCol;
          if (isValidCell(newRow, newCol)) {
            resultMatrix[newRow][newCol]++;
          }
        }
      }
    }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};
