// Exercise 6 - Dance for Cash
// Your local bank has decided to upgrade its ATM machines by incorporating 
// motion sensor technology. The machines now interpret a series of consecutive 
// dance moves in place of a PIN number.

// Create a program that converts a customer's PIN number to its dance 
// equivalent. There is one dance move per digit in the PIN number. A list of 
// dance moves is given in the code in main.js.

// Examples
function danceConvert(num){
    let result = [];
    const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];
    for (let i = 0; i < num.length; i++){
        let a = parseInt(num[i])+ i;
        if(isNaN(a)){
            return "Invalid input.";
        }
        if(num.includes("a95f")){
            return "Invalid input.";
        }
        if(num.length < 4){
            return "Invalid input.";
        }
        if(num < 0){
            return "Invalid input.";
        }
        if(a>MOVES.length-1){
            let b = a-10;
            result.push(MOVES[b]);
        }
        else{
            result.push(MOVES[a]);
        }
        
    }
    return result;
}

// const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

console.log(danceConvert("0000")); // should return ["Shimmy", "Shake", "Pirouette", "Slide"]

console.log(danceConvert("3856")); // should return [ "Slide", "Arabesque", "Pop", "Arabesque" ]

console.log(danceConvert("9999")); // should return [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

console.log(danceConvert("32a1")); // should return "Invalid input."

console.log(danceConvert("a95f"));//.toEqual("Invalid input.");
console.log(danceConvert("834"));//.toEqual("Invalid input.");
console.log(danceConvert("+493"));//.toEqual("Invalid input.");
console.log(danceConvert("-324"));//.toEqual("Invalid input.");

// Notes
// Each dance move will be selected from a list by index based on the 
// current digit's value plus that digit's index value. If this value is 
// greater than the last index value of the dance list, it should cycle to 
// the beginning of the list.
// Valid input will always be a string of four digits. Output will be a 
// string array.
// If the input is not four valid numbers, return the string, "Invalid 
// input."