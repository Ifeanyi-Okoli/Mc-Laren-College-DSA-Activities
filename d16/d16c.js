// Find all permutations of elements in array.
function helper(el, arr, k) {
    let res1 = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let a;
        let b;
        if (el === arr[i] && i === 0) {
            a = el + arr[i + 2] + arr[i + 1];
            b = el + arr[i + 1] + arr[i + 2];
            res1.push(a, b);
        }
        // else if (el === arr[i] && i === 1) {
        //     a = arr[i - 1] + el + arr[i + 1];
        //     b = arr[i - 1] + arr[i + 1] + el;
        //     res1.push(a, b);
        // }
        else {
            a = el + arr[i] + arr[i + 1];
            b = el + arr[i + 1] + arr[i];
            res1.push(a, b);
        }

    }
    return res1;
}

function getAllPermutations(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        let c = helper(arr[i], arr, i)
        res.push(c);
    }
    return res;
};

console.log(getAllPermutations(['a', 'b', 'c'])); // should return [['a', 'b', 'c'], ['a', 'c', 'b'], ['b', 'a', 'c'], ['b', 'c', 'a'], ['c', 'b', 'a'], ['c', 'a', 'b']] 