//Zip It
// Write a function called zipIt that accepts two already sorted arrays and returns a new array which contains all the elements present in both the arrays in a sorted order.

// Note: Do not use a sorting algorithm
// Eg.

// zipIt([1,5,9,10], [2,4,7])
// will return [1,2,4,5,7,9,10]

// CODE TEMPLATE

function zipIt(arr1,arr2){
    let res = [];
while (i < arr1.length && j < arr2.length){
    if (arr1[i] < arr2[j]){
res[k] = arr1[i];
i++;
k++;
    } else{
        res[k] = arr2[j];
        j++;
        k++;
    }
}
while (i < s1){
    res[k++] = arr2[j++];
}
while (j < arr1.length){
    res[k++] = arr1[i++];
}
}
console.log(zipIt([1, 5, 9, 10], [2, 4, 7])); // should return `[1, 2, 4, 5, 7, 9,10]`

console.log(zipIt([1, 2, 3, 4], [4, 5, 6, 7])); // should return `[1, 2, 3, 4, 4, 5, 6, 7]`