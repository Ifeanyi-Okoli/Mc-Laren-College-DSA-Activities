function getMaxBloomDays(flowers) {
    // write your code here

    //get the possible days
    let flowerDays = [];
    let bloomFrequency = {};
    let bestFlowerBloomingDays = [];
    for (let days = 0; days < flowers.length; days++) {
        for (let j = flowers[days][0]; j <= flowers[days][1]; j++) {
            flowerDays.push(j)
        }
    }

    //find days frequency
    for (let i = 0; i < flowerDays.length; i++) {
        if (bloomFrequency[flowerDays[i]] === undefined) bloomFrequency[flowerDays[i]] = 1;
        bloomFrequency[flowerDays[i]]++;
    }

    //find the maximum
    let maxArray = [];
    for (let key in bloomFrequency) {
        maxArray.push(Math.max(bloomFrequency[key]));
    }
    let max = Math.max(...maxArray);
    for (let key in bloomFrequency) {
        if (bloomFrequency[key] === max) {
            bestFlowerBloomingDays.push(parseInt(key));
        }
    }
    return bestFlowerBloomingDays;
}
console.log(getMaxBloomDays([[1, 3], [1, 8], [2, 5]]));//[2,3]
console.log(getMaxBloomDays([[1, 3], [3, 6], [6, 9]]));//[3,6]
console.log(getMaxBloomDays([[1, 5], [2, 3], [5, 7], [7, 9]])) //[2,3,5,7]