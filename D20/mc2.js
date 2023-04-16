function targetInconnellSequence(lineNum, target) {
    let lastVal = lineNum * lineNum;
    for (let i = 0; i < lineNum; i++) {
        if (lastVal - 2 * 1 === target) {
            return lineNum - 1 - i;
        }
    }
    return -1;
}

function connellSequence(start, end, target) {
    let count = 0;
    // let seq = [];
    for (let i = start; i <= end; i++) {
        let targetPos = targetInconnellSequence(i, target)
        if (targetPos !== -1) {
            return count + targetPos;
        }
        count += i;
    }
    return "NOT FOUND";
}

console.log(connellSequence(1, 3, 4)) // 2
// sequence = [1, 2, 4, 5, 7, 9]
// Number 4 is at index 2

console.log(connellSequence(2, 3, 4)) // 1
// sequence = [2, 4, 5, 7, 9]
// Number 4 is at index 1

console.log(connellSequence(4, 5, 22)) // "Not Found"
// sequence = [10, 12, 14, 16, 17, 19, 21, 23, 25]
// Number 22 is not in the sequence