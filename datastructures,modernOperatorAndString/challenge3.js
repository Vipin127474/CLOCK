// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// to convert set into array we use here spread operator
// 1.
const events=[...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const average = 90/gameEvents.size;

console.log(`An event happened, on
average, every ${average} minutes`);

//3.1 bonus part
const time=[...gameEvents.keys()].pop();
// 92 has been popped from gameEvents and returns the popped value
console.log(time);

for (const [min,event] of gameEvents) {
    const half=min<=45? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}:${event}`);
    }


//                 OR

// 2nd way
// for (const [key,value] of gameEvents) {
//     if(key<=45)
//     console.log(`[first half] ${key}:${value}`);
//     else
//     console.log(`[second half half] ${key}:${value}`);
// }
