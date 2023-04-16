// We don't need no stinking Math.max
// If you ever had to get the maxiumum number from an array then you are probably familiar with the good ole' Math.max.apply() function that takes a this argument and an array. A typical implementation would look like this:

// var myArray = [1, 42, 112, 32, 21]
// var max = Math.max.apply(null, myArray) //= 112
// That's too easy though. Let's replace the Math.max function with our own solution that uses recursion! Yay!

// Write a function called max that takes one argument, an array, and returns the maximum value of that array.

// Rules:

// You cannot use Math.max (duh!)
// You can only use const to declare any variables
// You cannot use any loops like for or while
// You cannot use any other argument than the one passed to the function
// If the array is empty then return -Infinity, just like with Math.max.apply(null, [])
// You cannot use any Array.prototype methods like forEach, map, filter, or reduce
// Good luck!

// function max(array) {
//     // Math.max.apply(), eat your heart out!
//     let maximum = -Infinity;
//     let l = array.length;
//     if (!array.length) return maximum;
//     if (l===1) return array[0];
//     const[a,b] = [array[0], max(array.slice(1))]
//     return a<b ? b: a;
//   }


  // or


  function max(array) {
    let maximum = -Infinity;
    let l = array.length;
    if (!array.length) return maximum;
    const curMax = max(array.slice(1))
     return array[0] > curMax ? array[0]: curMax;
  }

console.log(max([1,2,3,4,5]), 5)
console.log(max([5]), 5)
console.log(max([]), -Infinity)
console.log(max([99,2,100,4,5]), 100)