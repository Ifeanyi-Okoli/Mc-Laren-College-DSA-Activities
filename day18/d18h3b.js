function traverseColumnwise(arr) {
    let max1 = [];
    let count = 0;
    while (count < arr.length) {
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (j === count) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                    }

                }

            }
        }
        count++;
        max1.push(max);
    }
    console.log(max1);
}
let arr1 = [[11, 2, 3],
[4, 15, 6],
[7, 8, 9]];
let arr2 = [[1, 2, 3, 44],
[25, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];
traverseColumnwise(arr1);//11 15 9
traverseColumnwise(arr2);// 25 14 15 44