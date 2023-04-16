// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

/*
Pseudocode
1. If token is an operator:
    operand_2 - pop from the stack
    operand_1 - pop from the stack
    result - evaluate token with operand_1 and operand_2.
    push result back onto the stack
else if token is an operand
    push token onto the stack
result - pop from the stack and return 

*/

function calc(expr) {
   let input = expr.split(" ");
   let stack = [];
   let operations ={
       "+": (a,b) => a+b,
       "-": (a,b) => a-b,
       "*": (a,b) => a*b,
       "/": (a,b) => a/b
   }

   for(let i = 0; i < input.length; i++){
       let token = input[i];
       if(operations[token]){
           let leftValue = stack.pop();
           let rightValue = stack.pop();
           let result = operations[token](+rightValue, +leftValue);
           stack.push(result);
       }
       else{
           stack.push(+token);
       }
   }
    return stack.pop();
  }


console.log(calc(""), 0, "Should work with empty string");
console.log(calc("3"), 3, "Should parse numbers");
console.log(calc("3.5"), 3.5, "Should parse float numbers");
console.log(calc("1 3 +"), 4, "Should support addition");
console.log(calc("1 3 *"), 3, "Should support multiplication");
console.log(calc("1 3 -"), -2, "Should support subtraction");
console.log(calc("4 2 /"), 2, "Should support division");