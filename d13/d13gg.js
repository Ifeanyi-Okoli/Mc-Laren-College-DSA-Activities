function isConsonant(char = ""){
    let vowels = "aeiou";
    return !vowels.includes(char.toLowerCase())
}

function noOfConsonants(str) {
    if(str.length ===1){
        return isConsonant(str) ? 1 : 0;
    }
    
    if(str.length === 0){
        return 0;
    }
    let firstChar = str[0];
    let remainingStr = str.substring(1);
    let count = 0;
    if(isConsonant(firstChar)){
        count++;
    }
    let consonantsInRemainingStr = noOfConsonants(remainingStr);
    return count + consonantsInRemainingStr;
  }
  
  console.log(noOfConsonants('vivek')); // should return 3