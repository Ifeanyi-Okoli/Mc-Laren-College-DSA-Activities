function bfsHelper(matrix,visited, friendNum){
    let queue = [friendNum];
    while(queue.length !== 0){
        let currFriend = queue.shift();
        for(let anotherFriendNum = 0; anotherFriendNum < matrix.length; anotherFriendNum++){
            if(!visited[anotherFriendNum] && matrix[currFriend][anotherFriendNum] === 1){
                visited[anotherFriendNum] = true;
                queue.push(anotherFriendNum);
            }
        }
    }
}

function friendCircles(students){
    let visited = new Array(students.length).fill(false);
    let circleCount =0;
    for (let i = 0; i < students.length; i++){
        if(!visited[i]){
            visited[i] = true;
            bfsHelper(students, visited, i);
            circleCount++;
        }
    }
    return circleCount;
}

console.log(friendCircles([[1,1,0],[1,1,0],[0,0,1]]));//2

console.log(friendCircles([[1,0,0],[0,1,0],[0,0,1]]));//3
