// Allowed Time: 25 mins

// A series of houses and electric poles with halogen lamps are built in a straight line. The halogen lamps have a light radius range.

// Every house can be lighted, as long as the house is within the lamps light radius range.

// Given the positions of houses and halogen lamps on a horizontal line and the halogen lamp radius, create a function allHousesLighted that returns true if all the houses can be lighted by the arrangement.

// The function will return a false if not all the houses can be lighted

// Examples
// Example 1:

// Input: housePositions = [1,2,3,4], lampPositions = [2], lamp radius = 1
// Output: false
// Explanation: The only lamp is placed in the position 2, and if we use the radius 1 , then house number 4 cannot be lighted.
// Example 2:

// Input: house Positions = [1,2,3,4], lamp Positions = [1,4], lamp radius = 1
// Output: true
// Explanation: The two lamps are placed in the position 1 and 4 and we use light radius 1 , then all the houses can be lighted.
// Example 3:

// Input: house Positions = [1,2,3,4,5], lamp Positions = [1,4],  lamp radius = 1
// Output: true
// Explanation: The two lamps are placed in the position 1 and 4 and we use light radius 1 , then all the houses can be lighted.
// Example 4:

// Input: house Positions = [1,5], lamp Positions = [2], lamp radius = 2
// Output: true
// Example 5:

// Input: house Positions = [1,5], lamp Positions = [4], lamp radius = 2
// Output: false
// Explanation: The house at postion 1 will not be lighted as it will be out of radius.
function checkLampCoverage(currHouse, lampPositions, lampRadius) {
    for (let i = 0; i < lampPositions.length; i++) {
        let position = lampPositions[i];
        // if(currHouse === position-lampRadius || currHouse === position+lampRadius || currHouse >= position){
        if (currHouse >= position - lampRadius && currHouse <= position + lampRadius) {
            return true;
        }
    }
    return false;
}

function allHousesLighted(housePostions, lampPositions, lampRadius) {
    // write your code here
    //loop through the house
    for (let i = 0; i < housePostions.length; i++) {
        let currHouse = housePostions[i];

        if (!checkLampCoverage(currHouse, lampPositions, lampRadius)) return false;

    }
    return true;
}

console.log(allHousesLighted([1, 2, 3, 4], [2], 1));//false
console.log(allHousesLighted([1, 2, 3, 4], [1, 4], 1));//true
console.log(allHousesLighted([1, 2, 3, 4, 5], [1, 4], 1));//true
console.log(allHousesLighted([1, 5], [3], 2));//true
console.log(allHousesLighted([1, 5], [4], 2));//false
console.log(allHousesLighted([1, 7], [4], 3));//true
console.log(allHousesLighted([1, 7], [4], 2));//false