// Box Shadows
// Allowed Time:38 mins

// Given a list of rectangles in the number plane where each element has the form [x, y, width, height], 
// calculate the range of shadows on the x-axis.

// For example:
// function spread(start, end){
    
//     let i = start;
//     while(i<=end){

//     }
// }
function boxShadows(arr){
    let xCoord = [];
    let result = [];
    let allXCoord = [];
    for(let i = 0; i <arr.length; i++){
        xCoord.push([arr[i][0], arr[i][2]])
    }
    for(let i = 0; i <xCoord.length; i++){
        xCoord[i][1]= xCoord[i][1] +xCoord[i][0];
    }
    for(let i = 0; i < xCoord.length; i++){
        for(let j =xCoord[i][0]; j<=xCoord[i][1]; j++){
            allXCoord.push(j);
        }
        
    }
    allXCoord.sort((a,b)=>a-b)
    let lookUp = [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    for(let i =0; i <=lookUp.length-1; i++){
        let res =[];
        if (!allXCoord.includes(lookUp[i])){
            res.push(lookUp[0], lookUp[i-1]);
            result.push(res);
            lookUp.splice(0,i);
            i=0;
        }
    }
    return(result);
}

let coord = [[12, 15, 1, 6], [4, 11, 6, 3], [19, 11, 4, 2], [7, 6, 2, 2], [13, 8, 7, 2]];
//Output: [[4, 10], [12, 23]]
// Box Diagram

console.log(boxShadows(coord));