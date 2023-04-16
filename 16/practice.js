function toCamelCase(word){
    
    for(let i = 0; i < word.length; i++){
        let letter = word[i];
        if(letter === "_" || letter === "-") word = word.replace(word[i+1], word[i+1].toUpperCase());
    }
    let wordArr = word.split(/_|-/g).join("");
    return wordArr;
    }


    console.log(toCamelCase(''));//, '', "An empty string was provided but not returned")
    console.log(toCamelCase("the_stealth_warrior"));
    console.log(toCamelCase("The-Stealth-Warrior"));//, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    console.log(toCamelCase("A-B-C"));//, "ABC", "toCamelCase('A-B-C') did not return correct value")