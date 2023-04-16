checkFunction(){

    return true
}




let tripCapacity = (arr, cap)=>{
    if (arr[0][0]>cap){
        return false;
    }
    let count = 0;
    let stop = 0;
    for (let i = 0; i < arr.length; i++){
       
        if (count <= arr[arr.length-1][2]){
            let a = arr[i];
            for (let j = 0; j  <= arr[arr.length-1][2]; j++){
                stop = 
                count =count +  a[1];
            }
            count =count +  a[1];
        if(a[0] > cap){
            return false;
        }
        else{
            cap = cap - a[0];
        }
    }    
    }
}

Input: trips = [[2,1,5],[3,3,7]], capacity = 4
Output: false
// Example 2:

Input: trips = [[2,1,5],[3,3,7]], capacity = 5
Output: true
// Example 3:

Input: trips = [[2,1,5],[3,5,7]], capacity = 3
Output: true
// Example 4:

Input: trips = [[3,2,7],[3,7,9],[8,3,9]], capacity = 11
Output: true

Input: [[9, 3, 4], [9, 1, 7], [4, 2, 4], [7, 4, 5]], capacity = 23
Output: true