function helper(word, a) {
    let res = [];
    let temp = word.split("");
    temp.reverse();
    let newW = temp.join("");
    // console.log(newW);
    newW = `${a}${newW}`;
    let newW1 = `${a}${word}`;
    res.push(newW1, newW);
    // console.log(res)
    return res;
}

function permute(word) {
    let n = word.length;
    let result = [];
    //base case
    if (n < 2) result.push(word);
    if (n === 2) {
        let temp = word.split("");
        temp.reverse();
        let newW = temp.join("");
        result.push(word, newW);
    }
if(n>2){
    for (let i = 0; i < word.length; i++) {
        let a = word[i];
        let arr = word.split("");
        arr.splice(i, 1);
        let remainingWord = arr.join("");
        let r = helper(remainingWord, a)
        result.push(r);
    }
}
    let resultF = result.flat();
    return resultF;
}


console.log(permute('ABC'));
console.log(permute('AB'));
console.log(permute('A'));