function maskify(str) {
    let arr = str.split("");
    //console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== " " && i < arr.length-4) {
            arr[i] = "#";
            //console.log(str[i])
        }
        // str[i] = str[i];
    }
    result = arr.join("");
return result;
}
console.log(maskify('4207 9992 8701 4443'));//`#### #### #### 4443`
console.log(maskify('abcdefghijklmnopqrstuvwxyz'));// `######################wxyz`
console.log(maskify('abcdefghijklmnopqrstuv       wxyz'));//`######################       wxyz`
console.log(maskify('abcdefghijklmnopqrstuv       w x  y   z'));// `######################       w x  y   z`