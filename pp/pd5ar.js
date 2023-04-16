function getSentenceValue(sentence) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let a = 0;
    let b;
    let d;
    let f = "";
    let sentence1 = sentence.toLowerCase();
    let e;
    let arr = sentence.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let c = isUpper(arr[i]);
        if (c === true) {
            d = arr[i].toLowerCase();
            d = f + d;
            e = alphabets.indexOf(d) + 1;
        }
    }
    for (let i = 0; i < sentence1.length; i++) {
        b = alphabets.indexOf(sentence1[i]) + 1;
        a += b;
    }
    return (a);
}

function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}

console.log(getSentenceValue("aaa aaa")); // 6
console.log(getSentenceValue("aaa AAA")); // 9
console.log(getSentenceValue("aaa Aaa")); // 6
console.log(getSentenceValue("HELLO world")); // 176
console.log(getSentenceValue("Javascript is LEGENDARY"));//329
console.log(getSentenceValue("Her seaside sea-shelling business is really booming!")); //488