export const SolutionGenerator = (difficulty) => {
    var board = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]];
    
    // fill submatrix with random numbers
    var boxFiller = (pos_i, pos_j) => {

        var used = [true, false, false, false, false, false, false, false, false, false];

        for (var i=pos_i; i<pos_i+3 ; i+=1){
            for(var j=pos_j; j<pos_j+3; j+=1){
                var num;
                while(true){
                    num = Math.floor(Math.random()*10);
                    if(!used[num])
                        break;
                }
                board[i][j] = num;
                used[num] = true;
            }
        }
    }

    //to check that a number is not in the box, row or column
    var isNumberUsable = (num, pos_i, pos_j) => {
        // check for submatrix
        var square_i = pos_i-(pos_i%3);
        var square_j = pos_j - (pos_j%3);
        for(var i=square_i; i<square_i+3; i+=1){
            for(var j=square_j; j<square_j+3; j+=1){
                if (board[i][j] === num)
                    return false;
            }
        }
        //check for row
        for (var j=0; j<9; j+=1){
            if (board[pos_i][j] === num)
                return false;
        }
        //check for column
        for (var i=0; i<9; i+=1){
            if (board[i][pos_j] === num)
                return false;
        }
        return true;
    }

    //to fill the rest of the board
    var cellFiller = (i, j) => {
        //finished filling
        if (i === 8 && j === 9) 
            return true;
        
        // row finished
        if (j === 9){
            i+=1;
            j=0;
        }

        //skip cell if filled
        if(board[i][j] !== 0)
            return cellFiller(i, j+1);

        // fill cell
        for(var num=1; num<10; num+=1){
            if (isNumberUsable(num,i,j)){
                board[i][j] = num;
                if (cellFiller(i, j+1))
                    return true;
                board[i][j] = 0;
            }
        }
        
        return false;
    }

    // fill the 3 submatrix in the diagonal
    boxFiller(0,0);
    boxFiller(3,3);
    boxFiller(6,6);
    cellFiller(0,0);
    solution = JSON.parse(JSON.stringify(board));

    // now remove values based on difficulty
    var positions = [...Array(81).keys()].sort(() => { return Math.random()-0.5; });
    var indx = 0;
    var amountRemoved = 81-17;
    if (difficulty != -1) 
        amountRemoved -= difficulty*6;
    
    while (indx < amountRemoved){
        var pos = positions[indx];
        indx+=1;
        board[Math.floor(pos/9)][pos%9]=0;
    }

    return {sol: solution, board: board};
}