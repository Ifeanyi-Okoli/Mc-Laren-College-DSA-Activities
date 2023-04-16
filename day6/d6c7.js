//Hour of the Day
// hourOfTheDay.md
// Given the hour of the day print the appropriate greeting using if-else-if.

// If the hour of the day is greater than or equal to 0 but less than 12, print 'Good Morning'.
// If the hour of the day is greater than or equal to 12 but less than 18, print 'Good Afternoon'.
// If the hour of the day is greater than or equal to 18 but less than 24, print 'Good night'.
let hour = 15;
if (hour < 12) {
    console.log('Good Morning');
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afteroon');
} else {
    console.log('Good night');
}