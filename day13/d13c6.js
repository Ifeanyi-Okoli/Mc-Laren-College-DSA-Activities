//mutual Friends
// mutualFriends.md
// Alex's and Bob's friends are listed in two arrays.

// let alexFriends = ['Samantha','Tom','John','Peter','Stacey'];
// let bobFriends = ['Albert', 'Tom','Denver','Arnold','Stacey'];
// Write a function to print the names of the friends common to both Alex and Bob. 
//If they dont have any common friends print "No Mutual Friends"

// For eg. for the given arrays the output should be

// CODE TEMPLATE

function mutualFriends(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
                count++;
            }
        }
    }
    if (count === 0) {
        console.log("No Mutual Friends");
    }
}
let alexFriends = ['Samantha', 'Tom', 'John', 'Peter', 'Stacey'];
let bobFriends = ['Albert', 'Tom', 'Denver', 'Arnold', 'Stacey'];
mutualFriends(alexFriends, bobFriends);// "Tom" "Stacey"
alexFriends = ['Samantha', 'Tim', 'John', 'Peter'];
bobFriends = ['Albert', 'Tom', 'Denver', 'Arnold', 'Stacey'];
mutualFriends(alexFriends, bobFriends);// "No Mutual Friends"