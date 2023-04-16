// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

function solution(number){
    // turn look up table to an object
    lookUp = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M"
    }
    //
    let roman = "";
    let keys = Object.keys(lookUp);
    // console.log(keys);
    while(number > 0){
        for(let i = keys.length-1; i >=0; i--){
            let romanLetter = keys[i];
            if(number >= romanLetter){
                while(number >= romanLetter){
                    roman += lookUp[romanLetter];
                    number -= romanLetter;
                }
                keys.pop();
                break;
            }
        }
    }  
    return roman;
  }


  console.log((solution(1000)));//, 'M', '1000 should, "M"'));
  console.log((solution(1001)));//, 'MI', '1001 should, "MI"'));
  console.log((solution(1990)));//, 'MCMXC', '1990 should, "MCMXC"'));
  console.log((solution(2007)));//, 'MMVII', '2007 should, "MMVII"'));
  console.log((solution(2008)));//, 'MMVIII', '2008 should, "MMVIII"'));