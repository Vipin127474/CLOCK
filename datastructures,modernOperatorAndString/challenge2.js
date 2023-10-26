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
     team1: 1.33,
     x: 3.25,
     team2: 6.5
     },
    
    
    };
    // 1.
    
    
    for(const [i, Player] of game.scored.entries()) {
       console.log(`Goal ${i+1}: ${Player}`); 
    }
    

    // 2.
    const odds=Object.values(game.odds);
    let average=0;
    for (const odd of odds) {
        average+=odd/odds.length;
    }
    console.log(average);
    
    // 3.
for (const [team, odd] of Object.entries(game.odds)) {
const teamStr= team==='x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odds OF ${teamStr}: ${odd}`);
}


// 4. bonus

const Scorer={};
for (const play of game.scored) {
    Scorer[play] ? Scorer[play]++ : (Scorer[play]=1);
}
console.log(Scorer);