it('creates an array of specified WIDTH and HEIGHT'), function () {
    WIDTH = 7;
    HEIGHT = 6;
    board = [];
    makeBoard();
    expect(board).toEqual([[null, null, null, null, null, null, null],
                           [null, null, null, null, null, null, null],
                           [null, null, null, null, null, null, null],
                           [null, null, null, null, null, null, null],
                           [null, null, null, null, null, null, null],
                           [null, null, null, null, null, null, null]])
}