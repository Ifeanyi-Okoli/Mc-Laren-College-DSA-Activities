// Task
// Your task is to create a function, recurrence(base, formula, term) 
//where base is the base case or first term of the sequence, formula is the recurrence formula given as a function/method and term is the number of the term of the series which your function/method has to calculate. For example:

// recurrence(1, n => n + 3, 4) === 10
// recurrence(3, n => 2 * n, 5) === 48
// Good luck :)

function recurrence(base, formula, term) {
    let sum = base;
    console.log(formula);
   function  recursive(base, formula, term){
    if(term === 1) return sum;
    formula;
    // console.log(formula)
    sum = formula;
    recursive(sum, formula, term--);
   }

//    recursive(sum, formula, term--);
    return sum;
  }

  console.log(recurrence(1, n => n + 3, 3), 7);
  console.log(recurrence(1, n => n + 3, 7), 19);
  console.log(recurrence(1, n => n + 3, 10), 28);
  console.log(recurrence(1, n => n + 3, 2), 4);
  console.log(recurrence(1, n => n + 3, 5), 13);
  console.log(recurrence(1, n => n + 3, 9), 25);
  console.log(recurrence(1, n => n + 3, 4), 10);
  console.log(recurrence(1, n => n + 3, 6), 16);
  console.log(recurrence(1, n => n + 3, 8), 22);