// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

// A province is a group of directly or indirectly connected cities and no other cities outside of the group.

// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

// Return the total number of provinces. Example:

function bfsHelper(matrix,visited, city){
    let queue = [city];
    while(queue.length !== 0){
        let currCity = queue.shift();
        for(let anotherCity = 0; anotherCity < matrix.length; anotherCity++){
            if(!visited[anotherCity] && matrix[currCity][anotherCity] === 1){
                visited[anotherCity] = true;
                queue.push(anotherCity);
            }
        }
    }
}

function cityConnected(matrix, row = 0, col =0){
    let visited = new Array(matrix.length).fill(false);
    let circleCount =0;
    // while ()
    for(let i = 0; i < matrix.length; i++){
        if(!visited[i]){
            visited[i] = true;
            bfsHelper(matrix, visited, i);
            circleCount++;
        }
    }
    return circleCount;
    }
}

Input: [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Input: [[1,0,0],[0,1,0],[0,0,1]]
Output: 3