
function duplicateElements(m, n) {
    for (let i = 0; i < m.length; i++) {
        if (n.includes(m[i])) {
            return true;
        }
    }
    return false;
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));//, true
console.log(duplicateElements([9, 8, 7], [8, 1, 3]));//, true