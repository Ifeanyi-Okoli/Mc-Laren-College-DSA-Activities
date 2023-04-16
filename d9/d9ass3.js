// Exercise 3 - Minimum Removals to Make Two Strings Anagrams
// Create a function that returns the smallest number of letter removals so 
//that two strings are anagrams of each other.

// Examples:

function check(arr, k){
    for (let i = 0; i < arr.length; i++){
        if (k === arr[i]){
            return false;
        }
    }
    return true;
}

function minRemovals(a, b){
    let count = 0;
    if((a.includes(b)) && a.length === b.length){
        return 0;
    }
    for (let i = 0; i <a.length; i++){
        if(check(b, a[i])){
            count++;
        } 
    }
    for (let i = 0; i <b.length; i++){
        if(check(a, b[i])){
            count++;
        } 
    }
    return count;
}


console.log(minRemovals("abcde", "cab")); //➞ 2
// Remove "d", "e" to make "abc" and "cab".

console.log(minRemovals("deafk", "kfeap")); //➞ 2
// Remove "d" and "p" from the first and second word, respectively.

console.log(minRemovals("acb", "ghi")); //➞ 6
// Remove all letters from both words to get "" and "".
// Note:
// An anagram is any string that can be formed by shuffling the characters of the original string. For example: baedc is an anagram of abcde.
// An empty string can be considered an anagram of itself.
// Characters won't be used more than once per string.