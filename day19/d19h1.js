//Exercise : Bubble Sort Algorithm
// bubbleSortAlgorithm.md
// Write a function that sorts a given array using the Bubble Sort Algorithm and returns 
//the sorted Array. For eg.

// bubbleSort([1,5,3,0])
// should return [0,1,3,5]

// bubbleSort([-1,0,-5,5,8])
// should return [-5,-1,0,5,8]

// CODE TEMPLATE

function bubbleSort(arr) {
    let isSwapped = false;
    let len = arr.length;
    let i;
    let j;
    for (j = 0; j < len; j++) {
        for (i = 0; i < len; i++) {

            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSwapped = true;
            }

        }
        if (isSwapped === true) {
            i = 0;
        }
        else {
            break;
        }
    }
    return arr;
}
console.log(bubbleSort([1, 5, 3, 0])); // should return `[0,1,3,5]`
console.log(bubbleSort([-1, 0, -5, 5, 8])); // should return `[-5,-1,0,5,8]`