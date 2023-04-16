//overlapping-meetingsPart2
// overlapping-meetingsPart2.md
// Two meetings have a start and end time, denoted as hours since midnight

// Meeting 1 starts at 8 am and finishes at 12 noon.

// Meeting 2 starts at 11:30 am and finishes at 1:00 pm (13:00).

// Write code to calculate whether the two meetings overlap.

// Note that meeting 2 may start before meeting 1

// Tip: If the end of one meeting is before the start of the other meeting, 
//then the meetings do not overlap.

// CODE TEMPLATE

let meeting1Start = 8;
let meeting1End = 12;
let meeting2Start = 11.5;
let meeting2End = 13;
let meetingsOverlap = meeting1Start <= meeting2End && meeting2Start <= meeting1End;//write your code here

if (meetingsOverlap) {
  console.log('Meetings overlap');
}
else {
  console.log('Meetings do not overlap');
}