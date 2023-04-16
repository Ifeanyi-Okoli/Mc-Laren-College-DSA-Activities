function isPalindromic(str =""){
    if(str.length === 0 || str.length === 1){
        return true;
    }
    let firstChar = str[0];
    let lastChar = str[str.length-1]

    if(firstChar !== lastChar){
        return false;
    }
    let remainingStr = str.substring(1, str.length-1)
    return isPalindromic(remainingStr);
}


console.log(isPalindromic('viv'));//true
console.log(isPalindromic('abc'));//false
console.log(isPalindromic(''));//true