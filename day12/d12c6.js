//Print Vacation Spots
// printVacationSpots.md
// Given an input array print the following output using a for loop

// I would love to visit Bali.
// I would love to visit Phuket.
// I would love to visit Goa.
// I would love to visit Kochi.
// I would love to visit Sydney.
// CODE TEMPLATE

function printVacationSpots(vacationSpots) {
    let str = "I would love to visit";
    for (i = 0; i < vacationSpots.length; i++) {
        console.log(str + " " + vacationSpots[i]);
    }
}
let vacationSpots = ['Bali', 'Phuket', 'Goa', 'Kochi', 'Sydney'];
printVacationSpots(vacationSpots);
