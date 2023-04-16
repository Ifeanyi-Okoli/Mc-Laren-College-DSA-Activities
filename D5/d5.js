function filterList(numbers, filterFunction) {
    let filteredList = [];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (filterFunction(number)) {
            filteredList.push(number);
        }
    }
    return filteredList;
}
let numbers = [4, 12, 54];

//call the function
filterList(numbers, isAbove80);
filterList(numbers, isEvenNumber);
filterList(numbers, isSingleDigit); 

// Complete the function trace for the above function call.
/*
Line 14:
filterList(numbers, isAbove80)
  isAbove80(4)
    return false
*/