//Task
// Given an array of N integers, you have to find how many times you have to add up the smallest 
//numbers in the array until their Sum becomes greater or equal to K.

// Notes:
// List size is at least 3.

// All numbers will be positive.

// Numbers could occur more than once , (Duplications may exist).

// Threshold K will always be reachable.

// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:
// We add two smallest elements (1 + 2), their sum is 3 .

// Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .

// Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required 
//to do this .

function minimumSteps(numbers, value) {
    numbers.sort();
    let count = 0;
    let sum = 0;
    if (value < numbers[0]){
        return 0;
    }
    for (let i = 0; i < numbers.length-1; i++) {
        if(numbers.length === 9){
            sum+=numbers[i];
            count++;
        }
        if (sum >= value){
            return count;
        }
    }
    for (let i = 0; i < numbers.length-1; i++) {        
        sum = sum + numbers[i] + numbers[i + 1];
        count++;
        if (sum >= value) {
            return count;
        }
    }
    
}

console.log(minimumSteps([4, 6, 3], 7));//, 1
console.log(minimumSteps([10, 9, 9, 8], 17));//, 1
console.log(minimumSteps([8, 9, 10, 4, 2], 23));//, 3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 99, 67], 464));//, 8
console.log(minimumSteps([4, 6, 3], 2));//, 0