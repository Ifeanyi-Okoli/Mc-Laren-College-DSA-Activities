//organization game
// Organization-Game.md
// Write a function getGameInfo which takes in games object, org object, and orgName string.

// Examples of which are given below.

// Your function should return an array containing name of the game, playersCount, releaseYear 
//of the first game in the list for a given organization name

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

function getOrgName(game, org, orgn){
let gameInfo = [];
let firstGame = org[orgName].games[0];
//console.log(firstGame);
let count = games[firstGame].playersCount;
let yr = games[firstGame].releaseYear;
gameInfo.push(firstGame, count, yr);
return gameInfo;
}

console.log(getOrgName(games, org, orgName)); // should print ['minecraft', 10000000, 2012]. Because first game in `org` obj