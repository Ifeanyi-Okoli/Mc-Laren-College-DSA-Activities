// calculate the factorial of a given number using for loop.

function factorial(n) {
    let prod=1
    while (n>0){
        prod *= n;
        n--;
    }
    return prod;
  }
  
  console.log(factorial(5)); // should print 120