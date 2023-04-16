let arr = [1, 1, 3, 0];
for (let i = arr[3]; i <= arr[arr[i]]; i = i + arr[i] % 2) {
    console.log(arr[i]);
}