// 1. write regular expression which matches first 3 words Ana Bob Cpc but excludes last 3
let searchString1 = "Ana Bob Cpc aax bby ccz";
let regex1= [A-C][n-p][a-c];
searchString1 = searchString1.replace(/\w+[.!?]?$/, '');
searchString1 = searchString1.replace(/[\W]*\S+[\W]*$/, '');
let result1 = searchString1.replace(/[\W]*\S+[\W]*$/, '');
// "I want to remove the last word.".replace(/\w+[.!?]?$/, '')
console.log(result1);
// 2. In the lines below, the last string with only one z isn't what we would consider a proper spelling of the slang "wazzup?". Try writing a pattern that matches only the first two spellings by using the curly brace notation.
let searchString2 = "wazzzzzup waZZZZZup wazzzup wazup"
let regex2 = waz{3,5}up
console.log(regex2);
// 3. Add all the donations received 
let donations = `
AP - $250000
BM - $1250
CD - $5
EF - $120
`



// 4. For given search string match all words except last 'a'
let searchString4 = "	aaaabcc aabbbbc aacc a";
let regex3 = aa+b*c+



// 5. Match all phrases except `No files found.`
let searchString5 = "1 file found.	2 files found.	24 files found.	 No files found.";
let regex5 = \d+

// 6. Find all image tags in given `searchString`.
let searchString6 = '<html><img src="test">abc<img src="a"  alt=b></html>'
let regex6 = <(\w+)


// 7. Write regular expression to match the animal name without `s` and their count separately 
let searchString7 = '1 monkey, 21 dogs and 13 elephants';


// 8. Extract the name and year from the string
let searchString8 = "It is said that Peter Pan was born in 1993";




// 9. Validate a hex color string
let hex1 = "#2e0000";