let bollyWoodMovies = ['Kai Po Che', 'Dangal', '3 Idiots', ['Ashoka', 'Swades']];
let hollywood = 'bollywood';
let movies = {
    'hollywood': ['Interstellar', 'Black Panther', {
        comedy: {
            'action': ['Night at the Museum', 'Meet the parents', 'Tropic Thunder'],
            'romantic': ['The Fault in Our Stars', 'UP', 'Titanic']
        },
        rating: [7.2, 9, 8.3, 5, 7]
    }, 'Avengers', 'Zero Dark Thirty', 'top'],
    'bollywood': [
        {
            top10: [bollyWoodMovies[0], bollyWoodMovies[3], 'Gully Boy']
        }
    ],
    others: ['Bahubali', 'Robot'],
}

let x = movies[hollywood][0][movies['hollywood'][5] + (movies.hollywood[2].rating[1] + 1)][19 % 6][0];
// write the expression trace for the above line
console.log(x);

/*
EXPRESSION TRACE
movies[hollywood][0][movies['hollywood'][5] + (movies.hollywood[2].rating[1] + 1)][19 % 6][0]
movies['bollywood'][0][movies['hollywood'][5] + (movies.hollywood[2].rating[1] + 1)][19 % 6][0]
op1[0][movies['hollywood'][5] + (movies.hollywood[2].rating[1] + 1)][19 % 6][0]
op2[movies['hollywood'][5] + (movies.hollywood[2].rating[1] + 1)][19 % 6][0]
op2[op3[5] + (movies.hollywood[2].rating[1] + 1)][19 % 6][0]
op2["top" + (movies.hollywood[2].rating[1] + 1)][19 % 6][0]
op2["top" + (op3[2].rating[1] + 1)][19 % 6][0]
op2["top" + (op4.rating[1] + 1)][19 % 6][0]
op2["top" + (op5[1] + 1)][19 % 6][0]
op2["top" + (9 + 1)][19 % 6][0]
op2["top" + 10][19 % 6][0]
op2["top10"][19 % 6][0]
op6[19 % 6][0]
op6[1][0]
op7[0]
"Ashoka"
*/
