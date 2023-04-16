function measureDepth(arr) {
    let total = 1;
    for (let i of arr) {
      if (i instanceof Array) {
        total = Math.max(total, 1 + measureDepth(i))
      }
    }
    return total;
  }
console.log(measureDepth([])); // should return 1

console.log(measureDepth([[]])); // should return 2

console.log(measureDepth([[[]]])) // should return 3

console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])) // should return 11