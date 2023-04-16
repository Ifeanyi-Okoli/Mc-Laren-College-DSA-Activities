function printChristmasTreePart1(numRows) {
    let a = " ";
    let b = "*";
    let count = 1
    for (let i = numRows - 1; i >= 1; i--) {
        let result = "";
        for (let j = i; j >= 1; j--) {
            result += a;
        }
        for (let k = count; k <= 1; k--) {
            result += b;
        }
        count += 2;
        console.log(result + b);
    }
    console.log(b);
}

printChristmasTreePart1(4);