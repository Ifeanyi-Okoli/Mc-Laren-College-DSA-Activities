//Spell Checker
// Part 1
// Write a function called closeMatch which takes two strings and returns true if 
//they have the same length and differ by only one character.

// CODE TEMPLATE
// Part 1
function closeMatch(str1, str2) {
    let l1 = str1.length;
    let l2 = str2.length;
    let count = 0;
    if (l1 !== l2) {
        return false;
    }
    for (let i = 0; i < l1; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }
    return (count === 1 ? true : false);
}
console.log(closeMatch('bard', 'barn')); // should return true
console.log(closeMatch('broad', 'road')); // should return false
console.log(closeMatch('rated', 'barn')); // should return false
console.log(closeMatch('strength', 'steength')); // should return true
console.log(closeMatch('yesterday', 'yesterday')); // should return false