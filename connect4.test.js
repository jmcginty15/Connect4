describe('board initialization', function () {
    it('creates an array of specified WIDTH and HEIGHT', function () {
        makeBoard();
        expect(board).toEqual([[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]])
    })

    it('creates an HTML table for the game board', function () {
        makeHtmlBoard();
        expect(document.getElementById(`${HEIGHT-1}-${WIDTH-1}`).innerText).toBe('');
    })
})

describe('gameplay functions', function() {
    it('places a piece in the correct position in the table', function() {
        placeInTable(3, 2);
        expect(document.getElementById('3-2').firstChild.classList[0]).toEqual('piece');
        expect(document.getElementById('3-2').firstChild.classList[1]).toEqual(`player-1`);
        document.getElementById('3-2').innerHTML = '';
    })

    it('finds the first empty cell in a column', function () {
        placeInTable(HEIGHT - 1, 0);
        placeInTable(HEIGHT - 2, 0);
        placeInTable(HEIGHT - 3, 0);
        expect(findSpotForCol(0)).toBe(HEIGHT - 4);
        document.getElementById(`${HEIGHT - 1}-0`).innerHTML = '';
        document.getElementById(`${HEIGHT - 2}-0`).innerHTML = '';
        document.getElementById(`${HEIGHT - 3}-0`).innerHTML = '';
    })
})