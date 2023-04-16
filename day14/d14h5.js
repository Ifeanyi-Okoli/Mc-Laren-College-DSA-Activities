//movieRatingPart2.md
// Movie Rating Part 2
// Given an array of movie objects write a function addPopularityToMovies that adds 
//a new property isPopular to each movie object and sets it to true if it contains 
//three ratings greater than or equal to 8.

// HINT: Loop over each movie and call the function written in Part 1

// CODE TEMPLATE

function addPopularityToMovies(movie) {
    for (let j = 0; j < movie.length; j++) {
        movie[j]["isPopular"];
        let arr = movie[j]["ratings"];
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 8) {
                count++;
            }
        }
        if (count >= 3) {
            movie[j]["isPopular"] = true;
        }
        else {
            movie[j]["isPopular"] = false;
        }
    }

    return movie;
}


// Don't change any code below this line
let movies = [
    {
        "name": "A",
        "ratings": [5, 8, 9, 10, 2, 8]
    },
    {
        "name": "B",
        "ratings": [2, 5, 6, 4, 10, 7]
    },
    {
        "name": "C",
        "ratings": [2, 8, 6, 4, 10]
    },
    {
        "name": "D",
        "ratings": [10, 8, 6, 4, 10, 7, 8]
    },
];
addPopularityToMovies(movies);
console.log(movies);


// function addPopularity(movies) {
//     movies["isPopular"];
//     let arr = movies["ratings"];
//     let count = 0;
//     for (let i = 0; i < movies["ratings"].length; i++) {
//         if (arr[i] >= 8) {
//             count++;
//         }
//     }
//     if (count >= 3) {
//         movies["isPopular"] = true;
//     }
//     else {
//         movies["isPopular"] = false;
//     }
//     return movies;
// }