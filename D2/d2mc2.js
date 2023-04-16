//Challenge 2
// Create a function that takes a string and a number n and returns a string in which each character is
// repeated n times.

// Examples
console.log(repeatChar("String", 3));// should return "SSStttrrriiinnnggg"

console.log(repeatChar("Hello World!", 2));// should return "HHeelllloo  WWoorrlldd!!"

console.log(repeatChar("1234!_ ", 4));// should return "1111222233334444!!!!____    "
// Notes:
// Don't use any inbuilt function like repeat

function repeatChar(str, num){
    let str1="";
    for (let i = 0; i < str.length; i++){
        let count = 0;
        while (count <num){
            str1= str1 + str[i];
            count++;
        }
        
    }
    //console.log(str1);
    return str1;
}