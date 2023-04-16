function mostFrequentElement(arr){
    let most = arr.reduce((acc, val) =>{
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {});
    return Object.keys(most).reduce((a, b) => most[a] > most[b] ? a : b);
    }
        console.log(mostFrequentElement([1,2,5,1,3,5,2,1])); // [1]
    console.log(mostFrequentElement([1,2,5,1,3,5,2,1,2])); // [1,2]
    console.log(mostFrequentElement([1,2,5,1,3,5,2,1,2,3,3])); // [1,2,3]