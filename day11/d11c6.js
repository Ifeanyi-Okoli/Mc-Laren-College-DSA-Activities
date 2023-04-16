//Length of Vacation Spots
// lengthOfVacationSpots.md
// Write a function that returns the length of the vacationSpots array using a while loop.

// NOTE: Dont use the .length property

// CODE TEMPLATE

function lengthOfVacationSpots(vacationSpots) {
    let count = 0;
    let i = 0;
    while (vacationSpots[i] !== undefined) {
        count++;
        i++;
    }
    return count;
}
let vacationSpots = ['Bali', 'Phuket', 'Goa', 'Kochi', 'Sydney', 'Barcelona', 'Las Vegas'];
// lengthOfVacationSpots(vacationSpots);//7
console.log(lengthOfVacationSpots(vacationSpots));