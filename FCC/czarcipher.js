function rot13(str) { // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
  }

  //or

  function rot13(str) { // LBH QVQ VG!
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    
    var replacer = [];
    for (var x = 0; x < str.length; x++)  { //loops through the given string
    var index = alphabet.indexOf(str[x]);  //sets the index of letter from the coded string
    if (cipher.charCodeAt(index) > 0) {  //check to see if the letter is alphanumeric
       replacer.push(String.fromCharCode(cipher.charCodeAt(index))); //add to array
    }
      else replacer.push(str[x]); //adds non-alphanumeric to the array
    }
    return replacer.join(""); //combines it all back together
  }
  
  // Change the inputs below to test
  rot13("SERR CVMMN!");