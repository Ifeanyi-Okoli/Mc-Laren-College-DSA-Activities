//organization game
// Organization-Game.md
// Write code to access playersCount, releaseYear and country of the first game in the 
// list for a given organization name.

let games = {
    'minecraft': {
        playersCount: 10000000,
        releaseYear: 2012,
        country: ['U.S.A', 'Australia', 'France']
    },
    'temple run': {
        playersCount: 1000000,
        releaseYear: 2009,
        country: ['India', 'Pakistan', 'Kenya']
    },
    'pokemon go': {
        playersCount: 2000000,
        releaseYear: 2016,
        country: ['U.S.A', 'Canada', 'Russia']
    },
    'pubg': {
        playersCount: 5000000,
        releaseYear: 2017,
        country: ['India', 'South Africe']
    }
}
let org = { 'Microsoft': { games: ['minecraft','pokemon'] }, 'Tencent': { games: ['pubg','temple run'] }, 'Imangi': { games: [] }, 'Niantic': { games: [] } }
let orgName = 'Microsoft';

let firstGame = org[orgName].games[0];
console.log(firstGame);

games[firstGame].playersCount;
console.log(games[firstGame].playersCount);

games[firstGame].releaseYear;
console.log(games[firstGame].releaseYear);

games[firstGame].country;
console.log(games[firstGame].country);


//You should use 'games[org[orgName].games[0]].playersCount' in your code' 