
function heightCheck(current, heights, index) {
    let count = 0;
    let count1 = 0;
    let arr = JSON.parse(JSON.stringify(heights));
    for (let i = index + 1; i < arr.length-1; i++) {
        let curr = arr[i];
        for(let j = i+1; j<arr.length; j++){
            let curr1 = arr[j]
            if(curr > curr1){
                count++;
            }
            else{
                count++;
                if(curr1 > arr[i+1]){
                    break;
                }
                count++
            }
        }
        // let curr = arr[i];
        // queue.push(curr);
        if (current >= curr && curr >= arr[i+1]) {
            count++;
            arr.splice(i, 1);
            // console.log(arr)
            i--;
        }
    }
    arr = JSON.parse(JSON.stringify(heights));
    for (let i = index - 1; i >= 0; i--) {
        let curr = arr[i];
        if (current >= curr) {
            count1++;
            arr.splice(i, 1);
            // console.log(arr)
            i--;
        }
    }
    return count + count1;
}


function visiblePersons(heights) {
    let visibleCount = [];
    for (let i = 0; i < heights.length; i++) {
        let current = heights[i];
        visibleCount.push(heightCheck(current, heights, i));
    }
    return visibleCount;
}
console.log(visiblePersons([10, 6, 8, 5, 10, 11]));// [4, 2, 4, 2, 4, 2]
console.log(visiblePersons([5, 1, 2, 3, 10]));// [4, 2, 3, 3, 2]