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