//Shift First
// shiftFirst.md
// Write a Javascript function that shifts the first letter of every word in a 
//sentence to the position of the first character in the next word. The first 
//letter in the last word becomes the first character of the first word.

function shiftFirst(sentence) {
    let word = sentence.split(" ");
    let wordarr = [];
    for(let i = 0; i < word.length; i++){
        wordarr.push(word[i].split(""));
    }
    // let a = arr.shift();
    console.log(wordarr);
    console.log(word);
    // for (let i = 0; i< arr.length; i++){
    //     if (arr[i-1] = " "){
    //         arr.splice(arr[i], 1, a);
    //         console.log(arr);
    //     }
    // }
    
}
console.log(shiftFirst("Today is Sunday")); // "Soday Ts iunday"
console.log(shiftFirst("The Sun rises in the East")); // "Ehe Tun Sises rn ihe tast"