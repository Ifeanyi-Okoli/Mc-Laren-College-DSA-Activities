function mostFrequentElement(arr){
    let most;
    let obj ={};
    let res =0;
    for (let i = 0; i < arr.length; i++){
        let num = arr[i];
        if (obj[num] === undefined){
            obj[num] = 1;
        }
        else{
            obj[num]++;
        }
        if (obj[num] > res){
            res = obj[num];
            most = arr[i];
        }
    }
    
    return most;
    }
    console.log(mostFrequentElement([1,2,5,1,3,5,2,1])); // [1]
    console.log(mostFrequentElement([1,2,5,1,3,5,2,1,2])); // [1,2]
    console.log(mostFrequentElement([1,2,5,1,3,5,2,1,2,3,3])); // [1,2,3]