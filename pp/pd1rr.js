function maskify(str) {
    let result = "";
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        let ch = str[i];
        if (ch !== " ") {
            if (count >= 4){
                ch = "#";
            }
            count++;
        }
                result = ch + result;
    }
   // result += ch;
    return result;
}
console.log(maskify('4207 9992 8701 4443'));//`#### #### #### 4443`
console.log(maskify('abcdefghijklmnopqrstuvwxyz'));// `######################wxyz`
console.log(maskify('abcdefghijklmnopqrstuv       wxyz'));//`######################       wxyz`
console.log(maskify('abcdefghijklmnopqrstuv       w x  y   z'));// `######################       w x  y   z`