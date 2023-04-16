let votes = [["d", "a", "e", "b", "c"],
 ["b", "e", "d", "c", "a"],
 ["e", "a", "c", "b", "d"],
 ["e", "d", "a", "b", "c"],
 ["d", "b", "a", "e", "c"]];

 function instantRunOff(arr){
     let arr1 =[];
    for (let i = 0; i < arr.length; i++){
        // for(let j = 0; j < arr[i].length; j++){
            arr1.push(arr[i][0])
        // }
    }
    
    console.log(arr1);
    }
 

 instantRunOff(votes);