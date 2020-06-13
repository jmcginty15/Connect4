describe('board initialization', function () {
    it('creates an array of specified WIDTH and HEIGHT', function () {
        expect(board).toEqual([[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]])
    })

    it('creates an HTML table for the game board', function () {
        expect(document.getElementById(`${HEIGHT - 1}-${WIDTH - 1}`).innerText).toBe('');
    })
})

describe('gameplay functions', function () {    
    it('places a piece in the correct position in the table', function () {
        placeInTable(3, 2);
        expect(document.getElementById('3-2').firstChild.classList[0]).toEqual('piece');
        expect(document.getElementById('3-2').firstChild.classList[1]).toEqual(`player-1`);
        document.getElementById('3-2').innerHTML = '';
    })

    it('finds the first empty cell in a column, or returns null if the column is full', function () {
        for (var i = HEIGHT - 1; i > 2; i--) {
            placeInTable(i, 0);
        }
        expect(findSpotForCol(0)).toBe(i);
        for (i = 2; i >= 0; i--) {
            placeInTable(i, 0);
        }
        expect(findSpotForCol(0)).toBe(null);
        for (i = 0; i < HEIGHT; i++) {
            document.getElementById(`${i}-0`).innerHTML = '';
        }
    })

    it('returns false if any elements in the board array are null, else returns true', function () {
        expect(checkForTie()).toBe(false);
        board.forEach(function(row, rowIndex, board) {
            row.forEach(function(cell, colIndex, row) {
                row[colIndex] = 1;
            })
            board[rowIndex] = row;
        })
        expect(checkForTie()).toBe(true);
        board.forEach(function(row, rowIndex, board) {
            row.forEach(function(cell, colIndex, row) {
                row[colIndex] = null;
            })
            board[rowIndex] = row;
        })
    })
})