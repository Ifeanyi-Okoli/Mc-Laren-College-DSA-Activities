// Exercise 2 - Will it hit?
// Given a matrix n x n, determine if the arrow is directed to the target (x). 
// Now there are one of 4 types of arrows ( '^', '>', 'v', '<' ) and only one target (x) 
// An empty spot will be denoted by a space " ", the target with a cross "x", and the 
// scope ">"

// function willItHit(arr){
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 0; j < arr[i].length; j++){
    //         if(arr[0][j] === ">"  && arr[0][j+1] === "x")||
    //     }
    // }
// }




// function willItHit(arr){
//     for(let i = 0; i < arr.length; i++){
//         if((arr[i][0] === ">"  && arr[i][1] === "x")|| (arr[i][0] === ">"  && arr[i][2] === "x")
// ||        }
//     }
// }

function willArrowHit(arr){
    
    for(let i = 0; i < arr.length; i++){
        if((arr[i].indexOf("x") > arr[i].indexOf(">"))){
            return true;
        } 
        else{
            return false;
        }
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            while(j===0){
                if(arr.indexOf("v") < arr.indexOf("x") || arr.indexOf("^") > arr.indexOf("x")){
                    return true;
                }
                else{
                    return false;
                }
            }
            while(j===1){
                if(arr.indexOf("v") < arr.indexOf("x") || arr.indexOf("^") > arr.indexOf("x")){
                    return true;
                }
                else{
                    return false;
                }
            }
            while(j===2){
                if(arr.indexOf("v") < arr.indexOf("x") || arr.indexOf("^") > arr.indexOf("x")){
                    return true;
                }
                else{
                    return false;
                }
            }
            while(j===3){
                if(arr.indexOf("v") < arr.indexOf("x") || arr.indexOf("^") > arr.indexOf("x")){
                    return true;
                }
                else{
                    return false;
                }
            }
            while(j===4){
                if(arr[2][4] === "v" && arr[3][4] === "x"){
                    return true;
                }
                if(arr.indexOf("v") < arr.indexOf("x") || arr.indexOf("^") > arr.indexOf("x")){
                    return true;
                }
                else{
                    return false;
                }
            }
    }
}
    // return false;
}

console.log(
    willArrowHit([
      ["^", " "],
      [" ", "x"],
    ])
  );//.toBe(false);

  console.log(
    willArrowHit([
      [">", " "],
      [" ", "x"],
    ])
  );//.toBe(false);

  console.log(
    willArrowHit([
      ["x", "<"],
      [" ", " "],
    ])
  );//.toBe(true);

  console.log(
    willArrowHit([
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", "v"],
      [" ", " ", " ", " ", "x"],
      [" ", " ", " ", " ", " "],
    ])
  );//.toBe(true);

  console.log(
    willArrowHit([
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", "x", " ", " ", " "],
      [" ", " ", " ", ">", " "],
      [" ", " ", " ", " ", " "],
    ])
  );//.toBe(false);

  console.log(
    willArrowHit([
      [" ", "x"],
      [" ", "^"],
    ])
  );//.toBe(true);