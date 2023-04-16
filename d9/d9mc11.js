function mapLetters(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] === undefined) {
            obj[str[i]] = [i];
        }
        else {
            obj[str[i]].push(i);
        }
    }
    return obj;
}

console.log(mapLetters("dodo")); // should return { d: [0, 2], o: [1, 3] }