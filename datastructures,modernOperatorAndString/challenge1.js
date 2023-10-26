// 'use strict';
const game={
team1:'Bayern Munich',
team2:'real madrid',

Players:[[
 'Neuer',
 'Pavard',
 'Martinez',
 'Alaba',
 'Davies',
 'Kimmich',
 'Goretzka',
 'Coman',
 'Muller',
 'Gnarby',
 'Lewandowski',
],
[
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
]],

score: '4:0',
 scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
 'Hummels'],
 date: 'Nov 9th, 2037',
 odds: {
 team1: 11.33,
 x: 3.25,
 team2: 11.33
 },


};
// 1.
const [player1, player2]=game.Players;
console.log(player1, player2);

// 2.
const[gk, ...fieldPlayers]=player1;
console.log(gk,fieldPlayers);

// 3.

const allPlayers=[...player1, ...player2];
console.log(allPlayers);

// 4

const playerFinal=[...player1,'Thiago', 'Coutinho', 'Perisic'];
console.log(playerFinal);

// 5
const{team1, x:draw, team2}=game.odds;
console.log(team1, draw, team2);
// const{odds:{team1, x:draw, team2}}=game;
// console.log(team1, draw, team2);

// 6
printGoals = function(...Players){
    console.log(`${Players.length} scored ${game.score}`);
 }
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Lewandowski', 'Kimmich');

// if we call like this it displayed 1 goal because we here pass only one argument so we have to use spread operator here
// printGoals(game.scored)
printGoals(...game.scored)

// 7.
// here we check who has more odds 
team1<team2 &&
console.log('team1 is more likely to win');

team1>team2 &&
console.log('team2 is more likely to win');

team1==team2 &&
console.log('draw match');

