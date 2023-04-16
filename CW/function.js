// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));



let zero = (operation)=> !operation ? 0:operation(0);
let one = (operation)=> !operation ? 1:operation(1);
let two = (operation)=> !operation ? 2:operation(2);
let three = (operation)=> !operation ? 3:operation(3);
let four = (operation)=> !operation ? 4:operation(4);
let five = (operation)=> !operation ? 5:operation(5);
let six = (operation)=> !operation ? 6:operation(6);
let seven = (operation)=> !operation ? 7:operation(7);
let eight = (operation)=> !operation ? 8:operation(8);
let nine = (operation)=> !operation ? 9:operation(9);

let plus = (number)=>(other_number)=>other_number + number;
let minus = (number)=>(other_number)=>other_number - number;
let times = (number)=>(other_number)=>other_number * number;
let dividedBy = (number)=>(other_number)=>other_number / number;

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);