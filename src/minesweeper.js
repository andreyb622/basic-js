/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
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
  return matrix.map((rowArr, row) =>
    rowArr.map((cell, col) => {
      let count = 0;

      // перебираем сдвиги -1, 0, +1 по строке и по столбцу
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue; // это сама клетка — пропускаем

          // ?. — если строки matrix[row + dr] нет (выход за край), вернёт undefined, а не упадёт
          if (matrix[row + dr]?.[col + dc] === true) {
            count++;
          }
        }
      }

      return count;
    }),
  );
}

module.exports = {
  minesweeper,
};
