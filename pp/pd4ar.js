function shiftFirst(sentence){
    let words = sentence.split(" ");
    let wordsArray =[];
    for(let i =0 ;i < words.length ;i++){
       wordsArray.push(words[i].split(""));
    }
    let temp = wordsArray[0][0];
    wordsArray[0][0]= wordsArray[wordsArray.length-1][0];
    for(let i =0;i< wordsArray.length-1 ;i++){
        let temp2 = wordsArray[i+1][0];
        wordsArray[i+1][0] = temp;
        temp = temp2;
    }
    let outputWords=[];
    for(let i =0;i<wordsArray.length;i++){
        outputWords.push(wordsArray[i].join(""));
      }
    return outputWords.join(" ");
    }
    console.log(shiftFirst("Today is Sunday")); // "Soday Ts iunday"
    console.log(shiftFirst("The Sun rises in the East")); // "Ehe Tun Sises rn ihe tast"