//Nearest Chapter
// nearestChapter.md
// Create a function that returns which chapter is nearest to the page you're on. 
//If two chapters are equidistant, return the chapter with the higher page number.

// Note: You can use only a single for-in loop

function nearestChapter(chapterObj, page) {
    let min = page;
    let res = "";
    let len = Object.keys(chapterObj).length;
    let diff;
    // while (count < len) {
    for (i in chapterObj) {
        diff = Math.abs(chapterObj[i] - page);
        if (diff < min) {
            min = diff;
            res = `${i}`;
        }
    }
    return res;
}
console.log(nearestChapter({
    "Chapter 1": 1,
    "Chapter 2": 15,
    "Chapter 3": 37
}, 10)); //"Chapter 2"


console.log(nearestChapter({
    "New Beginnings": 1,
    "Strange Developments": 62,
    "The End?": 194,
    "The True Ending": 460
}, 200)); //"The End?"


console.log(nearestChapter({
    "Chapter 1b": 5,
    "Chapter 1a": 1
}, 3)); //"Chapter 1b"