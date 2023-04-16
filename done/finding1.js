function numberOfSymmetricalWorms(arr,size){
    let count = 0;
    let len = (arr.length+1)/2;
for (let i = 0, j = arr.length-1 ; i < len, j >= len; i++, j--){
    
    if (arr[i] === arr[j]){
        count++;
    }
    else{
        return 0;
    }
}
return count;
}
console.log(numberOfSymmetricalWorms([5,1,5,1,5],3))// should return 3. Worms are [5,1,5],[1,5,1],[5,1,5]
console.log(numberOfSymmetricalWorms([5,1,7,1,5],5))// should return 1. Worms are [5,1,7,1,5]
console.log(numberOfSymmetricalWorms([5,1,-7,1,5],3))// should return 1. Worms are [1,-7,1]
console.log(numberOfSymmetricalWorms([5,1,-7,3,5],3))// should return 0. No worms of given size
console.log(numberOfSymmetricalWorms([5,-3,2,1,5,1,2,-3,5,9,5,-3,2,1],9))// should return 2. Worms are [5,-3,2,1,5,1,2,-3,5],[1,2,-3,5,9,5,-3,2,1]
console.log(numberOfSymmetricalWorms([5,-3,2,1,5,1,2,-3,6,9,5,-3,2,1],7))// should return 1. Worms are [-3,2,1,5,1,2,-3]
