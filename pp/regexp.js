//.match

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);

//finding morethan one match and ignoring the case
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result1 = twinkleStar.match(starRegex); // Change this line
console.log(result1);

//using the wildcard (.)
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result2 = unRegex.test(exampleStr);
console.log(result2);

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result3 = quoteSample.match(vowelRegex); // Change this line
console.log(result3);


//mathc a rangeof  letters

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex1 = /[a-e]at/;
catStr.match(bgRegex1);
batStr.match(bgRegex1);
matStr.match(bgRegex1);

let quoteSample1= "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result4 = quoteSample.match(alphabetRegex); // Change this line

//matching range of numbers and letters

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

let quoteSample22 = "Blueberry 3.141592653s are delicious.";
let myRegex22 = /[a-z0-9]/gi; // Change this line
let result22 = quoteSample.match(myRegex); // Change this lin

let quoteSample11 = "Blueberry 3.141592653s are delicious.";
let myRegex11 = /[h-s2-6]/gi; // Change this line
let result11 = quoteSample.match(myRegex); // Change this line

//using negation to exclude some characters

let quoteSample33 = "3 blind mice.";
let myRegex33 = /[^aeiuo0-9]/gi; // Change this line
let result33 = quoteSample.match(myRegex); // Change this line

let difficultSpelling = "Mississippi";
let myRegex44 = /s+/g; // Change this line
let result44 = difficultSpelling.match(myRegex);

