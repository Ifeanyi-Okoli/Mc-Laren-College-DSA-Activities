//Implement the function minimumThree to find the 3 smallest numbers from a given unsorted 
//array of distinct integers. The function should return an array containing the 3 
//smallest numbers in ascending order.

// Note: Its given that the size of the array will be atleast 3 and all the numbers will 
//be unique.

function minimumThree(arr) {
    let result = [];
    arr.sort();
    for(let i = 0; i < 3; i++){
        result.push(arr[i]);
    }
    return result;
}
console.log(minimumThree([1, 5, 8, 4, -9, 7, 3]));// should print [-9,1,3]