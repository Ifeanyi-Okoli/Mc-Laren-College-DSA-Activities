// Subtract Big Numbers
// Allowed Time: 40 mins

// We need to subtract big numbers and we require your help. By Big we mean that the whole string can't be fit in Number data type so you can't just typecast the string to number and find the difference.

// Write a function that returns the difference of two numbers. The input numbers are strings and the function must return a string.

// Examples

function subtractBigNums(str1, str2) {    
    let result = [];
    arr1 = str1.split("");
    arr2 = str2.split("");
    let d = arr1.length - 1
    let e = arr2.length - 1
    for (let i = d, j = e; i >= 0, j >= 0; i--, j--) {
        if (arr1[i] < arr2[j]) {
            arr1[i] = parseInt(arr1[i]) + 10;
            arr1[i - 1] = arr1[i - 1] - 1;
            let diff = arr1[i] - arr2[j];
            result.push(diff);            
        }
        else {
            let diff = arr1[i] - arr2[j];
            result.push(diff);
        }     
    }
    let result1 = result.reverse();
    if(d !== e && d > e){
        let k = d-e;
        for(let i = 0; i < k; i++){
            result1.unshift(arr1[i]);
        }
    }
    let result2 = result1.join("");
    return result2
}
console.log(subtractBigNums('10051515135', '8412512')); // should return '10043102623'
console.log(subtractBigNums('12612363912306306312009881', '1284612399923200255129015'));  // should return '11327751512383106056880866'