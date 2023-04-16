// You are given the coordinates of n trees located in a garden. You have to find the minimum length of the rope that encloses all the trees (rounded to 2 decimal places) creating a rectangular field.

// Example
// Input: [[1,3], [2, 1], [2, 6], [4, 4], [4, 7], [5, 2], [6, 6], [7, 3]]
// Output: 24
// Here is a diagram representing above example 

function minimumLengthOfRope(treePositions) {
    //create array to store the x and y coordinates
    let xCoordinatesArr = [];
    let yCoordinatesArr = [];
    //iterate through the tree positions array
    for (let i = 0; i < treePositions.length; i++) {
        let currXCoordinate = treePositions[i][0];
        let currYCoordinate = treePositions[i][1];
        //populate the storage for x coordinates 
        xCoordinatesArr.push(currXCoordinate);
        //populate the storage for y coordinates
        yCoordinatesArr.push(currYCoordinate);
    }
    //get the maximum x and y coordinates from the storage
    let maxXCoordinate = Math.max(...xCoordinatesArr);
    let maxYCoordinate = Math.max(...yCoordinatesArr);
    //get the minimum x and y coordinates from the storage
    let minXCoordinate = Math.min(...xCoordinatesArr);
    let minYCoordnate = Math.min(...yCoordinatesArr);
    //find the lenght or rope by using the formular "L+B * 2"
    let ropeLength = ((maxXCoordinate - minXCoordinate) + (maxYCoordinate - minYCoordnate)) * 2;
    return ropeLength;
}

console.log(minimumLengthOfRope([[1, 1], [1, 3], [5, 3], [5, 1]]));// 12
console.log(minimumLengthOfRope([[1, 1], [5, 1], [1, 4], [4, 1]]));// 14
console.log(minimumLengthOfRope([[1,3], [2, 1], [2, 6], [4, 4], [4, 7], [5, 2], [6, 6], [7, 3]]));// 24