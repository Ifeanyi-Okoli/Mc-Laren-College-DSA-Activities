function zipIt(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length || j < arr2.length) {
        if(arr2[j] === undefined){
            result.push(arr1[i]);
            i++;
        }
         else if (arr1[i] === undefined){
            result.push(arr2[j]);
            j++;
        }
        else if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        }
       else if (arr1[i] === arr2[j]) {
            result.push(arr2[j], arr1[i]);
            j++;
            i++;
        }
    }
    return result;
}

console.log(zipIt([1, 5, 9, 10], [2, 4, 7])); // should return `[1, 2, 4, 5, 7, 9,10]`

console.log(zipIt([1, 2, 3, 4], [4, 5, 6, 7])); // should return `[1, 2, 3, 4, 4, 5, 6, 7]`