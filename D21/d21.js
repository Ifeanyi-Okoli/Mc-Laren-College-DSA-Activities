// There are N students in a class. Some of them are friends, others are not. Their friendship is transitive; if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. A friend circle is defined as a group of students who are direct or indirect friends.

// The input matrix will have a number of rows and columns equal to the number of students in a class. A cell [i,j] will hold the value 1 if student i and student j are friends; otherwise, the cell will hold the value 0.

// Write a function friendCircles which takes in such matrix and return the number of friend circles present. Example:
function bfsHelper(matrix, visited, row, col){
    let isValid = (nextRow, nextCol) => nextRow>=0 && nextRow < matrix.length && nextCol >= 0 && nextCol <matrix[0].length && !visited[nextRow][nextCol] && matrix[nextRow][nextCol]===1;

    let offsets = [[-1,0], [0,1], [1,0], [0,-1]]
    let queue =[[row,col]];
    while (queue.length !== 0){
       let [currRow, currCol] = queue.shift();
       for(let offset of offsets){
           let[xoffset, yoffset] = offset;
           let [nextRow, nextCol] = [currRow + xoffset, currCol + yoffset];
           if(isValid(nextRow, nextCol)){
               visited[nextRow] [nextCol] = true;
               queue.push[nextRow, nextCol]
           }
       }
    }

}
function friendCircles(students){
    let visited = new Array(students.length).fill(false);
    let circleCount = 0;
    for(let i = 0; i < students.length; i++){
        if(!visited[i]){
            visited[i] = true;
            bfsHelper(students, visited, i);
            circleCount++;
        }
    }
    return circleCount;
}
console.log(friendCircles([[1,1,0],[1,1,0],[0,0,1]]));
//Output: 2

console.log(friendCircles([[1,0,0],[0,1,0],[0,0,1]]));
// Output: 3