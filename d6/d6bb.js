function getCubes(arr = []) {
    let cube = (num) => Math.pow(num, 3);
    let cubes = arr.map(cube);
    return cubes;
    }

console.log(getCubes([2, 5, 6, 3, 1]));
 // should return [ 8, 125, 216, 27, 1]