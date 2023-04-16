// Challenge 1
// Given a word write a program to return all the permutation of the given word.

// Example:

// For input string: 'ABC'

// output:
// ['ABC', 'ACB', 'BAC', 'BCA', 'CBA', 'CAB']


// For input string: A

// output:
// ['A']

// For input string: 'AB'

// output:
// ['AB', 'BA']

function swap(word, num1, num2){
    let temp = word[num1];
    word[num1] = word[num2];
    word[num2] = temp
}

function permutations(word, num){
    // if(num === word.lenght -1){
    //     console.log(word);
    // }
    for (let i = num; i < word.length; i++){
        swap(word, num, i);
        permutations(word, num+1);
        swap(word, num, i);
    }
}

function findPermutations(word) {
    //base case
    let n = word.length;
    if(word === null || word.length === 0) return;
    permutations(word, n);
}


function permute(word) {
    //base case
  let result =  findPermutations(word);
  return result;
}

console.log(permute('ABC'));
console.log(permute('AB'));