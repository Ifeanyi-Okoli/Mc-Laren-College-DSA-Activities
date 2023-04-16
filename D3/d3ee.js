// Write a function getWordCount which takes a statement and returns an object 
//containing word as 
//key and their frequency as value

let statement = `Hurricane Gonzalo was the second tropical cyclone, after Hurricane Fay, to directly strike the island of Bermuda in a one-week time frame in October 2014, and was the first Category 4 Atlantic hurricane since Hurricane Ophelia in 2011. At the time, it was the strongest hurricane in the Atlantic since Igor in 2010.[1] Gonzalo struck Bermuda less than a week after the surprisingly fierce Hurricane Fay; 2014 was the first season in recorded history to feature two hurricane landfalls in Bermuda. A powerful Atlantic tropical cyclone that wrought destruction in the Leeward Islands and Bermuda, Gonzalo was the seventh named storm, sixth and final hurricane and only the second major hurricane of the below-average 2014 Atlantic hurricane season.`

function getWordCount(statement) {
    let obj = {};
    let lowerStatement = statement.toLowerCase();
    let arr = lowerStatement.split(" ");
    for (let key of arr) {
        if (obj.hasOwnProperty(key)) {
            obj[key] = obj[key] + 1;
        }
        else {
            obj[key] = 1;
        }
    }
    return obj;
}

let wordObj = getWordCount(statement);
console.log(wordObj);

