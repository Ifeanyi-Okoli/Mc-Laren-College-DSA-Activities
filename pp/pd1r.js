function maskify(str) {
    let arr = str.split("");
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== " " && count < 4) {
            count++;
        }
        else if (arr[i] !== " " && count >= 4) {
            arr[i] = "#";
        }
    }
    result = arr.join("");
    return result;
}
console.log(maskify('4207 9992 8701 4443'));//`#### #### #### 4443`
console.log(maskify('abcdefghijklmnopqrstuvwxyz'));// `######################wxyz`
console.log(maskify('abcdefghijklmnopqrstuv       wxyz'));//`######################       wxyz`
console.log(maskify('abcdefghijklmnopqrstuv       w x  y   z'));// `######################       w x  y   z`