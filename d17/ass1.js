// Day 17 Assignments
// Challenge 1 - Get Chairs
// You have booked a meeting room. You arrive there ready to present, and find that someone has taken one or more of 
//the chairs!! You need to find some more chairs quickly.... check all the other meeting rooms to see if all of the chairs are in use.

// Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

// Find the spare chairs from the array of meeting rooms. Each meeting room array will have the number of occupants as a string. Each occupant is represented by 'X'. The room array will also have an integer telling you how many chairs are present in the room.

// You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

// Examples
// Input:

function meetingRoomChairs(arr = [[]], need = 0){
    if (need<= 0) return "Game On";
    let arrC = [];
    for(let [str, num] of arr){
      let rmFreeChairs=Math.max(0, num - str.length);
      let rmNeededChairs = Math.min(need, rmFreeChairs);
      arrC.push(rmNeededChairs);
      need = need - rmNeededChairs;
      if (need<= 0) return arrC;
    }
    return "Not enough!";
}
let rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]], need = 4;
console.log(meetingRoomChairs(rooms, need));
// Output:
// [0, 1, 3] 
// Explanation:
// No chairs free in room 0, take 1 from room 1, take 3 from room 2. no need to consider room 3 as you have your 4 chairs already.
// If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!".

// If arr has n elements in it then power set will have 2^n elements

//ref

// function meeting(x, need){
  
//     let borrow = [];
    
//     if (!need) 
//       return 'Game On';
      
//     for (let [ used, chairs ] of x) {
//       chairs = Math.min(need, Math.max(0, chairs - used.length));
//       borrow.push(chairs);
//       need -= chairs;
      
//       if (!need)
//         return borrow;
//     }
    
//     return 'Not enough!';
    
//   }

//   //or

//   function meeting(x, need){
//     if ( need === 0 ) return 'Game On';
//     let chairs = 0;
//     let answerArr = [];
//     let lastNum = 0;
//     for ( let i = 0; i < x.length; i++ ) {
//       console.log( x[i][1] - x[i][0].length );
//       if ( x[i][1] - x[i][0].length < 0 && chairs < need ) {
//         answerArr.push(0);
//       } else if ( chairs < need ) {
//         answerArr.push( x[i][1] - x[i][0].length );
//         chairs += x[i][1] - x[i][0].length;
//         lastNum = x[i][1] - x[i][0].length;
//       }
//     }
//     if ( chairs < need ) {
//       return 'Not enough!';
//     }
//     answerArr.pop();
//     answerArr.push( lastNum - (chairs - need) );
//     console.log(chairs - need);
//     return answerArr;
//   //   Huita to kakaya =) !!! 
//   }