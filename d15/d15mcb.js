
function asteroidCollision(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        let n = stack.length;
        let a = arr[i];
        if (n === 0 && i === 0) stack.push(arr[i]);
        if (n > 0 && a < 0 && stack[n - 1] > 0) {
            if (Math.abs(a) > Math.abs(stack[n - 1])) {
                stack.pop();
                stack.push(a);
                if(stack[n - 1] < 0 && stack[n - 2] > 0){
                    if (Math.abs(stack[n - 2]) > Math.abs(stack[n - 1])) stack.pop();
                        else{
                            stack.splice(n-2, 1);
                        }
                }
            }
            else if (Math.abs(a) === Math.abs(stack[n - 1])) stack.pop();
        }
        else if (n > 0 && a > 0 && stack[n - 1] < 0) stack.push(a);
        else if (n > 0 && a > 0 && stack[n - 1] > 0) stack.push(a);
        else if (n > 0 && a < 0 && stack[n - 1] < 0) stack.push(a);



    }
    return stack;
}


console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
console.log(asteroidCollision([-2, -2, -2, -2])); // [-2, -2, -2, -2]
console.log(asteroidCollision([-2, 1, 1, -2])); // [-2, -2]
console.log(asteroidCollision([-1, 1, 1, -2])); // [-1,-2]
console.log(asteroidCollision([5, 10, -5])); //([5, 10]));
console.log(asteroidCollision([8, -8])); //([]));
console.log(asteroidCollision([10, 2, -5])); //([10]));