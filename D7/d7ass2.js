//How Many Days Until 2022?
// Given a date, return how many days date is away from 2022 (end date not included). 
//date will be in mm/dd/yyyy format.

// Examples
function daysUntil2022(date){
let arrDate = date.split("/");
let a;
let b;
for(let i = 0; i <arrDate.length; i++){
    if(i === 0){
      a = (12 - arrDate[i])*30.4;
    }
    if(i === 1){
        b = (31 - arrDate[i]);
      }
}
return (Math.ceil(a + b)) + " days";
}
console.log(daysUntil2022("12/28/2021")); // should return "3 days"

console.log(daysUntil2022("1/1/2021")); // should return "365 days"

console.log(daysUntil2022("2/28/2021")); // should return "307 days"

console.log(daysUntil2022("6/30/2021"));//.toStrictEqual("185 days");
console.log(daysUntil2022("10/22/2021"));//.toStrictEqual("71 days");
console.log(daysUntil2022("12/31/2021"));//.toStrictEqual("1 day");
// Notes
// All given dates will be in the year 2021.
// You cannot use the in-built Date object.