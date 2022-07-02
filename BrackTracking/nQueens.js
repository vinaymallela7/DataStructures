function placeQueens(board, row, col, queens, arranged, ans){

    if(arranged == queens){
        console.log(ans);
        // console.log(board);
        return;
    }
    if(col == board.length){
        row++;
        col = 0;
    }
    if(row == board.length){
        return;
    }

    if(isSafe(board, row, col)){
        board[row][col] = true;
        placeQueens(board, row, col+1, queens, arranged+1, [...ans, col]);
        board[row][col] = false;
    }
    placeQueens(board, row, col+1, queens, arranged, ans);
}
function isSafe(board, i, j){
    let row = i; let col = j;
    while(row >= 0){
        if(board[row][col]){
            return false;
        }
        row--;
    }

    row = i; col = j;
    while(col >= 0){
        if(board[row][col]){
            return false;
        }
        col--;
    }

    row = i; col = j;
    while(row >= 0){
        if(board[row][col]){
            return false;
        }
        row--;
        col--;
    }

    row = i; col = j;
    while(row >= 0){
        if(board[row][col]){
            return false;
        }
        row--;
        col++;
    }
    return true;
}
let boardRow = new Array(4).fill(false);
let board = [[...boardRow], [...boardRow], [...boardRow], [...boardRow]];
placeQueens(board, 0, 0, 4, 0, []);