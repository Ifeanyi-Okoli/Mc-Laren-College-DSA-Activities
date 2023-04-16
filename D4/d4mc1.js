//Challenge 1
// Create a function that takes a string and returns dashes on the left and right side of every vowel 
// (a e i o u).

// Examples

function dashed(str){
    //str = str.toLowerCase(); 
    
    let str1 = "";
    for (let i = 0; i< str.length; i++){
        if(str[i]=== "a" || str[i]=== "e" || str[i]=== "i" || str[i]=== "o" || str[i]=== "u" || str[i]=== "A" || str[i]=== "E" || str[i]=== "I" || str[i]=== "O" || str[i]=== "U"){
            let a = "-" + str[i] + "-";            
            str1= str1 + a;
        }
        else{
            str1 = str1 + str[i];
        }
        
    }
    return str1;
}
console.log(dashed("Edabit")); // should return "-E-d-a-b-i-t"

console.log(dashed("Carpe Diem")); // should return "C-a-rp-e- D-i--e-m"

console.log(dashed("Fight for your right to party!")); // should return "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
// Notes
// A string can contain uppercase and lowercase vowels.