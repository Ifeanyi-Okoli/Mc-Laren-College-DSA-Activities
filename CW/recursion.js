// Your Task
// You are on a set of stairs that are numbered 0 - 100 from top to bottom. 
//You are given your starting stair number, a stride width (meaning how 
//many stairs you step down at a time) and being walking down. Return an 
//array containing every stair you step on, beginning from the lowest stair. 
//Don't step below 0, it's Lava and you'll burn/fail the Kata.
// A test is in place to check for the presence of for/while to ensure 
//recursion is used so avoid using these terms in your solution.

// If width is 0, clearly you're not going anywhere so please return an empty array.
// let result = [];
// function stepDown(stair, width){
//    if(stair < width-width) return;
//    result.unshift(stair);
// //    stair = stair - width;
//    stepDown(stair-width, width);
//    return result;
//   }

//or



function stepDown(stair, width){
    let result = [];
    let recursive = (stair, width) =>{
        result.unshift(stair);
        stair = stair -width;
        if(stair >= 0) recursive(stair, width);
        if(stair < 0) return result;
    }
   
   recursive(stair, width);
   return result;
  }


// console.log(stepDown(10,1), [0,1,2,3,4,5,6,7,8,9,10], "Not the right stairs");
console.log(stepDown(80,10), [0,10,20,30,40,50,60,70,80], "Not the right stairs");
// console.log(stepDown(49,10), [9,19,29,39,49], "Not the right stairs");
// console.log(stepDown(5,7),[5],"You can't make a step without falling in to the lava");