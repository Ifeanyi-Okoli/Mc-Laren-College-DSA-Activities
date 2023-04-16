function findBoomrangs(arr){
    let count = 0;
    for (let i = 1; i <= arr.length-2; i++){
        if (isBoomerang(arr[i], arr[i+1], arr[i+2])){
            count++
        }
    }
    return count;
    }
    function isBoomerang(num1, num2, num3){
        return num1 === num3 && num1 !== num2;
    }
    console.log(findBoomrangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));//3
    console.log(findBoomrangs([1, 7, 1, 7, 1, 7, 1]));//5
    console.log(findBoomrangs([1, 1, 1, 1, 1, 1, 1]));//0
    console.log(findBoomrangs([1]));//0
    console.log(findBoomrangs([1, 2]));//0
    console.log(findBoomrangs([1, 2, 3]));//0
    console.log(findBoomrangs([1, 2, 1]));//1
    console.log(findBoomrangs([]));//0