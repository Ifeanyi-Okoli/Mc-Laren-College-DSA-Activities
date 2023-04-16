console.log(jazzify(["G", "F", "C"])); // ["G7", "F7", "C7"]

console.log(jazzify(["Dm", "G", "E", "A"])); // ["Dm7", "G7", "E7", "A7"]

console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); // ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

console.log(jazzify([])); // []

console.log(jazzify(["F7", "G", "C", "D7"])); // ["F7", "G7", "C7", "D7"]


function add7(str = "") {
    if (str.endsWith("7")) {
        return str;
    } else {
        return str + "7";
    }
}
function jazzify(arr) {
    let result = arr.map(add7);
    return result;
}