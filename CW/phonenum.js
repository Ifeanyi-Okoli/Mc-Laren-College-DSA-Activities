// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
/*
function createPhoneNumber(numbers){
  //place to store the phone number & append a (
  let phoneNumber = "("
      //append the first 3 numbers in the array
      phoneNumber += numbers[0].toString()+ numbers[1].toString()+ numbers[2].toString();      
//append a )
phoneNumber += ") ";     
// appendthe next 3 numbers
phoneNumber += numbers[3].toString()+ numbers[4].toString()+ numbers[5].toString();     
//append a -
phoneNumber += "-";     
//append the last four numbers
phoneNumber += numbers[6].toString()+ numbers[7].toString()+ numbers[8].toString() + numbers[9].toString();    
return phoneNumber; 
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
*/
//or 

/*
function createPhoneNumber(numbers){
    //place to store the phone number & append a (
    let phoneNumber = "("
        //append the first 3 numbers in the array
        phoneNumber += "" +numbers[0]+ numbers[1]+ numbers[2];      
  //append a )
  phoneNumber += ") ";     
  // appendthe next 3 numbers
  phoneNumber += "" +numbers[3]+ numbers[4]+ numbers[5];     
  //append a -
  phoneNumber += "-";     
  //append the last four numbers
  phoneNumber += "" + numbers[6]+ numbers[7]+ numbers[8] + numbers[9];    
  return phoneNumber; 
  }
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

*/

//or
/*
function createPhoneNumber(numbers) {
    //place to store the phone number & append a (
    let phoneNumber = "("
    //append the first 3 numbers in the array
    phoneNumber += `${numbers[0]}${numbers[1]}${numbers[2]}`;
    //append a )
    phoneNumber += ") ";
    // appendthe next 3 numbers
    phoneNumber += `${numbers[3]}${numbers[4]}${numbers[5]}`;
    //append a -
    phoneNumber += "-";
    //append the last four numbers
    phoneNumber += `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
    return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
*/
//or


// function createPhoneNumber(numbers) {

//     //   let  phoneNumber = `${"("}${numbers[0]}${numbers[1]}${numbers[2]}${") "}${numbers[3]}${numbers[4]}${numbers[5]}${"-"}${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

//     //   let  phoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}${"-"}${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;


//     let phoneNumber = `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

//     return phoneNumber;
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//or

/*
function createPhoneNumber(numbers) {

    let phoneNumber = `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6).join("")}`;

    return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
*/

//or

/*
function createPhoneNumber(numbers) {
    let j = (n) => n.join("");

    let phoneNumber = `(${j(numbers.slice(0, 3))}) ${j(numbers.slice(3, 6))}-${j(numbers.slice(6))}`;

    return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
*/
//or

/*
function createPhoneNumber(numbers) {
    let j = (n, a, b) => n.slice(a,b).join("");
    let phoneNumber = `(${j(numbers,0,3)}) ${j(numbers,3,6)}-${j(numbers,6)}`;

    return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
*/

function createPhoneNumber(numbers) {
  return numbers.join("").replace(/([\d]{3})([\d]{3})([\d]{4})/, '($1) $2-$3');

}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));