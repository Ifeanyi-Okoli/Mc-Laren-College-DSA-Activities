function targetPosInConnellLine(lineNum, target) {
    let lastVal = lineNum * lineNum;
    for (let i = 0; i < lineNum; i++) {
        if (lastVal - 2 * 1 === target) {
            return lineNum - 1 - i;
        }
    }
    return -1;
}

function connellSequence(fromSeq, toSeq, target) {
    let preValCount = 0;
    // let seq = [];
    for (let seqNum = fromSeq; seqNum <= toSeq; seqNum++) {
        let targetPos = targetPosInConnellLine(seqNum, target)
        if (targetPos !== -1) {
            return preValCount + targetPos;
        }
        preValCount += seqNum;
    }
    return "NOT FOUND";
}

console.log(connellSequence(1, 3, 4)) // 2
// sequence = [1, 2, 4, 5, 7, 9]
// Number 4 is at index 2

console.log(connellSequence(2, 3, 4)) // 1
// sequence = [2, 4, 5, 7, 9]