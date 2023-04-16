function getWaterLevel(numbers, totalWater) {
    let units = numbers[numbers.length - 1];
    let w = 0;
    if (totalWater === 0) {
        return 0;
    }
    if (numbers[0] === numbers[1] && numbers[1]===numbers[2]) {
        units = units + (totalWater/4);
        return units;
    }
    for (let i = numbers.length - 1; i > 0; i--) {
        w++;
        if (totalWater > 0) {
            let a = numbers[i - 1];
            let b = numbers[i];
            h = (a - b);
            filler = w * h;
            if(filler <= totalWater){
                totalWater = totalWater - filler;
                // totalWater = remainingWater;
            }
            else{
                filler = totalWater/w;
              return units +filler;
            }
            
            units = units + h;
        }
    }
    return units;
}

// let totalWater = 
let numbers = [10, 6, 5, 2, 2, 1];

console.log(getWaterLevel(numbers, 10));

console.log(getWaterLevel(numbers, 0));//.toBe(0);
console.log(getWaterLevel(numbers, 1));//.toBe(2);
console.log(getWaterLevel(numbers, 4));//.toBe(3);
console.log(getWaterLevel(numbers, 12));//.toBe(5.5);
console.log(getWaterLevel(numbers, 25));//.toBe(8.2);
console.log(getWaterLevel(numbers, 34));//.toBe(10);

let bars = [2, 2, 2, 2];
console.log(getWaterLevel(bars, 4));//.toBe(3);
console.log(getWaterLevel(bars, 5));//.toBe(3.25);