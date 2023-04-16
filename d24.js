let votes = [["d", "a", "e", "b", "c"],
 ["b", "e", "d", "c", "a"],
 ["e", "a", "c", "b", "d"],
 ["e", "d", "a", "b", "c"],
 ["d", "b", "a", "e", "c"]];

 function instantRunOff(arr){
     let obj ={};
    for (let i = 0; i < arr.length; i++){
        // for(let j = 0; j < arr[i].length; j++){
            if(obj[arr[i][0]] === undefined){
                obj[arr[i][0]] = 1;
            }
            else{
                obj[arr[i][0]]++;
            }
        // }
    }
    let values = Object.values(obj);
    let min = Math.min(...values);
    let max = Math.min(...values);
    if (max > arr.length/2) return obj[values];
    for (let key in obj){
        if (obj[key] ===min){
            console.log(key)
        }
    }
    }
 

 instantRunOff(votes);