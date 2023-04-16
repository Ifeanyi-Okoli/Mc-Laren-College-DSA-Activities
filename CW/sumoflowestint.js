// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    //use Math.min and push to result array

    //splice and use Math.min again and psuh the value again to result array.


  }
/*
  function sumTwoSmallestNumbers(numbers) {  
    //find the two smallest numbers

    //a place to store the smallest numbers
    let smallest;

    //a place to store the 2nd smallest numbers
    let secondSmallest;
    //compare the first two numbers in the array.
    if(numbers[0] < numbers[1]){
        smallest = numbers[0];
        secondSmallest=numbers[1];
    }else{
        smallest = numbers[1];
        secondSmallest=numbers[0];
    }
//iterate over numbers starting with the 3rd
for(let i = 2; i <numbers.length; i++){
    let currentNum = numbers[i];
    if(currentNum<smallest){
        secondSmallest = smallest;
        smallest = currentNum;
    }else if(currentNum < secondSmallest){
        secondSmallest = currentNum;
    }
}
    return smallest + secondSmallest;
  }


  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));//7
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])) //should return 3453455.

  */

/*
  function sumTwoSmallestNumbers(numbers) {      
    let smallest = Math.min.apply(null, numbers);
    let secondSmallest = Math.min.apply(null, numbers.filter(num=>num !== smallest))

    return smallest + secondSmallest;
  }


  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));//7
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])) //should return 3453455.


*/
  
//or
/*
  function sumTwoSmallestNumbers(numbers) {      
    let smallest = Math.min.apply(null, numbers);
    let indexOfSmallest = numbers.indexOf(smallest);
    let numbersWithoutSmallest = numbers.slice();
    numbersWithoutSmallest.splice(indexOfSmallest,1);
    let secondSmallest = Math.min.apply(null,  numbersWithoutSmallest);

    return smallest + secondSmallest;
  }


  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));//7
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])) //should return 3453455.

  */
  //or


  function sumTwoSmallestNumbers(numbers) {      
    let smallest = Math.min(...numbers);
    let indexOfSmallest = numbers.indexOf(smallest);
    let numbersWithoutSmallest = numbers.slice();
    numbersWithoutSmallest.splice(indexOfSmallest,1);
    let secondSmallest = Math.min(...numbersWithoutSmallest);

    return smallest + secondSmallest;
  }


  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));//7
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])) //should return 3453455.

  //or

  function sumTwoSmallestNumbers(numbers) {      
    numbers = numbers.sort()
    numbersWithoutSmallest.splice(indexOfSmallest,1);
    let secondSmallest = Math.min.apply(null,  numbersWithoutSmallest);

    return smallest + secondSmallest;
  }


  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));//7
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])) //should return 3453455.