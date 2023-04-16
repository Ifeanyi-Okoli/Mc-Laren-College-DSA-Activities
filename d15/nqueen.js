function formatBoard(board){
    let result = [];
    for(let col = 0; col < board.length; col++){
        let newRow = new Array(board.length).fill(".");
        newRow[board[col]] = "Q";
        result.push(newRow.join(""));
    }
    return result;
}

function nQueen(n){
let result = [];
let dfs = (i, n, slate) => {
    //backtracking case
    let lastQ= i-1;
    for(let prevQ = 0; prevQ<lastQ; prevQ++){
        //column conflict
        if(slate[prevQ] === slate[lastQ]) return;

        //diagonal conflict
        let rowDiff = Math.abs(prevQ - lastQ);
        let colDiff = Math.abs(slate[prevQ] - slate[lastQ]);

        if(rowDiff === colDiff) return;
    }
    //base case
    if(i === n){
        result.push(slate.slice())
        return;
    }
    //recursive case
    for(let col = 0; col<n; col++){
        slate.push(col);
        dfs(i+1, n, slate);
        slate.pop();
    }
}
dfs(0, n, []);
return result.map(board =>formatBoard(board));
}



console.log(nQueen(4));
console.log(nQueen(5));